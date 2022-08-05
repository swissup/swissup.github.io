---
layout: default
title: Checkout Registration Changelog
description: Checkout Registration changelog
category: Checkout Registration
---

# Changelog

### Version 1.1.9

> Aug 5, 2022

 -  Fixed possible undefined 'async' error.

### Version 1.1.8

> Jul 12, 2022

 -  Fixed compatibility with VRPay payment method.

### Version 1.1.7

> Feb 8, 2022

 -  Fixed possible "Invalid state change" error at initial page load

### Version 1.1.5

> Feb 1, 2022

 -  [Breeze Theme](https://breezefront.com) integration added

### Version 1.1.4

> Jun 11, 2020

 -  Magento_InventoryInStorePickup integration added

### Version 1.1.3

> Jun 2, 2020

 -  Added compatibility with new [Firecheckout feature](/m2/extensions/firecheckout/):
    email on separate step

### Version 1.1.0

> Sep 2, 2020

 -  Assign address to the created account when registering new customer.
    Previously, customer was created without saved addresses.
 -  Use proper password requirements according to
    _Stores > Configuration > Customer > Password Options_ settings.

### Version 1.0.0

> May 22, 2020

Initial Release with the following registration modes support:

 -  Default mode (No changes to Magento logic)
 -  Guest checkout only
 -  Optional registration at checkout page
 -  Required registration at checkout page
 -  Automatic registration in background
