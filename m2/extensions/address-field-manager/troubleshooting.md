---
layout: default
title: Address Field Manager Troubleshooting
description: Address Field Manager Troubleshooting
keywords: address field manager troubleshooting
category: Address Field Manager
---

# Troubleshooting

 1. [Cannot change status for the name fields](#cannot-change-status-for-the-name-fields)
 2. [Cannot change status for the vat_id field](#cannot-change-status-for-the-vatid-field)

### Cannot change status for the name fields

Address Field Manager module saves address fields in global scope only. Thus,
if you've changed status for one of the following fields on website level,
Magento configuration values will be used instead of Adress Field Manager.

Fields list:

 -  Prefix
 -  Middlename
 -  Suffix

See the _"Stores > Configuration > Customers > Customer Configuration > Name and Address Options"_
settings for these fields.

### Cannot change status for the vat_id field

There is a small issue in Magento vat_id rendering logic.

In order to show this field, you must enable it in configuration. Navigate to
_"Stores > Configuration > Customers > Customer Configuration > Create New Account Options"_
settings. See the _"Show VAT Number on Storefront"_ option.

> Don't forget to check this setting on website configuration level.
