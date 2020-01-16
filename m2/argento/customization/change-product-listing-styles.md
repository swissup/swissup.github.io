---
layout: default
title: Change product listing styles
description: How to change products columns count
keywords: products listing, columns count
category: Argento
---

# Change listing styles

> **Notice**
>
> This tutorial assumes that you already created [custom css](../custom-css/)
> to add additional css styles
>
> If you did not — [go ahead](../custom-css/), it will take 5 minutes.

 1. [Columns count](#columns-count)
 2. [Product listing styles](#product-listing-styles)
 3. [Squama mixin](#squama-mixin)
 4. [Remove squama styles](#remove-squama-styles)

### Columns count

Products listing columns count is controlled by less variables:

Type | Variable | Device | Value
-----|---------|-------------|------
Category Listing |||
| **1 column layout variables** ||
| @product-grid-items-per-row-layout-1-screen-m | Tablet  | 4
| @product-grid-items-per-row-layout-1-screen-l | Desktop | 4
| **2 columns layout variables** ||
| @product-grid-items-per-row-layout-2-screen-m | Tablet  | 3
| @product-grid-items-per-row-layout-2-screen-l | Desktop | 3
| **3 columns layout variables** ||
| @product-grid-items-per-row-layout-3-screen-m | Tablet  | 3
| @product-grid-items-per-row-layout-3-screen-l | Desktop | 3
Upsell and Related products (Product page) |||
| **1 column layout variables** ||
| @product-grid-upsell-related-items-per-row-layout-1-screen-m | Tablet | 4
| @product-grid-upsell-related-items-per-row-layout-1-screen-l | Desktop | 6
| **2 columns layout variables** ||
| @product-grid-upsell-related-items-per-row-layout-2-screen-m | Tablet | 3
| @product-grid-upsell-related-items-per-row-layout-2-screen-l | Desktop | 5
| **3 columns layout variables** ||
| @product-grid-upsell-related-items-per-row-layout-3-screen-m | Tablet | 3
| @product-grid-upsell-related-items-per-row-layout-3-screen-l | Desktop | 4
Crossell products (Shopping cart page) |||
| @product-grid-cart-crossell-items-per-row-screen-m | Tablet | 3
| @product-grid-cart-crossell-items-per-row-screen-l | Desktop | 4

Open `_argento_custom.less` file and add the following content:

```scss
@product-grid-items-per-row-layout-2-screen-l: 5;
@product-grid-items-per-row-layout-3-screen-l: 4;
```

### Product listing styles

Variable | Description | Default Value
---------|-------------|--------------
@product-grid-item-align | Item alignment | inherit
@product-grid-item-gutter | Side gutter between items | 6px
@product-grid-item-gutter-bottom | Bottom gutter between items | @product-grid-item-gutter
@product-grid-item-padding | Item padding | 5px
@product-grid-item-background | Item background | transparent
@product-grid-item-border | Item border | none
@product-grid-item-box-shadow | Item shadow | none

### Squama mixin

Squama listing mixin is used on Argento Essence theme. It provides following
variables:

Variable | Description | Default Value
---------|-------------|--------------
**Default state** ||
@argento-listing-squama__height | Item height | 380px
@argento-listing-squama__padding | Item inner padding | @product-grid-item-padding (5px)
@argento-listing-squama__border | Item border | none
@argento-listing-squama__box-shadow | Item shadow | none
**Hover state** ||
@argento-listing-squama__hover__enlargement | Item enlargement | 5px
@argento-listing-squama__hover__border | Item border | @argento-listing-squama__border
@argento-listing-squama__hover__box-shadow | Item shadow | 0 0 5px rgba(0, 0, 0, 0.2)

Let's make items shorter, and increase hover effect:

Open `_argento_custom.less` file and add the following content:

```scss
@argento-listing-squama__height: 300px;
@argento-listing-squama__hover__enlargement: 15px;
```

### Remove squama styles

All Argento listing mixins can be modified or cancelled with appropriate
variables or `reset` mixin:

```scss
// remove squama styles completely
.media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__m) {
    .page-products,
    .block.widget {
        .products-grid .product-items:not(.slick-slider) .product-item {
            .argento-listing-squama-reset();
        }
    }
}
```
