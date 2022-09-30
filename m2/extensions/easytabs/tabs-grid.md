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

Grid with all tabs you can find at
_Swissup > EasyTabs_ page.

Here you can see all existing tabs, create new ones, change their status or delete.

![Tabs Grid](/images/m2/easytabs/easytabs-grid.png)

When you need to create new tab then click `Add New Tab` button.

You may just click on respective row when you need to edit existing tab. Or select _Edit_ action from `Action` column.

### Edit Form

![Edit Tab Form](/images/m2/easytabs/edit-form-v2.png)

This form is the same for new tab and for tab you edit.

#### Tab Information

Here you can enable/disable tab, assign it to specific store vew, set tab sort order or change its tab.

Tab **Title** can eval code to show dynamic value in tab name such as number of reviews, questions etc.

**Alias** is a tab block name in layout.

With **Block Type** you can select type of created tab. Available types are:

 1. Additional Information - displays product attributes that have `Visible on Product View Page on Front-end` enabled.
 2. CMS Static Block - displays content of selected static block.
 3. Cross-sell Products - show cross-sell products.
 3. Custom Block - create your custom tab using block and template. With this tab you can display other extension's content in tab.
 4. Html content - show any html content created using WYSIWYG editor.
 5. Product Description - displays product description in tab.
 6. Product attribute - display selected product attribute value.
 7. Product's Reviews - show product reviews in tab. **Important**: becuase of Magento 2 hardcoded logic this tab can have *only* alias `reviews`.
 8. Related Products - display related products grid.
 9. We Also Recommend - display upsell products grid.

Since module version 1.8.0 you can **Hide tab on Product** page. You should enable this optin if you want to show tab with Easytabs widget.

Other interesting and importatnt option available since 1.8.0 is **Load tab content with Ajax** request. It can reduce initial size of (product) page and speed up its loading. This option may not load tab content for some custom block. Please disable it in such case.

Option **Update tab content on storefront** available in version 1.11.0 and later. If option enabled then Magento updates tab content with values from child product at configurable product once its options selected.

#### Tab Options

Content of "Tab Options" section depends on Block Type field from "Tab Information". Possible fields:

 -  Template - you can use your custom template for tab.
 -  Unset - here you can enter block name to remove it from page.
 -  Identifier - select static block in dropdown.
 -  Block - enter block name for custom tab.
 -  Content - create html content, you can use WYSIWYG editor in this field.
 -  Attribute Code - select attribute from dropdown to show in tab. You can select multiple attributes. Output will be in order attributes where selected here.

#### Conditions

**New condition.** There is condition (since version 1.6.0) to show tab when Swissup AMP is active.

Setup conditions when tab is visible. You can make tab visible only for customers who are signed in. Or when product has some attribute value.

When tab is always visible leave conditions empty.

