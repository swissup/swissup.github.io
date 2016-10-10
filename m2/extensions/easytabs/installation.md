---
layout: default
title: Easy Tabs Installation
description: magento 2 product tabs module installation
keywords: " magento 2 product tabs, magento 2 product tabs extension free, add tabs
magento 2 product page "
category: Easy Tabs
---

# Easy Tabs installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_Easytabs
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Right after installation you'll see no differences on product page, three default magento 2 tabs will be displayed. You can change it in [Easytabs Grid][easytabs_grid]

#### After you install an extension you can go to:

* [Easytabs Grid][easytabs_grid]

[easytabs_grid]: /m2/extensions/easytabs/#easytabs-grid
