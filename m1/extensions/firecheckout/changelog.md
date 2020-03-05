---
layout: default
title: Firecheckout changelog
description: Firecheckout changelog
category: Firecheckout
---

# Changelog

### Version 4.4.2

> Mar 05, 2020

 -  Fixed password recovery functionality in magento 1.9.3.0 and newer.

**Third-party modules**

 -  Cryozonic_Stripe integration updated.
 -  District_Stripe integration added.
 -  Heidelpay payment integration updated.
 -  Iways_Paypal integration updated to work well with Onecolumn layout.
 -  Magikfees integration added.
 -  Smartmage_Paczkomaty integration added.
 -  Upg_Payments integration added.
 -  Webkul_Stripe integration added.

### Version 4.4.1

> Oct 9, 2019

 -  Updated integration with Gene_Braintree module (v3.1.1)
 -  Shipperhq_Calendar integration added.
 -  DHLparcel_Shipping integration added.
 -  MageWorx_Donations integration added.
 -  Sub1_Nps integration added.
 -  Reset to correct item qty value when reach maximum of available items in cart.
 -  Hide partially visible password field on some third-party themes.

### Version 4.4.0

> Apr 16, 2019

 -  Geoip submodule rewritten to add `mmdb` databases format support. (Old format
    was not supported by MaxMind.)

    > If you used this functionality, you need to
    > [reconfigure](/m1/extensions/firecheckout/configuration/address-detection-geoip/)
    > it again.

 -  Fixed possible session invalidation during account registration and paypal checkout.
 -  Fixed possible js error with third-party modules

### Version 4.3.7

> Apr 01, 2019

 -  Improved scroll to section behavior when using onecolumn layout
 -  Fixed jumping RTL styles when page is loading
 -  Fixed possible missing shipping method cost when using onecolumn layout
 -  Fixed ability to place order as guest using registered email when onecolumn
    layout is enabled
 -  Fixed possible js error in console
 -  Fixed possible PHP notice when payment method is not received
 -  Fixed possible PHP timeout when using VAT VIES validation

**Third-party modules**

 -  Updated Cryozonic_Stripe integration
 -  Amasty_Stripe integration added
 -  Bluesnap payment integration added

### Version 4.3.6

> Mar 06, 2019

 -  Improve city recognition for City in Brazil when using AddressAutocomplete feature
 -  Fixed broken Paypal (hss/link/payflow) at standard checkout when firecheckout module is enabled
 -  Fixed disabled ajax settings when configuring firecheckout on store level

**Third-party modules**

 -  Improved integration with third-party agreement modules
 -  Updated integration with TIG_MyParcel2014 (v.1.17.1)
 -  Integration with GLS shipping methods added
 -  Updated integration with Klarna_Payments (4.3.0)
 -  Fix Amasty order attribute duplication in review section
 -  Updated Cryozonic_Stripe integration (3.3.0)

### Version 4.3.5

