---
layout: default
title: Changelog
description: Ajax Layered Navigation Changelog
category: Ajax Layered Navigation
---

# Changelog

### Version 1.3.45

> Mar 30, 2022

 - Fix: price min-max values at another currency
 - Fix: compatability with elasticsearch 6

### Version 1.3.44

> Feb 15, 2022

 - Fix: convert current currency to base currency
 - Fix: On Sale filter wrong slider renderrer
 - Fix: setup_version and setup patch data bug

### Version 1.3.43

> Jan 28, 2022

 -  Magento Coding Standard fixes
 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.3.41

> Nov 29 2021

 - Prevent scroll event triggering after clicking by toolbar
 - Add speed param of scrolling (fast scroll prevent race)
 - Save push state (infinite scroll) for returns to the origin page

### Version 1.3.41

> Aug 19 2021

 - Fix 'Cannot instantiate interface Magento\InventorySalesApi...
 - Use separate group for merged css. This makes global bundle persistent across all site.

### Version 1.3.40

> July 19 2021

 - Fix/Improve js isMobile (portrait mode)
 - Remove console.log about state dom element
 - Fix toolbar event racing (Magento_Catalog/.../toolbar.js, navigation/toolbar.js)
 - Fix phpunit tests
 - Fix hasAttributeModel not exist warning
 - Fix Magento\Framework\App\Request not found
 - Fix access to an undefined property
 - Fix setUp(): void errors
 - Add push_state_with_infinite_scroll config option (close #64)

### Version 1.3.40

> July 19 2021

 - Fix/Improve js isMobile (portrait mode)
 - Remove console.log about state dom element
 - Fix toolbar event racing (Magento_Catalog/.../toolbar.js, navigation/toolbar.js)
 - Fix phpunit tests
 - Fix hasAttributeModel not exist warning
 - Fix Magento\Framework\App\Request not found
 - Fix access to an undefined property
 - Fix setUp(): void errors
 - Add push_state_with_infinite_scroll config option (close #64)

### Version 1.3.37

> Jun 15, 2021

 - [Breeze](/m2/extensions/breeze/) integration added.

### Version 1.3.36

> May 28, 2021

**Bugfixes**
 - Fix di Slider/AbstractFilter (close #66)
 - Fix Model\Layer\Filter\Slider logic
 - Fix 'Front controller reached 100 router match iterations' when store category is not active

### Version 1.3.35

> Apr 27, 2021

**Improvments**
 - Add aria attributtes support for argento compatability

### Version 1.3.34

> Apr 20, 2021

**Bugfixes**
 - Fixed option/product counting. Add visibility, category and other filters for full 2.4 (elasticsearch) compatability
 - Fixed 'Empty swatch tooltips on 2.4'
 - Fixed JS warning in browser console - "Fallback to JQueryUI Compat activated. Your store is missing a dependency for a jQueryUI widget..."
 - Apply filter when user typed price into intups at price filter. Or any other range filter.

### Version 1.3.33

> Feb 17, 2021

**Bugfixes**
 - Fixed strange php notice
 - Reset page param 'p' before attribute filter applying
 - Catch elasticsearch exception in DynamicPlugin

### Version 1.3.32

> Jan 20, 2021

**Bugfixes**
 - Fixed notice int return almost array

### Version 1.3.31

> Nov 25, 2020

**Bugfixes**
 - Fix multiple behaviors enabled on mobile

**Improvments**
 - Add range slider for price type custom filters (close #63)

### Version 1.3.30

> Nov 13, 2020

**Bugfixes**
 - Add possible multiple 1-column support
 - Prevent Chrome from scrolling down to 'More' button after clicking on it
 - Fixed duplicate page description after clearing filters
 - Do not collapse section when unchecking filter via checkbox

**Improvments**
 - jQuery accepts array of element to insert. No need for this loop.
 - Merge two methods together because they do the same logic
 - Improve scroll to top: scroll when top is outside of the viewport
 - Attributepages integration

### Version 1.3.28

> Oct 13, 2020

**Bugfixes**
 - Fix seo-urls and /all-products integration
 - Add acl.xml

### Version 1.3.27

> Oct 1, 2020

**Bugfixes**
 - Fix for 'You cannot define a correlation name 'stock_status_index' more than once'
 - Bugfix for #62, empty sort order field name (tested on 2.3.5)
 - Fix broken close button on mobile shop by

### Version 1.3.26

> Sep 4, 2020

**Bugfixes**
 - Fixed strange behaviour in stock filter
 - Fixed don't work 'Display applied options' for ATTRIBUTE_OPTIONS_ONLY_WITH_RESULTS and applied option
 - Fix some phpstan errors
 - Investigated how to multiple attribute counting works

### Version 1.3.25

> Aug 1, 2020

 - Fixed category and price filters errors on AMP on Magento 2.4

### Version 1.3.24

> Jul 20, 2020

**Features**
 - Add push state to url config feature (close #61)

**Bugfixes**
 - Fix state filter duplicates
 - Fix state filter label is object bug

### Version 1.3.23

> Jul 8, 2020

**Bugfixes**
 - Fix typos

### Version 1.3.22

> Jun 5, 2020

**Features**
 - Add toggle widget

**Bugfixes**
 - Add module dependencies

### Version 1.3.21

> Apr 21, 2020

**Features**
 - Add price slider enable option (default aln price range mode)

**Bugfixes**
 - Fix response dom replace at search results page

### Version 1.3.20

> Apr 11, 2020

**Bugfixes**
 - Fix: Warning: strpos(): Empty needle
 - Fixed regex expression in js

### Version 1.3.19

> Apr 3, 2020

**Bugfixes**
 - Fix stock column name resolving
 - Fix/Add url params filtering in toggler
 - Add lost js translations

**Features**
 - Better styles for reset filter button at 1column page layout.
 - SlideUp and slideDown filter content with CSS (instead of jquery).
 - Improved filter drop-downs behavior at 1column page layout

### Version 1.3.18

> Mar 27, 2020

**Bugfixes**
 - Fix 'DevTools failed to parse SourceMap: ..lib/jalc.min.map'

**Features**
 - Add Sticky on Mobile
 - Improve price range calc if another attr option applied
 - Add js toggler
 - Add button 'Apply' to each page layout
 - Remove js component shortname

### Version 1.3.16

> Mar 3, 2020

**Bugfixes**
 - Remove price delta in elastcisearch price range plugin

### Version 1.3.15

> Feb 26, 2020

**Bugfixes**
 - Fix category multiselect applying

**Features**
 - Improve price slider from-to logic
 - Add from-to input fields for price slider
 - Add price slider skin config option

### Version 1.3.14

> Feb 14, 2020

**Bugfixes**
 - Possible fix for multiselect attr logic

**Features**
 - Add price round( ,2)
 - Marketplace data added

### Version 1.3.13

> Feb 11, 2020

**Bugfixes**
 - Fix categories count
 - Fix isAjaxRequestCacheableEnabled always true

**Features**
 - Add Category multiselect
 - Add Price/AggregationRange
 - Add elasticsearch price range plugin

### Version 1.3.12

> Jan 31, 2020

**Bugfixes**
 - Fix Stock filter after catalog inventory replacements in 2.3

**Features**
 - Add 'Is Ajax Request Cacheable' config option
 - New algoritm price min-max, from-to calculating was added
 - Add price slider option force_edges: true
 - Update Ion.RangeSlider to 2.3.1

### Version 1.3.11

> Jan 13, 2020

**Bugfixes**
 - Remove unused virtual type
 - Fix : Broken multiple apply when Ajax is not used (close #53)
 - Fix single option bug (for multiselect)

**Features**
 - Refactoring Attribute filter code (#55)
 - Refactor getFacetedData in Attribute

### Version 1.3.10

> Nov 18, 2019

**Bugfixes**
 - Fix 'Fatal error on search results page' (close #52)

**Features**
 - Add ViewModel/Config

### Version 1.3.9

> Nov 15, 2019

**Features**
 - Meqp improvements (severity 9)
 - Add ajax request caching (default xhr+localStorage)
 - Remove redundant params from url (close #51)

**Bugfixes**
 - Fix: multiple apply feature works broken (close #50)
 - Fix calc in less
 - Fix currency place in proce slider
 - Fix : twice or more category filter apply (amp=1)
 - Fix: 'multiselect' + in-stock count calculation
 - Fix : categories items count calculation
 - Fix add more products button config

### Version 1.3.8

> Sep 12, 2019

**Bugfixes**
 - Fix : twice or more category filter apply (amp=1)
 - Fix : 'multiselect' + in-stock count calculation
 - Fix : categories items count calculation
 - Fix add more products button config

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
