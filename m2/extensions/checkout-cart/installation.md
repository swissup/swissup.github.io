---
layout: default
title: Checkout Cart Installation
description: magento 2 checkout cart module installation
keywords: " magento 2 checkout cart extension "
category: Checkout Cart
---

# Checkout Cart installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_CheckoutCart
    bin/magento setup:upgrade
    ```

That's all. Now you can enable and configure extension in `Stores > Configuration > Swissup Checkout > Checkout Cart`

#### After you install an extension you can go to:

* [Settings][settings]

[settings]: /m2/extensions/checkout-cart/#settings
