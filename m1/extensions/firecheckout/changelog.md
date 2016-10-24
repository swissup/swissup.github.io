---
layout: default
title: Firecheckout changelog
description: Firecheckout changelog
category: Firecheckout
---

# Firecheckout Changelog

### Version 3.8.0

**Major changes**

 -  Updated 2 and 3 columns layout designs:
    - New, cleaner sections and button styles
    - Billing and shipping address sections grouped into single section
    - Discount section moved into payment methods section
    - Additional information section moved into Order Confirmation
    - Cleaner styles for Checkout Review table
 -  [SuccessPage 2.0](/m1/extensions/checkout-success/) with new features and
    brand new user-friendly backend UI

**Fixes and Improvements**

 -  Added page subtitle feature
 -  Fixed section reload, when checkbox triggered ajax request
 -  "Undefined index: description" notice fixed
 -  custom.css moved after all built-in styles
 -  Review block: product image wrapped into link
 -  Field instant validation added
 -  Css refactoring: single css file splitted into separate files
 -  Added `:focus` button styles
 -  Small css and js fixes
 -  [OrderAttachment](/m1/extensions/order-attachments/) module updated to 1.1.4
 -  [AddressAutocomplete](/m1/extensions/address-autocomplete/) module updated to 1.1.2

**Third-party modules**

 -  Dhl_Magentolws integration added
 -  Emja_Taxrelief integration updated
 -  Gene_Braintree compatibility with step-by-step onecolumn mode
 -  Shipperhq_Pickup integration added
 -  Shipperhq_Freight integration added

### Version 3.7.1

 -  Fixed hidden registration mode, when using 1column expanded layout
 -  Fixed z-index of email hint element, when using onecolumn layout

### Version 3.7.0

**Screenshots**

{% include gallery.html images=site.data.gallery.m1.firecheckout.changelog.v370 class="phone-up-2 tablet-up-3 photoswipe" %}

**New Features**

 -  1 Column (Expanded) layout added
 -  2 Columns (Alternative) layout added with wide shipping and payment sections
 -  Formfill watcher added to mark completed sections with `filled` class name

**Fixes and Improvements**

 -  Fixed minAllowedDate issue with DeliveryDate feature
 -  Disabled browser autocomplete for second address street line
 -  Fixed review section update on billing address change
 -  Fixed page title height on mobile devices
 -  1 Column layout fixes and improvements:
    -  Formfill marker default styles

        ![Formfill Marker](/images/m1/firecheckout/changelog/370/formfill-marker.png)

    -   Added hint for registered customers aside of email address

        ![Email hint for registered customers](/images/m1/firecheckout/changelog/370/email-hint.png)

    -   Improved selectboxes styles on MacOS desktops

        ![MacOS selectoboxes](/images/m1/firecheckout/changelog/370/mac-os-selectboxes.png)

**Third-party modules**

 -  Adyen_Payment integration added
 -  Ophirah_Qquoteadv (Cart2Quote) integration added
 -  WebshopApps_ProductMatrix

### Version 3.6.2

**Improvements & Fixes**

 -  Fixed popup overflow styles in some third-party themes
 -  Fixed missing PlaceOrder button in IE11 under Win 8.1
 -  Paypal hss iframe moved out from popup to page content
 -  Invalid argument for foreach() in deliverydate helper
 -  Improved compatibility with old Magento (1.6.0)
 -  Fixed incorrect German translation
 -  Fixed password fields disappear, when changing email in Onecolumn mode

**Third-party modules**

 -  Radweb_Stripe integration updated
 -  Added integration with Mage_MOLPaySeamless payment method
 -  Fixed conflict with Magestore_Storepickup
 -  Shipperhq_Validation integration added
 -  DHL_Account integration updated

### Version 3.6.1

 -  [Address Autocomplete](/m1/extensions/address-autocomplete/) updated to 1.1.0
    with js fixes and new [Street Number Placement](/m1/extensions/address-autocomplete/configuration)
    config option

