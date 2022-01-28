---
layout: default
title: Breeze Changelog
description: breeze changelog
keywords: breeze changelog
category: Breeze
---

# Changelog

### Version 1.9.0

> Jan 28, 2022

 -  Support for jQuery-like api in ajax requests: `$.ajax`, `$.post`, `$.get`.
 -  jQuery-like success callback. Now the callback recieves parsed data
    as first parameter and response object as a second.
 -  Added support for multiple expanded tabs.
 -  Improve click handling inside modal popups.
 -  Improve SPA experience.
 -  Deprecated JS code removed.

### Version 1.8.4

> Jan 13, 2022

 -  Allow to create nested view components.
 -  Fixed js error when recaptcha is enabled in product review form.
 -  Fixed "getTemplate" error when third-party component is not available in Breeze.

### Version 1.8.3

> Jan 10, 2022

 -  Fixed missing background in fullscreen product gallery.
 -  Fixed js error when spinner is used without initialized blockLoader widget.
 -  Small js improvements.

### Version 1.8.2

> Jan 5, 2022

 -  Fixed configurable price update on product page, when options moved to
    the media block (ArgentoStripes).

### Version 1.8.0

> Dec 13, 2021

 -  Remove lazyload attribute from main image in gallery since it's rendered above the fold.
 -  Focus trap added to the modal popups.
 -  Improved image loader when click on the swatch attribute.
 -  Added responsive image support. Used in [Breeze Blank theme](/m2/themes/breeze-blank/).
 -  Keyboard navigation improvements.
 -  Prevent button resize when press add to cart.
 -  Underscore library updated to the latest version.
 -  Small fixes in various js components.

### Version 1.7.4

> Oct 21, 2021

 -  Prevent page jumping when showing modal popup.
 -  Keyboard navigation improvements for modal and dropdown components.
 -  Fixed rare error when caret is stuck inside search input.
 -  Do not close dropdowns behind overlay when click in modal.
 -  Amasty_Xnotif (Out of Stock Notification) integration added.

### Version 1.7.3

> Sep 24, 2021

 -  Allow to render third-party content in recently viewed products.

### Version 1.7.2

> Sep 22, 2021

 -  Fixed unclosable mobile navigation sidebar when multiple menus are used on the page.
 -  Use correct plural form for cart items label.
 -  Improve slider's current page detection logic.

### Version 1.7.0

> Sep 14, 2021

 -  Added Pagebuilder's Slider and Carousel support.
 -  Swipe gestures added to product page gallery
 -  Use tiny scrollbar for product gallery.
 -  Prevent page zoom when double click on slider or gallery arrows/dots.
 -  Fixed js error when third-party module uses minicart/content.html template.
 -  Improved js bundles invalidation. Previously you had to remove old bundles manually.
    Now new bundles updated automatically after cache cleanup.
 -  Cleanup dom structure from js templates to improve dev expirience when using
    Elements panel in dev tools.
 -  Added ability to disable component via mixin.
 -  Lazy mixins and widget declarations. You can now declare mixins and components
    before parent class is loaded.
 -  Code refactoring.

### Version 1.6.4

> Sep 3, 2021

 -  Fixed broken robots.txt content.
 -  Fixed error caused by 'requirejs' function call.
 -  Allow to create nested tabs.

### Version 1.6.2

> Aug 18, 2021

 -  Fixed visible spinner when async scripts are added to the page and turbo is enabled.
 -  Magento 2.4.3: Fixed disabled 'Save Address' button in customer account.
 -  Added missing 'last-ordered-items' component.
 -  Use turbo visit instead of whole page reload when:
    - Changing product list sort order or view mode.
    - Adding or removing customer address.

### Version 1.6.1

> Aug 15, 2021

 -  Bundle products are now supported.
 -  Fixed not working "Add to cart" button on initial product page load when Turbo mode is enabled.
 -  Fixed ability to add configurable products to the wishlist without losing selected options.

### Version 1.5.0

