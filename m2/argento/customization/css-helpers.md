---
layout: default
title: Argento css helpers
description: How to use css helpers to organize store content
keywords: >
    css helpers, product listing mixins, responsive utilites, visible and hidden
    classes, responsive embed, responsive video, responsive iframe
category: Argento
---

# Css helpers

### Contents

 1. [Product listing mixins](#product-listing-mixins)
 2. [Visible and hidden classes](#visible-and-hidden-classes)
 3. [Responsive embed](#responsive-embed)

### Product listing mixins

All Argento themes utilize css mixins to organize product listing styles. Each
mixin can be cancelled with `*-reset` mixin, where `*` - is original mixin
name.

##### Argento Essence

Argento Essence uses `.argento-listing-squama` mixin by default:

```scss
.page-products .products-grid .product-item,
.block.widget .products-grid .product-item {
    .argento-listing-squama();
}
```

Variable | Description | Default Value
---------|-------------|--------------
@argento-listing-squama__height | Item height | 380px
@argento-listing-squama__gutter | Guter between items | 0
@argento-listing-squama__padding | Item inner padding | @product-grid-item-padding (5px)
@argento-listing-squama__overlap | Hovered item overlap | 5px

##### How to replace default mixin with something else

> First you need to create [custom less file](../custom-css/) and write all
> changes to this file only.

All Argento listing mixins can be modified or cancelled with appropriate
variables or `reset` mixin:

```scss
// change squama styles
@argento-listing-squama__overlap: 20px;

// OR remove squama styles completely
.page-products .products-grid .product-item,
.block.widget .products-grid .product-item {
    .argento-listing-squama-reset();
    // apply your styles
}
```

### Visible and hidden classes

Argento provides Bootstrap `visible-*` and `hidden-*` classes, to help you to
organize custom content.

Examples:

```html
<!-- Visible on the phones only -->
<img class="visible-xs-block" src="..." alt="..."/>

<!-- Hidden on the phones -->
<img class="hidden-xs" src="..." alt="..."/>
```

Please read [official Bootstrap documentation](http://getbootstrap.com/css/#responsive-utilities)
for more information.

### Responsive embed

You can use Bootstrap `embed-responsive` class to make any video content responsive.

Examples:

```html
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```

Please read [official Bootstrap documentation](http://getbootstrap.com/components/#responsive-embed)
for more information.
