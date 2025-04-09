---
layout: default
title: Changelog
description: Ajax Layered Navigation Changelog
category: Ajax Layered Navigation
---

# Changelog

### Version 1.5.30

> April 9, 2025

 -  PHP 8.4 support added.
 -  Magento 2.4.8 support added.
 -  Fixed non seo links `//`, when 'Use Categories Path for Product URLs' is enabled.

### Version 1.5.28

> Dec 19, 2024

 - Fix wrong min max prices in livesearch engine (livesearch query doesn't work properly without correct page size)

### Version 1.5.27

> Dec 9, 2024

 - Add custom ajaxpro.init.container in list response (close swissup/module-ajaxpro#48)

### Version 1.5.26

> Dec 2, 2024

 - Improve parseLocaleNumber in brezze price-slider.js

### Version 1.5.25

> Nov 28, 2024

 - Improve parseLocaleNumber in brezze price-slider.js

### Version 1.5.24

> Oct 30, 2024

 - Add option filtering for 'single select' attrs (close #100)

### Version 1.5.23

> Oct 24, 2024

 - Improve js aln components initialization
 - Fix scrollRestoration behaviour on breeze


### Version 1.5.22

> Oct 11, 2024

 - Add integration with Amasty\ElasticSearch

### Version 1.5.21

> Oct 2, 2024

 - Apply search term filter for price ranges (close #99)

### Version 1.5.20

> Sep 5, 2024

 - Allow admin to enable/disable single select mode (close #97)

### Version 1.5.19

> Aug 29, 2024

 - Use more specific selector to fix swatches More link

### Version 1.5.18

> Aug 9, 2024

 - Fix null to float converting in php 8.2

### Version 1.5.17

> Aug 5, 2024

 - Fix east arabic number detecting

### Version 1.5.16

> Jul 25, 2024

 - Replace native <script> tag on secureRenderer->renderTag

### Version 1.5.15

> Jul 18, 2024

 - code refactoring

### Version 1.5.14

> Jul 4, 2024

 - Fix missing table prefix (not correct getTableName method)
 - Fixed few typos in configuration

### Version 1.5.13

> May 30, 2024

 - Fix wrong rusults count calculation (apply state filters)

### Version 1.5.12

> May 13, 2024

 - Add Price slider inputs coma sanatizing
 - Icrease time for typing in price inputs

### Version 1.5.11

> May 9, 2024

 - Add 'step' attribute integration into breeze range-slider
 - Fix ionRangeSlider is not function

### Version 1.5.10

> May 3, 2024

 -  Breeze: fixed scroll position restoration on page reload.

### Version 1.5.9

> Apr 24, 2024

 - Fix getAllCategoryProductIds logic return product ids only from current category

### Version 1.5.8

> Apr 19, 2024

 - Fix setIsLoaded(true) to not loaded product collection
 - Add flag checking before collection filter apply

### Version 1.5.7

> Mar 28, 2024

 -  Remove `psr/log:^1` dependency. We support all psr/log versions now.

### Version 1.5.6

> Mar 7, 2024

- Fix: Assignment to constant variable (Close #96)
- Improve getFacetedData logic (Close #95)
- Improve di argument (use Factory)

### Version 1.5.5

> Feb 16, 2024

- Add Scroll-Up config option
- Fix push url state after aln request completed
- Add lazy loading for jacl.min.js (ajax request caching lib)
- Remove URLSearchParams polyfill

### Version 1.5.4

> Feb 1, 2024

- Fix 'Type Error occurred when creating object: ClientResolver' (elasticsearch module was disabled)
- Add js/navigation/user-agent.js (remove duplicate code)
- Add dynamic component loading
- Do not pass proxy object explicitly
- Remove not needed dependency
- Fixed "Element with same ID already exist" error
- Breeze: critical css for collapsed filters
- Remove ion-range slider styles

### Version 1.5.3

> Jan 16, 2024

 - Fix wrong scrolling in footer
 - Fix element detecting in getElementToScrollTo


### Version 1.5.2

> Jan 3, 2024

 - Fix prev.js logic

### Version 1.5.1

> Nov 29, 2023

 - Fix breeze integration

### Version 1.5.0

> Nov 27, 2023

 - Add scroll up feature
 - Fix and improve some next and prev logics
 - Split scrolldown (add scroll/down.js)
 - Add isScrollDown() in scroll.js
 - Decrease js monolit (split code)
 - Fixed layout shift when slideout is used
 - Breeze: move sticky to its dependent component
 - Breeze fixes for slideout panel
 - Breeze: fixed possible error when listjs is lazy loaded

### Version 1.4.23

> Nov 7, 2023

 - Fix: page detector error in Breeze (close #94)

### Version 1.4.22

> Oct 26, 2023

 - Fix east arabic number in page-detector.js

### Version 1.4.21

> Oct 16, 2023

 - Added customer loggedin flag to cache_key block params
 - Add step property in slider configuration

### Version 1.4.20

> Sep 14, 2023

 - Performance: improve total blocking time score.

### Version 1.4.19

> Aug 25, 2023

 - Prevent join the same _idx in StateFilterApplier
 - Reset GROUP BY in Decimal::_getSelect
 - Always add GROUP BY with decimal table join statement

### Version 1.4.18

> Aug 22, 2023

 - Fix: 'the same ID already exists' double decimal table join without group by

### Version 1.4.17

> Aug 17, 2023

 - Fix filter count in Stock+New
 - Fix decimal resource _getSelect logic
 - Fix Decimal::getAttributeCode return null
 - Prevent show attributes with empty attribute code

### Version 1.4.16

> Aug 2, 2023

 - Fix multiple apply for categories
 - Breeze: Fix products listing replacing
 - Fix products listing replacing
 - Add rel=nofollow on filter links

### Version 1.4.15

> July 19, 2023

 -  Hide filter apply tooltip when no filters are selected

### Version 1.4.14

> July 17, 2023

 -  Fixed bottleneck in getting review rating


### Version 1.4.13

> July 12, 2023

 -  Fixed incorrect position of "apply multiple" button (2)
 -  Breeze: Fixed duplicated price slider after "multiple apply"
 -  Do not scroll to top when filters are not applied yet
 -  Fixed incorrect position of "apply multiple" button when using sticky filters
 -  Fixed multiple tooltip behind hovered product
 -  Improve multiple tooltip styles
 -  Fix :'Deprecated Functionality: current(): Calling current() on an object is deprecated'

### Version 1.4.12

> July 10, 2023

 -  Added missing integrations with [Breeze frontend](https://breezefront.com):
    - Search option form
    - Show more button
    - Slideout panel
    - Apply multiple filters
 -  Fixed not working "Back" button when using Breeze frontend with Turbo option enabled.

### Version 1.4.7

> Apr 24, 2023

 - Fix: Deprecated Functionality: str_replace() error (close #84)

### Version 1.4.6

> Apr 21, 2023

 - Fix scroling bug if next element is hidden
 - Fix Amasty_Sorting Unknown column 'e.sku'


### Version 1.4.5

> Apr 13, 2023

 - Fix: Prevent error 'addItem with the same Id'

### Version 1.4.4

> Apr 6, 2023

 - Fix: Fixed division by zero for float numbers

### Version 1.4.3

> Apr 4, 2023

 - Fix: use correct getTableName method

### Version 1.4.2

> Apr 4, 2023

 - Prevent division by zero

### Version 1.4.1

> Mar 10, 2023

 - Fix 'Unable to save product in admin' wrong store and current category detection on backend (#82)
 - Fix: Table 'magento.catalog_category_product_index_store0' doesn't exist
 - Fixed not working sticky config with breeze.

### Version 1.4.0

> Mar 2, 2023

 - Fix elasticsearch integration
 - Add 'Load Previous Page' button
 - Fix add more button logic page culculating
 - Fix "On Sale" or "Rating" incorrect items count
 - Add page-detector.js component (?p=)
 - Fix Plugin/.../Rating/ElasticsearchCollectionFilterPlugin.php

### Version 1.3.62

> Oct 20, 2022

 - Prevent empty viewModel errors (call ... on null)
 - Remove dublicate and unused code; add AbstractFilterInterface
 - Fix 'Invalid method Mirasvit\....\SearchFilter::isActive'
 - Fixed adding br tags inside range slider styles

### Version 1.3.61

> Oct 12, 2022

 - Fixed visible empty space when more button used
 - Breeze: fixed duplicated 'More Products' button when using back/forward buttons

### Version 1.3.60

> Sep 8, 2022

 - Performance improvements when using price filter
 - Added Breeze integration with "Load More" button and infinity scroll
 - Hide "Load More" button when last page is loaded

### Version 1.3.59

> Aug 9, 2022

 - Don't change url in multiple mode (Fix qty logic errors)

### Version 1.3.58

> Aug 8, 2022

 - Fix getRemoveUrl logic
 - Fix wrong enconing in state

### Version 1.3.57

> Aug 1, 2022

 - Refix #73 (getLiteCollection)
 - Prevent WHERE AND Sql error

### Version 1.3.56

> Jul 20, 2022

 -  Fix attribute don't work (#76)

### Version 1.3.55

> Jul 14, 2022

 -  Fix perfomance for getProductCollection in price range init
 -  Improve code style
 -  Fix MCS --severity=8-6

### Version 1.3.54

> Jun 16, 2022

 -  Fix phpstan errors

### Version 1.3.53

> Jun 16, 2022

 -  Breeze theme fix

### Version 1.3.52

> Jun 15, 2022

 -  Fix wrong min-max price range populating (relative #70, #73)

### Version 1.3.51

> May 26, 2022

 -  Fixed range-slider duplicate when browse using back/forward buttons
 -  Don't show multiple tooltip if state block is empty

### Version 1.3.50

> Apr 25, 2022

 -  Fixed min/max price calculation for price range filter.
 -  Prevent layout shift when filter is initially expanded.
 -  Added ability to reset single swatch filter.
 -  Small CSS improvements.
 -  [Breeze](https://breezefront.com/): price range filter added.

### Version 1.3.48

> Apr 15, 2022

 -  Magento 2.4.4 compatibility.

### Version 1.3.47

> Apr 13, 2022

 - Fix: main.CRITICAL: Warning: A non-numeric value encountered Price.php line 121

### Version 1.3.46

> Apr 7, 2022

 - Fix: prevent load product collection in Model\Layer\Filter\Price::initRange

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
