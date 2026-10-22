(function () {
    'use strict';

    var data = JSON.parse(document.getElementById('sp-data').textContent),
        AREAS = { os: ['CE'], commerce: ['CE', 'EE'], b2b: ['CE', 'EE', 'B2B'] },
        AREA_LABELS = { CE: 'Open Source', EE: 'Commerce', B2B: 'B2B' },
        MONTHLY = /-\d{4}-\d{2}-\d{3}-/,
        versionSelect = document.getElementById('sp-version'),
        b2bSelect = document.getElementById('sp-b2b'),
        b2bField = document.getElementById('sp-b2b-field'),
        editionField = document.getElementById('sp-edition'),
        notice = document.getElementById('sp-notice'),
        result = document.getElementById('sp-result'),
        patches = Object.keys(data.patches).map(function (id) {
            return Object.assign({ id: id }, data.patches[id]);
        });

    function el(tag, attrs, children) {
        var node = document.createElement(tag);

        Object.keys(attrs || {}).forEach(function (key) {
            node.setAttribute(key, attrs[key]);
        });
        [].concat(children || []).forEach(function (child) {
            node.append(child);
        });

        return node;
    }

    function parseVersion(version) {
        var m = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-p(\d+))?$/) || [];

        return [m[1], m[2], m[3], m[4] || 0].map(Number);
    }

    function compareDesc(a, b) {
        var x = parseVersion(a), y = parseVersion(b), i;

        for (i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) return y[i] - x[i];
        }

        return 0;
    }

    function line(version) {
        return version.split('-')[0];
    }

    function unique(values) {
        return values.filter(function (value, i) {
            return values.indexOf(value) === i;
        });
    }

    // Magento versions come from CE/EE patches. B2B patches use B2B versions, mapped in b2b.yml.
    var versions = unique(patches
        .filter(function (p) { return p.area === 'CE' || p.area === 'EE'; })
        .reduce(function (all, p) { return all.concat(p.applies_to); }, []))
        .sort(compareDesc);

    var latestInLine = {};
    versions.forEach(function (v) {
        latestInLine[line(v)] = latestInLine[line(v)] || v;
    });

    function fillVersions() {
        var groups = {};

        versions.forEach(function (v) {
            if (!groups[line(v)]) {
                groups[line(v)] = el('optgroup', { label: line(v) });
                versionSelect.append(groups[line(v)]);
            }
            groups[line(v)].append(el('option', { value: v }, v));
        });
    }

    function fillB2B(version, selected) {
        var options = data.b2b[version] || [];

        b2bSelect.replaceChildren.apply(b2bSelect, options.map(function (v) {
            return el('option', { value: v }, v);
        }));
        if (options.indexOf(selected) !== -1) {
            b2bSelect.value = selected;
        }
    }

    // Required patches go first, the rest keep release date order.
    function applyOrder(list) {
        var byId = {}, done = {}, ordered = [];

        list.forEach(function (p) { byId[p.id] = p; });
        list.sort(function (a, b) {
            return a.released.localeCompare(b.released)
                || Object.keys(AREA_LABELS).indexOf(a.area) - Object.keys(AREA_LABELS).indexOf(b.area)
                || a.id.localeCompare(b.id);
        });

        function visit(p) {
            if (done[p.id]) return;
            done[p.id] = true;
            p.requires.forEach(function (id) {
                if (byId[id]) visit(byId[id]);
            });
            ordered.push(p);
        }

        list.forEach(visit);

        return ordered;
    }

    function url(file) {
        return data.baseUrl + '/' + file;
    }

    function download(file, access, label) {
        var link = el('a', { href: url(file) }, label || file);

        if (access === 'auth') {
            link.prepend(el('span', {
                'class': 'sp-lock',
                title: 'Adobe Commerce license holders only: log in with your Composer keys'
            }, '\u{1F512} '));
        }

        return link;
    }

    // navigator.clipboard is available on https only.
    function copy(text) {
        var textarea;

        if (navigator.clipboard) {
            return navigator.clipboard.writeText(text);
        }

        textarea = el('textarea', { readonly: '', style: 'position:absolute;left:-9999px' }, text);
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }

    function copyButton(label, text) {
        var button = el('button', { type: 'button', 'class': 'sp-copy', title: text }, label);

        button.addEventListener('click', function () {
            copy(text);
            button.textContent = 'Copied';
            setTimeout(function () { button.textContent = label; }, 1500);
        });

        return button;
    }

    function cves(list) {
        var links = list.map(function (cve) {
            return el('a', { href: 'https://nvd.nist.gov/vuln/detail/' + cve }, cve);
        });

        if (!list.length) return '—';
        if (list.length <= 2) return el('div', { 'class': 'sp-cves' }, links);

        return el('details', {}, [
            el('summary', {}, list.length + ' CVEs'),
            el('div', { 'class': 'sp-cves' }, links)
        ]);
    }

    function table(list) {
        var ids = list.map(function (p) { return p.id; });

        return el('table', { 'class': 'sp-table' }, [
            el('thead', {}, el('tr', {}, ['#', 'Patch ID', 'Released', 'Component', 'CVEs', 'Requires', 'Download']
                .map(function (title) { return el('th', {}, title); }))),
            el('tbody', {}, list.map(function (p, i) {
                var missing = p.requires.filter(function (id) { return ids.indexOf(id) === -1; });

                return el('tr', { id: p.id }, [
                    el('td', {}, String(i + 1)),
                    el('td', {}, el('code', {}, p.id)),
                    el('td', { 'class': 'sp-nowrap' }, p.released),
                    el('td', {}, AREA_LABELS[p.area] || p.area),
                    el('td', {}, cves(p.cves)),
                    el('td', {}, p.requires.length ? el('div', { 'class': 'sp-requires' }, p.requires.map(function (id) {
                        return el('code', missing.indexOf(id) === -1 ? {} : { 'class': 'sp-missing', title: 'Not listed for this selection' }, id);
                    })) : '—'),
                    el('td', {}, [
                        download(p.file_name, data.files.diffs[p.file_name]),
                        el('br'),
                        copyButton('Copy SHA-256', p.sha256)
                    ])
                ]);
            }))
        ]);
    }

    function zips(version) {
        var list = data.files.zips.filter(function (zip) { return zip.version === version; }).reverse();

        if (!list.length) return [];

        return [
            el('h3', {}, 'Monthly zips for ' + version),
            el('p', {}, 'Each zip bundles that month\'s Open Source, Commerce and B2B patches for ' + version + '.'),
            el('ul', { 'class': 'sp-zips' }, list.map(function (zip) {
                var parts = zip.month.split('-'),
                    label = new Date(parts[0], parts[1] - 1).toLocaleString('en', { month: 'long', year: 'numeric' });

                return el('li', {}, [download(zip.file, zip.access, label), ' — ', el('code', {}, zip.file)]);
            }))
        ];
    }

    function showNotice(messages) {
        notice.replaceChildren.apply(notice, messages.map(function (m) { return el('p', {}, m); }));
        notice.hidden = !messages.length;
    }

    function render() {
        var version = versionSelect.value,
            edition = editionField.querySelector('input:checked').value,
            b2bVersion = b2bSelect.value,
            areas = AREAS[edition],
            messages = [],
            params = new URLSearchParams({ version: version, edition: edition }),
            list, latest;

        b2bField.hidden = edition !== 'b2b' || !b2bSelect.options.length;

        // Patches for other components (PageBuilder, Inventory...) use component versions and are skipped.
        list = applyOrder(patches.filter(function (p) {
            if (areas.indexOf(p.area) === -1) return false;

            return p.applies_to.indexOf(p.area === 'B2B' ? b2bVersion : version) !== -1;
        }));

        latest = latestInLine[line(version)];
        if (version !== latest) {
            messages.push('Adobe releases monthly isolated patches only for the latest patch level of each line. ' +
                'Upgrade to ' + latest + ' to receive them. Only hotfixes that also cover ' + version + ' are listed below.');
        }
        if (edition === 'b2b' && !b2bSelect.options.length) {
            messages.push('No B2B patches are released for Magento ' + version + '.');
        }
        if (edition === 'os' && list.some(function (p) { return data.files.diffs[p.file_name] === 'auth'; })) {
            messages.push('Some patches for Magento Open Source ' + version + ' are available to Adobe Commerce ' +
                'license holders only (marked \u{1F512}): downloads require Adobe Commerce Composer keys.');
        }
        showNotice(messages);

        if (edition === 'b2b' && b2bVersion) {
            params.set('b2b', b2bVersion);
        }
        history.replaceState(null, '', '?' + params);

        if (!list.length) {
            result.replaceChildren(el('p', {}, 'No isolated patches are released for this selection.'));
            return;
        }

        result.replaceChildren.apply(result, [
            el('div', { 'class': 'sp-toolbar' }, [
                el('strong', {}, list.length + (list.length === 1 ? ' patch' : ' patches') + ' for Magento ' + version +
                    (edition === 'b2b' && b2bVersion ? ' with B2B ' + b2bVersion : '')),
                copyButton('Copy patch IDs', list.map(function (p) { return p.id; }).join('\n'))
            ]),
            table(list)
        ].concat(zips(version)));
    }

    var query = new URLSearchParams(location.search),
        edition = editionField.querySelector('input[value="' + query.get('edition') + '"]');

    fillVersions();
    if (versions.indexOf(query.get('version')) !== -1) {
        versionSelect.value = query.get('version');
    }
    if (edition) {
        edition.checked = true;
    }
    fillB2B(versionSelect.value, query.get('b2b'));

    versionSelect.addEventListener('change', function () {
        fillB2B(versionSelect.value, b2bSelect.value);
        render();
    });
    b2bSelect.addEventListener('change', render);
    editionField.addEventListener('change', render);

    render();
})();
