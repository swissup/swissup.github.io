---
layout: default
title: Address Autocomplete changelog
description: Address Autocomplete changelog
category: Address Autocomplete
---

# Changelog

### Version 1.6.5

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.

### Version 1.6.4

> Aug 31, 2021

 -  Improve compatibility with third-party address form fillers.

### Version 1.6.3

> Jul 19, 2021

 -  Fixed mistakenly marked fields as incorrect in initially hidden new-address form
    when address geodetection is enabled.

### Version 1.6.2

> Jul 15, 2021

 -  Fixed not working autocomplete when customer blocks location info in browser

### Version 1.6.1

> Jun 22, 2021

 -  Improve autocompletion when city field is used as main field.
 -  Do not fill country/region dropdowns with non-existing autodetected values.
    (This may happen when allowed countries option is used.)

### Version 1.6.0

> Jun 14, 2021

 -  Added ability initialize autocompletion on a
    [city field](/m2/extensions/address-autocomplete/configuration/#general-settings).
 -  Fixed region autocompletion for spanish addresses.

### Version 1.5.0

> May 26, 2021

 -  Added ability initialize autocompletion on a
    [postcode or street address fields](/m2/extensions/address-autocomplete/configuration/#general-settings).
    (When using postcode autocompletion will search for address by postcode.)
 -  Added [geolocation detection feature](/m2/extensions/address-autocomplete/configuration/#general-settings).
    (When enabled, module will ask permission to access browser location API, and fill the form with detected address.)

### Version 1.4.2

> Jan 13, 2021

  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

### Version 1.4.1

> Jul 1, 2020

 -  Added fix for Italian addresses to use proper province code.
    Requires to [enable advanced formatting](/m2/extensions/address-autocomplete/configuration/#advanced-formatting)
    to apply the fix.

### Version 1.4.0

> Jun 16, 2020

 -  Enabled module at customer account page.
 -  Added ability to restrict address search to the
    [currently selected country](../configuration/#address-search-restrictions).
 -  Added ability to extend or completely redefine
    [Address Mapping Settings](../configuration/#advanced-formatting).
 -  [Unit number](../configuration/#address-formatting) support added.
 -  Postcode suffix support added.
 -  Scripts no longer added to the frontend if module is disabled.

### Version 1.3.3

> May 22, 2020

 -  Fixed City detection for Brazilian addresses

### Version 1.3.2

> May 4, 2020

 -  Magento 2.3.5 CSP compatibility

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

> Oct 16, 2019

 -  Fixed 'undefined' word in input field after pressing 'tab' key. (Happens
    when API key is invalid).

### Version 1.2.1

> May 23, 2019

 -  Improved Czech Republic addresses autocompletion

### Version 1.2.0

> Jan 15, 2019

 -  Added ability to fill housenumber into [custom address field](/m2/extensions/address-autocomplete/configuration/).
    Both Magento Commerce Edition and our [AddressFieldManager](/m2/extensions/address-field-manager/)
    are suported.

### Version 1.1.1

> Nov 01, 2018

 -  Fixed non working autocomplete when form doesn't have ID attribute
    (Some rare third-party modules)

### Version 1.0.8

 -  Translation file added

### Version 1.0.7

 -  Fixed API authFailure processing on slow networks
 -  Code refactoring

### Version 1.0.6

 -  Add country config option (Restrict the search to a specific countries)
 -  Js code style was improved (jscs, eslint)

### Version 1.0.5

 -  Fixed region field autocompletion

### Version 1.0.4

 -  Improved logic for UK addresses. Fixed missing town field.

### Version 1.0.3

 -  Using `street.long_name` instead of `street.short_name`
 -  Added js gm_authFailure callback to fix disabled street address line,
    when API key is invalid

### Version 1.0.2

 -  Acl fixes
 -  Updated module dependencies

### Version 1.0.1

 -  Added configuration option to enable/disable module

### Version 1.0.0

 -  Initial release
