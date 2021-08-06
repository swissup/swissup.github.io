---
layout: default
title: Add 'Scroll Up' button
description: How to create 'Scroll Up' button in Argento theme
keywords: scroll to top, scroll up
category: Argento
---

# Create Scroll Up button

> This feature is supported since Argento 1.10.0

Navigate to _Content > Blocks_ and create `argento_scroll_up` CMS block
with following content:

```html
<span class="page-scroll-up hidden-lg hidden-md hidden-sm hidden-xs" title="Scroll to top"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><polygon points="10.7071068 7.05025253 10 6.34314575 4.34314575 12 5.75735931 13.4142136 10 9.17157288 14.2426407 13.4142136 15.6568542 12"></polygon></g></svg></span>

<script>
require([
    'jquery'
], function($) {
    var el = $('.page-scroll-up'),
        scrollTrigger = 700;

    function toggleScrollButton() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop < scrollTrigger) {
            el.addClass('hidden-lg');
            el.addClass('hidden-md');
        } else {
            el.removeClass('hidden-lg');
            el.removeClass('hidden-md');
        }
    };

    toggleScrollButton();
    $(window).on('scroll', function () {
        toggleScrollButton();
    });

    el.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 400);
    });
});
</script>
```

[Breeze](/m2/extensions/breeze/) compatible script:

```js
(function() {
    'use strict';

    document.addEventListener('breeze:load', function () {
        var scrollUp = $('.page-scroll-up'),
            scrollTrigger = 700;

        $(window).on('scroll', _.debounce(toggleScrollButton, 200));

        function toggleScrollButton() {
            var scrollTop = $(window)[0].scrollY;

            if (scrollTop < scrollTrigger) {
                scrollUp.addClass('hidden-lg');
                scrollUp.addClass('hidden-md');
                scrollUp.addClass('hidden-sm');
            } else {
                scrollUp.removeClass('hidden-lg');
                scrollUp.removeClass('hidden-md');
                scrollUp.removeClass('hidden-sm');
            }
        }

        $(scrollUp).on('click', function () {
            window.scroll({top: 0, behavior: 'smooth'});
        });
    });
})();
```

Cleanup Magento's cache and check the frontend.
