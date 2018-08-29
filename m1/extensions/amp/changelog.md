---
layout: default
title: AMP changelog
description: Recent updates in AMP for Magento
keywords: amp updates, amp changelog
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

### Version 1.6.4

 -  Updated deprecated mustache library to the version 0.2

### Version 1.6.3

 -  Fixed possible 'amp-form' validation error
 -  Disable sticky header by default:
     -  Google recommends to disable it on AMP
     -  Pagespeed tools doesn't show content in preview screenshot when sticky
        header is used

### Version 1.6.2

 -  Fixed not-working 'Add to Cart' button on category pages at google CDN pages
 -  Fixed 'Add to compare' links at Google CDN cache pages

### Version 1.6.1

 -  Added ability to disable layered navigation output via configuration
 -  Fixed validation error when "Cookie restriction" mode is enabled
 -  Fixed possible "Content mismatch" error when using third-party layered
    navigation modules
 -  Mana_Seo compatibility added

### Version 1.6.0

{% include gallery.html images=site.data.gallery.m1.amp.changelog.v160 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Fixed ability to switch to desktop theme to buy configurable product, when
    "Force AMP activation" is enabled
 -  Improved ability to support [third-party pages](/m1/extensions/amp/devdocs/#add-amp-support-for-the-third-party-page)
 -  Magento's [Cookie Restriction Mode](http://docs.magento.com/m1/ce/user_guide/store-operations/cookie-restriction-mode.html)
    support added
 -  [Attributepages 1.4.0](/m1/extensions/attributepages/changelog/#version-140) support added.

### Version 1.5.0.1

 -  Fixed product page slider animation on rtl theme
 -  Fixed bug when user can't read error message after adding product to the cart
 -  Attribute "checked/" is not allowed error fixed

### Version 1.5.0

{% include gallery.html images=site.data.gallery.m1.amp.changelog.v150 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

This version includes major update for **RTL** styles.

### Version 1.4.0

> Warning!
>
> Disable compilation mode before upgrade. You can find it at
> _System > Tools > Compilation_ menu.

 -  `data-amp-` feature replaced with [`data-tmamp-`](/m1/extensions/amp/use-cases/#change-css-class-name)
    as it was conflicting with native `data-amp-replace` functionality
 -  Fixed bugs with following actions at google AMP cache pages:
    - Add to Cart
    - Add to Compare
    - Add to Wishlist

### Version 1.3.0

 -  Added ability to use ['data-amp-' attribute](/m1/extensions/amp/use-cases/#change-css-class-name)
    for any tag
 -  Fixed 'Add to Cart' functionality on google search pages
 -  Fixed AMP validation errors with the following attributes:
    - noshade
    - align
    - border
    - size

### Version 1.2.1

 -  Border attribute added to blacklist
 -  Fixed compatibility with Magento < 1.9.2 that was broken in 1.2.0 update

### Version 1.2.0

**Fixes and Improvements**

 -  Fixed non-working add to cart, in case if secure url is used
    but not for the product page
 -  Added support for products lists at homepage
 -  Added support for buttons with `onclick="setLocation"` attribute
 -  Better compatibility with third-party product listings

**Developer improvements**

 -  Added `tmamp_` prefixed layout
    [handles](/m1/extensions/amp/devdocs/#amp-specific-layout-update)
    to use in third-party modules
 -  Added ability to [add additional supported pages](/m1/extensions/amp/devdocs/#add-amp-support-for-the-third-party-page)
    from third-party module observer

### Version 1.1.2

 -  Fixed empty 'ShopBy' popup for categories without children and layered
    navigation
 -  New html tags and attribute filters:
    - `<link>` - Prohibited without `rel` attribute
    - `<amasty_seo>` - All custom tags are prohibited
    - `nowrap` - This attribute is deprecated and prohibited for AMP pages

### Version 1.1.1

 -  Old libxml library support added (< 2.8.0)
    -  Added fix to prevent broken html when using old libxml
    -  If you are using another module with `DOMDocument` parser - it may break
        markup again. See [known issues section](/m1/extensions/amp/known-issues/#old-libxml-library).
 -  Fixed not needed links separator at product page when wishlist is disabled

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
