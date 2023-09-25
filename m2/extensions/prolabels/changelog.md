---
layout: default
title: Prolabels Changelog
description: Prolabels changelog
keywords: prolabels changelog
category: Prolabels
---

# Changelog

### Version 1.7.5

> Sep 25, 2023

 -  Fix not processed variables in labels on storefront.
 -  Model LabelsProvider code refactor.

### Version 1.7.4

> Sep 22, 2023

 -  Allowe to set type of predefined variable. Examples, `#attr:sku:string#`. It is useful when you want product label with SKU (or any other attribute). It starts with zeros and you want to keep them.

### Version 1.7.3

> Jul 26, 2023

 -  NEW condition for manual labels - final price. But is has one downside. Final price condition requires a lot of calculations. So labels with this condition takes much more time to apply.
 -  Source code tweaks and improvements.

### Version 1.7.1

> Jun 28, 2023

-  Fix missing system "In Stock" label. Label didn't showed up even when it enabled and properly setup.
-  Update integration with Breeze-powered frontend. Use the same JS for Luma and Breeze.

### Version 1.7.0

> Jun 23, 2023

 -  Advanced settings for configurable products and manual labels. Now you can choose how product label and category label of configurable product appears.

### Version 1.6.23

> Mar 14, 2023

 -  PHP 8.2 compatibility.

### Version 1.6.20

> Jun 17, 2022

 - Breeze integration - minor improve of CSS. Fixed jumping product name when line-clamp is used

### Version 1.6.19

> May 26, 2022

 -  Fixed missing labels on configurable product’s child products.
 -  Fixed error in Magento Cloud on PHP 8.1.
 -  Sold Together integration: added linked items processor.

### Version 1.6.18

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.
 -  Respect "manage stock" setting when showing out of stock label.

### Version 1.6.16

> Feb 15, 2022

  - Improve module stability. Prevent fatal error about suppling null when ProductInterface expected. Error occurs when grouped product has no assigned products.
  - Improvements for out of stock label. Out of stock label shows up when all children of main product have disabled backorder, are out of stock or has qty lower/equal zero.
  - Model\Stock::getIsInStock method deprecated. Use `isInStock` instead.

### Version 1.6.15

> Feb 1, 2022

 -  Fixed broken db_schema: The attribute 'length' is not allowed.
 -  Fixed visible out of stock label when product is available for purchase because backorders enabled.

### Version 1.6.14

> Jan 31, 2022

 -  Use declarative schema (db_schema.xml) and schema whitelist. Instead of obsolete UpgradeSchema scripts.
 -  Integration with furure Sold Together release.

### Version 1.6.13

> Jan 28, 2022

 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.6.9

> Sep 24, 2021

 -  Breeze: fixed missing labels in recent products.
 -  Breeze: Fixed missing prolables after selecting configurable option.

### Version 1.6.8

> Sep 14, 2021

 -  Updated breeze integration.
 -  Improve logic behind generating labels data for grouped products.
    Especially on-sale label. Now we search for cheapest product in grouped and
    calculate regular price, special price and final price using it.

### Version 1.6.7

