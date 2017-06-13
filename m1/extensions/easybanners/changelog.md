---
layout: default
title: Easy Banners changelog
description: Easy Banners changelog
category: Easy Banners
sidebar: sidebar.md
---

### Version 1.7.0

 -  Added ability to show lightbox/awesomebar banner once a
    [day/week/month per customer](/m1/extensions/easybanners/backend/manage-banners/#conditions)
 -  Magento 1.9.3.3 image validator added to the upload image action

### Version 1.6.1

 -  Transparent images support added
 -  Small fixes

### Version 1.6.0

**New Banner Conditions**

 -  Product attribute conditions added
 -  Page URL condition added
 -  "Day of Week" condition added
 -  "Day of Month" condition added
 -  [View screenshots](../backend/manage-banners/#conditions)

**Improvements**

 -  Great performance improvements for stores with long-lived banners
 -  Improved conditions dropdown organization
 -  Added new 'type' field to create Lightbox and Awesomebar banners
 -  Lighbox and awesomebar placeholders made invisible in placeholders grid
 -  Added placeholder field descriptions
 -  Sort order column removed from grid as is takes too much space
 -  Improved banner save logic

**Fixes**

 -  Added js validator for placeholder's position field to simplify it's filling
 -  Fixed resize exception, when width is not set
 -  Fixed possible invalid display count calculation

**Deprecated functionality**

 -  Lightbox and Awesomabar banners are no longer could be linked to another
    placeholder. In case you've used this feature, you need to duplicate those
    banners to attach to placeholders separately.

### Version 1.5.3

**New features**

 -  Added columns "Store view", "Banner content" in banner backend grid to make
    easier banners management

**Fixes**

 -  Grid search in banner conditions for pages (issue occurs on latest magento
    versions)
 -  Redirect issue for SEO url (.html)

### Version 1.5.1

 -  Improved popup centering for some third-party themes
 -  isAllowed method added to backend controller


### Version 1.5.0

 -  Integration with Magento_EE Page_Cache
 -  Lazy image load module compatibility
 -  New conditions:
    - Subtotal Excluding Tax
    - Subtotal Including Tax

