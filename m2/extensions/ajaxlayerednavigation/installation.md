---
layout: default
title: Ajax Layered Navigation Installation
description: Ajax Layered Navigation module installation
keywords: ajax layered navigation installation
category: Ajax Layered Navigation
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_SubscriptionChecker\
        Swissup_Ajaxlayerednavigation

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy

    # if you are using di:compilation, you need to run it again:
    rm -rf var/generation var/di
    php bin/magento setup:di:compile
    ```

That's all.

#### Next up

 -  [Back to Main Page](../)
