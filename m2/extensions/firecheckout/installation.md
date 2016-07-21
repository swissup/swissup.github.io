---
layout: default
title: Firecheckout Installation
description: magento 2 firecheckout module installation
keywords: firecheckout installation
category: Firecheckout
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_CheckoutSuccess Swissup_Firecheckout
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Navigate to `Stores > Configuration` and
[setup firecheckout](../configuration/) according to your needs.

#### Next up

 -  [Back to Main Page](../)
