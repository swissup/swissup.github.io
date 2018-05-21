---
layout: default
title: Navigationpro Changelog
description: Navigationpro changelog
keywords: navigationpro changelog
category: Navigationpro
---

# Changelog

### Version 1.5.0

NavigationPro 1.5.0 brings a new [nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/)
that allows to render menu in a single row despite of top level items count,
various dropdown positioning fixes and improvements, and ability to redefine
LESS variables inside [third-party themes](/m2/extensions/navigationpro/customization/custom-theme-variables/)
(for developers).

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v150 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Added ability to [move top-level items](/m2/extensions/navigationpro/use-cases/nowrap/)
    into separate dropdown, if they doesn't fit on a single row
 -  Improved dropdown positioning when it does not have enough space on the screen
 -  Use amazon-like dropdown positioning for the 'departments' dropdown only. All
    other dropdowns (if your menu have them) will use default logic.
 -  Added ability to redefine variables in
    [third-party themes](/m2/extensions/navigationpro/customization/custom-theme-variables/)
 -  Added ability to set padding via
    [less variables](/m2/extensions/navigationpro/customization/less-variables/)
    for items inside dropdowns
 -  Dropdown size fixes on RTL locales

### Version 1.4.1

 -  Magento 2.2.4 product page breadcrumbs compatiblity
 -  Fixed rare bug with unreacheable dropdowns inside vertical multicolumn layout
 -  Added separate handler when clicking caret icon (open/close dropdown)

### Version 1.4.0

 -  [Overlay feature added](/m2/extensions/navigationpro/use-cases/overlay/)
 -  Native browser's `column-count` feature will be used to build columns in
    vertical direction.
 -  Allow to close dropdown when click outside of menu on iPad
 -  Better RTL support. No visible transformations after page is loaded.
 -  Small fixes

### Version 1.3.0

 -  New [simplified form](/m2/extensions/navigationpro/backend/menu-new/) to
    create menu with a few clicks
 -  Removed open menu delay on touch devices
 -  RTL support added (RTL theme is required to use)
 -  Fixed ability to use form inside a dropdown item
 -  Added small delay before opening first dropdown item
 -  Small js and css fixes

### Version 1.2.0.1

 -  Fixed browser freezing on mobile devices when using vertical subcategories
    alignment

### Version 1.2.0

 -  Added ability to set
    [positioning settings](/m2/extensions/navigationpro/ui/dropdown-position/)
    for the first level dropdown:
    - Stick to Left
    - Center
    - Stick to Right

### Version 1.1.0

**Major Changes**

 -  Sidebar menu support [added](/m2/extensions/navigationpro/use-cases/sidebar-menu/)
    with plenty of configurable options
 -  Navigationpro widget [added](/m2/extensions/navigationpro/widget/) with
    [themes](/m2/extensions/navigationpro/themes/) support
 -  Amazon-like sidebar menu [added](/m2/extensions/navigationpro/use-cases/amazon-menu/#sidebar-menu)

[**View Demo**](http://docs.swissuplabs.com/m2/extensions/navigationpro/demo/)

**Fixes and Improvements**

 -  Mobile view will always use single column mode
 -  Fixed too small dropdown width and height on mobile devices
 -  Fixed php error when switching store view in backend interface
 -  Improved dropdown positioning calculations
 -  Fixed css issues with category tips
 -  Javascript code optimizations

### Version 1.0.1

 -  Fixed possible invalid dropdown height for Amazon menu

### Version 1.0.0

 -  Initial Release
