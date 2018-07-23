---
layout: default
title: Housenumber
description: How to replace address line 2 with housenumber field?
keywords: housenumber, validator, label, placeholder, classname
category: Firecheckout
---

# Housenumber

> This feature supported since v.1.12.0

 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:

    ```js
    define([
        'Swissup_Firecheckout/js/utils/form-field/manager',
        'Swissup_Firecheckout/js/utils/form-field/classname',
        'mage/translate'
    ], function (manager, classname, $t) {
        'use strict';

        classname('.street', 'fc-col-12');
        classname('[name="street[0]"]', 'fc-size-l:fc-col-8 fc-size-m:fc-col-8');
        manager('[name="street[1]"]', {
            label: 'Housenumber',
            placeholder: 'Housenumber *',
            classname: 'fc-size-l:fc-col-4 fc-size-m:fc-col-4',
            validator: {
                'lazy': true,
                'required': true,
                'fc-custom-rule-housenumber': {
                    handler: function (value) {
                        return new RegExp(/^\d+[a-zA-Z]?$/).test(value);
                    },
                    message: $t('Invalid housenumber. Valid examples: 42, 3A, 18C')
                }
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

![Housenumber](/images/m2/firecheckout/customization/use-cases/housenumber.png)

##### Next up

 -  [Back to home](/m2/extensions/firecheckout/)
 -  [Change field size][field-size]
 -  [CSS Helpers][css-helpers]

[field-size]: /m2/extensions/firecheckout/customization/use-cases/field-size/ "Change field size"
[css-helpers]: /m2/extensions/firecheckout/customization/css-helpers/ "CSS Helpers"
