/* Home page: module filters and Argento screenshots slideshow. */
(function () {
  'use strict';

  var grid = document.getElementById('module-grid');
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
    var chips = document.getElementById('cat-chips');
    var input = document.getElementById('module-filter');
    var hyvaChip = document.querySelector('[data-filter="hyva"]');
    var empty = document.getElementById('module-empty');
    var state = { cat: 'all', hyva: false, q: '' };

    var apply = function () {
      var shown = 0, q = state.q.toLowerCase();
      cards.forEach(function (card) {
        var ok = (state.cat === 'all' || card.getAttribute('data-category') === state.cat) &&
          (!state.hyva || card.hasAttribute('data-hyva')) &&
          (!q || card.textContent.toLowerCase().indexOf(q) > -1);
        card.classList.toggle('is-hidden', !ok);
        if (ok) {
          shown++;
          card.classList.add('in');
        }
      });
      empty.classList.toggle('show', !shown);
    };

    chips.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat]');
      if (!b) { return; }
      Array.prototype.forEach.call(chips.querySelectorAll('.chip'), function (c) { c.classList.toggle('active', c === b); });
      state.cat = b.getAttribute('data-cat');
      apply();
    });
    if (hyvaChip) {
      hyvaChip.addEventListener('click', function () {
        state.hyva = !state.hyva;
        hyvaChip.classList.toggle('active', state.hyva);
        apply();
      });
    }
    input.addEventListener('input', function () {
      state.q = input.value.trim();
      apply();
    });
    document.getElementById('reset-filters').addEventListener('click', function () {
      state = { cat: 'all', hyva: false, q: '' };
      input.value = '';
      Array.prototype.forEach.call(document.querySelectorAll('#cat-chips .chip'), function (c) {
        c.classList.toggle('active', c.getAttribute('data-cat') === 'all');
      });
      if (hyvaChip) { hyvaChip.classList.remove('active'); }
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
