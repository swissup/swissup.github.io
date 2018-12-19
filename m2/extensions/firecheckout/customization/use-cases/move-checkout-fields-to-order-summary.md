---
layout: default
title: Move checkout fields to Order Summary
description: How to move checkout fields to the Order Summary section
category: Firecheckout
---

# Move checkout fields to Order Summary

> This feature supported since v.1.16.0

1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
   in your active theme with following content:

   ```js
   define([
       'Swissup_Firecheckout/js/utils/move'
   ], function (move) {
       'use strict';

       // Since "Order Review" is moved after summary title too, we need to use `sortOrder`
       // as a second argument to place "Checkout Fields" before "Order Review":
       move('.swissup-checkout-fields').after('.opc-block-summary > .title', 0);

       // OR move above order summary:
       // move('.swissup-checkout-fields').before('.opc-block-summary');
   });
   ```

2. Run "Deploy static content" command:

   ```bash
   cd <magento_root>

   # remove previously deployed firecheckout files
   find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

   # run deployment command
   bin/magento setup:static-content:deploy
   ```

#### Result

Fields inside Order Summary | Fields above Order Summary
----------------------------|---------------------------
![Screenshot](/images/m2/firecheckout/customization/move-checkout-fields-to-order-summary/checkout-fields-inside-order-summary.png) | ![Screenshot](/images/m2/firecheckout/customization/move-checkout-fields-to-order-summary/checkout-fields-above-order-summary.png)

##### Next up

 -  [Move.js utility](/m2/extensions/firecheckout/customization/move-js/)
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
