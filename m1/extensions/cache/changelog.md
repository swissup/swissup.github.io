---
layout: default
title: Full Page Cache changelog
description: Full Page Cache changelog
category: Cache
---

# Full Page Cache Changelog

### Version 1.5.2

> Oct 21, 2019

 -  Magento 1.9.4.3 compatibility. (Fixed add/remove item from cart, compare, and wishlist)

### Version 1.5.1

> Sep 30, 2019

 -  MEQP validation fixes.
 -  Fixed empty "Cache lifetime rules" config option.

### Version 1.5.0

 -  PHP 7.2 compatibility
 -  Added compatibility with MGS_Panel module (Claue themes)
 -  Improved cache records delete logic. Less memory consumption.
 -  Decreased memory consumption in backend grids
 -  Fixed possible placeholder output instead of actual html content (
    This happens when some block has it's own cache renders another 'dynamic'
    block inside)
 -  Fixed possible 'key is already registered' error

### Version 1.4.10

 -  Fixed page caching when `utm_` and other tracking parameters are found in
    urls
 -  Code cleanup

### Version 1.4.9

 -  PHP code cleanup to pass MEQP validation

### Version 1.4.8

 -  Fixed dynamic blocks rendering inside [EasyTabs](/m1/extensions/easytabs/)

### Version 1.4.7

 -  Fixed dynamic blocks rendering inside easybanner blocks
 -  Stability improvements

### Version 1.4.6

 -  Fixed cache autorenew for anchored categories, when product triggers cache refresh
 -  Fixed recently viewed products registration
 -  catalog/product_new block removed from dynamic blocks list because of magento
    bug with cached form key

 **Third-party modules**

 -  Mana_Seo compatibility added
 -  Fixed conflict with AOE_Profiler
 -  Fixed conflicts with third-party modules with RollingCurl library

### Version 1.4.5

 -  Fixed possible issues with third-party themes

**Third-party modules**

 -  Fixed cache autorefresh when following modules are used:
    - Cnx_Product
    - Magestore_Inventoryplus

### Version 1.4.4

**Improvements & Fixes**

 -  Fixed cache autorefresh when saving catalog rule
 -  Fixed possible 'undefined variable' error on product page

**Third-party modules**

 -  Magestore_Simisalestrackingapi integration
 -  Added ability to add dynamic block types from third-party modules

### Version 1.4.3

 -  Security fix to _isAllowed method (strtolower)
 -  Fixed possible warning, when admin added empty line to the config
 -  Added compatility with ManaPro (Layered navigation)

### Version 1.4.2

 -  Added ability to restore category and product objects in registry
 -  Added direct product links support (links without category path)
    - Breadcrumbs accodring to last visited category
    - Meta title according to the last visited category
