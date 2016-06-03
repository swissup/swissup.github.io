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
> If you did not &mdash; [go ahead](../custom-css/), it will take 5 minutes.

 1. [Columns count](#columns-count)
 2. [Squama listing styles](#squama-listing-styles)
 3. [Remove listing styles](#remove-listing-styles)

### Columns count

Products listing columns count is controlled by less variables:

Variable | Device | Value
---------|-------------|------
**1 column layout variables** ||
@product-grid-items-per-row-layout-1-screen-m | Tablet  | 4
@product-grid-items-per-row-layout-1-screen-l | Desktop | 4
**2 columns layout variables** ||
@product-grid-items-per-row-layout-2-screen-m | Tablet  | 3
@product-grid-items-per-row-layout-2-screen-l | Desktop | 3
**3 columns layout variables** ||
@product-grid-items-per-row-layout-3-screen-m | Tablet  | 3
@product-grid-items-per-row-layout-3-screen-l | Desktop | 3

Open `_argento_custom.less` file and add the following content:

```scss
@product-grid-items-per-row-layout-2-screen-l: 5;
@product-grid-items-per-row-layout-3-screen-l: 4;
```

### Squama listing styles

Squama listing mixin is used on Argento Essence theme. It provides following
variables:

Variable | Description | Default Value
---------|-------------|--------------
@argento-listing-squama__height | Item height | 380px
@argento-listing-squama__gutter | Guter between items | 0
@argento-listing-squama__padding | Item inner padding | @product-grid-item-padding (5px)
@argento-listing-squama__overlap | Hovered item overlap | 5px

Let's make items shorter, and increase hover effect:

Open `_argento_custom.less` file and add the following content:

```scss
@argento-listing-squama__height: 300px;
@argento-listing-squama__overlap: 15px;
```

### Remove listing styles

All Argento listing mixins can be modified or cancelled with appropriate
variables or `reset` mixin:

```scss
// remove squama styles completely
.page-products .products-grid .product-item,
.block.widget .products-grid .product-item {
    .argento-listing-squama-reset();
}
```
