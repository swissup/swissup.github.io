---
layout: default
title: Photo in product description
description: How add nice photo in description at product page
keywords: >
    photo in description, product page
category: Argento
---

# Product page photo in description

![Photo in description at Argento Essence](/images/m2/argento/customization/product/photo-in-description.png)

> Argento theme must have version 1.13.0 or above.

An appropriate picture may convince your customer to make a purchase.

You can position your picture in the product description as illustrated above.

This feature is available in every Argento theme, although it is enabled by default only in Argento Force.

### Manually

This approach is suitable when you want such a picture to be present only on specific product pages.

Edit the desired product in Magento Admin. Find the field where you can edit the product description. Disable WYSIWYG editor for this field. Insert the following HTML code before all content in the description.

```html
<img class="argento-float-photo hidden-xs hidden-sm" src="[URL_TO_IMAGE]" />
```

`[URL_TO_IMAGE]` - the URL to the image you want to display in the description.

Save the product and check the frontend.

##### Some tech info

As you can see, the IMG element has classes:

`argento-float-photo` - an Argento css class that positions an image.

`hidden-xs` - hides an image on mobile devices (screen size less than 768px).

`hidden-sm` - hides an image on tablets (screen size 768px - 1024px).

### Automatically

> **Notice**
>
> This tutorial assumes that you already created a [custom theme](../custom-theme/) based on one of the Argento themes.
>
> If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.

You can add an image in the description for every product. In this case, Magento will use the last image from the product gallery and add it into the product description. If the description already contains an image, Magento will do nothing.

Create a file `view.xml` in the directory `etc` of your custom theme with the following content. If your theme already contains this file, go to the next step.

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <!-- settings go here -->
</view>
```

Add the following to `view.xml` before closing the 'view' node (`</view>`).

```xml
<vars module="Argento_Theme">
    <var name="photo_in_description">
        <var name="add_classes">hidden-xs hidden-sm</var> <!-- hide on mobile screens and tables -->
        <var name="target">#product\\.info\\.description[data-role=content]</var>
    </var>
</vars>
```

Save the file. Clear Magento Cache.
