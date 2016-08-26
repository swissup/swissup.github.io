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

1. [Block rendering options](#block-rendering-options)
2. [Product collection options](#product-collection-options)

### Block rendering settings

Option          | Description
----------------|------------
title           | Block title shown on frontend
products_count  | Products count
column_count    | Columns count
template        | Path to the block template. [See available templates](#available-templates)
custom_template | Path to the custom template. Used if `template` is empty or not set
class_name      | Additional css classes
**"See all products" link settings** |
show_page_link  | Flag that indicates to show "See all products" link or not
page_url        | Custom url to the "See all products" page.
page_title      | "See all products" link title

###### Available templates

Path | Description
-----|------------
tm/highlight/product/grid.phtml | Grid listing
tm/highlight/product/list.phtml | List listing
tm/highlight/product/sidebar/grid.phtml | Sidebar grid listing
tm/highlight/product/sidebar/list.phtml | Sidebar list listing

### Product collection options

Option          | Description
----------------|------------
attribute_code  | Attribute to use to filter product collection. Available for (Date and Yesno widgets)
period          | Period (days) that will be used to filter popular and bestseller products
order           | Sort order. [See available options](#sort-order)
sku_filter      | Comma separated product sku's
category_filter | Comma separated category ids. `current` keyword may be used to filter products by currently viewed category
price_filter    | Comma separated min and max prices
product_type_filter | Comma separated products types to show. [See available types](#available-product-types)
stock_filter    | "in_stock" or "out_of_stock" filter
qty_filter      | Product quantity filter. Works with simple products only

###### Sort Order

Value       | Descritpion
------------|------------
RAND()      | Random sorting
sku         | Sort by sku
minimal_price | Sort by price
position    | Sort product position

###### Available product types

- simple
- configurable
- grouped
- bundle
- downloadable
- virtual

##### Next up

You might want to see next:

- [Widget Usage](/m1/extensions/highlight/widgets/usage/)
    - [WYSIWYG Editor](/m1/extensions/highlight/widgets/usage/#wysiwyg-editor)
    - [Widgets Page](/m1/extensions/highlight/widgets/usage/#widgets-page)
    - [XML Layout Update](/m1/extensions/highlight/widgets/usage/#xml-layout-update)
    - [PHP Inline Code](/m1/extensions/highlight/widgets/usage/#php-inline-code)

[pages]: /m1/extensions/highlight/pages/
[usage_wysiwyg_editor]: /m1/extensions/highlight/widgets/usage/#wysiwyg-editor
[usage_widgets_page]: /m1/extensions/highlight/widgets/usage/#widgets-page
[usage_xml_update]: /m1/extensions/highlight/widgets/usage/#xml-layout-update
[usage_php]: /m1/extensions/highlight/widgets/usage/#php-inline-code
