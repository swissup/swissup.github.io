---
layout: default
title: Combine several Use Cases
description: How to combine several use-cases into one js file
category: Firecheckout
---

# How to combine several use cases

In this tutorial we'll tell you on how to write javascript file that will
include multiple use-cases.

First of all, you need a basic understanding of `define` and `require` methods:

> **define vs require**
>
> Use `define` method when writing [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
>
> Use `require` method when writing script into the [settings field](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section)

```js
define(params, callback);
require(params, callback);
```

Option  | Description
--------|----------------------------
params  | Array of required resources
callback| Function that will be executed when ALL params are loaded. This function receives all params **in the same order as they where requested**.

Params and callback example:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/mask', // <-- First requested resource
    'mage/translate'                                 // <-- Second requested resource
], function (
    mask,   // <-- Reference to the first resource. We call it `mask`
    $t      // <-- Reference to the second resource. We call it `$t`
) {
    // We can use these resources according to their docs:
    mask('[name="telephone"]', 'phone');
    $t('Phrase to Translate');
});
```

Let's combine ["Move Checkout Fields to the Order Summary section"](/m2/extensions/firecheckout/customization/use-cases/move-checkout-fields-to-order-summary/)
and ["Housenumber"](/m2/extensions/firecheckout/customization/use-cases/housenumber/)
use cases into single custom.js file:

```js
define([
    // Require resources that are used in both use cases. Duplicates should be removed if found.
    'Swissup_Firecheckout/js/utils/move',
    'Swissup_Firecheckout/js/utils/form-field/manager',
    'Swissup_Firecheckout/js/utils/form-field/classname',
    'mage/translate'
], function (
    // Name all required resources. Use the same names that where used in use-cases.
    move,
    manager,
    classname,
    $t
) {
    'use strict';

    // Code from the First use case
    move('.swissup-checkout-fields').after('.opc-block-summary > .title', 0);

    // Code from the second use case
    classname('.street', 'fc-col-12');
    classname('[name="street[0]"]', 'fc-col-8 fc-size-s:fc-col-6 fc-size-xs:fc-col-12');
    manager('[name="street[1]"]', {
        label: 'Housenumber',
        placeholder: 'Housenumber',
        classname: 'fc-col-4 fc-size-s:fc-col-6 fc-size-xs:fc-col-12',
        validator: {
            'lazy': true,
            'required': true,
            'fc-custom-rule-housenumber': {
                handler: function (value) {
                    return new RegExp(/^\d+[a-zA-Z]?$/).test(value);
                },
                message: $t('Invalid housenumber. Valid examples: 42, 3A, 18C')
            }
        }
    });
});
```

That's all. Redeploy static content to see the changes in custom.js file:

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
