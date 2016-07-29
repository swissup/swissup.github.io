---
layout: default
title: Full Page Cache changelog
description: Full Page Cache changelog
category: Cache
---

# Full Page Cache Changelog

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
