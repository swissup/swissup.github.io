---
layout: default
title: Geoip installation instructions
description: How to install geoip for Magento 2
keywords: magento2 geoip installation
category: Geoip
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    composer require geoip2/geoip2

    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_SubscriptionChecker\
        Swissup_Geoip

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all.
