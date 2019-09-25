---
layout: default
title: AMP changelog
description: Recent updates in AMP for Magento 2
keywords: amp updates, amp changelog
category: Accelerated Mobile Pages
---

# Changelog

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
