---
layout: default
title: Tabs Grid
description: magento 2 product tabs grid
keywords: >
    magento 2 product tabs, magento 2 product tabs extension free,
    magento2 product page tabs
category: Easytabs
---

# Tabs Grid

 -  [Edit Form](#edit-form)

Grid with all product tabs you can find at
_Swissup > EasyTabs > Product Page Tabs_ page.

Here you can see all existing tabs, create new ones, change their status or delete.

![Tabs Grid](/images/m2/easytabs/easytabs-grid.png)

When you need to create new tab then click `Add New Tab` button.

You may just click on respective row when you need to edit existing tab. Or select _Edit_ action from `Action` column.

### Edit Form

![Edit Tab Form](/images/m2/easytabs/edit-form.png)

This form if the same for new tab and for tab you edit.

#### Title

Set tab title, here you can enter eval code to show dynamic value in tab name such as number of reviews, questions etc.

#### Alias

Set tab block name in layout.

#### Block Type

Here you can select type of created tab, available types are:

1. Additional Information - displays product attributes that have `Visible on Product View Page on Front-end` enabled.
2. CMS Static Block - displays content of selected static block.
3. Custom Block - create your custom tab using block and template, using this .tab you can display other extension's content in tab.
4. Html content - show any html content created using WYSIWYG editor.
5. Product Description - displays product description in tab.
6. Product attribute - display selected product attribute value.
7. Product's Reviews - show product reviews in tab. **Important**: becuase of Magento 2 hardcoded logic this tab can have *only* alias `reviews`.
8. Related Products - display related products grid.
9. We Also Recommend - display upsell products grid.

#### Block

Readonly field that shows used block type.

#### Sort Order

Use to sort tabs on frontend. Tabs with smaller value shown before tabs with higher value.

#### Status

Enable or disable tab rendering on product page.

#### Store View

Associate tab with store view(s).

#### Widget Options

This block available fields depend from selected Block Type. Possible fields:

- Template - you can use your custom template for tab.
- Unset - here you can enter block name to remove it from page.
- Identifier - select static block in dropdown.
- Block - enter block name fro custom tab.
- Content - create html content, you can use WYSIWYG editor in this field.
- Attribute Code - select attribute from dropdown to show in tab.

#### Conditions

**New condition.** There is condition (since version 1.6.0) to show tab when Swissup AMP is active.

Setup conditions when tab is visible. You can make tab visible only for customers who are signed in. Or when product has some attribute value.

When tab is always visible leave conditions empty.
