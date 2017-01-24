---
layout: default
title: Extension configuration
description: magento easytabs module system config options and admin interface
keywords: magento easytabs extension, tabs, backend, easytabs system config
category: Easy Tabs
---

# Configuration

## General configurable options

Please go `Admin` ➔ `System` ➔ `Configuration` ➔ `Easy Tabs` and select `Yes`
to enable the extension.

![System Config](/images/m1/extensions/easytabs/system-config.png)

Under subsection "Product Page tabs" you can see few additional options for
Product Tabs (tabs that are shown on product page):

 *  option _Update url when switch between tabs_ adds the tab anchor to page
    url
 *  option _Group attributes on "Additional Information" tab_ groups data
    using attribute groupes.

## Admin interfaces

Easy Tabs extension provides two grids. One grid for managing product tabs and
other one for widget tabs.

### Product Tabs

Find menu item `Templates Master` at Magento Admin top menu. There you can go
to `Easy Tabs` ➔ `Product Tabs`.

![Product Tabs](/images/m1/extensions/easytabs/admin-product-tabs.png)

Here you can look through all created tabs, change their status or delete them.

Click on row with tab you want to edit and you go to _Edit Tab_ page.

![Edit Product Tab](/images/m1/extensions/easytabs/edit-form.png)

**Title** - tab title. You can also enter the eval code to show dynamic value
in tab name such as number of reviews, tags etc.

**Alias** - block name in layout for tab. It will be also used for tab link
anchor if option was enabled in the configuration.

**Block type** - here you can select the type of created tab. Available types
are:

 *  Additional Information - displays product attributes that have `Visible on
    Product View Page on Front-end` enabled.
 *  CMS Static Block - displays content of selected static block.
 *  Custom Block - create your custom tab using block and template, using this
    tab you can display the content of other extension in tab.
 *  Html content - shows any html content created using WYSIWYG editor.
 *  Product Description - displays product description in tab.
 *  Product Tags - displays product tags.
 *  Product attribute - displays selected product attribute value.
 *  Product's Reviews - shows product reviews in tab.

**Block** - read only field. Here outputs technical block type.

**Status** - Enable or disable the tab rendering on product page.

**Store View** - Assign the tab to store view(s).

**Widget Options** - fields of this block depend on selected Block Type. 

Possible fields in widget options section:

 -  _Template_ - you can use your custom template for tab.
 -  _Unset_ - enter the block name with format `reference::block_alias` in
    order to remove it from the page.
 -  _Identifier_ - select the static block from dropdown.
 -  _Block_ - enter the block name for custom tab.
 -  _Content_ - create html content. You can use WYSIWYG editor in this field.
 -  _Attribute Code_ - select the attribute from dropdown to show it in tab.
