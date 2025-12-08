---
layout: default
title: Argento Breeze changelog
description: Argento Breeze changelog
category: ArgentoBreeze
---

# Argento Breeze Changelog

### Version 2.9.0

> December 8, 2025

  - _ArgentoBreeze Business Theme_ 
      + Read more => Read Testimonials

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.30 (was 1.7.29)
      + Breeze: update integration
      + Breeze: exclude requirejs-config
      + Breeze: fixed invalid css selector
      + Do not register modal if 'el' is not exist
  - [Ajax Search](/m2/extensions/ajaxsearch/) — 1.13.30 (was 1.13.27)
      + Breeze: update integration
      + Breeze: exclude requirejs-config
      + fix(graphql): make 'search' parameter optional in ajaxsearch graphql
  - [AMP](/m2/extensions/amp/) — 1.6.0 (was 1.5.11)
      + Allow scssphp version 2
  - [AskIt](/m2/extensions/askit/) — 1.14.18 (was 1.14.12)
      + Breeze: Update integration
      + Breeze: prepare for next update
      + Added FAQPageSchema provider
      + Enhance input sanitization and validation for XSS & SQL injection protection
  - [AttributePages](/m2/extensions/attributepages/) — 1.8.0 (was 1.7.7)
      + Ability to activate page on specified date range
  - [Compare](/m2/extensions/compare/) — 1.2.8 (was 1.2.7)
  - [Easy Slide](/m2/extensions/easyslider/) — 1.8.16 (was 1.8.14)
      + Fixed deprecation warning - The use of function image_type_to_mime_type() is discouraged
      + Fixed deprecation warning - The use of function is_file() is discouraged
      + Fix escaping of slider identifier using Escaper in slider template
      + Add @NoEscape annotations to JSON encoding and improve HTML escaping in gallery template
      + Refactor templates to use Escaper for HTML attributes and improve code readability
  - [EasyBanner](/m2/extensions/easybanners/) — 1.9.22 (was 1.9.20)
      + Breeze: update integration
      + Breeze: exclude requirejs-config
      + Escaper added
  - [EasyCatalogImages](/m2/extensions/easycatalogimages/) — 1.5.13 (was 1.5.12)
  - [EasyTabs](/m2/extensions/easytabs/) — 1.13.2 (was 1.13.1)
      + Breeze: update integration
  - [Featured Attributes](/m2/extensions/featured-attributes/) — 1.1.9 (was 1.1.8)
  - [GDPR](/m2/extensions/gdpr/) — 1.8.3 (was 1.8.2)
      + Move google consent js before possible GTM script from misc html option
      + Breeze: reuse luma-mixins
      + Breeze: update integration
  - [Highlight](/m2/extensions/highlight/) — 1.11.9 (was 1.11.8)
      + Breeze: update integration
      + Breeze: exclude requirejs-config
      + Move dynamic script to dynamic bundle
  - [Hover Gallery](/m2/extensions/hover-gallery/) — 1.3.15 (was 1.3.14)
  - [Hreflang](/m2/extensions/hreflang/) — 1.6.11 (was 1.6.10)
      + Update Attributepage integration
  - [NavigationPro](/m2/extensions/navigationpro/) — 1.17.33 (was 1.17.32)
      + Breeze: update integration
      + Breeze: exclude requirejs-config
  - [Pagespeed](/m2/extensions/pagespeed/) — 1.16.2 (was 1.12.0)
      + Major refactoring: migrated to DOM-aware architecture for better reliability
      + Implemented TrackedDomDocument for patch-based HTML modifications
      + Added comprehensive unit tests for improved code quality
      + Fixed UTF-8 encoding corruption in AJAX responses
      + Fixed data-mage-init attribute corruption in DOMDocument processing
      + Added JSON content signature support and fixed duplicate offsets
      + Improved error messages for Critical CSS API failures
      + Fixed infinite loops and memory leaks in DOM operations
      + Enhanced XSS protection and security measures
      + Improved performance with optimized DOM operations and caching
      + Fixed nested script tag handling
      + Added fetchpriority=high for LCP image nodes
      + Breeze: update integration
      + Breeze: do not include requirejs-config
  - [ProLabels](/m2/extensions/prolabels/) — 1.7.26 (was 1.7.23)
      + fix: hide stock labels when qty <= 0 and prevent empty label rendering
      + Breeze: fixed lazy init when slide gallery is used
      + Fixed visible \Magento\Framework\Escaper string
      + Breeze: remove invalid selector (expanded gallery)
      + Breeze: expanded gallery fixes
  - [QtySwitcher](/m2/extensions/qty-switcher/) — 1.1.28 (was 1.1.27)
      + Breeze: fixed not working switcher in shopping cart
      + Improved styles with error message
  - [ReviewReminder](/m2/extensions/reviewreminder/) — 1.1.19 (was 1.1.18)
  - [Rich Snippets](/m2/extensions/richsnippets/) — 1.7.16 (was 1.7.11)
      + Ensure organization config returns structured array
      + Refactor: Centralize FAQPage block with shared layout handle
      + Refactor: Replace FAQPages with universal FAQPage block
      + Fixed inability to use faq widget with non-latin words
      + Fix QAPage filter logic: apply either product or category, not both
  - [Seo Cross Links](/m2/extensions/seo-cross-links/) — 1.1.21 (was 1.1.20)
      + Sanitize crosslink keywords and skip empty rules to prevent invalid rendering html
  - [Seo Templates](/m2/extensions/seo-templates/) — 1.7.10 (was 1.7.9)
      + Remove HTML escaping from translatable strings in metadata template
      + Enhance security by escaping HTML output in metadata template
  - [Seo URLs](/m2/extensions/seo-urls/) — 1.5.54 (was 1.5.53)
      + Refactor attribute labels and options templates to use the escaper for HTML output
  - [SoldTogether](/m2/extensions/soldtogether/) — 1.11.3 (was 1.10.8)
      + Added missing currency cache key
      + Option to add 'data-nosnippet' attribute to sold-together blocks
      + Added missing translation
      + Enhance template security by escaping section titles and descriptions
      + Enhance template security by escaping product ID and attribute IDs in configurable options
      + Enhance security and readability by using Escaper for URL and HTML escaping in templates
      + Refactor JavaScript URL handling and improve code readability in templates
  - [Testimonials](/m2/extensions/testimonials/) — 1.3.17 (was 1.3.16)
  - **Core Module** — 1.12.25 (was 1.12.24)
      + Fixed broken markup when using newer libxml version (2.15.1)
  - **SuggestPage** — 1.2.14 (was 1.2.13)
      + Fixed wrong escape in translation
  - **Theme Editor** — 1.11.5 (was 1.11.4)

