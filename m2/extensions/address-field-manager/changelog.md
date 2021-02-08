---
layout: default
title: Address Field Manager Changelog
description: Address Field Manager changelog
keywords: address field manager changelog
category: Address Field Manager
---

# Changelog

### Version 1.6.0

> Feb 8, 2021

 -  Using after plugins instead of around
 -  Added custom address fields to orders API
 -  Fixed multiselect attribute values saving

### Version 1.5.10

> Jan 15, 2021

 -  Validation rewritten for better third-party modules compatibility
 -  Fixed wrong attributes values in Magento 2.4 (attribute code was added to value)

### Version 1.5.8

> Nov 10, 2020

 -  Fixed error when saving a field with the required option disabled

### Version 1.5.6

> Oct 28, 2020

 -  Force use on all forms when field is required

### Version 1.5.5

> Oct 23, 2020

 -  Fixed missing field default values

### Version 1.5.4

> Oct 21, 2020

 -  Show address form fields at multishipping checkout page.
 -  Show address form fields at customer registration page when `setShowAddressFields`
    is used.

### Version 1.5.1

> Jan 31, 2020

 -  Fixed error at checkout page when using fields with options
    (select, multiselect) in Magento 2.3.4.

### Version 1.5.0

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

### Version 1.4.3

> Dec 19, 2018

 -  Fixed dropdown field options save issue in Magento 2.2.7

### Version 1.4.2

> Dec 04, 2018

 -  Fixed field validation on the latest Magento versions

### Version 1.4.1

> Nov 08, 2018

 -  Fixed ability to save attribute with custom attribute_code

### Version 1.3.2

 -  Fixed display of custom dropdown attribute value in saved address
 -  Fixed validation when saving existing attribute in backend panel

### Version 1.3.1

 -  Translation file updated
 -  Fixed missing custom address fields in Billing Address form when it's
    rendered below payment methods
 -  Fixed Invalid fields sort order in Billing Address form when it's
    rendered below payment methods

### Version 1.3.0

 -  Fixed not working state/region sort order
 -  Fixed infinite address review redraw in Magento 2.1
 -  Fixed custom fields styles on address edit page on frontend

### Version 1.2.0

 -  Added ability to create custom address fields
 -  Added ability to set default values for address fields

### Version 1.1.1

 -  Fixed incorrect sort order in backend grid
 -  Magento 2.1 compatibility

### Version 1.1.0

See updated [usage section](/m2/extensions/address-field-manager/usage/)

 -  Added ability to set and remove field status per website
 -  Added synchronization with Magento's config options
 -  Added drag-n-drop feature to sort the fields
 -  Fixed country sort order. Previously it was taken from theme config only.

### Version 1.0.2

 -  Improved module stability
 -  Improved address renderer when some fields are optional

### Version 1.0.1

> Magento requirements: 2.0.12 or 2.1.4 and higher

 -  Fixed conflict with "Checkout > Display Billing Address On" option

### Version 1.0.0

 -  Initial Release
