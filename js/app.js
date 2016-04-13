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
  $grid.on('click', '.brick', function(event) {
    $('.brick', $grid).not(this).removeClass('expanded');
    $(this).toggleClass('expanded');
    $grid.packery('layout');
  });
})();
