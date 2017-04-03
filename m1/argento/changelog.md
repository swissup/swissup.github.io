---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 1.8.6.1

 -  Updated slider styles for each theme to match original styles
 -  Fixed jumbotron styles, when inner content is floated
 -  Improved `BlockToggler` script for complex block markup

### Version 1.8.6

After successfull source files update you have to run data update. You can
find more details about data update at
[Upgrade Instructions for 1.8.6](../upgrade-instructions/#version-186).

**New Features**

 -  Accelerated Mobile Pages (AMP) extension included in package. You can
    read more about AMP extension at our [docs](/m1/extensions/amp/). Disabled
    by default.
 -  Product image hover feature added to package. It shows different
    image when visitor hovers mouse on product image in product listing.
    Disabled by default.
 -  Easyslide 3.0 with swiper library. Now slider supports touch and work
    smoothly on mobile devices.

**Modules fixes and improvements**

 -  Ajax Pro:
     +  fix redirect to cart after adding product to cart when minimal order
        amount enabled
     +  fix issue with empty cart when customer logged in and persistent
        shopping cart enabled (cart does not have items that were added when
        customer was not logged in)
     +  improved ajax update of cart related blocks

 -  Ajax Search:
     +  fix missing layered navigation on search results page when custom
        collection enabled
     +  fix different placeholders in search field when field has input cursor
        and has not

 -  Easy Banners:
     +  great performance improvements for stores with long-lived banners
     +  new banner conditions

 -  Easy Tabs:
     +  fixed issues with permissions to extension interfaces in Magento Admin
     +  fixed issue with lost tabs after extension update
     +  allow inline translation of attribute group name on additional tab

 -  Facebook Like Button:
     +  use Facebook SDK JavaScript version 2.8
     +  improved system configuration section (added comments and dependencies)
     +  improved and unified extension templates
     +  all inline JavaScripts moved to js-file

 -  Navigation Pro:
     +  no inline javascript, js-file deferred

 -  Sold Together:
     +  fix js error and incorrect total price for bundle product if one of
        items is out of stock

 -  Testimonials:
     +  improved integration with edit review form in Magento Admin
     +  fixed fatal error on review edit form in some environments

### Version 1.8.5

[Upgrade Instructions](../upgrade-instructions/#version-184---185)

**New Features**

 *  New homepage and footer markup in ArgentoPure and ArgentoMall designs
    using Bootstrap grid system
 *  [Easy Flags extension](/m1/extensions/easyflags/) is included in Argento
    Theme Package

**Fixes and Improvements**

 *  Easy Tabs 3.0 and Easy Flags 3.0 integration
 *  Minor css fixes
 *  Load external fonts with one request in Argento Flat
 *  Video of the day moved to static block in Argento Mall

**Modules fixes and improvements**

 *  Ajax Pro
     -  Crosssell block integration added

 *  Ajax Search
     -  Improved frontend styles (fixed problem with "jumping" search Argento
        themes)

 *  AskIt
     -  Fixed product url generation for emails
     -  Mass answers status change action added in Magneto Admin
     -  Corrected block type for askit_tabbed block in layout
     -  Fixed bug about showing answers with pending status on frontend
     -  Missing translations added
     -  Question grid item column sorting and filtering fixed
     -  Vote table customer foreign key bug was fixed
     -  Export action was fixed

 * Easytabs (major update)
    -  Product tabs and Widget tabs
    -  Extension has its own widget (now you can place tabs any where you want)
    -  Group attributes in "Additional Information" tab (optional)

### Version 1.8.4

[Upgrade Instructions](../upgrade-instructions/#version-183---184)

**New Features**

 *  new homepage and footer markup in ArgentoPure2 design using Bootstrap grid
    system
 *  new products grid design
 *  new extension added - Quantity Switcher. [View Docs](http://docs.swissuplabs.com/m1/extensions/qty-switcher/)

**Fixes and Improvements**

 *  minor translation fixes
 *  20 overriden templates removed
 *  testimonials integration improved
 *  visual accent added to downloadable product link
 *  backend css now merged with rest of css files

**Modules fixes and improvements**

 *  Ajax Pro:
     -  added +/- buttons for product quantity change on product page
     -  improved magento 1.9.3 integration
     -  fixed bug "$j undefined"

 *  Easy Banners:
     -  added columns "Store view", "Banner content" in banner backend grid to make easier banners management
     -  fixed grid search in banned conditions for pages (issue occures on latest magento versions)
     -  fixed redirect issue for SEO url (.html)


 *  Navigation Pro:
     *  fixed incorrectly escaped `&gt;`, `&lt;` entities

 *  Product Label
     *  minor improvments for labels rendering

 *  Rich Snippets
     *  added possibility to show prices with/without VAT (prices with VAT enabled by default)

 *  Review Reminder
     *  fixed incorrect product name translation
     *  added config to disable reminders for guests
     *  added order number and store view columns in grid

 *  Sold Together
     *  error 404 in config fixed
     *  css fixes

 *  Testimonials
     *  sidebar list widget rewritten
     *  added feature to save product review as testimonial from review edit page
     *  missing captcha in testimonials widget fixed
     *  added config to allow guests to submit testimonials

### Version 1.8.3

**New Features**

 -  Magento 1.9.3 compatible
 -  New extension added - Slick Carousel. [View Docs](http://docs.swissuplabs.com/m1/extensions/slick-carousel/), [View Examples](http://docs.swissuplabs.com/m1/extensions/slick-carousel/usage/#using-in-argento)
 -  You can now create Amazon style menu with Navigation Pro. [View Manual](http://docs.swissuplabs.com/m1/extensions/navigationpro/use-cases/amazon-menu/)

**Fixes and Improvements**

 -  Removed easyslider box-shadow in Flat theme
 -  Removed horizontal scrollbar in Chrome between 980px and 990px
 -  Fixed missing FontAwesome icons after homepage save
 -  Added products count limit for sidebar related block (ArgentoFlat and Pure2 themes)
 -  Small css and js fixes

**Modules fixes and improvements**

 -  ConfigurableSwatches
    - Improved image swapping method
    - 1.9.3 support added
 -  Easy Catalog Images:
    - 'more in...' translation added in csv
 -  Highlight
    - integration with Slick Carousel added
 -  Easy Tabs
    - Fixed scroll to review form
    - JS file now loaded and executed with defer attribute
    - no inline javascript
 -  Ajax Pro
    - Catalog category view js script improvements
    - Improved third-party theme's integration
    - Imporoved logic to activate `current_page` in toolbar
    - Updated translations
 -  Navigation Pro
    - Added ability to create [Amazon-style](http://docs.swissuplabs.com/m1/extensions/navigationpro/use-cases/amazon-menu/) menu
    - Added status exception rules into cache key to fix invalid
        menu on different devices;
    - Small css fixes

### Version 1.8.2

**New Features**

 -  New homepage and footer markup in ArgentoFlat design using Bootstrap grid
    system

**Fixes and Improvements**

 -  20 overriden templates removed from Flat theme
 -  Fixed catalog configurable swatches output in layered navigation

**Modules fixes and improvements**

 -  Ajax Pro
     -  Styles for cart popup after buying product fixed
     -  Core magento translations for login form
 -  Ajax Search
     -  Unified templates
     -  Improved suggestions popup rendering
 -  Easy Tabs
     -  Scroll to review bug fixed
     -  Fixed disabling extension from magento backend
 -  Easy Slide
     -  Slides overlay fixed (slides stacked one on other during loading
        than first slide jumps on top)
     -  Slider rendering bug when slider name starts with digit fixed
 -  Lightbox Pro
     -  Incorrect initial position of thumbnails in Firefox fixed
     -  JS error related to *lightbox.js* when JS merge enabled fixed
 -  Prolabels
     -  JS file loads and executes with defer attribute
     -  no inline javascript
     -  significantly reduced html content generated by extension
 -  Rich Snippets
     -  correct names of breadcrumbs
 -  Sold Together
     -  integration with Checkout Success 2.x extension from our team
     -  hide already ordered products as recommendation in email blocks

### Version 1.8.1

**Perfomance Improvements**

 -  AjaxSearch scripts refactored and inline js completely removed from templates
 -  Js improvents for currency and language dropdowns in all argento themes

**Bugfixes**

 -  Fixed custom.css sort order:
    Custom.css should be added after theme.css to allow to customize all theme
    styles
 -  Fixed highlight filters by stock status and quantity for the following
    product types:
     -  Bestsellers
     -  Popular
     -  Products
     -  Recent reviews

### Version 1.8.0

[Upgrade Instructions](../upgrade-instructions/#version-174---180)

**New Features**

 -  Bootstrap grid system added
    - New homepage and footer markup in ArgentoArgento design
    - Resized homepage images to match Bootstrap powered grid system sizing

**Fixes and Improvements**

 -  Fixed css resources sort order to improve CSS parallel loading
 -  Fixed catalog configurable swatches on non-anchored categories
 -  EasyTabs: fixed JS error on product page when it has no tabs
 -  Easyslide: overall performance improvements and optimization
 -  Highlight: widget interface improvements, new filters by inventory added
 -  Lightbox Pro: css optimizations
 -  Review Reminder:
    - Use proper settings according order store id
    - Fixed translations for mail sent via cron

### Version 1.7.4

 -  FontAwesome updated to version 4.6.3
 -  backend CSS loads depends on request - secured or unsecured
 -  Ask It
     -  new frontend responsive design
     -  question can be assigned to multiple products
     -  question create date fixed
 -  Lightbox Pro
     -  significant code refactoring
     -  JS files load with 'defer' attribute and do not block page rendering
     -  no more inline JS
 -  Navigation Pro
     -  fixed third level drop-downs on tablet devices
 -  ProLabels
     -  fixed label priority determination
 -  Testimonials
     -  stars for 'Rating' field at new testimonial form
     -  JS files load with 'defer' attribute
 -  Suggest Page
     -  avoided potential error with multiple calls of event
        'sales_quote_product_add_after'

