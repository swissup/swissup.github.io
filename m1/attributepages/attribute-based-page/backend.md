---
layout: default
title: Attribute based pages management
description: Attribute based pages backend management
keywords: "attributepages backend"
category: Attributepages
---

# Attribute based pages management

Look at [frontend screenshots](/m1/attributepages/attribute-based-page/frontend/)
on a separate page.

### Attribute based pages grid

This page is available in `Templates-Master > Attribute Pages > Manage Pages`
menu.

You are allowed to view, edit and create all available Attribute Based pages
(Brand pages).

![Attribute based pages grid](/images/attributepages/attribute-based-page/backend/grid.png)

### Create attribute page

While creating the initial Attribute page, you will be prompted to select the
attribute:

![Create attribute page. Step 1](/images/attributepages/attribute-based-page/backend/select_attribute_dropdown.png)

> In case you don't see any attributes in dropdown, you have to navigate to
> `Catalog > Attributepages > Manage Attributes` and add new one with
> `dropdown` input type and **it should have at least one available option**.

After clicking `Continue button` you will be redirected to
[Attribute page form](#attribute-page-form)

### Attribute page form

Attribute page form consists of four tabs:

- [Page Information](#page-information-tab)
- [Content](#content-tab)
- [Display Settings](#display-settings-tab)
- [Options](#options-tab)

##### Page information tab

Page information tab comes with the following fields:

Field | Description
:-----|:-----------
Name | Page identifier for store owner
Title | Used by `attributepages/attribute_list` block and widget.<br/> It's also
used as a `Page Title` if the content tab does not redefine it.
Url key | Frontend url where the page will be available
Store View | List of store views, where the current page should be available
Enabled | Attributepage status

##### Content tab

Content tab comes with the following fields:

Field | Description
:-----|:-----------
Page Title | Used for page `H1` tag and `meta title`
Description | Will be shown above options list (brands list)
Meta Keywords | Page Keywords
Meta Description | Page Description

##### Display settings tab

Display settings tab comes with the following fields:

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

##### Options tab

Options tab comes with attribute options grid where you can change urls quickly,
assign images and thumbnails for each of the attribute option (brand).

![Options tab](/images/attributepages/attribute-based-page/backend/tab_options.png)

Field | Description
:-----|:-----------
Exclude from Display | These options(brands) will not be shown at the Attributepage and widgets
Url Key | Frontend url, where the page will be available (PAGE_URL/OPTION_URL)
Image | Image to show at the Attributepage and widgets
Thumbnail | Image to show, when tiny logo size is needed. See [Use cases](/m1/attributepages/use-cases/) page.

##### Related Articles
- [Attribute based page frontend screenshots](/m1/attributepages/attribute-based-page/frontend/)
