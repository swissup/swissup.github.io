---
layout: default
title: Absolute Theme
description: Absolute Theme documentation
keywords: >
    magento 2 free responsive theme
category: Absolute Theme
---

# Absolute Theme

![Absolute Homepage](/images/m2/themes/absolute/absolute_homepage.png){: .noborder}

### Contents

- [Installation](installation/)
- [Changelog](changelog/)
- [Demo](http://freedemo.swissuplabs.com/)


### Main Features

 *  ##### **Slick Carousel** sliders _(optimized for touchscreen)_

    ![Slick Carousel](/images/m2/themes/absolute/carousel.gif)

    ![Slick Carousel Bottom](/images/m2/themes/absolute/carousel2.gif)

    This carousel tool is integrated in **Absolute** theme and can be used in other
    places using following markup:

    ```html
    <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 4, "slidesToScroll": 1, "dots": true, "autoplay": true, "variableWidth": true}}'>
        <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
        <div style="margin-right: 10px"><img src="http://placehold.it/150x150" alt=""/></div>
        <div style="margin-right: 10px"><img src="http://placehold.it/300x150" alt=""/></div>
        <div style="margin-right: 10px"><img src="http://placehold.it/450x150" alt=""/></div>
        <div style="margin-right: 10px"><img src="http://placehold.it/250x150" alt=""/></div>
        <div style="margin-right: 10px"><img src="http://placehold.it/350x150" alt=""/></div>
    </div>
    ```
    See the list of available options at slick's carousel [official site][slick_settings]

    [slick_settings]: http://kenwheeler.github.io/slick/#settings

 *  ##### Side banners with **newsletter** block

    ![Banners](/images/m2/themes/absolute/banners.png){: .noborder}

    -   First two **banners** are added in `homepage_callout` static block and can
        be easily changed or modified
    -   **Newsletter** is added using default **magento** block. Can be turned off
        in `Content > Pages > home > Design ` by removing line:

        ```xml
        <block class="Magento\Newsletter\Block\Subscribe" name="form.subscribe.right" as="subscribe_right" template="subscribe_right.phtml"/>
        ```

 *  ##### **New products** block on homepage

    ![New Products](/images/m2/themes/absolute/new_products.png)

    **Products quantity** in this block is controlled by homepage widget
    parameter `products_count="8"`

 *  ##### Using of **FontAwesome** icons

    ![Footer Markers](/images/m2/themes/absolute/marker_icon.png)
    ![Newsletter Icon](/images/m2/themes/absolute/newsletter_icon.png)

    We included [**Font Awesome**](http://fontawesome.io/icons/) icons pack that
    won't make extra queries to server. You can use more then **600 icons**.

 *  ##### [**1-click** installation](installation/#setup-configuration-and-theme-content)

 *  ##### Backend user friendly **theme editor**

    Go to `Admin > Stores > Configuration > Swissup >
    Swissup Themes Editor > Absolute Theme` and find following interface:

    ![Backend editor](/images/m2/themes/absolute/backend_editor.png)

    All listed sections parameters can be **easily changed**:

    - **Background**
    - **Footer**
    - **Navigation**
    - **Fonts**

    ![Editor Animation](/images/m2/themes/absolute/editor_animation.gif)

