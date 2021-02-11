---
layout: default
title: Firecheckout Changelog
description: Firecheckout changelog
keywords: firecheckout changelog
category: Firecheckout
---

# Changelog

### Version 1.25.6

> Feb 11, 2021

 -  Magento 2.4.2 fixes for "Purchase Order" payment method:
    - Fixed js error when Agreements are placed above "Place Order" button.
    - Fixed visible "Place Order" button inside payment method when it should be
    in order summary section.
 -  Fixed layout shifts in order summary section when order totals are reloading.
 -  Decreased count of multiple visible loaders at the same time.

**Module Updates**

[AddressFieldManager](/m2/extensions/address-field-manager/) — 1.6.0

 -  Fixed multiselect attribute values saving
 -  Added custom address fields to orders API
 -  Performance improvements

[DeliveryDate](/m2/extensions/delivery-date/) — 1.6.1

 -  Allow empty delivery date value

[OrderAttachment](/m2/extensions/order-attachments) — 1.4.11

 -  Fixed missing attachments block for guest customers when
    [customer group restriction config](/m2/extensions/order-attachments/#configuration)
    was saved with empty value.

### Version 1.25.5

> Jan 25, 2021

 -  Fixed possible error about missing address field when customer fills
    the form and presses "Place Order" very quickly.

**Module Updates**

[swissup/module-checkout-registration](/m2/extensions/checkout-registration/)

 -  Fixed missing checkout modules at checkout-registration configuration.

[swissup/module-delivery-date](/m2/extensions/delivery-date/)

 -  Added ability to calculate delivery date offset
    [since first business day](/m2/extensions/delivery-date/configuration/#first-available-delivery-date-rules)
    after order was placed.
 -  Delivery date validation improvements.

### Version 1.25.4

> Jan 13, 2021

  - Added missing translation 'I Agree'.
  - Fixed error when event doesn't have originalEvent property.
  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

**Module Updates**

**swissup/module-address-field-manager**

  - Fixed wrong attributes values in Magento 2.4.
  - Use overriden validators instead of around plugin. This allows to use afterValidate plugin in third-party modules.

**swissup/module-checkout-fields**

  - Added ability to specify a notice, tooltip, and placeholder for the field
  - Filled fields values now saved between page reload.
  - Do not delete field value when quote or store is deleted.
  - Do not save empty values.

**swissup/module-checkout-success**

  - Get parent grouped product image if its child is empty at ordered items grid at success order page.
  - Fixed compatibility with magento 2.4.1.

**swissup/module-orderattachment**

  - Restict order attachemnt for specific customer groups.

**swissup/module-taxvat**

  - Validate taxvat when save address.
  - Do not allow to complete multishipping registration with empty taxvat if not allowed.

### Version 1.25.3

> Nov 27, 2020

 -  Fixed error when Paypal Express Checkout popup was shown when customer
    didn't checked all of required terms and conditions.
 -  Improved scroll to "missing shipping method" error when placing order.

**Module Updates**

**swissup/module-delivery-date**

 -  Fixed not working excluded first, seconds, and third days of the month.
 -  Added filter and sort by delivery date column in orders grid.
 -  Fixed invalid holiday date in calendar when default timezone is not UTC

### Version 1.25.2

> Nov 24, 2020

 -  Fixed unable to place order when some invalid field is found in hidden popup.
 -  Move shipping methods notice to the top of the shipping methods section.
 -  Tippyjs library updated to the latest version.

### Version 1.25.1

> Nov 12, 2020

 -  [Google Analytics Integration](/m2/extensions/firecheckout/configuration/#analytics-section) added.
 -  [Added configurable ability](/m2/extensions/firecheckout/configuration/#place-order-button-position)
    to place "Purchase" button under payment section when using onecolumn layout.
 -  Fixed autofill styles in latest chrome versions.

### Version 1.24.2

> Oct 19, 2020

 -  Magento 2.4.1 compatibility: Fixed error at checkout page caused by gift-message
    integration.
 -  Fixed tax reload when shipping method is not selected yet.
 -  Fixed old taxes after zipcode change right after page refresh.
 -  Fixed loader styles with third-party themes.
 -  Stability improvements in bundled modules.

**Module Updates**

**swissup/module-checkout-fields — 1.4.5** (was 1.4.3)

 -  Fixed broken admin email preview page.

**swissup/module-checkout-registration — 1.1.0** (was 1.0.1)

 -  Assign address to the registered customer.
 -  Use 'password options' config when validating password.

**swissup/module-delivery-date — 1.5.4** (was 1.5.1)

 -  Fixed invalid delivery date on success page (timezone issue).
 -  Added delivery date information to the order response when using magento API.

**swissup/module-orderattachment — 1.4.4** (was 1.4.3)

 -  Fixed missing attachment tab at admin order view page.

### Version 1.24.1

> Aug 5, 2020

 -  Magento 2.4 compatibility fixes:
    -   [CheckoutSuccess](/m2/extensions/checkout-success/) -
        fixed ordered items listing.
    -   [CustomerFieldManager](/m2/extensions/customer-field-manager/) -
        fixed error in backend grid when using mass action.
    -   [CheckoutFields](/m2/extensions/checkout-fields/),
        [DeliveryDate](/m2/extensions/delivery-date/),
        [OrderAttachments](/m2/extensions/order-attachments/) - fixed missing block
        in order confirmation email (You have to use `order_id=$order.id` instead
        of `order=$order` property when inserting block to the email template).
    -   Fixed js error caused by stickyfill library.
 -  Fixed proper region usage (province) for Italy addresses when using
    [AddressAutocomplete](/m2/extensions/address-autocomplete/) module.
 -  CSS fixes for third-party themes.
 -  Braintree_Googlepay styles fixes.

### Version 1.24.0

> Jun 16, 2020

 -  Big improvements to the [AddressAutocomplete](/m2/extensions/address-autocomplete/) module:
     -  Added ability to restrict address search to the
        [currently selected country](/m2/extensions/address-autocomplete/configuration/#address-search-restrictions).
        Works flawlessly with [GeoIP module](/m2/extensions/geoip/).
     -  Added ability to extend or completely redefine
        [Address Mapping Settings](/m2/extensions/address-autocomplete/configuration/#advanced-formatting).
     -  [View all changes](/m2/extensions/address-autocomplete/changelog/#version-140)
 -  Added Order Number to the [OrderAttachments](/m2/extensions/order-attachments/) grid.
 -  Fixed default state of [SubscribeAtCheckout checkbox](/m2/extensions/subscribe-at-checkout).

### Version 1.23.0

> May 22, 2020

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1230 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

The most awaited feature added! [CheckoutRegistration](/m2/extensions/checkout-registration/)
module allows buyers to start registration process directly at the checkout page!

 -  [CheckoutRegistration](/m2/extensions/checkout-registration/) module added.
 -  Fixed City detection for Brazilian addresses in
    [AddressAutocomplete](/m2/extensions/address-autocomplete/) module.
 -  Fixed incorrect Swedish locale name.
 -  Persist [Subscribe to Newsletter](/m2/extensions/subscribe-at-checkout/)
    checkbox state between page reloads.

### Version 1.22.4

> May 8, 2020

 -  Magento 2.3.5 Content Security Policy compatibility.
 -  GeoIP module is now allows to download and update Maxmind database directly from
    [configuration page](/m2/extensions/geoip/configuration/).
 -  [Cart qty switcher](/m2/extensions/checkout-cart/) now supports qty
    increments settings.
 -  Translation updates.

### Version 1.22.3

> Apr 21, 2020

 -  Improved initial page load time for stores with large amount of payment methods
    when using multistep checkout layout.
 -  Fixed PaypalExpress checkout when using in-context mode. (Paypal buttons
    inside iframe didn't work)
 -  Fixed StripeIntegration_Payments integration:
    Added workaround for StripeIntegration_Payments module since this payment
    doesn't have a working `validate` method that could be called programmatically
    like any other payment method.

### Version 1.22.1

> Mar 06, 2020

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1221 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Improved Agreements section styles when agreement text doesn't fit single line.
 -  Hide Agreements section at the first step of the 1-column wizard checkout layout.
    (Now it shows up at the payment step only.)
 -  Fixed not working 'Default Shipping Method Code' config option.
 -  Fixed js error when Magento JS bundling is enabled.

### Version 1.22.0

> Feb 20, 2020

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1220 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Added ability to [move Terms and Conditions](/m2/extensions/firecheckout/configuration/#terms-and-conditions-settings-section)
    above Place Order button.
 -  Improved compatibility with third-party payment/shipping methods that
    dynamically update shipping address.
 -  Fixed blocked "Place Order" button when Chrome autofill incorrectly fills
    email field while it's not visible to the customer.
 -  Small CSS fixes.

### Version 1.21.2

> Feb 17, 2020

 -  [Marketplace](https://github.com/swissup/module-marketplace#marketplace)
    installer support added.

### Version 1.21.1

> Jan 9, 2020

 -  Fixed order totals update when delivery date is required

### Version 1.21.0

> Jan 8, 2020

 -  Added syntax highlighter to the "Custom CSS", "Custom JS", "Custom LESS"
    [config fields](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section).
    Writing custom styles and javascript is much more pleasant now.
 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian
 -  Prevent unwanted order totals reload on initial page load.
 -  Fixed order totals update when change shipping method when "Multistep Wizard"
    layout is used.
 -  Fixed missing "Custom LESS" styles when deploy static content from CLI.
 -  Small css fixes.

**Modules Updates**

**swissup/module-checkout-fields — 1.4.0** (was 1.3.1)

 -  Fixed error on order view page caused by wrong date format
 -  Fixed missing checkout field values when making request through the Magento API

**swissup/module-delivery-date — 1.5.0** (was 1.4.5)

 -  Fixed possible error at checkout success page

**swissup/module-orderattachment — 1.4.0** (was 1.3.4)

 -  Fixed serialize error in full page cache module when downloading attachment

### Version 1.20.1

> Oct 16, 2019

 -  Magento 2.3.3 compatibility. (CSS issues with discount, braintree payment,
    and modal popup positioning).
 -  Fixed empty popup when using "Paypal through Braintree" payment method.

**Modules Updates**

 -  Magento coding standard fixes.
 -  Removed direct 'jquery/ui' dependency to improve js performance in
    ([OrderAttachment](/m2/extensions/order-attachments/) and
    [CheckoutSuccess](/m2/extensions/checkout-success/)) modules.
 -  [DeliveryDate](/m2/extensions/delivery-date/): Fixed calendar icon
    positioning when using third-party themes.
 -  [AddressAutocomplete](/m2/extensions/address-autocomplete/): Fixed 'undefined'
    word in input field after pressing 'tab' key. (Happens when API key is invalid).
 -  [CheckoutFields](/m2/extensions/checkout-fields/): Fixed missing fields in
    orders grid when DB table prefix is used.

### Version 1.20.0

> Sep 9, 2019

 -  Stylish product qty buttons in "Order Summary" block.
 -  New [jsBuild option](/m2/extensions/firecheckout/configuration/#performance-settings-section)
    added:

    Metrics             | Version 1.19  | Version 1.20  | Improvement
    --------------------|---------------|---------------|------------
    Network Requests    | 438           | 250           | 43%
    TTFB                | 230ms         | 185ms         | 20%
    Time to interactive | 4.2s          | 3.3s          | 21%
    Page load time      | 4.47s         | 3.7s          | 17%

    > Both versions tested with Magento 2.3.2 in production mode with disabled
    > Magento's Javascript Bundling option.
    >
    > Version 1.20 tested with enabled our
    > [jsBuild option](/m2/extensions/firecheckout/configuration/#performance-settings-section)

**Fixes and Improvements**

 -  Optimize network requests when multistep layout is used.
 -  Prevent not needed shipping address save on initial page load.
 -  Improved client-side validation for payment form.
 -  Improved checkbox alignment in third-party themes.
 -  Fixed 'error icon' positioning near payment 'terms checkbox' in Magento 2.3.2.
 -  Fixed delivery date validation for registered customers.
 -  Fixed css issue with ArgentoForce theme.
 -  Fixed css issue with social login when midnight theme is used.
 -  Fixed js error when registered customer doesn't have default shipping address.
    (Error happens when client has addresses but they don't used as default addresses).
 -  Fixed missing background for the 'select' element.
 -  Fixed tooltip text in phone field placeholder in Magento 2.3.2.
 -  Fixed not working sticky sidebar in Firefox browser.
 -  Fixed mistakenly equal billing and shipping addresses in Magento 2.2.8.

**Modules Updates**

**swissup/module-checkout-cart — 1.4.2** (was 1.4.1)

 -  New, better looking product qty buttons.

**swissup/module-checkout-fields — 1.3.0** (was 1.2.4)

 -  Added ability to edit checkout fields on order view page.
 -  Added ability to select fields to display in email template.
 -  Fixed missing fields when using Paypal payment method.
 -  Fixed required fields validation on page load.
 -  Date field type improvements: added icon, select month and year.
 -  Fixed js error on admin field edit form.

**swissup/module-checkout-success — 1.3.4** (was 1.3.3)

 -  Fixed success page preview feature on Magento 2.3.x.

**swissup/module-delivery-date — 1.4.3** (was 1.4.1)

 -  Make delivery date editable at backend order view page.
 -  Improved server-side validation logic.
 -  Fixed ability to enable delivery for all weekdays.

**swissup/module-geoip — 1.3.0** (was 1.2.0)

 -  MaxMind_Service provider added.
 -  IpStack provider added.

### Version 1.19.0

> May 23, 2019

 -  New additional content type:
    [Intro Popup](/m2/extensions/firecheckout/configuration/#additional-content-section)
    See [Intro Popup use-cases](/m2/extensions/firecheckout/customization/use-cases/intro-popup/)
    for more information.
 -  Fixed billing address section collapsing in Magento 2.3.0
 -  Fixed styles for `type="image"` inputs
 -  Improved error messages visibility

**Modules Updates**

**swissup/module-address-autocomplete**

 -  Improved Czech Republic addresses autocompletion

**swissup/module-geoip**

 -  Fixed invalid shipping methods on initial page load
 -  A new place for MaxMind database to keep vendor directory clean: `var/swissup/geoip/`.
    Old location (`vendor/swissup/module-geoip/`) will still work fine though.
 -  Code cleanup

**swissup/module-taxvat**

 -  Added abilty to place tax-free order when VAT Number is valid (EU countries only)
 -  Added ability to place order using invalid VAT Number
 -  Hide notice about country code for magento 2.3.0 and newer
 -  Configuration improvements
 -  Code optimizations
 -  1.2.1 hotfix: tax-free orders on Magento 2.2

### Version 1.18.1

> Mar 29, 2019

 -  Fixed compatibility with Magento 2.3.1 (PHP7+ is required)
 -  Improved spacing below "Subscribe to newsletter" checkbox

### Version 1.18.0

> Mar 21, 2019

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1180 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  RTL languages support added
 -  Added ability to customize [LESS variables](/m2/extensions/firecheckout/customization/less-variables/)
    and write styles using LESS syntax
    [directly from admin panel](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section)
 -  Improved compatiblity with third-party modules
 -  All built-in modules updated to add RTL languages support

### Version 1.17.0

> Jan 25, 2019

It's all about the gifts!

GiftMessages support added to the firecheckout page for both Magento Community
and Magento Commerce editions.

GiftWrapping, GiftRegistry, GiftReceipt, and PrintedCards support added for
Magento Commerce Edition.

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1170 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

**New Features**

 -  GiftMessages support added. You can now edit them directly from the
    firecheckout page.
 -  MagentoCommerce features integrated:
    - GiftWrapping
    - Fixed missing billing address when GiftRegistry address is used
    - Improved styles of StoreCredit and RewardPoints blocks
 -  [Collapsible.js](/m2/extensions/firecheckout/customization/collapsible-js/) utility added

**Fixed and Improvements**

 -  Fixed possible issue with invalid billing address selected
 -  Fixed wrong step numbers alignment on some third-party themes
 -  Fixed invisible "Subscribe to Newsletter" checkbox when shipping address
    is hidden by a third-party module
 -  Small CSS and JS fixes

**Modules Updates**

**swissup/module-address-autocomplete — 1.2.0** (was 1.1.1)

 -  Added ability to place housenumber into custom address field

**swissup/module-checkout-cart — 1.4.1** (was 1.4.0)

 -  Fixed missing shipping rates when GiftRegistry address is used
 -  Fixed js error when grouped product added to cart (When simple products are
    not visible in catalog)

**swissup/module-subscribe-at-checkout — 1.2.1** (was 1.2.0)

 -  Move the checkbox out of shipping section.
    (This improves compatibility with third-party store-pickup modules
    that hide shipping section)

### Version 1.16.0

> Dec 19, 2018

Firecheckout page looks more structured now with the
[title above "Billing Address" form](/m2/extensions/firecheckout/configuration/#payment-settings-section),
[checkout fields in "Order Summary" section](/m2/extensions/firecheckout/customization/use-cases/move-checkout-fields-to-order-summary/),
and compact mode to display saved shipping addresses.

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1160 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

**New Features**

 -  Added ability to [configure](/m2/extensions/firecheckout/configuration/#payment-settings-section)
    billing address block placement and show title above billing address section
 -  [Move.js utility](/m2/extensions/firecheckout/customization/move-js/)
    added that allows to [move some blocks around](/m2/extensions/firecheckout/customization/use-cases/move-checkout-fields-to-order-summary/)
 -  Added [ability to add title](/m2/extensions/firecheckout/configuration/#order-summary-settings-section)
    above "Order Review" block

**Fixes and Improvements**

 -  Reduce too long "Shipping Address" block when customer has many saved addresses
 -  Removed not needed ajax request when trying to save invalid billing address
 -  Fixed Auth popup divider color in "Midnight" theme when using SocialLogin
 -  Small css fixes and improvements

### Version 1.15.2

> Dec 04, 2018

 -  Swissup_SocialLogin integration: Fixed login popup positioning
 -  Fixed conflict with Braspag_Pagador module (misplaced credit card types selector)
 -  Fixed invalid street line labels
 -  Minor CSS fixes

**Modules Updates**

**swissup/module-address-field-manager — [1.4.2](/m2/extensions/address-field-manager/)** (was 1.4.0)

 -  Fixed field validation on the latest Magento versions

**swissup/module-checkout-fields — [1.2.0](/m2/extensions/checkout-fields/)** (was 1.1.0)

 -  Fixed dropdown field options save issue in Magento 2.2.6
 -  Added ability to show checkout fields at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page
 -  Added ability to show fields in backend order grid
 -  Checkout fields added to backend's new order form

**swissup/module-checkout-success — [1.3.2](/m2/extensions/checkout-success/)** (was 1.3.1)

 -  Prevent Warning/Error when tring to render child block that doesn't exists
 -  Added third-party modules blocks support via `di.xml` instructions:
    -  CheckoutField
    -  DeliveryDate
    -  OrderAttachment
 -  Added margin for delivery date block

**swissup/module-delivery-date — [1.4.0](/m2/extensions/delivery-date/)** (was 1.3.2)

 -  Added ability to show delivery date information at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page
 -  Fixed 'undefined' word inside calendar icon

**swissup/module-geoip — [1.1.2](/m2/extensions/geoip/)** (was 1.1.1)

 -  Corrected path to the MaxMind database in config field

**swissup/module-orderattachment — [1.3.0](/m2/extensions/order-attachments/)** (was 1.2.0)

 -  Added ability to show attachments at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page

### Version 1.15.1

> Nov 08, 2018

 -  Magento 2.1 compatibility in [DeliveryDate](/m2/extensions/delivery-date/) module
 -  Fixed ability to save address/customer attribute with custom attribute_code
    ([AddressFieldManager](/m2/extensions/address-field-manager/) and
    [CustomerFieldManager](/m2/extensions/customer-field-manager/))
 -  Fixed blocked payment popup when using Braintree module with enabled
    "Paypal through braintree" option
 -  Small code optimizations

### Version 1.15.0

> Nov 01, 2018

 -  DeliveryTime feature added to the [DeliveryDate](/m2/extensions/delivery-date/)
    module
 -  Minor CSS fixes
 -  Third-party modules compatibility
    - Firecheckout now triggers standard shipping validation when placing order.
      This makes it even fore friendly to third-party modules.
    - Fixed compatibility with PostNL module
    - Fixed compatibility with Sagepay payment method

**Modules Updates**

 -  [AddressAutocomplete 1.1.1](/m2/extensions/address-autocomplete/changelog/#version-111)
    - Fixed non working autocomplete when form doesn't have ID attribute
      (Some rare third-party modules)
 -  [CheckoutSuccess 1.3.1](/m2/extensions/checkout-success/changelog/#version-131)
    - Fixed non working page preview functionality in backend, when backend and
      frontend has different timezone settings.
 -  [DeliveryDate 1.3.1](/m2/extensions/delivery-date/changelog/#version-131)
    - Delivery Time feature added
    - Added ability to add DeliveryDate information to the order emails
    - Improved config interfaces
 -  [TaxVat 1.1.1](/m2/extensions/taxvat/changelog/#version-111)
    - Removed ability to enter vat number without country code because of
      conflict with Magento's automatic customer group assignment feature

### Version 1.14.0

> Sep 28, 2018

 -  Fixed redirect to shopping cart, when using Magento 2.2.6 and 1column
    Multistep Layout.

**Modules Updates**

 -  [Geoip](/m2/extensions/geoip/)
    - Fixed bug when wrong shipping methods were shown on initial page load

### Version 1.13.1

> Sep 21, 2018

 -  Default config values updated:
    - Theme: Light (Previously was set to "Default")
    - Layout: Empty ("Standard" layout was used before)
 -  Magento 2.2.6 CSS fixes:
    - Popup window behind overlay
    - Button CSS issue in Round theme
 -  CSS fixes ad improvements:
    - Calendar icon color and position fixes for Midnight and Round themes
    - Additional resets for 'select' elements
    - Improved compatibility with third-party themes
    - Fixed styles for Braintree payment form
 -  Third-party modules compatibility
    - Fixed missing Place Order button, when "Dibs" payment method is selected
    - Improved compatibility with Magestore_Storepickup module

**Modules Updates**

 -  [AddressFieldManager](/m2/extensions/address-field-manager/changelog/#version-132)
    -  Fixed display of custom dropdown attribute value in saved address
    -  Fixed validation when saving existing attribute in backend panel
 -  [CustomerFieldManager](/m2/extensions/customer-field-manager/changelog/#version-102)
    -  Fixed validation when saving existing attribute in backend panel

### Version 1.13.0

> Sep 7, 2018

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1130 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

**Backward Incompatible Changes**

[Upgrade Instructions](/m2/extensions/firecheckout/upgrade-instructions/#version-1120---1130)

 -  Custom less files renamed and moved to '/custom/' [folder](/m2/extensions/firecheckout/customization/custom-css/)
 -  `Less` variables and mixins [renamed](/m2/extensions/firecheckout/customization/less-variables/)

**New Feratures**

 -  **3 New Themes** added. You can select the one you liked via
    [design configuration](/m2/extensions/firecheckout/configuration/#theme)
 -  Form field errors and notices moved to [stylish tooltips](/m2/extensions/firecheckout/configuration/#design-section)
 -  Default ajax loader image replaced with nice CSS spinner
 -  Configurable [order review](/m2/extensions/firecheckout/configuration/#order-summary-settings-section)
    section added. Useful for EU countries.
 -  [Additional content](/m2/extensions/firecheckout/configuration/#additional-content-section) changes:
    - "Below order summary" section will now appear above "Place Order" button
    - New content section added: "Below place order button"

**Fixes**

 -  Fixed missing/invalid tax after changing region or postcode
 -  Fixed multiple "saveShippingInformation" requests at the same time

**Visual Improvements**

 -  Improved credit card form styles for known payment methods: Authorize.Net,
    Braintree and other methods that use standard CC form markup.
 -  Improved "Sticky sidebar" performance, used for 1-column layout.
 -  Added ability to change background for "chrome-" autofilled fields with
    `@fc-form-field__autofill__background-color` less variable
 -  Firecheckout 1-column container will inherit its width from theme when
    page layout is set to 'Default' or 'Full'. (Previously, 1-column layout always
    used narrow container.)
 -  Tons of tiny perfection improvements like vertical alignment between blocks,
    equal spacing around the elements and button-set alignments.

**Stability Improvements**

 -  Small CSS and JS fixes
 -  Fixed js error in IE browser
 -  Improved compatibility with third-party payment methods
    (Tested with SagePaySuite and Braintree)

**Modules Updates**

 - [CheckoutCart](/m2/extensions/checkout-cart/changelog/#version-130)
    - Fixed possible js error at non-checkout pages
    - Allow to use html entities in product name (Like these: ® ©)
    - Improved customization abilities
 -  [SubscribeAtCheckout](/m2/extensions/subscribe-at-checkout/changelog/#version-110)
    - Standard markup for checkbox element

### Version 1.12.0

> Jul 24, 2018

Firecheckout **1.12.0** brings more power to advanced users and developers who
wants to customize their checkout pages.

{% include gallery.html images=site.data.gallery.m2.firecheckout.changelog.v1120 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Added ability to add custom CSS and JS directly from
    [configuration page](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section)
 -  A lot of customization utilities added:
    - [FieldManager](/m2/extensions/firecheckout/customization/field-manager/)
        that allows to change field Label, Placeholder, CSS class, apply
        formatter, validator, and much more.
    - [DependentFields](/m2/extensions/firecheckout/customization/dependent-fields/)
        utility that allows to setup dependencies between fields. You can show
        or hide some field, when other field/fields values matches some condition.
    - [FieldWatcher](/m2/extensions/firecheckout/customization/field-watcher/)
        utility will help you to implement any specific logic with custom js functions.
 - New use cases added to the docs:
    - [Housenumber](/m2/extensions/firecheckout/customization/use-cases/housenumber/)
    - [Postcode Mask &amp; Validator](/m2/extensions/firecheckout/customization/use-cases/postcode-mask/)
    - [Change field size](/m2/extensions/firecheckout/customization/use-cases/field-size/)
    - [Business account checkbox](/m2/extensions/firecheckout/customization/use-cases/business-account-checkbox/)

**Bugfixes**

 -  Fixed constantly checked 'My billing and shipping address are the same'
    checkbox, when Billing address is rendered below payment methods
 -  See 'Modules Updated' section for more bugfixes

**Modules Updates**

 -  Address Field Manager — [1.3.1](/m2/extensions/address-field-manager/changelog/#version-131)
     -  Fixed missing custom address fields in Billing Address form when it's
        rendered below payment methods
     -  Fixed Invalid fields sort order in Billing Address form when it's
        rendered below payment methods
  -  Checkout Success — [1.2.0](/m2/extensions/checkout-success/changelog/#version-120)
     -  Stability improvements in PHP code
     -  New variables added into Miscellaneous scripts:
         -  `{% raw %}{{orderBillingAddress}}{% endraw %}`
         -  `{% raw %}{{orderShippingAddress}}{% endraw %}`
 -  Checkout Vat — [1.0.5](/m2/extensions/taxvat/changelog/#version-105)
     -  Fixed missing tooltip in Billing Address form when it's
        rendered below payment methods
 -  Translation files added to all modules

### Version 1.11.0

> Jun 21, 2018

 -  New terrific feature added to the [CheckoutCart](/m2/extensions/checkout-cart/)
    module: "Show product name as a link"
 -  Additional CSS resets for custom MGS_Claue theme
 -  Fixed compatibility with Braintree "PayWithPayPal"
 -  Fixed sticky order review section in firefox browser
 -  Improved shipping information save logic
 -  Numerous fixes for registered customers without addresses:
    - Fixed js error when placing order
    - Fixed shipping address saving
    - Fixed shipping methods reload

### Version 1.10.0

> Apr 26, 2018

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
 -  [AddressAutocomplete](/m2/extensions/address-autocomplete/)
    [DeliveryDate](/m2/extensions/delivery-date/),
    [CheckoutCart](/m2/extensions/checkout-cart/),
    [CheckoutSuccess](/m2/extensions/checkout-success),
    [OrderAttachment](/m2/extensions/order-attachment/)
    updated to the latest versions.

**Third-party modules**

 -  ClassyLlama_AvaTax address verification seamlessly integrated into expanded
    layout modes

### Version 1.9.0

> Mar 15, 2018

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
