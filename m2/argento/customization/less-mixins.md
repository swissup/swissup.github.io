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
