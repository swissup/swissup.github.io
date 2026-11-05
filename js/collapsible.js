/* Headings marked {:.collapsible} or {:.collapsible.collapsed} hide the content below them. */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var headings = document.querySelectorAll('.collapsible');

  if (!headings.length) {
    return;
  }

  // Siblings until the next heading of the same or a higher level.
  function getSiblings(el) {
    var level = parseInt(el.tagName.charAt(1), 10),
        result = [],
        next = el.nextElementSibling,
        nextLevel;

    while (next) {
      nextLevel = /^H[1-6]$/.test(next.tagName) ? parseInt(next.tagName.charAt(1), 10) : 0;
      if (nextLevel && nextLevel <= level) {
        break;
      }
      result.push(next);
      next = next.nextElementSibling;
    }

    return result;
  }

  function toggle(el, collapse) {
    el.classList.toggle('collapsed', collapse);
    el.setAttribute('aria-expanded', collapse ? 'false' : 'true');
    getSiblings(el).forEach(function (sibling) {
      sibling.classList.toggle('collapsible-hidden', collapse);
    });
  }

  Array.prototype.forEach.call(headings, function (el) {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');

    if (el.classList.contains('collapsed')) {
      toggle(el, !(window.location.hash && window.location.hash.substring(1) === el.id));
    }

    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        return; // click on anchor link
      }
      toggle(el, !el.classList.contains('collapsed'));
    });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(el, !el.classList.contains('collapsed'));
      }
    });
  });

  window.addEventListener('hashchange', function () {
    var target = window.location.hash && document.getElementById(window.location.hash.substring(1));
    if (target && target.classList.contains('collapsed')) {
      toggle(target, false);
    }
  });
});
