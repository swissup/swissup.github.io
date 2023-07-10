---
layout: default
title: Address Autocomplete configuration
description: Address Autocomplete configuration options
category: Address Autocomplete
---

# Configuration

Module configuration is available at
_Stores > Configuration > Swissup > Checkout > Address Autocomplete_.

## General Settings

![General settings](/images/m2/address-autocomplete/configuration/general.png){:width="801" height="442"}

Option | Description
-------|------------
Enable | Module status
Enable in backend | Ability to enable autocomplete in backend forms
Api Key | Google Maps Api Key. [Get API Key](../get-api-key/)
Initialize autocompletion on | Select a field to work as autocompletion element. Street Address and Postcode fields are available.
Use geolocation detection | When enabled, module will ask permission to access browser location API, and fill the form with detected address.

## Address Search Restrictions

![Address Search Restrictions](/images/m2/address-autocomplete/configuration/address-search-restrictions.png)

Option | Description
-------|------------
Restrict the search to currently selected country | Ablity to restict search to currently selected address
Restrict the search to a specific countries | Choose the list of countries to use to search for an address

## Address Formatting

![Address Formatting](/images/m2/address-autocomplete/configuration/address-formatting.png)

Option | Description
-------|------------
Street Number Placement | Ability to place street number at the start/end of **Street Line 1**, place it direclty to the **Street Line 2**, or place it into the custom address field created with Magento Commerce Edition or [AddressFieldManager](/m2/extensions/address-field-manager/) module.
Parse Unit Number | Try to parse unit number from the customer entered string.
Unit Number Placement | Ability to choose unit number position.
Unit Number Divider | Choose unit number divider. Available options: Comma ", ", and Slash " / ".

## Advanced Formatting

> **Caution!** When enable "Advanced Formatting",
> [regular Address Formatting options](/m2/extensions/address-autocomplete/configuration/#address-formatting)
> are overriden and not working.

![Advanced Formatting](/images/m2/address-autocomplete/configuration/advanced-formatting.png)

Option | Description
-------|------------
Use Advanced Formatting | Enable/Disable advanced address formatting
Advanced Formatting | Formatting rules. [View Examples](address-formatting/)

#### Next Up

- [Bach to home](../)
