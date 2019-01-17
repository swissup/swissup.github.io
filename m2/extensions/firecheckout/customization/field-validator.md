---
layout: default
title: Field validator
description: How to apply custom validator to some checkout field on Magento 2
keywords: field validator, postcode
category: Firecheckout
---

# Field validator

> This feature supported since v.1.12.0

Field validator component allows to validate user input according to your needs.
You can use any of Magento's
[built-in validators](https://github.com/magento/magento2/blob/2.2-develop/app/code/Magento/Ui/view/base/web/js/lib/validation/rules.js#L61),
or define your own.

Syntax example:

```js
define([
    'Swissup_Firecheckout/js/utils/form-field/validator',
    'mage/translate'
], function(validator, $t) {
    'use strict';

    // enable `required` validator
    validator('[name="fax"]');

    // disable `required` validator
    validator('[name="fax"]', false);

    // built-in validators from Magento/Ui/view/base/web/js/lib/validation/rules.js
    validator('[name="firstname"]', {
        'alphanumeric': true
    });
    
    // built-in 'range' validator from Magento/Ui/view/base/web/js/lib/validation/rules.js
    validator('[name="custom_attributes[field]"]', {
        'validate-number-range': '10-20'
    });

    // custom UK postcode validator
    // (Any custom validator should start from `fc-custom-rule` prefix)
    validator('[name="postcode"]', {
        'lazy': true, // run first validation on `blur` event instead of default instant validation
        'fc-custom-rule-uk-postcode': {
            handler: function (value) {
                return new RegExp(/^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i).test(value);
            },
            message: $t('Invalid postcode')
        }
    });
});
```

> All custom js should be placed in [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)

##### Next up

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout)
