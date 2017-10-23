---
layout: default
title: Hide useless section
description: How to hide checkout section at firecheckout page
keywords: >
    firecheckout layout, hide shipping methods, hide payment methods
category: Firecheckout
---

# Hide useless checkout section

> This feature supported since v.1.4.0

> **Warning!**
>
> Before hiding some section, make sure, that it's really not needed by all your
> customers. Otherwise, you are risking to get broken checkout.

> If you are not **Magento/luma** user, change file paths according to your
> theme path.
>
> Example: **Swissup/ArgentoFlat** for [ArgentoFlat](/m2/argento/) theme.

Let's hide shipping methods section, since we have one method only and we have
a module, that automatially select's it.

 1. Create `_custom.less` styles, that will be [automatically included](../custom-css/)
    by firecheckout:

    ```
    /app/design/frontend/Magento/luma/Swissup_Firecheckout/web/css/_custom.less
    ```

    And add the following styles into it:

    ```scss
    // Hide shipping method section
    .firecheckout {
        #opc-shipping_method {
            display: none !important;
        }
    }
    ```

 3. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout styles
    find pub/static var/view_preprocessed -type d -regex ".*Firecheckout.*css" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```

#### Result

![Firecheckout with hidden shipping section](/images/m2/firecheckout/customization/hide-useless-checkout-section/firecheckout.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Move order totals below cart items](../move-order-totals-below-cart-items/)
- [Back to customization page](../)
