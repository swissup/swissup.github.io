---
layout: default
title: Advanced Address Formatting
description: How to use Advanced Fromatting option
category: Address Autocomplete
---

# Advanced Address Formatting

Advanced Address Formatting option is available at
_Stores > Configuration > Swissup Checkout > Address Autocomplete > Advanced Formatting_.

> **Caution!** When enable "Advanced Formatting",
> [regular Address Formatting options](/m2/extensions/address-autocomplete/configuration/#address-formatting)
> are overriden and not working.

![Advanced Formatting](/images/m2/address-autocomplete/configuration/advanced-formatting.png)

## Contents

<!-- MarkdownTOC -->

- [Field Format](#field-format)
- [Field Names and Default Placeholders](#field-names-and-default-placeholders)
- [Available Tokens](#available-tokens)
- [Examples](#examples)
    - [Default Value](#default-value)
    - [Australian Unit Number Placement](#australian-unit-number-placement)
    - [Brazilian Neighbourhood Placement](#brazilian-neighbourhood-placement)

<!-- /MarkdownTOC -->


## Field Format

The following JSON format is used:

```json
{
    "*": {
        "FIELD_NAME1": "PLACEHOLDER1",
        "FIELD_NAME2": "PLACEHOLDER2"
    },
    "COUNTRY_CODE1": {
        "FIELD_NAME1": "PLACEHOLDER3"
    },
    "COUNTRY_CODE2": {
        "FIELD_NAME1": "PLACEHOLDER4"
    }
}
```
{:.nocopy}

Field           | Description
----------------|------------
*               | Fallback settings that will be used if currently selected country is not found in the list
COUNTRY_CODE    | Officially assigned [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements). Example: US, ES, AU.
FIELD_NAME      | One of the supported [field names](#field-names-and-default-placeholders)
PLACEHOLDER     | Combination of supported [tokens](#available-tokens)

> Please note that '\*' settings is not completely overriden with "COUNTRY_CODE"
> related options, but they are merged into single object.
>
> For example, when "COUNTRY_CODE1" is selected, "FIELD_NAME1" will use
> "PLACEHOLDER3" and "FIELD_NAME2" will use "PLACEHOLDER2".

## Field Names and Default Placeholders

Field Name      | Default Placeholder
----------------|:-------------------
`street1`       | `"{% raw %}{{street_number.short_name}}{{ }}{{route.long_name}}{{, }}{{subpremise.short_name}}{% endraw %}"`
`street2`       | `"{% raw %}{% endraw %}"`
`street3`       | `"{% raw %}{% endraw %}"`
`street4`       | `"{% raw %}{% endraw %}"`
`country_id`    | `"{% raw %}{{country.short_name}}{% endraw %}"`
`city`          | `"{% raw %}{{postal_town.long_name|locality.long_name|administrative_area_level_2.long_name|sublocality_level_1.long_name}}{% endraw %}"`
`postcode`      | `"{% raw %}{{postal_code.short_name}}{{-}}{{postal_code_suffix.short_name}}{% endraw %}"`
`region`        | `"{% raw %}{{administrative_area_level_1.long_name}}{% endraw %}"`
`region_code`   | `"{% raw %}{{administrative_area_level_1.short_name}}{% endraw %}"`

## Available Tokens

Token                                               | Description
----------------------------------------------------|------------
**Separators**                                      | **Used when two not empty tokens found around the separator.**
`{% raw %}{{ }}{% endraw %}`                        | Space
`{% raw %}{{, }}{% endraw %}`                       | Comma
`{% raw %}{{ / }}{% endraw %}`                      | Slash
`{% raw %}{{-}}{% endraw %}`                        | Dash
**Custom Address Entities**                         | **Entities returned by AddressAutocomplete module**
`{% raw %}{{subpremise.short_name}}{% endraw %}`    | Unit Number
**Address Entities**                                | **Entities returnes by Google Places API**
`{% raw %}{{route.long_name}}{% endraw %}`          | Street Name
`{% raw %}{{street_number.short_name}}{% endraw %}` | Street Number
`{% raw %}{{country.short_name}}{% endraw %}`       | Country Code
`{% raw %}{{postal_town.long_name|locality.long_name|administrative_area_level_2.long_name|sublocality_level_1.long_name}}{% endraw %}` | City Name. Since Google API returns the city with different name for different countries we use possible tokens combined with a '\|'. This means that the first non-empty value will be used.
`{% raw %}{{postal_code.short_name}}{% endraw %}`   | Postcode
`{% raw %}{{postal_code_suffix.short_name}}{% endraw %}` | Postcode Suffix
`{% raw %}{{administrative_area_level_1.long_name}}{% endraw %}` | Region Name
`{% raw %}{{administrative_area_level_1.short_name}}{% endraw %}` | Region Code

## Examples

### Default Value

Default value includes Unit Number Placement for Australian addresses, and
Neighbourhood Placement for Brazilian addresses:

```json
{% raw %}{
    "*": {
        "country_id": "{{country.short_name}}",
        "street1": "{{street_number.short_name}}{{ }}{{route.long_name}}{{, }}{{subpremise.short_name}}",
        "street2": "",
        "street3": "",
        "street4": "",
        "city": "{{postal_town.long_name|locality.long_name|administrative_area_level_2.long_name|sublocality_level_1.long_name}}",
        "postcode": "{{postal_code.short_name}}{{-}}{{postal_code_suffix.short_name}}",
        "region": "{{administrative_area_level_1.long_name}}",
        "region_code": "{{administrative_area_level_1.short_name}}"
    },
    "AU": {
        "street1": "{{subpremise.short_name}}{{/}}{{street_number.short_name}}{{ }}{{route.long_name}}"
    },
    "BR": {
        "street4": "{{sublocality_level_1.long_name}}"
    }
}{% endraw %}
```

### Australian Unit Number Placement

```json
{
    "AU": {
        "street1": "{% raw %}{{subpremise.short_name}}{{/}}{{street_number.short_name}}{{ }}{{route.long_name}}{% endraw %}"
    }
}
```

### Brazilian Neighbourhood Placement

```json
{
    "BR": {
        "street4": "{% raw %}{{sublocality_level_1.long_name}}{% endraw %}"
    }
}
```
