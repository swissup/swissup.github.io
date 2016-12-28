var Constraint = function(el, options) {
    var win    = $(window),
        cnt    = options.cnt || el.parent(),
        offset = options.offset || 0;

    function updateSize() {
        var height = parseInt(el.css('maxHeight')),
            bottom = Math.min(
                win.innerHeight() + win.scrollTop(),
                cnt.offset().top + cnt.outerHeight()
            ),
            newHeight = bottom - el.offset().top - offset;

        if (height !== newHeight) {
            el.css({
                maxHeight: newHeight
            });
        }
    }
    updateSize();

    win.on('scroll resize orientationchange', updateSize);

    return {
        update: function() {
            updateSize();
        }
    };
};
