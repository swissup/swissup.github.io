---
layout: default
title: Easy Catalog Images Installation
description: magento 2 easy catalog images module installation
keywords: "magento 2 easy catalog images extension"
category: EasyCatalogImages
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_Easycatalogimg
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Navigate to `Products > Categories` and
[assign thumbnails](../usage/#add-category-thumbnail) to categories.

#### Next up

 -  [Usage](../usage/)
    - [Add category thumbnail](../usage/#add-category-thumbnail)
    - [Add widget to the homepage](../usage/#add-widget-to-the-homepage)
    - [Enable module for all categories](../usage/#enable-module-for-all-categories)
 -  [Back to Main Page](../)

[automated_image_assignment]: ../configuration/#automated-image-assignment-section
