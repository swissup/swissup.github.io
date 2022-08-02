---
layout: default
title: Masks for the phone fields
description: create brazilian masks for the phone fields
keywords: brazilian phone masks
category: Firecheckout
---

# Phone Fields mask

 This article help you to set the right mask for the fields: `telephone`, `fax`.
> Firecheckout uses [Text Mask](https://text-mask.github.io/text-mask/) library
> to create field masks.
>
> Please read [TextMask Docs](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme)
> for more information.

 1. Create `custom.js` file. [custom.js](/m2/extensions/firecheckout/customization/custom-js/)
 2. Using a demo of Text Mask, choose the phone mask.
 3. According this an example set the masks.

    ```js
        define([
            'jquery',
            'underscore',
            'Swissup_Firecheckout/js/utils/form-field/mask',
            'Swissup_Firecheckout/js/utils/form-field/placeholder'
        ], function ($, _, mask, placeholder) {
            'use strict';

            // define scope form which will be using to set the phone-mask
            var scopes = [
                '.form-shipping-address',
                '.form-billing-address'
            ];

            _.each(scopes, function (scope) {
                mask('[name="telephone"]',{
                    guide: false,
                    mask: function (raw) {
                        var mask =['(',/\d/, /\d/,')',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];

                        if (raw.length == 13) {
                            mask = ['(',/\d/, /\d/,')',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
                        }

                        return mask;
                    }

                });

                mask('[name="fax"]',{
                    guide: false,
                    mask: function (raw) {
                        var mask =[/\d/, /\d/,'-',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
                        return mask;
                    }
                });
            });
            // you can show the mask of a field in the placeholder
            placeholder('[name="fax"]','00-000-0000');
        });
    ```
    **Result**

    ![phone-masks](/images/m2/firecheckout/brazil/phone-masks.png)

 4. Save the file and run following bash commands to deploy script:

    ```
        cd magento/root/folder
        rm -rf var/view_preprocessed pub/static/frontend
        bin/magento setup:static-content:deploy
    ```

 5. That's all.

##### Next up

 -  [Back to home](/m2/extensions/firecheckout)