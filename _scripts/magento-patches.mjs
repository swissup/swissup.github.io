// Syncs Adobe's isolated security patch registry into _data/magento_patches/
// and records which patch files and monthly zips are public or need Composer keys.
//
// Usage: node _scripts/magento-patches.mjs

import { readFile, writeFile } from 'node:fs/promises';

const BASE_URL = 'https://repo.magento.com/patch';
const REGISTRY_URL = `${BASE_URL}/patch-registry.json`;
const DATA_DIR = new URL('../_data/magento_patches/', import.meta.url);
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const MONTHLY_ID = /^(\w+)-(\d{4})-(\d{2})-\d{3}-(CE|EE)$/;

function fail(message) {
    console.error(`::error::${message}`);
    process.exit(1);
}

function validate(registry) {
    if (!String(registry?._schema?.version).startsWith('1.')) {
        fail(`Unsupported registry schema version: ${registry?._schema?.version}`);
    }

    const patches = Object.entries(registry.patches || {});

    if (!patches.length) {
        fail('Registry has no patches');
    }

    for (const [id, patch] of patches) {
        const valid = Array.isArray(patch.applies_to) && patch.applies_to.length
            && Array.isArray(patch.requires)
            && Array.isArray(patch.cves)
            && registry._areas?.[patch.area]
            && /^\d{4}-\d{2}-\d{2}$/.test(patch.released)
            && /^[\w.-]+\.diff$/.test(patch.file_name)
            && /^[0-9a-f]{64}$/.test(patch.sha256);

        if (!valid) {
            fail(`Invalid registry entry: ${id}`);
        }
    }
}

// 200 - public download, redirect to /patch/auth/ - needs Composer keys, 404 - not published.
async function access(file) {
    for (let attempt = 1; ; attempt++) {
        try {
            const response = await fetch(`${BASE_URL}/${file}`, { method: 'HEAD', redirect: 'manual' });
            const location = response.headers.get('location') || '';

            if (response.status === 200) return 'public';
            if (response.status === 404) return 'missing';
            if (response.status >= 300 && response.status < 400 && location.includes('/patch/auth/')) return 'auth';

            throw new Error(`HTTP ${response.status}`);
        } catch (e) {
            if (attempt === 3) {
                fail(`Unable to check ${file}: ${e.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
        }
    }
}

async function checkAll(files) {
    const result = {};
    const queue = [...files];

    await Promise.all(Array.from({ length: 6 }, async () => {
        while (queue.length) {
            const file = queue.shift();
            result[file] = await access(file);
        }
    }));

    return result;
}

// Monthly zips are not listed in the registry, but follow the 2-4-8-p5-oct-2026.zip convention.
function zipCandidates(patches) {
    const zips = {};

    for (const [id, patch] of Object.entries(patches)) {
        const match = id.match(MONTHLY_ID);

        if (!match) continue;

        for (const version of patch.applies_to) {
            const [, , year, month] = match;
            const file = `${version.replaceAll('.', '-')}-${MONTHS[month - 1]}-${year}.zip`;

            zips[file] = { version, month: `${year}-${month}`, file };
        }
    }

    return Object.values(zips);
}

function sortKeys(object) {
    return Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
}

async function warnUnmappedB2B(patches) {
    const mapping = await readFile(new URL('b2b.yml', DATA_DIR), 'utf8');
    const versions = new Set(Object.values(patches)
        .filter(patch => patch.area === 'B2B')
        .flatMap(patch => patch.applies_to));

    for (const version of versions) {
        if (!mapping.includes(`'${version}'`)) {
            console.log(`::warning::B2B ${version} is missing in _data/magento_patches/b2b.yml`);
        }
    }
}

const response = await fetch(REGISTRY_URL);

if (!response.ok) {
    fail(`Unable to download ${REGISTRY_URL}: HTTP ${response.status}`);
}

const raw = await response.text();
let registry;

try {
    registry = JSON.parse(raw);
} catch (e) {
    fail(`Registry is not valid JSON: ${e.message}`);
}

validate(registry);

const patches = registry.patches;
const diffs = await checkAll(Object.values(patches).map(patch => patch.file_name));
const candidates = zipCandidates(patches);
const zipAccess = await checkAll(candidates.map(zip => zip.file));
const zips = candidates
    .filter(zip => zipAccess[zip.file] !== 'missing')
    .map(zip => ({ ...zip, access: zipAccess[zip.file] }))
    .sort((a, b) => a.version.localeCompare(b.version) || a.month.localeCompare(b.month));

for (const [file, state] of Object.entries(diffs)) {
    if (state === 'missing') {
        console.log(`::warning::${file} is listed in the registry but not downloadable`);
    }
}

await warnUnmappedB2B(patches);
await writeFile(new URL('registry.json', DATA_DIR), raw.endsWith('\n') ? raw : `${raw}\n`);
await writeFile(new URL('files.json', DATA_DIR), JSON.stringify({ diffs: sortKeys(diffs), zips }, null, 2) + '\n');

console.log(`Synced ${Object.keys(patches).length} patches and ${zips.length} zips`);
