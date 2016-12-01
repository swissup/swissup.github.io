---
layout: default
title: Checkout VAT Installation
description: magento 2 checkout VAT module installation
keywords: " magento 2 checkout VAT extension "
category: Checkout VAT
---

# Checkout VAT installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_SubscriptionChecker\
        Swissup_Taxvat
    bin/magento setup:upgrade
    ```

3. Enable VAT field in `Stores > Configuration > Customers > Customer Configuration > Create New Account Options > Show VAT Number on Storefront`

That's all. Now you can enable and configure extension in `Stores > Configuration > Swissup Checkout > Tax VAT`

#### After you install an extension you can go to:

* [Settings][settings]

[settings]: /m2/extensions/taxvat/#settings
