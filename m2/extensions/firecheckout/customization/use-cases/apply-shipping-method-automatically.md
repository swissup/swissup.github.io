---
layout: default
title: apply shipping method automatically
description: How to apply a shipping method automatically by price for example?
keywords: shipping method,
category: Firecheckout
---

# Apply Shipping Method Automatically

Following this article it’s possible to adjust the checkout process more automatically.


In this example code we show you how to customize this process by specific product price, when it more or equal 100.


 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:
    ```js
    define([
        'underscore',
        'Magento_Ui/js/lib/view/utils/async,'
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/totals'
    ], function(_, $, quote, totals) {
        'use strict';

        // create checkbox for updating a shipping method
        var isClicked = false;

        $.async('.table-checkout-shipping-method .row', function (el) {
            $(el).click(function () {
                isClicked = true;
            });
        });

        $.async('.details-qty .qty-wrapper', function (el) {    // change status after changing the quantity
            $(el).click(function () {
                isClicked = false;
            });
        });

         // apply shipping method 'First' automatically when the price >= 100
        quote.totals.subscribe(_.debounce(function(totals) {
            var price,
                shipping_method;

            if (isClicked) {
                return;
            }

            // get total price
            price = totals['grand_total'];

            if (price >= 100) {
                shipping_method = '#shipping_method_first';
            } else {
                shipping_method = '#shipping_method_second';
            }

            if ($(shipping_method).prop('checked')) {          // check if shipping method "first" is already applied
                return;
            }

            // Triggered when it did not apply
            $(shipping_method).trigger('click');
            isClicked = false;

        }, 200));

    })

    ```

 2. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout files
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```


##### Next up

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
