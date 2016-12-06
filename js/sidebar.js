var navigation = (function() {

    var context     = $('.mdl-layout__content'),
        sections    = $('h1, h2, h3, h4, h5, h6', '.content'),
        breakpoints = [],
        mapping     = {};

    /**
     * Breakpoints - are the array of Y-coodrinates, that indicates
     * begin/end of the section.
     *
     * Used in calculateCurrentSection function
     *
     * @return void
     */
    function updateBreakpoints() {
        breakpoints = [];
        mapping     = {};

        var gap = 60, // @todo: maybe replace with: min(60, context.innerHeight() / 5)
            scrollTop = context.scrollTop();

        sections.each(function(i, section) {
            if (!section.id) {
                return;
            }

            var point = $(section).position().top + scrollTop;

            if (point > gap) {
                point -= gap; // Select item, when it scrolls into top part of the of vieweport
            }

            // force first element selection
            if (i === 0 && point <= 80) {
                point = 0;
            }

            breakpoints.push(point);
            mapping[point] = section.id;
        });
    }

    function calculateCurrentSection() {
        var currentScroll = context.scrollTop(),
            point = Math.max.apply(null, breakpoints.filter(function(point) {
                return point <= currentScroll;
            }));
        return mapping[point];
    }

    return {
        init: function() {
            var self = this;

            // Activate href link and all parent li's
            if (false === self.activate(window.location.hash)) {
                self.activate(window.location.pathname);
            }

            // Activate anchor link and all parent li's while scrolling.
            // Need to wait for mdl layout event to properly calculate scrollOffsets.
            $(document.body).on('mdl-componentupgraded', function(e) {
                if (!($(e.target).hasClass('mdl-layout'))) {
                    return;
                }

                updateBreakpoints();

                context.on('scroll', _.throttle(function() {
                    self.activate('#' + calculateCurrentSection());
                }, 100));
            });

            // Activate correct item, when clicking anchor item
            $(window).on('hashchange', function() {
                self.activate(window.location.hash);
            });

            $(window).on('resize orientationchange', _.throttle(function() {
                updateBreakpoints();
                self.activate('#' + calculateCurrentSection());
            }, 500));
        },

        /**
         * Activate links and all parent li's
         *
         * @param  Element link
         * @return void
         */
        activate: function(href) {
            var container = '.sidenav',
                link = $('[href="' + href + '"]', container).first();

            $('li.active', container).removeClass('active');

            if (!link.length) {
                return false;
            }

            link.parent('li').addClass('active');
        }
    };
})();

(function($) {
    navigation.init();
})(jQuery);
