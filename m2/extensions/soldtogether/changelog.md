---
layout: default
title: SoldTogether Changelog
description: SoldTogether changelog
keywords: soldtogether changelog
category: SoldTogether
---

# Changelog

### Version 1.8.0

> Mar 10, 2022

 - New feature - promote products in "Frequently bought together" block. You can set discount for linked product.
 - Improved admin interface at edit product form to maintain linked products.
 - Performance improvements for better clients experience with your store.

### Version 1.7.17

> Jan 28, 2022

 -  [Breeze Theme](https://breezefront.com) integration added
 -  Replaced blurry png "plus" image with svg icon

### Version 1.7.15

> Sep 14, 2021

 -  Updated breeze integration.

### Version 1.7.12

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.

### Version 1.7.10

> Mar 23, 2021

 -  Fixed poorly ordered SoldTogether items at product edit form in Magento Admin.
 -  Translations: add missing phrases; fixed not working js translation for message when options aren't selected.
 -  Don't render "Frequently bought together" block when it is disabled or empty.
 -  Further ADA related improvement - better ScreenReader experience.
 -  Carousel template (customers also bought) - initialize carousel only when jsLayout is set.
 -  Graphgl improvements.

### Version 1.7.6

> Nov 25, 2020

  - ADA compliant fixes and templates refactoring.
  - Improved swatches integration. Update product picture for "Frequently bought together..." block with Stripe layout.

### Version 1.7.5

> Nov 23, 2020

  - Fixed incompatibility with Magento FPC.
  - Fixed ..\Renderer\Configurable doesn't exists. Compatibility with M2.3.2

### Version 1.7.2

> Nov 16, 2020

  - Render options for configurable products without swatches.
  - Fixed possible 404 on product page at some instances where Argento Force is installed.
  - Improve module stability.

### Version 1.7.0

> Nov 2, 2020

  - Add support for configurable products in "Frequently Bought Together" block. Currently we support only attributes with swatches. But in follow releases we will extens it to all required attributes. Customer has to selecte all options for selected products in block befor adding them to cart.
  - "Customers Also Bought" block get support for configurable products also. Currently we support only attributes with swatches. But we extend it in future.
  - New config options "Product Types to Display" for both blocks. You can choose what types of products you want to see in "Frequently Bought Together" and "Customers Also Bought" blocks.
  - Overall code improvements.

### Version 1.6.16

> Oct 21, 2020

  - Fix CatalogGraphQl\..\ProductQueryInterface bug
  - Improve graphQl resolver

### Version 1.6.15

> Oct 20, 2020

  - Replace Slick carousel with Swiper for “Customers Also Bought…” widget.

### Version 1.6.13

> Sep 23, 2020

  - Slighly changed logic how relations are built during reindexing. Use product SKUs instead of IDs. It can be really helpful for stores where products imported form ERP system.

### Version 1.6.11

> Jun 16, 2020

  - Dispatch catalog product list event to improve rendering speed of module's blocks. Espacially can be really helpfull when Swissup ProLabes installed at store.

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
