---
layout: default
title: Mobile Star Theme Use Cases
description: Mobile Star Theme use cases
keywords: Mobile Star Theme use cases
category: Mobile Star Theme
---

# Use cases

#### Toggle menu on category link click

![Mobile navigation](/images/m1/themes/mobile-star/mobile-nav.gif)

By default when you click on category link it opens category page. If you want to
disable it and only expand subcategories, follow these steps:

 1. Go to `CMS > Static Blocks > Homepage mobile`.
 2. Find the following code:

    ```html
    <script type="text/javascript">
     new MobileNavigation();
    </script>
    ```

    and replace it with the next code

    ```html
    <script type="text/javascript">
        var mobileNav = new MobileNavigation();
        $('nav').select('.level-top').each(function(el) {
            el.observe('click', function(e) {
                if (el.next('ul')) {
                    e.stop();
                    mobileNav.toggle(el.next('ul'));
                }
            });
        });
    </script>
    ```
