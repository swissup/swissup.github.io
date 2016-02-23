---
layout: default
title: Easy Tabs
description: magento product tabs module installation
keywords: " magento product tabs, magento product tabs extension free, add tabs
magento product page "
category: Easy Tabs
---

# Easy Tabs

Easy Tabs extension allows you to add any number of dynamic tabs based on content of cms blocks, products attributes or html content.

### Contents

1. [Installation](installation/)
2. [Features](#features)
3. [Settings](#settings)
- [General Section](#general-section)
4. [Easytabs Grid](#easytabs-grid)
 - [Easytabs Edit Form](#easytabs-edit-form)
4. [Use Cases](use-cases/)

## Features

- show unlimited number of tabs on product page
- 10 tab types available
- responsive design, works fine on mobile devices
- unset blocks shown in tab to avoid content duplicating
- use custom templates for tab content
- show other extensions content in tab using Custom Block tab
- show number of reviews, tags, questions, etc by calling eval code in tab title

## Settings

### General section

![General Section](/images/easytabs/general-section.png)

##### Enabled

You can disable extension on frontend

##### Update url when switch between tabs

Add tab anchor to page url

##### Show tab anchor when hovering tab

Show tab anchor on tab mouse hover

### Easytabs Grid

Here you can see all created tabs, change their status or delete them.

![Easytabs Grid](/images/easytabs/easytabs-grid.png)

### Easytabs Edit Form

![Easytabs Edit Form](/images/easytabs/easytabs-edit-form.png)

##### Title

Set tab title, here you can enter eval code to show dynamic valu in tab name such as number of reviews, tags etc

##### Alias

Set tab block name in layout. It will be also used for tab link anchor if option enabled in configuration

##### Block Type

Here you can select type of created tab, available types are:

1. Additional Information - displays product attributes that have `Visible on Product View Page on Front-end` enabled
2. CMS Static Block - displays content of selected static block
3. Custom Block - create your custom tab using block and template, using this tab you can display other extension's content in tab
4. Html content - show any html content created using WYSIWYG editor
5. Product Description - displays product description in tab
6. Product Tags - displays product tags
7. Product attribute - display selected product attribute valu
8. Product's Reviews - show product reviews in tab
9. Related Products - display related products grid
10. We Also Recommend - display upsell products grid

##### Block

Readonly field that shows used block type

##### Sort Order

Use to sort tabs on frontend. Tabs with smaller value shown before tabs with higher value

##### Status

Enable or disable tab rendering on product page

##### Store View

Associate tab with store view(s)

##### Widget Options

This block available fields depend from selected Block Type. Possible fields:

- Template - you can use your custom template for tab
- Unset - here you can enter block name in format `reference::block_alias` to remove it from page
- Identifier - select static block in dropdown
- Block - enter block name fro custom tab
- Content - create html content, you can use WYSIWYG editor in this field
- Attribute Code - select attribute from dropdown to show in tab
