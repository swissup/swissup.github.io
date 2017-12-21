---
layout: default
title: AMP use cases
h1: Use Cases
description: AMP Use Cases
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

### Contents

<!-- MarkdownTOC -->

- [Set image layout](#set-image-layout)
- [Change image src](#change-image-src)
- [Change css class name](#change-css-class-name)
- [Remove review stars from products list](#remove-review-stars-from-products-list)

<!-- /MarkdownTOC -->

### Set image layout

AMP supports a bunch of
[image layouts](https://www.ampproject.org/docs/reference/components/amp-img).

Our AMP module automatically sets the layout of every image to `responsive`,
except for the small images.

Sometimes you may want to manually set the layout to use for the images inside
product description, or some CMS pages.

Here is an example of how to do that and do not affect desktop theme output:

```html
<img src=".." data-tmamp-layout="fixed"/>
```

Where `data-tmamp-layout` will be converted in `layout` attribute, when AMP is
active only.

### Change image src

Sometimes you may want to use AMP specific image for AMP visitors.

Here is an example of how to do that and do not affect desktop theme:

```html
<img src=".." data-tmamp-src=".."/>
```

Where `data-tmamp-src` will override `src` attribute, when AMP is active.

### Change css class name

> Available since 1.3.0

Sometimes you may want to change css class name of existing element.

Here is an example of how to do that and do not affect desktop theme:

```html
<ul class="desktop-class-that-will-be-removed" data-tmamp-class="list-unstyled">
    <li>...</li>
</ul>
```

Where `list-unstyled` - is a AMP supported
[css class name](/m1/extensions/amp/customization/css-helpers/).

### Remove review stars from products list

In case you want to have minimalistic products listing at AMP version of your store you may want to remove review stars from product list.

Obviously you can hide them with CSS. Here is article how to [add custome styles to AMP pages](../customization/design/custom-styles/). But the best way is layout XML.

Create `local.xml` file at `app/design/frontend/tmamp/default/layout/`. And add there code below there:

```xml
<layout version="0.1.0">
    <!-- remove stars from listing with layered navigation -->
    <catalog_category_layered>
        <reference name="product_list">
            <action method="addReviewSummaryTemplate">
                <type>default</type>
                <template>0</template>
            </action>
            <action method="addReviewSummaryTemplate">
                <type>short</type>
                <template>0</template>
            </action>
        </reference>
    </catalog_category_layered>
    <!-- remove stars from listing where layered navigation is disabled -->
    <catalog_category_default>
        <reference name="product_list">
            <action method="addReviewSummaryTemplate">
                <type>default</type>
                <template>0</template>
            </action>
            <action method="addReviewSummaryTemplate">
                <type>short</type>
                <template>0</template>
            </action>
        </reference>
    </catalog_category_default>
</layout>
```

Please do not forget to clear Magento cache.
