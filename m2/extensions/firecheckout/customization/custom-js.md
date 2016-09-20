---
layout: default
title: Firecheckout custom js
description: How to add custom javascript at the firecheckout page
keywords: >
    firecheckout scripts, firecheckout js, firecheckout javascript, customization
category: Firecheckout
---

# Firecheckout custom js

> **Attention!** — This feature is available since 1.2.0 version only.

Firecheckout provides easy and quick way to add custom javascript without
core files modification.

> You can place `custom.js` file inside your active theme
> (eg. "app/design/frontend/Magento/luma/Swissup_Firecheckout/web/js/custom.js")
> and it will be automatically included by firecheckout.
>
> This allows you to keep original files clean and upgrade to the latest
> firecheckout version without worrying to lost your changes.

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
        'jquery',
        'underscore',
        'uiRegistry'
    ], function($, _, registry) {
        var mapping = {
            'checkout.steps.billing-step.payment.afterMethods.discount': '.discount-code',
            'checkout.steps.billing-step.payment.afterMethods.attachment': '.order-attachments'
        };

        _.each(mapping, function(selector, name) {
            // make sure that component is available on the page
            registry.async(name)(function() {
                // expand collapsible element
                activateCollapsible(selector);
            });
        });

        function activateCollapsible(selector) {
            if (!$(selector).length) {
                setTimeout(function() {
                    activateCollapsible(selector);
                }, 500);
            }
            $(selector).collapsible('activate');
        }
    });
    ```

 4. Save the file and run following commands to deploy new script:

    ```bash
    cd magento/root/folder

    # remove previously deployed firecheckout scripts
    find pub/static var/view_preprocessed -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy
    ```

#### Result

> Css customization was done according to [css customization guide](../custom-css/).

{% include gallery.html images=site.data.gallery.m2.firecheckout.customization.custom-js class="phone-up-1 tablet-up-1 photoswipe" %}

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
