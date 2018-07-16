---
layout: default
title: Housenumber
description: How to replace address line 2 with housenumber field?
keywords: housenumber
category: Firecheckout
---

# Housenumber

> This feature supported since v.1.11.0

 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:

    ```js
    define([
        'Swissup_Firecheckout/js/utils/form-field/label',
        'Swissup_Firecheckout/js/utils/form-field/placeholder',
        'Swissup_Firecheckout/js/utils/form-field/class'
    ], function (label, placeholder, classname) {
        'use strict';

        label('[name="street[1]"]', 'Housenumber');
        placeholder('[name="street[1]"]', 'Housenumber');
        classname('.street', 'fc-col-12');
        classname('[name="street[0]"]', 'fc-size-l:fc-col-8 fc-size-m:fc-col-8');
        classname('[name="street[1]"]', 'fc-size-l:fc-col-4 fc-size-m:fc-col-4');
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

[field-size]: /m2/extensions/firecheckout/customization/use-cases/field-size/ "Change field size"
[css-helpers]: /m2/extensions/firecheckout/customization/css-helpers/ "CSS Helpers"
