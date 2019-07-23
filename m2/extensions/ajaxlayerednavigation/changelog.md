---
layout: default
title: Changelog
description: Ajax Layered Navigation Changelog
category: Ajax Layered Navigation
---

# Changelog

### Version 1.3.7

> Jul 23, 2019

**Bugfixes**
 - Specified dom selector for product list replacing
 - Fix get prices ranges incompatible with Magento\Catalog\Model\Layer\Filter\Dynamic\Improved

### Version 1.3.6

> Jul 8, 2019

**Features**
 - Add configuration option for disabling ajax for toolbar actions
 - Improve config options description

**Bugfixes**
 - Fix swatches-graphql incompatible (RenderLayered extends default block)
 - Abstract filter class extends default catalog abstract filter class

### Version 1.3.5

> Jun 5, 2019

**Features**
 - Improve '+ More' config option description

**Bugfixes**
 - Fix getFacetedData logic in attribute filter model
 - Fix 'Filters disappear on iPad'
 - Fix MageWorx_OptionFeatures compatability

### Version 1.3.4

> May 13, 2019

**Features**
 - Add feature 'Hide certain filters on specific categories'
 - Scroll to toolbar after AJAX reload

**Bugfixes**
 - Fix elasticsearch and Magento 2.2 compatibility

### Version 1.3.3

> Apr 19, 2019

**Features**
 - Added 'Show results' button for mobile
 - Add 'More Products' button


**Bugfixes**
 - Fix elasticsearch compatibility
 - RTL small fix
 - Fix scrollbar max-height (related #5 and #40)

### Version 1.3.2

> Mar 11, 2019

**Features**
 - Add block caching
 - Query caching was added
 - Compatibility with latest seo-urls feature - rel="nofollow"
 - RTL styles


**Bugfixes**
 - Fixed product ids bottleneck
 - Fix 2.2 EE compatability (magento/module-stagging); close #43

### Version 1.3.0

**Features**
 - Rename composer package to swissup/module-ajaxlayerednavigation
 - Improve unit tests

### Version 1.2.5
**Features**
 - Added magento 2.2.6 compatibility (close [#37](https://github.com/swissup/ajaxlayerednavigation/issues/37))
 - Improve di injection

### Version 1.2.4
**Features**
 - Added AMP compatibility
 - Add collapse/explode default status for active filter (close [#34](https://github.com/swissup/ajaxlayerednavigation/issues/34))
 - Add price filter type ranges compatability (close [#33](https://github.com/swissup/ajaxlayerednavigation/issues/33))
 - Improve price from-to range initialization ([#35](https://github.com/swissup/ajaxlayerednavigation/issues/35))

**Bugfixes**
 - Fix js error 'Cannot read property 'backUrl' of null'
 - Fix bug (a.host != a.hostname) IE compatability
 - Fix empty replacing, add error message replacing (close [#35](https://github.com/swissup/ajaxlayerednavigation/issues/35))

### Version 1.2.3
 - Improve ajax request configuration
 - Add getAttributeCode method for filter
 - Fix replaceWith+IE(<17) compatability
 - Fix file permissions

### Version 1.2.2
 - Fix setup script
 - Fix double listjs in category.phtml
 - Fix 'mobile + is not ajax + multiple' logic

### Version 1.2.1

 - Improve tooltip CSS styles
 - New price slider modern skin
 - Improve price slider logic (from-to, min-max)
 - Add MGS theme integration
 - Change rating attribute input type (hidden=>multiselect)
 - etc.

### Version 1.2.0

 - Add multiple mode and tooltip (popup)
 - Add amazon like category list style
 - Add infinite scroll
 - Add filter cleance
 - Add all-products page
 - Splited and refactored js code
 - Override swatches template
 - Add unit tests
 - etc.

### Version 1.1.1

 - Fix using attribute 'rating_summary'
 - Fix IE & URLSearchParams bug
 - Fix price filter show
 - Improve js docs style
 - Fix bad URLs for 'Sort by' and 'Show per page' drop-downs
 - Fix clearAll url logic
 - Apply filters + seourl
 - Add translate
 - etc.

### Version 1.1.0

 -  Added sticky layered navigation
 -  Added stock filter (In Stock, Out of Stock)
 -  Added New filter
 -  Added On Sale filter
 -  Fixed layered navigation in one column layout
 -  Added default expanded filters of option
 -  Added slideout filters sidebar
 -  Added round style for color options
 -  Added search options by name
 -  Improved code style
 -  etc.

### Version 1.0.0

 -  Initial release

#### Next up
 -  [Installation](../installation)
 -  [Configuration](../#configuration)
 -  [Use cases](../#use-cases)
 -  [Back to Main Page](../)
