---
layout: default
title: Firecheckout changelog
description: Firecheckout changelog
category: Firecheckout
---

# Firecheckout Changelog

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
