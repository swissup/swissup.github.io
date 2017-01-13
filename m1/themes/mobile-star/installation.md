---
layout: default
title: Mobile Star Theme Installation
description: Magento Mobile Star Theme installation
keywords: magento mobile theme
category: Mobile Star Theme
---

# Installation

Please follow next steps to complete the installation:

1.  Go to store backend and disable compilation mode.
2.  Go to your magento store root directory (via FTP or CPanel).
3.  Create file `maintenance.flag` in root directory.
4.  Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you can not see this page - probably you
    try to install extension at wrong magento instance).
5.  Unpack all files from theme archive into your magento store root directory.
6.  Remove file `maintenance.flag` when copy process completed.
7.  Login your store admin and start to configure extension.
8.  Navigate to `Admin > System > Manage Cache` and flush cache storage.

## Configuring

1.  Navigate to `Admin > System > Configuration > Content Management` and set
    WYSIWYG editor to "Disabled by Default" mode.
2.  Modify slider at `Admin > CMS > Easyslide`
3.  Navigate to `Admin > CMS > Static Blocks`
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

4.  Navigate to `Admin > Cms > Static Blocks` to add "Switch to desktop"
    and "Switch to mobile version" links

    1.  Open `footer_links_mobile` block and add the following content to the
        bottom of the block:

        ```html
        <ul>
            <li class="last"><a href="{% raw %}{{store direct_url='mobileswitcher/index/desktop'}}{% endraw %}" rel="nofollow">Desktop Version</a></li>
        </ul>
        ```

    2.  Open the `footer_link` static block of your desktop theme and add the
        following link:

        ```html
        <a href="{% raw %}{{store direct_url='mobileswitcher/index/mobile'}}{% endraw %}" rel="nofollow">Mobile Version</a>
        ```

7.  Navigate to `Admin > System > Configuration > Design > Themes` and add `m001`
    exception to the following fields:

    - Layouts
    - Templates
    - Skins

    Use the following Expression in order to detect mobile devices

    `iPhone|iPod|BlackBerry|Palm|Googlebot-Mobile|Mobile|mobile|mobi|Windows Mobile|Safari Mobile|Android|Opera Mini`

8.  That's all. Navigate to your home page and check how your new store looks.

If you have any problems with templates installtion please contact us at
[templates-master.com/contacts/](http://templates-master.com/contacts/) and we
will help you with template installation for free.
