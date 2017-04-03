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
    @firecheckout-section__border: 0;
    @firecheckout-section__padding: 12px 20px 20px;
    @firecheckout-section__number-color: #fff;
    @firecheckout-section__number-background-color: #c13b7a;
    @firecheckout-section__box-shadow: 0 0 8px rgba(0,0,0,0.15);
    ```

 3. Add additional styles with `_custom.less`

    ```scss
    .firecheckout {
        .swissup-delivery-date {
            margin-top: 20px;
        }
    }

    @media (min-width: 1024px) {
        .firecheckout {
            .form-shipping-address,
            .billing-address-form {
                .fieldset > .field {
                    vertical-align: top;
                    display: inline-block;
                    width: 50%;

                    &.street {
                        width: 100%;
                    }

                    > .label {
                        width: auto;
                        float: none;
                        margin: 5px 0 2px;
                        padding: 0 9px 0 0;
                    }
                    > .control {
                        display: block;
                        width: calc(~"100% - 5px");
                    }
                }
            }
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

> Customization was done under [Swissup/argento-pure2](/m2/argento/pure2/) theme.
> Button styles are inherited from it.

{% include gallery.html images=site.data.gallery.m2.firecheckout.customization.custom-css class="phone-up-1 tablet-up-1 photoswipe" %}

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
