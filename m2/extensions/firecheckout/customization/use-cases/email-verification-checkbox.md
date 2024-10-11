---
layout: default
title: Email verification checkbox
description: How to create email verification checkbox in Firecheckout for Magento 2
keywords: >
    email verification, confirm email checkbox
category: Firecheckout
---

# Email verification checkbox

> This feature supported since v.1.10.0

 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following contents:

    ```js
    define([
        'Magento_Ui/js/lib/view/utils/async',
        'uiRegistry',
        'mage/utils/wrapper',
        'Swissup_Checkout/js/scroll-to-error',
        'Swissup_Firecheckout/js/model/layout',
        'mage/translate',
        'mage/validation'
    ], function ($, registry, wrapper, scrollToError, layout, $t) {
        'use strict';

        function validate() {
            $('form[data-role=email-with-possible-login]').validation();

            $('#customer-email-check-error').remove();
            if (!$('#customer-email-check').prop('checked')) {
                displayError();
            }

            return $('#customer-email-check').prop('checked');
        }

        function displayError() {
            var message = '<div id="customer-email-check-error" class="mage-error" tabindex="0" aria-expanded="false">' + $t('This is a required field.') + '</div>';

            $('#customer-email-check').after(message);
        }

        $.async('.opc #customer-email-fieldset #customer-email', function (el) {
            $(el).parents('.field').after(
                '<div class="field choice required">' +
                    '<input id="customer-email-check" class="input-text" type="checkbox" class="required-entry" />' +
                    '<label class="label" for="customer-email-check">' +
                        $t('I confirm email address is correct') +
                    '</label>' +
                '</div>'
            );

            $('#customer-email-check').attr(
                'data-validate',
                JSON.stringify({
                    'equalTo': '#customer-email'
                })
            );

            $('#customer-email').on('change', validate);
            $('#customer-email-check').on('change', validate);

            if (!layout.isMultistep()) {
                $('body').on('fc:validate', function (e) {
                    e.valid = validate();
                });
            } else {
                registry.get('checkout.steps.shipping-step.shippingAddress', function (shipping) {
                    shipping.validateShippingInformation = wrapper.wrap(
                        shipping.validateShippingInformation,
                        function (o) {
                            if (!validate()) {
                                return scrollToError();
                            }

                            return o();
                        }
                    );
                });
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

#### Result

![Email verification field](/images/m2/firecheckout/customization/email-verification-checkbox/firecheckout.png)

##### Next up

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
