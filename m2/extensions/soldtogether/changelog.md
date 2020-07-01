---
layout: default
title: SoldTogether Changelog
description: SoldTogether changelog
keywords: soldtogether changelog
category: SoldTogether
---

# Changelog

### Version 1.6.10

> Jul 1, 2020

  - Fixed SQL error when save newly created product with soldtogether data.

### Version 1.6.9

> May 18, 2020

  - Localization added.

### Version 1.6.8

> Mar 13, 2020

 -  Fixed possible fatal error on the product page.

### Version 1.6.7

> Feb 18, 2020

 -  Rework templates to make blocks work at checkout success page.
    Carousel template can be used for frequently bought together block also.
 -  Fixed RTL carousel styles

### Version 1.6.5

> Nov 22, 2019

 -  Fixed message "Requested product does not exists" on edit product in Magento Admin. Error occurs when assigned product deleted.
 -  Fixed infinit loader in "Add Customers Bought Together" popup at product edit in Magento Admin when popup open before before "Add Frequently Bought Products" popup.
 -  New breakpoints in carousel for "Customers also buy" widget.

### Version 1.6.4

> Aug 21, 2019

 -  Fixed spacing around 'Add To Cart' button

### Version 1.6.3

> Aug 14, 2019

 -  Remove module blocks from Swissup Ajaxpro popup.
 -  Customers Also Bought block - don't add tocart checkbox for configurable, bundle or grouped products. Because it doesn't work.

### Version 1.6.2

> Jun 12, 2019

 -  Fix warning during DI compilation at Magento 2.1.x.
 -  Minor JS improvements. Remove requirejs-config. Move inline JS to static JS file.

### Version 1.6.1

> May 24, 2019

 -  Prevent unwanted products in the cart after check/uncheck some checkboxes.

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
