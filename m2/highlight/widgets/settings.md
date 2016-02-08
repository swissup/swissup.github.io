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

###### Show Page Link | `show_page_link`

Flag to indicate that link to highliht page should be shown

---

###### Page Url | `page_url`



---

###### Link title to highlight page | `page_link_title`

Link title, that will point user to the one of [highlight based pages][pages].

This option is available for the following widgets:

```
- Swissup\Highlight\Block\ProductList\Featured
- Swissup\Highlight\Block\ProductList\NewList
- Swissup\Highlight\Block\ProductList\Onsale
- Swissup\Highlight\Block\ProductList\Popular
- Swissup\Highlight\Block\ProductList\Bestsellers
```

---

###### Number of Products to Display | `products_count`

Number of products to show in block.

---

###### Display Page Control | `show_pager`

Flag that indicates, that pagination should be used

---

###### Number of Product per Page | `products_per_page`

Number of products per page.

---

###### Page var name | `page_var_name`



---

###### Template | `template`

Template to use for widget block. Available options:

```
- Custom                    
- Grid                      Swissup_Highlight::product/widget/content/grid.phtml
- List                      Swissup_Highlight::product/widget/content/list.phtml
- Sidebar Images and Names  Swissup_Highlight::product/widget/column/list.phtml
- Sidebar Images            Swissup_Highlight::product/widget/column/list_images.phtml
- Sidebar Names             Swissup_Highlight::product/widget/column/list_names.phtml
```

---

###### Custom Template | `custom_template`

Path to the custom template. To use this option set the template option to empty 
string.

---

###### Block Css Class | `css_class`

Additional css classes.

### Product collection options

###### Attribute Code | `attribute_code`

Use this option to indicate attribute code, that should be used for product 
collection filters.

This option is available for the following widgets:

```
- Swissup\Highlight\Block\ProductList\Attribute\Date
- Swissup\Highlight\Block\ProductList\Attribute\Yesno
```

---

###### Conditions | `conditions_encoded`

Magento built-in conditions support. Use them to filter product by product 
attribute, category or price.

---

###### Calculation period | `period`

Period that will be used to filter popular and bestseller products.

---

###### Sort Order | `order`

Collection sort order.

Available options:

```
- default       - Use default block type sort order
- position      - Sort by product position attribute
- price         - Sort by price
- name          - Sort by name
- entity_id     - Sort by product ID
- random        - Sort by rand
```

---

###### Sort Direction | `dir`

Available options:

```
- asc
- desc
```

##### Next up

You might want to see next: 

- [Widget Usage](/m2/highlight/widgets/usage/)
    - [WYSIWYG Editor](/m2/highlight/widgets/usage/#wysiwyg-editor)
    - [Widgets Page](/m2/highlight/widgets/usage/#widgets-page)
    - [XML Layout Update](/m2/highlight/widgets/usage/#xml-layout-update)
    - [PHP Inline Code](/m2/highlight/widgets/usage/#php-inline-code)

[pages]: /m2/highlight/pages/
[usage_wysiwyg_editor]: /m2/highlight/widgets/usage/#wysiwyg-editor
[usage_widgets_page]: /m2/highlight/widgets/usage/#widgets-page
[usage_xml_update]: /m2/highlight/widgets/usage/#xml-layout-update
[usage_php]: /m2/highlight/widgets/usage/#php-inline-code
