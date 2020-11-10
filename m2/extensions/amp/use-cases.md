---
layout: default
title: AMP use cases
description: AMP Use Cases
category: Accelerated Mobile Pages
---

# Use Cases

* TOC
{:toc}

### Set image layout

AMP supports a bunch of
[image layouts](https://www.ampproject.org/docs/reference/components/amp-img).

Our AMP module automatically sets the layout of every image to `responsive`,
except for the small images.

Sometimes you may want to manually set the layout to use for the images inside
product description, or some CMS pages.

Here is an example of how to do that and do not affect desktop theme output:

```html
<img src=".." data-swissupamp-layout="fixed"/>
```

Where `data-swissupamp-layout` will be converted in `layout` attribute, when AMP is
active only.

### Change image src

Sometimes you may want to use AMP specific image for AMP visitors.

Here is an example of how to do that and do not affect desktop theme:

```html
<img src=".." data-swissupamp-src=".."/>
```

Where `data-swissupamp-src` will override `src` attribute, when AMP is active.

### Change css class name

Sometimes you may want to change css class name of existing element.

Here is an example of how to do that and do not affect desktop theme:

```html
<ul class="desktop-class-that-will-be-removed" data-swissupamp-class="list-unstyled">
    <li>...</li>
</ul>
```

Where `list-unstyled` - is a AMP supported
[css class name](/m2/extensions/amp/customization/css-helpers/).

Please do not forget to clear Magento cache.

### Remove tag attributes

> Available since 1.3.0

Sometimes you may want to remove some attributes from existing element.

Here is an example of how to do that and do not affect desktop theme:

```html
<div attribute="value" another_one="value" data-swissupamp-remove="attribute,another_one">
    ...
</div>
```

### Remove tag

> Available since 1.3.0

Sometimes you may want to completely remove some element.

Here is an example of how to do that and do not affect desktop theme:

```html
<div data-swissupamp-remove="!">
    ...
</div>
```

### Change logo size

To change logo size on AMP follow the next steps:

 - change logo block size in styles setting [logo size variables](/m2/extensions/amp/customization/design/sass-variables/#header) in [custom scss file](/m2/extensions/amp/customization/design/custom-styles/)

 - create layout xml file `Swissup_Amp/layout/swissupamp_default.xml` in your active theme folder with the following content:

```xml
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/layout_generic.xsd">
    <body>
        <referenceBlock name="logo">
            <arguments>
                <argument name="logo_width" xsi:type="number">322</argument>
                <argument name="logo_height" xsi:type="number">64</argument>
            </arguments>
        </referenceBlock>
    </body>
</layout>
```
