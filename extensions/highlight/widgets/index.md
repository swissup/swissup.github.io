---
layout: default
title: Highlight Widgets
description: >
    Highlight widgets - convenient way to show promoted products on your store
keywords: >
    magento featured products, magento new products, magento popular products,
    magento bestsellers, magento onsale products
category: Highlight
---

# Highlight Widgets

Highlight extension provides a set of widgets which purpose is to list any kind
of products filtered with flexible tools. It allows you to easely show new,
featured, onsale, bestsellers, popular products. It's even can show products 
filtered by custom filters.

There are following widget types are available:

Type                                | Description
------------------------------------|------------
highlight/product_new               | New Products, ordered by `news_from_date` attribute
highlight/product_featured          | Products with enabled `featured` attribute
highlight/product_special           | Products with non-empty `special_price` attribute, ordered by `special_from_date`
highlight/product_popular           | Most viewed products. Calculation is based on `Magento Reports` data
highlight/product_bestseller        | Most sellable products. Calculation is based on `Magento Sales` data
highlight/product_random            | All visible products. Usefull to manually filter products
highlight/product_reports_viewed    | Recently viewed products of current visitor
highlight/review_new                | Recenlty reviewed products with review data
highlight/product_attribute_date    | Products filtered by any `date` attribute. Attribute value is compared with current date
highlight/product_attribute_yesno   | Products filtered by any `yes/no` attribute. Products with enabled attribute are returned

### Contents

1. [Widget Settings](settings/)
2. [Widget Usage](usage/)
    - [WYSIWYG Editor](usage/#wysiwyg-editor)
    - [Widgets Page](usage/#widgets-page)
    - [XML Layout Update](usage/#xml-layout-update)
    - [PHP Inline Code](usage/#php-inline-code)

##### Next up

Great! Now you might want to see next: 

- [Highlight Pages](/extensions/highlight/pages/)
