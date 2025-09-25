---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 1.50.0

> September 25, 2025

  - _Argento Blank_: Added ARIA for breadcrumbs: accessibility fix and new swiper uses mobile-first approach for breakpoints (min-width)
  - _Argento Essence_: New swiper uses mobile-first approach for breakpoints (min-width)
  - _Argento Flat_: New swiper uses mobile-first approach for breakpoints (min-width)
  - _Argento Home_: MCS fixes and new swiper uses mobile-first approach for breakpoints (min-width)
  - _Argento Marketplace_: New swiper uses mobile-first approach for breakpoints (min-width)

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.29 (was 1.7.26)
      + Fix double reloading
      + Fix: 'ajaxpro-cart' section reload on store/website switch
      + Fix: cart-item-render breeze integration
  - [AskIt](/m2/extensions/askit/) — 1.14.12 (was 1.14.11)
      + Feat: Add handle to category view 
      + Feat: Add QAPage schema generation
  - [Attributepages](/m2/extensions/attributepages/) — 1.7.7 (was 1.7.3)
      + Prevent php error when calling the widget, but the module is disabled
      + Do not allow to view the page from different store view
      + Do not render short description if option is disabled
      + Render option from "Active store" view or "All stores" only
      + Properly clear fpc when option is linked to multiple parent pages
  - [Easytabs](/m2/extensions/easytabs/) — 1.13.1 (was 1.12.18)
      + Slightly better performance in breeze theme
      + No need to call resizeCb. ResizeObserver will call it automatically.
      + Avoid multiple escaping of tabs alias. Store escaper alias into variable.
      + Enhance security by escaping output in templates using Escaper class
      + Update widget_unset to include review form and list for Hyva theme
      + Trim whitespace from unset block names in Tabs class
  - [GDPR](/m2/extensions/gdpr/) — 1.8.2 (was 1.8.0)
      + MCS fixes
      + Do not suppress syntax error in config value
  - [Highlight](/m2/extensions/highlight/) — 1.11.8 (was 1.11.7)
      + Breeze: prepare for the new version
  - [NavigationPro](/m2/extensions/navigationpro/) — 1.17.32 (was 1.17.28)
      + Breeze: Allow to use with jQuery
      + Fixed js error on old Magento versions (jQueryUI < 1.11.0)
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.23 (was 1.7.22)
      + Enhancement: Add noEscape directive for padding and line-height in label template; ensure HTML output is escaped for security
      + Enhancement: Escape HTML output and add noEscape directive in label templates for security
      + Enhancement: Escape HTML output in label templates for security
      + Enhancement: Add noEscape directive to fix commit validation
      + Enhancement: Add async unbinding functionality to mutation observer
  - *ProLabels Configurable Product* — 1.0.9 (was 1.0.8)
      + Destroy label of the previously selected product when reset the select
  - [Rich Snippets](/m2/extensions/richsnippets/) — 1.7.11 (was 1.7.8)
      + Feat: Add QAPage schema to category pages (close #35)
      + Adds 'datePublished' and 'author' fields to the QAPage schema to comply with Google Search Console reqs
      + Do not remove question when pressing "Enter" in grid filter
      + Fixed php error when data is saved in old (unparseable) format
      + Fixed not working FAQ widget
      + Allow multiple Day of Week with same value for opening hours config
      + Fix mcs escape warnings
      + FAQPages: Removed pagebuilder code in answers.
  - [Seo Cross Links](/m2/extensions/seo-cross-links/) — 1.1.20 (was 1.1.18)
      + Refactor link creation in Filter class. Add createLink method. It allows to add plugin for it in Hyva-compatibility module.
      + Fixed duplicated image tag added via pagebuilder.
  - [Seo HTML Sitemap](/m2/extensions/seo-html-sitemap/) — 1.1.21 (was 1.1.20)
      + Refactor sitemap item retrieval to use helper method and improve URL and name escaping
      + Refactor sitemap templates to use helper method for item retrieval and enhance HTML escaping
  - [SoldTogether](/m2/extensions/soldtogether/) — 1.10.8 (was 1.10.6)
      + Added titles to links
      + Fixed js error when using breeze
      + Fixed helper.restoreValuesToRelatedProductsField is not a function error
      + New swiper uses mobile-first approach for breakpoints (min-width)
  - *SuggestPage* — 1.2.13 (was 1.2.12)
      + Fixed unescaped output, closes #3

### Version 1.49.0

> July 29, 2025

  - _Argento Blank_: Fixed incorrect style for "New Products" widget.
  - _Argento Blank_: Magento 2.4.8: Fixed not working screeen__l styles
  - _Argento Blank_: Remove overriden bootstrap.js to fix error with dimVisible on 2.4.8
  - _Argento Stripes_: Update to the latest stripe changes
  - _Argento Chic_: Replaced broken placeholder image on typography page
  - _Argento Essence_: Replaced broken placeholder image on typography page
  - _Argento Flat_: Replaced broken placeholder image on typography page
  - _Argento Force_: Enabled centeredSlides option again as EasySlider is fixed now
  - _Argento Force_: Fixed broken tabs styles in Magento 2.4.8
  - _Argento Force_: Disabled centeredSlides option for EasySlider
  - _Argento Force_: Replaced broken placeholder image on typography page
  - _Argento Home_: Fixed wrong product item height caused by wrong styles order
  - _Argento Home_: Replaced broken placeholder image on typography page
  - _Argento Luxury_: Replaced broken placeholder image on typography page
  - _Argento Mall_: Replaced broken placeholder image on typography page
  - _Argento Marketplace_: Replaced broken placeholder image on typography page
  - _Argento Pure2_: Replaced broken placeholder image on typography page
  - _Argento Stripes_: Fixed highlight title styles on the homepage
  - _Argento Stripes_: Replaced broken placeholder image on typography page
  - _Argento Stripes_: Magento 2.4.8: fixed broken product page layout


**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/)
      + Add ajaxpro.minicart.addons container for promotions (easybanner)
      + Fix sections order for simple window in customer/sections/load
  - [Ajax Search](/m2/extensions/ajaxsearch/)
      + Fixed broken StorePickup search styles at checkout page
      + Fixed possible disabled search icon when using folded layout
      + Do not update customer_sections after graphql requests
  - [AskIt](/m2/extensions/askit/)
      + Fix string is not valid
      + Add data(email) validation in graphql request
      + Remove commented code
      + Fix 'mage.dataPost' require in data-vote.js
      + Implement direct link to question 
      + Fix 'applyBinding' undefined
  - [Chat GPT Assistant](/m2/extensions/chat-gpt-assistant/)
      + Exclude useless gallery attribute from filter
  - [Easy Slide](/m2/extensions/easy-slide/)
      + Fixed empty slides on Force theme with new swiper - added slides cloning
      + Fixed invisible images when container is scrolled down because of focus?
  - [EasyCatalogImages](/m2/extensions/easycatalogimages/)
      + Enable lazyload for all images except for the first two
      + Do not preload category image if it was moved to bottom
      + Breeze: preload feature. Preload two images if widget added above product listing. Don't skip category image. Preload first image at the departments page.
  - [GDPR](/m2/extensions/gdpr/)
      + Consent confirmation status feature. Revoke consent when unsubscribing. Consent confirmation is used when "Need to confirm" is enabled.
      + Allow collecting consents for multiple form ids
      + Show newsletter consent for each subscribed email
      + Better spacing between accepted consents
  - [Highlight](/m2/extensions/highlight/)
      + Fixed php error when trying to apply conditions (Smile_Elasticsuite). Hide conditions when Smile_Elasticsuite is enabled.
      + Override Amasty sorting directions for Highlight orders
      + Fixed partially invisible "Load more" button on mobile devices
      + Fixed JS error classList is undefined on mobile
      + Breeze: Loading placeholder must be visible to read its width
      + Do not clone listing into loading slide until the slide is used. This reduces DOM size
      + BC: update to newest breeze module
  - [Hover Gallery](/m2/extensions/hover-gallery/)
      + Fixed missing animation on hover out
      + Optimize css selectors
      + Fixed incorrect logic of the prev commit
      + Do not load hover images until the image is hovered
  - [NavigationPro](/m2/extensions/navigationpro/)
      + Postpone menu initialization only if it's a slideout menu
  - [Pagespeed](/m2/extensions/pagespeed/)
      + Fix: Call to an undefined method Optimizer\Image\Responsive::isMediaImageFileExist
      + Refactor: add generic caching for image file existence checks in WebP optimizer, improve performance and reliability
      + Remove Model/Optimizer/Image/AbstractImage::isParentTagPicture
      + Add Image/WebP/PictureTagBuilder
      + Add Image/ImageAttributeParser
      + Add WebP/JsReplacer
      + Feat: add generic executeWithCache helper for file existence checks in AbstractCachableOptimizer, improve caching logic in WebP optimizer
      + Refactor: improve getUrlPath type safety and error handling in File.php
      + Refactor SpecifyDimension and Responsive optimizers to use DimensionsTrait
      + Add Image/WebP/UrlResolver and Image/DimensionsTrait
      + Refactor SpecifyDimension to extend AbstractImage instead of WebP
      + Refactor optimizer flow: extract Coordinator and clean up plugin logic
      + Fix: Identical operator === is not used for testing the return value of strpos function
      + Set 'Enable in developer mode' true by default 
      + Preload only 1-6 first stylesheet in defercss optimizer
      + Fix: data-pagespeed-hash breaks the 'text/x-magento-init' script with an unescaped attribute (script inside another script)
      + Fix: 'Scripts relocation' text/x-magento-template
      + Remove reqs laminas/laminas-dom (for php 8.4 compatibility)
  - [ProLabels](/m2/extensions/prolabels/)
      + Fix: Don't show 0 or negative for backorder product
      + CSP compatibility. Fixed js error on checkout page
      + Possibility to place labels top-center and bottom-center
      + Always use position relative for prolabels-wrapper (Argento listing fix)
      + Fixed missing styles when prolabels inserted as static html (without data-mage-init)
      + Base template. Use inline script to init helper src.
      + Fixed js error caused by previous commit
      + Refactor prolabels initialization and rendering logic to use window.swissupProlabels for better modularity and async handling
      + Add reveal observer management for image and content labels
      + Remove outdated code.
      + Storefront labels rendering. Content labels respect "Insert method" and "Target element" settings.
      + Do not show empty prolabels wrapper
      + Fix selector for hiding labels in Fotorama fullscreen mode
      + Enhance image handling in labels: add async image dimension retrieval and update CSS generation
      + Quick fix for a missing image background
  - [ProLabels Configurable Product](/m2/extensions/prolabels-configurable-product/)
      + Add Data helper class. Move there logic from template.
  - [QtySwitcher](/m2/extensions/qty-switcher/)
      + Check for input disabled state with prop (Breeze fix)
      + Group styles
      + Fixed arrows layout on cart page
      + Added basic quantity switcher to the cart page
  - [ReviewReminder](/m2/extensions/reviewreminder/)
      + Fixed wrong product URL on multistore setup
  - [Rich Snippets](/m2/extensions/rich-snippets/)
      + Output multiple QAPage JSON-LD blocks for better indexing
      + Fixed two warnings about returns policy. returnShippingFeesAmount is not applicable when free return is used. When return is allowed returnFees should not be empty.
  - [Seo Cross Links](/m2/extensions/seo-cross-links/)
      + Magefun post list: return the current page instead of the entire collection. (fixed blog pagination)
      + Use frontend model to verify if magefun post is available.
      + Fixed php stan.
      + Separate config to disable the crosslinks for the Magefun posts.
      + Fix megefan only post images.(exclude product and category pages.)
      + Fixed broken posts images.
  - [SoldTogether](/m2/extensions/soldtogether/)
      + Add null coalescing operator to getLayout method for safer return value
      + Add return statement to toggleElementHidden for improved functionality
      + Refactor helper functions to consolidate related data handling and improve code readability
      + Implement toggleElementHidden helper and refactor handleDetailsToggle for improved readability
      + Refactor javascript validator. To use it in future hyva integration.
      + Refactor JavaScript helper. Use native import. This allows to reuse it hyva storefront.
      + Fixed missing dropdown options caused by wrong parent selector
  - [Testimonials](/m2/extensions/testimonials/)
      + Fixed wrong Swiper breakpoints config
  - **Core**
      + Fixed unescaped output
      + Fixed integrity constraint violation: Duplicate entry for key primary
  - **Image Optimizer**
      + No commits found
  - **Theme Editor**
      + Fix 'undefined' buttonBlock
      + PHP 8.4 compatibility
      + Do not update customer_sections after graphql requests
      + Add draggable behaviour
      + Add loading indication
      + add color picker in frontend toolbar
      + Add state saving for frondend mode
      + Add frontend mode
      + Magento 2.4.8 fix: Fixed broken layout when tabs moved to content
      + cancel previous commit
      + Fix bad area identfication
      + Media gallery width and category description for breeze themes
      + Grid columns count for Breeze Themes
      + Ability to set css props and css pros in rgb format. See Argentobreeze_Business theme editor.
      + Fix sort order, add breeze business


