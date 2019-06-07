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

Yes, it is possible. First thing you have to do is to [create custom theme](/m2/argento/customization/custom-theme/#create-custom-theme) and apply it to your store. Unfortunately, there are no config option or any other one-click solution for this.

When your custom theme is ready create file `etc/view.xml` in its directory. And insert code below in it.

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <vars module="Swissup_Easytabs">
        <var name="options">{"active": 0, "collapsible": true, "openedState": "active"}</var>
    </vars>
</view>
```

If file `etc/view.xml` already exists in your theme then just add code below to it.

```xml
<vars module="Swissup_Easytabs">
    <var name="options">{"active": 0, "collapsible": true, "openedState": "active"}</var>
</vars>
```

Save file. Clean Magento Cache. Check product page at storefront.

Main thing you have to understand. Check value of node `var` with name `options`. *"active"* with value `0` makes fist tab opened by default (tab index starts with 0). In similar way you can make any other tab initially opened. `-1` - all tabs closed.

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

[Fullscreen Enabled]: /images/m2/argento/luxury/customization/fullscreen-slider-enabled.png
[Fullscreen Disabled]: /images/m2/argento/luxury/customization/fullscreen-slider-disabled.png
