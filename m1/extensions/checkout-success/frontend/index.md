---
layout: default
title: Frontend
description: magento checkout success frontend
keywords: "checkout success frontend, custom css style, custom js"
category: Checkout Success
---

# Frontend

![Checkout Success Page](/images/m1/extensions/checkout-success/frontend/success-page.png)

You can fully change and reorganize success page layout at
[extension backend configuration](../backend/#mockup).

### Change success page styles

To make a changes to checkout success page styles, you can create `custom.css`
file at `skin/frontent/base/default/tm/checkoutsuccess/css` directory.

You can also place this file to the `active_package/active_theme` directory,
if you wish to change styles per theme.

The file will be automatically included at the checkout success page.

### Add custom javascript at success page

To add additional javascript logic you can use backend option [`Additional content at the bottom of success page`](../backend/#general). But if you do
not like inline javascript you can create `custom.js` file in `skin/frontend/base/default/tm/checkoutsuccess/js` directory.

You can also place this file to the `active_package/active_theme` directory,
if you wish to add javascript for specific theme only.

The file will be automatically included at the checkout success page.
