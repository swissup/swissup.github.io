/* Changelog pages: turn "### Version X / > date / list" into a filterable timeline. */
(function () {
  'use strict';

  if (!document.body.classList.contains('changelog-page')) {
    return;
  }

  function ready() {
    document.body.classList.add('cl-ready');
  }

  var article = document.querySelector('.prose');
  if (!article) {
    ready();
    return;
  }

  var TYPES = {
    security: { label: 'Security', cls: 'badge-danger', re: /\bsecurity\b|\bcve-|\bxss\b|vulnerab/i },
    fixed: { label: 'Fixed', cls: 'badge-warn', re: /^\s*(fix(ed|es)?\b|bug ?fix|resolved|corrected)|\b(fixed|bugfix)\b/i },
    added: { label: 'Added', cls: 'badge-ok', re: /^\s*(add(ed)?\b|new\b|introduc|support|compatib|implement)/i },
    removed: { label: 'Removed', cls: '', re: /^\s*(remov|drop|deprecat)/i },
    improved: { label: 'Improved', cls: 'badge-info', re: /.*/ }
  };
  var ORDER = ['security', 'fixed', 'added', 'removed', 'improved'];

  function classify(text) {
    for (var i = 0; i < ORDER.length; i++) {
      if (TYPES[ORDER[i]].re.test(text)) {
        return ORDER[i];
      }
    }
    return 'improved';
  }

  // Collect releases: an h2 or h3 like "Version 1.2.3", "1.2.3" or "v1.2.3" starts one
  // (older entries in some changelogs use h2, newer ones h3)
  var heads = Array.prototype.filter.call(article.querySelectorAll('h2, h3'), function (h) {
    return /^\s*(version\s*)?v?\d+\.\d+/i.test(h.textContent);
  });
  if (!heads.length) {
    ready();
    return;
  }

  // One timeline per section: a changelog may hold several products under their own h2
  var timelines = [];
  var timeline = null;

  var lastYear = null;
  var releases = [];

  // Badge + text column for one change. Any nested lists stay inside the text column.
  function tagItem(li) {
    if (li.tagName !== 'LI') { return; }
    var type = classify(li.textContent);
    li.classList.add('cl-item');
    li.setAttribute('data-type', type);
    var text = document.createElement('div');
    text.className = 'cl-text';
    while (li.firstChild) {
      text.appendChild(li.firstChild);
    }
    li.innerHTML = '<span class="badge ' + TYPES[type].cls + '">' + TYPES[type].label + '</span>';
    li.appendChild(text);
  }

  heads.forEach(function (h, index) {
    if (!timeline || h.previousElementSibling !== timeline) {
      timeline = document.createElement('div');
      timeline.className = 'timeline';
      h.parentNode.insertBefore(timeline, h);
      timelines.push(timeline);
      lastYear = null;
    }
    var version = h.textContent.replace(/^\s*version\s*/i, '').trim();
    var nodes = [];
    var next = h.nextElementSibling;
    while (next && heads.indexOf(next) === -1 && !/^H[12]$/.test(next.tagName)) {
      nodes.push(next);
      next = next.nextElementSibling;
    }

    var date = '';
    if (nodes[0] && nodes[0].tagName === 'BLOCKQUOTE') {
      var dateEl = nodes.shift();
      date = dateEl.textContent.trim();
      dateEl.remove();
    }
    var year = (date.match(/(19|20)\d\d/) || [])[0];
    if (year && year !== lastYear) {
      var sep = document.createElement('div');
      sep.className = 'year-sep';
      sep.id = 'y' + year;
      sep.textContent = year;
      timeline.appendChild(sep);
      lastYear = year;
    }

    var isLatest = !timeline.querySelector('.release');
    // Position inside its own timeline: each timeline shows its first PAGE releases
    var pos = timeline.querySelectorAll('.release').length;
    var rel = document.createElement('section');
    rel.className = 'release' + (isLatest ? ' latest' : '');
    rel.setAttribute('data-pos', pos);
    rel.id = h.id;
    rel.innerHTML = '<div class="release-meta"><div class="ver"><a href="#' + h.id + '">' + version.replace(/</g, '&lt;') + '</a></div>' +
      (date ? '<time>' + date.replace(/</g, '&lt;') + '</time>' : '') +
      (isLatest ? '<span class="badge badge-accent">Latest</span>' : '') + '</div>';
    var bodyEl = document.createElement('div');
    bodyEl.className = 'release-body';
    nodes.forEach(function (n) { bodyEl.appendChild(n); });
    rel.appendChild(bodyEl);

    // "Extensions Updates", "Hyva Extensions Updates", "SEO Modules Updates" (theme changelogs):
    // fold each per-module list into its own <details>
    Array.prototype.forEach.call(bodyEl.querySelectorAll(':scope > p'), function (p) {
      var list = p.nextElementSibling;
      if (!list || list.tagName !== 'UL' || !/^\s*(hyv[aä]\s+)?(extensions?|modules?)\b.*\bupdates?\b|^[\w ]{0,30}\bmodules\s+updates?\s*$|^\s*bundled\b/i.test(p.textContent)) {
        return;
      }
      var details = document.createElement('details');
      details.className = 'cl-ext';
      var count = list.querySelectorAll(':scope > li').length;
      details.innerHTML = '<summary><span>' + p.textContent.trim().replace(/</g, '&lt;') + '</span>' +
        '<span class="count">' + count + (count === 1 ? ' module' : ' modules') + '</span></summary>';
      p.parentNode.insertBefore(details, p);
      details.appendChild(list);
      p.remove();
    });

    // Tag changes. A top-level item that holds its own list (e.g. "Business Theme" with
    // its fixes) becomes a group: its title stays plain, the nested items get the tags.
    Array.prototype.forEach.call(bodyEl.querySelectorAll(':scope > ul > li'), function (li) {
      var nested = li.querySelector(':scope > ul, :scope > ol');
      if (nested && nested.children.length) {
        li.classList.add('cl-group');
        Array.prototype.forEach.call(nested.children, tagItem);
      } else {
        tagItem(li);
      }
    });

    h.remove();
    timeline.appendChild(rel);
    releases.push(rel);
  });

  function esc(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  }

  // Tabs: a changelog with several products under their own h2 (e.g. "## Hyvä Compatibility")
  // shows one product at a time. A timeline without an h2 is named after the module.
  var panels = [];
  if (timelines.length > 1) {
    var moduleName = document.querySelector('.module-switch strong');
    timelines.forEach(function (t) {
      var panel = document.createElement('div');
      panel.className = 'cl-panel';
      var intro = [];
      var title = '';
      var prev = t.previousElementSibling;
      while (prev && !prev.classList.contains('timeline') && !prev.classList.contains('cl-panel')) {
        if (prev.tagName === 'H2') {
          title = prev.textContent.trim();
          panel.id = prev.id;
          prev.remove();
          break;
        }
        intro.unshift(prev);
        prev = prev.previousElementSibling;
      }
      t.parentNode.insertBefore(panel, t);
      if (title) {
        intro.forEach(function (n) { panel.appendChild(n); });
      }
      panel.appendChild(t);
      var latest = t.querySelector('.release .ver a');
      panels.push({
        el: panel,
        timeline: t,
        label: title || (moduleName ? moduleName.textContent.trim() : 'Changelog'),
        version: latest ? latest.textContent : ''
      });
    });
  }
  var current = panels[0] || null;

  function scope() {
    return current ? current.el : article;
  }

  // Toolbar with filters, counts are for the active tab
  var toolbar = document.createElement('div');
  toolbar.className = 'cl-toolbar';
  toolbar.innerHTML = '<div class="chips" role="group" aria-label="Filter by type"></div>' +
    '<label class="mini-search"><svg class="i i-sm" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
    '<input type="search" placeholder="Filter changes…" aria-label="Filter changes"></label>';
  var chips = toolbar.querySelector('.chips');
  var first = current ? current.el : timelines[0];
  first.parentNode.insertBefore(toolbar, first);

  var tabs = null;
  if (panels.length) {
    tabs = document.createElement('div');
    tabs.className = 'cl-tabs';
    tabs.setAttribute('role', 'tablist');
    tabs.innerHTML = panels.map(function (p, i) {
      return '<button type="button" role="tab" class="cl-tab" data-tab="' + i + '">' + esc(p.label) +
        (p.version ? '<span class="ver">' + esc(p.version) + '</span>' : '') + '</button>';
    }).join('');
    toolbar.parentNode.insertBefore(tabs, toolbar);
  }

  // Search hits in the other tabs
  var elsewhere = document.createElement('p');
  elsewhere.className = 'cl-elsewhere';
  elsewhere.hidden = true;
  toolbar.parentNode.insertBefore(elsewhere, toolbar.nextSibling);

  var empty = document.createElement('p');
  empty.className = 'empty';
  empty.textContent = 'No changes match this filter.';

  // A link to an older version shows all releases, a link to a tab does not
  function linksVersion(id) {
    var target = id && document.getElementById(id);
    return !!target && !target.classList.contains('cl-panel');
  }

  var hashId = decodeURIComponent(window.location.hash.substring(1));
  var PAGE = 12;
  var limit = linksVersion(hashId) ? releases.length : PAGE;
  var older = 0;
  var more = document.createElement('div');
  more.className = 'show-more';
  more.innerHTML = '<button type="button" class="btn"></button>';

  var state = { type: 'all', q: '' };

  function renderChips() {
    var counts = {};
    Array.prototype.forEach.call(scope().querySelectorAll('.cl-item'), function (li) {
      var type = li.getAttribute('data-type');
      counts[type] = (counts[type] || 0) + 1;
    });
    if (state.type !== 'all' && !counts[state.type]) {
      state.type = 'all';
    }
    chips.innerHTML = '<button type="button" class="chip' + (state.type === 'all' ? ' active' : '') + '" data-type="all">All</button>' +
      ORDER.filter(function (t) { return counts[t]; }).map(function (t) {
        return '<button type="button" class="chip' + (state.type === t ? ' active' : '') + '" data-type="' + t + '">' +
          TYPES[t].label + '<span class="count">' + counts[t] + '</span></button>';
      }).join('');
  }

  // Place the "Show older" button and the empty notice in the active tab
  function layout() {
    var timeline = current ? current.timeline : timelines[timelines.length - 1];
    var inScope = releases.filter(function (rel) { return scope().contains(rel); });
    older = inScope.filter(function (rel) { return +rel.getAttribute('data-pos') >= PAGE; }).length;
    more.querySelector('button').textContent = 'Show older releases (' + older + ')';
    // Right below the timeline it unfolds (the first one with older releases), not after a later section
    var moreAfter = timeline;
    if (!current) {
      timelines.some(function (t) {
        if (t.querySelector('.release[data-pos="' + PAGE + '"]')) { moreAfter = t; return true; }
        return false;
      });
    }
    moreAfter.parentNode.insertBefore(more, moreAfter.nextSibling);
    timeline.parentNode.insertBefore(empty, timeline.nextSibling);
  }

  function activate(panel) {
    current = panel;
    panels.forEach(function (p, i) {
      var on = p === panel;
      p.el.hidden = !on;
      var tab = tabs.querySelector('[data-tab="' + i + '"]');
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
    });
    renderChips();
    layout();
    apply();
  }

  // The tab that holds an element from the URL hash (a version or a section)
  function panelOf(id) {
    var target = id && document.getElementById(id);
    if (!target) { return null; }
    for (var i = 0; i < panels.length; i++) {
      if (panels[i].el === target || panels[i].el.contains(target)) { return panels[i]; }
    }
    return null;
  }

  function apply() {
    var filtering = state.type !== 'all' || state.q;
    var q = state.q.toLowerCase();
    var visible = 0;
    var hits = panels.map(function () { return 0; });
    releases.forEach(function (rel) {
      var items = Array.prototype.filter.call(rel.querySelectorAll('.cl-item'), function (li) {
        return !li.closest('.cl-ext');
      });
      var any = !items.length && !filtering;
      // Folded module updates: match the search text, open the block on a hit
      Array.prototype.forEach.call(rel.querySelectorAll('.cl-ext'), function (d) {
        var hit = state.type === 'all' && q && d.textContent.toLowerCase().indexOf(q) > -1;
        if (hit) { d.open = true; any = true; }
        d.hidden = filtering && !hit;
      });
      Array.prototype.forEach.call(items, function (li) {
        var ok = (state.type === 'all' || li.getAttribute('data-type') === state.type) &&
          (!q || li.textContent.toLowerCase().indexOf(q) > -1);
        li.classList.toggle('is-hidden', !ok);
        any = any || ok;
      });
      // Hide a group when none of its changes match
      Array.prototype.forEach.call(rel.querySelectorAll('.cl-group'), function (g) {
        g.classList.toggle('is-hidden', !g.querySelector('.cl-item:not(.is-hidden)'));
      });
      var show = any && (filtering || +rel.getAttribute('data-pos') < limit);
      rel.classList.toggle('is-hidden', !show);
      if (show && scope().contains(rel)) {
        visible++;
      }
      if (any && filtering) {
        panels.forEach(function (p, i) { if (p.el.contains(rel)) { hits[i]++; } });
      }
    });
    Array.prototype.forEach.call(document.querySelectorAll('.timeline .year-sep'), function (sep) {
      var n = sep.nextElementSibling, has = false;
      while (n && !n.classList.contains('year-sep')) {
        if (!n.classList.contains('is-hidden')) { has = true; }
        n = n.nextElementSibling;
      }
      sep.hidden = !has;
    });
    empty.classList.toggle('show', !visible);
    more.hidden = filtering || !older || limit >= releases.length;

    var links = panels.map(function (p, i) {
      return p !== current && hits[i] ? '<button type="button" data-tab="' + i + '">' + esc(p.label) + ' (' + hits[i] + ')</button>' : '';
    }).filter(Boolean);
    elsewhere.innerHTML = links.length ? 'Also found in: ' + links.join(', ') : '';
    elsewhere.hidden = !links.length;
  }

  chips.addEventListener('click', function (e) {
    var b = e.target.closest('[data-type]');
    if (!b) { return; }
    state.type = b.getAttribute('data-type');
    Array.prototype.forEach.call(chips.querySelectorAll('.chip'), function (c) { c.classList.toggle('active', c === b); });
    apply();
  });
  toolbar.querySelector('input').addEventListener('input', function () {
    state.q = this.value.trim();
    apply();
  });
  more.querySelector('button').addEventListener('click', function () {
    limit = releases.length;
    apply();
  });

  function onTab(e) {
    var b = e.target.closest('[data-tab]');
    if (!b) { return; }
    var panel = panels[+b.getAttribute('data-tab')];
    activate(panel);
    // Keep the tab in the URL, so the link opens the same tab
    var hash = panel === panels[0] || !panel.el.id ? '' : '#' + panel.el.id;
    history.replaceState(null, '', window.location.pathname + window.location.search + hash);
  }
  if (tabs) {
    tabs.addEventListener('click', onTab);
    elsewhere.addEventListener('click', onTab);
    tabs.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') { return; }
      var i = panels.indexOf(current) + (e.key === 'ArrowRight' ? 1 : -1);
      var panel = panels[(i + panels.length) % panels.length];
      tabs.querySelector('[data-tab="' + panels.indexOf(panel) + '"]').focus();
      onTab({ target: tabs.querySelector('[data-tab="' + panels.indexOf(panel) + '"]') });
    });
  }

  window.addEventListener('hashchange', function () {
    var id = decodeURIComponent(window.location.hash.substring(1));
    var panel = panelOf(id);
    if (panel && panel !== current) { activate(panel); }
    if (linksVersion(id) && limit < releases.length) { limit = releases.length; apply(); }
  });

  if (current) {
    activate(panelOf(hashId) || current);
  } else {
    renderChips();
    layout();
    apply();
  }
  ready();

  // Releases were rebuilt after load: scroll to the version from the URL hash again
  if (window.location.hash) {
    var target = document.getElementById(hashId);
    if (target) {
      target.scrollIntoView();
    }
  }
})();
