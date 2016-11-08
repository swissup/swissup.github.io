(function($) {
    // Activate href link and all parent li's
    var url = window.location.pathname,
        link = $('[href="' + url + '"]', '.sidenav').first();

    if (link) {
        var li = link.parent('li').addClass('active');
        while ((li = li.parents('li')) && li.length) {
            li.addClass('active');
        }
    }

    // Activate anchor link and all parent li's
    // Need to wait for mdl layout event to properly calculate scrollOffsets
    $(document.body).on('mdl-componentupgraded', function(e) {
        if (!($(e.target).hasClass('mdl-layout'))) {
            return;
        }

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

            // get closest element to the top of the screen

            console.log(visible);

            var link = links.filter('[href="#' + section.id + '"]');
            if (!link.length) {
                return;
            }

            links.parent('li').removeClass('active');

            var li = link.parent('li').addClass('active');
            while ((li = li.parents('li')) && li.length) {
                li.addClass('active');
            }
        }, {
            context: $('.mdl-layout__content').get(0),
            offset: 0,
            contain: true
        });
    });
})(jQuery);