> Nov 08, 2018

 -  CheckoutSuccess module updated to [2.0.9](/m1/extensions/checkout-success/changelog/#version-209)
 -  Fixed missing login popup, when customer clicks "Login" link
 -  Fixed alert message in Firefox when client is leaving checkout page
 -  Show/hide asterisk for zip/region fields when their status is dynamically updated
 -  Tax/Vat offline validation now supports validation for Brazil CPF/CNPJ numbers
 -  Fixed empty rows in "Default Payment Method" config option

**Third-party modules**

 -  Solupay_Networkmerchant integration added. See docs for more [instructions](/m1/extensions/firecheckout/supported-modules/solupay-networkmerchant/)
 -  Magestore_Affiliateplus integration added
 -  Zipmoney_ZipmoneyPayment integration added
 -  Improved integration with Iways_PaypalPlus
 -  TIG_PostNl integration updated
 -  Updated integration with Payfort_Pay method
 -  Improved code stability in Webtex_Giftcards integration
 -  Updated integration with ShipperHQ_Pickup module
 -  Amasty_OrderAttr integration updated. See docs for more [instructions](/m1/extensions/firecheckout/supported-modules/amasty-orderattr/)

### Version 4.3.4

 -  Magento 1.9.3.9 compatibility. Fixed redirect to homepage, when customer is
    registered during checkout.
 -  Pook_CollectInStore [integration added](/m1/extensions/firecheckout/supported-modules/pook-collectinstore/)
 -  CheckoutSuccess module updated to the [latest version](/m1/extensions/checkout-success/changelog/#version-208)

### Version 4.3.3

 -  Fixed newsletter subscription when registering new account and using
    paypal express or any other payment method that redirects to another site
 -  Fixed popup positioning when body has relative position and margin

**Third-party modules**

 -  Fixing missing GiftCard block after coupon update
 -  [Payfort_Pay integration](/m1/extensions/firecheckout/supported-modules/payfort-pay/) added.
    Thanks to our customer from **"MageMEGA - Managed Magento Hosting"**

### Version 4.3.2

 -  Fixed missing `name.after` container when user is logged in
 -  Small javascript fixes

**Third-party modules**

 -  Rugento_Pickpoint integration added
 -  Grinet_Payu integration added
 -  Apptha_Sociallogin integration added
 -  Fixed [Iways_PaypalPlus integration](/m1/extensions/firecheckout/supported-modules/iways-paypalplus/)

### Version 4.3.1

 -  Fixed too early email address validation when using onecolumn layout
 -  Fixed not working Authorize.net when using onecolumn layout

**Third-party modules**

 -  Removed deprecated integration with CraftyClicks
 -  Added Klarna_Payments integration. See the [docs](/m1/extensions/firecheckout/supported-modules/klarna-payments/)
    for more information.

### Version 4.3.0

<details>
    <summary><strong>Screenshots</strong></summary>
    {% include gallery.html images=site.data.gallery.m1.firecheckout.changelog.v430 class="phone-up-2 tablet-up-3 photoswipe scroll" %}
</details>

**Major changes**

 -  JS calendar will now use native component on mobile devices when possible
 -  Added [ability to disable](/m1/extensions/firecheckout/configuration/firecheckout/#layout-and-design)
    calendar picker for Date of Birth field
 -  Allow hyphens in checkout url

**Fixes and Improvements**

 -  Fixed single payment method activation after ajax update
 -  Added missing "customer_address_validation_after" event from new magento version
 -  Fixed not working address save in customer account page because of Magento's
    hardcoded address validation
 -  Sync "customer_address_id" value when shipping address is same as billing
 -  Magento API support improved. SOAP_V2 support added

**Third-party modules**

 -  [Orba_Sheepla](/m1/extensions/firecheckout/supported-modules/orba-sheepla/)
    integration added
 -  [Magenio_FiscalData](/m1/extensions/firecheckout/supported-modules/magenio-fiscaldata/)
    integration updated
 -  Amasty_Giftwrap integration added
 -  Amasty_Methods and [Amasty_Shiprestriction](/m1/extensions/firecheckout/supported-modules/amasty-shiprestriction/)
    integrations updated
 -  Svea_WebPay integration updated. Added support for 'Get Address' button in billing form

### Version 4.2.6

 -  Fixed ability to place order with saved address when it missing some
    required field
 -  Prevent multiple concurrent ajax requests that may cause invalid totals
 -  Fixed missing free shipping on initial page load when free shipping is
    applicable in registration mode only
 -  Fixed address review styles when shipping address is disabled
 -  Fixed missing phone and fax in address review section

**Third-party modules**

 -  Added ability to programmatically disable address fields
 -  Added additional container after customer name field -
    `firecheckout.shipping.name.after`, `firecheckout.billing.name.email.after`
 -  Added additional container in the bottom of shipping methods section -
    `firecheckout.shipping.after`
 -  TIG_MyParcel2014 integration updated
 -  Plumtree_Storepickup integration added
 -  Magegiant_GiantPoints integration added
 -  BongoInternational integration added
 -  Amasty_Checkoutfees integration added
 -  Easynolo_Bancaselapro integration added

### Version 4.2.5

 -  Added ability to add custom fields before billing form
 -  Added ability to use firecheckout_custom.xml layout file
 -  Fixed ability to use checkbox field in DependentFields component
 -  Fixed js errors in IE11
 -  Better third-party themes compatibility

**Third-party modules**

 -  Dhl_Locationfinder style fix
 -  Fixed 'server' integration with Ebizmarts_SagePaySuite. v.4.2.4
 -  Payex_Payments integration added
 -  Fixed IE11 integration with LaPoste_Colissimo

### Version 4.2.4

 -  Fixed possible error during address validation for registered customers

**Third-party modules**

 -  [LaPoste_Colissimo](/m1/extensions/firecheckout/supported-modules/laposte-colissimo/) integration
 -  Webtex_Giftcards integration improvements (Card section moved inside existing
    discount block)

### Version 4.2.3

 -  Code refactoring and stability improvements
 -  Fixed js error at onecolumn layout
 -  Improved compatibility with third-party themes
 -  Fixed ajax requests loop in IE11 when Fooman_Surcharge module is available
 -  AddressAutocomplete updated to [1.1.4](/m1/extensions/address-autocomplete/changelog/#version-114)
 -  CheckoutSuccess updated to [2.0.6](/m1/extensions/checkout-success/changelog/#version-206)

**Third-party modules**

 -  [Dhl_LocationFinder](/m1/extensions/firecheckout/supported-modules/dhl-locationfinder/) integration added
 -  [Amasty_StoreCredit](/m1/extensions/firecheckout/supported-modules/amasty-storecredit/) integration added
 -  [OPG_Square](/m1/extensions/firecheckout/supported-modules/opg-square/) integration added
 -  Conekta_Card integration added
 -  Updated integration with [OnePica_AvaTax](/m1/extensions/firecheckout/supported-modules/onepica-avatax/) module
 -  Fixed js error when PaypalPlus is the only method available

### Version 4.2.2

 -  Small fixes into onecolumn layout mode
 -  Fixed js validation on DOB field
 -  Improved scrollTo method. Now it depends on `sticky_offset_top` config value.
 -  PHP code cleanup to pass MEQP validation

### Version 4.2.1

 -  Fixed js error `defaultValue of null` for logged-in customers
 -  Netresearch_OPS integration updated (**v.16.12.14** is required)

### Version 4.2.0

**Major changes**

 -  Improved mobile customer experience when entering telephone, fax and
    credit card details (Numeric keyboard will be automatically choosen)
 -  Security improvements according to the Magento 1.9.3.3 version

**Fixes and impovements**

 -  Fixed payment-method cvv tooltip size on mobile devices
 -  Fixed infinitely loading regions, if response wasn't returned
 -  Fixed jumping sidebar in Onecolumn and 2-columns sticky layouts
 -  Better compatibility with third-party themes

**Third-party modules**

 -  SR_UpsShip integration added

### Version 4.1.0

This version includes major update for RTL styles. Now all layout modes are
perfectly supported.

{% include gallery.html images=site.data.gallery.m1.firecheckout.changelog.v410 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

**Major changes**

 -  RTL support added

    > Read this [short guide](/m1/extensions/firecheckout/troubleshooting/#rtl-styles-are-not-applied)
    > on how to force RTL styles, in case if they are not applied automatically.

 -  Added ability to set [top_offset](/m1/extensions/firecheckout/configuration/firecheckout/#layout-and-design)
    for sticky elements, in case if your theme uses sticky header and it covers
    firecheckout sticky element
 -  Improved third-party themes compatibility

**Third-party modules**

 -  Hps_Securesubmit integration added
 -  Payolution birthday fields validation fixed
 -  Fooman_DpsPro integration added
 -  Dhl_Versenden integration added

### Version 4.0.2

 -  Significant improvements into email/password autofill on iMac and iPad
    devices, when using onecolumn mode (Safari and Chrome browsers)
 -  Fixed possible "password didn't match error", when using hidden registration mode
 -  Improved keyboard navigation through the firecheckout form in onecolumn mode
 -  Added design for disabled form elements
 -  Small improvements into email validation at the first step of onecolumn mode
 -  Fixed "Registration is required" mode, when using onecolumn mode
 -  Small css fixes

### Version 4.0.1

 -  Sticky component fixes
 -  Improved third-party themes compatibility
 -  German locale updated
 -  Small js fixes
 -  Updated integration with latest TIG_PostNL version

### Version 4.0.0

This major update includes a bunch of UI and UX improvements such as
[modern form styles](), [improved layout for tablet devices](),
[brand new popup window styles](), [rewritten login popup form](),
[smart layout feature](), [user-friendly calendar](),
and much more changes to css styles and javascripts for better flexibility that
allows to create unique checkout that will perfectly fit your store.

{% include gallery.html images=site.data.gallery.m1.firecheckout.changelog.v400 class="scroll phone-up-2 tablet-up-3 photoswipe" %}

**Major changes**

 -  Fresh look for all firecheckout elements:
    - Forms, checkboxes and radio buttons
    - Popup windows
    - Loader animations
 -  New layout type: "2 columns with sticky Order Review"
 -  Smart layout feature, that automatically changes layout to provide best UX
 -  Tree types of new form styles:
    - Default form styles
    - Wide fields
    - Horizontal form
 -  Ability to use hidden labels and animated placeholders for address forms
 -  New user-friendly calendar popup for delivery date and date of birth fields

**Fixes and improvements**

 -  Fixed bug with free shipping coupon and 'Hide other shipping methods' config
 -  Fixed possible error when merge is enabled: 'TypeError: (intermediate value)
    is not a function'
 -  Fixed error, when adding virtual item and free shipping is available
 -  Fixed logic in DependentFields component
 -  Improved 'Date of Birth' instant validation
 -  Small js and css fixes

**Javascript improvements for developers needs**

 -  New Components added:
    - FC.Sticky to create sticky elements
    - FC.Utils with commonly used functions
    - FC.Calendar to create date input fields
    - FC.ForgotPassword to easily provide forgot-password functionality in any
      place of firecheckout page
    - FC.Loader to easily show loading animations on buttons, input elements or
      globally

### Version 3.11.2

 -  Small PHP and javascript fixes

**Third-party modules**

 -  HeidelpayCD integration update. See [integration instructions](http://docs.swissuplabs.com/m1/extensions/firecheckout/supported-modules/heidelpaycd-edition/)
    for more information
 -  TigPostNl integration fixes
 -  Fixed conflict with IWD_OrderManager module

### Version 3.11.1

 -  Fixed error during configuration save: TM_Core updated to add missing
    `tmcore/adminhtml_system_config_backend_serialized_array`

### Version 3.11.0

**Major changes**

 -  Added ability to place order using saved address with missing required fields
    (If address requirements were updated and now some required fields are missing)
    Nice popup with missing address fields and "Place Order" button will appear
 -  Fixed bug with missing password in account create/confirmation emails
 -  Comment and additional fields moved to account information block at order view page:

    ![Additional checkout fields](/images/m1/firecheckout/changelog/3.11.0/checkout-fields-at-backend-order-view.png)

 -  Section numbers rewritten with css counters instead of js solution

    > **Warning!**
    >
    > If you've changed original javascript for section numbers, you should
    > remove your modification to prevent possible issues with css counters

 - CheckoutSuccess updated to [2.0.3](/m1/extensions/checkout-success/changelog/#version-203)

**Fixes and Improvements**

 -  Fixed cart weight calculation for configurable products
 -  Fixed total recalculation, when discount depends on cart weight
 -  Fixed checkout fields options visibility on store level
 -  Fixed delivery date options per store level
 -  Fixed cvv description popup positioning on mobile devices
 -  Fixed 'Missing Shipping Method' error
 -  Fixed persistent loading state, when error is occured during ajax request
 -  Fixed invalid item qty display after ajax request, when more than X items
    are not available
 -  Fixed popup size to always to fit screen size on small devices
 -  Small css improvements nad fixes

**Javascript improvements for developers needs**

 -  New features in FC.Window component:
    - Added ability to set error messages
    - Added ability to call callback after hide
    - Improved actionbar usage syntax
    - Improved default triggers value
 -  Added ability to set after and before setResponse callbacks
 -  Added ability to update any checkout section with separate method (`checkout.updateSection`)

**Third-party modules**

 -  Updated integration with Netresearch_OPS module
 -  Improved Webshopapps_Premiumrate integration (Fixed the case when shipping
    methods depends on items qty in the cart)
 -  Improved Firegento_MageSetup integration (Added 'Checkout Options' support)
 -  TIG_Myparcel2014 integration
 -  Updated integration with Lemonline_Smartpost
 -  Fixed missing detailed taxvat row when Fooman_Surchage is used
 -  Fixed free order placing, when Cryozonic_Stripe method is available

### Version 3.10.0

**Major changes**

 -  Added ability to use separate values for Page Title and Meta Title fields

    ![Meta Title](/images/m1/firecheckout/changelog/3.10.0/meta-title.png)

 -  Added option to allow to place order, if VIES (Tax validation) service is busy

    ![VIES configuration](/images/m1/firecheckout/changelog/3.10.0/vies-configuration.png)

 -  Added ability to save billing address on registration mode change.
    Usefull, when discount for registered users is used at the store.

    ![Billing address save rules](/images/m1/firecheckout/changelog/3.10.0/save-rules.png)

 -  Added ability to reload discount section on billing address change.
    Usefull, when discount for registered users is used at the store.

    ![Discount update rules](/images/m1/firecheckout/changelog/3.10.0/discount-update-rules.png)

 -  Fixed form field status saving logic. Global and website levels are allowed
    only. (Previously it was stored on global level only)
 -  Additional fields, delivery date and customer comment fields will be
    rendered as optional in backend order create form despite of
    configuration value

**Fixes and Improvements**

 -  Small configuration improvements (Updated few titles and comments)
 -  Minor css and js improvements
 -  Added additional check to prevent double click on a submit button in
    Authorize.Net form
 -  Authorize.Net directpost integration updated. Inline js moved to js file
 -  Improved logic to restore entered data in fields after ajax update

**Third-party modules**

 -  Updated Emjainteractive_Shippingoption integration
 -  Firegento_MageSetup integration improved
 -  SagepaySuite compatibility updated
 -  Fixed error in Aicod_Italy integration
 -  Fixed conflict with Webtex_Giftcards
 -  Mageworx_MultiFees integration updated
 -  Webgriffe_Tntpro integration added
 -  Mico_Rushpackage integration added

### Version 3.9.0

**Major changes**

 -  Added ability to change firecheckout url from backend configuration
    (System > Configuration > TM Checkout > Firecheckout > General)

    ![Firecheckout Url Path](/images/m1/firecheckout/changelog/390/url-path.png)

 -  Configurable discount checkbox state added
    (System > Configuration > TM Checkout > Firecheckout > General)

    ![Discount checkbox state](/images/m1/firecheckout/changelog/390/discount-checkbox-state.png)

 -  Added [FormFieldManager](../form-field-manager/) component with following features:
    + Update address field [label or placeholder](../street-line-labels/)
    + Update field placeholder on any form at checkout
    + Add [field formatter](../form-field-manager/) at any checkout field

**Fixes and Improvements**

 -  Fixed error, when multiple ajax loaders where added to the field
 -  Fixed wrong button:hover color on some themes
 -  Added additional css classes to the body element
 -  Added additional layout handles for third-party modules:
    + firecheckout_index_index_custom
    + firecheckout_index_updatecheckout_custom
 -  Fixed missing layout messages after ajax update
 -  Discount form will be automatically expanded, when coupon is applied
 -  Store ids added to the cms block titles in backend configuration:
    (System > Configuration > TM Checkout > Firecheckout > Additional content)

    ![Store ids next to cms block title](/images/m1/firecheckout/changelog/390/cms-block-list.png)

**Third-party modules**

 -  [Gene_Braintree integration updated](../supported-modules/gene-braintree/)
 -  [Ebixmarts_SagePaySuite integration updated](../supported-modules/ebizmarts-sagepaysuite/)
 -  TIG_PostNL and PostcodeNl_Api conflict fixed
 -  [J2T_Rewardpoints integration updated](../supported-modules/j2t-rewardpoints/)
 -  Firegento_Magesetup integration added

### Version 3.8.0

**Major changes**

 -  Updated 2 and 3 columns layout designs:
    - New, cleaner sections and button styles
    - Billing and shipping address sections grouped into single section
    - Discount section moved into payment methods section
    - Additional information section moved into Order Confirmation
    - Cleaner styles for Checkout Review table
    - [View Screenshots](/m1/extensions/firecheckout/)
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
