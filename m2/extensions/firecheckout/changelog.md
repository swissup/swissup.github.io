---
layout: default
title: Firecheckout Changelog
description: Firecheckout changelog
keywords: firecheckout changelog
category: Firecheckout
---

# Changelog

### Version 1.10.0

Firecheckout **1.10.0** brings new [CustomerFieldManager](/m2/extensions/customer-field-manager/),
more awesomeness on mobile phones, bulletproof third-party themes compatibility,
and Field Mask feature!

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1100 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

**Major Updates**

 -  New [CustomerFieldManager](/m2/extensions/customer-field-manager/) module included
 -  Mobile styles improved a lot:
    - Added more consistency into checkout styles
    - Order review section is now visible on the phones too
    - Step numbers added to mobile styles
    - Modal popup styles improved (Sign in form, Agreements popup)
 -  Three fields in a row in the address form when parent container is wide enough.
 -  More third-party themes compatibility. Had to increase the weight of CSS
    selectors with ID attribute to beat a bunch on Templates-Monster themes.
 -  [Field mask](/m2/extensions/firecheckout/customization/field-mask/)
    component added.
 -  [dev] Xrayquire debugger added to quickly find out buggy modules that cause not
    working checkout page.

**Modules Updates**

 -  Removed hardcoded dependencies from other checkout modules, so you can
    omit them during installation.
 -  [DeliveryDate](/m2/extensions/delivery-date/),
    [CheckoutCart](/m2/extensions/checkout-cart/),
    [CheckoutSuccess](/m2/extensions/checkout-success),
    [OrderAttachment](/m2/extensions/order-attachment/)
    updated to the latest versions.

**Third-party modules**

 -  ClassyLlama_AvaTax address verification seamlessly integrated into expanded
    layout modes

