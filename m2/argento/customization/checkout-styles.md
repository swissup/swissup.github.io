---
layout: default
title: Checkout styles
description: How to update checkout page styles
keywords: checkout
category: Argento
---

# Checkout styles

> This feature is supported since Argento 1.10.0.

> **Notice**
>
> This tutorial assumes that you already created a [custom css](../custom-css/)
> to add css styles.
>
> If you did not — [go ahead](../custom-css/), it will take 5 minutes.

[View Screenshot](/images/m2/argento/customization/checkout/map.png)

### Global variables

Variable | Default Value | Description
---------|----------------------------------
@argento-checkout | true | Enable/Disable argento checkout styles

### Layout styles

Variable | Default Value
---------|----------------------------------
@argento-checkout-layout__max-width | 1024px

### Main sections

Variable | Default Value
---------|----------------------------------
@argento-checkout-section__background       | #fff
@argento-checkout-section__border-color     | #f2f5f7
@argento-checkout-section__border-radius    | 4px
@argento-checkout-section__border           | 1px solid @argento-checkout-section__border-color
@argento-checkout-section__box-shadow       | 0 2px 6px -5px rgba(0, 0, 0, 0.1)
@argento-checkout-section__padding          | 25px 35px
@argento-checkout-section-title__border     | 0
@argento-checkout-section-title__margin     | 0
@argento-checkout-section-title__padding    | 0 0 15px
@argento-checkout-section-title__font-size  | 2.6rem
@argento-checkout-section-title__font-weight | bold

### Input fields

Variable | Default Value
---------|----------------------------------
@argento-checkout-field__per-line       | 2
@argento-checkout-field__height         | 41px
@argento-checkout-field__border-color   | #ddd
@argento-checkout-field__border         | 1px solid @argento-checkout-field__border-color
@argento-checkout-field__padding        | 2px 10px
@argento-checkout-field__border-radius  | 2px
@argento-checkout-field__focus__border-color | #bbb
@argento-checkout-field__margin-left    | 5px
@argento-checkout-field__margin-right   | 5px
@argento-checkout-field__margin-top     | 0
@argento-checkout-field__margin-bottom  | 20px

### Saved address

Variable | Default Value
---------|----------------------------------
@argento-checkout-shipping-item__width | 100%/2;

### Ajax loaders

Variable | Default Value
---------|----------------------------------
@argento-checkout-loader__size          | 30px
@argento-checkout-loader__border-width  | 2px
@argento-checkout-loader__border-color  | #000
@argento-checkout-loader__border-secondary-color | transparent

### Tooltips

Variable | Default Value
---------|----------------------------------
@checkout-tooltip-content__background-color | #fff
@checkout-tooltip-content__border-color | #f2f5f7
@checkout-tooltip-content__drop-shadow | 0 0 5px rgba(0, 0, 0, 0.03)
@checkout-tooltip-content__active__border-color | @checkout-tooltip-content__border-color
