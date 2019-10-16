---
layout: default
title: Address Autocomplete changelog
description: Address Autocomplete changelog
category: Address Autocomplete
---

# Changelog

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
