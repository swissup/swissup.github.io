---
layout: default
title: Highlight Widget Settings
description: >
    Magento extension to show New, Featured, Popular, Bestseller and OnSale
    products
keywords: >
    magento featured products, magento product listing block, featured
    products block on magento homepage
category: Highlight
---

# Widget Settings

 Option Title       | Option Code       | Description
--------------------|-------------------|------------
**Common settings** |                   |
Title               | title             | Block Title
Number of Products to Display | products_count | Number of products to show in block
Number of Columns to Display  | column_count   | Used for grid listing mode. May be used in custom template too
Template            | template          | Template to use for widget block. Available options:<br/>- Custom `empty_string`<br/>- Grid `tm/highlight/product/grid.phtml`<br/>- List `tm/highlight/product/list.phtml`<br/>- Sidebar Grid `tm/highlight/product/sidebar/grid.phtml`<br/>- Sidebar List `tm/highlight/product/sidebar/list.phtml`
Custom Template     | custom_template   | Path to the custom template
Block Class Name    | class_name        | Unique css class name
SKU Filter          | sku_filter        | Comma separated product sku's
Category Filter     | category_filter   | Comma separated category ids. `current` keyword may be used to filter products by currently viewed category
Price Filter        | price_filter      | Comma separated min and max prices
Product Type Filter | product_type_filter | Comma separated products types to show. Available options:<br/>- simple<br/>- configurable<br/>- grouped<br/>- bundle<br/>- downloadable<br/>- virtual
**Widget specific settings** |          |
Attribute Code      | attribute_code    | This option is available for the following widgets:<br/>- highlight/product_attribute_yesno<br/>- highlight/product_attribute_date
Link title to highlight page | page_title | Link title, that will point user to the one of [highlight based pages](/extensions/highlight/pages/).<br/><br/>This option is available for the following widgets:<br/>- highlight/product_new<br/>- highlight/product_featured<br/>- highlight/product_special<br/>- highlight/product_popular<br/>- highlight/product_bestseller
Calculation period  | period            | Period that will be used to filter popular or bestseller products
Sort Order          | order             | Custom block sort order. Can't be used with `attribute_date` based widgets

##### Next up

You might want to see next: 

- [Widget Usage](/extensions/highlight/widgets/usage/)
