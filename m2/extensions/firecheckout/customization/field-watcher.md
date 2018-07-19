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

* TOC
{:toc}

### Basic syntax examples

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/watcher'
], function(watcher) {
    'use strict';

    // Shortest syntax: callback is triggered after each field manipulation
    watcher('[name="customer-subscription"]', function (result) {
        console.log('Subscription checkbox: ' + result);
    });

    // Full syntax with all available options:
    watcher({
        scope: '.checkout-shipping-address',        // Watch for elements inside this parent only

        // Watch for multiple fields values
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

### Billing address examples

Depending on Magento's configuration it's possible that multiple billing addresses
will be rendered. In this case, we need to watch for the active address form only.
Below, you will find an example on how to do that.

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/watcher'
], function(watcher) {
    'use strict';

    // 1. When address is rendered inside each payment method form
    watcher({
        watch: {
            '.payment-method._active [name="city"]': '*',
            '.payment-method._active [name="country_id"]': ['US', 'GB'],
            '[name="payment[method]"]': 'purchaseorder'
        },

        /**
         * Custom match callback
         */
        match: function () {
            console.log('Match!');
        },

        /**
         * Custom unmatch callback
         */
        unmatch: function () {
            console.log('Unmatch.');
        }
    });

    // 2. When address is rendered outside of payment method form
    watcher({
        scope: '.checkout-payment-method',

        watch: {
            '[name="city"]': '*',
            '[name="country_id"]': ['US', 'GB'],
            '[name="payment[method]"]': 'purchaseorder'
        },

        /**
         * Custom match callback
         */
        match: function () {
            console.log('Match!');
        },

        /**
         * Custom unmatch callback
         */
        unmatch: function () {
            console.log('Unmatch.');
        }
    });
});
```

> All custom js should be placed in [custom.js file](../custom-js/)

##### Next up
{:.no_toc}

 -  [Back to home](/m2/extensions/firecheckout)
