---
layout: default
title: Address Autocomplete use cases
description: Address Autocomplete use cases
category: Address Autocomplete
---

# Use Cases

### Restrict Results To Specific Country

If you want to show autocomplete results only for specific country, follow the next steps

  - open `skin/frontend/base/default/tm/addressautocomplete/js/address-autocomplete.js`
  - find the following code:

    ```js
    var autocomplete = new google.maps.places.Autocomplete(el, {
        types: rule.types
    });
    ```

  - replace it with new code:

    ```js
    var autocomplete = new google.maps.places.Autocomplete(el, {
        types: rule.types,
        componentRestrictions: {country: "us"}
    });
    ```

  - find your country code here: [Officially assigned code elements](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)

  - save the changes and refresh browser cache.

### Add integration with third-party checkout extensions

If you want to use address autocomplete with third-party checkout extension you can follow next steps:

  - open `app/design/frontend/base/default/layout/tm/addressautocomplete.xml`
  - you can find several pieces of code in this file looking like this:

    ```xml
    <firecheckout_index_index>
        <update handle="addressautocomplete"/>
    </firecheckout_index_index>
    ```

  - you need to add another one piece of code here, but replace `<firecheckout_index_index>` with handler of checkout you are using.
  - usually you can find this handler in checkout's xml in this folder: `app/design/frontend/base/default/layout`
  - save the changes and refresh cache.
