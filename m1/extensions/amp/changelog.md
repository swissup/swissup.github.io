---
layout: default
title: AMP changelog
description: Recent updates in AMP for Magento
keywords: amp updates, amp changelog
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

### Version 1.1.0

 -  Product page support added for all of the product types
 -  Wordpress integration added (Fishpig_Wordpress module)
 -  Rating stars added to product listing

**Fixes and Improvements**

 -  Improved automatic layout detection for small images
 -  Added additional check for proper libxml library version
 -  Fixed html-entities encoding issue (UTF-8)
 -  Fixed image dimensions detection, when using forced secure url
 -  Srcset added to the logo image (Better Argento theme support)

### Version 1.0.4

 -  Performance optimizations. Up to 400% performance boost on specific server
    configurations.

### Version 1.0.3

 -  Added compatibility with:
     +  TM_lazyload
     +  TM_Pagespeed
     +  TM_DeferJs
     +  TM_Botprotection
 -  Magento 1.7 compatibility added
 -  Fixed AMP homepage rendering via cms/page/view action
 -  Catalog "subscribe to rss" link made hidden
 -  Improved font rendering on iMac
 -  Fixed missing "Shop By" button on catalog pages without layered navigation,
    but with "catalog/navigation" block
 -  Added compatibility with lazyload images (data-src and data-lazy attributes)
 -  Added `tmamp` registry key, that can be used by third-party modules to modify
    their logic, when AMP theme is used

### Version 1.0.2

 -  Fixed duplicated AMP themes in configuration dropdown list
 -  Improved stability, when layered navigation block is missing in layout
 -  Fixed errors, when third-party library is already included by theme:
     +  Leafo/ScssPhp
     +  Mobile_Detect
     +  Fastimage
 -  Improved header template markup to make possible to disable search with xml
    layout update only

### Version 1.0.1

 -  Fixed possible error at checkout page
 -  Fixed compatibility with PHP 5.4.4
 -  Fixed RWD category page styles, when cms block is rendered only
 -  Improved AMP logic to work on supported pages only
 -  Fixed error, when some third-party block created programmatically, and have
    no access to layout model

### Version 1.0.0

 -  Initial release
 -  List of supported pages:
    +  Homepage
    +  Catalog Search
    +  Category Page
    +  Product Comparison Page
    +  Cms Pages
