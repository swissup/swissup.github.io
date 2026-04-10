---
layout: default
title: Predefined Variales
description: >
    Magento 2 product labels wildcard (predefined variables)
keywords: >
    product labels widlcard predefined variables
category: Prolabels
---

# Predefined Variales

One of the awesome features in ProLabels module is predefined variables in label text. You can create product badge with info that fetched from product itself.

For example, you can get product name, sku, final price stock qty or discrount precent.

List of all predefined valiables you san find below:

Variable                  | Description
--------------------------|----
**#attr:attribute_code#** | Returns value of product attribute with code `attribute_code`. <br /> For example, #attr:sku# returns product SKU, #attr:name# - product name, etc.
**#discount_amount#**     | Product discount amount.
**#discount_percent#**    | Product discount precent.
**#final_price#**         | Product final price.
**#price#**               | Original product price - price without any discounts.
**#special_price#**       | Special price of product.
**#stock_item#**          | Product quantity left in stock.

Predefined variable can return numeric value. When this happens module try to round value before output. Module use `Round Method` and `Round Value`.

Perhaps you noticed that every label among other settings has "Round Method" and "Round Value". Check ["On Sale" Label](../configuration/#on-sale-label) for screenshots.

**Round Method** has tree options:

 -  Math - traditional mathematic round method.
 -  Ceil -  round method that return nearest integer greater than original value.
 -  Floor - round method that return nearest integer less than original value.

**Round Value** uses when you need to get certain number of decimal digits. By default module rounds to integer number and Round Value is 1.

If you want to get two decimal digits then Round Value is 0.01. Three decimal digits - 0.001.

#### You can also check:

 *  [Installation](../installation/)
 *  [Configuration](../configuration/)
 *  [Admin interfaces](../interfaces/)
