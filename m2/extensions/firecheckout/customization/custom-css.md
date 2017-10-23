---
layout: default
title: Firecheckout custom css
description: How to apply css changes and keep original files without changes
keywords: >
    firecheckout styles, firecheckout css, css modifications, _custom.css,
    _firecheckout_custom
category: Firecheckout
---

# Firecheckout custom css

Firecheckout provides easy and quick way to customize checkout styles without
worrying about further updates.

> You can create `_custom.less` file inside your active theme
> (eg. "app/design/frontend/Magento/luma/Swissup_Firecheckout/web/css/_custom.less")
> and it will be automatically included by firecheckout.
>
> This allows you to keep original files clean and upgrade to the latest
> firecheckout version without worrying to lost your changes.

### Example

Let's slightly change form and firecheckout layout styles and section number colors.
[Scroll down](#result) to see the result.

 1. Create two `_custom.less` files inside your active theme:

    ```
    app
    ├── design
        └── frontend
            └── [Magento]
                └── [luma]
                    └── Swissup_Firecheckout
                        └── web
                            └── css
                                ├── abstracts
                                |   └── _custom.less
                                ├── _custom.less
    ```

 2. Redefine firecheckout variables with `abstracts/_custom.less` file:

    ```scss
    @firecheckout-section-desktop__gap: 1px;
    @firecheckout-section__gap: 1px;
    @firecheckout-section__border: 0;
    @firecheckout-section__padding: 12px 20px 20px;
    @firecheckout-section__number-color: #fff;
    @firecheckout-section__number-background-color: #1979c3;
    @firecheckout-section__box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);

    @firecheckout-form-field__border-width: 0 0 1px;
    @firecheckout-form-field__background-color: #fff;
    ```

 3. Add additional styles with `_custom.less`

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
