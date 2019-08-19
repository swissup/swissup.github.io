---
layout: default
title: Easy Tabs
description: magento 2 product tabs module installation
keywords: >
    magento 2 product tabs, magento 2 product tabs extension free,
    magento2 product page tabs
category: Easy Tabs
---

# Easy Tabs

Easy Tabs extension allows you to add any number of dynamic tabs based on content of cms blocks, products attributes or html content. Based on magento 2 jQuery tabs widget.

### Contents

 -  [Installation](installation/)
 -  [Changelog](changelog/)
 -  [Features](#features)
 -  [Easytabs Grid](#easytabs-grid)
    - [Easytabs Edit Form](#easytabs-edit-form)
 -  [Use Cases](use-cases/)
     +  [Product reviews move from tabs](use-cases/#product-reviews-move-from-tabs)

## Features

 -  NEW! Supports [Swissup AMP module](../amp/). Now you can have accordion tabs at AMP.
 -  Show unlimited number of tabs on product page.
 -  Insert tabs via widget at any page with any content you want.
 -  9 tab types available.
 -  Responsive design, works fine on mobile devices.
 -  Unset blocks shown in tab to avoid content duplicating.
 -  Use custom templates for tab content.
 -  Show other extensions content in tab using Custom Block tab.
 -  Show number of reviews, questions, etc by calling eval code in tab title.

### Easytabs Grid

Here you can see all created tabs, change their status or delete them.

![Easytabs Grid](/images/m2/easytabs/easytabs-grid.png)

### Easytabs Edit Form

![Easytabs Edit Form](/images/m2/easytabs/edit-form.png)

##### Title

Set tab title, here you can enter eval code to show dynamic value in tab name such as number of reviews, questions etc.

##### Alias

Set tab block name in layout.

##### Block Type

Here you can select type of created tab, available types are:

1. Additional Information - displays product attributes that have `Visible on Product View Page on Front-end` enabled.
2. CMS Static Block - displays content of selected static block.
3. Custom Block - create your custom tab using block and template, using this .tab you can display other extension's content in tab.
4. Html content - show any html content created using WYSIWYG editor.
5. Product Description - displays product description in tab.
6. Product attribute - display selected product attribute value.
7. Product's Reviews - show product reviews in tab.
8. Related Products - display related products grid.
9. We Also Recommend - display upsell products grid.

##### Block

Readonly field that shows used block type.

##### Sort Order

Use to sort tabs on frontend. Tabs with smaller value shown before tabs with higher value.

##### Status

Enable or disable tab rendering on product page.

##### Store View

Associate tab with store view(s).

##### Widget Options

This block available fields depend from selected Block Type. Possible fields:

- Template - you can use your custom template for tab.
- Unset - here you can enter block name to remove it from page.
- Identifier - select static block in dropdown.
- Block - enter block name fro custom tab.
- Content - create html content, you can use WYSIWYG editor in this field.
- Attribute Code - select attribute from dropdown to show in tab.

##### Conditions

**New condition.** There is condition (since version 1.6.0) to show tab when Swissup AMP is active.

Setup conditions when tab is visible. You can make tab visible only for customers who are signed in. Or when product has some attribute value.

When tab is always visible leave conditions empty.
