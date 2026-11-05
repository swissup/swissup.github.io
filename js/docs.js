/* Docs UI: theme switch, navigation, "On this page", code blocks, image zoom, motion. */
(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;
  var each = function (list, fn) { Array.prototype.forEach.call(list, fn); };
  var ICON_COPY = '<svg class="i i-sm" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var ICON_CHECK = '<svg class="i i-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

  /* ---------- Light / dark theme ---------- */
  function isDark() {
    var t = root.getAttribute('data-theme');
    return t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* ---------- Clicks on [data-action] ---------- */
  function openSearch() {
    var btn = document.querySelector('.DocSearch-Button');
    if (btn) {
      btn.click();
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');

    if (body.classList.contains('nav-open') && !e.target.closest('.sidebar, [data-action="menu"]')) {
      body.classList.remove('nav-open');
    }
    if (!el) {
      return;
    }
    switch (el.getAttribute('data-action')) {
      case 'theme':
        var next = isDark() ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('docs-theme', next); } catch (err) {}
        break;
      case 'menu':
        body.classList.toggle('nav-open');
        break;
      case 'search':
        openSearch();
        break;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      body.classList.remove('nav-open');
    }
  });

  /* ---------- Sidebar: active page and open branch ---------- */
  function initSidebar() {
    // Active item and open branch are set by the inline script in _includes/sidebar.html
    // before first paint; here we only bring the active item into view.
    var sidebar = document.getElementById('sidebar');
    var active = sidebar && sidebar.querySelector('a.active');
    if (active && active.getBoundingClientRect().bottom > window.innerHeight - 40) {
      sidebar.scrollTop = active.offsetTop - sidebar.clientHeight / 3;
    }
  }

  /* ---------- On this page ---------- */
  function initToc() {
    // The layout decides on the server whether the column is shown (no layout shift);
    // here we only fill it in.
    var toc = document.querySelector('.toc');
    var article = document.querySelector('.prose');
    if (!toc || !article) {
      return;
    }

    var heads = Array.prototype.filter.call(article.querySelectorAll('h2[id], h3[id]'), function (h) {
      // Skip headings inside cards (module, design, edition cards): they are not page sections
      return !h.classList.contains('no_toc') && !h.closest('#markdown-toc, .release, .card, .theme-card, .th-edition, .th-absolute') && h.offsetParent !== null;
    });
    if (!heads.length) {
      return;
    }

    var list = toc.querySelector('ul');
    list.innerHTML = heads.map(function (h) {
      var clone = h.cloneNode(true);
      each(clone.querySelectorAll('.anchorjs-link'), function (a) { a.remove(); });
      var text = clone.textContent.trim().replace(/</g, '&lt;');
      return '<li class="lvl-' + h.tagName.charAt(1) + '"><a href="#' + h.id + '">' + text + '</a></li>';
    }).join('');

    var links = list.querySelectorAll('a');
    var ticking = false;
    function spy() {
      ticking = false;
      var current = 0;
      heads.forEach(function (h, i) {
        if (h.getBoundingClientRect().top < 120) {
          current = i;
        }
      });
      each(links, function (l, i) { l.classList.toggle('active', i === current); });
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(spy);
      }
    }, { passive: true });
    spy();
  }

  /* ---------- Reading progress ---------- */
  function initProgress() {
    var bar = document.querySelector('.progress');
    if (!bar || !document.querySelector('.article')) {
      return;
    }
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ---------- Code blocks: header with language and copy button ---------- */
  function copyText(text) {
    var legacy = function () {
      return new Promise(function (resolve, reject) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        body.appendChild(ta);
        ta.select();
        try {
          if (document.execCommand('copy')) { resolve(); } else { reject(); }
        } catch (err) { reject(err); }
        ta.remove();
      });
    };
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(legacy);
    }
    return legacy();
  }

  function initCode() {
    each(document.querySelectorAll('.prose div.highlighter-rouge, .prose pre:not(.highlight)'), function (block) {
      var pre = block.tagName === 'PRE' ? block : block.querySelector('pre');
      if (!pre || pre.classList.contains('nocopy') || block.closest('.code-block')) {
        return;
      }
      var wrap = block;
      if (block.tagName === 'PRE') {
        wrap = document.createElement('div');
        wrap.className = 'code-block';
        block.parentNode.insertBefore(wrap, block);
        wrap.appendChild(block);
      }
      var lang = (wrap.className.match(/language-([\w-]+)/) || [])[1] || '';
      var labels = { bash: 'Terminal', shell: 'Terminal', sh: 'Terminal', console: 'Terminal', plaintext: 'Text', js: 'JavaScript', javascript: 'JavaScript', php: 'PHP', xml: 'XML', html: 'HTML', css: 'CSS', less: 'LESS', scss: 'SCSS', json: 'JSON', sql: 'SQL', yaml: 'YAML', diff: 'Diff' };
      var head = document.createElement('div');
      head.className = 'code-head';
      head.innerHTML = '<span>' + (labels[lang] || lang.toUpperCase() || 'Code') + '</span>' +
        '<button type="button" class="copy-btn">' + ICON_COPY + '<span>Copy</span></button>';
      wrap.insertBefore(head, wrap.firstChild);

      var btn = head.querySelector('.copy-btn');
      btn.addEventListener('click', function () {
        copyText(pre.innerText.replace(/\n$/, '')).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = ICON_CHECK + '<span>Copied</span>';
          setTimeout(function () {
            btn.classList.remove('copied');
            btn.innerHTML = ICON_COPY + '<span>Copy</span>';
          }, 1600);
        }, function () {
          btn.querySelector('span').textContent = /Mac/.test(navigator.userAgent) ? 'Press ⌘C' : 'Press Ctrl+C';
        });
      });
    });
  }

  /* ---------- Zoom for single images in content (galleries use PhotoSwipe) ---------- */
  function initZoom() {
    var box = null;
    document.addEventListener('click', function (e) {
      var img = e.target.closest('.prose img');
      if (!img || img.closest('a, .gallery, table, .noborder, .promo, .card') || img.classList.contains('noborder') || /\.svg$/.test(img.src)) {
        return;
      }
      if (!box) {
        box = document.createElement('div');
        box.className = 'zoom-box';
        box.innerHTML = '<img alt="">';
        box.addEventListener('click', function () { box.classList.remove('open'); });
        document.addEventListener('keydown', function (ev) {
          if (ev.key === 'Escape') { box.classList.remove('open'); }
        });
        body.appendChild(box);
      }
      box.querySelector('img').src = img.currentSrc || img.src;
      box.querySelector('img').alt = img.alt;
      window.requestAnimationFrame(function () { box.classList.add('open'); });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      each(items, function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    each(items, function (el) { io.observe(el); });
  }

  /* ---------- Heading anchors ---------- */
  function initAnchors() {
    if (window.anchors && !body.classList.contains('no-anchors')) {
      window.anchors.options = { placement: 'right', visible: 'hover', icon: '#' };
      window.anchors.add('.prose h2, .prose h3, .prose h4, .prose h5, .prose h6');
      window.anchors.remove('.no-anchor, .release h3, .card h3, .theme-card h3, .th-edition h3, .th-absolute h3');
    }
  }

  function init() {
    initSidebar();
    initAnchors();
    initCode();
    initToc();
    initProgress();
    initZoom();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
