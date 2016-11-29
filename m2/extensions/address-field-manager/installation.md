---
layout: default
title: Address Field Manager Installation
description: Address Field Manager module installation
keywords: address field manager installation
category: Address Field Manager
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_SubscriptionChecker\
        Swissup_AddressFieldManager

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Navigate to `Swissup > Address Field Manager` and
[change field values](../usage/) according to your needs.

#### Next up

 -  [Back to Main Page](../)
