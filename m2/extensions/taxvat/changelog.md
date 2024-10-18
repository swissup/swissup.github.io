---
layout: default
title: Checkout VAT Changelog
description: Checkout VAT changelog
keywords: Checkout VAT changelog
category: Checkout VAT
---

# Changelog

### Version 1.33.1

> October 18, 2024

 -  Added integration with Amasty_Extrafee module.

### Version 1.4.5

> Sep 2, 2024

 -  Fixed not working tax-free purchases when admin price includes tax.

### Version 1.4.4

> Nov 28, 2023

 -  Added ability to validate UK and IM vat numbers.

### Version 1.4.3

> Mar 14, 2023

 -  PHP 8.2 compatibility.

### Version 1.4.1

> Jan 13, 2021

  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

### Version 1.4.0

> Dec 17, 2020

This release fixes validation at multishipping checkout. However, because of bug in
Magento, you can't create an account during multishipping checkout. If you use it and
allow customers to register during multishipping checkout you must apply the following patches:

 - [31321](https://github.com/magento/magento2/pull/31321) - will add "VAT Number"
field to the customer registration page.
 - [31318](https://github.com/magento/magento2/pull/31318) - will fix error during
registration if entered Vat Number is invalid.

**Changes**

 -  **Magento 2.2.x and older are not supported anymore** because of updated
    taxvat validation logic. We started using built-in
    `Magento\Customer\Model\Address\CompositeValidator` to validate taxvat.
 -  Fixed ability to place order with empty "Tax Number" field despite of
    [config value](/m2/extensions/taxvat/configuration/#general-section)
    when using multishipping checkout.

### Version 1.3.2

> Oct 29, 2020

 -  Fixed vat number validation when using multishipping checkout.
 -  Added notice about unsupported tax-free purchases when using multishipping checkout.
 -  Performance improvements - use cache for VAT VIES validation result.

### Version 1.3.0

> Jan 8, 2020

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

### Version 1.2.2

> May 23, 2019

 -  Code cleanup

### Version 1.2.0 &amp; 1.2.1

> Apr 05, 2019

 -  Added abilty to place tax-free order when VAT Number is valid (EU countries only)
 -  Added ability to place order using invalid VAT Number
 -  Hide notice about country code for magento 2.3.0 and newer
 -  Configuration improvements
 -  Code optimizations
 -  1.2.1 hotfix: tax-free orders on Magento 2.2

### Version 1.1.1

> Nov 01, 2018

 -  Removed ability to enter vat number without country code because of
    conflict with Magento's automatic customer group assignment feature

### Version 1.0.5

 -  Fixed missing tooltip in Billing Address form when it's
    rendered below payment methods

### Version 1.0.4

 -  Removed not needed notice from billing address form

### Version 1.0.3

 -  Allow to enter taxvat number with country code

### Version 1.0.2

 -  Magento EQP fixes

### Version 1.0.1

 -  Updated module dependencies

### Version 1.0.0

 -  Initial Release
