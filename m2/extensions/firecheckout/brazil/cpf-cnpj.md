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

> Here is an example of a CPF: 231.002.999-00 [CPF generator](https://www.4devs.com.br/gerador_de_cpf)

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
        'Swissup_Firecheckout/js/utils/form-field/watcher'
    ], function ($, _, label, dependency, mask, validator, watcher) {
        'use strict';

        //define address form in which need to use the CPF/CNPJ code
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

            //validation of the CPF/CNPJ field

            validator('[name="vat_id"]', {
                'lazy': true,
                'fc-custom-rule-vatid': {
                        handler: function (value) {
                        var spNumbers,
                            unico = true;
                            spNumbers = value.split(/[\/\.-]/);

                        if ($(scope + ' [name="custom_attributes[cpf_cnpj]"]').val() == NUM2) {
                            var cnpj = new RegExp(/^([0-9]{2}(.)[0-9]{3}(.)[0-9]{3}(\/)[0-9]{4}(-)[0-9]{2})$/).test(value);

                            //validation cnpj code on incorrect numbers 00.000.000/0000
                            if (cnpj && unico) {

                                for (var i=0; i<spNumbers.length; i++){
                                   unico = (spNumbers[1] == spNumbers[2] && spNumbers[1] == spNumbers[3].slice(1,4));
                                }
                                return (!unico);
                            }

                            return cnpj;
                        } else {
                            var cpf = new RegExp(/^([0-9]{3}(.)[0-9]{3}(.)[0-9]{3}(-)[0-9]{2})$/).test(value);

                            //validation cpf code on incorrect numbers 000.000.000
                            if (cpf && unico) {

                                for (var i=0; i<spNumbers.length; i++){
                                    unico = (spNumbers[0] == spNumbers[1] && spNumbers[0] == spNumbers[2]);
                                }
                                return (!unico);
                            }
                            return cpf;
                        }
                    },
                    message: $t('Invalid vat ID ')
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