### Version 1.9.0

 -  Cleaner [checkout styles](/m2/extensions/firecheckout/#&gid=1&pid=1)
 -  Firecheckout [default URL](/m2/extensions/firecheckout/configuration/#general-section)
    changed to '/checkout'. It replaces standard checkout now.
    (It's done to provide better out-of-the-box compatibility
    with third-party payment methods)
 -  Improved checkout flow when using Paypal_HostedPro solution
 -  Mobile styles improvements:
    - Spacing between section titles
    - Tooltip alignment improved
 -  Improved compatibility with third-party payment methods. Tested with:
    - SagePay_Suite
    - Dibs_Flexwin
    - CyberSource_SecureAcceptance
 -  Improved third-party themes compatibility. Tested with:
    - Argento_Stripes
    - BoxStore_BoxStore
    - MGS_Claue
    - TemplateMonster_Theme007
    - TemplateMonster_Theme003

**Modules Updates**

 -  AddressAutocomplete — [1.0.5](/m2/extensions/address-autocomplete/changelog/#version-105)
    - Fixed region field autocompletion
 -  Address Field Manager — [1.2.0](/m2/extensions/address-field-manager/changelog/#version-120)
    - Added ability to create custom address fields
    - Added ability to set default values for address fields
 -  Checkout Cart — [1.1.3](/m2/extensions/checkout-cart/changelog/#version-113)
    - Order totals moved below cart items by default
 -  Checkout Fields — [1.0.4](/m2/extensions/checkout-fields/changelog/#version-104)
    - Fixed vertical alignment of button and input fields
    - Fixed visible scrollbar on tablet devices
 -  Checkout Success — [1.1.2](/m2/extensions/checkout-success/changelog/#version-112)
    - Fixed missing 'registration' block in some third-party themes
 -  DeliveryDate — [1.1.2](/m2/extensions/delivery-date/changelog/#version-112)
    - Added 'Enabled' option

### Version 1.8.0

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v180 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Added new "1 Column (Multistep Wizard)" [layout](/m2/extensions/firecheckout/configuration/#layout)
 -  Added new distraction free "Empty" [page layout](/m2/extensions/firecheckout/configuration/#page-layout)
 -  "I Agree" button added to the Agreement popup
 -  Added ability to configure default [Shipping](/m2/extensions/firecheckout/configuration/#shiping-settings-section)
    and [Payment](/m2/extensions/firecheckout/configuration/#payment-settings-section) methods
 -  Added ability to [hide Shipping methods step](/m2/extensions/firecheckout/configuration/#shiping-settings-section),
    if single method is available only
 -  Added missing _en_US.csv_ translation file
 -  Mobile styles cleanup
 -  Small style improvements

**Modules Updates**

 -  Address Field Manager — [1.1.1](/m2/extensions/address-field-manager/changelog/#version-111)
    - Fixed incorrect sort order in backend grid
    - Magento 2.1 compatibility
 -  Checkout Cart — [1.1.2](/m2/extensions/checkout-cart/changelog/#version-112)
    - Fixed vertical alignment of button and input fields
    - Fixed visible scrollbar on tablet devices
 -  Checkout Success — [1.1.1](/m2/extensions/checkout-success/changelog/#version-111)
    - Fixed typo in config section name
 -  DeliveryDate — [1.1.1](/m2/extensions/delivery-date/changelog/#version-111)
    - Fixed too wide input field
    - Fixed js error, when no shipping methods are available

### Version 1.7.1

 -  Fixed possible javascript console errors

**Modules Updates**

 -  Address Field Manager — [1.1.0](/m2/extensions/address-field-manager/changelog/#version-110)
    - Backend interface [improvements](/m2/extensions/address-field-manager/usage/)
    - Ability to change field status per website level
 -  Delivery Date — [1.1.0](/m2/extensions/delivery-date/changelog/#version-110)
    - Improved configuration settings structure
    - Fixed broken calendar popup at backend order edit page
    - Fixed date formatting for certain locales (de_DE)
 -  Checkout Vat — [1.0.4](/m2/extensions/taxvat/changelog/#version-104)
    - Removed not needed taxvat notice from the billing address form

### Version 1.7.0.1

 -  Fixed javascript error in SubscribeAtCheckout module

### Version 1.7.0

**Major Updates**

 -  Updated default form styles, new configurable
    [form styles](/m2/extensions/firecheckout/configuration/#form-styles) added
 -  Brand new layout builder and page preview in
    [CheckoutSuccess](/m2/extensions/checkout-success/) module
 -  [SubscribeAtCheckout](/m2/extensions/subscribe-at-checkout/) module added

**Fixes and Improvements**

 -  Added ability to [redirect to Firecheckout page](/m2/extensions/firecheckout/configuration/#general)
    after Add to Cart action
 -  Fixed layout error when using EmptyLayout on Magento 2.2
 -  Fixed order placement with 'PayPal Express in-context' payment method
 -  Fixed non-working Authorize.Net payment on magento < 2.2.0
 -  Fixed invalid billing address when using paypal express or other method
    without visible address form
 -  Fixed address form visibility when virtual quote is used
 -  Improved third-party payment methods compatibility
 -  Added ability to add js plugins at firecheckout page from layout xml instructions
 -  Magento 2.2.0 compatibility improvements

**Modules Updates**

 -  AddressAutocomplete — [1.0.4](/m2/extensions/address-autocomplete/changelog/#version-104)
 -  Address Field Manager — [1.0.2](/m2/extensions/address-field-manager/changelog/#version-102)
 -  Checkout Fields — [1.0.3](/m2/extensions/checkout-fields/changelog/#version-103)
 -  Checkout Success — [1.1.0](/m2/extensions/checkout-success/changelog/#version-110)
 -  Order Attachments — [1.1.0](/m2/extensions/order-attachments/changelog/#version-110)
 -  Subscribe at Checkout — [1.0.0](/m2/extensions/subscribe-at-checkout/changelog/#version-100)
 -  Checkout Vat — [1.0.3](/m2/extensions/taxvat/changelog/#version-103)

### Version 1.6.5

 -  Magento 2.2 compatibility
 -  [CheckoutFields](/m2/extensions/checkout-fields/) module updated to 1.0.2
 -  [OrderAttachments](/m2/extensions/order-attachments/) module updated to 1.0.7

### Version 1.6.4

 -  Fixed shipping total recalculation, when street is empty
 -  [AddressAutocomplete](/m2/extensions/address-autocomplete/) module updated to 1.0.3
 -  [CheckoutCart](/m2/extensions/checkout-cart/) module updated to 1.1.1
 -  [CheckoutFields](/m2/extensions/checkout-fields/) module updated to 1.0.1
 -  [DeliveryDate](/m2/extensions/delivery-date/) module updated to 1.0.4

### Version 1.6.3

 -  Fixed error message about non-avilable shipping method caused by shipping
    address update
 -  Fixed grand total update when shipping method becomes unavailable
 -  [DeliveryDate](/m2/extensions/delivery-date/) module updated to 1.0.3

### Version 1.6.2

 -  Fixed rare bug with missing default customer address after the first login
 -  Fixed compatibility with [DeliveryDate](/m2/extensions/delivery-date/) module
 -  Magento 2.2-dev compatibility
 -  JS code improvements

### Version 1.6.1

 -  Magento EQP fixes

### Version 1.6.0

> Magento requirements: 2.0.12 or 2.1.4 and higher

 -  [CheckoutFields](/m2/extensions/checkout-fields/) module added.
    See the [installation instructions](../installation/manual/) on how to enable new module.
 -  Fixed conflict with "Checkout > Display Billing Address On" option
 -  ACL added to the UI components according to Magento 2.1.7 release
 -  Fixed backend download and preview action urls in [OrderAttachments](/m2/extensions/order-attachments/)
    module

### Version 1.5.3

 -  Fixed issue, when error is not displayed to the customer, but a redirect to
    shopping cart is performed instead

### Version 1.5.2

 -  Improved compatibility with third-party modules
 -  Fixed order placing for iframe based payments
 -  Added payment form data restore, after ajax reload
 -  Fixed possible notice about undifined 'handle' variable

### Version 1.5.1

 -  Added additional `less` variables to simlify section numbers and blocks
    [customization](/m2/extensions/firecheckout/customization/custom-css/).
    See the list of [all variables](/m2/extensions/firecheckout/customization/less-variables/).

### Version 1.5.0

**Major Updates**

 -  Fixed tax recalculation when changing zipcode or state
 -  Added ability to use [three page layout types](/m2/extensions/firecheckout/configuration/#page-layout):
    -  Default Checkout Layout
    -  Empty (Minimalistic 1column layout)
    -  Full (Full 1column layout with header, navigation and footer)
 -  Added [additional content](/m2/extensions/firecheckout/configuration/#additional-content-section) support:
    -  Above firecheckout form
    -  Below firecheckout form
    -  Below checkout summary

**Fixes and Improvements**

 -  Complete styles refactoring to simplify checkout modification for developers
 -  Improved modal popup effects for desktop devices
 -  Fixed non-working checkout on mobile devices
 -  Fixed css issue with street address label on a new line
 -  Better compatiblity with third-party themes
 -  Added 'equal-shiping-billing' class name to the body for additional styles
 -  Fixed payment methods block positioning, when a lot of shippings are available
 -  Many CSS fixes and improvements

**Modules updates**

 -  [CheckoutCart 1.1.0](/m2/extensions/checkout-cart/)
 -  [DeliveryDate 1.0.2](/m2/extensions/delivery-date/)

### Version 1.4.0

**Major Updates**

 -  [Checkout Cart](/m2/extensions/checkout-cart/) module added.
    See the [installation instructions](../installation/) on how to enable new module.
 -  [Delivery Date](/m2/extensions/delivery-date/) module added.
    See the [installation instructions](../installation/) on how to enable new module.
 -  Section numbers rewritten using pure css

**Fixes and Improvements**

 -  Improved third-party themes compatibility
 -  Added payment methods reload, when shipping rates are reloaded
 -  Payments will be reloaded, if `Allow specific country` option is enabled

### Version 1.3.0

**Major Updates**

 -  [AddressFieldManager](/m2/extensions/address-field-manager/) module added.
    See the [installation instructions](../installation/) on how to enable new module.
 -  Updated overall firecheckout styles. More light and spacing. [View Screenshots](../)
 -  Added section numbers aside of each title
 -  Added ability to change firecheckout url from [configuration](../configuration/)

**Fixes and Improvements**

 -  Fixed payment methods styles for narrow screens
 -  Fixed 'Unable to set null, null as shipping_method' error
 -  Fixed address reset after zipcode update
 -  Improved Agreement checkboxes styles
 -  Improved third-party themes integration abilities
 -  Added better layout explanation titles in configuration

### Version 1.2.0

 -  Magento 2.0.9 compatibility
 -  Fixed possible invalid shipping subtotal on initial page load
 -  Added ability to apply [custom css styles](../customization/custom-css/)
 -  Added ability to add [custom javascript](../customization/custom-js/)

### Version 1.1.0

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v110 class="phone-up-2 tablet-up-3 photoswipe" %}

**New Features**

 -  1 column (Expanded) layout added

**New Modules**

> See the [installation instructions](../installation/) on how to enable new
> modules.

 -  [AddressAutocomplete](/m2/extensions/address-autocomplete/)
 -  [GeoIP](/m2/extensions/geoip/)
 -  [OrderAttachment](/m2/extensions/order-attachments/)
 -  [TaxVat](/m2/extensions/taxvat/)

**Fixes**

 -  Prevent multiple ajax requests, when using form autofill
 -  Less variables added to simplify layout restyling
 -  Minor fixes and improvements

### Version 1.0.1

 -  Fixed compatibility with FPC

### Version 1.0.0

 -  Initial Release
 -  Available layout types:
    - 3 columns
    - 2 columns
    - 2 columns alternative