> Aug 6, 2021

 -  Breeze: compatibility with new [Turbo](/m2/extensions/breeze/configuration/#breeze-section) option added.
 -  Compatibility with Firebear_ConfigurableProducts module.
 -  Fixed negative discount amount at configuarble product when one of items has regular price lower then special price.

### Version 1.6.4

> Jun 3, 2021

 -  Fixed js error 'isEmpty is not a function'.
 -  Improved compatibility with Multi Source Inventory module.

### Version 1.6.3

> May 21, 2021

 -  Fixed possible missing out of stock label.
 -  Fixed js error on configurable products page.

### Version 1.6.2

> May 17, 2021

 -  [Breeze](/m2/extensions/breeze/) integration updated - Fixed image selector
    config value to work with breeze gallery.

### Version 1.6.1

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.
 -  Added ability to place content labels across multiple page locations.

### Version 1.5.18

> Mar 23, 2021

  - Improve JavaScript minification potential.

### Version 1.5.17

> Jan 25, 2021

  - Improve module stability. Prevent warning - array_flip(): Can only flip STRING and INTEGER values!
  - Fixed possible JS Error: Cannot find template with ID Swissup_ProLabels/labels.
  - Fixed missing on sale label at configurable product when some of its children have price lowers then discounted price of its other children.
  - Few minor optimizations and improvements.

### Version 1.5.14

> Nov 26, 2020

  - Fixed PHP error for manual label save after image upload in Magento 2.4.1
  - Fixed incorrect stock qty for stock label. Latest MSI compatibility.
  - Fixed for discount percent and discount amount for Bundle product.
  - Minor ADA compatibility fix.

### Version 1.5.10

> Sep 23, 2020

  - Few tweaks and fixes for server side logic.

### Version 1.5.9

> Aug 25, 2020

  - Get rid of Cron job for manual labels and add index instead. New index id is `swissup_prolabels`.

### Version 1.5.8

> Aug 5, 2020

 -  Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.

### Version 1.5.7

> Jul 16

  - Once again about optimization. Improve labels rendering on product page for configurable products. Reduce number of DB queries.

### Version 1.5.6

> Jul 10, 2020

  - All about optimization! Significantly reduced load time of category, search result and all other pages with product listing. And as an additional benefit Swissup Ajax Layered Navigation module works faster too. It's must-have update.

### Version 1.5.5

> Jun 5, 2020

  - Fixed PHP warning - array must contain at least one element.

### Version 1.5.4

> Jun 2, 2020

  - Fixed PHP Warning - division by zero in LabelsProvider.

### Version 1.5.3

> May 15, 2020

  - Localization added.
  - Updated CodeMirror module.

### Version 1.5.2

> Mar 19, 2020

 -  Fix prolabel without styles at product page on frontend. Issue occurs when first page load after cache flush is AMP version.

### Version 1.5.1

> Feb 17, 2020

 -  Don't show low stock label for products with zero qty. (Backordered products)

### Version 1.5.0

> Jan 31, 2020

 -  [AMP](/m2/extensions/amp/) integration added.
 -  Code cleanup.

### Version 1.4.2

> Jan 20, 2020

 -  Improvements for labels at configurable product. Show labels from child products when options selected.

### Version 1.4.1

> Dec 6, 2019

 -  Improve stability at frontend. Prevent division by zero. Occurs when product special price is 0.0000.

### Version 1.4.0

> Nov 19, 2019

 -  Added advanced text editor for product labels text and CSS in Magento Admin. Check how updated interface [here](/m2/extensions/prolabels/interfaces/#product-label-tab-and-category-label-tab). Advanced text editor based on CodeMirror library.
 -  Fixed missing onSale label for grouped products.

### Version 1.3.7

> Oct 16, 2019

 -  Remove direct 'jquery/ui' usage to improve js performance.

### Version 1.3.6

> Aug 21, 2019

 -  New label added: "Argento Force rectangle label with offset"

### Version 1.3.4

> Jul 16, 2019

 -  Fixed missing category labels on Magento 2.3.x (after fixed missing special price at listings in Magento 2.2.x in previous release).


### Version 1.3.3

> Jul 15, 2019

 -  Fixed missing special price at product listing when ProLabels module enabled.

### Version 1.3.2

> Jun 12, 2019

 -  Use JSON to store labels conditions instead of serialize.
 -  Show labels in recently viewed products widget.
 -  Fixed lables index update when save configurable product.

### Version 1.3.1

> May 15, 2019

 -  Fixed incorrect prices in labels when tax included in price. Respect tax settings.
 -  Improve OnSale label determination for configurable products.

### Version 1.3.0

> Apr 11, 2019

 -  Improve module styles. Merge module CSS with theme CSS.

### Version 1.2.7

> Mar 29, 2019

 -  Magento 2.3 compatibility (Fixed broken file uploader)

### Version 1.2.6

> Jan 15th, 2019

 -  8 new prolable presets with Font Awesome icons. Search for "hexagon" in presets. You may need [Font Awesome module](https://github.com/swissup/module-font-awesome) to get full advantage of new presets.

    ![New labels](/images/m2/prolabels/changelog/version-1_2_6.png)

 -  Small source code improvements and optimizations.

### Version 1.2.5

> Jan 4th, 2019

 -  Fix issues with caching of In Stock label.

### Version 1.2.4

> Jan 2nd, 2019

 -  Current version allows to use predefined variables in style attribute of tags in label text.
 -  Requires Swissup Core module version 1.8+ to reuse FileInfo model in admin interfaces.

### Version 1.2.3

> Dec 11th, 2018

 -  Fix error during labels appling at some Magento Commerce (Enterprise) stores.
 -  Better logic to determine whether "On sale" label can be shown.
 -  Few JavaScript and CSS fixes to make module more stable.
 -  Improve manual labels appling (me simple products were missed from indexes if they were children of configurable product).

### Version 1.2.0

> Oct 10th, 2018

Internal module naming convention was updated. We applied this changes to reach full compatibility with Magento Marketplace policy.

### Version 1.1.0

> Sep 21st, 2018

> You may get errors during DI compilation when upgrdaing from previous version. So check [upgrade instruction](../installation/manual/#upgrade-from-version-10x-to-110).

It's not a regular update. It's a fresh start for Prolabels module on Magento 2!

 -  Instant preview in Magento Admin.
 -  15 label presets. Now you can create product label in 3-5 mouse clicks.
 -  No need to modify templates to get labels on category page in any Magento theme. Even more. You get labels in third-party widgets (as long as they developed with Magento recommendations).
 -  Significant code improvement to meet Magento standards and follow best practices.

### Version 1.0.23

 -  Fixed compatibility with Argento product listing styles

### Version 1.0.22

 -  Optimize labels rendering on storefront.
 -  Fixed invalid discount values calculation for non-base currencies.
 -  Fixed warning illegal offset during CLI reindex.

### Version 1.0.19

 -  Code cleanup and stability improvements

### Version 1.0.18

 -  Magento 2.2 compatibility

### Version 1.0.17

 -  Fix missing labels after cron run at some Magento instances.
 -  ACL improvements according latest Magento requirements.
