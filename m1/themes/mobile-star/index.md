---
layout: default
title: Mobile Star Theme Installation
description: Magento mobile star theme documentation
keywords: "Magento Mobile Star Theme, m001"
category: Mobile Star Theme
---

## Mobile Star theme installation

1.  Copy all files into your magento root directory
2.  Navigate to `Admin > System > Manage Cache` and disable all cache
3.  Navigate to `Admin > System > Configuration > Content Management` and set 
    WYSIWYG editor to "Disabled by Default" mode.
4.  Modify slider at `Admin > CMS > Easyslide`
5.  Navigate to `Admin > CMS > Static Blocks`

    1.  Create block `homepage` with following code:

        ```html
        {% raw %}{{block type="easyslide/slider" name="homepage.m001" slider_id="default_m001"}}
        {{block type="catalog/navigation" name="home.nav" template="catalog/navigation/top.phtml"}}
        <script type="text/javascript">
         new MobileNavigation();
        </script>

        {{widget type="highlight/product_new" title="New Products" products_count="4" template="highlight/product/sidebar/list.phtml" class_name="highlight-new"}}
        {{widget type="highlight/product_special" title="Special Products" products_count="4" template="highlight/product/sidebar/list.phtml" class_name="highlight-special"}}
        {{widget type="highlight/product_reports_viewed" title="Recently Viewed" products_count="15" template="highlight/product/sidebar/list.phtml" class_name="highlight-recently"}}

        {{block type="newsletter/subscribe" name="left.newsletter" template="newsletter/subscribe.phtml"}}{% endraw %}
        ```

    2.  Create block `footer_links_mobile` with following code:

        ```html
        <ul>
            <li><a href="{% raw %}{{store direct_url='about-magento-demo-store'}}{% endraw %}">About Us</a></li>
            <li><a href="{% raw %}{{store direct_url='customer-service'}}{% endraw %}">Customer Service</a></li>
            <li class="last"><a href="{% raw %}{{store direct_url='contacts'}}{% endraw %}">Contact Us</a></li>
        </ul>
        ```

6.  Navigate to `Admin > Cms > Static Blocks` to add "Switch to desktop" 
    and "Switch to mobile version" links

    1.  Open `footer_links_mobile` block and add the following content to the 
        bottom of the block:

        ```html
        <ul>
            <li class="last"><a href="{% raw %}{{store direct_url='mobileswitcher/index/desktop'}}{% endraw %}" rel="nofollow">Desktop Version</a></li>
        </ul>
        ```

    2.  Open the `footer_link` static block of your desktop theme and add the following link to it:

        ```html
        <a href="{% raw %}{{store direct_url='mobileswitcher/index/mobile'}}{% endraw %}" rel="nofollow">Mobile Version</a>
        ```

7.  Navigate to `Admin > System > Configuration > Design > Themes` and add `m001` 
    exception to the following fields:

    - Layouts, 
    - Templates 
    - Skins.

    Use the following Expression in order to detect mobile devices

    `iPhone|iPod|BlackBerry|Palm|Googlebot-Mobile|Mobile|mobile|mobi|Windows Mobile|Safari Mobile|Android|Opera Mini`

8.  That's all. Navigate to your home page and check how your new store looks.


If you have any problems with templates installtion please contact us at 
[templates-master.com/contacts/](http://templates-master.com/contacts/) and we 
will help you with template installation for free.

## Use cases

#### Toggle menu on category link click

![Mobile navigation](/images/m1/themes/mobile-star/mobile-nav.gif)

By default when you click on category link it opens category page. If you want to 
disable it and only expand subcategories, follow these steps:

 1. Go to `CMS > Static Blocks > Homepage mobile`.
 2. In `Content` field fine the code

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
