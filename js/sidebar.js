var navigation = (function() {

    var toc,
        sections    = $('h1, h2, h3, h4, h5, h6', '.content').filter(':visible'),
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

        var gap = 20, // @todo: maybe replace with: min(60, $(window).innerHeight() / 5)
            containerOffset = $('.content').offset().top;

        sections.each(function(i, section) {
            if (!section.id) {
                return;
            }

            var point = $(section).position().top + containerOffset;

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

        updateSpacer();
    }

    function calculateCurrentSection() {
        var currentScroll = $(window).scrollTop(),
            point = Math.max.apply(null, breakpoints.filter(function(point) {
                return point <= currentScroll;
            }));
        return mapping[point];
    }

    /**
     * Add empty div to guarantee that lowest section will be selected,
     * when scrolling to the bottom
     */
    function updateSpacer() {
        var diff = $('.content').innerHeight() - breakpoints[breakpoints.length - 1],
            viewportHeight = $(window).innerHeight();

        $('.scrolling-spacer').height(Math.max(viewportHeight - diff, 0));
    }

    return {
        init: function(el) {
            var self = this;
            toc = el;

            // add event listener to handle click on a title element
            // (it's hidden with css, so we need to write a custom js)
            $('#markdown-toc-contents, #markdown-toc-table-of-contents').on('click', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 'slow');
            });

            $('.content').append('<div class="scrolling-spacer"></div>');

            // Activate href link and all parent li's
            if (false === self.activate(window.location.hash)) {
                self.activate(window.location.pathname);
            }

            updateBreakpoints();

            $(window).on('scroll', _.throttle(function() {
                self.activate('#' + calculateCurrentSection());
            }, 100));

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
            var link = $('[href="' + href + '"]', toc).first();

            $('li.active', toc).removeClass('active');

            if (!link.length) {
                return false;
            }

            link.parent('li').addClass('active');
        }
    };
})();

(function($) {
    var toc = $('#markdown-toc');
    if (toc.length) {
        navigation.init(toc);
        new Constraint(toc, {
            offset: 10
        });

        toc
            .stick_in_parent({
                spacer: false,
                offset_top: 10,
                inner_scrolling: false
            })
            .on("sticky_kit:stick", function(e) {
                toc.css({
                    left: $('.content').outerWidth() +
                        $('.content').offset().left -
                        toc.outerWidth()
                });
            })
            .on("sticky_kit:unstick", function(e) {
                toc.css({
                    left: ''
                });
            })
            .on("sticky_kit:bottom", function(e) {
                toc.css({
                    left: '',
                    right: 0
                });
            })
            .on("sticky_kit:unbottom", function(e) {
                toc.css({
                    left: $('.content').outerWidth() +
                        $('.content').offset().left -
                        toc.outerWidth(),
                    right: ''
                });
            });

        $(window).on('resize orientationchange', _.throttle(function() {
            $(document.body).trigger('sticky_kit:recalc');
        }, 500));
    }
})(jQuery);
