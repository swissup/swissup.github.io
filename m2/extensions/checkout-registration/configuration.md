---
layout: default
title: Checkout Registration Configuration
description: Customer registration settings
category: Checkout Registration
---

# Configuration

Module configuration is available at _Stores > Configuration > Swissup Checkout > Customer Registration_.

## General Settings

![General Settings](/images/m2/checkout-registration/configuration/general.png){:width="777" height="337"}

Option              | Description
--------------------|------------
Registration Mode   | Select one of available registration modes. See the table below.
Activate registration checkbox by default | Set the default state of the registration checkbox. Visible for "Registration is Allowed" mode only.
Registration Mode if Cart Contains Downloadable Items | Usefull to set "Registration is Required" or "Automatic Registration" when regular "Registration Mode" allows guest checkout.
Enabled for orders created via API | Ability to disable module for all orders created via API.

**Available Registration Modes**

Name                    | Description
------------------------|------------
Use Magento Settings    | When this option is selected module does nothing.
Guest Checkout Only     | Remove ability to login during checkout. If you wish to remove registration block from success page, use our [CheckoutSuccess](/m2/extensions/checkout-success/) module.
Registration is Allowed | A registration checkbox "Create and Account" will be shown, and buyer will have an option to register or not.
Registration is Required | A required passwords fields will be shown below email without ability to leave them empty.
Register All Users Automatically | Hide registration fields. Registration is done automatically in a background.

> Please note that if your Magento configuration requires some additional fields
> to register a customer, our module will create a Customer **without these fields**.
> Magento will ask Customer to enter them on the next login/checkout event.
