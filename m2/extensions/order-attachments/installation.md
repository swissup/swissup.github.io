---
layout: default
title: Order Attachments Installation
description: Order Attachments module installation
keywords: order attachments installation
category: Order Attachments
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
        Swissup_Orderattachment

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all.

#### Next up

 -  [Configuration](../#configuration)
 -  [Back to Main Page](../)
