---
layout: default
title: Highlight Widget Settings
description: >
    Highlight widget settings
keywords: >
    settings, attribute_code, link title, calculation period, highlight sort order
category: Highlight
---

# Widget Settings

Each of Highlight widget offers a lot of configurable parameters. When
inserting widget using [WYSIWYG editor][usage_wysiwyg_editor] or
[CMS > Widgets][usage_widgets_page], you'll need to simply fill the value into
according field.

When you want to use XML Layout Update or PHP inline widget call, you'll need to
know how you may specify the options. See the corresponding pages:

- [XML Layout Update][usage_xml_update]
- [PHP Inline Code][usage_php]

## Contents

1. [Block rendering settings](#block-rendering-settings)
2. [Product collection options](#product-collection-options)

### Block rendering settings

Option          | Description
----------------|------------
title           | Block title
carousel        | Allows to enable ajax carousel
products_count  | Products count per Page
column_count    | Columns count
template        | Template to use
custom_template | Path to the custom template. Used if `template` is empty or not set
css_class       | Additional css classes. See [ready-to-use classes](/m2/extensions/highlight/widgets/css-helpers/)
**"See all products" link settings** |
show_page_link  | Flag that indicates to show "See all products" link or not
page_url        | Custom url to the "See all products" page.
page_link_title | "See all products" link title
**Pagination settings** |
page_count      | Pages count to show
page_var_name   | Product page variabe name in query. Useful, when you have multiple block of the same type on one page

### Product collection options

Option          | Description
----------------|------------
attribute_code  | Attribute to use to filter product collection. Available for (Date and Yesno widgets)
period          | Period that will be used to filter popular and bestseller products. [See examples](#calculation-period)
sort_order      | Sort order. [See avaialble options](#sort-order)
conditions_encoded | Magento built-in conditions. Use them to filter product by product attribute, category or price.

###### Calculation period

A string in [ISO_8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations)
used as value.

```
P       1D      T       30M
^period  ^days  ^time     ^minutes
```

Examples:

Value   | Description
--------|------------
P1D     | One day
P1DT5H  | One day and five hours
P2M     | Two monthes
PT1H    | One hour

---

###### Sort Order

Value       | Descritpion
------------|------------
default     | Use default block type sort order
position    | Sort by product position attribute
price       | Sort by price
name        | Sort by name
entity_id   | Sort by product ID
random      | Sort randomly. When cache is enabled, you'll see the cached results

##### Next up

You might want to see next:

- [Widget Usage](/m2/extensions/highlight/widgets/usage/)
    - [WYSIWYG Editor](/m2/extensions/highlight/widgets/usage/#wysiwyg-editor)
    - [Widgets Page](/m2/extensions/highlight/widgets/usage/#widgets-page)
    - [XML Layout Update](/m2/extensions/highlight/widgets/usage/#xml-layout-update)
    - [PHP Inline Code](/m2/extensions/highlight/widgets/usage/#php-inline-code)

[pages]: /m2/extensions/highlight/pages/
[usage_wysiwyg_editor]: /m2/extensions/highlight/widgets/usage/#wysiwyg-editor
[usage_widgets_page]: /m2/extensions/highlight/widgets/usage/#widgets-page
[usage_xml_update]: /m2/extensions/highlight/widgets/usage/#xml-layout-update
[usage_php]: /m2/extensions/highlight/widgets/usage/#php-inline-code
