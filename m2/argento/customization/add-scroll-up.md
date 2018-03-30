---
layout: default
title: Add 'Scroll Up' button
description: Add Scroll Up button in Argento 2
keywords: >
    button, scroll-up
category: Argento
---

# Adding 'Scroll Up' button

We had few requests from our customers to add animated **"Scroll Up"** button
to **Argento2** pages (that will definitely be added in next theme releases).
Here's manual to do that now.

### Contents

 1. [Creating CMS block](#creating-cms-block)
 1. [Assigning CMS block to Widget](#assigning-cms-block-to-widget)

### Creating CMS block

  * Go to `Admin > Content > Blocks` and create `scroll_up` CMS block
  * Add following content:

    ```html
    <p id="scroll-up" class="hidden-lg hidden-md hidden-sm hidden-xs">
        <a href="#">Back to top</a>
    </p>

    <style type="text/css" media="screen">
        #scroll-up { position: fixed; top: 50%; right: 30px; z-index: 15; }
        #scroll-up a {
            text-indent: -9999px;
            width: 60px;
            height: 60px;
            display: block;
            background-color: #eee;
            background-size: cover;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAAXNSR0IB2cksfwAAAtlQTFRFlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWu1a1RQAAAPN0Uk5TAHh3aP9nWP1K+j72PTLx8DEn6h/j4h4X2hYQ0M8PCsXEBri3BQKqqZuMi3t6a2pb/lpN+0xA9z808vgzKuxQUfzrKSDkXV8Y3G1u2xHSfn/RC8eOkMa7nQGfuQOtrK6eB7yPDH1e5U8o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);
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            border-radius: 15px;
            -webkit-transition: 0.5s;
            -moz-transition: 0.5s;
            transition: 0.5s;
        }
        #scroll-up a:hover { background-color: #ddd; }
    </style>
    <script>
    require([
        'jquery'
    ], function($) {
        /**
         * Initialize scroll-up
         */

        $ = jQuery;

        if ($('#scroll-up').length) {
            var scrollTrigger = 700, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop < scrollTrigger) {
                        $('#scroll-up').addClass('hidden-lg');
                        $('#scroll-up').addClass('hidden-md');
                    } else {
                        $('#scroll-up').removeClass('hidden-lg');
                        $('#scroll-up').removeClass('hidden-md');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#scroll-up').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    });
    </script>
    ```
  * Save

### Assigning CMS block to Widget

  * Go to `Admin > Content > Widgets` and create `scrollup` Widget
    - Type > `CMS Static Block`
    - Layout Updates > `All Pages`
    - Container > `Page Footer`
  * Widget options > Block > `ScrollUp`
  * Save

##### Refresh frontend and enjoy!