### Version 1.48.0

> April 9, 2025

 -  PHP 8.4 support added.
 -  Magento 2.4.8 support added.

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/)
      + Improve suggestpage styles.
  - [Ajax Search](/m2/extensions/ajaxsearch/)
      + Improve dropdown size on mobile devices.
      + Ability to hide price and sku labels.
      + Small CSS fixes.
  - [AskIt](/m2/extensions/askit/)
      + Breeze: Show loader when adding question. Prevent multiple submits.
      + Breeze: Fixed not working recaptcha validation.
  - [EasyCatalogImages](/m2/extensions/easycatalogimages/)
      + Do not throw exception when `cat_id` passed to widget does not exist.
  - [EasyTabs](/m2/extensions/easytabs/)
      + Ability to move existing block into the tab using its layout name.
      + Breeze: Fixed CSS issue with overlapped title when scroll-reveal is enabled.
      + Breeze: Allow using accordion inside tabs.
  - [Highlight](/m2/extensions/highlight/)
      + Improve cache key generation to correctly update highlight block cache.
  - [NavigationPro](/m2/extensions/navigationpro/)
      + Fixed not working navpro when `jquery-ui/menu` is added by a third-party module.
      + Fixed js error in Magento <= 2.4.3.
      + Improve performance when adding close icons or "View All" link.
      + Allow using `tel:` and `mailto:` in image URLs.
      + Breeze: fixed not working closeable and slideout menus.
  - [Pagespeed](/m2/extensions/pagespeed/)
      + Fixed broken `robots.txt` when minification is enabled.
      + Improve `preload` logic to include proper LCP image.
  - [ProLabels](/m2/extensions/prolabels/)
      + Improve labels rendering performance.
      + Improve DB query selector to significantly speedup query on large catalogs. Tested on catalog with 200K products.
  - [QtySwitcher](/m2/extensions/qty-switcher/)
      + Fixed possible missing styles in ajaxpro popup.
  - [SeoSuite](/m2/extensions/seo-suite/)
      + Use proper value for `returnShippingFeesAmount` when free shipping is available.
  - [SoldTogether](/m2/extensions/soldtogether/)
      + Breeze: fixed not working validation when swatches are lazy.
      + Breeze: Fixed uninitialized swatches in the swiper block.

### Version 1.47.0

> January 17, 2025

 -  _Argento Blank:_ Fixed horizontal scroll in Force theme
 -  _Argento Blank:_ Fixed Navigation Pro nowrap styles when configurable header is enabled
 -  _Argento Blank:_ Fixed broken mobile styles in configurable header
 -  _Argento Blank:_ Properly align "x" icon inside close modal and close minicart buttons
 -  _Argento Blank:_ Do not move the sidebar before main-column when using 2columns-right
 -  _Argento Flat:_ Added fallback fonts to decrease CLS
 -  _Argento Flat:_ Updated critical CSS to include global cookie style
 -  _Argento Force:_ Fixed cart alignment on mobile view and misaligned search icon
 -  _Argento Home:_ Fixed CSS issue with dropdown icon in the sidebar navigation
 -  _Argento Home:_ Hide default Navigation Pro dropdown icon to prevent icon blinking
 -  _Argento Pure:_ Fixed CLS
 -  _Argento Pure:_ Fixed search form styles when configurable header is enabled
 -  _Argento Pure:_ Fixed header styles on mobile devices
 -  _Argento Stripes:_ Bring hovered dropdown above the dropdown that's about to close
 -  _Argento Chic:_ Fixed misaligned search icon when using configurable header

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.22 (was 1.7.20)
      + Added prefix 'ajaxpro.init' to init blocks in ajaxpro: ALN ajax load compatibility
      + Removed media attribute from style: it prevented CSS merge
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.22 (was 1.13.21)
      + Breeze: Added missing priceUtils dependency
  - [AMP](/m2/extensions/amp/) — 1.5.10 (was 1.5.9)
      + Disable NewRelic injecting custom javascript on AMP
      + Unset ttl for menu because NewRelic inserts its code in Varnish request
  - [Breeze](/m2/extensions/breeze/) — 2.19.6 (was 2.17.12)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [EasySlide](/m2/extensions/easyslider/) — 1.8.12 (was 1.8.10)
      + Fixed the ability of adding image on change image button click
      + Fixed non-clickable slide when `height: 100%` is used on the description
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.14 (was 1.12.13)
      + Fixed JS error when URL has tab alias with umlaut
      + Do not throw exception when unable to find tab to activate
      + Fixed randomly occurred js error
  - [GDPR](/m2/extensions/gdpr/) — 1.7.9 (was 1.7.8)
      + Prevent scrolling to the page footer if styles are not loaded
      + Ability to get declared cookie groups
      + Deactivate focus trap when clicking outside cookie bar
  - [Highlight](/m2/extensions/highlight/) — 1.11.0 (was 1.10.4)
      + **Performance improvements** for large store catalogs (> 100K SKU) for the All Products Block and Bestsellers blocks
      + Improved toolbar pager added to improve store performance even more
      + Fixed CSS compilation error
  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.12 (was 1.3.11)
      + Added loading lazy for hover image
  - [Lightbox Pro](/m2/extensions/lightboxpro/) — 1.3.6 (was 1.3.7)
      + Fixed image placeholder styles
      + Fixed PHPStan errors
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.23 (was 1.17.18)
      + Added missing `jquery-ui/position` dependency
      + Improved dropdown alignment below `More` icon
      + **Significant performance boost** for the menus with large category count
      + Fixed incorrect mobile media breakpoint in older Magento versions (< 2.4.4), and in upcoming magento versions (> 2.4.7)
      + Fixed horizontal scrollbar when `xlarge` dropdowns are used
      + Improved nowrap performance
      + Postpone menu initialization on mobile devices until menu is used
      + **Significant performance improvements** for menu with heavy dropdowns
      + Improved performance of the vertical menu mode
      + Fixed not working menu overlay
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.9.9 (was 1.9.4)
      + Fixed ignore by signature logic in deferJS optimizer
      + Added Varnish checking in expire optimizer
      + Removed unnecessary `defer` and `async` in deferJS optimizer
      + Fixed possible unprocessed deferred scripts on Safari
      + Improved loading of deferred styles to prevent CLS
      + Fixed integrity attributes bug
      + Fixed broken styles on mobile devices
      + Force init mage components from header sections
      + Added `Use Pagespeed at` configuration
      + Disabled Pagespeed on FireCheckout/Checkout pages by default
      + Added possible solution for not deferring requireJS scripts
      + Fixed error 404 for webp image url
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.23 (was 1.1.22)
      + Display error message for configurable product when no options selected
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.7.6 (was 1.7.5)
        * Do not omit current item in the breadcrumbs
      + **swissup/module-seo-urls** — 1.5.52 (was 1.5.51)
        * Improve filter resolving when there are multiple filters url lables start with the same strings

### Version 1.46.2

> December 17, 2024

 -  Fixed conflict between configurable header and NavigationPro nowrap mode.

### Version 1.46.0

> November 20, 2024

 -  Accessibility improvements for all themes and bundled modules:
    - Navigation using keyboard improvements.
    - Increased small elements size.
    - Partially improved color contrast between text and background colors.
 -  ArgentoChic, ArgentoMarketplace: Fixed unscrollable page when category name = "view".

**Extensions Updates**

 - [Navigationpro](/m2/extensions/navigationpro/)
    + Remove mage/menu dependency. Reduce JS codebase by 10KB (gzipped).
 - [SoldTogether](/m2/extensions/soldtogether/)
    + Fixed line wrap on laptop whne using Amazon-like layout.
    + Remove deferred CSS styles to reduce layout shift score.

### Version 1.45.0

