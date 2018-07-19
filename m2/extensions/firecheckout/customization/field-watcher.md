---
layout: default
title: Field Watcher
description: >
    Field watcher allows to call some custom method when field values condition
    is matched
keywords: >
    field watcher
category: Firecheckout
---

# Field watcher

> This feature supported since v.1.11.0

FieldWatcher component allows to call any custom function when field values
condition is matched.

Here is a syntax examples:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/watcher'
], function(watcher) {
    'use strict';

    // Shortest syntax:
    // watch for purchase order radio button changes
    watcher('#purchaseorder', function (result) {
        console.log('purchaseorder: ' + result);
    });

    // The same watcher in full syntax
    watcher({
        watch: {
            '#purchaseorder': true
        },
        always: function (result) {
            console.log('purchaseorder: ' + result);
        }
    });

    // Full syntax with all available options:
    watcher({
        scope: '.checkout-shipping-address',        // Watch for elements inside this parent only

        // Watch for multiple fields:
        watch: {
            '[name="city"]': '*',                   // Any non empty city value
            '[name="country_id"]': ['US', 'GB'],    // US or GB in country dropdown
            '[name="customer-subscription"]': true  // Subscription checkbox is checked
        },

        /**
         * Triggered when all conditions are matched
         */
        match: function () {
            console.log('All fields are matched');
        },

        /**
         * Triggered when some conditions are not matched
         */
        unmatch: function () {
            console.log('Some of the fields not matched');
        },

        /**
         * Triggered each time after watched field was updated
         */
        always: function (result) {
            console.log(result);
        }
    });
});
```

> All custom js should be placed in [custom.js file](../custom-js/)

##### Next up

 -  [Back to home](/m2/extensions/firecheckout)
