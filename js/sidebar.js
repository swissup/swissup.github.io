var navigation = (function() {

    function spy(entered, state) {
        var links    = $('li a', '.sidenav'),
            sections = $('h1, h2, h3, h4, h5, h6', '.mdl-layout__content'),
            visible  = [];

        sections.espy(function(entered, state) {
            var section = this;
            if (!section.id) {
                return;
            }

            if (!entered) {
                delete visible[section.id];
                return;
            }
            visible[section.id] = section;

            // get closest element to the middle of the screen

            console.log(visible);

            navigation.activate('#' + section.id);
        }, {
            context: $('.mdl-layout__content').get(0),
            offset: -parseInt($('.mdl-layout__content').height() / 2),
            contain: true
        });
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
    }
})();

(function($) {
    navigation.init();
})(jQuery);
