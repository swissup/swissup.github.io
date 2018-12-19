---
layout: default
title: Move.js utility
description: How to apply mask/formatter to some checkout field on Magento 2
keywords: >
    field mask, field formatter
category: Firecheckout
---

# Move.js

> This feature supported since v.1.16.0

Move.js utility allows to move some elements from one place to another.

Syntax examples:

```js
define([
    'Swissup_Firecheckout/js/utils/move'
], function(move) {
    'use strict';

    // 0. General example
    move('.any #valid .css-selector').after('.another .valid #css-selector');

    // 1. Move element with ID=css-selector1 after element with ID=#destination
    move('#css-selector1').after('#destination');

    // 2. Move element with ID=css-selector1 before element with `destination` class name
    move('#css-selector1').before('.destination');

    // 3. Move element with ID=css-selector1 to the top of the element with name=destination
    move('#css-selector1').prepend('[name="destination"]');

    // 4. Move element with ID=css-selector1 to the bottom of the element with ID=#destination
    move('#css-selector1').append('#destination');

    // 5. Since move.js is a asynchronous script, there is an optional
    //    `sortOrder` parameter (100 by default).
    //    Use it when moving several elements into the same destination to
    //    guarantee correct order:
    move('#css-selector1').after('#destination', 10);
    move('#css-selector2').after('#destination', 20);
    move('#css-selector3').after('#destination', 5);
});
```

##### Next up

 -  [Move Checkout Fields to the Order Summary](/m2/extensions/firecheckout/customization/use-cases/move-checkout-fields-to-order-summary/)
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout)
