---
layout: default
title: AskIt installation
description: magento2 product questions askit module installation
keywords: "magento product questions module, product questions on magento
product page, magento askit module installation "
category: AskIt
---

# AskIt installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code` or install with composer using following commands.

    ```bash
    cd <magento_root>
    composer config repositories.swissup composer https://swissup.github.io/packages/
    composer require swissup/askit
    ```
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Askit
    bin/magento setup:upgrade
    ```

That's all.
