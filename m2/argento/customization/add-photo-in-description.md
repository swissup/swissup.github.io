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

Beautiful picture can be a difference maker that convince your customer to make a purchase.

You can position your picture in product description in the same way as above. And this is available in every Argento theme.

This feature is enabled in Argento Forece by default.

### Manually

This approach can be useful when you want to have such kind of picture only at specific products.

Edit product in Magento Admin. Find field where you can edit product description. Disable WYSIWYG editor for this field. And insert HTML code before all content in description. You can find this code below.

```html
<img class="argento-float-photo hidden-xs hidden-sm" src="[URL_TO_IMAGE]" />
```

`[URL_TO_IMAGE]` - URL to image you want to show in description.

Save product and you can check product page at frontend.

##### Some tech info

As you can see IMG element has classes:

`argento-float-photo` - Argento css class that positions picture.

`hidden-xs` - hide image on mobile devices. Screen less then 768px.

`hidden-sm` - hide images on tablets. Screen 768px - 1024px.

### Automatically

> **Notice**
>
> This tutorial assumes that you already created [custom theme](../custom-theme/) based on one of Argento themes.
>
> If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.

Also you can add photo in description for every product. In this case Magento will use last image from product gallery and add it into product description. If description already has photo-in-description then Magento will do nothing.

Create `view.xml` file at directory `etc` of your custom theme with follow content. In case your theme has such file go to next paragraph.

```xml
<?xml version="1.0"?>
<view xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/view.xsd">
    <!-- settings go here -->
</view>
```

Add settings to `view.xml`. Insert them before closing 'view' node (`</view>`).

```xml
<vars module="Argento_Theme">
    <var name="photo_in_description">
        <var name="add_classes">hidden-xs hidden-sm</var> <!-- hide on mobile screens and tables -->
        <var name="target">#product\\.info\\.description[data-role=content]</var>
    </var>
</vars>
```

Save file. Clear Magento Cache.