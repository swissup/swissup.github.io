---
layout: default
title: Set CPF/CNPJ code
description: CPF/CNPJ modification for brazilian firecheckout
keywords: brazilian CPF/CNPJ code
category: Firecheckout
---

# CPF/CNPJ - company&persone code

A CPF is 11 digits long, comprised of nine base digits, and two digits at the end that are the result of an arithmetic operation on the first nine numbers, meaning any typing mistakes will lead to an invalid number.
> Here is an example of a CPF: 231.002.999-00

A CNPJ is a 14-digit number; 12 base digits and two digits at the end that are the result of an arithmetic formula of the base numbers, making any typing mistakes when entering the number lead to an invalid number.
> Here is an example of a CNPJ: 13.339.532/0001-09.

 At this article we explaine you how to create company and persone code using magento field "vat_id" and the firecheckout module.

 1. Create a new address field using [Address Field Manager](/m2/extensions/address-field-manager/) module.

#### Result

![custom_attribute_field](/images/m2/firecheckout/brazil/custom_attributes_field.png)

 2. Create `custom.js` file. [custom.js](/m2/extensions/firecheckout/customization/custom-js/)
 3. According to this an example you may change the field `vat_id` to the `CPF/CNPJ`

```js
define([
    'jquery',
    'underscore',
    'Swissup_Firecheckout/js/utils/form-field/label',
    'Swissup_Firecheckout/js/utils/form-field/dependency',
    'Swissup_Firecheckout/js/utils/form-field/mask',
    'Swissup_Firecheckout/js/utils/form-field/validator',
    'Swissup_Firecheckout/js/utils/form-field/watcher'
], function ($, _, label, dependency, mask, validator, watcher) {
    'use strict';

    var scopes = [
        '.form-shipping-address', //define address form in which need to use the CPF/CNPJ code
        '.payment-method._active'

    ];

    _.each(scopes, function (scope) {
        dependency({
            scope: scope,
            watch: {
                '[name="custom_attributes[person_company]"]': '218' // change this value according to your options
            },
            react: {
                '[name="company"]': 'required|hidden', // the field 'Company' will be hidden when choose "Person" code.
                '[name="vat_id"]': 'required|required' // this field is required for both company or persone code
            }

        });

        // set mask CPF/CNPJ field

        mask(scope + ' [name="vat_id"]', {
            guide: false,
            mask: function (raw) {

                var mask = [/\d/, /\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/];

                if ($(scope + ' [name="custom_attributes[person_company]"]').val() == 217) {
                    mask = [/\d/, /\d/, /\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
                }

                return mask;
            }
        });

        //update mask and lable according to custom_attributes

        watcher(scope + ' [name="custom_attributes[person_company]"]', function (value) {
            var el = $(scope + ' [name="vat_id"]'),
                originalValue = el.val();

            if (el.data('fc-mask') && el.data('fc-mask').textMaskInputElement) {
                el.val('');
                el.data('fc-mask').textMaskInputElement.update();
                el.val(originalValue);
                el.data('fc-mask').textMaskInputElement.update();
            }

            if ($(scope + ' [name="custom_attributes[person_company]"]').val() == 218) {
                label(el, 'CNPJ');
            } else {
                label(el, 'CPF');
            }
        });

        //validation of the CPF/CNPJ field

        validator('[name="vat_id"]', {
            'lazy': true,
            'fc-custom-rule-vatid': {
                handler: function (value) {
                    if ($(scope + ' [name="custom_attributes[person_company]"]').val() == 218) {
                        return new RegExp(/^([0-9]{2}(.)[0-9]{3}(.)[0-9]{3}(\/)[0-9]{4}(-)[0-9]{2})$/).test(value);
                    } else {
                        return new RegExp(/^([0-9]{3}(.)[0-9]{3}(.)[0-9]{3}(-)[0-9]{2})$/).test(value);
                    }
                },
                message: $t('Invalid vat ID ')
            }
        });
    });
});
```
#### Result

![cpf_cnpj](/images/m2/firecheckout/brazil/cpf_cnpj.png)

4. Save the file and run following bash commands to deploy script:

```
    cd magento/root/folder
    rm -rf var/view_preprocessed pub/static/frontend
    bin/magento setup:static-content:deploy
```

5. That's all.

##### Next up

 -  [Back to home](/m2/extensions/firecheckout)
