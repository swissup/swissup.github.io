---
layout: default
title: Attributepages changelog
description: Attribute based pages changelog
category: Attributepages
---

# Changelog

### Version 1.4.3

> Sep 28, 2021

 -  Fixed compatibility with Swissup_Ajaxlayerednavigation. Incorrect available
    options for multiselect attribute when some option of this attribute is already
    selected.

### Version 1.4.0

> Apr 29, 2021

 -  Added [ability to hide attribute](/m2/extensions/attributepages/attribute-based-page/backend/#page-information-tab)
    from layered navigation across all Magento pages. This feature was added
    because latest Attributepages versions requires you to use only filterable
    attribute for Attribute based page.

### Version 1.3.8

> Apr 6, 2021

  - Add Attribute Page into XML Sitemap.
  - Don't include option pages into HTML Sitemap when parent attribute page is disabled.
  - Fixed error when trying to open page with invalid url.

### Version 1.3.7

> Mar 10, 2021

 -  Fixed error on non-existing urls when Swissup_Seo module is enabled
 -  Fixed invalid brands sort order for lowercased brands

### Version 1.3.5

> Jan 22, 2021

 -  Fixed compatibility issues with Mirasvit_LayeredNavigation and Mirasvit_Scroll modules.

### Version 1.3.4

> Jan 13, 2021

  - Add attribute pages to [SEO HTML Sitemap](/m2/extensions/seo-html-sitemap/).
  - Fixed 'Default Category' page title when using third-party modules or themes.

### Version 1.3.2

> Nov 26, 2020

  - Fixed wrong options sort order when create new brand page.
  - Fixed non-seo links when 'Use Categories Path for Product URLs' is enabled.

### Version 1.3.0

> Nov 16, 2020

 -  [Layered Navigation support added](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab).
    (If you don't need it for your brand pages, you can disable it at attribute
    page settings.) Tested on:
    - Magento_LayeredNavigation
    - Swissup_AjaxlayeredNavigation
    - Amasty_Shopby
 -  [New "Short Description" field added](/m2/extensions/attributepages/option-based-page/backend/#content-tab) for option pages.
    It may be enabled in "Attributepages: Product Option" widget to show
    option description at product page.
 -  [Added ability to apply additional filters](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab)
    for product list at Option-based pages. This feature allows to create
    Brand Page filtered by several attributes:
    "Red Adidas Shoes", "Small Burberry Dresses", etc.
 -  [Added ability to use placeholders](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab)
    for Option-based page title: "Red {% raw %}{{var option.label}}{% endraw %} Shoes",
    "Small {% raw %}{{var option.label}}{% endraw %} Dresses", etc.
 -  [Added ability to sort brands manually](/m2/extensions/attributepages/attribute-based-page/backend/#options-tab),
    using sort_order field. Previously brands was sorted aphabetically only.
 -  Performance improvements when rendering options list.
 -  Full Page Cache is now automatically invalidates corresonding brand page,
    when some change is made in backend.
 -  Breadcrumbs is now using "Title" field. Previously "Page Title" was used, which
    wasn't intended.
 -  Brands slider is now using Swiper library instead of SlickCarousel.
 -  "Title" and "Layout" columns in backend grid are hidden now by default. You
    can still show them via "Columns" menu above the grid.
 -  Added mass status action to backend grids.
 -  Fixed not working search in backend grids.

### Version 1.2.7

> Aug 5, 2020

 -  Translations updated

### Version 1.2.4

> May 13, 2020

 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian

### Version 1.2.2

> Jan 16, 2020

 -  Do not show products that are not connected to any categories

### Version 1.2.1

> Oct 16, 2019

 -  Magento coding standard fixes.

### Version 1.2.0

> Jan 04, 2019

 -  [AMP](/m2/extensions/amp/) integration added

### Version 1.1.1

> Dec 4, 2018

 -  Widget template updated according to the latest SlickCarousel module

### Version 1.0.10

 -  Fixed delete mass action error in Magento 2.1.x
 -  Fixed filter by store in grids
 -  Fixed error in options list when identifier is missing
 -  Fixed 404 error for options with html entities in name
 -  Option list widget now displays attribute options when inserted using Content > Widgets interface
 -  Added widgets and variables support in attribute and option pages description

### Version 1.0.9

 -  Fixed error when page identifier is entered in invalid registry

### Version 1.0.8

 -  Added compatibility with Swissup_SeoPager module
 -  Fixed 404 error in backend options grid tab, when using pagination
 -  Removed code duplications

### Version 1.0.6

 -  Magento 2.2 compatibility
 -  Fixed bug with missing brand image after save

### Version 1.0.5

 -  ACL instructions added to UI components according to latest Magento requirements

### Version 1.0.4

 -  Fixed single store duplicated options
 -  Removed unnecessary `$_FILES` check

### Version 1.0.3

 -  ACL fixes

### Version 1.0.2

 -  Compatibility with block cache added

### Version 1.0.1

 -  Compilation errors fixed

### Version 1.0.0

 -  Initial release
