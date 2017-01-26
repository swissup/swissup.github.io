---
layout: default
title: Delevery Date installation instructions
description: How to install delivery date for Magento 2
keywords: magento2 delivery-date installation
category: Delivery Date
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash

    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_SubscriptionChecker\
        Swissup_DeliveryDate

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy

    # regenerate dependency injection code. add extension attribute
    bin/magento setup:di:compile
    ```

That's all.
