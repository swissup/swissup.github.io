---
layout: default
title: Breeze Changelog
description: breeze changelog
keywords: breeze changelog
category: Breeze
---

# Changelog

### Version 1.6.0

> Aug 13, 2021

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
