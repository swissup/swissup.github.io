---
layout: default
title: Changelog
description: Magento 2 Checkout Fields changelog
keywords: magento 2 checkout fields changelog
category: Checkout Fields
---

# Changelog

### Version 1.6.1

> Feb 7, 2022

 -  Fixed sql error during `setup:upgrade` command.

### Version 1.6.0

> Feb 4, 2022

 -  Added ability to filter orders grid by checkout field values.
 -  Significant performance improvements in backend orders grid when orders table
    is big (Depends on server capabilities, \~50K-200K orders).
 -  Magento Coding Standard fixes.

### Version 1.5.9

> Jan 12, 2022

 -  Romanian language added

### Version 1.5.7

> Jul 8, 2021

 -  Fixed error with a date field displayed in the orders grid columns

### Version 1.5.6

> Jun 25, 2021

 -  Fixed error: column value used in key specification without a key length

### Version 1.5.5

> Jun 25, 2021

 -  Increase size for the value column. This allows to save long text messages
    fro the customers.

### Version 1.5.2

> Feb 25, 2021

 -  Added ability to select display type for the checkout fields with type
 dropdown, multiselect and yes/no

### Version 1.5.1

> Jan 13, 2021

 -  Added ability to specify a notice, tooltip, and placeholder for the field
 -  Filled fields values are now saved between page reloads
 -  Saved fields values are not deleted during cleaning of old quotes
 -  Empty fields values are not saved in database now

### Version 1.4.6

> Nov 12, 2020

 -  Fixed posibility of failed validation when using Paypal Express Checkout
 -  Remove unsupported input types when creating a new field

### Version 1.4.4

> Sep 28, 2020

 -  Fixed broken admin email preview page

### Version 1.4.3

> Aug 5, 2020

 -  Fixed confirmation message when deleting item in backend grid
 -  Magento 2.3.5 and 2.4.0 compatibilty (Email was missing checkout-fields block).

### Version 1.4.0

> Jan 8, 2020

 -  Fixed error on order view page caused by wrong date format
 -  Fixed missing checkout field values when making request through the Magento API
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

### Version 1.3.1

> Oct 16, 2019

 -  Fixed missing fields in orders grid when DB table prefix is used.

### Version 1.3.0

> Aug 20, 2019

{% include gallery.html images=site.data.gallery.m2.checkout-fields.changelog.v130 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  edit checkout fields directly from order view page
 -  added checkout fields data to orders API, check details in [manual](/m2/extensions/checkout-fields/usage/#get-fields-values-in-orders-api)
 -  added calendar icon to fields with date type
 -  select month and year from dropdown when using date fields
 -  select fields to display in email, check [manual](/m2/extensions/checkout-fields/usage/#display-fields-in-order-email) for details
 -  fixed js error on admin field edit form in Magento 2.3.2
 -  fixed required fields validation error on checkout page load
 -  fixed missing fields values when using Paypal payment method

### Version 1.2.3

> Mar 21, 2019

 -  Added ability to transform block into 'collapsible' at firecheckout page

### Version 1.2.2

> Dec 19, 2018

 -  Checkout fields groped into single block for easier styling

### Version 1.2.1

> Dec 05, 2018

 -  Fixed error in orders grid on Magento 2.1.x
 -  Checkout field values now copied when editing order in admin

### Version 1.2.0

> Dec 04, 2018

 -  Fixed dropdown field options save issue in Magento 2.2.6
 -  Added ability to show checkout fields at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page
 -  Added ability to show fields in backend order grid
 -  Checkout fields added to backend's new order form

### Version 1.0.5

 -  Translation file added
 -  JS code refactoring

### Version 1.0.4

 -  Fixed vertical alignment of button and input fields
 -  Fixed visible scrollbar on tablet devices

### Version 1.0.3

 -  Dropdown field is now redered as combobox instead of radio buttons
 -  Fixed bug with field attached to multiple stores

### Version 1.0.2

 -  Magento 2.2 compatibility

### Version 1.0.1

 -  Removed too big space above checkout-fields section

### Version 1.0.0

 -  Initial Release
