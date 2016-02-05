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

###### Title | `title`

Block Title

---

###### Link title to highlight page | `page_title`

Link title, that will point user to the one of [highlight based pages][pages].

This option is available for the following widgets:

```
- highlight/product_new
- highlight/product_featured
- highlight/product_special
- highlight/product_popular
- highlight/product_bestseller
```

---

###### Number of Products to Display | `products_count`

Number of products to show in block.

---

###### Number of Columns to Display | `column_count`

Number of columns in product listing. Used for grid listing mode. May be used 
in custom template too.

---

###### Template | `template`

Template to use for widget block. Available options:

```
- Custom        ``
- Grid          `tm/highlight/product/grid.phtml`
- List          `tm/highlight/product/list.phtml`
- Sidebar Grid  `tm/highlight/product/sidebar/grid.phtml`
- Sidebar List  `tm/highlight/product/sidebar/list.phtml`
```

---

###### Custom Template | `custom_template`

Path to the custom template. To use this option set the template option to empty 
string.

---

###### Block Class Name | `class_name`

Unique css class name. It must be unique per page.

### Product collection options

###### Attribute Code | `attribute_code`

Use this option to indicate attribute code, that should be used for product 
collection filters.

This option is available for the following widgets:

```
- highlight/product_attribute_yesno
- highlight/product_attribute_date
```

---

###### SKU Filter | `sku_filter`

Comma separated product sku's

---

###### Category Filter | `category_filter`

Comma separated category ids. 

> `current` keyword may be used to filter products by currently viewed category

---

###### Price Filter  | `price_filter`

Comma separated min and max prices

---

###### Product Type Filter | `product_type_filter`

Comma separated products types to show. Available options:

```
- simple
- configurable
- grouped
- bundle
- downloadable
- virtual
```

---

###### Calculation period | `period`

Period that will be used to filter popular and bestseller products.

---

###### Sort Order | `order`

Collection sort order. Can't be used with `attribute_date` based widgets.

##### Next up

You might want to see next: 

- [Widget Usage](/m1/highlight/widgets/usage/)
    - [WYSIWYG Editor](/m1/highlight/widgets/usage/#wysiwyg-editor)
    - [Widgets Page](/m1/highlight/widgets/usage/#widgets-page)
    - [XML Layout Update](/m1/highlight/widgets/usage/#xml-layout-update)
    - [PHP Inline Code](/m1/highlight/widgets/usage/#php-inline-code)

[pages]: /m1/highlight/pages/
[usage_wysiwyg_editor]: /m1/highlight/widgets/usage/#wysiwyg-editor
[usage_widgets_page]: /m1/highlight/widgets/usage/#widgets-page
[usage_xml_update]: /m1/highlight/widgets/usage/#xml-layout-update
[usage_php]: /m1/highlight/widgets/usage/#php-inline-code
