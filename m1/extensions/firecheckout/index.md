---
layout: default
title: Firecheckout
description: Firecheckout documentation
keywords: firecheckout docs, firecheckout documentation
category: Firecheckout
---

# Firecheckout

Firecheckout - is a onestep checkout module, that allows clients to make a purchase
faster and easier by providing them a simple checkout form.

{% include gallery.html images=site.data.gallery.m1.firecheckout.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

Firecheckout includes a huge amount of configurable additional possibilities:

 -  Shipped with [6 layouts](configuration/firecheckout/#layout-and-design)
 -  Optional distraction free [Empty Layout](configuration/firecheckout/#layout-and-design) feature
 -  Configurable [billing and shipping address fields](configuration/firecheckout/#address-form-fields)
 -  Configurable [section dependencies](configuration/firecheckout/#ajax-save-and-reload-rules)
 -  Four checkout [registration modes](configuration/firecheckout/#general):
    - Guest checkout is allowed
    - Guest checkout is allowed (checkbox is checked by default)
    - Registration is required
    - User is registered in background
 -  Ability to [disable shipping address](configuration/firecheckout/#general) visibility
 -  [GeoIP](configuration/address-detection-geoip/) country, region, city and postcode detection
 -  Google [AddressAutocomplete](/m1/extensions/address-autocomplete/)
 -  [USPS Address Verification](configuration/address-verification/)
 -  [Default values for shipping and payment methods](configuration/firecheckout/#general)
 -  [Delivery date and time](delivery-date/)
 -  [Discount coupon field](configuration/firecheckout/#general)
 -  Up to 5 [additional checkout fields](configuration/additional-fields/)
 -  [Order comment field](configuration/firecheckout/#general)
 -  [Order attachments](/m1/extensions/order-attachments/)
 -  [Address review section](configuration/firecheckout/#general) for EU countries
 -  Minimalistic [Terms and Conditions](configuration/firecheckout/#terms-and-conditions) section
 -  [Editable shopping cart](configuration/firecheckout/#shopping-cart)
 -  [Newsletter checkbox](configuration/firecheckout/#general) below billing address form
 -  [Fully customizable](/m1/extensions/checkout-success/) "Checkout Success" page
 -  Huge list of [supported third-party](supported-modules/) modules
 -  [Customization friendly](/m1/extensions/firecheckout/using-customcss-and-customjs/)
 -  [Dependent fields](dependent-fields/)
 -  [Housenumber](housenumber/)
 -  RTL compatible
 -  Fully compatible with Magento EE features:
    - Giftcards
    - Customer balance
    - Customer fields
    - Address fields

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Configuration](configuration/)
 3. [Usps address verification](usps-address-verification/)
 4. [Supported modules](supported-modules/)
     -  [Magento built-in modules](supported-modules#magento-built-in-modules)
     -  [Third-party modules](supported-modules#third-party-modules)
 5. Additional possibilities
     -  [House number field](housenumber/)
     -  [Form field manager](form-field-manager/)
     -  [Street line labels](street-line-labels/)
     -  [Dependent fields](dependent-fields/)
     -  [Email double verification](email-double-verification/)
     -  [Show custom popup window](popup-window/)
     -  [Hide totals in review section](hide-totals-in-review-section/)
     -  [Using custom.css and custom.js](using-customcss-and-customjs/)
     -  [Adding comment fields to sales emails](adding-comment-fields-to-sales-emails/)
     -  [Adding checkout fields to transactional emails](adding-checkout-fields-to-transactional-emails/)
 6. [Use cases](use-cases/)
     -  [Changing URL of Firecheckout page](use-cases/#changing-url-of-firecheckout-page)
 7. [Troubleshooting](troubleshooting/)
 8. [Brazilian requirements](brazil/)
