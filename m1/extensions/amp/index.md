---
layout: default
title: AMP
description: Accelerated Mobile Pages for Magento
keywords: amp for magento, accelerated mobile pages
category: Accelerated Mobile Pages
---

# Accelerated Mobile Pages

This module is an [AMP][ampproject] package for Magento. The package consists from
AMP theme that brings lightweight css styles powered by [SASS][sass] and AMP
module that automatically converts all known tags and blocks into amp compatible
elements on the fly.

Following pages are supported:

 -  Homepage
 -  Cms pages
 -  Products comparison page
 -  Category
 -  Search results
 -  Product page
    -  All product types are supported with and without custom options
    -  Configrable "Configure and Buy" and full "Add to Cart" modes
        are [available](configuration/#product-page)
    -  Configurable products works in "Configure and Buy" mode only
 -  Wordpress pages by [Fishpig](https://fishpig.co.uk/magento/wordpress-integration/)
    (See [known issue](known-issues/#wordpress-pagination-is-not-working)
    for this module)

{% include gallery.html images=site.data.gallery.m1.amp.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

### Contents

 -  [Installation](installation/)
 -  [Changelog](changelog/)
 -  [Configuration](configuration/)
 -  [Customization](customization/)
    -  [Homepage](customization/homepage/)
    -  [Footer](customization/footer/)
    -  [Design](customization/design/)
 -  [Google Analytics](google-analytics/)
 -  [FAQ](faq/)
 -  [Known issues](known-issues/)

### Developers documentation

 -  [Writing AMP-friendly module](devdocs/)

[sass]: http://sass-lang.com/
[ampproject]: https://www.ampproject.org/
