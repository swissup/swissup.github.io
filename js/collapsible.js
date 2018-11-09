document.addEventListener("readystatechange", function () {
  if (this.readyState !== "complete") {
    return;
  }

  function getSiblings(el) {
    var tagName = el.tagName,
      level = tagName.match(/(\d)/),
      nextTags = [
        tagName,
        tagName.replace(level[1], parseInt(level[1], 10) - 1)
      ];

    return $(el).nextUntil(nextTags.join(', '));
  }

  function collapse (el) {
    $(el).addClass('collapsed');
    getSiblings(el).addClass('collapsible-hidden');
  }

  function expand (el) {
    $(el).removeClass('collapsed');
    getSiblings(el).removeClass('collapsible-hidden');
  }

  $('.collapsible').click(function (e) {
    if (e.delegateTarget !== e.target) {
      return; // click on anchor.js element
    }

    if ($(this).hasClass('collapsed')) {
      expand(this);
    } else {
      collapse(this);
    }
  });

  $('.collapsible.collapsed').each(function () {
    var hash = window.location.hash.substring(1);

    if (hash && this.id === hash) {
      expand(this);
    } else {
      collapse(this);
    }
  });

  $(window).on('hashchange', function() {
    var hash = window.location.hash;
    if (hash && $(hash).hasClass('collapsed')) {
      expand($(hash).get(0));
    }
  });
});
