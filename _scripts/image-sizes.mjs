#!/usr/bin/env node
// Writes _data/image_sizes.json: { "/images/path.png": [width, height], ... }
// The default layout uses it to give <img> tags in Markdown content their size,
// so the page does not jump while screenshots load (layout shift).
//
// Run after adding or replacing images:  node _scripts/image-sizes.mjs
// No dependencies: reads PNG, GIF, JPEG and WebP headers directly.

import { readdirSync, openSync, readSync, closeSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIRS = ['images'];
const EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp']);

function head(file, bytes) {
  const fd = openSync(file, 'r');
  const buf = Buffer.alloc(bytes);
  const n = readSync(fd, buf, 0, bytes, 0);
  closeSync(fd);
  return buf.subarray(0, n);
}

function size(file) {
  const b = head(file, 256 * 1024);
  // PNG
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) {
    return [b.readUInt32BE(16), b.readUInt32BE(20)];
  }
  // GIF
  if (b.toString('ascii', 0, 3) === 'GIF') {
    return [b.readUInt16LE(6), b.readUInt16LE(8)];
  }
  // WebP
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = b.toString('ascii', 12, 16);
    if (chunk === 'VP8X') {
      return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    }
    if (chunk === 'VP8L') {
      const bits = b.readUInt32LE(21);
      return [1 + (bits & 0x3fff), 1 + ((bits >> 14) & 0x3fff)];
    }
    if (chunk === 'VP8 ') {
      return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    }
  }
  // JPEG: walk segments to the first SOFn marker
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1];
      if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      }
      i += 2 + len;
    }
  }
  return null;
}

function walk(dir, out) {
  for (const name of readdirSync(join(ROOT, dir))) {
    const rel = join(dir, name);
    if (statSync(join(ROOT, rel)).isDirectory()) {
      walk(rel, out);
    } else if (EXT.has(extname(name).toLowerCase())) {
      try {
        const s = size(join(ROOT, rel));
        if (s && s[0] > 0 && s[1] > 0) {
          out['/' + rel.split('\\').join('/')] = s;
        }
      } catch (e) {
        // unreadable file: skip, the image just renders without a reserved size
      }
    }
  }
  return out;
}

const sizes = {};
DIRS.forEach((d) => walk(d, sizes));
const sorted = Object.fromEntries(Object.keys(sizes).sort().map((k) => [k, sizes[k]]));
writeFileSync(join(ROOT, '_data/image_sizes.json'), JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"') + '\n');
console.log(`image_sizes.json: ${Object.keys(sorted).length} images`);
