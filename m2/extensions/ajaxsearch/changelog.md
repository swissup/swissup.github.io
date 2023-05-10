---
layout: default
title: Ajaxsearch Changelog
category: AjaxSearch
---

# Changelog

### Version 1.13.7

> Apr 22, 2023

 - Fix: Undefined factory elasticsearch8

### Version 1.13.6

> Apr 22, 2023

 - Remove debugging comments

### Version 1.13.5

> Mar 20, 2023

 - Fix: Undefined factory 'opensearch'

### Version 1.13.4

> Mar 17, 2023

 - Fixed compilation error: $_instanceName must be protected


### Version 1.13.3

> Mar 17, 2023

 - PHP 8.2: fixed dynamic properties creation

### Version 1.13.2

> Mar 14, 2023

 - Update deprecated js code.

### Version 1.13.1

> Nov 15, 2022

 -  Icrease default results limit

### Version 1.13.0

> Oct 24, 2022

 - Update breeze theme integration
 - Breeze theme: fix empty space above products list
 - Improved breeze theme integration
 - Update composer requirements


### Version 1.12.0

> Aug 26, 2022

 - Fix quickSearch and ajaxsearch initialisation time racing bug (#32)
 - Update composer requirements (>= 2.3.5)
 - Replace deprecated functionality
 - Fix Using constant that does not exist

### Version 1.11.24

> Aug 10, 2022

 - Improve ajaxsearchCategoryOptions graphql request

### Version 1.11.23

> Jul 14, 2022

 - Improve code quality (MCS, phpstan)

### Version 1.11.22

> Jun 17, 2022

 -  Breeze prefix for inverted colors
 -  Breeze theme fix

### Version 1.11.21

> Jun 9, 2022

 -  Breeze theme: fixed error with undefined less variable

### Version 1.11.20

> May 17, 2022

 -  WIP: category filter on breeze
 -  Breeze theme integration updated

### Version 1.11.19

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.

### Version 1.11.16

> Apr 13, 2022

 -  Fix: urldecode 'query' param in graphql

### Version 1.11.16

> Jan 28, 2022

 -  Magento Coding Standard fixes

### Version 1.11.15

> Jan 19, 2022

 -  Breeze theme integration
 -  Add prevent sending empty query string (close #51)

### Version 1.11.14

> Dec 1, 2021

 -  Prevent break graphql query with js minification
 -  Do not use deprecated e.keyCode property

### Version 1.11.13

> Sep 14, 2021

 -  Breeze integration optimizations

### Version 1.11.12

> Aug 6, 2021

 -  Breeze: compatibility with new [Turbo](/m2/extensions/breeze/configuration/#breeze-section) option added.

### Version 1.11.10

> Jun 22, 2021

 -  Fixed elasticsearchFulltextSearchCollectionFactory doesn't exist

### Version 1.11.9

> Jun 18, 2021

 -  Prevent JS error at checkouot page when category filter is enabled.
 -  Improve codezone theme integartion (iOS)

### Version 1.11.8

> May 19, 2021

 -  Added codezone integration patch
 -  Breeze: update integration

### Version 1.11.7

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration updated.
 -  Fixed PHP error on MagentoCommerce and MagentoB2B versions.
 -

### Version 1.11.6

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration updated.
 -  Fixed PHP error on MagentoCommerce and MagentoB2B versions.

### Version 1.11.5

> Apr 26, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.
 -  Optimize initialization on mobile devices.

### Version 1.11.1

> Jan 21, 2021

**Bugfixes**
 - Fix typo: unused code


### Version 1.11.0

> Jan 20, 2021

**Features**
 - Added use graphql config option
 - Load categories by graphql request; add config option (close #41)
 - Move graphqlize logic to standalone js file
 - Upgrade select2 to 4.0.13
 - Add config option for categories filter depth (close #42)
 - Add "loader" in MOBILE view when entering search phrase (close #40)

**Bugfixes**
 - Fix Notice: Undefined index: category
 - Remove wrong copyrights


### Version 1.10.0

> Jan 20, 2021

**Bugfixes**
 -  Remove old mysql integration
 -  Add graphql StoreConfig extended config data
 -  Restore url attribute(s)
 -  Fix categories url_key resolving

**Features**
 - Implements custom graphql suggestions on frontend
 - Implements categories pages graphql resolving
 - Add url_suffix in product data provider
 - Add currency code into product itm provider

### Version 1.9.10

> Oct 13, 2020

 -  [Pagebuilder](/m2/extensions/pagebuilder/) integration added

### Version 1.9.9

> Sep 23, 2020

  - Fixed not clickable search button on desktop Safari.

### Version 1.9.8

> Jul 31, 2020

**Bugfixes**
 - reMove code to swissup/module-search-mysql-like
 - Cleanup layout instructions
 - Fix array to string conversation (2.4 compatibility)

### Version 1.9.7

> Jul 29, 2020

**Features**
 - Allow to install on Magento 2.4

### Version 1.9.6

> Jul 17, 2020

**Features**
 - Added auto checking (isTaxIncludingToPrice) for including tax to the product price


### Version 1.9.5

> Jul 1, 2020

**Bugfixes**
 - Fix ~ expression bug

### Version 1.9.4

> Jun 24, 2020

**Bugfixes**
 - Fixed RTL css issue

### Version 1.9.3

> Jun 15, 2020

**Bugfixes**
 - Fix multi currency final price bug #39

### Version 1.9.2

> Jun 12, 2020

**Bugfixes**
 - Fix 'Undefined factory elasticsearch7' #38
 - Fix/catch Magento\Framework\Module\PackageInfo exception

### Version 1.9.1

> May 7, 2020

**Features**
 - Improve translates.

**Bugfixes**
 - Refix 'search' keyboard button not working on iOS
 - Don't use transition to hide navigation jumping when flex layout is used.

### Version 1.9.0

> Apr 30, 2020

**Features**
 - Add/Update translations ar_SA, uk_UA, sw_SE, es_ES, ru_RU, pt_PT, pl_PL, nb_NO, ko_KR,
    ja_JP, it_IT, he_IL, de_DE, fr_FR, nl_NL, zh_CN etc.

**Bugfixes**
 -  Don't use transition to hide navigation jumping when flex layout is used. (Pure2).

### Version 1.8.8

> Feb 17, 2020

 -  Fix 'search' keyboard button bug on iOS devices

### Version 1.8.7

> Feb 17, 2020

 -  Client-side performance optimizations.

### Version 1.8.6

> Jan 31, 2020

**Bugfixes**
 - mage 2.2 backward compatability improved

### Version 1.8.5

> Jan 24, 2020

**Bugfixes**
 - Add composer requirements
 - Fix Elastcsearch ItemProvider fatal error in 2.3.1

### Version 1.8.4

> Jan 14, 2020

**Bugfixes**
 - Fix : No suggestions popup for second query (#37)
 - Fix elasticsearch integration (#16)

### Version 1.8.3

> Nov 15, 2019

 - MEQP improvements (severity 9)
 - Fix product final price with Tax

### Version 1.8.1

> Sep 12, 2019

**Bugfixes**
 - Fix: remove cms page dublication

### Version 1.8.0

> Aug 19, 2019

 -  New "minimalistic form" layout added. Now AjaxSearch provides
    [three form layouts](/m2/extensions/ajaxsearch/configuration/#design):
    - Default - Initially visible form
    - Icon only - Minimalistic form
    - Icon only - Fullscreen form
 -  Improved product list styles in results dropdown.
 -  Improved results dropdown sizing when browser gets resized.
 -  Better scrolling inside dropdown results on mobile devices.
 -  Fixed possible js error on initial page load.
 -  Prevent horizontal scrollbar on small tablets.
 -  Prevent search form 'jumping' while script is initialized.
 -  Fixed disabled CMS pages in search result (They shoudn't appear in results).
 -  Do not close results dropdown when click inside that dropdown.
 -  All styles moved to `_module.less` which allows to redefine ajaxsearch
    variables from your theme less files.

### Version 1.7.0

> Jun 6, 2019

 -  New alternative search method for MySQL Search Engine - "LIKE". It allows to search for strings with dash (-), one-two-character substrings and has other algorithm for relevance. Can be enabled in module configuration under ["MySQL Search Engine" section](/m2/extensions/ajaxsearch/configuration/#mysql-search-engine).

### Version 1.6.2

> May 29, 2019

 -  Fix 'Search' button disabled at folded design (close #31)
 -  Fix two dropdown popups are rendered (one above another)

### Version 1.6.1

> May 21, 2019

 -  Fixed missing default search when AJAX search is disabled in config.
 -  Template initialization refactored

### Version 1.6.0

> May 02, 2019

 -  Added ability to show 'Popular Search Terms' when focusing empty search field.
    (See _Stores > Configuration > Swissup > Ajaxsearch > Popular Search Terms Suggestions_ options.)
 -  Small JS and CSS fixes

### Version 1.5.3

> Mar 29, 2019

 -  Fixed possible XSS vulnerability
 -  Styles improvements
 -  Fixes for RTL styles

### Version 1.5.2

> Mar 27, 2019

**Bugfixes**
 -  Fixed get category url logic
 -  Fix composer changelog url

### Version 1.5.1

> Mar 11, 2019

**Bugfixes**
 -  Fixed bottleneck (getFormatPrice load all currencies)
 -  Fixed unit tests

### Version 1.5.0

> Feb 26, 2019

 -  Added ability to disable module via backend configuration

### Version 1.4.2

> Jan 04, 2019

 -  Cleanup html markup in the header block

### Version 1.4.1

**Features**
 - Add 2.2.7(2.3) compatability /js/ widget mixin

**Bugfixes**
 - Fix for bug 'Search button on ios keyboard does not submit the form'

### Version 1.4.0

**Features**
 - Rename composer package swissup/ajaxsearch => swissup/module-ajaxsearch

**Bugfixes**
 - Add patch for category root level
 - Fix unit test storeManager null


### Version 1.3.1

 -  Add mobile.js
 -  Fix for 'blur' and IOS
 -  Fix cat param doublication bug
 -  Fix Rtl select2 workaround min-width

### Version 1.3.0

 -  Add popular search terms suggestions when input is empty
 -  Improved initialization speed
 -  Add store filter to the cms page results
 -  Small fixes

### Version 1.2.9

 -  Grid suggestion layout was added
 -  Add category filter (select2)
 -  etc.

### Version 1.2.8

 -  Add translation
 -  Fix typeahead limit calc bug (limit == count suggestions)
 -  etc.

### Version 1.2.7

 -  Fix not 'relevance' sort by
 -  Restore original container 'header-wrapper'
 -  Fix query product unit test

### Version 1.2.6

 -  Now product page is opened when click or press enter on the element in popup
 -  Added missing close button and spinner in folded mode
 -  Removed mistakenly added cacheable=’false’ param, which disabled FPC
 -  Fixed error CollectionFactory already in use
 -  Fixed search form submit only after second tap on mobile keyboard

### Version 1.2.5

 -  Improve initialisation
 -  Fix problem when keyboard got closed on iphone
 -  Fix final_price bug
 -  Add unit test example
 -  etc.

### Version 1.2.4

 -  Add self search layer model
 -  Increase search request accuracy
 -  Fix collection load bug (replace loadWithFilter at load)
 -  Fixed go to search page on enter on folded design
 -  Fix js code style
 -  Remove dublicate code
 -  Move get config option logic to helper data
 -  Fallback for minQueryLength in init template
 -  etc.

### Version 1.2.3

 -  Fix critical limit bug
 -  Autocompleted string should be grayed out
 -  Hint option was disabled
 -  Icon positioning and size improvements when folded design is used
 -  etc.

### Version 1.1.0

> This version is **not compatible** with old Magento versions.
>
> Magento 2.1 and newer are supported only.

 -  Magento 2.1 compatibility

### Version 1.0.1

 -  Context loader added
 -  Toggle behavior on mobile device added
 -  Dependency injection bugs fixed
 -  Search input width was fixed

### Version 1.0.0

-  Initial Release
