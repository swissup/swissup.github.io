---
layout: default
title: Order Attachments
description: Order Attachments Changelog
category: Order Attachments
---

# Changelog

### Version 1.4.21

> Mar 24, 2023
 
 -  [Breeze](https://breezefront.com/) integration added.
 -  Security fix: do not allow to add attachment using order_id parameter.
 -  Do not allow to upload/edit/remove attachments from order view page if 
    the corresponsing option is disabled.
 -  Newly uploaded files will be added to the top, so user see them without 
    scrolling down the list.
 -  A lot of code cleanup was made.

### Version 1.4.19

> Dec 30, 2022

 - Resrtict Edit notes and Remove attachments on the customer account page.

### Version 1.4.18

> Nov 28, 2022

 - Highlight order attachments tab in Order grid if it's not empty.

### Version 1.4.17

> Aug 9, 2022

 - Update integration with Checkout Success module.

### Version 1.4.16

> Apr 15, 2022

 -  Magento 2.4.4 compatibility.

### Version 1.4.13

> Aug 31, 2021

 -  Removed useless ajax request after upload process.

### Version 1.4.11

> Feb 11, 2021

 -  Fixed missing attachments block for guest customers when
    [customer group restriction config](/m2/extensions/order-attachments/#configuration)
    was saved with empty value.

### Version 1.4.10

> Jan 13, 2021

  - [Restict order attachment](/m2/extensions/order-attachments/#configuration) for specific customer groups.
  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

### Version 1.4.9

> Dec 28, 2020

 - Restict order attachemnt for specific customer groups.
 - Remove not needed index.
 - Fixed php error on frontend.

### Version 1.4.5

> Oct 30, 2020

 -  Fixed not working search field in backend order attachments grid.

### Version 1.3.11

> Oct 19, 2020

 -  Fixed missing "Attachments" tab at admin order view page.

### Version 1.4.3

> Aug 5, 2020

 - Magento 2.3.5 and 2.4.0 compatibilty (Email was missing attachments block).
 - Added order number to the backend grid.

### Version 1.4.0

> Jan 8, 2020

 -  Fixed serialize error in full page cache module when downloading attachment
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

### Version 1.3.4

> Oct 16, 2019

 -  Remove direct 'jquery/ui' dependency to improve js performance.

### Version 1.3.3

> Jun 4, 2019

 -  Fixed broken order view page when Amasty_RewardPoints is installed

### Version 1.3.2

> May 24, 2019

 -  Fixed invalid data in the grid after filters reset.

### Version 1.3.0

> Mar 21, 2019

 -  RTL languages support added

### Version 1.3.0

 -  Added ability to show attachments at the
    [CheckoutSuccess](/m2/extensions/checkout-success/) page

### Version 1.1.1

 -  Fixed not working upload functionality on slow internet connections

### Version 1.1.0

 -  Magento EQP errors fixed
 -  Duplicated code removed
 -  Small composer.json fixes

### Version 1.0.7

 -  Magento 2.2 compatibility

### Version 1.0.6

 -  Fixed backend download and preview action urls

### Version 1.0.5

 -  Fixed possible js error inside uploaded files loop

### Version 1.0.4

 -  Acl fixes

### Version 1.0.3

 -  Magento 2.0.x compatibility added