**Improvements & Fixes**

 -  Fixed email saving, when firstname or lastname is still empty
 -  Fixed address save on street change
 -  Updated html markup for downloadable item in review section

**Third-party modules**

 -  Ebizmarts Sagepaysuite integration fix
 -  TIG_PostNl: Fixed missing additional fields for logged in customers

### Version 3.6.0

**New Features**

 -  New module included: [Address Autocomplete](/m1/extensions/address-autocomplete/)

**Improvements & Fixes**

 -  Improved onecolumn styles with third-party themes
 -  Added missing shipping/payment sections in 'update_sections' array
 -  Usps zip autocorrection improvements
 -  Fixed php warnings, when single address line is used

**Third-party modules**

 -  Updated Emjainteractive_ShippingOption integration
 -  Updated payone integration (v3.4.15)
 -  Templates-master recaptcha integration added
 -  Updated Cryozonic_Srtipe integration

### Version 3.5.0

**New Features**

 -  RTL support added. Your theme must add `dir=rtl` attribute to the `html` tag
 -  Zip4 correction added for USPS address verification
 -  Smart zipcode autocorrection feature added to USPS address verification
    (Firecheckout will silently append zip4 code, if the rest of address is valid)

**Fixes**

 -  Taxvat validation validates code, if the country is supported only

**Third-Party Modules**

 -  Subscribe.Pro (SFC_Autoship) integration added
 -  Ydral_Correos integration added
 -  Webshopapps_Wsavalidation integration updated
 -  SagepaySuite integration updated

### Version 3.4.0

**New Features**

 -  Added ability to add [custom php](/m1/extensions/firecheckout/using-customphtml/)
    code to the firecheckout page

    > This feature could be used to add custom translations for
    > [DependentFields](/m1/extensions/firecheckout/dependent-fields/)
    > and [Housenumber](/m1/extensions/firecheckout/housenumber/)
    > modifications.

 -  Added configurable ability to update agreements (Terms and Conditions) on ajax request:
    - payment method
    - shipping method
    - billing address
    - shipping address

    > This feature is useful for third-party payment method solutions
    > (Xonu_Directdebit payment for example), that add/remove additional
    > Agreements depending on selected payment method.

**Fixes**

 -  Missing bml paypal logo
 -  Improved payment form validation in onecolumn mode:
    - `cc_type` validation invokes when `cc_number` is filled in
    - `cc_cid` validation invokes when `cc_type` is filled in
 -  Fixed credit card tooltip positioning when using onecolumn mode
 -  Fixed coupon code save, when minimum order amount is used

**Third-party modules**

 -  FME_Fieldsmanager integration added
 -  Ebizmarts_SagepaySuite integration updated
 -  [MW_Rewardpoints](/m1/extensions/firecheckout/supported-modules/mw-rewardpoints/) integration updated
 -  [Amasty Coupons](/m1/extensions/firecheckout/supported-modules/amasty-coupons/) integration updated
 -  [Xonu_Directdebit integration](/m1/extensions/firecheckout/supported-modules/xonu-directdebit/)

### Version 3.3.0

**Delivery Date**

- Added ability to pre-select first available date (configurable)
- Fixed not available delivery at weekand day

**Success page**

- Fixed layout update instructions in Magento 1.9.2.3
- Recurring profile support added
- Fixed delivery date output format

**Third-party modules**

- Updated Mageworx_CustomerCredit integration
- Integration with Bitpay_Core
- DHL_Account integration improved
- Added integration with updated [Bpost_ShM(ShippingMethod) module](/m1/extensions/firecheckout/supported-modules/bpost-shm/)
- Added Webshopapps_Calendarbase shipping method integration
- [Checkout.com integration](/m1/extensions/firecheckout/supported-modules/checkoutapi-chargepayment/)
