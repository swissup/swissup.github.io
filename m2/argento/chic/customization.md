---
layout: default
title: Argento Chic Customization
description: Argento Chic Customization
category: Argento
---

## Chic customization
{:.no_toc}

* TOC
{:toc}

### Show Qty field at product page

Quantity field in add-to-cart form is hidden by default at product page for Chic design. But if you want to make it visible then it is not a problem at all.

There are two ways:

 1. Create [Argento-based custom theme](/m2/argento/customization/custom-theme/) and change value of LESS variable:

    ```less
    @product-qty-field__hide: false;
    ```

 2. Or insert the same code to the [Chic theme editor](../theme-editor/) section `Additional Styles > Less styles`.

 3. Run `setup:static-content:deploy` command to see the changes.

![Add to cart form with Qty field](/images/m2/argento/chic/product/add-form-qty-enabled.png)
