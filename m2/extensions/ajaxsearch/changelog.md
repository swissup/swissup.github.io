---
layout: default
title: Ajaxsearch Changelog
category: AjaxSearch
---

# Changelog

### Version 1.8.1

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
