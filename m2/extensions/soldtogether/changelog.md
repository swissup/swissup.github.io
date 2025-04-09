---
layout: default
title: SoldTogether Changelog
description: SoldTogether changelog
keywords: soldtogether changelog
category: SoldTogether
---

# Changelog

### Version 1.10.4

> April 9, 2025

 -  PHP 8.4 support added.
 -  Magento 2.4.8 support added.
 -  Breeze: Fixed uninitialized swatches in the swiper block.
 -  Breeze: Fixed not working validation when swatches are lazy

### Version 1.10.3

> Nov 20, 2024

 -  Fixed line wrap on laptop whne using Amazon-like layout.
 -  Remove deferred CSS styles to reduce layout shift score.
 -  Improve navigation with keyboard.
 -  Increased elements size to pass accessibility tests.

### Version 1.10.0

> Jul 29, 2024

 -  NEW! "Frequently bought together" and "Customers also buy" blocks support custom options of promoted products there.
 -  Overall CSS and JS improvements. Reduce module affect on page rendering at storefront. Now CSS of blocks loads only when any of them become visible.

### Version 1.9.17

> May 3, 2024

 -  Fixed js error at the grouped product page.

### Version 1.9.16

> Apr 23, 2024

 -  Fixed error on Magento 2.4.7 at product page with configurable products in module blocks.
 -  Other minor fixes.

### Version 1.9.14

> Feb 2, 2024

 - Breeze integration updated. Dynamic JS support added.

### Version 1.9.13

> Jan 18, 2023

 -  Fixed poorly calculated total price at FBT block when price displayed "Including and Excluding Tax".
 -  Minor JS improvements for stores with Breeze-powered storefront.

### Version 1.9.11

> Oct 20, 2023

 -  Make latest fix for not updated amout of "Frequently bought together" block compatible with older Magento version. And resolvse JS error about priceBox.cache.

### Version 1.9.10

> Oct 17, 2023

 -  Fixed not updated total amount at "Frequently bought together" block when promoted product option changed.

### Version 1.9.9

> Sep 6, 2023

 -  Fixed error "ID already exists" when rendering block for order or cart.
 -  Fixed not updated total amount at "Frequently bought together" block when main product option has changed.
 -  Removed "Frequently bought together" and "Customer also bought" blocks at checkout cart configure item page becuase they make no sense there.

### Version 1.9.8

> Jun 30, 2023

 -  Fixes to improve Accessibility score on product page.
 -  Update integration with Breeze-powered storefront.

### Version 1.9.6

> Apr 25, 2023

 -  Fixed show random products when now relations feature. After previous release random products may include current one. It is fixed in this version.
 -  Improve module stability. Prevent PHP error when previously related product doesn't exists anymore.
 -  Fixed calculation of total amount for "Freaquently bought together..." block at stores with Asian currencies.
 -  Overall JavaScript update for storefront. Now we have common JS files for Luma-based and Breeze-based storefronts. It slightly reduces amount of static content.

### Version 1.9.5

> Apr 12, 2023

 -  Perfomance improvements. Speedup initial page load (not cached yet) on storefront where module block exists with enabled option "List random products for empty collections".
 -  Added danish translation provided by our clients.
 -  Fixed error `Item (...) with the same ID "..." already exists." at storefront atd some instances.
 -

### Version 1.9.4

> Mar 31, 2023

 -  Improved compatibility with PHP 8.2.
 -  Compatibility with Magento 2.4.6.

### Version 1.9.2

> Mar 14, 2023

 -  PHP 8.2 compatibility.
 -  Fixed PHP error in Magento commerce edition.

### Version 1.9.1

> Feb 27, 2023

 -  Data export and import implemented for Sold Together relations. Use core Magento Export/Import interfaces.
 -  Code clean up.

### Version 1.9.0

> Feb 15, 2023

 -  Added soldtogether blocks to template variables list in edit email template interface. Now it is much more easier to insert soldtogether block into Magento Sales emails.
 -  Added button "Select products" if there are no soldtogether relations when edit product in Magento Admin.
 -  Added filtering by product name in Magento admin for grid with relations.
 -  Fixed error for indexing via CLI command about not set area code.

### Version 1.8.8

> Nov 15, 2022

 -  Improved Breeze Theme integration

### Version 1.8.3

> May 26, 2022

 -  Performance improvement: preload configurable attributes for configurable products.
 -  Performance improvement when there are no swatches for related configurable products.
 -  Fixed ability to disable “Also bought” block.
 -  Do not render scripts when block doesn’t have products.

### Version 1.8.2

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.
 -  Fix dropdown with swatches/options when amazon layout.
 -  Product edit form in backend - don't open promo popup when user reorder items.

### Version 1.8.1

> Mar 15, 2022

 - Cron processor optimization.
 - Magento 2.3.x compatibility fixes.

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
