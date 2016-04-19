---
layout: default
title: Easy Catalog Images Installation
description: magento 2 easy catalog images module installation
keywords: " magento 2 easy catalog images extension "
category: EasyCatalogImages
---

# Easy Catalog Images installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Easycatalogimg
    bin/magento setup:upgrade
    ```

That's all.

#### After you install an extension you can go to:

* [Configuration][settings]


[settings]: /m2/easycatalogimages/#configuration
