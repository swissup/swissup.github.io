var navigation = (function() {

    var context = $('.mdl-layout__content'), // scrollable element
        visible = {};

    function spy() {
        var sections = $('h1, h2, h3, h4, h5, h6', '.mdl-layout__content');

        sections.espy(function(entered, state) {
            var section = this;
            if (!section.id) {
                return;
            }

            if (!entered && state == 'down') {
                console.log(state);
                delete visible[section.id];
                return;
            }
            visible[section.id] = section;
        }, {
            context: context.get(0),
            offset: 0,
            contain: true
        });

        context.on('scroll', _.throttle(function() {
            // get closest element to the middle of the screen
            var middle  = context.offset().top + context.height() / 3,
                minDiff = 10000;

            $.each(visible, function(id, el) {
                var diff = Math.abs($(el).offset().top - middle);
                if (diff < minDiff) {
                    minDiff = diff;
                    section = el;
                }
            });

            // activate it
            if (section) {
                navigation.activate('#' + section.id);
            }
        }, 300));
    }

    return {
        init: function() {
            // Activate href link and all parent li's
            this.activate(window.location.pathname);

            // Activate anchor link and all parent li's while scrolling.
            // Need to wait for mdl layout event to properly calculate scrollOffsets.
            $(document.body).on('mdl-componentupgraded', function(e) {
                if (!($(e.target).hasClass('mdl-layout'))) {
                    return;
                }
                spy();
            });
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

            if (!link) {
                return;
            }

            $('li.active', container).removeClass('active');

            var li = link.parent('li').addClass('active');
            while ((li = li.parents('li')) && li.length) {
                li.addClass('active');
            }
        }
    };
})();

(function($) {
    navigation.init();
})(jQuery);
