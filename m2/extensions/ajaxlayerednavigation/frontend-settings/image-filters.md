---
layout: default
title: Ajax Layered Navigation
description: Magento2 Ajax Layered Navigation
keywords: "magento 2 layered navigation extension, magento 2 layered navigation, magento 2 ajax layered navigation, magento 2 custom layered navigation, magento 2 layered navigation multi select, magento 2 custom product collection with layered navigation, magento create custom layered navigation, magento custom layered navigation filter, layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

#### Image attribute filters


##### Create new product attribute

1.  On the Admin sidebar, tap Stores. Then under Attributes, choose Product.
2.  Create new 'brand' attribute.
3.  Set Catalog Input Type for Store Owner is set to “Visual Swatch.”
4.  Under Manage Swatch (values of your attribute), tap Add Swatch. Then, do the following:
    -  In the Swatch column, tap the new swatch to display the menu. Then, choose Upload a file.

    Upload a File
    -  Navigate to the swatch file that you prepared, and choose the file to upload.
    -  Repeat these steps for each swatch image.
    -  Enter the labels for the Admin and Storefront.

5.  In the Storefront Proporties, set value 'Filtrable (with results)' for 'Use in Layered Navigation' .
6.  When complete, tap Save Attribute. Then when prompted, refresh the cache.
7.  The last step is to open each product in Edit mode, and update the brand attribute with the correct swatch. To update multiple products at the same time, follow the steps below.
8.  Run bin/magento index:reindex and bin/magento cache:flush

![vendor](https://user-images.githubusercontent.com/412612/56506693-f4ff1b00-6527-11e9-9eeb-f21c49b3d881.png)

#### Next up
 -  [Installation](../installation/)
 -  [Configuration](../../configuration/)
 -  [Use cases](../../use-cases/)
 -  [Back to Main Page](../../)