---
layout: default
title: AskIt Installation
description: How to isntall Askit for Magento 2
keywords: askit installation
category: AskIt
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_SubscriptionChecker\
        Swissup_Askit

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all.
