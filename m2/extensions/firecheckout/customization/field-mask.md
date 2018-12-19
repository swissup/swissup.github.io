---
layout: default
title: Field mask (Formatter)
description: How to apply mask/formatter to some checkout field on Magento 2
keywords: >
    field mask, field formatter
category: Firecheckout
---

# Field mask (Formatter)

> This feature supported since v.1.12.0

Field mask component allows to format user input according to your needs. We
provide build-in masks for the phones and credit cards. Additionally, you may
create [complex masks](/m2/extensions/firecheckout/customization/use-cases/postcode-mask/)
using javascript functions.

Syntax example:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/mask'
], function(mask) {
    'use strict';

    // built-in masks
    mask('[name="telephone"]', 'phone');
    mask('[name="payment[cc_number]"]', 'cc');

    // Custom mask for US postcode
    mask('[name="postcode"]', {
        guide: true,
        mask: function (raw) {
            return [/\d/, /\d/, /\d/, /\d/, /\d/];
        }
    });
});
```

> All custom js should be placed in [custom.js file](../custom-js/)

> Firecheckout uses [Text Mask](https://text-mask.github.io/text-mask/) library
> to create field masks.
>
> Please read [TextMask Docs](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme)
> for more information.

#### Result

![Field Mask](/images/m2/firecheckout/customization/field-mask/firecheckout.png)

##### Next up

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout)
