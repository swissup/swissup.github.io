---
layout: default
title: AMP changelog
description: Recent updates in AMP for Magento 2
keywords: amp updates, amp changelog
category: Accelerated Mobile Pages
---

# Changelog

### Version 1.4.14

> Sep 27, 2021

  - Fixed notice: Undefined index DESC in sorter template

### Version 1.4.13

> Sep 1, 2021

  - Fixed error on category page: using correct escaping in list template

### Version 1.4.12

> Aug 31, 2021

  - Featured Attributes module integration added

### Version 1.4.11

> Aug 23, 2021

  - Magento 2.4.3: fixed missing pagination below products list

### Version 1.4.10

> Jun 18, 2021

  - Added amp=1 param to urls in menu when Varnish used
  - Added correct sizes for slider and catalog images
  - Added prefetch for Fontawesome CDN
  - Fixed error caused by text nodes inside audio/video tags

### Version 1.4.8

> Dec 22, 2020

  - Added custom styles field in module backend configuration

### Version 1.4.6

> Nov 16, 2020

  - Added config to exclude URLs from AMP
  - Added contact us page support
  - Using the latest FontAwesome version

### Version 1.4.5

> Sep 23, 2020

  - Fixed missing product reviews in Magento 2.3.3 and newer.
  - Force scssphp version 1.1.1 as 1.2 is broken.

### Version 1.4.3

> Aug 1, 2020

 -  Removed prohibited `loading` attribute from images (Magento 2.4 compatibility fix)
 -  Removed `cookie-status-check` message on AMP (Magento 2.4 compatibility fix)
 -  Replaced plugin with event (Magento 2.4.0 compatibility)
  -  Removed deprecated installer. Use [Marketplace](/m2/extensions/marketplace/cli/#marketplacepackageinstall) module to install AMP
 -  Use `swissup/module-image` to detect image dimensions
 -  Removed change qty force for bundle products
 -  Fixed store menu processing when Varnish used

### Version 1.4.1

> Jul 1, 2020

 -  Fixed broken Varnish esi include after using DOMDocument which caused missing menu
 -  Fixed image size detection and added detection for svg images - svg logo now will be displayed on AMP
 -  Fixed page jumping while scripts are initializing
 -  Do not render cookie notices block when it's disabled

### Version 1.4.0

> Jun 26, 2020

 -  Full page cache now works on AMP and brings up to 15x speedup!
 -  Cart, compare, wishlist and cookie restriction were rewritten to work with the cache
 -  Fixed missing view details button for products with required options
 -  Abandoned package leafo/scssphp replaced with scssphp/scssphp

### Version 1.3.14

> May 4, 2020

 -  Magento 2.3.5 CSP compatibility
 -  Fixed too big :focus border around the image
 -  Fixed error at products compare page
 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian

### Version 1.3.9

> Jan 31, 2020

 -  Fixed missing CMS block when it's inserted as widget.
 -  Added ability to add styles programmatically.
    (Integration with [ProLabels](/m2/extensions/prolabels/) module.)
 -  Code cleanup.

### Version 1.3.7

> Dec 6, 2019

 -  Fixed overlap for long submenus.
 -  Code cleanup in [Swissup Easy Catalog Images module](/m2/extensions/easycatalogimages/changelog/).

### Version 1.3.6

> Sep 25, 2019

 -  Major update of [Swissup EasySlide module](/m2/extensions/easyslider/changelog/#version-152). It improves stability, perfomence and admin interfaces.
 -  Meet latest Magento coding standarts requirements. Remove serialize from installer.

### Version 1.3.5

> Aug 19, 2019

 -  Fixed DOMDocument empty string warning caused by third-party menu modules.

### Version 1.3.4

> Jun 27, 2019

 -  Fixed disabled add to cart button in Magento 2.3.2
 -  Fixed wrong image sizes on category page

### Version 1.3.3

> Jun 12, 2019

 -  Fixed possible duplicate amphtml pages for configurable products

### Version 1.3.2

> May 2, 2019

 -  `Force AMP` feature now works correctly with Magento Full Page Cache
 -  Fixed broken top navigation with block cache enabled

### Version 1.3.1

> Mar 29, 2019

 -  Magento 2.3.1 compatibility (Fixed missing tabs at product page)

### Version 1.3.0

> Mar 14, 2019

 -  Added ability to [remove tag](/m2/extensions/amp/use-cases/#remove-tag) from AMP pages
 -  Added ability to [remove selected tag attributes](/m2/extensions/amp/use-cases/#remove-tag-attributes)
    from AMP pages

### Version 1.2.1

> Feb 26, 2019

 -  Fixed broken image 'alt' tag when double-quotes are used in image title
 -  Fixed invalid product image markup on Luma-based themes (Invalid 'max-width'
    and 'max-height' attributes)

### Version 1.2.0

> Jan 4, 2019

{% include gallery.html images=site.data.gallery.m2.amp.changelog.v120 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Cookie restriction mode added
 -  Fixed language switcher in Magento 2.2.6+
 -  Add to cart support for configurable products
 -  Added AMP integration for the following extensions:
    +  [Rich Snippets](/m2/extensions/richsnippets/)
    +  [Highlight](/m2/extensions/highlight/)
    +  [Attribute Pages](/m2/extensions/attributepages/)

### Version 1.0.0

 -  Initial release
 -  List of supported pages:
    +  Homepage
    +  Cms Pages
    +  Product Comparison Page
    +  Category Page
    +  Catalog Search
    +  Product Page
