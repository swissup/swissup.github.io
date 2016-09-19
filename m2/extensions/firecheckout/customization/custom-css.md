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

> **Attention!** — This feature is available since 1.2.0 version only.

Firecheckout provides easy and quick way to customize checkout styles without
worrying about further updates.

> You can place `_custom.less` file inside your active theme
> (eg. "app/design/frontend/Magento/luma/Swissup_Firecheckout/web/css/_custom.less")
> and it will be automatically included by firecheckout.
>
> This allows you to keep original files clean and upgrade to the latest
> firecheckout version without worrying to lost your changes.

### Example

Let's add some air to the firecheckout sections and slightly improve form styles.
[Scroll down](#result) to see the result.

 1. Create `_custom.less` file inside your active theme:

    ```
    app
    ├── design
        └── frontend
            └── [Magento]
                └── [luma]
                    └── Swissup_Firecheckout
                        └── web
                            └── css
                                ├── _custom.less
    ```

 3. Add your custom styles:

    ```less
    @firecheckout-section__padding: 20px 20px;
    @firecheckout-section__background: #fff;
    @firecheckout-section__border: 2px solid rgba(0, 0, 0, 0.1);

    .firecheckout {
        .fieldset > .field {
            > .label {
                width: 35%;
                vertical-align: top;
                margin: 5px 0 0;
                padding: 0 5px 0 0;
                box-sizing: border-box;
                text-align: right;
                word-wrap: break-word;
            }
            > .control {
                display: inline-block;
                width: 62%;
            }
        }

        .step-title,
        .opc-block-summary > .title {
            padding-bottom: 20px;
        }
    }
    ```

 4. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder
    rm -rf var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

#### Result

> Customization was done under [Swissup/argento-flat](/m2/argento/flat/) theme.
> Button styles are inherited from it.

![Firecheckout with custom css design](/images/m2/firecheckout/customization/custom-css/frontend.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
