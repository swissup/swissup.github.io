---
layout: default
title: Argento Luxury Customization
description: Argento Luxury Customization
category: Argento
---

* TOC
{:toc}

### Change the view of homepage slider

> Starting from Argento version 1.1.0 you can configure it in admin under `Stores > Configuration > Swissup Theme Editor > Argento Luxury > Home Page > Enable Fullscreen Slider`.

In Argento Luxury theme slider on home page is displayed fullscreen under header.
You can disable it by setting less variable in your
[_argento_custom.less](/m2/argento/customization/custom-css/) file:

```less
@homepage-fullscreen-slider: false;
```

Fullscreen Slider Enabled  | Fullscreen Slider Disabled
---------------------------|-------------------------------------------
![Fullscreen Enabled][Fullscreen Enabled] | ![Fullscreen Disabled][Fullscreen Disabled]

### Use Luxury Icons

Argento Luxury includes own set of svg icons. You can show icon using css class,
for example:

```html
<div class="luxury-icon luxury-cart"></div>
```

Also you can assign icon to any element with less using `.luxury-icon` mixin,
for example:

```less
.minicart-wrapper .action.showcart .text {
    .luxury-icon('cart');
}
```

List of available icons:

 - heart
 - heart-listing
 - customer
 - cart
 - cart-listing
 - search
 - hamburger
 - letter
 - cart-alt
 - lock
 - headphones
 - arrow-left
 - arrow-right
 - bulb
 - compass
 - alert
 - success
 - error
 - warning
 - info

### Product main tabs - "Details" initially opened

![Product tab initially opened](/images/m2/argento/luxury/customization/product-tab-initially-opened.png)

Sometimes our customers ask us if it is possible to make "Details" tab opened by default at product page.

Yes, it is possible. Go to `Admin > Stores > Configuration > Swissup > EasyTabs` And find the option: **Open initially**. Set it to '0'

Main thing you have to understand is that value `0` makes fist tab opened by default (tab index starts with 0). In similar way you can make any other tab initially opened. `-1` - all tabs closed.

### Main tabs under product image

![Product tabs under image](/images/m2/argento/luxury/customization/product-tabs-under-image.png)

Some store owners like to have product tabs under product image. It is not a problem with Luxury design.

First, [create custom theme](/m2/argento/customization/custom-theme/#create-custom-theme) and apply it to your store. Then create file `Magento_Catalog/layout/catalog_product_view.xml` in custom theme directory. Insert code below in this file.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <!-- Create container for main product tabs -->
        <referenceContainer name="page.wrapper">
            <container name="custom-before-footer-container" before="before-footer-container" label="Luxury Custom - container for main tabs" htmlTag="div" htmlClass="page-before-footer">
                <container name="custom-before-footer-content" label="Luxury Custom - main tabs content" htmlTag="div" htmlClass="content">
                </container>
            </container>
        </referenceContainer>
        <!-- Hide additional tabs -->
        <referenceBlock name="additional-tabs" display="false" />
        <!-- Move product tabs into new place -->
        <move element="product.info.tabs" destination="custom-before-footer-content" before="-"/>
    </body>
</page>

```

Save file. Clean Magento Cache. Check product page at storefront.


### Change the homepage fullscreen slider to youtube video background

   <iframe src="https://drive.google.com/file/d/18RoKMvh6CYI25Z0sqlkIqMxXJBEncK6l/view" width="720" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

 1. Changing of slider to video background requires creating of cms block i.e.
    `video_background` with following content:

    ```html
        <style>
        .title-container {
            position: absolute;
            top: 40%;
            text-align: center;
            margin: 0 auto;
            z-index: 1;
            width: 100%;
        }
        .title-container h1,
        .title-container h4{
            color: #fafafa;
            text-transform: uppercase;
        }
        .title-container h1 {
            font-size: 55px;
            letter-spacing: 50px;
        }
        .title-container h4:after {
            content: "";
            display: block;
            width: 40px;
            height: 5px;
            background-color: #ea8e6a;
            margin: 16px auto;
            margin-bottom: 0;
        }
        .title-container button.button span{
            background-color: transparent;
            color: #fff;
            min-width: 200px;
        }
        .title-container button.button span span {
            text-transform: uppercase;
            font-size: 14px;
            background-color: transparent !important;
            height: auto;
            line-height: 36px;
        }

         .homepage-video {
        position:relative;
        }

        @media (min-aspect-ratio: 16/9) {
         .homepage-video {
            height: 100%;
            top: -10%;
          }
        }

        @media (max-width: 768px) {
         .homepage-video {
            width: 300%;
            left: -100%;
          }
        }
        </style>


        <div class="homepage-video">
            <div class="title-container">
                <h4>2001</h4>
                <h1>Space Odyssey </h1>
                <button class="button btn-alt">
                    <span><span>Shop Now</span></span>
                </button>
            </div>

            <div class="embed-responsive embed-responsive-16by9">
                <iframe style="pointer-events: none;"  type="text/html"
        src="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&rel=0&playlist=W0LHTWG-UmQ"
         frameborder="0"  class="embed-responsive-item"></iframe>
            </div>
        </div>
    ```

    Change the **_https://www.youtube.com/embed/W0LHTWG-UmQ_** and the **_&playlist=W0LHTWG-UmQ_**
    to your required video from **Youtube**


 2. Then go to your store `homepage` and remove the slider widget code:

    ```html
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_luxury"}}{% endraw %}
    ```
 3. Using **WYSIWYG** editor insert your created block `video_background` instead
 4. Save and Clear cache.

[Fullscreen Enabled]: /images/m2/argento/luxury/customization/fullscreen-slider-enabled.png
[Fullscreen Disabled]: /images/m2/argento/luxury/customization/fullscreen-slider-disabled.png