> Aug 30, 2024

 -  _Argento Blank:_ Fixed rarely invisible shipping form in Safari
 -  _Argento Force:_ Sold Together blur color fix
 -  _Argento Chic:_ Fixed missing slider handle on hover in layered navigation when Smile_ElasticSearch used
 -  _Argento Chic:_ Related products block styles improved
 -  _Argento Chic:_ Fixed CSS for Sold Together block with Amazon layout
 -  _Argento Stripes:_ Fixed not-working configurable options

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.12 (was 1.7.10)
      + Quick view link: added title
      + Quick View string localized for NL
      + Minicart override logic improved and fixed on Breeze
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.21 (was 1.13.18)
      + Breeze: fixed invisible form on mobile device on the pages with disabled breeze js
      + Fixed incorrect sort order of config group
      + Improved init block performance
  - [AskIt](/m2/extensions/askit/) — 1.14.5 (was 1.14.4)
      + Fixed default captcha in module forms
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.7.0 (was 1.6.11)
      + Add config for the URL Suffix feature
      + Fixed overflowed split button
      + Added redirect to the correct URL when page has different URL per store
  - [Breeze](/m2/extensions/breeze/) — 2.17.12 (was 2.17.8)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.8 (was 1.5.7)
      + Return original image if error happens during resize
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.12 (was 1.12.10)
      + Fixed missing AskIt tab
  - [GDPR](/m2/extensions/gdpr/) — 1.7.3 (was 1.7.2)
      + Magento 2.4.7-p1: Fixed not-working Google consents, GDPR cookies at checkout page
  - [Highlight](/m2/extensions/highlight/) — 1.10.2 (was 1.9.6)
      + Bulk bestsellers page and widget added
      + More time periods for popular and bestselling pages and widgets
      + Bestsellers block performance improvement: create temporary table with popularity data from orders
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.16 (was 1.17.15)
      + Fixed wrong styles with grunt on less.js v4
      + Fixed missing alt text for the images
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.8.5 (was 1.7.36)
      + Magento 2.4.7-p1: fixed checkout error when HTML minification enabled
      + Added static content deploy compact strategy compatibility
      + Catch all exceptions during image optimization
      + Fixed empty error message in admin configuration
      + CSP integration: fixed nonce attribute in defer js
      + Improved image searching in webp optimizer
      + Fixed long page loading with malformed HTML
      + Fixed image optimization when watermark enabled
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.9 (was 1.7.7)
      + Fixed incorrect onsale labels at some configurable products
      + Fixed missing labels on product page on some instances
      + Improve labels change behavior on product page: fixes incorrect label with Firebear_ConfigurableProducts
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.6.8 (was 1.6.7)
        * Improved compatibility with FishPig Wordpress
      + **swissup/module-rich-snippets** — 1.7.5 (was 1.7.4)
        * Minor tweak to shipping details snippet: show country and shipping methods that are selected in config
      + **swissup/module-seo-images** — 1.3.21 (was 1.3.20)
        * Improved product image indexing
        * Improved product resolver model
  - [Sold Together](/m2/extensions/soldtogether/) — 1.10.1 (was 1.9.18)
      + NEW! “Frequently bought together” and “Customers also buy” blocks support custom options of promoted products there
      + Overall CSS and JS improvements: reduce module affect on page rendering at storefront. Now styles of blocks loading only when become visible
      + Fixed PHP exception in latest Magento version
      + Fixed expand options dropdown in FBT when invalid

### Version 1.44.0

> Jun 27, 2024

 -  _Argento Blank:_ Updated Breeze integration
 -  _Argento Blank:_ Updated [Youtube Lite-Embed](/m2/argento/customization/add-youtube-video/) script to version 0.3.2
 -  _Argento Stripes:_ Fixed JS error `mediaCheck is not a function` when Breeze enabled
 -  _Argento Marketplace:_ Improved add to cart buttons style in locales with long text
 -  _Argento Chic:_ Fixed CMS links styles in account tab on mobile
 -  _Argento Chic:_ Fixed EasySlide navigation buttons style

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.10 (was 1.7.5)
      + Breeze: update according to the latest changes
      + Fixed Amasty Xnotif integration
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.18 (was 1.13.15)
      + Breeze: update according to the latest changes
      + Split category initialization
      + Improve initialization with viewModel
  - [AMP](/m2/extensions/amp/) — 1.5.9 (was 1.5.7)
      + Added compatibility with mobiledetect library versions 3.x/4.x
  - [AskIt](/m2/extensions/askit/) — 1.14.4 (was 1.14.2)
      + Breeze: Load questions when element comes into the viewport
      + Breeze: update according to the latest changes
  - [Breeze](/m2/extensions/breeze/) — 2.17.8 (was 2.16.0)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [ChatGPT Assistant](/m2/extensions/chat-gpt-assistant/) — 1.1.1 (was 1.1.0)
      + Added html option to the attribute directive
  - [EasySlide](/m2/extensions/easyslider/) — 1.8.10 (was 1.8.8)
      + Fixed JS error `$.widget is not a function`
      + Allowed to have non-integer values for slides per view option
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.7 (was 1.5.5)
      + Breeze theme: integrate with hover-zoom
      + "Hide when filter is used" integration with Ajax Layered Navigation without using javascript
  - [GDPR](/m2/extensions/gdpr/) — 1.7.2 (was 1.6.3)
      + Added ability to change and create region-specific default Google consent values
      + Added “Deny” and “Allow Selection” buttons to minimal cookie bar mode
      + Fixed not working default Google consent values
      + Do not set Google consent values until customer presses “Accept” or “Deny” buttons
      + Default cookie wall color changed to dark
      + Breeze: update to the latest version
      + Added missing translations to csv file
      + Do not pass ga session params in URL when consent is declined
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.15 (was 1.17.13)
      + Speedup nowrap initialization
      + Breeze: fixed missing parent chevrons when default bundle is dynamic
      + Breeze: fixed js error when expanded home menu option is used
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.36 (was 1.7.28)
      + Prevent broken attributes parsing data-mage-init
      + Increase the Mobiledetect version
      + Fixed double `data-mage-init` initialization for components in viewport
      + Added [Speculation Rules](/m2/extensions/speculation-rules/) module requirement
      + Added attribute fetchpriority='high' in preload link tags
      + Added ignoring by css class in lazyload optimizer
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.21 (was 1.1.19)
      + Breeze: load js when qty input is visible
      + Fixed layout shift when "arrow" mode is used
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-seo-cross-links** — 1.1.14 (was 1.1.13)
        * Do not render cross-links that lead to the page itself
      + **swissup/module-hreflang** — 1.6.7 (was 1.6.6)
        * Custom value for locale supports comma-separated list of locales
        * Fixed error "Cannot assign null to property $currentStore"
        * Fixed PHP warning on passing null to explode
      + **swissup/module-rich-snippets** — 1.7.4 (was 1.7.3)
        * Fixed exception about no source items with the in stock status
      + **swissup/module-seo-html-sitemap** — 1.1.19 (was 1.1.18)
        * Prevent deprecation functionality exception
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.18 (was 1.9.16)
      + Fixed js error at grouped product page
      + Breeze integration updated

### Version 1.43.0

> Apr 23, 2024

- **Compatibility with NEW Magento 2.4.7 arrived!** 🤩🤩🤩
- _Argento Blank:_ Code refactoring. Cart actions polishing. Photo-in-description
video problems fixed.
- _Argento Chic:_ Some critical styles added.
- _Argento Force:_ Sizing chart for breeze fixed.


**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.5 (was 1.7.4)
      + Fix broken 'Login for Price' refer param behaviour
  - [AskIt](/m2/extensions/askit/) — 1.14.2 (was 1.14.1)
      + Allow using any version of psr/log dependency
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.6.11 (was 1.6.8)
      + Added redirect from pages with trailing slash to the pages without
      + Underline on hover
      + Fixed height parameter missing in widget slider
  - [ChatGPT Assistant](/m2/extensions/chat-gpt-assistant/) — 1.1.0 (was 1.0.1)
      + Set bulkSize 20 products per operation
      + Added mass product content generation
      + Small default prompts improvements
      + Added content generation for category description and meta tags
      + Added product meta title and keywords generation
      + Small improvement to the meta description prompt
  - [Compare](/m2/extensions/compare/) — 1.2.4 (was 1.2.3)
      + Remove compare link from the highlight widgets when the module is disabled.
  - [EasySlide](/m2/extensions/easyslider/) — 1.8.8 (was 1.8.4)
      + A bit of JS refactor.
      + Solved issue with slide description. User can't remove it
      + Issue occurs because initial value of editor wasn't set even when some text was rendered.
      + Fix 'Each interface must be in a file by itself' use class_alias instead.
      + Allow using any version of psr/log.
      + Do not load swiper lib until it's really needed.
  - [Breeze](/m2/extensions/breeze/) — 2.16.0 (was 2.13.1)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.19 (was 1.9.16)
      + Fix 'Each interface must be in a file by itself' use class_alias instead
      + Fixed inability to remove banner image
      + Update integration with latest Swissup_Gdpr module
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.5 (was 1.5.3)
      + Category id is not required in widget
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.10 (was 1.12.8)
      + Breeze: do not animate expanded tabs because content standing right aside title
      + Fixed incorrect tabs position on Magento 2.4.7
      + Fixed error on Magento 2.4.7
  - [GDPR](/m2/extensions/gdpr/) — 1.6.3 (was 1.5.24)
      + Fixed missing focus style on breeze theme
      + Improve styles for cookie togglers
      + Do not store dummy cookie group in cookies
      + Fixed possible undefined 'swissupGdprCookieSettings' when using js bundling
      + Fixed not working gtag because of window.gtag function
      + Integrate with google consent mode
      + No need to update customer sections after cookie save
      + Preferences cookie group added. Advertisement group is replaced by marketing.
  - [Highlight](/m2/extensions/highlight/) — 1.9.6 (was 1.9.2)
      + Breeze: disable animation for loading placeholders
      + Breeze: fixed not working scroll animation when clicking "next" for the first time
      + Fixed js error in highlight carousel in Luma theme with breeze
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.6.6 (was 1.6.5)
        * Add config at storeview level to set custom locale
        * Magenfan Blog integration update.
      + **swissup/module-seo-urls** — 1.5.50 (was 1.5.49)
        * Improve url resolving when filter name occurs in filter value.
      + **swissup/module-seo-cross-links** — 1.1.13 (was 1.1.12)
        * Mafefan blog: description compatibility added.
        * Magefan blog: category compatibility added.
        * Magefan blog: post list compatibility added.
        * Magefun blog: posts compatibility added.
      + **swissup/module-seo-templates** — 1.7.7 (was 1.7.6)
        * Fixed error "setPage() on null" on Magento 2.4.7.
      + **swissup/module-seo-pager** — 1.3.5 (was 1.3.3)
        * Improve stability. Prevent load of main collection at listing. It helps to avoid Illegal state exception.
        * Prevent exception from Magento_Review module on product listing.
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.13 (was 1.17.10)
      + Hide items in nowrap mode until menu is ready to reduce layout shift
      + Fixed possible error when no categories found
      + Remove extra margin below category on mobile devices
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.28 (was 1.7.22)
      + Fixed "Invalid header value" error when image has newlines around src
      + Remove useless (old version) of ParamsBuilder
      + Fix curl options in custom admin form field(s)
      + Allow using any version of psr/log dependency
      + Fix 'Deprecated Functionality: Automatic conversion of false to array is deprecated'
      + Reworked image adapter(s) integration (preference => plugin)
      + Fix: "Uncaught Error: Script error for 'jquery' and 'mage/apply/main'; too early run require() before requirejs-min-resolver, mixins, etc.
      + Fixed custom images over-optimizing
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.7 (was 1.7.6)
      + Update uk_UA.csv. Remove pro swop from translations
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.16 (was 1.9.15)
      + Fixed js error at grouped product page.
      + Fix error on Magento 2.4.7 at product page with configurable products in SoldTogether.
      + Update uk_UA.csv. Remove pro swop
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.13 (was 1.3.12)

### Version 1.42.0

