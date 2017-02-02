---
layout: default
title: Attribute based pages (Brand pages)
description: Magento 2 Attributepages installation instructions
keywords: magento 2 attributepages, brandpage, brand page
category: Attributepages
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_SubscriptionChecker\
        Swissup_SlickCarousel\
        Swissup_Attributepages

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Now you can navigate to `Swissup > Attribute Pages > Manage Pages`
and create your first attribute based page.

#### Next Up

- [Back to Main Page](../)
