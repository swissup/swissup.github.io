---
layout: default
title: Firecheckout Changelog
description: Firecheckout changelog
keywords: firecheckout changelog
category: Firecheckout
---

# Changelog

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
