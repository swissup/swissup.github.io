---
layout: default
title: Set CPF/CNPJ code
description: CPF/CNPJ modification for brazilian firecheckout use case without an extra field
keywords: brazilian CPF/CNPJ code - mask and validation
category: Firecheckout
---

# CPF/CNPJ - company&persone code
### (Use Case 2 - without an extra field)

Applying field mask and validation code during typing a code.

 1. Create `custom.js` file. [custom.js](/m2/extensions/firecheckout/customization/custom-js/)
 2. Put this js code in your custom.js file.

    ```js
    define([
        'jquery',
        'underscore',
        'Swissup_Firecheckout/js/utils/form-field/mask',
        'Swissup_Firecheckout/js/utils/form-field/validator'
    ], function ($, _, mask, validator) {
        'use strict';

        //define address form in which need to use the CPF/CNPJ code
        var scopes = [
            '.form-shipping-address',
            '.billing-address-form'
        ];

        _.each(scopes, function (scope) {

            //set a field mask according to cpf/cnpj code
            mask(scope + ' [name="vat_id"]', {
                guide: false,
                mask: function (raw) {
                    var mask = [/\d/, /\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/];

                    if (raw.length == 14) {
                        mask = [/\d/, /\d/, /\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
                    }

                    return mask;
                }
            });

            //validation cpf/cnpj code
             validator(scope + ' [name="vat_id"]', {
                'lazy': false,
                'fc-custom-rule-vatid': {
                        handler: function (value) {
                        var strNumbers, splNumbers;
                            splNumbers = value.split(/[\/\.-]/);
                            strNumbers = splNumbers.join("");

                        if (value.length == 18) {

                            var cnpj = new RegExp(/^([0-9]{2}(.)[0-9]{3}(.)[0-9]{3}(\/)[0-9]{4}(-)[0-9]{2})$/).test(value);

                            // Checking for known cnpj invalid code
                            if ( cnpj &&  strNumbers == "00000000000000" ||
                                          strNumbers == "11111111111111" ||
                                          strNumbers == "22222222222222" ||
                                          strNumbers == "33333333333333" ||
                                          strNumbers == "44444444444444" ||
                                          strNumbers == "55555555555555" ||
                                          strNumbers == "66666666666666" ||
                                          strNumbers == "77777777777777" ||
                                          strNumbers == "88888888888888" ||
                                          strNumbers == "99999999999999"
                                )
                                    { return false; }

                            var numSize, numbers, lastDigits, sum, pos, result;

                                numSize = strNumbers.length - 2
                                numbers = strNumbers.substring(0,numSize);
                                lastDigits = strNumbers.substring(numSize);
                                sum = 0;
                                pos = numSize - 7;

                            for (i = numSize; i >= 1; i--) {
                              sum += numbers.charAt(numSize - i) * pos--;
                              if (pos < 2) pos = 9;
                            }
                            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                            if (result != lastDigits.charAt(0)) return false;

                            numSize = numSize + 1;
                            numbers = strNumbers.substring(0,numSize);
                            sum = 0;
                            pos = numSize - 7;
                            for (i = numSize; i >= 1; i--) {
                              sum += numbers.charAt(numSize - i) * pos--;
                              if (pos < 2) pos = 9;
                            }
                            result = sum % 11 < 2 ? 0 : 11 - sum % 11;
                            if (result != lastDigits.charAt(1)) return false;

                            return cnpj;

                        }else {
                            var cpf, sum = 0,
                                firstCN, secondCN, checkResult;

                            cpf = new RegExp(/^([0-9]{3}(.)[0-9]{3}(.)[0-9]{3}(-)[0-9]{2})$/).test(value);

                            firstCN = parseInt(strNumbers.substring(9, 10), 10);
                            secondCN = parseInt(strNumbers.substring(10, 11), 10);

                            checkResult = function(sum, cn) {
                            var result = (sum * 10) % 11;
                            if ((result === 10) || (result === 11)) {result = 0;}
                                return (result === cn);
                            };

                            // Checking for known cpf invalid code
                             if (cpf && strNumbers == "00000000000" ||
                                        strNumbers == "11111111111" ||
                                        strNumbers == "22222222222" ||
                                        strNumbers == "33333333333" ||
                                        strNumbers == "44444444444" ||
                                        strNumbers == "55555555555" ||
                                        strNumbers == "66666666666" ||
                                        strNumbers == "77777777777" ||
                                        strNumbers == "88888888888" ||
                                        strNumbers == "99999999999"
                                )
                                { return false; }

                            // validate first Check Number:
                            for (var i = 1; i <= 9; i++ ) {
                                sum = sum + parseInt(strNumbers.substring(i - 1, i), 10) * (11 - i);
                            }

                            // validate second Check Number:
                            if ( checkResult(sum, firstCN) ) {
                                sum = 0;
                                for (var i = 1; i <= 10; i++ ) {
                                sum = sum + parseInt(strNumbers.substring(i - 1, i), 10) * (12 - i);
                                }
                                return checkResult(sum, secondCN);
                            }

                          return false;

                        }

                    },
                    message: $t('Invalid vat ID ')
                }
            });


        });
    });
    ```

 3. Save the file and run following bash commands to deploy script:

    ```
    cd magento/root/folder
    rm -rf var/view_preprocessed pub/static/frontend
    bin/magento setup:static-content:deploy
    ```

##### Next up

 -  [CPF/CNPJ code (Use case 1)](/m2/extensions/firecheckout/brazil/cpf-cnpj/)
 -  [Back to home](/m2/extensions/firecheckout)