> Feb 29, 2024

- **Added the brand NEW mesmerizing** **[Argento Chic](/m2/argento/chic/)**  **design** 🎉🎉🎉
- _Argento Blank:_ Small improvements in jumbotrons and image-block element,
    added marquee3k script
- _Argento Marketplace:_ Few cosmetic changes 💄
- _Theme Editor:_ Added **[Argento Chic](/m2/argento/chic/)** to theme list

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.4 (was 1.7.2)
      + Fixed js error when window.checkout is not defined
  - [AskIt](/m2/extensions/askit/) — 1.14.1 (was 1.13.3)
      + Prevent 404 error on prodyct page caused by js ajax request.
      + Try to render product questions listing only when there are questions.
      + Questions page: Option "enable when has questions" respects question status.
      + New config group "Questions page". You can disable then at all.
        Or show questions page only when it has at least one question. Or show questions page always.
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.6.8 (was 1.6.7)
      + Added width/height to option product image
  - [Breeze](/m2/extensions/breeze/) — 2.13.1 (was 2.12.0)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.16 (was 1.9.14)
      + Fixed possible incorrect edit banner url in admin (Logout from admin)
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.3 (was 1.5.2)
      + Added missing jQueryUI dependency
  - [Fblike](/m2/extensions/fblike/) — 1.3.9 (was 1.3.8)
      + Fixed infinite loader with latest breeze module
  - [Highlight](/m2/extensions/highlight/) — 1.9.2 (was 1.9.0)
      + Keep the gap between ajax slides same as between products inside this slide
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.6.5 (was 1.6.4)
        * Fix issue when user is logged out in Magento Admin.
      + **swissup/module-seo-canonical** — 1.11.9 (was 1.11.8)
        * Create category attribute. Use it as custom canonical.
      + **swissup/module-seo-urls** — 1.5.49 (was 1.5.48)
        * Smile Integration update. Fix PHP error "Illegal offset type in isset or empty"
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.10 (was 1.17.8)
      + Fixed nowrap on mobile devices when nav is using _display: none_
      + Fixed invisible dropdown menu on mobile devices
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.15 (was 1.9.12)
      + Properly check when swatches module enbaled.
      + Fix poorly calculated totla price at FBT blcok when price displayed "Including and Excluding Tax".
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.12 (was 1.3.11)
      + Lazy load for profile image in widget

### Version 1.41.0

> Jan 17, 2024

