---
layout: default
title: SoldTogether Changelog
description: SoldTogether changelog
keywords: soldtogether changelog
category: SoldTogether
---

# Changelog

### Version 1.6.0

> May 23, 2019

 -  Added ability to show suggestions based on shopping cart items. See
    [firecheckout intro popup example](/m2/extensions/firecheckout/customization/use-cases/intro-popup/#frequently-bought-together)
 -  Code cleanup

### Version 1.5.0

> May 16, 2019

 -  Added mass action "Delete" at module grids. Now you can delete multiple relations at once.
 -  CLI commands to index/reindex Sold Together relations with bin/magento commands.
 -  Minor JavaScript code improvements.

### Version 1.4.2

> Mar 29, 2019

 -  RTL styles added

### Version 1.4.1

> Dec 19th, 2018

 -  Fix integrity constrain violation during reindex when store has orders where ordered product deleted.
 -  Interate with Magento MSI modules and Magento 2.3.0. Fix error 'at_inventory_in_stock'.'stock_id' column not found.

### Version 1.4.0

> Dec 4th, 2018

 -  Integrate with Swissup ProLabels module. Now you can get product labels in Sold Together blocks.
 -  Updated Slick Carousel.
 -  Significant source code improvements to provide better modules stability. No more errors in Magento Admin product page.

### Version 1.3.0

> Sep 27th, 2018

 -  Internal module naming convention was updated. We applied this changes to reach full compatibility with Magento Marketplace policy.

### Version 1.2.7

 -  Added new config option that allows to disable 'Create relations on order save'

### Version 1.2.6

 -  Fixed issue with "Grouped" products price calculation in "Amazon" view
 -  Code cleanup

### Version 1.2.5

 -  New Stripe layout for ‘Frequently Bought Together’ block. Now can can choose between ‘Amazon Inspired’ (default) and ‘Stripe’ layout style.
 -  Improved and fixed customer relations reindex process.
 -  Fixed exception ‘Item with the same ID already exists’ on storefront.

### Version 1.2.2

 -  Code cleanup
 -  Style improvements
 -  Fixed possible error when product is not found in registry

### Version 1.2.0

 -  Magento 2.2 compatibility
 -  Added 'Customers who bought this also bought' block to suggest page (Or AjaxPro popup)

### Version 1.1.8

 -  ACL improvements according latest Magento requirements.
