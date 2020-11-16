---
layout: default
title: Attribute based pages management
description: Magento 2 Attribute based pages backend management
keywords: "magento 2 attributepages backend"
category: Attributepages
---

# Attribute based pages management

Look at [frontend screenshots](/m2/extensions/attributepages/attribute-based-page/frontend/)
on a separate page.

### Attribute based pages grid

This page is available in `Swissup > Attribute Pages > Manage Pages`
menu.

You are allowed to view, edit and create all available Attribute Based pages
(Brand pages).

![Attribute based pages grid](/images/m2/attributepages/attribute-based-page/backend/grid.png)

### Create attribute page

While creating the initial Attribute page, you will be prompted to select the
attribute:

![Create attribute page. Step 1](/images/m2/attributepages/attribute-based-page/backend/select_attribute_dropdown.png)

> In case you don't see any attributes in dropdown, you have to navigate to
> `Stores > Attributes > Product` and add new one with
> `Dropdown` or `Multiple Select` input type and **it should have at least one available option**.

After clicking `Continue button` you will be redirected to
[Attribute page form](#attribute-page-form)

### Attribute page form

Attribute page form consists of four tabs:

- [Page Information](#page-information-tab)
- [Content](#content-tab)
- [Display Settings](#display-settings-tab)
- [Option Pages Settings](#option-pages-settings-tab)
- [Options](#options-tab)

##### Page information tab

![Page information tab](/images/m2/attributepages/attribute-based-page/backend/tab-page-information.png)

Field | Description
:-----|:-----------
Name | Page identifier for store owner
Title | Used by `Swissup\Attributepages\Block\Attribute\PagesList` block and widget.<br/> It's also used as a `Page Title` if the content tab does not redefine it.
Url key | Frontend url where the page will be available
Store View | List of store views, where the current page should be available
Enabled | Attributepage status

##### Content tab

![Content tab](/images/m2/attributepages/attribute-based-page/backend/tab-content.png)

Field | Description
:-----|:-----------
Page Title | Used for page `H1` tag and `meta title`
Description | Will be shown above options list (brands list)
Meta Keywords | Page Keywords
Meta Description | Page Description

##### Display settings tab

![Display settings tab](/images/m2/attributepages/attribute-based-page/backend/tab-display-settings.png)

Field | Description
:-----|:-----------
Layout | Page Layout (Standard magento layout select field)
Layout Update XML | This field can be used to add or remove additional blocks
Display Mode | Page display mode (Description and children, Description only, Children only)
Columns Count | Attribute options column count
Group Options by First Letter | Handy, when you have really many attribute options(brands) count
Listing Mode | Show as Images or as Links
Image Width | Image Width
Image Height | Image Height

##### Option pages settings tab

This tab allows you to configure default settings for option-based pages.

![Option pages settings tab](/images/m2/attributepages/attribute-based-page/backend/tab-option-pages-settings.png)

Field       | Description
------------|------------
Title       | Default title. Available Placeholders: `{% raw %}{{var option.label}}, {{var attribute.label}}{% endraw %}`
Use Layered Navigation | Ability to enable/disable layered navigation.
Layout      | Choose layout to use at option-based pages.
Display Mode | Option page display mode (Description and children, Description only, Children only)
Additional Product Collection Filters | Ability to add additional filters for product list shown at option-based page.

##### Options tab

Options tab comes with attribute options grid where you can change urls, sort_order,
and assign images and thumbnails for each of the attribute option (brand).

![Options tab](/images/m2/attributepages/attribute-based-page/backend/tab-options.png)

Field | Description
:-----|:-----------
Exclude from Display | These options(brands) will not be shown at the Attributepage and widgets
Url Key | Frontend url, where the page will be available (PAGE_URL/OPTION_URL)
Image | Image to show at the Attributepage and widgets
Thumbnail | Image to show, when tiny logo size is needed. See [Use cases](/m2/extensions/attributepages/use-cases/) page.
Sort Order | Ability to sort options list manually.

##### Related Articles
- [Attribute based page frontend screenshots](/m2/extensions/attributepages/attribute-based-page/frontend/)
