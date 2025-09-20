---
layout: default
title: Set CPF/CNPJ code
description: CPF/CNPJ modification for brazilian firecheckout
keywords: brazilian CPF/CNPJ code
category: Firecheckout
---

# CPF/CNPJ - company&persone code
### (Use Case 1 - using an extra field)

A CPF is 11 digits long, comprised of nine base digits, and two digits at the end
that are the result of an arithmetic operation on the first nine numbers, meaning
any typing mistakes will lead to an invalid number.

> Here is an example of a CPF: 231.002.999-00 [CPF generator](https://www.4devs.com.br/gerador_de_cpf), [Bulk CPF generator](https://goonlinetools.com/pt/gerador-de-cpf/)

A CNPJ is a 14-digit number; 12 base digits and two digits at the end that are
the result of an arithmetic formula of the base numbers, making any typing mistakes
when entering the number lead to an invalid number.

> Here is an example of a CNPJ: 13.339.532/0001-09 [CNPJ generator](https://www.4devs.com.br/gerador_de_cnpj)

At this article we explaine you how to create company and persone code using
magento field "vat_id" and the firecheckout module.

 1. Create a new address field using [Address Field Manager](/m2/extensions/address-field-manager/) module.

    **Result**

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
        'Swissup_Firecheckout/js/utils/form-field/watcher',
        'mage/translate'
    ], function ($, _, label, dependency, mask, validator, watcher, $t) {
        'use strict';

        // validation of CNPJ code
        function validateCNPJ(num) {
            var result,
                numSize = num.length - 2,
                numbers = num.substring(0,numSize),
                lastDigits = num.substring(numSize),
                sum = 0,
                pos = numSize - 7;

            for (var i = numSize; i >= 1; i--) {
                sum += numbers.charAt(numSize - i) * pos--;
                if (pos < 2) pos = 9;
            }
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != lastDigits.charAt(0)) return false;

            numSize = numSize + 1;
            numbers = num.substring(0,numSize);
            sum = 0;
            pos = numSize - 7;
            for (var i = numSize; i >= 1; i--) {
                sum += numbers.charAt(numSize - i) * pos--;
                if (pos < 2) pos = 9;
            }
            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
            if (result != lastDigits.charAt(1)) return false;

            return true;
        }

        // validation of CPF code
        function validateCPF(num) {
            var sum = 0, checkResult,
                firstCN = parseInt(num.substring(9, 10), 10),
                secondCN = parseInt(num.substring(10, 11), 10);

            checkResult = function(sum, cn) {
                var result = (sum * 10) % 11;
                if ((result === 10) || (result === 11)) {result = 0;}
                return (result === cn);
            };

            // validate first Check Number
            for (var i = 1; i <= 9; i++ ) {
                sum = sum + parseInt(num.substring(i - 1, i), 10) * (11 - i);
            }

            // validate second Check Number
            if ( checkResult(sum, firstCN) ) {
                sum = 0;
                for (var i = 1; i <= 10; i++ ) {
                    sum = sum + parseInt(num.substring(i - 1, i), 10) * (12 - i);
                }
                return checkResult(sum, secondCN);
            }
        }

        // define scope form which will be using for validation CPF/CNPJ code
        var scopes = [
            '.form-shipping-address',
            '.checkout-billing-address'

        ];

        _.each(scopes, function (scope) {
            dependency({
                scope: scope,
                watch: {
                    '[name="custom_attributes[person_company]"]': 'NUM2' // change this value according to your options
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

                    if ($(scope + ' [name="custom_attributes[person_company]"]').val() == NUM1) {
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

                if ($(scope + ' [name="custom_attributes[person_company]"]').val() == NUM2) {
                    label(el, 'CNPJ');
                } else {
                    label(el, 'CPF');
                }
            });

            validator('[name="vat_id"]', {
                'lazy': true,
                'fc-custom-rule-vatid': {
                    handler: function (value) {
                        var spNumbers = value.replace(/[\/\.-]/g, '');

                        // validate invalid code like: 00000000000000, 11111111111111, etc;
                        if(/^([0-9])\1*$/.test(spNumbers)) {
                            return false;
                        }

                        if ($(scope + ' [name="custom_attributes[cpf_cnpj]"]').val() == NUM2) {
                            var cnpj = new RegExp(/^([0-9]{2}(.)[0-9]{3}(.)[0-9]{3}(\/)[0-9]{4}(-)[0-9]{2})$/).test(value);
                            if (cnpj) {
                                return validateCNPJ(spNumbers);
                            }
                        } else {
                            var cpf = new RegExp(/^([0-9]{3}(.)[0-9]{3}(.)[0-9]{3}(-)[0-9]{2})$/).test(value);
                            if (cpf) {
                                return validateCPF(spNumbers);
                            }
                            
                            return false;
                        }
                    },

                    message: $t('Invalid Code')
                }
            });
        });
    });
    ```

    **Result**

    ![cpf_cnpj](/images/m2/firecheckout/brazil/cpf_cnpj.png)

 4. Save the file and run following bash commands to deploy script:

    ```
    cd magento/root/folder
    rm -rf var/view_preprocessed pub/static/frontend
    bin/magento setup:static-content:deploy
    ```

 5. That's all.

##### Next up

 -  [CPF/CNPJ code (Use case 2)](/m2/extensions/firecheckout/brazil/cpfcnpj/)
 -  [Back to home](/m2/extensions/firecheckout)
