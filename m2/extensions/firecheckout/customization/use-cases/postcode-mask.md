---
layout: default
title: Postcode Mask
description: How to create dynamic postcode mask
keywords: >
    postcode mask, postcode formatter
category: Firecheckout
---

# Postcode mask

> This feature supported since v.1.10.0

In this tutorial we will create dynamic [field mask](/m2/extensions/firecheckout/customization/field-mask/),
that will change the mask on the fly, depending on client's input.

 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:

    ```js
    define([
        'Swissup_Firecheckout/js/utils/form-field/mask'
    ], function (mask) {
        'use strict';

        mask('[name="postcode"]', {
            guide: true,
            mask: function (raw) {
                // 5 digits by default ('90064' for example)
                var mask = [/\d/, /\d/, /\d/, /\d/, /\d/];

                // Use Canadian postal code if first symbol is alphabetical
                if (/^[a-zA-Z]/.test(raw)) {
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

 2. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout files
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```

##### Next up

 -  [Back to home](/m2/extensions/firecheckout/)
