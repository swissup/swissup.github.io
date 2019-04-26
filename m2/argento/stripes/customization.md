---
layout: default
title: Argento Stripes Customization
description: Argento Stripes Customization
category: Argento
---

## Stripes customization
{:.no_toc}

* TOC
{:toc}

### Show Qty field at product page

Quantity field in add-to-cart form is hidden by default at product page for Stripes design. But if you want to make it visible then it is not a problem at all.

There are two ways:

 1. Create [Argento-based custom theme](/m2/argento/customization/custom-theme/) and change value of LESS variable:

    ```less
    @product-qty-field__hide: true;
    ```

 2. Or use [Stripes theme editor](../theme-editor/), section 'Additional CSS Styles'. Add small CSS code:

    ```css
    .box-tocart .field.qty { display: block; }
    ```

![Add to cart form with Qty field](/images/m2/argento/stripes/product-page/add-form-qty-enabled.png)
