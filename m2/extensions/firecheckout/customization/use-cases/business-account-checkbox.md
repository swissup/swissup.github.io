---
layout: default
title: Business Account Checkbox
description: How to create business account checkbox on the Firecheckout page
keywords: business account, dependent fields, company account, personal account
category: Firecheckout
---

# Business Account Checkbox

> This feature supported since v.1.12.0

 1. Create `is_business_account` checkbox (Yes/No) using our
    [AddressFieldManager][address-field-manager-new-field] module.
    Use the following values for the new field:

    Option          | Value
    ----------------|---------------------
    Default Label   | Use Business Address
    Input Type      | Yes/No
    Show on Storefront | Yes
    Show In Forms   | All

    When new checkbox will appear on the firecheckout page, proceed to the next
    step.

 2. Update Address Fields sort order using
    [AddressFieldManager][address-field-manager-grid] module:

    ```
    - Name fields
    - Use Business Address
    - Company
    - Vat Number
    - Street Address
    - Country
    - State/Province
    - Zip/Postal Code
    - City
    - Phone Number
    - Fax
    ```

 3. Make the following fields 'optional', using
    [AddressFieldManager][address-field-manager-grid] module:

    ```
    - Company
    - Vat Number
    - Fax
    ```

 4. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:

    ```js
    define([
        'underscore',
        'Swissup_Firecheckout/js/utils/form-field/classname',
        'Swissup_Firecheckout/js/utils/form-field/dependency'
    ], function (_, classname, dependency) {
        'use strict';

        // Resize some fields to take 50% width
        classname(
            [
                '[name="firstname"], [name="lastname"]',
                '[name="company"], [name="vat_id"]',
                '[name="telephone"], [name="fax"]'
            ].join(', '),
            'fc-col-6 fc-size-xs:fc-col-12'
        );

        // Resize 'is_business_account' to take 100% width
        classname('[name="custom_attributes[is_business_account]"]', 'fc-col-12');

        // Place country, region, postcode, and city fields in a single row
        // when parent container is large
        classname(
            [
                '[name="country_id"]',
                '[name="region_id"]',
                '[name="region"]',
                '[name="postcode"]',
                '[name="city"]'
            ].join(', '),
            'fc-size-l:fc-col-3'
        );

        // setup dependent fields for shipping and billing forms
        var scopes = [
            '.form-shipping-address',
            '.payment-method._active'   // or '.billing-address-form' if you use
                                        // 'Display Billing Address On Payment Page' option
        ];
        _.each(scopes, function (scope) {
            dependency({
                scope: scope,
                watch: {
                    '[name="custom_attributes[is_business_account]"]': true
                },
                react: {
                    '[name="company"]': 'required|hidden',
                    '[name="vat_id"]': 'required|hidden',
                    '[name="fax"]': 'required|optional'
                }
            });
        });
    });
    ```

 4. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout files
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```

#### Result

![Business Account Checkbox](/images/m2/firecheckout/customization/use-cases/business-account-checkbox.gif)

##### Next up

 -  [Back to home](/m2/extensions/firecheckout/)

[address-field-manager-new-field]: /m2/extensions/address-field-manager/usage/form/ "Create new Address Field"
[address-field-manager-grid]: /m2/extensions/address-field-manager/usage/grid/ "Reorder Address Fields"
