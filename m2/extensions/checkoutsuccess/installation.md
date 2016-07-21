---
layout: default
title: Checkout Success Installation
description: magento 2 checkout success page module installation
keywords: " magento 2 checkout success page extension "
category: Checkout Success
---

# Checkout Success installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_CheckoutSuccess
    bin/magento setup:upgrade
    ```

That's all. Now you can enable and configure extension in `Stores > Configuration > Swissup Checkout > Success Page`

#### After you install an extension you can go to:

* [Settings][settings]

[settings]: /m2/extensions/checkoutsuccess/#settings
