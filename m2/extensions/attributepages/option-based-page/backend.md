---
layout: default
title: Option based pages management
description: Magento 2 Option based pages backend management
keywords: "magento 2 attributepages backend"
category: Attributepages
---

# Option based pages management

Look at [frontend screenshots](/m2/extensions/attributepages/option-based-page/frontend/)
on a separate page.

#### Option based pages grid

This page is available in `Swissup > Attribute Pages > Manage Options`
menu.

You are allowed to view, edit and create all available Option Based pages
(Brand filtered pages).

![Option based pages grid](/images/m2/attributepages/option-based-page/backend/grid.png)

#### Create option page

Option pages are created automatically when saving Attribute based page.

If you whould like to create store specific option page, you can open existing
option page and press `Duplicate` button, that will redirect you to
[option page form](#option-page-form).

#### Option page form

Option page form contains three tabs:

- [Option Information](#option-information-tab)
- [Content](#content-tab)
- [Display Settings](#display-settings-tab)

##### Option information tab

![Option information](/images/m2/attributepages/option-based-page/backend/tab-option-information.png)

Field | Description
:-----|:-----------
Enabled | Option-based page status
Name | Page identifier for store owner
Title | Used by `Swissup\Attributepages\Block\Option\OptionList` block and widget.<br/> It's also used as a `Page Title` if content tab does not redefine it.
Url key | Frontend url where the page will be available
Image | Image to show at the Attributepage and widgets
Thumbnail | Image to show, when tiny logo size is needed. Look at [Use cases](/m2/extensions/attributepages/use-cases/) page.
Store View | List of store views, where current page should be available

##### Content tab

![Content tab](/images/m2/attributepages/option-based-page/backend/tab-content.png)

Field       | Description
------------|------------
Page Title  | Used for page `H1` tag and `meta title`
Description | Will be shown above products list
Short Description | Will be shown below corresponding option in [Product Option Block](/m2/extensions/attributepages/widgets-and-blocks/product-option-block/) if enabled.
Meta Title | Meta title
Meta Keywords     | Page Keywords
Meta Description  | Page Description

##### Display settings tab

![Display settings tab](/images/m2/attributepages/option-based-page/backend/tab-display-settings.png)

Field | Description
:-----|:-----------
Layout | Page Layout (Standard magento layout select field)
Layout Update XML | This field can be used to add or remove additional blocks
Display Mode | Page display mode (Description and children, Description only, Children only)
Use Layered Navigation | Enable/Disable Layered navigation for corresponding option-based page.

##### Related Articles
- [Option based page frontend screenshots](/m2/extensions/attributepages/option-based-page/frontend/)
