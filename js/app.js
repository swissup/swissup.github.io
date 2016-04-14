document.addEventListener("readystatechange", function () {
  if (this.readyState === "complete") {
    if (!$(document.body).hasClass('no-anchors')) {
      anchors.add();
    }
  }
});

(function() {
  var $grid = $('.masonry').packery({
    itemSelector: ".brick",
    gutter: ".brick-gutter"
  });
  $grid.on('click', 'a', function(event) {
    event.stopPropagation();
  });
  $grid.on('click', '.brick', function(event) {
    if ($(this).data('brickHref')) {
      window.location = $(this).data('brickHref');
      return;
    }
    if ($(this).is('.no-resize')) {
      return;
    }
    $('.brick', $grid).not(this).removeClass('expanded');
    $(this).toggleClass('expanded');
    $grid.packery('layout');
  });
})();
