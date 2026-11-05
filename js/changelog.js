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

  var counts = {};
  var lastYear = null;
  var releases = [];

  // Badge + text column for one change. Any nested lists stay inside the text column.
  function tagItem(li) {
    if (li.tagName !== 'LI') { return; }
    var type = classify(li.textContent);
    counts[type] = (counts[type] || 0) + 1;
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
    var rel = document.createElement('section');
    rel.className = 'release' + (isLatest ? ' latest' : '');
    rel.id = h.id;
    rel.innerHTML = '<div class="release-meta"><div class="ver"><a href="#' + h.id + '">' + version.replace(/</g, '&lt;') + '</a></div>' +
      (date ? '<time>' + date.replace(/</g, '&lt;') + '</time>' : '') +
      (isLatest ? '<span class="badge badge-accent">Latest</span>' : '') + '</div>';
    var bodyEl = document.createElement('div');
    bodyEl.className = 'release-body';
    nodes.forEach(function (n) { bodyEl.appendChild(n); });
    rel.appendChild(bodyEl);

    // "Extensions Updates" (theme changelogs): fold the per-module list into <details>
    Array.prototype.forEach.call(bodyEl.querySelectorAll(':scope > p'), function (p) {
      var list = p.nextElementSibling;
      if (!list || list.tagName !== 'UL' || !/^\s*(extensions?|modules?)\b.*\bupdates?\b|^\s*bundled\b/i.test(p.textContent)) {
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

  // Toolbar with filters
  var toolbar = document.createElement('div');
  toolbar.className = 'cl-toolbar';
  toolbar.innerHTML = '<div class="chips" role="group" aria-label="Filter by type"><button type="button" class="chip active" data-type="all">All</button>' +
    ORDER.filter(function (t) { return counts[t]; }).map(function (t) {
      return '<button type="button" class="chip" data-type="' + t + '">' + TYPES[t].label + '<span class="count">' + counts[t] + '</span></button>';
    }).join('') + '</div>' +
    '<label class="mini-search"><svg class="i i-sm" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
    '<input type="search" placeholder="Filter changes…" aria-label="Filter changes"></label>';
  timelines[0].parentNode.insertBefore(toolbar, timelines[0]);
  var lastTimeline = timelines[timelines.length - 1];

  var empty = document.createElement('p');
  empty.className = 'empty';
  empty.textContent = 'No changes match this filter.';
  lastTimeline.parentNode.insertBefore(empty, lastTimeline.nextSibling);

  var PAGE = 12;
  var limit = window.location.hash ? releases.length : PAGE;
  var more = document.createElement('div');
  more.className = 'show-more';
  more.innerHTML = '<button type="button" class="btn">Show older releases (' + (releases.length - PAGE) + ')</button>';
  empty.parentNode.insertBefore(more, empty.nextSibling);

  var state = { type: 'all', q: '' };

  function apply() {
    var filtering = state.type !== 'all' || state.q;
    var q = state.q.toLowerCase();
    var visible = 0;
    releases.forEach(function (rel, i) {
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
      var show = any && (filtering || i < limit);
      rel.classList.toggle('is-hidden', !show);
      if (show) {
        visible++;
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
    more.hidden = filtering || limit >= releases.length;
  }

  toolbar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-type]');
    if (!b) { return; }
    Array.prototype.forEach.call(toolbar.querySelectorAll('.chip'), function (c) { c.classList.toggle('active', c === b); });
    state.type = b.getAttribute('data-type');
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
  window.addEventListener('hashchange', function () {
    if (limit < releases.length) { limit = releases.length; apply(); }
  });

  apply();
  ready();

  // Releases were rebuilt after load: scroll to the version from the URL hash again
  if (window.location.hash) {
    var target = document.getElementById(decodeURIComponent(window.location.hash.substring(1)));
    if (target) {
      target.scrollIntoView();
    }
  }
})();