### Version 2.8.0

> September 25, 2025

  - _ArgentoBreeze Force Theme_ 
      + Fixed incorrect newsletter input field background
      + Reset MageWorx_OptionFeatures integration

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/) — 1.7.29 (was 1.7.26)
      + Fix double reloading
      + Fix: 'ajaxpro-cart' section reload on store/website switch
      + Fix: cart-item-render breeze integration
  - [AskIt](/m2/extensions/askit/) — 1.14.12 (was 1.14.11)
      + Feat: Add handle to category view 
      + Feat: Add QAPage schema generation
  - [AttributePages](/m2/extensions/attributepages/) — 1.7.7 (was 1.7.3)
      + Prevent php error when calling the widget, but the module is disabled
      + Do not allow to view the page from different store view
      + Remove askit because it shows all questions without filtering
      + Do not render short description if option is disabled
      + Render option from "Active store" view or "All stores" only
      + Properly clear fpc when option is linked to multiple parent pages
      + Revert "Add missing cache identities to the attribute options list page"
      + Add missing cache identities to the attribute options list page
  - [EasyTabs](/m2/extensions/easytabs/) — 1.13.1 (was 1.12.18)
      + Slightly better performance in breeze theme
      + No need to call resizeCb. ResizeObserver will call it automatically.
      + Use @NoEscape for attributes serialization in accordion, collapsed, default, expanded, and tabs templates
      + Enhance security by escaping output in templates using Escaper class
      + Update widget_unset to include review form and list for Hyva theme
      + Dispatch event after preparing layout in Review block
      + Add 'product.review.form' to blockUnsetTemplate in Tabs class
  - [GDPR](/m2/extensions/gdpr/) — 1.8.2 (was 1.8.0)
      + MCS fixes
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
      + Enhancement: Add async unbinding functionality to mutation observer (close #36)
  - [Rich Snippets](/m2/extensions/richsnippets/) — 1.7.11 (was 1.7.8)
      + Fix: rm debug line
      + Feat: Add QAPage schema to category pages (close #35)
      + Adds 'datePublished' and 'author' fields to the QAPage schema to comply with Google Search Console reqs
      + Do not remove question when pressing "Enter" in grid filter (type="button" to prevent submit)
      + Fixed php error when data is saved in old (unparseable) format
      + Fixed not working FAQ widget
      + Allow multiple Day of Week with same value for opening hours config
      + Fix mcs escape warnings
      + FAQPages: Removed pagebuilder code in answers.
  - [Seo Cross Links](/m2/extensions/seo-cross-links/) — 1.1.20 (was 1.1.18)
      + Fixed duplicated image tag added via pagebuilder.
  - [Seo HTML Sitemap](/m2/extensions/seo-html-sitemap/) — 1.1.21 (was 1.1.20)
      + Refactor sitemap item retrieval to use helper method and improve URL and name escaping
      + Refactor sitemap templates to use helper method for item retrieval and enhance HTML escaping
  - [SoldTogether](/m2/extensions/soldtogether/) — 1.10.8 (was 1.10.6)
      + Added titles to links
      + Fixed js error when using breeze
      + Fixed helper.restoreValuesToRelatedProductsField is not a function error
      + New swiper uses mobile-first approach for breakpoints (min-width)
  - **ProLabels Configurable Product** — 1.0.9 (was 1.0.8)
      + Destroy label of the previously selected product when reset the select
  - **SuggestPage** — 1.2.13 (was 1.2.12)
      + Fixed unescaped output

### Version 2.7.3

> July 29, 2025

**Extensions Updates**

  - [Ajax Search](/m2/extensions/ajaxsearch/)
      + Fixed broken StorePickup search styles at checkout page
      + Fixed possible disabled search icon when using folded layout
      + Do not update `customer_sections` after graphql requests
  - [AskIt](/m2/extensions/askit/)
      + Fix string is not valid
      + Add data(email) validation in graphql request
      + Remove commented code
      + Fix 'mage.dataPost' require in data-vote.js
      + Implement direct link to question
      + Fix 'applyBinding' undefined
  - [Easy Slide](/m2/extensions/easy-slide/)
      + Fixed empty slides on Force theme with new swiper - added slides cloning
      + Fixed invisible images when container is scrolled down because of focus?
  - [EasyCatalogImages](/m2/extensions/easycatalogimages/)
      + Enable lazyload for all images except for the first two
      + Do not preload category image if it was moved to bottom
      + Breeze: preload feature. Preload two images if widget added above product listing. Don't skip category image. Preload first image at the departments page.
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
      + Fix: Call to an undefined method `Optimizer\Image\Responsive::isMediaImageFileExist`
      + Refactor: add generic caching for image file existence checks in WebP optimizer, improve performance and reliability
      + Remove Model/Optimizer/Image/AbstractImage::isParentTagPicture
      + Add `Image/WebP/PictureTagBuilder`
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
      + Fix isEnable(d)
      + Fix optimiser => optimizer
      + Fix :107 Undefined variable: (prev commit)
      + Refactor: improve AfterRenderResultPlugin structure and readability
      + Preload only 1-6 first stylesheet in defercss optimizer
      + Fix: data-pagespeed-hash breaks the 'text/x-magento-init' script with an unescaped attribute (script inside another script)
      + Fix: 'Scripts relocation' text/x-magento-template
      + Remove reqs laminas/laminas-dom (for php 8.4 compatibility)
  - [ProLabels](/m2/extensions/prolabels/)
      + Always use position relative for prolabels-wrapper (Argento listing fix)

### Version 2.7.2

> May 7, 2025

 -  Small CSS fixes to ArgentoBreeze Business theme.

### Version 2.7.0

> April 18, 2025

  - [Business theme](../business) added.
  - Magento 2.4.8 and PHP 8.4 compatibility added.
  - Theme editors added to all bundled themes.

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

### Version 2.5.2

> February 26, 2025

 -  Significant performance improvements in Breeze module and all bundled modules.

**[EasySlider](/m2/extensions/easyslider/)**

 -  Fixed not clickable slide when `height: 100%` is used on the description.

**[EasyCatalogImages](/m2/extensions/easycatalogimages/)**

 -  Added canonical to Departments Page.

**[EasyTabs](/m2/extensions/easytabs/)**

 -  Fixed layout shift when all tabs are inactive by default.

**[GDPR](/m2/extensions/gdpr/)**

 -  Fixed js error when enabling focus-trap on slow internet connections.

### Version 2.5.0

> November 20, 2024

 -  Improve color contrast in all themes to pass WGAC tests.
 -  Improve site navigation using keyboard only.
 -  Fixed layout shifts caused by client-side color swatches.
 -  ArgentoChic: Fixed unscrollable page when category name = "view".
 -  Updated all bundled modules with various accessibility fixes such as:
    - Color contrast fixes.
    - Navigation using keyboard improvements.
    - Increased small elements size.

**[Navigationpro](/m2/extensions/navigationpro/)**

 -  Remove mage/menu dependency. Reduce JS codebase by 10KB (gzipped).

**[SoldTogether](/m2/extensions/soldtogether/)**

 -  Fixed line wrap on laptop whne using Amazon-like layout.
 -  Remove deferred CSS styles to reduce layout shift score.

### Version 2.4.0

> May 9, 2024

 -  Scroll reveal animations added all themes. See [upgrade guide](/m2/argento-breeze/upgrade-instructions/)
    on how to add scroll reveal to existing CMS pages.
 -  Zoom on hover animation added to product listing in Force and Chic themes.
 -  Fixed menu styles in Force and Stripes themes.
 -  Fixed too large MSRP message in Force theme.
 -  Fixed js errors when using unpack feature from [Pagespeed] module.

**[GDPR](/m2/extensions/gdpr/)**

 -  Added ability to change and create region-specific [default Google consent values](/m2/extensions/gdpr/configuration/#cookie-consent-section).
 -  Added "Deny" and "Allow Selection" buttons to [minimal cookie bar mode](/m2/extensions/gdpr/configuration/#cookie-bar-display-modes).

### Version 2.3.1

> Apr 23, 2024

 -  Magento 2.4.7 compatibility.

**[AttributePages](/m2/extensions/attributepages/)**

 -  Added redirect from pages with trailing slash to the pages without trailing slash.

**[ChatGPT](/m2/extensions/chat-gpt-assistant/)**

 -  Added mass product content generation.
 -  Added content generation for category description and meta tags.
 -  Added product meta title and keywords generation.

**[EasySlide](/m2/extensions/easyslider/)**

 -  Fixed inability to remove slide description.

**[GDPR](/m2/extensions/gdpr/)**

 -  Improve styles for cookie togglers.
 -  Fixed missing toggler focus style.

**[Highlight](/m2/extensions/highlight/)**

 -  Fixed not working page_count parameter when ajax carousel is used.

**[SeoSuite](/m2/extensions/seo-suite/)**

 -  Magenfan Blog integration updated.

### Version 2.3.0

> Mar 7, 2024

 -  ArgentoChic: Fixed [Askit](/m2/extensions/askit/) styles when gravatar is enabled.
 -  ArgentoChic: Fixed incorrectly rotated "close" buttons in askit questions.
 -  Compatibility with latest [Breeze Frontend](https://breezefront.com/updates).
 -  JS fixes in all bundled modules.

**[EasyBanner](/m2/extensions/easybanners/)**

 -  Fixed possible incorrect edit URL in backend.
 -  Updated integration with latest GDPR module.

**[GDPR](/m2/extensions/gdpr/)**

 -  Added inegration with Google Consent Mode.
 -  Preferences cookie group added. Advertisement group is replaced by marketing.

**[Highlight](/m2/extensions/highlight/)**

 -  Fixed possible js error "blockData" on undefined.
 -  Fixed carousel styles.

**[SeoSuite](/m2/extensions/seo-suite/)**

 -  Prevent possible exception from Magento_Review module on product listing page
    when [AjaxLayeredNavigation](/m2/extensions/ajaxlayerednavigation) module is used.
 -  Smile Integration update. Fix PHP error "Illegal offset type in isset or empty"

### Version 2.2.0

> Nov 28, 2023

 -  **[ArgentoChic](/m2/argento-breeze/chic/) theme added**.
 -  Performance improvements in slider, colorswatches, and auth popup components.
 -  Performance improvements in Easycatalogimg, Highlight, Easyslide, and Testimonials modules.
 -  BreezeTheme and BreezeModule updated to the [latest versions](https://breezefront.com).
 -  Fixed not working dropdown position in [NavigationPro](/m2/extensions/navigationpro/) module.
 -  Fixed not working lightbox/awesomebar popups in [EasyBanner](/m2/extensions/easybanner/) module.
 -  Minor fixes and improvements in all bundled themes and modules.

### Version 2.1.0

> Jul 27, 2023

 -  Magento 2.4.6 and PHP 8.2 compatibilty in all modules.
 -  [**ChatGPT Assistant**](/m2/extensions/chat-gpt-assistant/) **module added**
 -  Tabs are no longer transformed into accordion on mobile devices by default
    to meet accesibility requirements.
 -  Accessibility fixes in [EasyTabs](/m2/extensions/easytabs/) and
    [NavigationPro](/m2/extensions/navigationpro/) modules.
 -  Performance improvements in [SeoSuite](/m2/extensions/seo-suite/) and
    [SoldTogether](/m2/extensions/soldtogether/) modules.
 -  Added ability to set active_from and active_to properties for each of
    [EasySlider](/m2/extensions/easyslider/) slides.
 -  Pagebuilder added to backend description and short description fields of
    [AttributePages](/m2/extensions/attributepages/) module.
 -  Added ability to sort [NavigationPro](/m2/extensions/navigationpro/) menu
    items in alphabetical order.
 -  Minor fixes and improvements in all bundled modules.

### Version 2.0.0

> Nov 19, 2022

**Run `composer require -w swissup/argento-breeze:^2.0` to update from old version.**

 -  Breeze Module and Breeze Blank theme updated to 2.0. See the 
    [list of breaking changes](https://breezefront.com/upgrade#breaking-changes)
 -  [Force Theme](/m2/argento-breeze/force/) added.
 -  Added missing logo in email templates.
 -  Improve product listing on mobile devices.

### Version 1.0.1

> Jul 19, 2022

 -  Removed Swiper dependency (30kB) from Swissup_Highlight module when using
    Breeze-based theme. Built-in Breeze slider will be used now.
 -  Fixed not working gallery in AjaxPro quick view popup.
 -  Fixed css issue with quick view button when critical css is enabled.

### Version 1.0.0

> Jun 17, 2022

 -  Initial release of Breeze-based Argento Stripes theme.