> Aug 6, 2021

 -  **Singe-page application support added!** [New option](/m2/extensions/breeze/configuration/)
    allows to transform your store into a site that doesn't reload the page during its use.
    This means faster browsing and better user experience!
    ([Turbolinks.js](https://github.com/turbolinks/turbolinks#turbolinks) is used under the hood).
 -  Fixed visible plus symbols in success messages on some server setups.

### Version 1.4.3

> Jul 26, 2021

 -  Stability improvements in minicart component when it's reused by third-party modules.

### Version 1.4.2

> Jul 22, 2021

 -  Fixed possible css issues in third party themes caused by not removed `script` tags.
    (Now they are removed just like in standard Magento frontend.)
 -  Added ability to call `$(el).validation().valid()` chain for better backward
    compatibility.
 -  Added integration with Mirasvit_CacheWarmer module. (Debug toolbar and request logging).

### Version 1.4.0

> Jul 15, 2021

 -  Added ability to disable Breeze for [specified URLs](/m2/extensions/breeze/configuration/).
 -  Magento_Captcha integration added.
 -  Magento_ReCaptcha integration added.
 -  Magento_LoginAsCustomer integration added.
 -  [Swissup_Ajaxpro](/m2/extensions/ajaxpro/) integration added (Since shopping
    cart page is not supported, we use fallback to minicart content in popup when
    shopping cart is selected in configuration).
 -  [Swissup_ProLabels](/m2/extensions/prolabels/) integration updated (Missing
    labels on main product image in third-party themes).
 -  Added modal, alert, and confirm components.
 -  When debug mode is enabled and '?breeze=1' parameter is set, Breeze will work
    regardless if current page is from exluded urls list.
 -  Fixed not working 'Add all to cart' button at wishlist page.
 -  Fixed js error at customer account page.
 -  Fixed not working gallery on wishlist/configure page.
 -  Fixed failed form validation when checkbox with empty value is required.
 -  Prevent layout shift in gallery component when critical CSS is enabled.

### Version 1.3.0

> Jun 3, 2021

 -  Magento_GoogleTagManager integration added.
 -  Fixed ability to activate multiple collapsibles at once.
 -  Fixed invalid image ratio at product page on iOS devices.
 -  Fixed undefined 'priceUtils' js error.
 -  Fixed not working address delete and add actions at customer account page.

### Version 1.2.0

> May 19, 2021

 -  Configurable products support added.
 -  Colorswatches support added.

### Version 1.1.1

> May 17, 2021

 -  Fixed not working gallery when picture tag is used
 -  Fixed gallery functionality when sizes/srcset attribute is found in the img tag
 -  Fixed js errors when defer js is enabled in [Pagespeed](/m2/extensions/pagespeed/) module

### Version 1.1.0

> May 14, 2021

 -  Improved flexibility of bundled components for better third-party modules integration.
 -  Component inheritance implemented.
 -  Small fixes in js components.
 -  $.async function added.
 -  Ability to force breeze status via [query parameter](/m2/extensions/breeze/configuration/).
 -  Stability improvements.

### Version 1.0.3

> Apr 16, 2021

 -  Improved collapsible, menu, and tabs scripts flexibility.
 -  Magento 2.3 compatibility fixes

### Version 1.0.1

> Apr 14, 2021

 -  Magento 2.3.6 compatibility

### Version 1.0.0

> Apr 13, 2021

 -  Initial Release.
 -  Supported pages (All except Shopping Cart and Checkout):
    - Home and other CMS pages
    - Category
    - Product
    - Search and Advanced Search
    - Account
    - Contact us
 -  Supported products (All except Configurable and Bundle):
    - Simple
    - Virtual
    - Downloadable
    - Grouped
 -  Supported features:
    - Add to cart, compare, and wishlist
    - Minicart popup
    - Recently viewed products
    - Product page gallery
    - Form validators
    - Quick search
    - Google analytics
    - Cookie restriction mode
    - MAP popup
    - Paypal buttons
    - Varnish cache (ESI blocks)
