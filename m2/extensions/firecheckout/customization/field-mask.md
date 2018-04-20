---
layout: default
title: Field mask (Formatter)
description: How to apply mask/formatter to some checkout field on Magento 2
keywords: >
    field mask, field formatter
category: Firecheckout
---

# Field mask (Formatter)

> This feature supported since v.1.10.0

 1. Create [custom.js file](../custom-js/) in your active theme with
    following content:

    ```js
    define([
        'Swissup_Firecheckout/js/lib/field-mask'
    ], function(mask) {
        'use strict';

        // predefined phone mask
        mask('[name="telephone"]', 'phone');
        mask('[name="fax"]', 'phone');

        // predefined credit card mask
        mask('[name="payment[cc_number]"]', 'cc');

        // custom postal code mask
        mask('[name="postcode"]', {
            guide: true,
            mask: function (raw) {
                var mask = [/\d/, /\d/, /\d/, /\d/, /\d/];
                if (/^[a-zA-Z]/.test(raw)) {
                    // Use Canadian postal code if first symbol is alphabetical
                    mask = [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/];
                }
                return mask;
            },
            pipe: function (conformedValue) {
                return conformedValue.toUpperCase();
            }
        });
    });
    ```

    Firecheckout uses [Text Mask](https://text-mask.github.io/text-mask/) library
    to create field masks.

    Please read [TextMask Docs](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme)
    for more information.

 2. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout files
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```

#### Result

![Field Mask](/images/m2/firecheckout/customization/field-mask/firecheckout.png)

##### Next up

- [Back to home](/m2/extensions/firecheckout)
