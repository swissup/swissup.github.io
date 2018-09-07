---
layout: default
title: Firecheckout custom css
description: How to apply css changes and keep original files without changes
keywords: >
    firecheckout styles, firecheckout css, css modifications, customization,
    custom css
category: Firecheckout
---

# Firecheckout custom css

Firecheckout provides easy and quick way to customize checkout styles without
worrying about further updates.

### Example

Let's slightly change form and firecheckout layout styles and section number colors.
[Scroll down](#result) to see the result.

 1. Create files inside your active theme according to your needs:

    ```
    app
    ├── design
        └── frontend
            └── [Magento]   // Replace with your theme
                └── [luma]  // Replace with your theme
                    └── Swissup_Firecheckout
                        └── web
                            └── css
                                ├── custom
                                |   └── abstracts
                                |       ├── _variables.less                 // used by all themes
                                |       ├── _variables-theme-default.less   // used by Default theme only
                                |       ├── _variables-theme-light.less     // used by Light theme only
                                |       ├── _variables-theme-midnight.less  // used by Midnight theme only
                                |       └── _variables-theme-round.less     // used by Round theme only
                                └── _main.less                              // used by all themes
    ```

 2. Redefine firecheckout variables with `custom/abstracts/*` files:

    ```scss
    @fc-section-desktop__gap: 1px;
    @fc-section__gap: 1px;
    @fc-section__border: 0;
    @fc-section__padding: 20px;
    @fc-section__box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
    @fc-section-number__color: #fff;
    @fc-section-number__background: #1979c3;

    @fc-form-field__border-width: 0 0 1px;
    @fc-form-field__background-color: #fff;
    ```

 3. Add additional styles with `_main.less`

    ```scss
    .firecheckout {
        .opc-wrapper .form-login .fieldset .note,
        .opc-wrapper .form-shipping-address .fieldset .note {
            font-size: 12px;
            margin-top: 0px;
        }
    }
    ```

 4. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder

    # remove previously deployed firecheckout styles
    find pub/static var/view_preprocessed -type d -regex ".*Firecheckout.*css" -exec rm -rf {} \;

    # run deployment command
    php bin/magento setup:static-content:deploy en_US
    ```

#### Result

![Custom firecheckout styles](/images/m2/firecheckout/customization/custom-css/frontend.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
