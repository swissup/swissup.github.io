---
layout: default
title: Argento less mixins
description: How to use less mixins to modify store look and feel
keywords: >
    less mixins, invert button state
category: Argento
---

# Less mixins

### Contents

 1. [Invert button state](#invert-button-state)
 2. [Page container](#page-container)
 3. [Product listing](#product-listing)

### Invert button state

This mixin allows to change how the button looks and swap default and hovered
states.

You can see how it looks like in ArgentoPure2 theme. Take a look at the `Add To Cart`
button at product page.

Usage example:

```scss
.block-minicart {
    .actions {
        .action {
            &.primary {
                .argento-button-primary-invert-state();
            }
        }
    }
}
```

### Page container

Applies centering, max-width and spacing styles for the block.

Usage example:

```scss
.jumbotron {
    .argento-page-container(~"> .container");
}
```

### Product listing

Example:

```scss
.page-products .products-grid .product-item,
.block.widget .products-grid .product-item {
    .argento-listing-squama();
}
```

See more examples about squama-listing in a
[separate article](../change-product-listing-styles/).
