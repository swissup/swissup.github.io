---
layout: default
title: Collapsible checkout fields
description: How to collapse checkout fields section
category: Firecheckout
---

# Collapsible checkout fields section

> This feature supported since v.1.17.0

 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:

    ```js
    define([
        'Swissup_Firecheckout/js/utils/move',
        'Swissup_Firecheckout/js/utils/collapsible'
    ], function (move, collapsible) {
        'use strict';

        // move checkout fields above 'Discount' block
        move('.swissup-checkout-fields').before('.discount-code');

        // make it collapsible
        collapsible('.swissup-checkout-fields');
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

![Screenshot](/images/m2/firecheckout/customization/collapsible-checkout-fields/result.png)

##### Next up

 -  [Collapsible.js utility](/m2/extensions/firecheckout/customization/collapsible-js/)
 -  [Move Checkout Fields to the Order Summary](/m2/extensions/firecheckout/customization/use-cases/move-checkout-fields-to-order-summary/)
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
