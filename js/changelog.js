/* Changelog pages: turn "### Version X / > date / list" into a filterable timeline. */
(function () {
  'use strict';

  if (!document.body.classList.contains('changelog-page')) {
    return;
  }

  var article = document.querySelector('.prose');
  if (!article) {
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

  // Collect releases: each h3 with "version"-like text starts one
  var heads = Array.prototype.filter.call(article.querySelectorAll('h3'), function (h) {
    return /\d+\.\d+/.test(h.textContent);
  });
  if (heads.length < 2) {
    return;
  }

  var timeline = document.createElement('div');
  timeline.className = 'timeline';
  heads[0].parentNode.insertBefore(timeline, heads[0]);

  var counts = {};
  var lastYear = null;
  var releases = [];

  heads.forEach(function (h, index) {
    var version = h.textContent.replace(/^\s*version\s*/i, '').trim();
    var nodes = [];
    var next = h.nextElementSibling;
    while (next && next !== heads[index + 1] && !/^H[12]$/.test(next.tagName)) {
      nodes.push(next);
      next = next.nextElementSibling;
    }

    var date = '';
    if (nodes[0] && nodes[0].tagName === 'BLOCKQUOTE') {
      date = nodes.shift().textContent.trim();
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

    var rel = document.createElement('section');
    rel.className = 'release' + (index === 0 ? ' latest' : '');
    rel.id = h.id;
    rel.innerHTML = '<div class="release-meta"><div class="ver"><a href="#' + h.id + '">' + version.replace(/</g, '&lt;') + '</a></div>' +
      (date ? '<time>' + date.replace(/</g, '&lt;') + '</time>' : '') +
      (index === 0 ? '<span class="badge badge-accent">Latest</span>' : '') + '</div>';
    var bodyEl = document.createElement('div');
    bodyEl.className = 'release-body';
    nodes.forEach(function (n) { bodyEl.appendChild(n); });
    rel.appendChild(bodyEl);

    // Tag top-level list items
    Array.prototype.forEach.call(bodyEl.querySelectorAll(':scope > ul > li'), function (li) {
      var type = classify(li.textContent);
      counts[type] = (counts[type] || 0) + 1;
      li.setAttribute('data-type', type);
      var text = document.createElement('span');
      while (li.firstChild) {
        text.appendChild(li.firstChild);
      }
      li.innerHTML = '<span class="badge ' + TYPES[type].cls + '">' + TYPES[type].label + '</span>';
      li.appendChild(text);
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
  timeline.parentNode.insertBefore(toolbar, timeline);

  var empty = document.createElement('p');
  empty.className = 'empty';
  empty.textContent = 'No changes match this filter.';
  timeline.parentNode.insertBefore(empty, timeline.nextSibling);

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
      var items = rel.querySelectorAll('.release-body > ul > li');
      var any = !items.length && !filtering;
      Array.prototype.forEach.call(items, function (li) {
        var ok = (state.type === 'all' || li.getAttribute('data-type') === state.type) &&
          (!q || li.textContent.toLowerCase().indexOf(q) > -1);
        li.classList.toggle('is-hidden', !ok);
        any = any || ok;
      });
      var show = any && (filtering || i < limit);
      rel.classList.toggle('is-hidden', !show);
      if (show) {
        visible++;
      }
    });
    Array.prototype.forEach.call(timeline.querySelectorAll('.year-sep'), function (sep) {
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
})();
