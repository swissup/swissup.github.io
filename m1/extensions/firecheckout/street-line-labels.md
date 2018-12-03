---
layout: default
title: Street line labels
description: How to add labels for street fields
keywords: >
    label, placeholder, address labels, magento address field placeholders,
    AddressFieldLabel
category: Firecheckout
---

# Street line labels

> Available since 3.9.0

Firecheckout can add, modify, remove field labels and placeholders with
[FormFieldManager](../form-field-manager/) component.
All you need is to call the javascript initialization from firecheckout page.

 1. Create [custom.js file][custom_js]
 2. Add the following code inside:

    ```js
    document.observe('dom:loaded', function() {
        // Possible values for placeholder and label fields are:
        //  - Text value (To add or update field label/placeholder)
        //  - Boolean false (To hide field label/placeholder)
        var rules = {
            '#billing\\:street1, #shipping\\:street1': {
                label: Translator.translate('Enter your street line 1'),
                placeholder: Translator.translate('Enter your street line 1')
            },
            '#billing\\:street2, #shipping\\:street2': {
                label: Translator.translate('Enter your street line 2'),
                placeholder: Translator.translate('Enter your street line 2')
            }
        };
        (function () {
            new FC.FormFieldManager(rules);
        }).defer();
    });
    ```

 3. Let's translate these labels

    1.  Create `custom.phtml` file.

        [Using custom.phtml][custom_phtml]

    2.  Add the following content into this file:

        ```html
        <script>
            Translator.add('Enter your street line 1', "<?php echo $this->__('Enter your street line 1') ?>");
            Translator.add('Enter your street line 2', "<?php echo $this->__('Enter your street line 2') ?>");
            Translator.add('Street 2', "<?php echo $this->__('Street 2') ?>");
        </script>
        ```

    3.  Add translations to your theme csv file
        `app/design/frontend/argento/default/locale/de_DE/translate.csv`:

        ```csv
        "Enter your street line 1","Geben Sie Ihre Straße ein 1"
        "Enter your street line 2","Geben Sie Ihre Straße ein 2"
        "Street 2","Straße Nummer 2"
        ```

 4. Save all files and clear magento cache.

#### Screenshot

![Street line 2 label and placeholder](/images/m1/firecheckout/form-field-manager/street-line-label.png)

[custom_js]: /m1/extensions/firecheckout/using-customcss-and-customjs/#add-custom-javascript-at-firecheckout-page "How to use custom.js file"
[custom_phtml]: /m1/extensions/firecheckout/using-customphtml/ "How to use custom.phtml file"
