---
layout: default
title: Firecheckout custom js
description: How to add custom javascript at the firecheckout page
keywords: >
    firecheckout scripts, firecheckout js, firecheckout javascript, customization
category: Firecheckout
---

# Firecheckout custom js

Firecheckout provides easy and quick way to add custom javascript without
core files modification.

> You can create `custom.js` file inside your active theme
> (eg. "app/design/frontend/Magento/luma/Swissup_Firecheckout/web/js/custom.js")
> and it will be automatically included by firecheckout.
>
> This allows you to keep original files clean and upgrade to the latest
> firecheckout version without worrying to lost your changes.

> **Update**
>
> Since version 1.12.0 you can add JS directly into
> [backend config settings](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section).
>
> Please note, that JS syntax in config section is slightly differs from syntax
> in custom.js file (`require` should be used instead of `define`).

### Example

Let's expand "Discount" and "Attachment" sections by default.
[Scroll down](#result) to see the result.

 1. Create `custom.js` file inside your active theme:

    ```
    app
    ├── design
        └── frontend
            └── [Magento]
                └── [luma]
                    └── Swissup_Firecheckout
                        └── web
                            └── js
                                ├── custom.js
    ```

 3. Add your script:

    ```js
    define([
        'Magento_Ui/js/lib/view/utils/async'
    ], function($) {
        'use strict';

        var expandables = [
            '.discount-code',
            '.order-attachments',
        ];

        $.async({
            selector: expandables.join(','),
            ctx: $('.checkout-container').get(0)
        }, function (el) {
            setTimeout(function() {
                $(el).collapsible('activate');
            }, 500);
        });
    });
    ```

 4. Save the file and run following commands to deploy new script:

    ```bash
    cd magento/root/folder

    # remove previously deployed firecheckout scripts
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy [LOCALE]
    ```

#### Result

![Custom firecheckout js](/images/m2/firecheckout/customization/custom-js/expanded-collapsible-sections.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
