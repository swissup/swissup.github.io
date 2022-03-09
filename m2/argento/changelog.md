---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 1.29.0 (Draft)

> TBA, 2022

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.3 (was 1.6.1)
      + Breeze: fixed not working configurable and bundle products in the add to cart popup
      + Fixed broken configurable products without color swatches
      + Improved module configuration
      + Code cleanup
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.17 (was 1.11.16)
      + Added ability to change desktop media breakpoint value
      + Update Breeze theme integration
  - [AMP](/m2/extensions/amp/) — 1.4.15 (was 1.4.14)
      + Do not automatically install AMP during Argento theme installation
  - [Breeze](/m2/extensions/breeze/) — 1.10.1 (was 1.9.0)
      + Added critical images preloading
      + Added “Use CSS critical path” config option support
      + Added js chunking mechanism that improves page load time on slow internet connections
      + Fixed js chunks deployment during setup:static-content:deploy command (compatibility with Adobe Commerce Cloud)
      + Fixed error in logs about empty less file during deployment
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.26 (was 1.6.25)
      + Fixed component sort order in PageBuilder
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.9 (was 1.7.8)
      + Fixed not working banner mass actions in Magento 2.3
      + Disabled statistics for new banners by default
      + Magento coding standards fixes
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.18 (was 1.4.17)
      + Fixed component sort order in PageBuilder
      + Removed code that duplicates Magento logic since 2.3.0
      + Fixed possible broken image for both 'image' and 'thumbnail' attributes
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.22 (was 1.9.18)
      + Fixed missing tabs when Breeze module is used
      + Using DB declarative schema
      + Magento Coding Standarts fixes
      + Fix js error when activate tab on external link click (conflict with Aheadworks_StoreCredit)
      + Fixed component sort order in PageBuilder
  - [Highlight](/m2/extensions/highlight/) — 1.7.22 (was 1.7.21)
      + Fixed css issue in Breeze Theme
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.9 (was 1.16.3)
      + Fixed error in backend PageBuilder when widget in page content is used
      + Fixed broken drag-n-drop in backend tree
      + Breeze: fixed dropdown content overflow when vertical direction is used
      + Breeze: fixed css issue on checkout success page
      + Fixed GraphQl\Query\Uid does not exists (compatability with Magento 2.3)
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.3 (was 1.5.2)
      + Fixed broken svg icons inside css files
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.16 (was 1.6.13)
      + Using declarative schema (db_schema.xml) and schema whitelist
      + Fixed visible out of stock label when product is available for purchase because backorders enabled
      + Fixed fatal error on grouped product without assigned child products
      + Improvements for out of stock label
      + Replaced deprecated Model\Stock::getIsInStock method with isInStock
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.12 (was 1.1.11)
      + Breeze: improve trigger styles
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-cross-links** — 1.1.4 (was 1.1.3)
          * Using declarative schema (db_schema.xml) and schema whitelist

### Version 1.28.0

> Jan 28, 2022

 -  Fixed divider element content position on RTL websites
 -  Fixed notice "magento_import returns empty result by path css/FishPig_WordPress/argento/_extend.less"
 -  Few tweaks for SoldTogether block styles
 -  _Argento Home:_
      -  Move SoldTogether styles to separate file
      -  Use default SoldTogether icon

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.1 (was 1.5.33)
      + Fixed not-working quick view on CMS pages
      + Don’t show popup after checkout cart delete action
      + Put floating cart behind modals
      + Do not show quick view button on touch devices
      + Fixed name overlapping price in floating cart
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.16 (was 1.11.14)
      + Prevent sending empty search request
      + Reset disabled button when folded mode is used
      + Added Breeze theme integration
  - [Askit](/m2/extensions/askit/) — 1.11.1 (was 1.10.6)
      + Proper spinner centering
      + Breeze Theme integration added
  - [Breeze](/m2/extensions/breeze/) — 1.9.0 (was 1.8.1)
      + Fixed configurable price update on product page on Argento Stripes theme
      + Fixed missing background in fullscreen product gallery
      + Allow to create nested view components
      + Fixed js error when reCaptcha is enabled in product review form
      + Fixed “getTemplate” error when third-party component is not available
      + Improved page reload logic when merged css is found on the page
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.25 (was 1.6.24)
      + Added Breeze Theme integration
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.18 (was 1.9.17)
      + Added Breeze Theme integration
  - [GDPR](/m2/extensions/gdpr/) — 1.4.11 (was 1.4.10)
      + Fixed incorrect acl config
      + Fixed newsletter issue on Breeze theme
  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.10 (was 1.3.9)
      + Added Breeze Theme integration
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.3 (was 1.16.1)
      + Fixed dropdown height when using Amazon menu type
      + Fixed layout shift caused by slideout menu
      + Added Breeze Theme integration
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.2 (was 1.4.27)
      + Don’t defer CSS loader script (fixed pagespeedCss is not defined error)
      + Improved image service generators
      + Replaced \Zend\Dom with \Laminas\Dom
      + Fixed error strlen expects parameter 1 to be string
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.13 (was 1.6.12)
      + Added Breeze Theme integration
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.11 (was 1.1.10)
      + Added Breeze Theme integration
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-urls** — 1.5.30 (was 1.5.29)
          * Fixed unable to change attribute/option label when identical label exists for other store view
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.17 (was 1.7.16)
      + CSS fixes for better look at Argento Home and Marketplace themes
      + Replaced blurry 'plus' image with svg icon
      + Added Breeze Theme integration
      + Fixed too small item width on mobile view
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.1 (was 1.2.18)
      + Added Breeze integration
      + Added graphql support

### Version 1.27.0

> Dec 30, 2021

 -  Updated tabs initial styles
 -  Prevent content shift when toggling search on mobile: use absolute positioning for search input
 -  _Argento Marketplace:_
      -  Added critical styles
      -  Installer - larger prolabels on product page
      -  Display products in two rows in highlight block when it is set to 6 columns
      -  Improved style for the old price
      -  Sold Together block style improved
 -  _Argento Essence:_
      -  Fixed related products in Easy Tabs
      -  Improved bullets styles in homepage slider
 -  _Argento Home:_ added sizes for images in installer
 -  _Argento Luxury:_ added styles for the main tabs located outside of the `product.main.info` section

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.33 (was 1.5.31)
      + Fixed sectionConfig is not defined error on Breeze
      + Prevent showing empty popup messages
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.14 (was 1.11.13)
      + Fixed broken graphql query when js minification enabled
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.4.4 (was 1.4.3)
      + Fixed incorrect URLs in sitemap
      + Added ability to create option page with the same identifier as parent page
  - [Breeze](/m2/extensions/breeze/) — 1.8.1 (was 1.7.4)
      + Fixed js error caused by old Page Builder module
      + Fixed broken video when non-standard youtube url is used
      + Use memo to reduce repeated method calls
      + Remove lazyload attribute from main image in gallery
      + Focus trap added to the modal popups
      + Improved image loader when click on the swatch attribute
      + Added responsive image support
      + Keyboard navigation improvements
      + Prevent button resize when pressing add to cart
      + Underscore library updated to the latest version
      + Small fixes in various js components
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.24 (was 1.6.19)
      + Code refactoring
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.8 (was 1.7.5)
      + Added Page Builder integration for Easy Banner widgets
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.17 (was 1.4.15)
      + Added Page Builder integration for the widget
      + Enabled image assignment on store level
  - [GDPR](/m2/extensions/gdpr/) — 1.4.10 (was 1.4.9)
      + Added Breeze theme integration
      + Fixed hide animation on detailed cookie bar
  - [Highlight](/m2/extensions/highlight/) — 1.7.21 (was 1.7.19)
      + Carousel - add hover class to swiper container via JS (fixed block hover issue)
      + Always disable swiper on screens less then 640px wide (previously it was only when block had class `hl-magazine`)
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.1 (was 1.16.0)
      + Microeffect added to Initially expanded menu 2nd lvl
      + Properly reset column height
      + Fixed vertical columns mode on mobile devices
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.12 (was 1.6.11)
      + Fixed missing out of stock label
  - [SEO Suite](/m2/extensions/seo-suite/)
      + Added missing ACL files and moved resources to correct group in all modules
      + **swissup/module-hreflang** — 1.4.11 (was 1.4.9)
          * Magezon_ShopByBrand integration
          * Amasty_Storelocator integration
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.16 (was 1.7.15)
      + CSS improvements for the Stripe layout and few new LESS variables

### Version 1.26.0

> Nov 19, 2021

  - New **Argento Marketplace** theme added to the package. Check [Argento Marketplace docs](/m2/argento/marketplace/) for more details.
  - _Argento Home:_ Improved styles for "Photo-in-description"

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.31 (was 1.5.30)
      + Prevent empty popup after store view change
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.17 (was 1.9.16)
      + Added Page Builder integration for Easy Tabs widget
      + Fixes for Magento 2.4.3+ when page layout is "Product -- Full Width"
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.11 (was 1.6.9)
      + Performance improvements
      + Added stock data caching
      + Manual labels - added product stock conditions: stock status and qty
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-cross-links** — 1.1.2 (was 1.1.1)
          * Fixed performance issue replacing plugin around to after
      + **swissup/module-hreflang** — 1.4.9 (was 1.4.8)
          * Fixed error on Adobe Commerce: unknown column 'entity_id'

### Version 1.25.2

> Oct 29, 2021

  - [EasySlide](/m2/extensions/easyslider/) — 1.6.19 (was 1.6.18)
      + Fixed error during compillation on Magento 2.3.x

### Version 1.25.1

> Oct 27, 2021

 -  Products grid/slider elements improvements
 -  _Argento Essence:_ Fixed search overlapping dropdowns
 -  _Argento Force:_ Fixed visible configurable variation qty from MSI
 -  _Argento Luxury:_ Fixed overlapped button by swiper container in Highlight

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.30 (was 1.5.29)
      + Fixed price doubling on configurable products page
      + Updated Breeze integration
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.4.3 (was 1.4.2)
      + Fixed compatibility with Swissup Ajax Layered Navigation: incorrect options in multifilter list when some option is applied
  - [Breeze](/m2/extensions/breeze/) — 1.7.4 (was 1.7.3)
      + Prevent page jumping when showing modal popup
      + Keyboard navigation improvements for modal and dropdown components
      + Fixed rare error when caret is stuck inside search input
      + Do not close dropdowns behind overlay when click in modal
      + Amasty Out of Stock Notification integration
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.18 (was 1.6.17)
      + Added Magento Page Builder integration
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.5 (was 1.7.4)
      + Fixed not working flex styles and Pagebuilder usage in Argento Stripes theme
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.16 (was 1.9.15)
      + Fixed not loaded reviews in reviews tab when it is the first tab
      + Slightly improve JS minification potential
  - [Highlight](/m2/extensions/highlight/) — 1.7.19 (was 1.7.17)
      + Hide per-page limiter inside widget
      + Fixed order by popularity in graphQl
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.4.8 (was 1.4.7)
          * Don't add hreflang item for product when it is disabled at respective store view
      + **swissup/module-rich-snippets** — 1.4.15 (was 1.4.14)
          * Fixed invalid object type for field "brand"
          * Added '@id' for product data snippet to simplify third-party modules integration

### Version 1.25.0

> Sep 27, 2021

 -  Magento 2.4.3 compatibility: fixed missing pagination below products list
 -  Fixed non-translatable headers in login popup
 -  _Argento Home:_ Move Layered Navigation block into wrapper with JS not XML
 -  _Argento Stripes:_ updated Navpro styles and added support for [initially-expanded](/m2/extensions/navigationpro/use-cases/expanded-on-homepage/) menu feature
 -  _Argento Stripes:_ fixed broken reference message in log

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.29 (was 1.5.26)
      + Updated Breeze integration
      + Fixed minicart width in AjaxPro popup
      + Added config option to enable/disable AjaxPro per store view
      + Prevent hover on invisible quick-view links
      + Improved accessibility
      + Magento 2.3.4: fixed 'undefined index' js error
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.13 (was 1.11.12)
      + Breeze integration optimizations
      + Added less variable to switch category filter position
      + Disabled quickSearch initialization
      + Showing correct price in search popup when graphql enabled
  - [AMP](/m2/extensions/amp/) — 1.4.14 (was 1.4.10)
      + Magento 2.4.3: fixed missing pagination below products list
      + Added Featured Attributes module integration
      + Fixed error on category page: using correct escaping in list template
      + Fixed notice: Undefined index DESC in sorter template
  - [Askit](/m2/extensions/askit/) — 1.10.6 (was 1.10.2)
      + Updated Breeze integration
      + Fixed undefined index notice when persistent shopping cart is used
      + Added config option to enable/disable AskIt per store view
  - [Breeze](/m2/extensions/breeze/) — 1.7.3 (was 1.5.1)
      + Bundle products are now supported
      + Fixed broken robots.txt content
      + Added Pagebuilder’s Slider and Carousel support
      + Lot of other fixes and improvements
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.17 (was 1.6.16)
      + Updated Breeze integration
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.4 (was 1.7.3)
      + Added partial integration with Swissup AMP
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.15 (was 1.9.13)
      + Updated Breeze integration
      + Fixed 404 form ajax request from tab at Apache server
  - [GDPR](/m2/extensions/gdpr/) — 1.4.9 (was 1.4.7)
      + Facebook pixel cookie added to known list
  - [Highlight](/m2/extensions/highlight/) — 1.7.17 (was 1.7.12)
      + Fixed ‘OptionsData does not exist’ in Magento 2.4.3
      + Updated breeze integration
      + Fixed php error when using module Venia theme
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.0 (was 1.15.12)
      + New Feature: Always expanded menu on the homepage
      + Breeze: fixed possible invalid shevron position
      + Fixed rare error when this.active is null
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.27 (was 1.4.25)
      + Fixed missing 'quality' param in image optimization
      + Prevent scripts deferring if body tag missing
      + Fixed error class Optimizers\Cwebp not found
      + Fixed analyze button store base url
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.9 (was 1.6.7)
      + Improved logic behind generating labels data for grouped products
      + Fixed missing prolables after selecting configurable option
      + Breeze: fixed missing labels in recent products
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.14 (was 1.4.13)
          * Added option to remove reviews data from product structured data block
      + **swissup/module-seo-html-sitemap** — 1.1.11 (was 1.1.10)
          * Fixed storeId is null when displaying cms pages on sitemap
          * Added config to hide the highlight pages from sitemap
      + **swissup/module-seo-urls** — 1.5.28 (was 1.5.27)
          * Fixed 404 page when applied filter contains string same as category name
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.15 (was 1.7.13)
      + Updated Breeze integration

### Version 1.24.2

> Aug 12, 2021

 -  Magento 2.4.3 compatibility. Fixed js errors in backend theme editor
    (Header builder) and frontend (Ajax tabs) caused by new knockout.js library.
 -  Updated Breeze integration in all bundled modules.

**Extensions Updates**

 -  [swissup/module-easytabs](/m2/extensions/easytabs/) — 1.9.13 (was 1.9.12)
    - Improved ajax tabs stability.
 -  [swissup/module-hreflang](/m2/extensions/seo-suite/) — 1.4.7 (was 1.4.6)
    - Integration for FishPig_WordPress with FishPig_WordPress_Multisite.
 -  [swissup/module-pro-labels](/m2/extensions/prolabels/) — 1.6.7 (was 1.6.5)
    - Added compatibility with Firebear_ConfigurableProducts module.
    - Fixed negative discount amount at configuarble product when one of items has regular price lower then special price.

### Version 1.24.0

> Jul 28, 2021

 -  [**Breeze Alternative JS Frontend**](/m2/extensions/breeze/) **module added**
 -  Added ability to display link to parent item in breadcrumbs
 -  Smoother popup animation
 -  Fixed error on category pages: call to a member function getState() on null
 -  _Argento Flat and Pure:_ fixed possible incorrect sticky header position (bottom of the page)

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.25 (was 1.5.23)
      + Added Breeze integration
      + Fixed image src is undefined error in add to cart animation
      + Fixed missing popup for configurable products on cart page
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.11 (was 1.11.9)
      + Fixed error elasticsearchFulltextSearchCollectionFactory doesn't exist
      + Reduced response size for suggestions when search for CMS pages enabled
      + Added `View All` link
  - [Askit](/m2/extensions/askit/) — 1.10.2 (was 1.10.1)
      + Fixed js error: 'Unable to process bindings'
      + Fixed access to an undefined property
      + Fixed error: cannot instantiate Zend_Filter_Interface in graphql area
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.4.2 (was 1.4.1)
      + Added instruction on what to do when no attributes found to use for new page
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.16 (was 1.6.15)
      + Using attribute loading="lazy" instead of data-src
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.3 (was 1.6.1)
      + Prevent posibility to create duplicate popups
      + Improve banner options readability
      + Don't show popup banner if cookie is not writable
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.12 (was 1.9.11)
      + Fixed poorly working scroll to review tab when click on link
      + PWA integration: added GraphQl schema
  - [GDPR](/m2/extensions/gdpr/) — 1.4.7 (was 1.4.5)
      + Breeze: prevent js error when google-analytics is disabled
      + Breeze: fixed not working 'Delete My Data' button
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.12 (was 1.15.11)
      + Fixed uniqid bug in GraphQl schema
      + Fixed access to an undefined property warnings
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.25 (was 1.4.21)
      + Removed Swissup_Marketplace module dependency
      + Fixed blown up critical css textarea at system config
      + Removed duplicate cwebp checking
      + Added config option for image optimizer timeout
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.5 (was 1.6.4)
      + Fixed incorrect 0 in label text when #attr:attr_code# used and `attr_code` for product is null
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.10 (was 1.1.9)
      + Use simple product image for configurable products in email
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-core** — 1.3.4 (was 1.3.3)
          * Remove % from slugified string since it causes problem for SEO Images
      + **swissup/module-hreflang** —  1.4.6 (was 1.4.5)
          * Don't add hreflang item for product when product doesn't assigned to item's website
          * Integration with Magefan_Blog module
      + **swissup/module-seo-images** — 1.3.13 (was 1.3.12)
          * Improved module stability

