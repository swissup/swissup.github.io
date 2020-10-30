---
layout: default
title: Checkout Cart
description: magento 2 checkout cart module documentation
keywords: checkout ajax cart, ajax cart magento 2, ajax cart at checkout page
category: Checkout Cart
---

# Checkout Cart

Checkout Cart extension improves Order Summary section at checkout:

 -  Edit cart items quantity
 -  Remove items from cart
 -  Display product name as link
 -  Display product SKU below product name
 -  Move order totals to the bottom of Order Summary section

Extension is compatible with [Firecheckout](../firecheckout) and Magento Onepage Checkout.

{% include gallery.html images=site.data.gallery.m2.checkout-cart.index class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

1. [Installation](installation/)
2. [Changelog](changelog/)
3. [Settings](#settings)
4. [Known Issues](#known-issues)

## Settings

Module settings are located at
_Stores > Configuration > Swissup Checkout > Checkout Cart_ page.

![Settings](/images/m2/checkout-cart/settings.png)

Option  | Description
--------|------------
Enabled | Ability to enable/disable quantity switcher at the checkout
Allow Changing Product Quantity | Ability to enable/disable qty unput fields
Display Product SKU | Ability to show product sku
Display Product Name as Link | Ability to show product name as a link to the product page
Move Totals Under Product Details in Order Summary | Ability to move Order Totals section below products list

## Known Issues

##### Shipping method depends from totals on default checkout

When you have shipping method which has `Minimum Order Amount` set in config,
you can face following problem on default checkout:

 -  you add few products to cart and totals amount is greater
 than configured `Minimum Order Amount`
 -  on checkout `Shipping` step you select shipping method
 -  on checkout `Payment` step you decrease quantity and order amount
 becomes smaller than configured `Minimum Order Amount`
 -  shipping method selected on `Shipping` step becomes unavailable
 and you can't place order

This issue only happens on default Magento 2 checkout.
There is no such problem with [Firecheckout](../firecheckout).