- Added many code fixes and improvements
- _Argento Blank:_ Added ability to set slides per view for the Argento Swiper with CSS class and removed unused code
- _Argento Marketplace:_ Fixed wrong departments menu icon position

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.2 (was 1.6.30)
      + Improve ajaxpro subscribe logic
      + modal-manager was refactored
      + Fix Modalmanager undefined in breeze/minicart.js
      + Improve breeze integration
      + Fix cart show on minicart click
      + Improve modal-manager
      + Breeze: dynamic js. WIP
      + Fix: TypeError: Cannot read properties of null (reading ‘split’)
      + Fix cart show on minicart click
      + Fixed error on luma theme
      + Breeze: reuse luma file
      + Breeze: fixed js errors in latest changes
      + Improve code readability
      + Add get-product-request.js
      + Fix: Avoid using closing slash with void tags
      + Fix missing floatingcart/item/default template
      + Fix: Duplicated IDs in floating cart
      + Remove Magento 2.2 compatibility. This also fixes adding of gallery.less in breeze theme.
      + Do not add quickview to wishlist popup (Breeze Theme)
      + Ability to change quick-view icon
      + Breeze: Fixed not working “Procced to checkout” button after first add to cart.
      + Code improvements
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.15 (was 1.13.13)
      + New variables for folded design
      + Breeze theme fixes
      + Fixed not visible "View all" link.
  - [AMP](/m2/extensions/amp/) — 1.5.7 (was 1.5.6)
      + Code improvements
  - [AskIt](/m2/extensions/askit/) — 1.13.3 (was 1.13.1)
      + Fixed possible 'Class does not exist' error
      + Fix undefined variable in captcha observer.
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.6.7 (was 1.6.4)
      + Fixed possible division by zero error
      + Update integration with Swissup_Ajaxlayerednavigation
      + Fixed possible PHP error in backend when saving the option without parent page
  - [Breeze](/m2/extensions/breeze/) — 2.10.0 (was 2.7.3)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Compare](/m2/extensions/compare/) — 1.2.2 (was 1.2.1)
      + Code improvements
      + Update breeze integration
  - [EasySlide](/m2/extensions/easyslider/) — 1.8.4 (was 1.8.1)
      + Improve description positioning. Remove font style.
      + Code improvements
      + Slider with thumbnails. Render empty thumbnail when can't resize.
      + Add mime type of image in system log.
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.14 (was 1.9.11)
      + Remove unused code
      + Do not show banner when cookie is not writable
      + Breeze: dynamic js. WIP
      + Improve label for shopping cart items rules
      + Fixed not working lightbox/awesomebar popups
      + Fix 'Call to undefined function Composer\Autoload\includeFile'
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.2 (was 1.5.0)
      + Improve breeze compatibility
      + Fix sort order in widget form
      + Allow using lazyload attribute
      + Integration of 'hide_when_filter_is_used' with Swissup_AjaxLayerednavigation module
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.7 (was 1.12.4)
      + Tabs updater code improvement. Get instance of ui widget properly.
  Fisrt try uiwidgetname(&#039;instance&#039;). When it doesn't work try get instance via .data(). It makes code more compatible with others.
      + Fix invisible focus ring in a better way that doesn't affect third-party themes
      + Breeze theme: Fixed invisible focus ring
      + Fixed error on breeze theme
      + Update default params in installer command
      + Fixed content height when float is used
      + Expanded with toolbar. Reduce jumping when click on tab in toolbar.
        The core of this problem is in mage/collapsible:_scrollToTopIfNotVisible_.
      + Improve ARIA for expanded tabs. Present tabs titles as headings.
      + Restore role after reviews loaded.
      + Properly define destroy method for ui widget.
      + Allow to change expanded tabs width
      + JS code improve. Bind events with widget _on_. So Breeze turbo can easily unbind them.
      + Fix not loaded reviews when tab loaded via ajax and layout is expanded tabs.
      + Fix and improve scroll to tab logic when tab ID is in url hash.
      + Fixed scroll to review tab when url hash is review-form.
      + Ability to override CSS values
      + Use font size from theme settings

  - [GDPR](/m2/extensions/gdpr/) — 1.5.22 (was 1.5.19)
      + Update locale files: ar_SA, de_DE, en_US, es_ES, fr_FR, he_IL, it_IT, ja_JP, ko_KR, nb_NO, nl_NL, pl_PL, pt_PT, ru_RU, sw_SE, uk_UA, zh_CN
      + A11y fixes
      + Remove unused variable
  - [Highlight](/m2/extensions/highlight/) — 1.9.0 (was 1.8.10)
      + Added ability to set custom sort order for highlight page.
  See [Highlight](https://docs.swissuplabs.com/m2/extensions/highlight/pages/#advanced-settings)
      + Do not clone slide item until user wants to scroll
      + ArgentoChic variable
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.8 (was 1.17.5)
      + Breeze: dynamic js. WIP
      + Update breeze integration
      + Improve store id getting in graphql
      + Revert "Do not add parent-expanded class is item has no child (same as parent class work)"
      + Do not add parent-expanded class if item has no child (same as parent class works)
      + Breeze: chevron support added
      + Backport dropdown positioning from luma-based module
      + Remove useless 'rtl' file
      + Do not hide expanded menu after window resize.
      + Fixed duplicate breadcrumb label when category found multiple times.
      + Removed old code since it's merged into 2.3.0: magento/magento2@22746f0
      + Fixed double caret on Firefox
      + Do not clean cache when saved category is not used in the menu
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.21 (was 1.7.11)
      + Fix gzip header detection
      + Fix HTTP2 detecting (skip default http_ver param)
      + Merge head scripts blocks
      + Fix console warning messages
      + Fix mapping in advance js bundling
      + Fix checkoutConfig deferring error
      + Improve 'interactive' config description
      + Override require.config for interactive deps loading
      + Fix js defer, add ignore window.checkout
      + Up Magento framework composer requirements (2.4.4)
      + Fix Firefox integration
      + Fix broken unpacking
      + Add interactive unpacking mode for delayed scripts
      + Add load-all-requirejs-scripts.js (disabled)
      + Code improvements
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.5 (was 1.7.3)
      + LabelsProvider code refactor.
      + Move labels' variables processing in backend into a separate class.
      + Fix not processed variables in labels.
      + Allow to set type of predefined variable
        Examples, #attr:sku:string#.
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.16 (was 1.1.15)
      + Fixed empty email in GdprReviewreminder plugin when saving reminder from edit form
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.7.3 (was 1.7.0)
        * Added OnlineStore to the Organization Type dropdown
        * Fix MCS.
        * Proper value for rich snippets/product/image/id
        * Set image size for product data snippet
        * Fix explode(): Passing null to parameter 2
        * Product data snippet. Use the same image as og:image on the page.
        * Shipping details - work with table rate shipping and matrix rate shipping from WebShopApps vendor.
      + **swissup/module-seo-html-sitemap** — 1.1.18 (was 1.1.16)
        * Fix type in property name of Block\Stores.
        * Block Stores. Code refactor.
        * Fix PHP error on sitemap page when stores added there.
        * Reduce allocated memory while rendering sitemap.
          Load collections by pages to reduce memory usage.
      + **swissup/module-seo-images** — 1.3.20 (was 1.3.19)
        * Improve module stability.
          Prevent memory exhausted errors on big collections.
        * Update index on product save when index not set to "On Schedule".
        * Truncate table instead of delete when reindex
      + **swissup/module-seo-urls** — 1.5.48 (was 1.5.47)
        * Fixed swatches mixin for Magento 2.4.1+
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.12 (was 1.9.9)
      + Breeze: dynamic js. WIP
      + Breeze: fixed incorrect bundle name
      + Compatibility with older Magento versions
      + FBT - fix not updated total amount when promoted product option changed
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.11 (was 1.3.9)
      + Breeze dynamic js. WIP
      + Breeze: remove unused file
      + Improve breeze integration
      + Reduce CSS size
      + Installer command added
      + Remove empty spaces around text when adding small quotes around (::before, ::after)
      + Revert "Prevent layout shift when using swiper"

### Version 1.40.0

> Sep 15, 2023

 - The main change is that Sticky Header option added to all theme designs and can be accessed from backend theme editor
 - Configurable header styles improved
 - Configurable header styles improved
 - Fixed missing header links on mobile

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.30 (was 1.6.23)
      + Fixed force reload page after adding product with option in_cart/1/ in url
      + Fixed missing quick-view inside magento widget
      + Hide "Options Details" title in floating cart
      + Fixed possible incorrect quick-view position
      + CSS fixes
      + Hide quick-view on list mode (bad positioning)
      + WIP: allow to place quick-view to secondary actions container
      + Breeze: reuse quick-view component. Work in progress.
      + Fix show behaviour run customerData.reload([], false)
      + Add ModalManager.has; fix race bug for prevent 'random' popup (unregister before register)
      + Split minicart.js, add minicart/override.js; add setTimeout for prevent random popup
      + Fixed layout error
      + Breeze: compatibility with breeze:config:dump
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.13 (was 1.13.10)
      + JS - remove service inputs from accessibility tree.
      + Fixed layout error
      + Breeze: integration with breeze:config:dump command
  - [AskIt](/m2/extensions/askit/) — 1.13.1 (was 1.12.15)
      + Removed trailing comma in constructor (PHP 7.4 compatibility)
      + Integration with Google ReCaptcha v3
      + Fix : Caught class NoSuchEntityException not found
      + Fix graphql cacheIdentity logic
      + Fix: Deprecated Functionality: strpos(): Passing null to parameter 1
      + Add createVote graphql mutation (like, dislike)
      + Add 'provide the graphQL can return the product (item) data'
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.6.4 (was 1.6.1)
      + Fixed possible "getIdentifier() on bool" error at the backend option page
      + Fixed missing field label when pagebuilder is disabled
      + Fixed double slash in product URL when product_use_categories option is enabled
      + Fixed: Do not set page title if layout update xml is used
  - [Breeze](/m2/extensions/breeze/) — 2.10.0 (was 2.7.3)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [ChatGPT Assistant](/m2/extensions/chat-gpt-assistant/) — 1.0.1 (was 1.0.0)
      + Fixed PHP Stan errors
      + Added OpenAI model config
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.11 (was 1.9.8)
      + Lazy load cookie read to improve TBT
      + Improve preview of html banner
      + Show html banner preview in backend popup
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.0 (was 1.4.24)
      + Reduce count of generated images
      + Do not use use cache by default
      + Cache added
      + PHP Stan fixes
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.4 (was 1.12.0)
      + Attributes tab - use store label for when renderAttributeLabel.
      + Other translation for attribute label set in Magento Admin.
      + Breeze: improve integration with force theme
      + Fix Deprecated Functionality: str_replace()
      + Prevent layout shift when loader is disabled
  - [GDPR](/m2/extensions/gdpr/) — 1.5.19 (was 1.5.15)
      + Performance: improved LCP when cookie bar is enabled
      + Breeze: fixed show/hide labels
      + Performance: improve LCP metrics
      + Remove code written for php 5
      + Fixed layout error
      + Breeze: update integration
      + Breeze: config:dump compatibility
  - [Highlight](/m2/extensions/highlight/) — 1.8.10 (was 1.8.7)
      + Add additional classes to override breeze defaults
      + Fixed laggy slider mouse drag when breeze theme is used
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.6.4 (was 1.5.9)
        * Code refactor for Helper\Sitemap.
        * Escape urls for hreflang data in XML sitemap.
        * Update Amasty Store Locator integration.
        * Prevent error at category edit - undefined offset.
        * Prevent error at category edit due to third-party module conflict.
        * Create proper foreign keys for table SWISSUP_HREFLANG_CATEGORY.
        * Alternative hreflang values for categories
        * Refactor for CMS Page load/save observers in adminhtml.
        * Link categories - manage hreflang link data when editing category.
        * Link categories - remove hard-coded attribute ID
      + **swissup/module-hreflang-import-export** — 1.0.1 (was 1.0.0)
        * Remove redundent properties in export collection factories.
        * Catalog Category hreflang data export.
        * Catalog Category hreflang data import
        * CMS Pages hreflang data export.
      + **swissup/module-seo-core** — 1.3.9 (was 1.3.8)
        * Fix getQuery for url model.
        * Allow filter directive to have digits in it.
      + **swissup/module-seo-templates** — 1.7.5 (was 1.7.3)
        * Directly render HTML entities (emojis) as symbols
        * Edit category form - generated data order in section "SEO Suite".
      + **swissup/module-seo-urls** — 1.5.47 (was 1.5.42)
        * Fix for layered navigation when multiple lables applied to one filter.
        * Fix "Return value must be of type array, string returned".
        * Fix missing variable.
        * A bit of code refactoring.
        * Fix not working URLs in filters when filters have the same labels.
        * Filter item in Layered Nav. - force or remove nofollow
        * Fix/Improve category swissup/aln integration
        * Fix error - Too few arguments to function getCategoryUrlRewrite.
        * And remove direct dependancy from Hreflang module. Now client can safly remove package 'swissup/module-hreflang' if it is not needed.
        * Watches on listing plugin refactored.
      + **swissup/module-rich-snippets** — 1.6.2 (was 1.5.5)
        * FAQ snippet widget
        * Meets MSC - use sha instead of md5.
        * Cache shipping details snippet data to avoid too many shipping requests to online carriers.
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.5 (was 1.17.0)
      + Fixed not working 'dark' modifier for boxed dropdown.
      + TBT improvement: move logic to separate task
      + Fixed missing caret icon when js is not initialized yet. (Caret blink fix)
      + Breeze: remove not needed init script
      + Breeze: Fixed error when breeze theme is not updated
      + Breeze: slideout menu fixes
      + Breeze: fixed styles for stacked, slideout and other menu's
      + Breeze: fixed not working overlay after page visit
      + Breeze: improve integration
      + Renamed header/menu sticky class
      + Disable home expanded menu when sticky header used
      + Fixed incorrect "Shop All" link and item classes when alphabetical sort is used
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.3 (was 1.7.1)
      + Minor code improvement to reduce hardcoded data
      + Add final price to conditions
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.11 (was 1.7.4)
      + Add 'Catalog media URL format' checking before run 'images:optimize' command
      + Fix broken srcset if webp some size doesn't exist
      + Replace origin src in <img> tag inside <picture> (webp) for breeze compatability
      + Run html optimizers early to prevent race condition with breeze
      + Prevent: PHP8.1 Deprecated function
      + Fix broken path detection /media//
      + Remove unused code
      + Fix file extension detecting with query params in url (webp)
      + Add magento/module-media-gallery-renditions integration
      + Add rjs configuration level app/etc/rjs.json
      + Fix: Warning: strpos(): Empty needle
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.15 (was 1.1.14)
      + Skip reminder if there is no products
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.9 (was 1.9.8)
      + FBT - fix not updated total amount when main product option changed.
      + Remove blocks at checkout cart configure item
      + Fix error ID already exists when rendering block for order or cart.
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.9 (was 1.3.8)
      + Fixed access to undefined constant
      + Do not use return in _construct
      + Fixed not-working slides_to_show widget config

### Version 1.39.0

> Jul 1, 2023

 - [**ChatGPT Assistant**](/m2/extensions/chat-gpt-assistant/) **module added**
 - FishPig Wordpress integration update: show large images at posts list
 - Fixed sticky layered navigation width bug
 - Added ability to disable Magento compare feature with `Swissup\Compare` module
 - Added missing alt for photo in description image
 - Updated ARIA attributes for navigation sidebar on mobile
 - Fixed accessibility error: button missing accessible name
 - Improved scroll into view for collapsible: fixed accordion jumping on Safari
 - Fixed accessibility error in social icons in footer
 - Improved styles for EasyTabs
 - _Argento Home:_ Fixed overlapped "Forgot password" link in login popup
 - _Argento Stripes:_ Fixed poorly looking sticky add to cart
 - _Argento Marketplace:_ Improved Paypal Express form styles

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.23 (was 1.6.21)
      + Breeze: fixed missing "out of stock" message
      + Simple cart handling improved
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.10 (was 1.13.6)
      + Fixed error when ElasticSearch 8 used
      + Fixed undefined factory "lmysql"
      + Breeze: updated integration
      + Breeze: fixed visible autocomplete dropdown on initial page load
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.6.1 (was 1.5.3)
      + Fixed missing body classes on attribute and option pages
      + Pagebuilder added to backend description and short description fields
      + Added ability to set different H1 and meta title
      + Fixed incorrect page title when page is overriden for store view
      + Fixed “Item with the same ID already exists” error
  - [Breeze](/m2/extensions/breeze/) — 2.7.3 (was 2.5.5)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Compare](/m2/extensions/compare/) — 1.2.1 (was 1.1.3)
      + Added new options to module configuration
      + Added "Add new product" link to the compare page
      + Added compatibility with Breeze module
      + Improved compare table scrollbar style
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.8 (was 1.9.7)
      + Add "equals or greater than" and "equals or less than" conditions operators
  - [Easytabs](/m2/extensions/easytabs/) — 1.12.0 (was 1.11.5)
      + Update integration with Breeze-powered frontend
      + Accessibility update: remaster collapsible tabs template to meet accesibility requirements
  - [GDPR](/m2/extensions/gdpr/) — 1.5.15 (was 1.5.13)
      + Fixed missing validation message in Askit question form
      + Breeze: updated integration
  - [Highlight](/m2/extensions/highlight/) — 1.8.7 (was 1.8.6)
      + Fixed not working ajax "add to cart" at compare page
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.17.0 (was 1.16.19)
      + Removed uenc in cached block: fixes wrong currency switcher redirect
      + Added ability to render dropdown items in alphabetical order
      + Added ability to duplicate existing menu
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.1 (was 1.6.25)
      + Added advanced settings for configurable products and manual labels
      + Fixed missing system “In Stock” label
      + Updated integration with Breeze-powered frontend
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.18 (was 1.1.17)
      + Fixed accessibility error: elements do not have accessible names
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.14 (was 1.1.13)
      + Updated old and broken mass status code
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.5.9 (was 1.5.7)
        * Show all available store views for "Default store" option
      + **swissup/module-rich-snippets** — 1.6.2 (was 1.5.5)
        * Reorganized section “Product structured data” to be more intuitive
      + **swissup/module-seo-urls** — 1.5.42 (was 1.5.40)
        * Improve compatibility with Swissup Ajax Layered Navigation module and SEO URLs setting “Use direct URL to subcategory”
        * Fixed error: category not found at attribute page filtered by category
      + **swissup/module-seo-pager** — 1.3.2 (was 1.2.11)
        * Implemented Google recommendations for paginated product listings
        * Fixed not updated title of paginated content when page cache enabled
        * Fixed not-working "Relevance" sorting option on search results page
      + **swissup/module-seo-templates** — 1.7.3 (was 1.6.5)
        * Allow to use translations in metadata templates
        * New condition for category templates: Layered Navigation / Applied filter
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.8 (was 1.9.6)
      + Fixes to improve Accessibility score on product page
      + Updated integration with Breeze-powered storefront
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.8 (was 1.3.6)
      + Fixed file upload in Magento 2.4.5+
      + Added email validation in the admin form
      + Added email validation in graphQL Resolver

### Version 1.38.0

> May 2, 2023

 - FishPig Wordpress css update. Tested on FishPig version 3.28.0.
 - Fixed Safari benefits icons overlapping background (Argento Home)
 - Update XML layout to move add-to buttons below add-to-cart.
   It reduces number of XML layout updfate directives and solves issue when add-to buttons not visible for out of stock products. (Argento Stripes)
 - FishPig Wordpress integration JS for breeze.
 - Added option to check and fix the "Virtual Themes" error from backend
   in Swissup > Core > Troubleshooting

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.21 (was 1.6.19)
      +  Improve modal-manager (add unregister)
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.6 (was 1.13.5)
      + Removed Debugging comments
  - [AMP](/m2/extensions/amp/) — 1.5.6 (was 1.5.5)
      + Prevent passing null to explode parameter is deprecated error
      + Add Danish translations
  - [AskIt](/m2/extensions/askit/) — 1.12.15 (was 1.12.14)
      + Fixed class not found on submitting question.
      + Add Danish translations (frontend only)
  - [Breeze](/m2/extensions/breeze/) — 2.4.5 (was 2.3.2)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [EasySlide](/m2/extensions/easyslider/) — 1.8.0 (was 1.7.1)
      + Update responsive image settings for image slides.
        Proper config ontions for sizes attribute and widths to generate srcset attribute. Previously there was grid to generate not so well sizes and srcset.
      + Show active period for slide at gallery at edit slider in Admin
      + Edit slide popup in Admin. Dropdown an d datepicker slightly wider.
        And the same width.
      + Fixed: Output slides on storefron respecting active from and active to.
      + Edit slide popup in Admin. Move visibility toggler to image side
      + Edit slide popup in Admin. Slide active_from and active_to
      + JS refactor for Admin. Code clean up
      + JS refactor for Admin. Initialize toggler via data-mage-init.
      + JS refactor for Admin. Initialize codemirror via data-mage-init.
      + JS refactor for Admin. Simplify codemirror initialization.
      + Fixed: Edit slide popup in Admin. Allow to chnage slide image
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.7 (was 1.9.6)
      + Breeze: fixed js error when no banners were created
  - [Easytabs](/m2/extensions/easytabs/) — 1.11.5 (was 1.11.4)
      + Fixed [aria] attributes are not vald or misspelled.
      And set want tabpanel controls tab with attribute aria-controls.
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.19 (was 1.16.17)
      + Fixed missing active class for CMS links inside menu
      + Sync dropdown class name with latest jqueryUI
      + Fixed unable to save changes using pagebuilder
      + Improve image, paragraph, and heading preview
      + Fixed MCS
      + Improve preview for iframe, map, slider, and grid widgets.
      + Fixed error in browser console when using pagebuilder in dropdown content
      + Avoid using closing slash with void tags
      + Remove not working code
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.4 (was 1.7.1)
      + Decrease laminas/laminas-* composer requirements for old magento versions
      + Fix guzzlehttp/psr7 requirements
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.25 (was 1.6.24)
      + Fixed: Accessibility fix - links are not crawlable error
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.5.7 (was 1.5.6)
        * Fixed class "Zend_Uri" not found in Magento 2.4.6
      + **swissup/module-rich-snippets** — 1.5.5 (was 1.5.4)
        * Fixed: Correct structured data for grouped products
      + **swissup/module-seo-images** — 1.3.18 (was 1.3.17)
        * Add index for field target_file to speed up DB queries.
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.6 (was 1.9.4)
      + Improve module stability at edit product form in Magento Admin.
        Prevent PHP error when related product does not exist.
      + Fix total price counting for FBT block at storefront.
      + DataProvider/Products - exclude current product(s).
      + Breeze integrations.
      + Add Danish translations (frontend only)
      + Fix: Improve perfomance when option "List random products for empty collections" enabled
      + Fix: Error `Item (...) with the same ID "..." already exists.`
        Fix for storefront blocks.
      + Storefront block getIdententies is empty when block is disabled.
        Previously DB query still executed event when block was disabled

### Version 1.37.0

> Mar 31, 2023

 - Fixed error that happens when the `ProLabels` module is disabled
 - Updated `SEO Pagination` default configuration
 - Themes and extensions were made compatible with Magento 2.4.6 and PHP 8.2
 - Added Sold Together Import/Export extension

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.19 (was 1.6.18)
      +  Removed Zend_Json usage (Magento 2.4.6 compatilibity)
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.5 (was 1.13.1)
      + Removed deprecated jQuery methods
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Fixed undefined factory opensearch error
  - [AMP](/m2/extensions/amp/) — 1.5.5 (was 1.5.3)
      + Fixed deprecated mb_convert_encoding usage (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [AskIt](/m2/extensions/askit/) — 1.12.14 (was 1.12.10)
      + Removed deprecated jQuery methods
      + Remove unused filterOutputHtml method
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.5.3 (was 1.5.2)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
  - [Breeze](/m2/extensions/breeze/) — 2.4.5 (was 2.3.2)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [EasySlide](/m2/extensions/easyslider/) — 1.7.1 (was 1.6.28)
      + Added new type of slide `Raw HTML`
      + Added fancy features to edit slide popup in admin
      + Fixed wrong description positon value
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.6 (was 1.9.3)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [Easytabs](/m2/extensions/easytabs/) — 1.11.4 (was 1.11.2)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [Fblike](/m2/extensions/fblike/) — 1.3.8 (was 1.3.7)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
  - [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.7 (was 1.1.6)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
  - [GDPR](/m2/extensions/gdpr/) — 1.5.13 (was 1.5.9)
      + PHP 8.2 compatibility
      + When new cookie group is added by store administrator, show cookie consent again to all visitors
      + Fixed possible initially invisible consents in all forms except newsletter
  - [Highlight](/m2/extensions/highlight/) — 1.8.6 (was 1.8.4)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.7.1 (was 1.6.8)
      + PHP 8.2 compatibility
      + Resize only important image types
      + Fixed htaccess is not a valid file path
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.24 (was 1.6.22)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Added sort order for labels
      + Added duplicate label button
  - [SEO Suite](/m2/extensions/seo-suite/)
      + Compatibility with Magento 2.4.6 and PHP 8.2
      + **swissup/module-hreflang** — 1.5.6 (was 1.5.3)
        * Don't add hreflang to page that have canonical pointing to other page
      + **swissup/module-rich-snippets** — 1.5.4 (was 1.5.0)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
        * Product structured data. Allow to override @id, @type and @context with attributes.
        * Fixed "Can’t check requested quantity for products"
      + **swissup/module-seo-cross-links** — 1.1.11 (was 1.1.7)
        * Fixed broken characters (currency, etc) in widgets
        * Fixed broken cyrillic characters after DOMDocument saveHTML
      + **swissup/module-seo-images** — 1.3.17 (was 1.3.16)
        * Fixed high memory usage during CLI reindex
      + **swissup/module-seo-urls** — 1.5.40 (was 1.5.38)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + **swissup/module-seo-xml-sitemap** — 1.1.14 (was 1.1.13)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + **swissup/module-seo-pager** — 1.2.11 (was 1.2.9)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
        * Removed usage of Zend classes (Magento 2.4.6 compatilibity)
      + **swissup/module-seo-templates** — 1.6.5 (was 1.6.3)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + **swissup/module-seo-html-sitemap** — 1.1.15 (was 1.1.14)
        * Fixed dynamic properties creation (PHP 8.2 compatilibity)
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.4 (was 1.9.0)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Refactor link data provider for ui component: compatibility with Adobe Commerce
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.6 (was 1.3.3)
      + Fixed dynamic properties creation (PHP 8.2 compatilibity)
      + Removed usage of Zend classes (Magento 2.4.6 compatilibity)

### Version 1.36.0

> Feb 22, 2023

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.18 (was 1.6.16)
      + Improved minicart preloading
      + Improved abstarct customerData handles logic
  - [AskIt](/m2/extensions/askit/) — 1.12.10 (was 1.12.9)
      + Fix: Added correct refer (url) param
      + Fix: Prevent js errors when ajax request was failed
  - [Breeze](/m2/extensions/breeze/) — 2.3.2 (was 2.2.0)
      + Fixed incorrect css class for alert modal
      + Fixed visible loader after 'hide' call when custom loader was found in DOM
      + Refactor and minimize isResourceVersionChanged method
      + Fixed possible different resource version numbers on different pages
      + Do not list virtual themes when selecting parent one
      + getVendorName moved to abstract command
      + Move shared logic to abstract command
      + New command: `breeze:theme:create`
      + Do not confirm `module:create` action when package was entered via args
      + Update `module:create` command description
      + Add compatiblity with old jQuery .bind method
      + Range slider added
      + Add mage/template implementation
      + Improve uiComponent template searching.
      + Add observe function to view component
      + Allow to call ajax request with two params (jQuery-like): `$.get(url, callback)`
      + Do not process ajax response if it's not ok.
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.28 (was 1.6.27)
      + Prevent fix: Fatal error Call to undefined function Composer\Autoload\includeFile()
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.3 (was 1.9.2)
      + Prevent fix: Fatal error Call to undefined function Composer\Autoload\includeFile()
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.5.3 (was 1.5.2)
        * One more fix for newer PHP - fix Passing null to parameter 2 ($string)
          in /cache/vendor/swissup/module-hreflang/Helper/Store.php on line 269
      + **swissup/module-rich-snippets** — 1.5.0 (was 1.4.23)
        * Organization block - code refactor.
        * Don't render website data snippet when no data is set
        * Fix: copy/paste warning.
        * Fix wrong markup (must be only one mainEntity at QAPage)
        * Closed issue: Add opening hours config for organization data snippet
        * Closed issue: Add weight unit information to product snippet
        * Organization config comment.
        * Set store (organization) type for organization snippet.
        * StructuredData/DataSnippetInterface - fix phpdoc return type
        * Refactor Model/Product/StrcuturedData.
        * Create and use interface for product structured data data snippet.
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.6.8 (was 1.6.3)
      + Add env checking in CheckImageOptimizerExisting.php
      + Fix: PHP 8.1 Deprecated Functionality: preg_match_all
      + Don't minify data-breeze scripts (fix for JSMin: Unterminated RegExp at byte 2326: /ko -->)
      + Force to string converting before Minify_HTML
      + Prevent: PHP8.1 Deprecated function trim(): Passing null to parameter
      + Fix/Prevent: Deprecated Functionality: preg_replace_callback(): Passing null to parameter 3 (subject) mrclay/minify/lib/Minify/HTML.php on line 111
      + Closed issue: Add config option enable/disable image optimization logging
  - [Sold Together](/m2/extensions/soldtogether/) — 1.9.0 (was 1.8.10)
      + Remove redundant class.
      + Phpdoc update.
      + Remove email blocks config.
        They will be implemented in separate module.
      + Config provider properties from private to protected.
        So the options can be availbale in child class.
      + Move email blocks and templates to separate module.
      + Move prepareLayout from general block to Order specific block.
        Because general block will be used to render email blocks.
      + Edit product page in Admin - add button "Select products" when there no soldtogether links.
  - [Sold Together Email](/m2/extensions/soldtogether/use-cases/#add-block-into-sales-email) — 1.0.0


### Version 1.35.0

> Jan 6, 2023

 - Simplified javascript loading for Argento themes
 - _Argento Stripes:_ Related products block - fix inability to click on select/unselect all

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.16 (was 1.6.15)
      + Fix product popup behaviour at homepage
      + Fixed Pagebuilder products element issue - product added to cart two times.
  - [Breeze](/m2/extensions/breeze/) — 2.1.1 (was 2.0.1)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.24 (was 1.4.23)
      + Fixed broken grid styles
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.6.3 (was 1.6.0)
      + Fix: PHP Exception: no class registered for scheme 'moz-extension'
      + Fix: Notice: Undefined property: ParamsBuilder::
      + Fix: "Add Expire Header Enable" cause cache constatnt miss for logged in customers with Varnish installed
      + Fixed product image params wrong sort order (2.4)
      + Added media/logo dir to target dirs
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.22 (was 1.6.21)
      + Added new condition for manual label - "product type"
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.21 (was 1.4.20)
          * Added: QAPages integration
          * Added: Knowledgebase integration
      + **swissup/module-seo-urls** — 1.5.38 (was 1.5.37)
          * Fixed php 8.1 exception
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.10 (was 1.8.9)
      + Added filtering by product names at "Frequently Bought..." and "Customers Also..." grids.
      + Fixed error at "Frequently Bought..." and "Customers Also..." grids when order them by 'product name' or 'related_product_name'

### Version 1.34.0

> Nov 29, 2022

 -  Fixed showing login popup at checkout
 - Fixed missing spacing between rows when PageBuilder is enabled
 - _Argento Force:_ Updated to work with the latest Easy Catalog Images module
 - _Argento Luxury:_ Fixed category name position in Easy Catalog Images block

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.15 (was 1.6.13)
      + RTL fix for prices inside floating cart
      + Fixed 'data.sort is not a function' error
      + Show quick-view icon if focus was gained with keyboard event
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.1 (was 1.13.0)
      + Increased global results limit: fix for missing category and cms results
  - [Askit](/m2/extensions/askit/) — 1.12.8 (was 1.12.7)
      + Fixed error when creating a new question in admin
  - [Breeze](/m2/extensions/breeze/) — 2.0.1 (was 1.14.4)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.2 (was 1.9.1)
      + Breeze integration updated
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.23 (was 1.4.22)
      + Improved Breeze Theme integration
  - [Easytabs](/m2/extensions/easytabs/) — 1.11.2 (was 1.11.0)
      + Improved Breeze Theme integration
  - [GDPR](/m2/extensions/gdpr/) — 1.5.9 (was 1.5.8)
      + Improve Breeze integration
  - [Highlight](/m2/extensions/highlight/) — 1.8.4 (was 1.8.3)
      + Improved Breeze Theme integration
      + Updated widget placeholders
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.17 (was 1.16.16)
      + Fixed text color in dropdowns when dark_header is enabled
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.6.0 (was 1.5.15)
      + Fixed backward compatability with old magento versions (2.4.1)
      + Fail image optimisation command only if all optimisers are not executable
      + Added image optimization via remote API
      + Fixed Vimeo requirejs error
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.17 (was 1.1.15)
      + Improved integration with Argento Breeze Force theme
      + Fixed not-working quantity switcher on Magento 2.4.5
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.21 (was 1.4.20)
          * PageSpeed compatibility: fixed missing snippets with defer JS enabled
      + **swissup/module-seo-urls** — 1.5.37 (was 1.5.34)
          * Fixed undefined variable PHP error
          * Improved integration with Smile_ElasticsuiteCatalog
          * Fixed not slugified urls when query parameter value is 0
          * Fixed PHP 8.1 - htmlspecialchars_decode(): Passing null to parameter 1
          * Added compatibility with Blueskytechco_LayeredAjax
      + **swissup/module-seo-xml-sitemap** — 1.1.13 (was 1.1.12)
          * Add Mirasvit Knowledge Base urls to sitemap when module enabled
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.9 (was 1.8.7)
      + Using area code GLOBAL for cli indexing: prevent error about not set area code

### Version 1.33.0

> Oct 24, 2022

 -  Added Breeze Integrations module to requirements
 -  Added `Remember me` checkbox to sign in popup
 -  Fixed broken header links styles after block was saved in PageBuilder editor
 -  Fixed duplicated photo-in-description image
 -  Fixed not working theme editor styles for header links saved with PageBuilder
 -  _Argento Force:_ fixed hover image issue when "Image optimization based on query parameters" enabled
 -  _Argento Stripes:_ Fixed horizontal scroll at product page on mobile devices
 -  _Argento Stripes:_ Fixed category description position `Before all columns after title` in category builder

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.13 (was 1.6.8)
      + Prevent js error on old Magento versions (2.2-2.3)
      + Fixed missing product name in the quickview popup
      + Fixed layout handles order in customerData/product
      + Remove empty space below footer when floating cart is enabled
      + Fixed issue with deleting item in cart popup
      + Fixed ‘Not supported’ error on Apache 2.4 and PHP8.1 (cgi as the php handler)
      + Show quick-view button when using tab for navigation
      + Do not show loader on quick-view button when clicking on add to compare
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.0 (was 1.11.24)
      + Fixed initialization time racing bug
      + Replaced deprecated functionality
      + Fixed using non-existing constant
      + Updated Breeze theme integration
  - [Askit](/m2/extensions/askit/) — 1.12.7 (was 1.12.0)
      + Replaced deprecated messageManager functionality
      + Fixed initialization order: call to a member function getHomePageId() on null
      + Added cache identity for correct cache invalidation
      + Fixed Undefined property: Controller\Question\Save::eventManager error
      + Fixed broken backend grid on questions assigned to deleted product
      + Fixed routing logic: it always matched if url path started with ‘questions’
      + Cleanup messages container before sending new request
      + Cleanup the form after question was sent
  - [Breeze](/m2/extensions/breeze/) — 1.14.4 (was 1.13.6)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easybanners](/m2/extensions/easybanners/) — 1.9.1 (was 1.8.2)
      + Fixed missing blocks when added using widget interface
      + Added ability to show banner when cart items match selected products attribute conditions
      + Fixed banner and placeholder rendering in backend PageBuilder
      + Fixed broken page_handle selector in backend "Page" condition
  - [Easytabs](/m2/extensions/easytabs/) — 1.11.0 (was 1.10.4)
      + NEW tabs layout “Expanded with sticky titles”
      + NEW tab option “Update tab content on storefront”
      + “Cross Sell products” tab - allow to specify number of product to show
      + Improved compatibility with PHP 8.1
      + Improved module widget interface
  - [Fblike](/m2/extensions/fblike/) — 1.3.7 (was 1.3.6)
      + Fixed not-working custom Facebook button
  - [Highlight](/m2/extensions/highlight/) — 1.8.3 (was 1.7.30)
      + Add canonical tag to Highlight pages when it is enabled at category
      + Added ability to filter by category and all of its children using plus sign
      + Fixed not working strip tags in Highlight image 'alt'
      + Fixed popular products widget carousel
      + Fixed error during sitemap generation
  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.11 (was 1.3.10)
      + Fixed hover image positioning when "Image optimization based on query parameters" used
      + Updated Breeze Theme integration
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.16 (was 1.16.14)
      + Fixed missing breadcrumbs when Easy Catalog Images used in dropdowns
      + Added graphql cache identity for correct cache invalidation
      + Fixed incorrect mobile breakpoint in Magento 2.4.4+
      + Make sure that nowrap icon has same height as all level0 items
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.15 (was 1.5.8)
      + Fixed strpos deprecated functionality in PHP 8.1
      + Remove all occurences of sourceMappingURL and sourceURL when JS files are aggregated
      + Added PageBuilder integration
      + Updated advanced js bundling configuration for Magento 2.4.5
      + Added theme images optimizations in pub/static
      + Added fix to remove empty `style` tags
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.21 (was 1.6.20)
      + Fixed missing labels at product page when js bundling enabled
      + Fixed hover gallery image positioning
      + Updated Breeze theme integration
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.13 (was 1.1.12)
      + Using correct email sender set on store view level
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-hreflang** — 1.5.2 (was 1.4.12)
          * NEW: set hreflang link for CMS page in Magento Admin
          * Correct hrefalang data for attribute page on storefront
          * Fixes for XML sitemap
      + **swissup/module-seo-cross-links** — 1.1.7 (was 1.1.6)
          * NEW: link tooltip added
          * Fixed possible issue of using ampersand and slash symbols in a keyword
      + **swissup/module-seo-html-sitemap** — 1.1.14 (was 1.1.13)
      + **swissup/module-seo-xml-sitemap** — 1.1.12 (was 1.1.11)
          * Removed hard-coded dependency with SeoHtmlSitemap module
      + **swissup/module-seo-images** — 1.3.16 (was 1.3.15)
          * Added support for media url option "Image optimization based on query parameters"
      + **swissup/module-seo-urls** — 1.5.34 (was 1.5.33)
          * Added compatibility with Smile_Elasticsuite
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.7 (was 1.8.6)
      + Fixed server error "The product that was requested doesn't exist"
      + Updated Breeze theme integration

### Version 1.32.0

> Aug 11, 2022

 -  **Tested for compatibility with Magento 2.4.5**
 -  Fixed full-screen loader when recently viewed widget used on Adobe Commerce 2.4.5
 -  Added Easy Catalog Images thumbnail image size
 -  Fixed theme editor error when theme was removed
 -  Fixed JQMIGRATE warning in console that `change` is deprecated

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.8 (was 1.6.4)
      + Allow to change quick-view icon color via CSS
      + Fixed currency switcher bug
      + Added config option for popup close timeout
      + Fixed broken minicart sidebar replace
      + Prevent display of the product view popup on the same product page
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.24 (was 1.11.20)
      + Breeze theme compatibility fixes
      + Improved code quality
      + Optimized category options graphql request
  - [Askit](/m2/extensions/askit/) — 1.12.0 (was 1.11.5)
      + Removed "My Questions" link from customer account when module is disabled
      + Remove unused layout update files: fixes incorrect layout on cms edit page
      + Improved code quality
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.5.2 (was 1.5.1)
      + PHP 8.1: Returning bool from comparison function is deprecated
  - [Breeze](/m2/extensions/breeze/) — 1.13.6 (was 1.11.11)
      + Lot of fixes and updates available on [Breeze Site](https://breezefront.com/updates)
  - [Easybanners](/m2/extensions/easybanners/) — 1.8.4 (was 1.8.2)
      + Breeze theme fixes
      + Fixed missing block when added using widget interface
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.22 (was 1.4.20)
      + Breeze theme integration added
      + Added default thumbnail image size
  - [Easytabs](/m2/extensions/easytabs/) — 1.10.4 (was 1.10.3)
      + PHP 8.1 compatability fix
  - **FontAwesome** — 1.4.3 (was 1.4.2)
      +  Added license
  - [GDPR](/m2/extensions/gdpr/) — 1.5.8 (was 1.5.4)
      + Google Analytics 4 cookies added to the known cookies list
      + Breeze theme css fixes
      + Fixed not working "New cookie group" button
      + Validate cookie identifier before save
  - [Highlight](/m2/extensions/highlight/) — 1.7.30 (was 1.7.27)
      + Breeze theme fixes
      + Fixed incorrect conditions when multiple blocks added on the same page
      + Fixed js error when sku has double quotes
      + Remove swiper dependency from breeze integration
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.14 (was 1.16.12)
      + Fixed not working menu on touch devices when there are two menus on the page
      + Breeze theme: fixed css errors
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.8 (was 1.5.7)
      + Do not add requireJs lazy loading script if module is disabled
      + Removed jquery.cookie from deps (fixed Magento 2.4.5 broken add to cart)
      + Fixed wrong user agent detection
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.15 (was 1.1.13)
      + Fixed quantity toggler on the new line in Breeze Theme
      + Update product price when changing qty and tier pricing is used
  - [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.12 (was 1.1.10)
      + Fixed error when order contains deleted products
      + Converted install script to declarative schema
  - [SEO Suite](/m2/extensions/seo-suite/)
      + Fixed PHP 8.1 error: passing null to method_exists
      + **swissup/module-hreflang** — 1.4.12 (was 1.4.11)
          * Fixed PHP 8.1 error: passing null to str_replace
      + **swissup/module-rich-snippets** — 1.4.20 (was 1.4.19)
          * Removed unused code from di.xml
      + **swissup/module-seo-urls** — 1.5.33 (was 1.5.32)
          * Fixed PHP 8.1 error: passing null to explode
      + **swissup/module-seo-html-sitemap** — 1.1.13 (was 1.1.12)
          * Converted install script to declarative schema
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.6 (was 1.8.3)
      + Fix for Mirasvit Order Management module
      + Fixed error in Adobe Cloud on PHP 8.1
      + Update for reindexing in admin

### Version 1.31.0

> May 27, 2022

 -  _Theme Editor:_ Fixed logout from admin when css is not deployed yet
 -  _Argento Pure:_ RTL fixes
 -  _Argento Marketplace:_ Removed redundant padding for accordion tabs
 -  _Argento Stripes:_
      -  Fixed unable to scroll for related products carousel on product page
      -  Fixed overlapping on 768-1024px screen sizes on contact page

**Extensions Updates**

  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.20 (was 1.11.19)
      + Breeze theme integration updated
  - [AMP](/m2/extensions/amp/) — 1.5.2 (was 1.5.0)
      + Do not include query params in canonical URL
      + Updated integration with Argento theme editor
  - [Askit](/m2/extensions/askit/) — 1.11.5 (was 1.11.4)
      + Fixed possibility to create a question when module is disabled
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.5.1 (was 1.4.5)
      + Added ability to hide/show certain options in options widget
      + Fixed error in Magento Cloud on PHP 8.1
  - [Breeze](/m2/extensions/breeze/) — 1.11.11 (was 1.11.8)
      + Added range slider support
      + Fixed price update in product listing when swithing to another configurable product variation
  - [Easybanners](/m2/extensions/easybanners/) — 1.8.2 (was 1.8.0)
      + Fixed error in Magento Cloud on PHP 8.1
      + Fixed error: passing null to non-nullable internal function parameter
  - [Easytabs](/m2/extensions/easytabs/) — 1.10.3 (was 1.10.2)
      + Fixed error in Magento Cloud on PHP 8.1
      + Fixed missing prices in tabs loaded via ajax
      + Fixed error: passing null to non-nullable internal function parameter
  - [Fblike](/m2/extensions/fblike/) — 1.3.6 (was 1.3.5)
      + Added Breeze integration
  - [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.6 (was 1.1.5)
      + Breeze theme integration added
  - [GDPR](/m2/extensions/gdpr/) — 1.5.4 (was 1.5.3)
      + PHP 8.1 fixes
  - [Highlight](/m2/extensions/highlight/) — 1.7.27 (was 1.7.25)
      + Performance improvement for ajax carousel on extra large screens
      + Fixed not working "current" filter when using ajax carousel
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.12 (was 1.16.11)
      + Fixed not-working "click" menu on Magento 2.4.4 (jQuery UI conflict)
      + PHP 8.1 compatibility: passing null to explode is deprecated
      + Fixed transparent dropdown bug
      + Breeze integration improvements
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.7 (was 1.5.4)
      + PHP 8.1 deprecated functionality fixes
      + Fixed getimagesize notice
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.19 (was 1.6.18)
      + Fixed missing labels on configurable product's child products
      + Fixed error in Magento Cloud on PHP 8.1
      + Sold Together integration: added linked items processor
  - [SEO Suite](/m2/extensions/seo-suite/)
      + Fixed PHP 8.1 error: passing null to "trim" is deprecated
      + **swissup/module-rich-snippets** — 1.4.19 (was 1.4.17)
          * Performance improvements for configurable products with big number of options
          * Using correct price for grouped product
          * Fixed error: argument 1 must be of the type array, null given
          * Fixed layout XML: 'before.body.end' is container not block
          * AMP integration: removed separate xml layout file
      + **swissup/module-seo-urls** — 1.5.32 (was 1.5.31)
          * PHP 8.1 compatibility: json_decode expects string only
      + **swissup/module-seo-templates** — 1.6.3 (was 1.6.2)
          * Performance improvement: fixed private getter
          * Fixed error in Magento Cloud on PHP 8.1
      + **swissup/module-seo-canonical** — 1.11.6 (was 1.11.5)
          * Fixed issue at attribute pages when canonical URL is missing
      + **swissup/module-seo-cross-links** — 1.1.6 (was 1.1.5)
          * Optimization and performance: implemented memoization for DB queries
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.3 (was 1.8.2)
      + Performance improvement: preload configurable attributes for configurable products
      + Performance improvement when there are no swatches for related configurable products
      + Fixed ability to disable "Also bought" block
      + Do not render scripts when block doesn't have products
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.2 (was 1.3.1)
      + Fixed error when image input is removed from the submit form

### Version 1.30.0

> Apr 21, 2022

 -  Multiple fixes for **Magento 2.4.4**, _PHP 8.1_ and _jQuery 3.6_ compatibility
 -  Added feature to use LESS code in backend theme editor
 -  Breeze integration updated
 -  Login page styles moved from _Home_ theme to _Blank_
 -  Optimized photo in description script for Youtube videos
 -  _Argento Home:_ fixed content jumping when toggling filters placed above content
 -  _Argento Stripes, Argento Marketplace:_ enabled boxed page styles and compact login page
 -  _Argento Marketplace:_ Fixed expanded tabs styles
 -  _Argento Luxury:_ using compact login page style

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.6.4 (was 1.6.3)
      + Code improvements
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.11.19 (was 1.11.17)
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
  - [AMP](/m2/extensions/amp/) — 1.5.0 (was 1.4.15)
      + PHP 8.1 compatibility fixes
      + Updated SCSS compiler to the latest version
      + Replaced FontAwesome icons with SVG icons
  - [Askit](/m2/extensions/askit/) — 1.11.4 (was 1.11.1)
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
  - [Attribute Pages](/m2/extensions/attributepages/) — 1.4.5 (was 1.4.4)
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
      + Converted php schemes into xml format
  - [Breeze](/m2/extensions/breeze/) — 1.11.8 (was 1.10.1)
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
      + Lot of other fixes, check on [Breeze Site](https://breezefront.com/updates)
  - [EasySlide](/m2/extensions/easyslider/) — 1.6.27 (was 1.6.26)
      + Show slide titles in sliders admin interface
  - [Easybanners](/m2/extensions/easybanners/) — 1.8.0 (was 1.7.9)
      + Added duplicate banner action in admin banners grid
  - [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.4.20 (was 1.4.18)
      + Fixed widget settings in PageBuilder
      + Improved styles in backend PageBuilder preview
      + Using data patch instead of setup scripts
  - [Easytabs](/m2/extensions/easytabs/) — 1.10.2 (was 1.9.22)
      + Added ability to show crosssell products in product page tabs
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
      + Whitelisted static block tab in AMP
  - [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.5 (was 1.1.4)
      + PHP 8.1 compatibility fix
  - [GDPR](/m2/extensions/gdpr/) — 1.5.3 (was 1.4.11)
      + Added ability to make a pre-checked cookie consent for optional cookie group
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
  - [Highlight](/m2/extensions/highlight/) — 1.7.25 (was 1.7.22)
      + Fixed issue with long product names when using carousel mode
      + Fixed animated arrow jumping when hover over carousel widget
  - [Lightbox Pro](/m2/extensions/lightboxpro/) — 1.3.5 (was 1.3.3)
      + Using correct alt for gallery preloading image
      + PHP 8.1 compatibility fix
  - [Navigation Pro](/m2/extensions/navigationpro/) — 1.16.11 (was 1.16.9)
      + Fixed incorrect has-active class on custom non-category links
      + PHP 8.1 compatibility fixes
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.5.4 (was 1.5.3)
      + Fixed broken svg icons inside css files
  - [ProLabels](/m2/extensions/prolabels/) — 1.6.18 (was 1.6.16)
      + Respect manage stock setting when showing out of stock label
      + PHP 8.1 and jQuery 3.6 compatibility fixes
  - [Quantity Switcher](/m2/extensions/qty-switcher/) — 1.1.13 (was 1.1.12)
      + Breeze: improved integration with arrows mode
  - [SEO Suite](/m2/extensions/seo-suite/)
      + **swissup/module-rich-snippets** — 1.4.17 (was 1.4.16)
          * PHP 8.1 compatibility fixes
      + **swissup/module-seo-canonical** — 1.11.5 (was 1.11.4)
          * Added config to select product attribute and use it as canonical URL
      + **swissup/module-seo-cross-links** — 1.1.5 (was 1.1.4)
          * PHP 8.1 compatibility fix
      + **swissup/module-seo-images** — 1.3.15 (was 1.3.14)
          * PHP 8.1 compatibility fix
          * Converted php schemes into xml format
      + **swissup/module-seo-urls** — 1.5.31 (was 1.5.30)
          * Fixed missing translations when category filter applied
      + **swissup/module-seo-templates** — 1.6.2 (was 1.6.1)
          * PHP 8.1 compatibility fix
          * Converted php schemes into xml format
  - [Sold Together](/m2/extensions/soldtogether/) — 1.8.2 (was 1.7.17)
      + Added feature to promote products in “Frequently bought together” block
      + Improved admin interface at edit product form
      + Performance improvements
      + Magento 2.4.4 and PHP 8.1 compatibility fixes
      + Fixed dropdown with swatches/options on Amazon layout

### Version 1.29.0

> Mar 10, 2022

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
      + Fixed possible disappeared message after add to cart. It prevents Magento from updating customer sections after registring unknown cookie.
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
      + Updated and rethinked edit slider form in Magento Admin.

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