### Version 1.23.0

> Jun 18, 2021

 -  [**Theme Editor**](/m2/argento/customization/theme-editor/) **now can be used in Argento child themes** [Read how to enable](/m2/argento/customization/custom-theme/#enable-theme-editor-for-custom-theme)
 -  [Argento Tabs](/m2/argento/scripts/argento-tabs/) script integrated with [Breeze](/m2/extensions/breeze/)
 -  Improved script lazy loading: fixed double add to cart issue
 -  Fixed error when top links block does not exist
 -  Product gallery RTL styles improved
 -  Magento_StorePickup styles added
 -  _Argento Luxury:_ fixed missing title on option pages of the [Attribute Pages module](/m2/extensions/attributepages/)

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.23 (was 1.5.22)
      + Removed message about options from popup when adding to cart
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.9 (was 1.11.8)
      + Prevent JS error at checkout page when category filter is enabled
  - [AMP](/m2/extensions/amp/) — 1.4.10 (was 1.4.9)
      + Added correct sizes for slider and catalog images
      + Prefetch Fontawesome CDN
      + Fixed error caused by text nodes inside audio/video tags
  - [Askit](/m2/extensions/askit/) — 1.10.1 (was 1.10.0)
      + Added "Plain text only" notice under question form on frontend
      + Fixed js error "Unable to process binding" for answer form
      + Disallow HTML in question and answer to avoid any security risks
      + Fixed error at answers grid in Admin when filtering items by question
      + Fixed hidden answers is visible at storefront
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.4.1 (was 1.4.0)
      + Fixed incorrect URLs in sitemap when some pages are not assigned to current store view
  - [EasySlide](/m2/extensions/easyslider/) —  1.6.15 (was 1.6.14)
      + Code refactoring
  - [Easybanners](/m2/extensions/easybanners/) — 1.7.1 (was 1.6.3)
      + Set banners cookie lifetime to 1 year
      + JS refactoring: do not create observers without the need
      + Added config to change cookie name
      + Added missing delete banner button
      + Added clear statistics button
      + Added ability to disable statistics
      + Added mass actions in banners grid
      + Added new lightbox banner appear effects
      + Remove statistics older than 6 month by cron
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.15 (was 1.4.14)
      + Added data-mode and data-cols attributes for PWA integration
      + Fixed missing "use category image" config in widget
      + Prevent image duplicates in srcset attribute
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.11 (was 1.9.10)
      + Fixed Notice: Trying to access array offset on value of type null
      + Fixed invalid form_key in ajax tabs in Magento 2.4.2
  - [GDPR](/m2/extensions/gdpr/) - 1.4.5 (was 1.4.3)
      + Fixed not-working 'Add new Cookie Group' button
      + "Accept All" button replaced with "Accept All & Save" in cookie bar component
  - [Highlight](/m2/extensions/highlight/) — 1.7.12 (was 1.7.10)
      + Fixed not working add to cart when carousel is enabled and pages are loaded via ajax
      + Fixed not working condition filters when block cache is disabled
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.11 (was 1.15.10)
      + Fixed missing 'has-active' class on the non-category menu items (Departments)
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.21 (was 1.4.18)
      + Added generation of advanced JS bundles during "setup:static-content:deploy" execution
      + Decreased default image resize limit to 100
      + Added new commands:
          * swissup:pagespeed:enable
          * swissup:pagespeed:disable
          * swissup:pagespeed:configure
          * swissup:pagespeed:criticalcss:generate
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.4 (was 1.6.3)
      + Fixed incorrect stock labels when Magento MSI is used
      + Fixed js error "isEmpty is not a function"
  - [QuantitySwitcher](/m2/extensions/qty-switcher/) — 1.1.9 (was 1.1.8)
      + Fixed grouped product quantity on Breeze
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-canonical** — 1.11.3 (was 1.11.2)
          * Fixed error at homepage
          * Fixed incorrect canonical Url at homepage
      + **swissup/module-seo-cross-links** — 1.1.0 (was 1.0.5)
          * Fixed acl for the module menu item
          * Strip slash at the end of the url
          * Ability to use crosslinks for extra product attributes
          * Added html target attribute into cross-links
      + **swissup/module-seo-html-sitemap** — 1.1.10 (was 1.1.9)
          * Fixed warning: count parameter must be an array or an object that implements Countable
      + **swissup/module-seo-urls** — 1.5.27 (was 1.5.25)
          * Fixed error - Call to a member function getLabel() on null
          * Fixed "Notice: Undefined variable: seoFilter"
      + **swissup/module-seo-xml-sitemap** — 1.1.10 (was 1.1.9)
          * Fixed issue when CMS page used for homepage still appears in XML Sitemap
  - [Testimonials](/m2/extensions/testimonials/) — 1.2.18 (was 1.2.17)
      + Refactored old controllers code
      + Updated get identities code
      + Fixed incorrect date after testimonial save on non-US locale

### Version 1.22.10

> May 21, 2021

 -  Improved image dimensions settings for the following demo data:
    - [Easyslider](/m2/extensions/easyslider/)
    - [Easybanner](/m2/extensions/easybanner/)
    - [EasyCatalogImages](/m2/extensions/easycatalogimages/)
 -  [Breeze](/m2/extensions/breeze/) integration updated:
    - Fixed js error "swiper is not defined".
    - Photo in description integration added.
    - Configurable products support added.

**Extensions Updates**

[swissup/module-ajaxpro](/m2/extensions/ajaxpro/) — 1.5.22 (was 1.5.21)

 -  Removed message about required product options from ajaxpro popup when adding
    product to cart.

[swissup/module-askit](/m2/extensions/askit/) — 1.10.0 (was 1.9.6)

 -  Fixed not working mass action in backend
 -  Escape question text on "Assign to" page to prevent XSS vulnerability

[swissup/module-easycatalogimg](/m2/extensions/easycatalogimages/) — 1.4.14 (was 1.4.13)

 -  Improve image resizer - allow to define width only. Useful when images has
    different heights.
 -  Responsive images support added - various devices will now receive
    images resized according to their screen size.

[swissup/module-highlight](/m2/extensions/highlight/) — 1.7.10 (was 1.7.9)

 -  Fix homepage (and other pages) cache invalidation when product is saved in backend.

[swissup/module-hreflang](/m2/extensions/seo-suite/) — 1.4.5 (was 1.4.4)

 -  Integration with [Attribute Pages module](/m2/extensions/attributepages/)

[swissup/module-navigationpro](/m2/extensions/navigationpro/) — 1.15.10 (was 1.15.8)

 -  Fixed error 'Menu doesn't exist' when saving category when DB has broken menu
    item records.

[swissup/module-pagespeed](/m2/extensions/pagespeed/) — 1.4.18 (was 1.4.17)

 -  Do not add srcset when no images found to use (Fixes incorrect dimensions)

[swissup/module-pro-labels](/m2/extensions/prolabels/) — 1.6.3 (was 1.6.1)

 -  Fixed possible missing out of stock label.
 -  Fixed js error on configurable products page.

[swissup/module-seo-images](/m2/extensions/seo-suite/) — 1.3.12 (was 1.3.11)

 -  Solved possible errors at products page when image URL contains non English characters
    or URL length is more than 150 characters.

### Version 1.22.8

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added to all themes and other
    bundled modules.
 -  Improved critical css styles.

**Extensions Updates**

 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.6 (was 1.11.5)
    -  Fixed PHP error on MagentoCommerce and MagentoB2B versions.
 -  [Highlight](/m2/extensions/highlight/) — 1.7.9 (was 1.7.7)
    -  Fixed not working category filter when using ajax pagination.
    -  Fixed not working widget conditions.
 -  [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.8 (was 1.15.4)
    -  Fixed not working sticky component.
    -  Fixed incorrect dropdown height on mobile devices when using stacked or amazon menu's.
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.4.17 (was 1.4.16)
    -  Fixed broken html when using critical css feature.
 -  [ProLabels](/m2/extensions/prolabels/) — 1.6.1 (was 1.5.18)
    -  Added ability to place content labels across multiple page locations.

### Version 1.22.7

> Apr 27, 2021

 - Added footer bottom toolbar layout configuration in all theme editors: you can now hide copyright and footer links blocks and display selected static block in footer bottom toolbar
 - Fixed layout shift caused by breadcrumbs
 - Critical css fixes
 - Fixed 'jumping' header panel when store/currency switchers unavailable
 - Reduced JS resources initial loading: added lazy init for x-magento-init scripts, add to cart at product listing, minicart and auth popup templates

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.21 (was 1.5.19)
      + Fixed sku.replace is not a function error
      + Added scripts lazy initialization
      + Add to cart animation fixes
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.6 (was 1.11.5)
      + Initialize category dropdown only on desktop to reduce JS for mobile
      + Style fixes
      + Swissup Breeze integration
  - [Askit](/m2/extensions/askit/) — 1.9.5 (was 1.9.4)
      + Added answer in admin notification email
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.9 (was 1.3.7)
      + Fixed error when trying to open page with invalid url
      + Added attribute pages to XML Sitemap
      + Don't include option pages in HTML Sitemap when parent attribute page is disabled
      + Fixed 404 error on attribute pages
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.9 (was 1.9.6)
      + Fixed layout shift when using accordion tabs on desktop
      + Compatibility with MSP_ReCaptcha for product review form
      + Swissup Breeze integration
      + Removed easytabs from product reviews list page
      + Prevent JS error at product page when anchor in URL is invalid CSS selector
  - [EasySlide](/m2/extensions/easyslider/) —  1.6.13 (was 1.6.12)
      + Swissup Breeze frontend integration
  - [GDPR](/m2/extensions/gdpr/) - 1.4.2 (was 1.4.1)
      + Better compatibility with Athlete theme
      + Store accepted cookie group names instead of codes
      + Fixed invalid updated_at date in client consents
      + Fixed newsletter block styles on Luma theme
  - [Highlight](/m2/extensions/highlight/) — 1.7.8 (was 1.7.6)
      + Using Argento lazy init for x-magento-init script
      + Fixed invalid product urls at highlight pages
      + Added highlight pages into XML sitemap
      + Fixed not-working widget conditions
      + Fixed not-working category filter when using ajax pagination
  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.9 (was 1.3.8)
      + Fixed mysql error on B2B and Enterprise Magento editions
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.4 (was 1.15.3)
      + Initialize top navigation on mobile devices only after hamburger icon clicked
      + Swissup Breeze integration
      + PWA integration: added GraphQl schema
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.16 (was 1.4.14)
      + Fixed invalid font url when deploying theme from terminal
      + Added configuration checks before image:resize command executing
      + Enable CSS defer and critical css only on cms and catalog pages
      + Disable build-in Magento critical CSS on disallowed pages
  - [ProLabels](/m2/extensions/prolabels/) — 1.5.19 (was 1.5.18)
      + Added `category_name` and `category_url` string variables
  - [SEO Suite](/m2/extensions/seo-suite/) — 1.11.0
      + **swissup/module-rich-snippets** — 1.4.13 (was 1.4.12)
        * Fixed foreach warning when configurable product has no children
      + **swissup/module-seo-canonical** — 1.11.0 (was 1.0.9)
        * Added config option to use specific store view for canonical URLs
        * Added config option to replace canonical base URL
      + **swissup/module-seo-html-sitemap** — 1.1.9 (was 1.1.8)
        * Sitemap page: don't show section when there are no items
      + **swissup/module-seo-images** — 1.3.11 (was 1.3.9)
        * Fixed mysql error on B2B and Enterprise Magento editions
        * Fixed "Unique constraint violation found" exception
      + **swissup/module-seo-xml-sitemap** — 1.1.9 (was 1.1.8)
        * Improved sorting in XML file
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.11 (was 1.7.10)
      + Restored missing price in Customer Also Bought block

### Version 1.22.4

> Mar 23, 2021

 -  Updated critical css styles in all themes.
 -  Minor speed improvements to the header minicart dropdown.
 -  Fixed jumping product image at product page while page is loading.
 -  Fixed cookie wall blinks while page is loading.

### Version 1.22.3

> Mar 17, 2021

 -  Added [Lite YouTube Embed](/m2/argento/customization/add-youtube-video/) to use instead of YouTube iframe
 -  Reduced cumulative layout shift on homepage caused by slider
 -  Reduced cumulative layout shift on category pages
 -  Fixed wrong sticky menu positioning after page length change
 -  _Argento Mall:_ improved PageSpeed score: replaced video iframe on the homepage with `Lite YouTube Embed`
 -  _Argento Home:_ fixed visible scripts in product listing when MSRP enabled
 -  _Argento Luxury:_ fixed not-working customers also bought carousel inside tab

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.19 (was 1.5.18)
      + Fixed slide cart js error on Magento 2.4.2
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.5 (was 1.11.4)
      + Fixed missing popular search terms in results and JS error when search terms returned from server
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.7 (was 1.3.6)
      + Fixed error on non-existing urls when Swissup_Seo module is enabled
  - [EasySlide](/m2/extensions/easyslider/) —  1.6.12 (was 1.6.10)
      + Fixed GraphQL types
      + Added options "Center slide" and "Slide Max width"
      + Tweak for sizes setting in sliders to reduce CLS
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.3 (was 1.15.2)
      + Added lazy loading attribute for hidden images
      + Removed unused variable
      + Removed wishlist block from Amazon Menu because it's not working in 2.4.2
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.13 (was 1.4.12)
      + Updated lazy sizes js library
      + Added native lazy loading for images using loading="lazy" attribute
      + Fixed wrapping into `picture` tag - add srcset, sizes to source tag from original image
      + Fixed not working css when critical is enabled in Magento 2.4.2
  - [ProLabels](/m2/extensions/prolabels/) — 1.5.18 (was 1.5.17)
      + Improved minification ability of JavaScript
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.9 (was 1.1.8)
      + Added reminder email unsubscribe feature
  - [SEO Suite](/m2/extensions/seo-suite/)
      + Fixed missing modules icons when merge enabled
      + **swissup/module-seo-templates** — 1.5.19 (was 1.5.18)
        * Fixed "products" directive for category template
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.10 (was 1.7.9)
      + Fixed items sort order at product edit form

### Version 1.22.2

> Feb 26, 2021

  - Removed Paypal buttons in sticky tocart
  - Fixed not-working Paypal buttons at product page
  - Muted browser console messages from jQuery Migrate
  - Removed unnecessary Magento Ui requirements at storefront
  - _Argento Force:_ fixed price styles in search results
  - _Argento Home:_ improved styles and positioning for Paypal buttons at product page
  - _Argento Mall and Stripes:_ fixed broken static content deploy when Ajaxsearch module disabled

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.18 (was 1.5.16)
      + JS optimization: load the loader scripts only when needed and reduce the number of requires on initial load
      + Fixed floating cart js error on Magento 2.4.2
      + Fixed blocks without name warning in log
      + Fixed cyclic dependency in merged layout
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.4 (was 1.11.3)
      + JS optimization: require search loader only when needed
      + Load JS templates for search results only when used
      + Fixed getting the final price
      + Removed the root category from category filter
  - [Askit](/m2/extensions/askit/) — 1.9.4 (was 1.9.2)
      + Mageplaza_Blog module compatibility
      + Fixed JS error related to questions form component
      + Added Persian translation
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.6 (was 1.3.5)
      + Fixed invalid sort order for the brands in lower case
  - [EasySlide](/m2/extensions/easyslider/) —  1.6.10 (was 1.6.9)
      + Fixed graphQL schema
  - [Easybanners](/m2/extensions/easybanners/) — 1.6.2 (was 1.6.1)
      + Added banner placeholder type for PWA integration
  - [Highlight](/m2/extensions/highlight/) — 1.7.6 (was 1.7.5)
      + Product collections code refactoring
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.2 (was 1.15.1)
      + JS optimization: require sticky script only when sticky menu is enabled
      + JS optimization: load some additional js only when interaction with menu starts
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-images** — 1.3.9 (was 1.3.8)
        * Decode spec symbols in image filename - fixes missing images
      + **swissup/module-seo-urls** — 1.5.25 (was 1.5.24)
        * Define hard-coded filter only when AjaxLayeredNavigation module enabled
      + **swissup/module-seo-templates** — 1.5.18 (was 1.5.17)
        * Improved verification if entity metadata is empty and fixed typos in config
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.9 (was 1.7.8)
      + Added graphQL query cache

### Version 1.22.1

> Jan 26, 2021

  - Elements page and styles added to Force design
  - Ajax Pro floating cart styles use theme colors
  - Improved critical css in Stripes design
  - Updated Ajax Search styles
  - Improved styles for sticky tocart when include/exclude tax price enabled

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.16 (was 1.5.15)
      + Fixed not-working quick view
      + Fixed missing quick view loader
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.3 (was 1.10.0)
      + Added loader on mobile view when entering search phrase
      + Added config option to set categories tree depth in category filter
      + Updated select2 library
      + Added config to enable graphQL
      + Added categories response caching
      + Fixed notice: Undefined index: category
  - [AMP](/m2/extensions/amp/) — 1.4.9 (was 1.4.8)
      + Add amp=1 param to urls in menu when Varnish used
  - [Askit](/m2/extensions/askit/) — 1.9.2 (was 1.9.1)
      + The 'Ask Your Question' button now works as a toggle
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.5 (was 1.3.3)
      + Added attribute pages to SEO HTML Sitemap
      + Added compatibility with Mirasvit_LayeredNavigation and Mirasvit_Scroll modules
  - [EasySlide](/m2/extensions/easyslider/) —  1.6.9 (was 1.6.8)
      + Updated integration with our Pagebuilder module
      + Added graphQL support
  - [Easybanners](/m2/extensions/easybanners/) — 1.6.1 (was 1.6.0)
      + Updated integration with our Pagebuilder module
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.13 (was 1.4.12)
      + Fixed broken image url when it starts from 'pub/'
  - [Easytabs](/m2/extensions/easytabs/) — 1.9.6 (was 1.9.5)
      + Template improvements: do not render empty tabs wrapper
      + Cleanup widget tabs list from duplicates
      + Fixed broken mass actions when store filter is applied
  - [GDPR](/m2/extensions/gdpr/) - 1.4.0 (was 1.3.17)
      + Fixed translation for “Agree & save” phrase
      + Updated integration with our Pagebuilder module
      + Cookie Wall feature added
  - [Highlight](/m2/extensions/highlight/) — 1.7.5 (was 1.7.3)
      + Added highlight pages to SEO HTML Sitemap
      + Added graphQL support
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.1 (was 1.15.0)
      + Updated integration with our Pagebuilder module
      + Fixed not working nowrap menu when some items are hidden via css
  - [ProLabels](/m2/extensions/prolabels/) — 1.5.17 (was 1.5.16)
      + Fixed missing on sale label at configurable product
      + Few minor optimizations and improvements
  - [QuantitySwitcher](/m2/extensions/qty-switcher/) — 1.1.7 (was 1.1.6)
      + Added compatibility with Multi-Source Inventory (MSI)
  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.8 (was 1.7.7)
      + Improved sold together blocks view inside Ajaxpro popup
      + JS translations fixed
  - [Testimonials](/m2/extensions/testimonials/) — 1.2.17 (was 1.2.15)
      + Using short testimonials page url in top and footer links
      + Added canonical url on testimonials page
      + Automatically clean page cache when testimonial was changed
      + Fixed bad-looking testimonial link in customer dropdown
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.12 (was 1.4.11)
          * Fixed structured data error about review for product at Magento 2.4.x
      + **swissup/module-seo-html-sitemap** — 1.1.8 (was 1.1.7)
          * Few fixes to add Highlight pages and Attribute pages to sitemap
      + **swissup/module-seo-pager** — 1.2.8 (was 1.2.7)
          * Integrate page number in title feature with AskIt module
      + **swissup/module-seo-urls** — 1.5.24 (was 1.5.22)
          * Fixed possible warning - strpos empty needle

### Version 1.22.0

> Dec 22, 2020

  - Elements pages and styles added to Stripes and Luxury designs
  - Added less variables for footer bottom links
  - Added logos for transactional emails
  - Fixed an error in the related block on product pages
  - Added GDPR for review reminder module
  - _Argento Essence:_ homepage tabs now built with EasyTabs widget
  - _Argento Pure:_ removed base64 image backgrounds
  - _Argento Force:_ added copyright in the footer, Navigation Pro style fixes
  - _Argento Home:_ improved styles for different tabs layouts

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.15 (was 1.5.14)
      + Fixed add to cart when flat catalog enabled

  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.10.0 (was 1.9.10)
      + GraphQL support added

  - [AMP](/m2/extensions/amp/) — 1.4.8 (was 1.4.6)
      + Added custom styles field in module configuration

  - [Askit](/m2/extensions/askit/) — 1.9.1 (was 1.9.0)
      + Ajax questions listing improvements

  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.3 (was 1.3.2)
      + Fixed 'Default Category' page title when using third-party modules or themes

  - [Easytabs](/m2/extensions/easytabs/) — 1.9.5 (was 1.9.4)
      + Added Page Builder for html tabs

  - [Highlight](/m2/extensions/highlight/) — 1.7.3 (was 1.6.6)
      + Added ability to set description and meta tags for highlight pages
      + Fixed carousel styles when widget isn't magazine
      + Fixed wrong items count for bestsellers at Magento 2.4.x

  - [Lightbox Pro](/m2/extensions/lightboxpro/) — 1.3.1 (was 1.3.0)
      + Fixed broken gallery widget on Magento 2.4.1

  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.15.0 (was 1.14.14)
      + New Slideout Menu variation added: Stackable Slideout Menu
      + Code and style fixes

  - [ProLabels](/m2/extensions/prolabels/) — 1.5.16 (was 1.5.14)
      + Improved module stability: prevent array_flip warning
      + Fixed possible JS Error: cannot find template

  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.7 (was 1.7.6)
      + Further ADA related improvement - better ScreenReader experience
      + Don't render "Frequently bought together" block when it is disabled or empty

  - [Testimonials](/m2/extensions/testimonials/) — 1.2.15 (was 1.2.14)
      + Slider widget improvements

### Version 1.21.0

> Nov 26, 2020

  - Configurable header in theme editor added to all themes.
  - Completed migration for all themes from Slick Carousel to Swiper.
  - Fixed sticky top menu jumps to bottom of the page during scroll. Such issue occured when page length increased (via ajax or any other javascript).
  - Fixed translation for Related products sidebar title.
  - Improved animation for navigation at RTL stores on mobile devices.
  - Overall improvements for CSS and JavaScript

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.14 (was 1.5.13)
      + Fixes floating cart.

  - [AMP](/m2/extensions/amp/) — 1.4.6 (was 1.4.5)
      * Added contact us page support.
      * Added config to exclude URLs from AMP.
      * Use the latest FontAwesome version.
      * Disabled GDPR form validation on AMP.

  - [Attribute Pages](/m2/extensions/attributepages/) — 1.3.2 (was 1.2.7)
      * [Layered Navigation support added](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab). (If you don't need it for your brand pages, you can disable it at attribute page settings.) Tested on:
        - Magento_LayeredNavigation
        - Swissup_AjaxlayeredNavigation
        - Amasty_Shopby
      * [New "Short Description" field added](/m2/extensions/attributepages/option-based-page/backend/#content-tab) for option pages.
    It may be enabled in "Attributepages: Product Option" widget to show
    option description at product page.
      * [Added ability to apply additional filters](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab)
    for product list at Option-based pages. This feature allows to create
    Brand Page filtered by several attributes:
    "Red Adidas Shoes", "Small Burberry Dresses", etc.
      * [Added ability to use placeholders](/m2/extensions/attributepages/attribute-based-page/backend/#option-pages-settings-tab)
    for Option-based page title: "Red {% raw %}{{var option.label}}{% endraw %} Shoes",
    "Small {% raw %}{{var option.label}}{% endraw %} Dresses", etc.
      * [Added ability to sort brands manually](/m2/extensions/attributepages/attribute-based-page/backend/#options-tab),
    using sort_order field. Previously brands was sorted aphabetically only.
      * Performance improvements when rendering options list.
      * Full Page Cache is now automatically invalidates corresonding brand page,
    when some change is made in backend.
      * Breadcrumbs is now using "Title" field. Previously "Page Title" was used, which
    wasn't intended.
      * Brands slider is now using Swiper library instead of SlickCarousel.
      * "Title" and "Layout" columns in backend grid are hidden now by default. You can still show them via "Columns" menu above the grid.
      * Added mass status action to backend grids.
      * Fixed not working search in backend grids.

  - [EasySlide](/m2/extensions/easyslider/) —  1.6.8 (was 1.6.4)
      + Fix for Argento Force theme - fixed not centered slides in homepage slider.
      + Implement IdentityInterface for slider block. Now you don't need to flush FPC after slider change in Magento Admin. Frontend updated by itself.
      + Show disabled state on disabled slides in Magento Admin.
      + Add action to duplicate existing sliders in Magento Admin.
      + Fixed slider behavior when thumbnails enabled and effect is 'Cude'/'Flip'.
      + New option in edit slider interface - "Responsive breakpoints". It allows to change slides per view on different screen width.
      + Fixed not working search by keyword.

  - [Easybanners](/m2/extensions/easybanners/) — 1.6.0 (was 1.5.11)
      +  Added ability to set [different banner size per screen size](/m2/extensions/easybanners/interfaces/#image-options-region). This feature allows to improve pagespeed score when properly configured.
      +  Fixed black background when background setting is not correct. White background will be used in such case.
      +  Fixed php error on banner save after image was uploaded in Magento 2.4.1.

  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.12 (was 1.4.11)
      + Do not modify category layout via layout.xml.
      + Do not output subcategories block on root category (Attribute Pages compatibility).
      + Widget now can be added using backend widget interface. Previously, block was not displayed if added in such a way.

  - [Easytabs](/m2/extensions/easytabs/) — 1.9.4 (was 1.9.3)
      + Fixed "Your session has expired" error message when ajax tab has product listing.

  - [GDPR](/m2/extensions/gdpr/) - 1.3.16 (was 1.3.11)
      + Fixed missing GDPR checkboxes on customer registration page when [Swissup_CustomerFields](/m2/extensions/customer-field-manager/) is enabled.
      + Fixed blocked google analytics cookies when Magento_GoogleAnalytics module is enabled in runtime via third-party plugin.
      + Improved frontend performance when a bunch of cookies are blocked. Previously GDPR module sent a request per each cookie. Now, all cookie names will be merged into a single request.
      + Fixed margin for newsletter consent at RTL locales.
      + Fixed possible disappeared message after add to cart. It prevents magneto from updating customer sections after registring unknown cookie.
      + Decrease number of ajax requests if some module write cookies multiple times.

  - [Highlight](/m2/extensions/highlight/) — 1.6.6 (was 1.6.4)
      + Replaced slick carousel with swiper.

  - [Lightbox Pro](/m2/extensions/lightboxpro/) — 1.3.0 (was 1.2.13)
      + New "Masonry" template for the gallery widget.

  - [NavigationPro](/m2/extensions/navigationpro/) — 1.14.14 (was 1.14.11)
      + Fixed synchronization of the new top level category to the departments submenu.
      + Fixed invalid url to CMS pages - slash at the end of url is not used in 2.4. From now, to generate url with trailing slash admin must add it to the item url in backend.
      + Allow to disable block cache via XML layout for top menu.

  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.12 (was 1.4.11)
      + Add --with-custom, --with-product options to ImagesResizeCommand.
      + Advanced bundling improvement - better file resolving when minify js is enabled.

  - [ProLabels](/m2/extensions/prolabels/) — 1.5.14 (was 1.5.11)
      +  PHP error for manual label save after image upload in Magento 2.4.1
      +  Fixed incorrect stock qty for stock label. Latest MSI compatibility.
      +  Fixed for discount percent and discount amount for Bundle product.
      +  Minor ADA compatibility fix.

  - [Sold Together](/m2/extensions/soldtogether/) — 1.7.6 (was 1.6.14)
      + Added support for configurable products in "Frequently Bought Together" and "Customers Also Bought" blocks.
      + New config options "Product Types to Display" for both blocks. You can choose what types of products you want to see in "Frequently Bought Together" and "Customers Also Bought" blocks.
      + ADA compliant fixes and templates refactoring.

  - [Testimonials](/m2/extensions/testimonials/) — 1.2.14 (was 1.2.12)
      + Replaced slick carousel with swiper.
      + Fixed php error when saving testimonial with uploading image in Magento 2.4.1 backend.
      + Added image width and height parameters in slider widget.

  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.11 (was 1.4.10)
          * "Price Valid Until" can be dynamic date - offset from today.
      + **swissup/module-seo-canonical** — 1.0.8 (was 1.0.7)
          * Fixed incoppert canonical URL for product when its parent is disabled.
      + **swissup/module-seo-core** — 1.2.5 (was 1.2.4)
          * PHP 7.4 compatibility fix - deprecated passing glue string after array with implode.
      + **swissup/module-seo-images** — 1.3.7 (was 1.3.6)
          * Improve module stability. Prevent DB exception - integrity constraint violation.
      + **swissup/module-seo-urls** — 1.5.22 (was 1.5.20)
          * Fixed filter urls with other storeview code at catalog search page.

### Version 1.20.1

> Oct 19, 2020

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-1200---1201)

  - Compatibility with Magento 2.3.6 and Magento 2.4.1.
  - Fixed system.log WARNING about broken reference at different themes. Occurs when catgory page or product page layout is changed to 1column via theme editor. But some blocks added to sidebar in original XML layout.
  - Overall styles for small pages like customer login, advanced search, forgotpassword etc.
  - We started to replace Slick Carousel with Swiper. It will help to reduce number of third-party JS libraries and replace some pure HTML with Magento 2 widgets. Currently we updated brands sliders at Argento Stripes and Argento Force. Now there are widgest of EasySlide module. So you can modifies those sliders via EasySlide admin interface.
  - All themes (and some modules) integrated with our new [Pagebuilder](/m2/extensions/pagebuilder/) module.

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.13 (was 1.5.12)
    * Improvements for quick view feature.

  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.9.10 (was 1.9.9)
    * Integration with our new Pagebuilder module.

  - [Askit](/m2/extensions/askit/) — 1.9.0 (was 1.8.4)
    * Server side code tweaks and improvements.

  - [EasySlide](/m2/extensions/easyslider/) — 1.6.4 (was 1.6.0)
    * Integration with our new Pagebuilder module.
    * New option to show multiple sliders per view (with breakpoints where you can setr different slides number for different screen sizes). This option used to create brand sliders for Argento Force and Argento Stripes.
    * Fixed not working search by keyword at sliders grid in Magento Admin.

  - [Easybanners](/m2/extensions/easybanners/) — 1.5.11 (was 1.5.8)
    * Few minor fixes and integration with our Pagebuilder.

  - [GDPR](/m2/extensions/gdpr/) — 1.3.11 (was 1.3.9)
    * Fixed error when using Login as Customer feature.

  - [Highlight](/m2/extensions/highlight/) — 1.6.4 (was 1.6.3)
    * Improvements for highlight carousel widget. Use Swiper lib instead of Slick. Swiper works smoother.

  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.8 (was 1.3.7)
    * Fixed visual artifacts during transition animation in Chrome browser. Most often problem occured at Argento Essence theme.

  - [Lightbox Pro](/m2/extensions/lightboxpro/) — 1.2.13 (was 1.2.11)
    * Fixed wrong image size and position with navdir=vertical on mobile.
    * Fixed js error on Magento 2.4.1.

  - [NavigationPro](/m2/extensions/navigationpro/) — 1.14.11 (was 1.14.9)
    * Fixed possible invalid image path on nginx servers.
    * Do not allow to save menu/items if they have recursive call to the same menu.

  - [ProLabels](/m2/extensions/prolabels/) — 1.5.11 (was 1.5.10)
    * Fixed discount percent and discount amount variables in prolabel for Bundle product.

  - [Sold Together](/m2/extensions/soldtogether/) — 1.6.14 (was 1.6.13)
    * Replace Slick carousel with Swiper for "Customers Also Bought..." widget.

  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** —  1.4.3 (was 1.4.2)
          * Fixed incorrect product URL for other stores (urls contained categories in their pathes).
      + **swissup/module-seo-templates** — 1.5.16 (was 1.5.15)
          * Fixed missing generated metadata on category page.
      + **swissup/module-seo-urls** — 1.5.20 (was 1.5.19)
          * Fixed hreflangs at catgeory pages when filter applied. It still added store code to URL even when hreflang option set not to do so.

### Version 1.20.0

> Sep 23, 2020

  - New mind-blowing jaw-dropping Argento Home theme included into package. Check [Argento Home docs](/m2/argento/home/) for more details.
  - Updated and improved design in every theme for FishPig WordPress extension. Significantly improve your blog look with this release.
  - Small on-image reload button instead of ugly big button for Magento Captcha.
  - Magento Commerce compatibility (TargetRule module).
  - Prevent content jumping when modal popup shown.
  - Minor improvements to critical CSS.
  - Reorganized themes editor section of Configuration in Magento Admin. No "Swissup Themes Editor" section. New item "Themes Editor" in "Swissup" section where you select theme you need.

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.12 (was 1.5.8)
      + Fix get total-information after order place (empty quote 404).
      + Fixes for quick view feature.
      + Minor fixes and improvements.

  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.9.9 (was 1.9.8)
      + Fixed not clickable search button on desktop Safari.

  - [AMP](/m2/extensions/amp/) — 1.4.5 (was 1.4.3)
      + Fixed missing product reviews in Magento 2.3.3 and newer.
      + Force scssphp version 1.1.1 as 1.2 is broken.

  - [Askit](/m2/extensions/askit/) — 1.8.4 (was 1.8.2)
      + Fixed notice when adding new question from admin.
      + Styles improvements.

  - [EasySlide](/m2/extensions/easyslider/) — 1.6.0 (was 1.5.7)
      + New option for slider - "Thumbnails". You can set their sizes and position.
      + Updated and rethinked edit slider form in Magneto Admin.

  - [Easytabs](/m2/extensions/easytabs/) — 1.9.2 (was 1.9.0)
      + Fixed missing reviews at AMP page.
      + Fixed not expanded tab when use link with tabs alias in anchor. (Direct link to tab).

  - [GDPR](/m2/extensions/gdpr/) — 1.3.9 (was 1.3.7)
      + Fixed cookie bar flickering when themes' critical css is enabled.
      + Do not show empty 'cookie settings' block (When it's disabled).
      + Fixed ability to translate cookie consent text at 'privacy tools' page.

  - [NavigationPro](/m2/extensions/navigationpro/) — 1.14.9 (was 1.14.7)
      + Magento 2.3.5, 2.4.0: Fixed invalid category image path when it's used in 'Name as Html' field.
      + Added missing phrase to translation.

  - [Pagespeed](/m2/extensions/pagespeed/) — 1.4.11 (was 1.4.8)
      + Add preloading for custom resources.
      + Don't sync styles loading on mobile devices. Improves page rendering on mobile devices.
      + Fixed broken mobile styles when critical css is enabled.

  - [ProLabels](/m2/extensions/prolabels/) — 1.5.10 (was 1.5.8)
      + Get rid of Cron job for manual labels and add index instead. New index id is `swissup_prolabels`.
      + Few tweaks for server side logic.

  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.8 (was 1.1.7)
      + Config option to disable reminders for guest customers.

  - [Sold Together](/m2/extensions/soldtogether/) — 1.6.13 (was 1.6.12)
      + Slighly changed logic how relations are built during reindexing. Use product SKUs instead of IDs. It can be really helpful for stores where products imported form ERP system.

  - [Testimonials](/m2/extensions/testimonials/) — 1.2.12 (was 1.2.11)
      + Fixed error filtering template in M2.4.

  - [Theme Editor](/m2/argento/customization/theme-editor/) - 1.9.1 (was 1.8.1)
      + No "Swissup Themes Editor" section. "Themes Editor" item in "Swissup" section where you can select theme.
      + New option for category page builder - "Layered Navigation position".

  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-canonical** — 1.0.8 (was 1.0.7)
          * Fixed incoppert canonical URL for product when its parent  disabled and config option "Use parent product for canonical" enabled.
      + **swissup/module-seo-images** — 1.3.7 (was 1.3.6)
          * Improve module stability. Prevent DB exception - integrity constraint violation.
      + **swissup/module-seo-templates** — 1.5.15 (was 1.5.14)
          * Slightly speed up template generating.
          * Remove cron task and CLI command. Use indexes instead and `bin/magento indexer:reinder [index_id]`.
      + **swissup/module-seo-urls** — 1.5.19 (was 1.5.16)
          * Fixed array_flip warning during reindex.
          * Option to use direct URL to subcategory in category filter. Enabled by default.

### Version 1.19.0

> Aug 5, 2020

 -  Magento 2.4 compatibility in themes and modules.
 -  PHP 7.4 compatibility added in bundled modules.
 -  Critical CSS added to all themes to improve PageSpeed score.
 -  Fixed missing review form on ArgentoForce theme when load product page via
    url "...#review-form"
 -  Removed deprecated installation instructions.

**Extensions Updates**

 -  [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.8 (was 1.5.5)
    -  Magento 2.4 compatibility.
    -  Add optional fly to cart animation feature.
 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.9.8 (was 1.9.5)
    -  Magento 2.4 compatibility.
    -  Include tax to the product price if needed.
 -  [AMP](/m2/extensions/amp/) — 1.4.3 (was 1.4.1)
    -  Magento 2.4 compatibility.
    -  Removed prohibited loading attribute from images
    -  Fixed store menu processing when Varnish used.
 -  [Askit](/m2/extensions/askit/) — 1.8.2 (was 1.8.0)
    -  Magento 2.4 compatibility (unexpected token 'case' error in backend).
    -  Fixed issue when unable to assign product/category/page to question.
 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.8 (was 1.5.7)
    -  Prevent page jumping when image is loading.
    -  Fixed mispositioned dimensions label in backend form.
 -  [EasyCatalogImages](/m2/extensions/easycatalogimages/) — 1.4.11 (was 1.4.9)
    -  Added category to hide and listing mode options to departments page configuration
 -  [EasySlide](/m2/extensions/easyslider/) — 1.5.7 (was 1.5.6)
    -  Performance improvements.
    -  Prevent page jumping when image is loading.
 -  [Easytabs](/m2/extensions/easytabs/) — 1.9.0 (was 1.8.12)
    -  Prevent page jumping while scripts are initializing.
    -  Fixed automatic cache invalidation on content and tab update.
 -  [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.4 (was 1.1.3)
    -  Performance improvements.
 -  [GDPR](/m2/extensions/gdpr/) — 1.3.7 (was 1.3.4)
    -  PHP 7.4 compatibility
    -  Allow to translate cookie title and description via i18n files
    -  Do not show cookie bar until scripts are ready
    -  Fixed newsletter signup styles in Magento 2.4
 -  [Highlight](/m2/extensions/highlight/) — 1.6.3 (was 1.6.2)
    -  Improve [Prolabels](/m2/extensions/prolabels/),
       [Seo Images](/m2/extensions/seo-images/) and [Seo Templates](/m2/extensions/seo-templates/)
       extensions support.
 -  [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.7 (was 1.3.5)
    -  Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.
    -  Performance improvemements.
 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.14.7 (was 1.14.5)
    -  Fixed invalid category image path in Magento 2.4
    -  PHP 7.4 compatibility
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.4.4 (was 1.4.2)
    -  Magento 2.4 compatibility.
    -  Minimize layout shifts with own css loader.
    -  Don't push/preload images from `<picture>` tag.
    -  Fix webp+picture and lazyload data-srcset bug combination.
    -  Config refactoring.
 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.5 (was 1.5.3)
    -  Performance improvements.
    -  Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.
    -  Improve labels rendering on product page for configurable products.
 -  [Seo Suite](/m2/extensions/seo-suite/)
    -  *swissup/module-seo-core — 1.2.3* (was 1.2.2)
       - Reduce page rendering time by reducing number if queries for SEO Templates and SEO Images extensions.
    -  *swissup/module-hreflang — 1.4.1* (was 1.4.0)
       - Reduce number of database queries.
    -  *swissup/module-seo-images — 1.3.6* (was 1.3.2)
       - Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.
       - Performance improvemements.
    -  *swissup/module-seo-pager — 1.2.6* (was 1.2.4)
       - Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.
    -  *swissup/module-seo-templates — 1.5.11* (was 1.5.8)
       - Performance improvemements.
       - Fixed issue at Magento 2.4.0 at product listing when pagination and limits are ignored.
    -  *swissup/module-seo-urls — 1.5.12* (was 1.5.11)
       - Fixed PHP error "Call getColumnValues on array".
       - Performance improvemements.
    -  *swissup/module-seo-xml-sitemap — 1.1.7* (was 1.1.6)
       - Add missing other links to sitemap XML.
 -  [QtySwitcher](/m2/extensions/qty-switcher/) — 1.1.6 (was 1.1.5)
    -  Integrate into AjaxPro popup.
    -  Get proper stock config for grouped product children.

### Version 1.18.0

> Jul 1, 2020

 -  Added favicons in all themes
 -  Fixed error when Facebook Like Button module is not installed
 -  "Photo in description" can play video now
 -  Improved layered navigation styles when filters in main column
 -  Fixed horizontal scrollbar when js is not initialized yet on RTL stores
 -  Allow to change logo size with magento's admin settings
 -  Fixed missing prolabels on product page after theme installation
 -  Fixed installation error when some module is missing
 -  Argento Stripes: Fixed partially invisible text in Braintree inputs on checkout
 -  Argento Pure2: Always render configurable header at the page top
 -  Argento Pure2: Added config to disable configurable header on specific pages
 -  Other small fixes and improvements in styles, templates and scripts

**Extensions Updates**

 -  [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.5 (was 1.5.1)
    -  Added quick product view feature on the product listing
    -  Refactored logic in modal-manager
    -  Init block was refactored
 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.9.5 (was 1.9.1)
    -  Added Elasticsearch 7 compatibility
    -  Fixed wrong price in search popup when store uses multiple currencies
    -  Fixed RTL style issue
    -  Fixed error when searching '~'
 -  [AMP](/m2/extensions/amp/) — 1.4.1 (was 1.3.14)
    -  Disable move JS to page bottom on AMP
    -  Full page cache now works on AMP
    -  Fixed missing view details button for products with required options
    -  Fixed missing svg logo on AMP
    -  Fixed missing menu when using Varnish
    -  Fixed page jumping while scripts are initializing
    -  Do not render cookie notice block when it's disabled
 -  [Askit](/m2/extensions/askit/) — 1.8.0 (was 1.7.5)
    -  New mass actions in Questions grid - “Assign to…”
    -  Fixed error when post answer from Admin grid with questions
    -  Improvements and fixes to admin interfaces of edit questions/answers
 -  [Attribute Pages](/m2/extensions/attributepages/) — 1.2.6 (was 1.2.4)
    -  Do not activate 'exclude_from_display' checkbox when click on another cell
    -  Removed end slash from pages URLs
 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.7 (was 1.5.6)
    -  Added identity interface for block and placeholder
 -  [EasyCatalogImages](/m2/extensions/easycatalogimages/) — 1.4.9 (was 1.4.8)
    -  Small style improvement on AMP
 -  [EasySlide](/m2/extensions/easyslider/) — 1.5.6 (was 1.5.5)
    -  Small style improvement on AMP
 -  [Easytabs](/m2/extensions/easytabs/) — 1.8.12 (was 1.8.10)
    -  Fixed broken Delete action in actions column
    -  Added enabled config for product tabs
    -  Fixed typos in description tab name and translations
 -  [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.3 (was 1.1.2)
    -  Display all attributes. Previously, only attributes from default attribute set were displayed.
 -  [GDPR](/m2/extensions/gdpr/) — 1.3.4 (was 1.3.2)
    -  Fixed error when customer logging in
    -  Place consents before captcha/recaptcha field
 -  [Highlight](/m2/extensions/highlight/) — 1.6.2 (was 1.6.1)
    -  Fixed highlight carousel on AMP
 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.14.5 (was 1.14.3)
    -  Fixed flyout menu from top left corner in Safari when fade animation is used
    -  Code cleanup and installer improvements
    -  Fixed rare bug when nowrap or sticky features does not applied on the initial page load
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.4.4 (was 1.4.2)
    -  Fix in removing of empty ‘criticalCss’
    -  Fixed double slash in URLs to static content
    -  Fixed duplicated sources in 'picture' if image repeated on the page
    -  Added preconnect with dns-prefetch
    -  Added optional link rel='preload'
 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.5 (was 1.5.3)
    -  Fixed PHP warning - division by zero
    -  Fixed PHP warning - array must contain at least one element
 -  [Seo Suite](/m2/extensions/seo-suite/)
    -  *swissup/module-seo-core — 1.2.3* (was 1.2.2)
       - Fix for chinese locales when slufigy package installed
    -  *swissup/module-hreflang — 1.4.1* (was 1.4.0)
       - Don't include store view into hreflangs when it is disabled in admin
    -  *swissup/module-rich-snippets — 1.4.10* (was 1.4.9)
       - Added support for availability pre-order
    -  *swissup/module-seo-html-sitemap — 1.1.6* (was 1.1.5)
       - Improved third-party modules compatibility
    -  *swissup/module-seo-urls — 1.5.12* (was 1.5.11)
       - Fixed params resolving logic when yes/no filter and 'No' selected
    -  *swissup/module-seo-templates — 1.5.11* (was 1.5.8)
       - Fixed 'categories' and 'parents' directive for products
       - Update category and product metadata only at pages where it is really necessary
 -  [SoldTogether](/m2/extensions/soldtogether/) — 1.6.10 (was 1.6.9)
    -  Fixed error when saving newly created product with sold together data
 -  [Testimonials](/m2/extensions/testimonials/) — 1.2.9 (was 1.2.8)
    -  Improved slider widget
    -  Fixed error when admin notification email is empty

### Version 1.17.0

> May 7, 2020

 -  Compatibility with Magento 2.3.5 and Content Security Policies
 -  Added translation for 16 locales in all themes and modules
 -  Customize category page from admin using [Category Page Builder][cp-builder]
 -  Customize product page from admin using [Product Page Builder][pp-builder]
 -  Argento Pure2: you can now change header layout directly from admin using [Header Builder][h-builder]
 -  Argento Luxury: styles improvements and optimization
 -  Improved filters styles at one column page layout
 -  Fancy scroll at Ajaxpro popup
 -  Fixed wrong logo size in Magento 2.3.5

**Extensions Updates**

 -  [Ajax Pro](/m2/extensions/ajaxpro/) — 1.5.1 (was 1.4.18)
    -  Fixed issue with configurable products
    -  Modal logic fix
 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.9.1 (was 1.8.8)
    -  css fix for search in Header Builder
 -  [AMP](/m2/extensions/amp/) — 1.3.14 (was 1.3.13)
    -  Magento 2.3.5 CSP compatibility
    -  Fixed too big :focus border around the image
    -  Fixed error at products compare page
 -  [Askit](/m2/extensions/askit/) — 1.7.5 (was 1.7.0)
    -  Remove template and js file not used anymore
    -  Fixed askit widget at homepage
 -  [Attribute Pages](/m2/extensions/attributepages/) — 1.2.4 (was 1.2.3)
 -  [EasySlide](/m2/extensions/easyslider/) — 1.5.5 (was 1.5.4)
    -  Improved positioning of slide description
    -  Fixed error on image upload page - compatibility with Magento 2.3.5
 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.6 (was 1.5.4)
    -  Fixed small image in newsletter popup
    -  GDPR cookie consent integration
    -  Magento 2.3.5 CSP compatibility
    -  Fixed broken chart in backend
 -  [EasyCatalogImages](/m2/extensions/easycatalogimages/) — 1.4.8 (was 1.4.7)
 -  [Easytabs](/m2/extensions/easytabs/) — 1.8.10 (was 1.8.9)
    -  Added config to enable accordion layout on desktop
 -  [Fblike](/m2/extensions/fblike/) — 1.3.5 (was 1.3.4)
    -  Magento 2.3.5 CSP compatibility
 -  [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.2 (was 1.1.1)
    -  Improved performance
 -  **FontAwesome** — 1.4.1 (was 1.4.0)
    -  Magento 2.3.5 CSP compatibility
 -  [GDPR](/m2/extensions/gdpr/) — 1.3.2 (was 1.2.3)
    -  [Cookie consent](/m2/extensions/gdpr/configuration/#cookie-consent-section) feature added
    -  Fixed error during static content deploy
    -  Fixed cookie bar positioning
 -  [Highlight](/m2/extensions/highlight/) — 1.6.1 (was 1.6.0)
    -  Block title now affects the cache
 -  [LightboxPro](/m2/extensions/lightboxpro/) — 1.2.10 (was 1.2.9)
    -  Removed add session param to url: Magento 2.3.5 compatibility
 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.14.3 (was 1.14.0)
    -  Fixed bug when dropdown wasn’t shown on mouse hover
    -  Decreased cache memory consumption
    -  Added marketplace installer support
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.4.2 (was 1.3.17)
    -  Added google pagespeed insights integration in config
    -  Added image optimization by schedule
    -  Added filename and limit arguments to ‘images:resize’ console command
    -  Added comments about heavy server load for some features in config
    -  Magento 2.3.5 CSP compatibility
    -  Added ability to exclude some scripts from defer
    -  Added http/2 pushing for fonts
 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.3 (was 1.5.2)
    -  On Sale, Is New and Stock labels can be disabled for specific customer group
 -  [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.6 (was 1.1.5)
    -  Fixed showing wrong products in email
 -  [Seo Suite](/m2/extensions/seo-suite/) — 1.9.1 (was 1.9.0)
     - *swissup/module-hreflang — 1.4.0* (was 1.3.7)
       - Fixed empty hreflang value for chines locales when "Remove region...".
       - Build hreflang links using all websites of Magento instance.
     - *swissup/module-rich-snippets — 1.4.8* (was 1.4.9)
       - Compatibility with Firebear_ConfigurableProducts module.
     - *swissup/module-seo-urls — 1.5.11* (was 1.5.10)
       - Add `nofollow` to category filter in layered navigation.
 -  [SoldTogether](/m2/extensions/soldtogether/) — 1.6.9 (was 1.6.8)
 -  [Testimonials](/m2/extensions/testimonials/) — 1.2.8 (was 1.2.7)

[cp-builder]: /m2/argento/customization/theme-editor/#category-page-builder
[pp-builder]: /m2/argento/customization/theme-editor/#product-page-builder
[h-builder]: /m2/argento/customization/theme-editor/#header-builder

### Version 1.16.0

> Mar 26, 2020

 -  Fixed broken image markup in sticky-add-to-cart component
 -  RTL styles for argento tabs (homepage)
 -  A lot of improvements in [Askit](/m2/extensions/askit/) module
 -  Argento Pure2 — added category page configuration section in theme editor with the following features:
    -  change category page layout
    -  change page content width
    -  set products per page and list mode
    -  configure the number of products in a row for different page sizes
    -  all changes are immediately visible in page layout preview

**Extensions Updates**

 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.8.8 (was 1.8.7)
    - Fixed search button not working on iOS

 -  [AMP](/m2/extensions/amp/) — 1.3.13 (was 1.3.10)
    - Fixed broken add to cart on homepage
    - Fixed rating error on category page
    - Styles from app/design theme folder now included on AMP pages
    - Fixed broken allow cookie action in Magento 2.3

 -  [Askit](/m2/extensions/askit/) — 1.7.0 (was 1.6.4)
    - Totally reworked internal implementation at frontend
    - Question and Answer forms build with UI Component
    - Questions list loaded with ajax request reacts immediately on customer actions (voting, page changing)
    - Improved UX at backend

 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.4 (was 1.5.3)
    - Fixed small image in newsletter popup when PageSpeed module enabled
    - Fixed js error when there are two banners with the same ID in database

 -  [Easytabs](/m2/extensions/easytabs/) — 1.8.9 (was 1.8.6)
    - Content in attribute tab now pocesses widget instructions
    - Tabs admin grid improvements: added alias column and colors for block types
    - Removed the limit for product attribute tab: add as many attributes as you need

 -  [Highlight](/m2/extensions/highlight/) — 1.6.0 (was 1.5.6)
    - Added color swatches support to the Highlight widgets and pages
    - Improved magazine layout look on mobile devices
    - Added ability to set custom ‘View All’ page url
    - Improved pagination/limit logic (Amasty_Preorder module compatibility)

 -  [HoverGallery](/m2/extensions/hover-gallery/) — 1.3.5 (was 1.3.3)
    - Escape hover image URL: SEO Images module compatibility
    - Fixed hover image position when using list mode

 -  [LightboxPro](/m2/extensions/lightboxpro/) — 1.2.9 (was 1.2.8)
    - Now image is resized when height is updated in configuration

 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.14.0 (was 1.13.7)
    - Fixed possibly empty menu when using Argento installer and ‘All Stores’ option
    - Added ability to set dropdown settings for third dropdown level
    - Fixed possible error when category name is missing in the backend navpro’s tree

 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.3.17 (was 1.3.15)
    - Fixed issue with umlauts in image name
    - Fixed issues with wrong image alt text
    - Improved advanced bundling: added Swissup themes integration
    - Improved image optimization and lazy load features

 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.2 (was 1.5.1)
    - Fixed label without styles at product page

 -  [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.5 (was 1.1.3)
    - Added ability to use TrustedShops review link in email

 -  [Seo Suite](/m2/extensions/seo-suite/) — 1.9.0 (was 1.8.3)
     - Improvements in SEO Urls and SEO Images - remove double quotes, replace non-breakable space with dash
     -  *Hreflang*:
         -  Fixed poorly worked urls at Magento 2.3.4
         -  Force remove store_code parameter from url
         -  Fixed warning during order placing
     -  *Seo Images*:
         -  Added SEO Images Magento Index to speed up initial page rendering
         -  “Production Mode” feature (beta)
     -  *Seo Templates*:
         - Improved third-party modules compatibility
         - Improved price directive for products
     -  *Seo URLs*:
         - Fixed incorrect category urls in hreflangs

 -  [SoldTogether](/m2/extensions/soldtogether/) — 1.6.8 (was 1.6.6)
    - RTL fixes
    - Fixed compilation error

### Version 1.15.2

> Feb 17, 2020

 -  A lot of RTL fixes and improvements.
 -  CSS styles cleanup in Pure2 theme.
 -  Login popup added that allows to login from any page.
 -  Added server and browser cache invalidation when changing CSS via theme editor.
 -  New [Marketplace](https://github.com/swissup/module-marketplace#marketplace)
    installer support added.

**Extensions Updates**

 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.8.7 (was 1.8.6)
    - JS code optimizations.
 -  [Askit](/m2/extensions/askit/) — 1.6.5 (was 1.6.3)
    - Fixed broken 'answers' grid in Magento 2.3.4.
 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.3 (was 1.5.1)
    - Fixed newsletter popup styles in Firefox.
    - RTL fixes.
 -  [EasyCatalogImages](/m2/extensions/easycatalogimages/) — 1.4.7 (was 1.4.6)
    - CSS code optimizations.
 -  [GDPR](/m2/extensions/gdpr/) — 1.2.3 (was 1.2.2)
    - RTL fixes.
 -  [HoverGallery](/m2/extensions/hover-gallery/) — 1.3.3 (was 1.3.2)
    - Improve hover image positioning when it has smaller height than requested for listing.
 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.13.7 (was 1.13.6)
    - RTL fixes.
    - Fixed broken magento installation when navpro is enabled before Magento was installed.
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.3.15 (was 1.3.12)
    - Fixed 'Segmentation fault' error.
    - MagentoCloud fixes.
    - Prevent possible memory exhausted error.
 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.1 (was 1.5.0)
    - Don't show low stock label for products with zero qty. (Backordered products)
 -  [QuantitySwitcher](/m2/extensions/qty-switcher/) — 1.1.5 (was 1.1.4)
    - RTL fixes.
 -  [SlickCarousel](/m2/extensions/slick-carousel/) — 1.3.3 (was 1.3.2)
    - RTL fixes.
 -  [SoldTogether](/m2/extensions/soldtogether/) — 1.6.6 (was 1.6.5)
    -   Rework templates to make blocks work at checkout success page. Carousel
        template can be used for frequently bought together block also.

### Version 1.15.1

> Jan 31, 2020

 -  Magento 2.3.4 compatibility:
    -  Fixed newsletter block styles.
    -  Fixed jumping "Product Page" when clicking on a tab.
    -  Fixed customer menu dropdown styles.
    -  Fixed too small homepage images.
 -  [ProLabels](/m2/extensions/prolabels/) is now integrated into
    [AMP](/m2/extensions/amp/) pages.
 -  Minor CSS fixes.

**Extensions Updates**

 -  [Ajax Pro](/m2/extensions/ajaxpro/) — 1.4.16 (was 1.4.15)
    - 'Grouped products' support added.
    - Code cleanup.
 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.8.6 (was 1.8.4)
    - Magento 2.2 compatibility
    - Fixed Elastcsearch ItemProvider fatal in Magento 2.3.1
 -  [Easybanner](/m2/extensions/easybanners/) — 1.5.1 (was 1.5.0)
    - Fixed incorrect newsletter block width in Magento 2.3.4
 -  [Easytabs](/m2/extensions/easytabs/) — 1.8.5 (was 1.8.4)
    - Fixed not working ajax tabs at [AMP](/m2/extensions/amp/) pages.
    - Stability improvements.
 -  [GDPR](/m2/extensions/gdpr/) — 1.2.2 (was 1.2.1)
    - Fixed broken ACL resources page in Magento older than 2.3.4
    - Fixed too large margin in newsletter checkbox in Magento 2.3.4
 -  [LightboxPro](/m2/extensions/lightboxpro/)
    - Fixed incorrectly sized image in Magento 2.3.3 when magnifier is used.
    - Fixed incorrectly sized thumbnail when gallery is shown on non-product view page.
      (In third-party ajax popups at home and category pages, for example.)
    - Code cleanup. (Removed fixes for old Magento versions (2.0, 2.1))
 -  [NavigationPro](/m2/extensions/navigationpro/) — 1.13.6 (was 1.13.5)
    - Fixed invisible dropdowns in sidebar menu, when it has `.navro-nowrap` class.
 -  [Pagespeed](/m2/extensions/pagespeed/) — 1.3.12 (was 1.3.10)
    - Fixed broken 'Bundle Product' page when JS Defer is enabled.
    - Fixed multiple '.webp' extensions added to the filename.
    - Code cleanup.
 -  [ProLabels](/m2/extensions/prolabels/) — 1.5.0 (was 1.4.1)
    - [AMP](/m2/extensions/amp/) integration added.
    - Improved 'Final Price' calculation for configurable products.
    - Code cleanup.
 -  [QtySwitcher](/m2/extensions/qty-switcher/) — 1.1.4 (was 1.1.3)
    - Fixed incorrect available quantities per selected configurable product.

### Version 1.15.0

> Jan 17, 2020

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-1142---1150)

 -  New [**Pagespeed module**](/m2/extensions/pagespeed/) added
 -  Theme Editor: allow using SVG base64 in background image config
 -  Improved toolbar sorter styles on mobile devices
 -  Fixed distorted images on mobile devices
 -  Argento Essence: improved sidebar products styles on mobile devices
 -  Argento Stripes: fixed homepage banners styles
 -  Argento Force: fixed missing reviews form at product page on Magento 2.2.x
 -  Argento Flat and Pure 2: enabled lazyload for brands slider

**Extensions Updates**

 -  [Ajax Pro](/m2/extensions/ajaxpro/) — 1.4.15 (was 1.4.13)
    -   Fixed add to cart for products with options
    -   Added display of backorders notifications
 -  [Ajax Search](/m2/extensions/ajaxsearch/) — 1.8.4 (was 1.8.3)
    -   Added Elasticsearch integration
    -   Fixed missing suggestions popup for second query
 -  [AMP](/m2/extensions/amp/) — 1.3.8 (was 1.3.7)
    -   Allowed CMS block widgets on AMP
    -   Removed loader when critical CSS is enabled
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.2.2 (was 1.2.1)
    -   Do not display products not assigned to any category
 -  [Easy Tabs](/m2/extensions/easytabs/) — 1.8.4 (was 1.8.2)
    -   Fixed error when using module on Magento Cloud
    -   Fixed not loaded reviews when expanded layout enabled
 -  [GDPR](/m2/extensions/gdpr/) — 1.2.1 (was 1.2.0)
    -   Fixed broken ACL resources page
 -  [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.2 (was 1.3.1)
    -   Don't render prolabels for hover image
 -  [Navigation Pro](/m2/extensions/navigationpro/) — 1.13.5 (was 1.13.3)
    -   Fixed issues with Magento Page Builder inside NavigationPro forms
    -   Fixed ‘X-Magento-Tags’ header size issue
    -   Display message about incorrect category data when importing items
 -  [Seo Suite](/m2/extensions/seo-suite/) — 1.8.3 (was 1.8.1)
     -  Added translation files to all modules
     -  Improved compatibility with Magento Commerce Cloud
     -  *Seo Canonical*:
         -  Do not add canonical to root category
     -  *Rich Snippets*:
         -  Fixed possible PHP notice $offers is undefined
     -  *Seo Images*:
         -  Compatibility with Magento 2 Commerce
     -  *Seo URLs*:
         -  Show 404 page when unrecognized characters found in url

### Version 1.14.2

> Dec 6, 2019

 -  New option for product tabs - load content with ajax. More details you can find at [Swissup Easytabs module](/m2/extensions/easytabs/) docs.
 -  New banner [Exit-intent](/m2/extensions/easybanners/interfaces/#conditions-tab) popup added. Check [Newsletter popup example](/m2/extensions/easybanners/use-cases/newsletter-popup/) powered by Swissup Easybanners module.
 -  New SEO feature - templates for product image alternate text. Check more details at [Swissup Metadata Template module](/m2/extensions/seo-templates/) docs.
 -  Few style improvements for product page of grouped product at all themes.
 -  Stripes theme got better product page styles. No more content floating and jumping. All parts of product page are at the same places at any product. Slightly changed product image gallery at mobile view.
 -  Force theme product page looks perfect when expanded layout for tabs enabled.
 -  Force theme - fixed missing review form at product on Magento 2.2.x.

**Extensions Updates**

**swissup/module-ajaxsearch — 1.8.3** (was 1.8.1)

 -  Product price in search results respects tax include/exlude setting.

**swissup/module-amp — 1.3.7** (was 1.3.6)

 -  Fixed overlap for long submenus.

**swissup/module-easybanner — 1.5.0** (was 1.4.0)

 -  [Exit-intent](/m2/extensions/easybanners/interfaces/#conditions-tab) popup banners added.
 -  Fixed non-editable date field in backend conditions tab.
 -  JS code improvements.

**swissup/module-easytabs — 1.8.2** (was 1.7.3)

 -  New option for tab "Load content with Ajax". The biggest benefit from this option is reduce initial page size.
 -  Totally reworked admin interfaces for tab editing. Edit form build as Magento 2 UI Component. It looks up to date and works like a charm.
 -  No more separate grids for product tabs and widget tabs. All in one place. Product tabs has field "Hide on Product" as No and widget tabs "Hide on Product" - Yes.
 -  Block HTML cache and Full Page Cache marked as invalidated after tab save.

**swissup/module-highlight — 1.5.5** (was 1.5.4)

 -  Added "alt" to higllight title-images (mostly used when carousel enabled).
 -  Fixed duplicated 2nd page in casousel when there are products only for one page.
 -  Fixed carousel when it didn’t show more then two pages even when there are more products available.

**swissup/module-hover-gallery — 1.3.1** (was 1.3.0)

 -  Fixed always visible hover image at Magento 2.2.x.
 -  Respect image visibility.

**swissup/module-navigationpro — 1.13.3** (was 1.13.1)

 -  Prevent unwanted accordion collapse on mobile devices when click outside of the menu.
 -  Fixed invalid category links when using iconic or megamenu with thumbnails menu types.
 -  Fixed bug when new category wasn’t added to the menu’s.

**swissup/module-pro-labels — 1.4.1** (was 1.3.7)

 -  Added advanced text editor for product labels text and CSS in Magento AdminAdvanced text editor based on CodeMirror library.
 -  Fixed missing onSale label for grouped products.
 -  Improve stability at frontend. Prevent division by zero. Occurs when product special price is 0.

**swissup/module-reviewreminder — 1.1.3** (was 1.1.2)

 -  Fixed wrong grouped products link in email.
 -  Fixed rare issue when customer email is empty

**swissup/module-rich-snippets — 1.4.5** (was 1.4.4)

 -  Change how configurable product is presented in data snippet. Now it is a product with multiple offers.
 -  User can specify properties in `offers` and `aggregatedRating` parts of data snippet. It is possible with "Structured data" option in config. Syntax example for "Property Name" column - `offers/mpn`.

**swissup/module-slick-carousel — 1.3.2** (was 1.3.1)

 -  Fixed distorted slider images on mobile devices.

**swissup/module-seo-templates — 1.5.3** (was 1.4.2)

 -  Generate alternate text for product images.
 -  CLI command to generate metadata - `bin/magento swissup:seotemplates:generate`.
 -  Significant improvements for metadata generation via Cron. No more problems with Magento Cache when job is running.

**swissup/module-sold-together — 1.6.5** (was 1.6.4)

 -  Fixed message "Requested product does not exists" on edit product in Magento Admin. Error occurs when assigned product deleted.
 -  Fixed infinit loader in "Add Customers Bought Together" popup at product edit in Magento Admin when popup open before before "Add Frequently Bought Products" popup.
 -  New breakpoints in carousel for "Customers also buy" widget.

### Version 1.14.1

> Oct 16, 2019

 -  Magento 2.3.3 compatibility.
 -  Font preload added to improve PageSpeed rank. To make this possible we've
    moved google fonts from CDN to local theme resources.
 -  Fixed possible missing [NavigationPro](/m2/extensions/navigatiopro/) menu
    after theme installation.
 -  Fixed blurry images in header cart and hover images when using ArgentoStripes
    or ArgentoLuxury theme.

**Extensions Updates**

 -  Magento coding standard fixes in all modules.
 -  Removed direct "jquery/ui" usage in all modules to impove PageSpeed rank.
 -  Improved [HoverGallery](/m2/extensions/hover-gallery/) images generation.
 -  [SeoImages](/m2/extensions/seo-images/): Improved generated image path when
    watermarks are used.
 -  Fixed missing watermark in [LightboxPro](/m2/extensions/lightboxpro/) popup.

### Version 1.14.0

> Sep 27, 2019

 -  New [Slideout](/m2/extensions/navigationpro/use-cases/slideout-menu/) menu
    type added to NavigationPro module.
 -  New [SeoImages](/m2/extensions/seo-images/) module added. It allows you to
    build product image name based on product name and/or product attributes.
 -  Fixed blurry product images in minicart popup.
 -  Code cleanup.

**Extensions Updates**

**swissup/module-ajaxpro — 1.4.11** (was 1.4.10)

 -  Removed crosssell block from simple type popup
 -  Improved performance when using cart popup

**swissup/module-hreflang — 1.3.1** (was 1.3.0)

 -  Fixed exception "Illegal state..." at some Magento instances on AMP.
 -  Get rid of around plugins. Slightly improve TTFB.
 -  Compatibility with Magento 2.3.x.

**swissup/module-navigationpro — 1.13.0** (was 1.12.0)

 -  [Slideout](/m2/extensions/navigationpro/use-cases/slideout-menu/) menu type added.
 -  New "Air" theme added with borderless shadowed dropdowns.
 -  Simplified CSS modifiers usage. You can now select them
    from the [list](/m2/extensions/navigationpro/backend/menu-settings/#modifiers).
    Previously you had to write them manually into CSS Class field.
 -  Added ability to write [custom CSS](/m2/extensions/navigationpro/backend/menu-settings/#general-settings)
    from Edit Menu page.
 -  Simplified menu creation. You can create [many menu](/m2/extensions/navigationpro/menu-types)
    types with just one click.
 -  Improved [Amazon Menu](/m2/extensions/navigationpro/use-cases/amazon-menu/)
    type builder. Now, it automatically shows parent category thumbnail
    in second level dropdowns.
 -  Improved [Megamenu](/m2/extensions/navigationpro/use-cases/megamenu/)
    type builder. Now, it automatically shows parent category thumbnail
    in category dropdown.
 -  New effects added to reveal menu dropdowns: Fade, SlideIn, SlideOut, None.
 -  Improved dropdown positioning.
 -  Many CSS fixes for Dark, Compact, and Flat themes.

**swissup/module-seo-urls — 1.5.5** (was 1.5.4)

 -  Get rid of around plugin when redirect to CMS homepage.
 -  Fixed DI compilation when hreflang is not installed at all.

### Version 1.13.3

> Sep 25, 2019

 -  Meet latest Magento coding standarts requirements. Remove serialize from theme installers.
 -  Theme installers - lazy load for brand sliders.
 -  Fixed scroll to top when click review star at review form at Argento Force.
 -  Minor fixes in Swissup EasySlide and Swissup AMP modules.

### Version 1.13.2

> Sep 13, 2019

 -  Fixed error during static content deployment when ajaxsearch is disabled.
 -  Improved styles for product listing in sidebar.
 -  Minor CSS improvements for Easy Catalog Images, Slick Carousel and Highlight modules.
 -  Fixes for Argento Force theme:
     -  qty field toggler position in latest Chrome browser;
     -  qty field padding on cart page in Firefox;
     -  layered navigation - align on desktop and nowrap for subtitle;
     -  mobile navigation - Account - remove pointer bakcrground when active.

**Extensions Updates**

 -  [Ajaxsearch](/m2/extensions/ajaxsearch/) — 1.8.1 (was 1.8.0):
     +  Fix: remove cms page dublication in search result.

 -  [Askit](/m2/extensions/askit/) — 1.6.2 (was 1.6.1):
     +  Fix: redirect+coockie message.

 -  [EasySlide](/m2/extensions/easyslider/) — 1.5.0.1 (was 1.4.0):
     +  New highly demanded features - lazy load and responsive images for slides.
     +  Updated slider JS library (swiper) for better performance.
     +  Reworked admin interfaces. Build according latest Magento 2 trends (UI components).

 -  [Easytabs](/m2/extensions/easytabs/) — 1.7.1 (was 1.7.0):
     +  Fixed no tabs when widget is added via Magento Admin interface.

 -  [RichSnippets](/m2/extensions/richsnippets/) — 1.4.3 (was 1.4.2):
     +  Show correct price in snippet when including tax enabled;
     +  Fixed Magento Coding Standard error - no explicit Proxy in contructor.

### Version 1.13.1

> Aug 21, 2019

 -  Improved layered navigation styles when using 1column layout for (All themes).
 -  Fixed 'select all/unselect all' labels in dropdown elements at product page
    when product has related products (All themes).
 -  ArgentoForce fixes:
    -  Fixed qty dropdown overlap with Paypal buttons.
    -  Added missing 'Additional CSS' field in backend editor.
    -  Improved spacing between 'addto' and 'paypal' buttons.
    -  Small fixes for category pages when using 3columns/2columns-right layouts.

### Version 1.13.0

> Aug 19, 2019

Argento 1.13.0 brings a new [**ArgentoForce**](/m2/argento/force/) theme,
two new features, and **A LOT** of CSS improvements for all existing
themes.

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v1130 class="phone-up-1 tablet-up-3 photoswipe" %}

 -  New [ArgentoForce](/m2/argento/force/) theme added.
 -  Ability to create [sticky 'Add to Cart' panel](/m2/argento/customization/add-sticky-tocart/)
    at product page.
 -  Ability to [add large product photo to the product description](/m2/argento/customization/add-photo-in-description/)
 -  Recently viewed products carousel added to the bottom of category pages.
 -  Improved search results dropdown styles.
 -  Refined minicart styles for all themes.
 -  Shopping Cart page improvements for all themes.
 -  Many small CSS fixes and improvements.

**Extensions Updates**

 -  [swissup/module-ajaxpro](/m2/extensions/ajaxpro/) — 1.4.10 (was 1.4.8)
    - Fixed possible redirect to broken page after ‘Add to Cart’ action.
 -  [swissup/module-ajaxsearch](/m2/extensions/ajaxsearch/) — 1.8.0 (was 1.7.1)
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
 -  [swissup/module-amp](/m2/extensions/amp/) — 1.3.5 (was 1.3.4)
    -  Fixed DOMDocument empty string warning caused by third-party menu modules.
 -  [swissup/module-askit](/m2/extensions/askit/) — 1.6.1 (was 1.6.0)
    -  Fixed grid mass action title(s).
 -  [swissup/module-easy-slide](/m2/extensions/easyslider/) — 1.4.0 (was 1.3.3)
    -  Added ability to use Magento directives in slider description field.
    -  Improved slider rendering when slide url is not set.
 -  [swissup/module-easycatalogimg](/m2/extensions/easycatalogimages/) — 1.4.4 (was 1.4.3)
    -  Added ability to show parent category link as button. Used at ArgentoForce theme.
 -  [swissup/module-easytabs](/m2/extensions/easytabs/) — 1.7.0 (was 1.6.0)
    -  New tab condition - Show tab for selected Product Type only
 -  [swissup/module-hover-gallery](/m2/extensions/hover-gallery/) — 1.2.1 (was 1.2.0)
    -  Don’t add hover image if it is the same as main image.
    -  LESS variables to customize transition effect.
 -  [swissup/module-hreflang](/m2/extensions/seo-suite/) — 1.3.0 (was 1.2.3)
    -  Integrate with Swissup AMP: Add hreflangs to the head of AMP variant of page.
 -  [swissup/module-lightboxpro](/m2/extensions/) — 1.2.4 (was 1.2.3)
    -  Added new variables for easier customization by third-party theme developers.
 -  [swissup/module-navigationpro](/m2/extensions/) — 1.12.0 (was 1.11.1)
    -  [Mass edit feature](/m2/extensions/navigationpro/ui/menu-items-mass-edit/) added.
    -  Added ability to set
       [global item settings](/m2/extensions/navigationpro/backend/menu-settings/#global-item-settings)
       based on item level.
    -  Added ability to sync [item](/m2/extensions/navigationpro/backend/menu-edit/#advanced-settings)
       and [dropdown](/m2/extensions/navigationpro/backend/menu-edit/#dropdown-settings)
       settings with global settings from menu.
    -  Improved default value for dropdown layout settings in each item. Now it
       shows properly inherited dropdown layout.
    -  Added ability to hide html content/widget
       [when item has no children](/m2/extensions/navigationpro/ui/dropdown-layout-builder/#widget-or-plain-html).
    -  Added ability to use
       [depend and var directives](/m2/extensions/navigationpro/ui/menu-item-name-as-html/#available-variables)
       for item name renderer.
    -  All styles moved to `_module.less`. This allows easely redefine navigationpro
       variables within your theme.
    -  Improved [nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/) logic.
    -  Do not allow to import root category as it's cannot be rendered at frontend.
    -  Fixed possible js errors when rendering dropdown content at the backend.
    -  Fixed always enabled wysiwyg editors. Now they are disabled by default.
 -  [swissup/module-pro-labels](/m2/extensions/) — 1.3.5 (was 1.3.2)
    -  Fixed missing category labels on Magento 2.3.x (after fixed missing special price at listings in Magento 2.2.x in previous release).
    -  Fixed missig special price at listing when ProLabels enabled.
 -  [swissup/module-quantity-switcher](/m2/extensions/qty-switcher/) — 1.1.1 (was 1.1.0)
    -  Added dropdown switcher type.
 -  [swissup/module-seo-html-sitemap](/m2/extensions/seo-suite/) — 1.1.3 (was 1.1.2)
    -  Don't show disabled CMS pages on sitemap.
 -  [swissup/module-seo-urls](/m2/extensions/seo-suite/) — 1.5.4 (was 1.5.3)
    -  Don't reset router params in search url. (Third-party modules integration).
 -  [swissup/module-sold-together](/m2/extensions/sold-together/) — 1.6.3 (was 1.6.2)
    -  Customers Also Bought - don't add tocart checkbox for composit items.
       Composit items are configurable, bundle or grouped products.
    -  Remove module blocks from AjaxPro popup.

### Version 1.12.0

> Jul 1, 2019

This release includes Magento 2.3.2/2.2.9 compatibility of Argento Themes and
updates for modules shipped together with Argento.

 -  Magento 2.3.2/2.2.9 compatibility
 -  Expand layered navigation mixin moved to Blank and can be used in any theme
 -  Fixed missing newsletter subscribe button in Magento 2.3.2/2.2.9
 -  Fixed newsletter block styles when GDPR enabled in Luxury theme

**Extensions Updates**

 -  [Ajaxpro](/m2/extensions/ajaxpro/) — 1.4.8 (was 1.4.7)
    -   Fixed not working cart button when slide mode enabled
 -  [Ajaxsearch](/m2/extensions/ajaxsearch/) — 1.7.1 (was 1.7.0)
    -   Improved search block loading speed
 -  [AMP](/m2/extensions/amp/) — 1.3.4 (was 1.3.3)
    -   Fixed disabled add to cart button in Magento 2.3.2/2.2.9
    -   Fixed wrong image sizes on category page
 -  [Askit](/m2/extensions/askit/) — 1.6.0 (was 1.5.0)
    -   Added [Swissup AMP](/m2/extensions/amp/) module integration
    -   Added size for Gravatar image
 -  [Easytabs](/m2/extensions/easytabs/) — 1.6.0 (was 1.5.2)
    -   Added [Swissup AMP](/m2/extensions/amp/) module integration
    -   New condition to display tab only when AMP enabled
 -  [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.0 (was 1.0.0)
    -   Added new switcher type: dropdown

### Version 1.11.0

> Jun 12, 2019

This release includes some style fixes in Argento Themes and a lot of updates
for modules shipped together with Argento:

 -  [Ajaxpro](/m2/extensions/ajaxpro/) — 1.4.7 (was 1.4.5)
    -   Fix warning during DI compilation at Magento 2.1.x.
    -   Code cleanup
 -  [Ajaxsearch](/m2/extensions/ajaxsearch/) — 1.7.0 (was 1.6.0)
    -   New alternative search method for MySQL Search Engine - "LIKE". It
        allows to search for strings with dash (-), one-two-character substrings
        and has other algorithm for relevance. Can be enabled in module
        configuration under
        ["MySQL Search Engine" section](/m2/extensions/ajaxsearch/configuration/#mysql-search-engine).
    -   Fixed disabled 'Search' button when folded design is used (ArgentoLuxury
        and ArgentoFlat themes)
    -   Code cleanup
 -  [AMP](/m2/extensions/amp/) — 1.3.3 (was 1.3.2)
    -   Fixed possible duplicate amphtml pages for configurable products
 -  [Askit](/m2/extensions/askit/) — 1.5.0 (was 1.4.1)
    -   Style improvements
    -   Hide question form by default (A button 'Ask Question' is shown instead)
    -   Backend form improvements
    -   Code cleanup
 -  [EasySlide](/m2/extensions/easyslider/) — 1.3.3 (was 1.3.1)
    -   Fixed invalid data in the grid after filters reset.
 -  [Easycatalogimg](/m2/extensions/easycatalogimg/) — 1.4.3 (was 1.4.2)
    -   Fixed ability to apply different thumbnail per store view.
 -  [Easytabs](/m2/extensions/easytabs/) — 1.5.2 (was 1.5.0)
    -   Fixed error during data install (area code not set).
 -  [Fblike](/m2/extensions/fblike/) — 1.3.2 (was 1.3.1)
    -   Stability improvements in js code
 -  [GDPR](/m2/extensions/gdpr/) — 1.2.0 (was 1.1.1)
    -   Account newsletter management page support added.
    -   Fixed missing accepted consents at 'privacy tools' page.
    -   Fixed not working link to the customer account page from the requests grid.
    -   Fixed not-working autocomplete in forms when gdpr is enabled for this form.
    -   Code cleanup.
 -  [HoverGallery](/m2/extensions/hover-gallery/) — 1.2.0 (was 1.1.1)
    -   Code improvements.
 -  [Hreflang](/m2/extensions/hreflang/) — 1.2.3 (was 1.2.2)
    -   Improved integration with pages for third-party modules - Swissup AskIt,
        Swissup Highlight and Swissup EasyCatalogImg
 -  [Navigationpro](/m2/extensions/navigationpro/) — 1.11.1 (was 1.9.3)
     -  Added ability to [activate dropdowns with click](/m2/extensions/navigationpro/use-cases/click/)
        instead of mouseover.
     -  [Accordion menu](/m2/extensions/navigationpro/use-cases/sidebar-menu/#&gid=1&pid=3) added.
     -  Nowrap feature [improved](/m2/extensions/navigationpro/use-cases/nowrap/#offset-feature).
     -  Improved backend [dropdown layout builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/).
        Now it shows a preview of what customer will see on the frontend when
        changing children settings or html content.
     -  Added ability to limit number of categories to display in dropdown.
        When using this option, a 'Shop All' link will be displayed if children count
        exceed the limit. [View Megamenu Example](/m2/extensions/navigationpro/use-cases/megamenu/).
     -  Improved cache cleanup when edit menu settings or create new menu. No more
        manual cache update after each operation!
     -  New categories are now automatically synced into appropriate menu's. You don't
        need to manually import new categories into the tree!
 -  [ProLabels](/m2/extensions/prolabels/) — 1.3.2 (was 1.3.0)
     -  Use JSON to store labels conditions instead of "serialize".
     -  Show labels in recently viewed products widget.
     -  Fixed lables index update when save configurable product.
     -  Fixed incorrect prices in labels when tax included in price. Respect tax settings.
     -  Improve OnSale label determination for configurable products.
 -  [Reviewreminder](/m2/extensions/reviewreminder/) — 1.1.1 (was 1.1.0)
    -   Fixed missing delete button on the edit form
    -   Fixed save and continue from products tab
 -  [RichSnippets](/m2/extensions/richsnippets/) — 1.4.2 (was 1.4.1)
    -   Slightly improved product description for structured data.
 -  [SeoCanonical](/m2/extensions/seo-canonical/) — 1.0.3 (was 1.0.2)
    -   Improve module stability.
 -  [SeoPager](/m2/extensions/seo-pager/) — 1.2.0 (was 1.1.1)
    -   New feature - add page number to title of page where paginated content presented.
    -   Improved integration with Catalog Search pages.
 -  [SeoTemplates](/m2/extensions/seo-templates/) — 1.4.0 (was 1.3.0)
    -   New option for 'attribute' directive - `max_length` (set max allowed
        length for output). It can be usefull for attributes with long content.
    -   HTML tags removed from output of 'attribute' directive when respective
        attribute has marked as "html allowed".
    -   New config section "Optimize metadata" where you can set optimal length
        for metadata.
 -  [SeoUrls](/m2/extensions/seo-urls/) — 1.5.3 (was 1.5.1)
    -   Fixed compatibility with latest Swissup Ajaxsearch module.
        (“Nothing found” message appeared for any instant search request.)
 -  [SoldTogether](/m2/extensions/soldtogether/) — 1.6.2 (was 1.4.2)
    -   Fix warning during DI compilation at Magento 2.1.x.
    -   Prevent unwanted products in the cart after check/uncheck some checkboxes.
    -   Added ability to show suggestions based on shopping cart items. See
        [firecheckout intro popup example](/m2/extensions/firecheckout/customization/use-cases/intro-popup/#frequently-bought-together)
    -   Added mass action "Delete" at module grids. Now you can delete multiple relations at once.
    -   CLI commands to index/reindex Sold Together relations with bin/magento commands.
    -   Code cleanup

### Version 1.10.0

> May 02, 2019

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v1100 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

 -  **Clean [configurable](/m2/argento/customization/checkout-styles/) checkout styles**
    —   This improvement will increase conversion rate and overall customer
        experience when browsing your store.
 -  **Refined compare toolbar** — Now it doesn't take a space in the header and
    remains visible on mobile devices.
 -  **Conditional tabs** in EasyTabs module.
 -  Refined ['Scroll to Top' button styles](/m2/argento/customization/add-scroll-up/).
 -  Small CSS fixes and improvements.
 -  RTL style fixes.
 -  ArgentoEssence:
    -   Fixed ability to change columns count in EasyCatalogImages widget on the homepage.
 -  ArgentoLuxury:
    -   Alternative logo option moved to the default Magento's logo option page:
        _Content > Design > Configuration_.
 -  ArgentoStripes:
    -   Added ability to [show quantity field](/m2/argento/stripes/customization/#show-qty-field-at-product-page)
        at the product page.
    -   Improved styles of contacts page.
    -   Fixed missing "Recently Viewed" block.
 -  Custom Themes:
    -   Fixed CSS and alternative logo issues in custom themes that are inherited
        from Luxury theme.

**Extensions Updates**

 -  [Ajaxpro](/m2/extensions/ajaxpro/)
    - Fixed css issue with argento 'compare products' toolbar
    - RTL fixes for floating cart mode
    - Fixed 'Delete item' confirmation popup behind overlay
 -  [Ajaxsearch](/m2/extensions/ajaxsearch/)
    - Added ability to show 'Popular Search Terms' when focusing empty search field
        (See _Stores > Configuration > Swissup > Ajaxsearch > Popular Search Terms Suggestions_ options.)
    - Small JS and CSS fixes
 -  [AMP](/m2/extensions/amp/)
    - FPC compatibility fixes
    - Fixed cache issue with navigation block
 -  [EasyCatalogImg](/m2/extensions/easyslider/)
    - CSS improvements
 -  [EasyFlags](/m2/extensions/easyflags/)
    -   Fix delete image for store view. Previously it was not possible to
        remove image assigned to store view.
    -   Improve compatibility with Magento 2.2.0.
 -  [EasySlide](/m2/extensions/easyslider/)
    - Fixed warning in logs about missing .map source file
 -  [EasyTabs](/m2/extensions/easytabs/)
    -   New feature - conditions for tabs. Now it is possible to show tab when
        customer is signed in or when product has some attribute value.
    -   Improved stability when there is tab for some third-party module but
        module is disabled or removed.
 -  [Fblike](/m2/extensions/facebooklikebutton/)
    - Improve CSS for custom button.
    - Fix not initialized like buttons. Update Facebook SDK.
 -  [Highlight](/m2/extensions/highlight/)
    - Fixed missing title image in magazine layout
    - Fixed invalid currency code when cache is enabled
 -  [Lightboxpro](/m2/extensions/lightboxpro/)
    - Fixed Vimeo video on product page
 -  [SeoSuite](/m2/extensions/seo-suite/)
    - Fixed structured data error for grouped and bundle products - `offerCount` can’t be empty.
    - Compatibility with PHP 7.2.
 -  [Testimonials](/m2/extensions/testimonials/)
    - Fixed image resize when height is empty

### Version 1.9.1

> Mar 29, 2019

 -  Magento 2.3 compatibility
 -  Small CSS improvements for RTL languages

**Extensions Updates**

 -  [Ajaxpro](/m2/extensions/ajaxpro/)
    - Fixed static content deployment on Magento 2.3 (There was an error about
      missing swatches.less file)
 -  [Ajaxsearch](/m2/extensions/ajaxsearch/)
    - Fixed possible XSS vulnerability
    - Fixes for RTL styles
    - Style improvements in search dropdowns
 -  [AMP](/m2/extensions/amp/)
    - Magento 2.3.1 compatibility (Fixed missing tabs at product page)
    - New customization [abilities added](/m2/extensions/amp/use-cases/#remove-tag)
 -  [EasySlide](/m2/extensions/easyslider/)
    - Magento 2.3.1 compatibility (Fixed broken backend form)
    - Added ability to start slider from [random slide](/m2/extensions/easyslider/interfaces/#slider-parameters)
 -  [GDPR](/m2/extensions/gdpr/)
    - Fixed mysql error on client consents page when table prefixes are used
 -  [HoverGallery](/m2/extensions/hover-gallery/)
    - Fixed broken html markup when product name has special symbols in the name
    - Removed invalid 'srcset' attribute
 -  [NavigationPro](/m2/extensions/navigationpro/)
    - Magento 2.3.1 compatibility (Fixed horizontal scrollbar)
    - Fixed invalid breadcrumbs when multiple menu's found on the same page
 -  [ProLabels](/m2/extensions/prolabels/)
    - Magento 2.3 compatibility (Fixed broken file uploader)
 -  [SoldTogether](/m2/extensions/soldtogether/)
    - RTL styles added
 -  [Testimonials](/m2/extensions/testimonials/)
    - Magento 2.3 compatibility (Fixed broken file uploader)

### Version 1.9.0

> Feb 26, 2019

 -  **Quantity Switcher** [module added](/m2/extensions/qty-switcher/)
 -  **8 New badges** added to [ProLabels module](/m2/extensions/prolabels/#version-126)

**Fixes and improvements**

 -  Fixed empty mobile navigation sidebar in ArgentoLuxury in Safari browser
 -  Fixed product gallery styles for RTL locales
 -  Fixed footer overlapping issue in IE11
 -  Fixed header styles in ArgentoFlat for medium screens
 -  Fixed broken editor in custom CSS field when js minification is enabled
 -  Fixed incorrect markup in product image in AMP site version
 -  Fixed incorrect canonical URL for homepage

**Extensions Updates**

 -  **AjaxSearch**: Added ability to disable directly from module configuration
 -  **Askit**: Added ability to write response in with html tags (for Admin users only)
 -  Small fixes in
    [AjaxPro](/m2/extensions/ajaxpro/changelog/#version-143),
    [AMP](/m2/extensions/amp/changelog/#version-121),
    [Askit](/m2/extensions/askit/changelog/#version-140),
    [EasyCatalogImages](/m2/extensions/easycatalogimages/changelog/#version-141),
    [NavigationPro](/m2/extensions/navigationpro/changelog/#version-192),
    [Highlight](/m2/extensions/highlight/changelog/#version-151),
    [RichSnippets](/m2/extensions/richsnippets/changelog/#version-131),
    [Testimonials](/m2/extensions/testimonials/changelog/#version-123),
    Suggestpage,
    and [SeoCrossLinks](/m2/extensions/seo-cross-links/changelog/#version-101)
    modules.

### Version 1.8.0

> Jan 4, 2019

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v180 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

 -  Mobile-view styles improvements for the homepage in Argento Stripes theme.
 -  A lot of tiny mobile-view improvements in the header for all themes:
    - Icons alignment
    - Border and background color fixes
    - Logo alignment
 -  **More SEO features!**
    - [CrossLinks](/m2/extensions/seo-cross-links/)
    - [Canonical URL](/m2/extensions/seo-canonical/)
    - And a lot of must-have [fixes and improvements](/m2/extensions/seo-suite/changelog/#version-130)
 -  **AMP improvements**
    - "Add to cart" support for configurable products added
    - Rich snippets support added
    - Attributepages support added
    - Highlight pages support added
    - Cookie restriction mode added
    - Magento 2.1 and 2.2 compatibility fixes

**Fixes and improvements**

 -  Fixed 'Phantom Scrolling' bug in Chrome, when sticky menu us used
 -  Fixed empty sidebar menu in Safari browser in ArgentoFlat and ArgentoPure2 themes
 -  Fixed missing product image at the shopping cart page
 -  Fixed scroll to footer on page resize
 -  Fixed scroll to product list in ArgentoStripes and ArgentoLuxury themes at the
    category pages, when layered navigation is enabled

**Extensions Updates**

Almost all modules were updated with small improvements and fixes. Here is a few
highlighted changes:

 -  Many small fixes into variety of modules:
    - Better Magento 2.1 and 2.2 compatibility
    - CSS fixes and code cleanup
 -  Bugfixes:
    - Askit (Askit form on the homepage)
    - Easybanner (Broken backend charts on slow networks)
    - Highlight (Mobile style fixes)
    - Prolabels (Improved labels calculation for the children of configurable product,
        Fixed label reindex in Magento Commerce version)
    - SoldTogether (Fixed DB error during reindex, Magento 2.3 fixes, carousel
        styles fixes)

### Version 1.7.2

> Dec 4, 2018

 -  Magento 2.3.0 and 2.2.7 compatibility
 -  Fixed horizontal scrollbar on mobile devices
 -  Added missing image size config in view.xml (Magento 2.3.0 fix)

**Extensions Updates**

**swissup/module-ajaxpro — [1.4.2](/m2/extensions/ajaxpro/)** (was 1.4.1)

 -  Fixed 404 error (swatches.css file) in Magento 2.3.0
 -  Prevent accident shopping cart popup window when browsing accross the site

**swissup/module-ajaxsearch — [1.4.1](/m2/extensions/ajaxsearch/)** (was 1.4.0)

 -  Added 2.2.7 and 2.3.0 compatability
 -  Fixed broken CSS styles on the iPhone devices
 -  Fixed not working "Search" button on iOS devices

**swissup/module-attributepages — [1.1.1](/m2/extensions/attributepages/)** (was 1.1.0)

 -  Widget template updated according to the latest SlickCarousel module

**swissup/module-highlight — [1.4.1](/m2/extensions/highlight/)** (was 1.4.0)

 -  Widget template updated according to the latest SlickCarousel module
 -  Prevent possible non-seo links

**swissup/module-hreflang — [1.2.1](/m2/extensions/hreflang/)** (was 1.2.0)

 -  Remove not used `use` statement (Magento 2.3.0 compatibility)

**swissup/module-lightboxpro — [1.2.1](/m2/extensions/lightboxpro/)** (was 1.2.0)

 -  Magento 2.3.0 fixes
 -  Added correct alt text for preloading image

**swissup/module-navigationpro — [1.8.1](/m2/extensions/navigationpro/)** (was 1.8.0)

 -  Improved column-count calculation in Chrome browser

**swissup/module-pro-labels — [1.2.2](/m2/extensions/prolabels/)** (was 1.2.1)

 -  Performance improvements
 -  Improved javascript stability
 -  Slightly improved admin styles
 -  Improved logic to check if product has discount

**swissup/module-seo-pager — [1.1.1](/m2/extensions/seo-pager/)** (was 1.1.0)

 -  Added note in config about SEO Pagination

**swissup/module-seo-urls — [1.5.0](/m2/extensions/seo-urls/)** (was 1.3.2)

 -  New option added to enable rel="nofolow" in the layered navigation links
 -  Fixed possible js erorr when colorswatches are used in product listing
 -  Improved autogenerated URLs values
 -  Fixed possible fatal error when toggle canonical url option in config

**swissup/module-seo-xml-sitemap — [1.1.1](/m2/extensions/seo-xml-sitemap/)** (was 1.1.0)

 -  Use the same images as used on storefront. (Previosly Sitemap generated
    images that does not exist at storefront)

**swissup/module-slick-carousel — [1.3.0](/m2/extensions/slick-carousel/)** (was 1.2.0)

 -  SlickCarousel library updated 1.8.1

**swissup/module-sold-together — [1.4.0](/m2/extensions/soldtogether/)** (was 1.3.1)

 -  Template updated according to the latest SlickCarousel module
 -  Correct order for items at admin edit product page
 -  Fixed "Item with ID aleady exists" error
 -  Source code improvements

**swissup/module-testimonials — [1.2.1](/m2/extensions/testimonials/)** (was 1.2.0)

 -  Template updated according to the latest SlickCarousel module

### Version 1.7.1

> Nov 1, 2018

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-170---171)

 -  Small CSS fixes in Argento theme

**Extensions Updates**

 -  **AjaxPro** — 1.4.1
    -  Multiple fixes for cart slide mode
 -  **EasyCatalogImages** — 1.4.0
    -  Added ability to use widget with categories of one StoreGroup at another StoreGroup
    -  Fixed broken image url, if width wasn’t set to a proper number
 -  **GDPR** — 1.1.0
    -  Fixed mysql error on client consents page when table prefixes are used
 -  **Lightboxpro** — 1.2.0
    -  Improved compatibility with ProLabels
    -  Added correct alt text for preloading image
 -  **ProLabels** — 1.2.1
    -  Update label indexes when product updated
    -  Improve predefined variables search in label text
    -  Get product final and regular price properly
 -  **Richsnippets** — 1.2.1
    -  Remove tags in product description
    -  Added product brand to structured data
 -  **Regional and Language URLs** — 1.3.2
    -  Select swatches on listing when filter applied
    -  Fixed broken redirect to homepage when customer reaches respective CMS page via its URL
    -  Fixed 'Invalid return type' error on Magento 2.1.x
 -  **SEO Templates** — 1.1.1
    -  Improved metadata generation stability
    -  Fixed 404 for actions in admin grid
 -  **Soldtogether** — 1.3.1
    -  Improved code stability, prevent 'ID already exists' error
    -  Moved slick init params from template to block

### Version 1.7.0

> Sep 28, 2018

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-160---170)

**Major updates**

 -  Magento 2.2.6 compatibility
 -  Greatly improved [ProLabels](https://docs.swissuplabs.com/m2/extensions/prolabels/)
    module with [new backend interface](https://docs.swissuplabs.com/images/m2/prolabels/preview-demo.gif)
    and a bunch of [ready-to-use presets](https://docs.swissuplabs.com/images/m2/prolabels/presets-110.png).

**Extensions Updates**

 -  **Fblike** — 1.1.4
    - Fixed error "Action Requires At Least One Reference" when custom button is used
 -  **Navigationpro** — [1.7.0](https://docs.swissuplabs.com/m2/extensions/navigationpro/changelog/#version-170)
    - Magento 2.2.6 compatibility
    - Backend interface improvements
 -  **ProLabels** — [1.1.0](https://docs.swissuplabs.com/m2/extensions/prolabels/changelog/#version-110)
    - Backend interface improvements
    - Ready-to-use presets added

### Version 1.6.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-150---160)

 -  New [**Accelerated Mobile Pages**](/m2/extensions/amp/) module added
 -  Fixed styles for [**Firecheckout themes**](/m2/extensions/firecheckout/configuration/#theme)

**Extensions Updates**

 -  **AjaxPro** — 1.3.2
    -  Fixed js error
    -  Fixed redundant reload of AjaxPro sections
 -  **Attributepages** — 1.0.10
    -  Fixed delete mass action and store filter in admin grid
    -  Fixed error in options list when identifier is missing
    -  Fixed 404 error for options with html entities in name
 -  **Compare** — 1.0.1
    -  Css fixes
 -  **EasySlide** — 1.1.5
    -  Added AMP integration
 -  **Easy Catalog Images** — 1.2.1
    -  Added AMP integration
 -  **EasyTabs** — 1.3.3
    -  Fixed delete mass action and store filter in admin grids
 -  **GDPR** — 1.0.1
    -  Fixed possible issue with invalid config value
 -  **Hover Gallery** — 1.0.2
    -  Changed logic to determine image position in media gallery
    -  Added opacity transition for original image
 -  **SEO Suite** — 1.0.1
    -  Minor improvements and Magento 2.1.x compatibility fixes
 -  **Testimonials** — 1.1.0
    -  New testimonials listing page design
    -  New testimonials slider widget
    -  Added feature to export product review to testimonial
    -  Added config options to require rating and to disable testimonial submit for guests

### Version 1.5.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-140---150)

 -  New [**Compare module**](/m2/extensions/compare/) added
 -  New [**Regional and Language URLs** module](/m2/extensions/hreflang/) added as part of [Seo Suite](/m2/extensions/seo-suite/)
 -  New [**SEO XML Sitemap** module](/m2/extensions/seo-xml-sitemap/) added as part of [Seo Suite](/m2/extensions/seo-suite/)
 -  Css fixes for reviews toolbar
 -  Css fixes for Askit questions toolbar
 -  Added compatibility with Magento 2.2.5 when installing theme on 'All Store Views'

**Extensions Updates**

 -  **AjaxPro** — 1.3.1
    -  Added slide mode for modal dialog
    -  Added floating cart
    -  Fixed priceBox bug
    -  Fixed bug with disabled radio buttons in shipipng estimation
    -  Fixed configurable products add to cart issue on homepage
 -  **Askit** — 1.2.17
    -  Added email subject translation
 -  **Easybanners** — 1.2.3
    -  Fixed possible error on bundle product pages
 -  **EasyTabs** — 1.3.2
    -  Fixed activate and scroll to tab on external link click
 -  **Fblike** — 1.1.3
    -  Overall JavaScript improvements (load Facebook SDK only it is necessary, better utilization of Magento RequireJS functionality)
 -  **Hover Gallery** — 1.0.1
    -  Fixed both images visible issue when using transparent png product images
 -  **Navigationpro** — 1.6.0
    -  New menu styles: [Ribbon Menu](/m2/extensions/navigationpro/use-cases/ribbon-menu/), [Apple Menu](/m2/extensions/navigationpro/use-cases/apple-menu/), [Link Bar Mobile Menu](/m2/extensions/navigationpro/use-cases/link-bar/)
    -  New Use Case added: [Iconic Dropdown Menu](/m2/extensions/navigationpro/use-cases/iconic-menu/#dropdown-menu)
    -  Small CSS fixes
 -  **ProLabels** — 1.0.24
    -  Fixed php notice on Single Store mode in Edit Label interface
 -  **SEO Suite** — 1.0.0
     -  includes new module [Regional and Language URLs](/m2/extensions/hreflang/)
     -  includes new module [SEO XML Sitemap](/m2/extensions/seo-xml-sitemap/)
     -  *Richsnippets*  — 1.1.3
         -  Fixed missing breadcrumbs data at product pages in Magento 2.2.4+
         -  Fixed possible notice at product page with grouped product
         -  Using full description in snippet when short description is empty
     -  *SEO HTML Sitemap*  — 1.0.1
         -  Renamed admin menu item "HTML Sitemap Links" to "Sitemap Links"
         -  Fixed PHP fatal error in custom links grid when Magento Admin session expired
     -  *SEO URLs*  — 1.2.1
         -  Config section renamed from "Urls" to "SEO URLs"
         -  Integration with "Regional Urls (hreflang)" module
     -  *SEO Pager*  — 1.0.1
         -  Canonical URL now removed correctly
     -  *SEO Templates*  — 1.0.2
         -  Fixed error during compilation

### Version 1.4.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-131---140)

 -  New [**GDPR module**](/m2/extensions/gdpr/) added
 -  New [**SEO Metadata Templates** module](/m2/extensions/seo-templates/) added
 -  Fixed not working "Add to Cart" button on Stripes theme when ColorSwatches
    are used on the product page
 -  Fixed toolbar position on non-anchor 1-column page in Stripes theme
 -  CSS fixes for RTL languages
 -  Small CSS fixes

**Extensions Updates**

 -  **Askit**
    -  Magento 2.2.4 compatibility in email templates
    -  Added client-side form validators
 -  **Attributepages**
    -  Fixed error when page identifier is entered in invalid registry
 -  **Easybanners**
    -  Fixed image styles in [Book layout](/m2/extensions/easybanners/layouts-for-html-banners/#book)
 -  **Email**
    -  Added predefined smtp providers settings
    -  Fixed Magento 2.2.4 compatibility
 -  **Soldtogether**
    -  Added new config option that allows to disable 'Create relations on order save'
 -  **Navigationpro**
    -  Allow to use absolute links in [menu items](/m2/extensions/navigationpro/backend/menu-edit/#general-settings)
    -  [Nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/) added
    -  Improved dropdown positioning
    -  Small fixes and improvements

### Version 1.3.1

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-130---131)

 -  Magento 2.2.4 compatibility
 -  Fixed "jumping" carousel and tabs styles on the homepage during script initialization
 -  Fixed white links in Stripes menu, when NavigationPro is disabled
 -  Products carousel at the Mall's homepage replaced with Highlight ajax carousel widget
 -  Small css and js fixes

**Extensions Updates**

 - **Ajax Search**
     +  Add popular search terms suggestions when input is empty
     +  Improved initialization speed
     +  Add store filter to the cms page results

 - **Attributepages**
     +  Fixed 404 error in backend options grid, when using pagination

 - **Easytabs**
     +  Fixed possible “Requested product doesn’t exist” error, when editing cart item

 - **Fblike**
     +  Fixed compatibility with button initialization in ajax updated product listing

 - **Highlight**
     +  Fixed bug with Magento 2.2.4 when limit/sort order doesn't work

 - **Navigationpro**
     +  Fixed bug with Magento 2.2.4 when breadcrumbs are missing on the product page

 - **SoldTogether**
     +  Fixed issue with “Grouped” products price calculation in “Amazon” view

### Version 1.3.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-120---130)

 -  We introduce new colorful theme - Argento Stripes. Check it out at [Stripes Theme Demo](http://magento2demo.argentotheme.com/stripes_en/).
 -  No more "jumping search" during page loading.
 -  A lot of small fixes and improvements to provide your store the best user experience.

**Extensions Updates**

 - **Ajax Search**
     +  Category filter for search requests
     +  Grid layout for suggestions popup.

 - **Ajax Pro**
     +  Remove product review summary and tabs from add product popup.

 -  **Easybanners**
     +  Magento 2.1 compatibility.
     +  Removed url validation as it does not allow to use .html suffix.
     +  Fixed ‘Undefined variable: options’ error for banners without placeholders.
     +  Fixed 'display_count_per_customer' conditions when FPC is enabled.

 -  **Easy Catalog Images**
     +  Added configurable ‘Departments’ page with masonry layout style.

 -  **Easytabs**
     +  Expanded tabs layout added.

 -  **Highlight**
     +  Added ability to show products widget as ajax carousel.
     +  Fixed bug when you can’t call for multiple widgets with different conditions on the same page.
     +  Fixed php error when using pagination in ajax carousel

 -  **Navigation Pro**
     +  New simplified form to create menu with a few clicks.
     +  RTL support added.
     +  [Overlay feature added](http://docs.swissuplabs.com/m2/extensions/navigationpro/use-cases/overlay/).

 -  **ProLabels**
     +  Optimize labels rendering on storefront.

 -  **SEO Suite**
     +  *Richsnippets*:
         +  Do not add rating to snippet when product reviews do not have ratings.
     +  *SEO URLs*:
         +  Improve compatibility with not English speaking stores.

 -  **Sold Together**
     +  New Stripe layout for 'Frequently Bought Together' block. Now can can choose between 'Amazon Inspired' (default) and 'Stripe' layout style.

### Version 1.2.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-110---120)

 -  Added RTL support in Luxury theme _(currently in beta)_
 -  [SEO Pagination](/m2/extensions/seo-pager/) added as part of [Seo Suite](/m2/extensions/seo-suite/)

**Luxury Theme**

 -  Fixed missing items count on search result listing on mobile devices
 -  Fixed invisible action buttons on the homepage if standard listing is used
 -  Fixed cutted shadow on the top edge of the icon
 -  Bring back an opacity on the action icons in product listing

**Extensions Updates**

 -  **Ajax Pro** — 1.2.5
     -  Fixed redirect to product page when ?option=cart used
     -  Added missing translations
     -  Added product.view popup on home page
     -  Added checking if response is json
 -  **Ajax Search** — 1.2.8
     -  Fixed broken sort by relevance
     -  Added translations
     -  Fixed empty results when limit was equal to number of suggestions
 -  **Askit** — 1.2.12
     -  Fixed missing question label bug
 -  **Attribute Pages** — 1.0.7
     -  Added canonical url to integrate with seo-pager
 -  **Easy Banner** — 1.2.0
     -  Added new conditions
     -  "Don't show anymore" action added to lightbox and awesomebar banners
     -  New predefined HTML layouts
     -  Added ability to assign placeholder to parent container without using "Widgets" page
     -  Fixed not-working banner when it assigned to multiple stores
     -  Improved popup styles and positioning
     -  Backend forms rewritten using UI components
 -  **Facebook Like Button** — 1.1.1
     -  Fixed issues that occurred at some environments with JS minification enabled
     -  Using same product URLs to like on category and product pages
 -  **Navigation Pro** — 1.2.0.1
     -  Added ability to set positioning settings for the first level dropdown: Stick to Left, Center, Stick to Right
     -  Fixed browser freezing on mobile devices when using vertical subcategories alignment
 -  **Pro Labels** — 1.0.21
     -  Fixed warning illegal offset during CLI reindex
 -  **Review Reminder** — 1.0.11
     -  Fixed empty customer name for guests orders
 -  **Seo Suite** — 0.9.0
     -  includes new module [SEO Pagination](/m2/extensions/seo-pager/)
     -  *Rich Snippets*:
         -  Fixed duplicated product structured data on product page.
         -  Minify JSON-LD structured data.
         -  No empty nodes in JSON-LD structured data.
     -  *SEO URLs*:
         -  Fix URL parsing when URL rewrite ends with ‘/’.
         -  Disable SEO URLs when direct controller URL used instead of URL rewrite.
         -  Improved integration with Swissup ALN module (stock filter, rating filter, new filter).
         -  Improved query string parsing when multiple values applied to filter.
         -  If filter separator enabled add it to URLs only when there are applied filters.
 -  **Sold Together** — 1.2.4
     -  Using correct customer select for reindex, increased customer step
     -  Fixed exception 'Item with the same ID already exists'

### Version 1.1.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-100---110)

 -  [Lightbox Pro](/m2/extensions/lightboxpro/) added
 -  [Seo Suite](/m2/extensions/seo-suite/) added with the following modules:
     -  [Google rich snippets](/m2/extensions/richsnippets)
     -  [HTML Sitemap](/m2/extensions/seo-html-sitemap)
     -  [SEO URLs](/m2/extensions/seo-urls)
 -  Fixed missing ProLabels on product page when other theme was installed after previously installed Luxury

**Luxury Theme**

 -  Added homepage fullscreen slider configuration from admin
 -  Added sitemap link in footer links
 -  Fixed wrong logo position on new Ajax Search version
 -  Corrected Navigation Pro styles on homepage
 -  Fixed search icon position when store switcher is not displayed
 -  Fixed listing styles on mobile devices

**Extensions Updates**

 -  **Ajax Search** — 1.2.6
     -  Now product page is opened when click or press enter on the element in popup
     -  Added missing close button and spinner in folded mode
     -  Removed mistakenly added cacheable='false' param, which disabled FPC
     -  Fixed error CollectionFactory already in use
     -  Fixed search form submit only after second tap on mobile keyboard
 -  **Askit** — 1.2.11
     -  Fixed not unique form element ids
     -  Added config for "You have not submitted a question" message
     -  Update ui_component according to the latest requirements
     -  Fixed error on Magento versions before 2.2.0
     -  Fixed vote for question action
 -  **Easy Banner** — 1.1.1
     -  Fixed SQL error "1205 Lock wait timeout exceeded"
     -  Reduced number of database operations
     -  Fixed search at banner conditions page
     -  Code cleanup
 -  **Easy Catalog Images** — 1.1.5
     -  Fixed compatibility with Magento versions 2.1.x
 -  **Navigation Pro** — 1.1.0
     -  Added sidebar menu support
     -  Added navigation pro widget
     -  Added Amazon-like sidebar menu
     -  Fixes for mobile devices
     -  Fixed php error when switching store view in backend interface
     -  Improved dropdown positioning calculations
 -  **Pro Labels** — 1.0.20
     -  Fixed invalid discount values calculation for non-base currencies
 -  **Sold Together** — 1.2.3
     -  Fixed customer reindex (error occured when customer had no orders)
     -  Code cleanup

### Version 1.0.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-099---100)

 -  [NavigationPro](/m2/extensions/navigationpro/) added
 -  Css editor improved in theme editor backend. CSS syntax highlight added.

**Luxury Theme**

 -  Improved NavigationPro compatibility
 -  Fixed too long language switcher
 -  Out of stock phrase removed from listing
 -  Improved product quantity styles in header cart

**Extensions Updates**

 -  **AjaxSearch** — [1.2.5](/m2/extensions/ajaxsearch/changelog/#version-125)
 -  **Askit** — [1.2.8](/m2/extensions/askit/changelog/#version-128)
 -  **EasyCatalogImages** — [1.1.4](/m2/extensions/easycatalogimages/changelog/#version-114)
 -  **Prolabels** — [1.0.19](/m2/extensions/prolabels/changelog/#version-1019)
 -  **Reviewreminder** — [1.0.10](/m2/extensions/reviewreminder/changelog/#version-1010)

### Version 0.9.10

 -  Fixed critical vulnerability in EasyBanner module

**Extensions Updates**

 -  **AjaxPro** — 1.2.3
    - Fixed invalid xml layout update instructions
    - Improved compatibility with third-party modules
 -  **EasyBanner** — 1.0.12
    - Fixed critical SQL vulnerability
 -  **EasyTabs** — 1.2.1
    - Fixed ACL rules
 -  **ReviewReminder** — 1.0.10
    - Fixed wrong product url in email on multi-website store installation
 -  **SoldTogether** — 1.2.2
    - Fixed error when product is not available in registry

### Version 0.9.9

> [Upgrade Instructions](../upgrade-instructions/#version-097---099)

 -  **ArgentoLuxury** theme added. [View Docs](../luxury/)
 -  **Hover Gallery** module added. [View Docs](/m2/extensions/hover-gallery/)

**Extensions Updates**

 -  **EasySlide** — 1.1.4
    -   better widget compatibility with third-party modules
 -  **Highlight** — 1.1.2
    -   fixed widget styles
 -  **Facebook Like Button** — 1.1.0
    -   added custom like button layout
 -  **EasyTabs** — 1.2.0
    -  added tabs widget

### Version 0.9.8

 -  Magento 2.2 compatibility

### Version 0.9.7

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-096---097)

 -  Added ability to [disable sticky header programmatically](/m2/argento/scripts/argento-sticky/)
 -  All modules updated according to Magento 2.1.7 changes
 -  DI compilation fixes

### Version 0.9.6

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v096 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-095---096)

 -  **ArgentoMall** theme added. [View Docs](../mall/)
 -  ArgentoMall [theme editor](/m2/argento/mall/theme-editor/) added
 -  [Ajax Pro](/m2/extensions/ajaxpro/) extension included

**List of Included Themes**

 -  **Argento Blank** — 0.9.6
 -  **Argento Essence** — 0.9.6
 -  **Argento Flat** — 0.9.6
 -  **Argento Pure2** — 0.9.6
 -  **Argento Mall** — 0.9.6

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.3
    -   Without limit bug was fixed in product provider
 -  **Askit** — 1.2.4
    -   Cms pages integration
    -   Catalog categories integration
    -   You can search Askit questions in Magento admin top search
    -   Grid massactions logic fixed
    -   Grid full-text search fixed
 -  **Easybanner** — 1.0.8
    -   Fixed bug using multiple banners on one page
 -  **Rich Snippets** — 1.0.5
    -   Sort order fixed
    -   Acl added
    -   Fixed error in breadcrumbs json
    -   Added config to disable snippets


### Version 0.9.5

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v095 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-094---095)

 -  **ArgentoPure2** theme added. [View Docs](../pure2/)
 -  Sticky header added to the ArgentoFlat theme
 -  Improved reviews styles on small laptops and tablets
 -  Improved accordion styles
 -  Removed "Add to cart" button from products listing on small devices
 -  Vertical tabs added for laptops and tablets because horizontal tabs does
    not fit the screen width
 -  Bootstrap's `col-md-*` breakpoint changed to 768px
 -  Colorful socials icons [added](/m2/argento/customization/icons/#color-classes)
 -  Many small css improvements

**Fixes**

 -  Fixed horizontal scroll on checkout page
 -  Fixed FontAwesome icons vertical alignment
 -  Fixed incorrect position of submenu dropdown
 -  Fixed invalid dependency in `jquery.visible` plugin which cause js error in
    developer console

**Developer improvements**

 -  ArgentoSticky script added. [View Docs](../scripts/argento-sticky/)
 -  New mixins and classes:
    +  [Less mixins](/m2/argento/customization/less-mixins/)
    +  [Text block alignment classes](/m2/argento/customization/css-helpers/#text-and-block-alignment-classes)
    +  [Colorized social icons](/m2/argento/customization/icons/)

**List of Included Themes**

 -  **Argento Blank** — 0.9.5
 -  **Argento Essence** — 0.9.5
 -  **Argento Flat** — 0.9.5
 -  **Argento Pure2** — 0.9.5

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.2
    -   Final_price replaced min_price in price template
    -   Small css fixes
 -  **Askit** — 1.2.4
    -   Fixed toolbar amount position on mobile devices
    -   Admin email notification was fixed
    -   Adming functionality fixes
 -  **Easybanner** — 1.0.7
    -   Fixed Image insert using WYSIWYG editor
 -  **Easyslide** — 1.1.1
    -   Small css fixes
 -  **FontAwesome** — 1.2.0
    -   Icons updated to 4.7.0
 -  **Prolabels** — 1.2.0
    -   Fixed missing badgets after cron job
    -   Small fixes

### Version 0.9.4

> [Upgrade Instructions](../upgrade-instructions/#version-093---094)

 -  ArgentoFlat [theme editor](/m2/argento/flat/theme-editor/) added
 -  Small css fixes to improve css customization in:
    +  Product listing widgets
    +  Footer links styles
    +  ArgentoFlat [jumbotrons](/m2/argento/flat/jumbotrons/)

**Prolabels**

 -  Fixed possible duplicate label in widgets listings
 -  Improved label loading method

**FontAwesome**

 -  Added ability to use font-awesome icons for backend modules

### Version 0.9.3

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v093 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-092---093)

 -  ArgentoFlat theme added. [View Docs](../flat/)
 -  More Less variables to match developer customization needs
    - Product listing variables
    - Additional Product Tabs variables
    - Additional Navigation variables
    - Crossell, Upsell, Related products variables
 -  Product questions count added to tab title
 -  Improved product listing styles stability in various browsers
 -  Improved Rewiews Tab styles for large screens
 -  Added ability to include custom.js file
 -  Many small css fixes and improvements

**List of Included Themes**

 -  **Argento Blank** — 0.9.3
 -  **Argento Essence** — 0.9.3.1
 -  **Argento Flat** — 0.9.3

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.0
    -   Added Folded Design feature, that hides input field and shows it in
        fullscreen mode with nice effect
    -   Small css fixes
 -  **Askit** — 1.2.0
    -   Added ability to show questions count in tab title
    -   Improved questions styles
    -   Styles rewritten in less with bunch of new variables that allow to change
        design easely
 -  **Easybanner** — 1.0.6.4
    -   Fixed empty spacing below banner
    -   Fixed banner url to product and category pages
 -  **Easycatalogimages** — 1.1.1
    -   Fixed issue in automatic category thumbnails assignment, thumbnails are now
        assigned to default store id
 -  **Easyslide** — 1.1.0
    -   Fixed empty spacing below slider
    -   Added slider themes:
        - Dark
        - White
        - Default (Blue)
 -  **Highlight** — 1.1.0
    -   Product listing styles rewritten to allow to use gutter between products
 -  **Soldtogether** — 1.1.6
    -   Fixed "Add all to cart" button alignment in amazon style mode
    -   Small css improvements

### Version 0.9.2

[Upgrade Instructions](../upgrade-instructions/#version-091---092)

 -  Theme editor added. [Read more](../customization/theme-editor/)
 -  Additional LESS variables added to simplify switching between
    [boxed, full-width and standard layout types](../customization/boxed-full-width-and-standard-layout-types/)
 -  FontAwesome configuration added. Now you can choose between CDN and local version.
 -  Fixed product listing glitches in Safari browser
 -  Bugfixes and improvements to:
    - Attributepages
    - ProLabels
    - SoldTogether
    - Testimonials
 -  [Askit](/m2/extensions/askit/) module added

### Version 0.9.1.2

 -  Additional Magento 2.1 compatibility
 -  Fixed issues with:
    - Core
    - EasySlide
    - SoldTogether
    - EasyBanners
    - Prolabels

### Version 0.9.1

[Upgrade Instructions](../upgrade-instructions/#version-090---091)

> Magento 2.0.* versions are no longer supported.
>
> Please update to Magento to 2.1 or newer to use latest Argento.

**List of Included Themes**

Theme           | Version
:---------------|:-------
Argento Essence | 0.9.2
Argento Blank   | 0.8.5

**Fixes and Improvements**

 -  Removed deprecated css fixes for tablet devices:
    - Added Accordion style to Layered navigation
    - Better Layered Navigation positioning for small tablets
 -  Homepage products count in sidebar blocks decreased to 2
 -  Fixed missing top border in product listing toolbar elements

**Extensions Updates**

All extensions updated according to Magento 2.1 version.

 -  **All Modules**
    - ACL fixes
    - Magento 2.1 compatibility
 -  Soldtogether
    - Slick Carousel added to `Customers Also Bought` block
 -  [Easy Catalog Images](/m2/extensions/easycatalogimages/)
    - Fixed error with missing Thumbnail class
 -  [EasyTabs](/m2/extensions/easytabs/)
    - Fixed missing js component in review tab
 -  Core
    - Added AdminNotification to be in touch with latest swissup updates

### Version 0.9.0

> **Important Notice**
>
> This release breaks compatibility with previous Argento version
> because of new Boostrap powered grid system, that replaces a bit buggy previous
> grid realization.
>
> In order to use new Argento version, you need to:
>
> - [Run installer](/m2/argento/installation/), that will
>   backup and create new cms blocks and homepage
> - Or apply content changes according to
>   [upgrade instructions](/m2/argento/upgrade-instructions/)

**List of Included Themes**

Theme           | Version
:---------------|:-------
Argento Essence | 0.9.1
Argento Blank   | 0.8.4

New Argento is shipped toghether with Swissup Module Manager, that could help you
to keep Swissup modules up to date and [install Argento Theme](/m2/argento/installation/)
in a few clicks.

**New Extensions**

 -  [Attribute based pages][attributepages]
 -  [Easybanner][easybanners]

**Extensions Updates**

 -  **All Modules**
    - Dependency injection compilation errors fixed
 -  [Ajax Search][ajaxsearch]
    - Improved dropdown styles
    - Added animation loader, when ajax request is processing
    - Fixed search field toggler on tablet devices
 -  [Easy Catalog Images][easycatalogimages]
    - Fixed broken page when placeholder is not deployed into pub/static
 -  [Easytabs][easytabs]
    - Fixed broken backend interface on initial load on some linux servers
 -  [Facebook Like button][fblike]
    - Fixed frontend error, when config is not saved

**Theme styles improvements**

 -  **General**
    - Bootstrap powered 12 columns grid added
    - Bootstrap responsive utilites added
    - Bootstrap responsive embed added
    - Bootstrap grid utilized to organize footer content
    - Cms content added aside to logo
 -  **Homepage changes**
    - Bootstrap grid utilized to organize content
    - Banner blocks replaced with Easybanner placeholders
    - Easyslider styles improvements
    - Brands slider manual scrolling fixed
    - All content is properly aligned with theme dimensions
 -  **Product Listing**
    - Fixed list mode styles
    - Grid mode styles improved
    - Widget styles improved

[ajaxsearch]: /m2/extensions/ajaxsearch/
[attributepages]: /m2/extensions/attributepages/
[easybanners]: /m2/extensions/easybanners/
[easycatalogimages]: /m2/extensions/easycatalogimages/
[easytabs]: /m2/extensions/easytabs/
[fblike]: /m2/extensions/fblike/

### Version 0.8.1

Initial release
