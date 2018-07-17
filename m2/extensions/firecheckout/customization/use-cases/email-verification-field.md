---
layout: default
title: Email verification field
description: How to create email verification field in firecheckout for Magento 2
keywords: >
    email verification, email double fields
category: Firecheckout
---

# Email verification field

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

            return $('#customer-email-confirm').valid();
        }

        $.async('.opc #customer-email-fieldset #customer-email', function (el) {
            $(el).parents('.field').after(
                '<div class="field _required">' +
                    '<label class="label" for="email_confirm">' +
                        $t('Enter your email again please') +
                    '</label>' +
                    '<div class="control">' +
                        '<input id="customer-email-confirm" class="input-text" type="text" autocomplete="email" />' +
                    '</div>' +
                '</div>'
            );

            $('#customer-email-confirm').attr(
                'data-validate',
                JSON.stringify({
                    'equalTo': '#customer-email'
                })
            );

            $('#customer-email').on('change', validate);
            $('#customer-email-confirm').on('change', validate);

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

![Email verification field](/images/m2/firecheckout/customization/email-verification-field/firecheckout.png)

##### Next up

 -  [Back to home](/m2/extensions/firecheckout/)
