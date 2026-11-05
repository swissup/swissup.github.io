/* Home page: module filters and Argento screenshots slideshow. */
(function () {
  'use strict';

  var grid = document.getElementById('module-grid');
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));

    // "botprot", "bot prot", "bot-prot" and "Bot Protection" should all match:
    // compare lowercase text without spaces, hyphens, dots, slashes and accents (Hyvä = hyva)
    var normalize = function (text) {
      return text.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[\s\-_.\/]+/g, '');
    };
    cards.forEach(function (card) {
      card.setAttribute('data-search', normalize(card.textContent));
      card.setAttribute('data-title', normalize(card.querySelector('h3').textContent));
    });
    var input = document.getElementById('module-filter');
    var hyvaChip = document.querySelector('[data-filter="hyva"]');
    var empty = document.getElementById('module-empty');
    var state = { hyva: false, q: '' };

    var apply = function () {
      var shown = 0, q = normalize(state.q);
      // Typos like "agento force": if nothing contains the query, accept cards whose
      // title has its letters in order (only for queries of 5+ letters)
      var contains = function (card) { return card.getAttribute('data-search').indexOf(q) > -1; };
      var inOrder = function (card) {
        var text = card.getAttribute('data-title'), pos = 0;
        for (var i = 0; i < q.length; i++) {
          pos = text.indexOf(q.charAt(i), pos);
          if (pos < 0) { return false; }
          pos++;
        }
        return true;
      };
      var match = contains;
      if (q.length >= 5 && !cards.some(function (c) { return contains(c) && (!state.hyva || c.hasAttribute('data-hyva')); })) {
        match = inOrder;
      }
      cards.forEach(function (card) {
        // Argento designs (.card-extra) appear only in search results
        var extra = card.classList.contains('card-extra');
        var ok = (!state.hyva || card.hasAttribute('data-hyva')) &&
          (q ? match(card) : !extra);
        card.hidden = extra && !ok;
        card.classList.toggle('is-hidden', !ok);
        if (ok) {
          shown++;
          card.classList.add('in');
        }
      });
      empty.classList.toggle('show', !shown);
    };

    if (hyvaChip) {
      hyvaChip.addEventListener('click', function () {
        state.hyva = !state.hyva;
        hyvaChip.classList.toggle('active', state.hyva);
        hyvaChip.setAttribute('aria-pressed', state.hyva ? 'true' : 'false');
        apply();
      });
    }
    input.addEventListener('input', function () {
      state.q = input.value.trim();
      apply();
    });
    document.getElementById('reset-filters').addEventListener('click', function () {
      state = { hyva: false, q: '' };
      input.value = '';
      if (hyvaChip) {
        hyvaChip.classList.remove('active');
        hyvaChip.setAttribute('aria-pressed', 'false');
      }
      apply();
    });
  }

  // Crossfade slideshow
  Array.prototype.forEach.call(document.querySelectorAll('[data-slideshow]'), function (box) {
    var slides = box.querySelectorAll('img');
    var caption = box.querySelector('figcaption');
    var dots = box.parentNode.querySelector('.promo-dots');
    var index = 0, timer;
    if (slides.length < 2) { return; }

    dots.innerHTML = Array.prototype.map.call(slides, function (img, i) {
      return '<button type="button" aria-label="' + img.alt + '"' + (i === 0 ? ' class="active"' : '') + '></button>';
    }).join('');

    function show(i) {
      index = (i + slides.length) % slides.length;
      Array.prototype.forEach.call(slides, function (s, j) { s.classList.toggle('active', j === index); });
      Array.prototype.forEach.call(dots.children, function (d, j) { d.classList.toggle('active', j === index); });
      if (caption) { caption.textContent = slides[index].getAttribute('data-caption') || slides[index].alt; }
    }
    function start() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
      timer = setInterval(function () { show(index + 1); }, 4500);
    }
    dots.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) { return; }
      clearInterval(timer);
      show(Array.prototype.indexOf.call(dots.children, b));
      start();
    });
    show(0);
    start();
  });
})();
