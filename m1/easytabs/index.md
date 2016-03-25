---
layout: default
title: Easy Tabs
description: magento product tabs module installation
keywords: " magento product tabs, magento product tabs extension free, add tabs
magento product page "
category: Easy Tabs
---

# Easy Tabs

Easy Tabs extension allows you to add multiple dynamic tabs based on content of
cms blocks, products attributes or html content.

### Contents

1. [Installation](installation/)
2. [Features](#features)
3. [Settings](#settings)
- [General Section](#general-section)
4. [Easytabs Grid](#easytabs-grid)
 - [Easytabs Edit Form](#easytabs-edit-form)
5. [Use Cases](use-cases/)

## Features

- show unlimited number of tabs on product page
- 10 tab types available
- responsive design, works fine on mobile devices
- unset blocks display in tab to avoid content duplication
- use custom templates for tab content
- show other extensions content in tab using Custom Block tab
- show number of reviews, tags, questions, etc by calling eval code in tab title

## Settings

### General section

![General Section](/images/easytabs/general-section.png)

##### Enabled

You can disable the extension on frontend

##### Update url when switch between tabs

Add the tab anchor to page url

##### Show tab anchor when hovering tab

Show tab anchor on tab mouse hover

### Easytabs Grid

You can look through all created tabs, change their status or delete them.

![Easytabs Grid](/images/easytabs/easytabs-grid.png)

### Easytabs Edit Form

![Easytabs Edit Form](/images/easytabs/easytabs-edit-form.png)

##### Title

Set the tab title. You can also enter the eval code to show dynamic value in tab
name such as number of reviews, tags etc

##### Alias

Set tab block name in layout. It will be also used for tab link anchor if option
was enabled in the configuration.

##### Block Type

Here you can select the type of created tab. Available types are:

1. Additional Information - displays product attributes that have `Visible on
Product View Page on Front-end` enabled.
2. CMS Static Block - displays content of selected static block.
3. Custom Block - create your custom tab using block and template, using this tab
you can display the content of other extension in tab.
4. Html content - shows any html content created using WYSIWYG editor.
5. Product Description - displays product description in tab.
6. Product Tags - displays product tags.
7. Product attribute - displays selected product attribute value.
8. Product's Reviews - shows product reviews in tab.
9. Related Products - displays related products grid.
10. We Also Recommend - displays upsell products grid.

##### Block

Read the field that shows used block type.

##### Sort Order

Sopecify the sort order of tabs on frontend. Tabs with smaller value will be shown
before tabs with higher value.

##### Status

Enable or disable the tab rendering on product page.

##### Store View

Assign the tab to store view(s)

##### Widget Options

All fields of this block depend on selected Block Type. Possible fields:

- Template - you can use your custom template for tab.
- Unset - enter the block name with format `reference::block_alias` in order to
remove it from the page.
- Identifier - select the static block from dropdown.
- Block - enter the block name for custom tab.
- Content - create html content. You can use WYSIWYG editor in this field.
- Attribute Code - select the attribute from dropdown to show it in tab.
