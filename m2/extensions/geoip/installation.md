---
layout: default
title: Geoip installation
description: magento2 module for adress geo location detecting by ip installation
keywords: "magento2 module for adress geo location detecting by ip, magento geoip module installation "
category: Geoip
---

# Geoip installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    composer require swissup/geoip
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Geoip
    bin/magento setup:upgrade
    ```

That's all.
