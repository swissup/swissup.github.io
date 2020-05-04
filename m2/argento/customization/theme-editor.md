---
layout: default
title: Argento Theme Editor
description: Argento customizations using theme editor
category: Argento
---

# Theme Editor

Theme Editor is a module that comes with every Argento theme and allows you to
customize its styles, layout, etc.

Please check the following pages with a description of available customizable
options and customization examples for every Argento design:

 -  [Argento Essence](/m2/argento/essence/theme-editor/)
 -  [Argento Flat](/m2/argento/flat/theme-editor/)
 -  [Argento Pure2](/m2/argento/pure2/theme-editor/)
 -  [Argento Mall](/m2/argento/mall/theme-editor/)
 -  [Argento Luxury](/m2/argento/luxury/theme-editor/)
 -  [Argento Stripes](/m2/argento/stripes/theme-editor/)
 -  [Argento Force](/m2/argento/force/theme-editor/)

### Header Builder

> Currently only available in Argento Pure2 theme

With Header Builder, you can replace static header with a fully customizable one.

Features:

 -  move header blocks between three rows and nine columns with an easy-to-use drag-and-drop interface
 -  remove blocks from header
 -  set column settings and assign CSS classes for it
 -  preview header layout before applying it on the frontend

![Header Builder Configuration](/images/m2/argento/customization/theme-editor/header-builder.png)

#### Blocks available in header

Name              | Image                         | Description
------------------|-------------------------------|-----------------------------------------------
Logo              | ![Logo Block][logo-img]       | Contains store logo and mobile menu button
Search            | ![Search Block][search-img]   | You can change the look of search form in [Ajax Search Configuration][ajaxsearch-design]
Shopping Cart     | ![Cart Block][cart-img]       | Customer shopping cart
Navigation        | ![Menu Block][nav-img]        | You can change the look of store menu in [NavPro Configuration][navpro]
Currency Switcher | ![Currency Block][cur-img]    | Allows to change currency
Language Switcher | ![Lang Block][lang-img]       | Allows to change store language
Header Links      | ![Links Block][links-img]     | Customer links and welcome message
Customer Menu     | ![Customer Block][cust-img]   | Customer Links in form of dropdown
CMS Links         | ![CMS Links Block][cms-img]   | Displays content from static block `header_cms_links`

[ajaxsearch-design]: /m2/extensions/ajaxsearch/configuration/#design
[navpro]: /m2/extensions/navigationpro/backend/menu-settings/
[logo-img]: /images/m2/argento/customization/theme-editor/blocks/logo.png
[search-img]: /images/m2/argento/customization/theme-editor/blocks/search.png
[cart-img]: /images/m2/argento/customization/theme-editor/blocks/cart.png
[nav-img]: /images/m2/argento/customization/theme-editor/blocks/nav.png
[cur-img]: /images/m2/argento/customization/theme-editor/blocks/cur.png
[lang-img]: /images/m2/argento/customization/theme-editor/blocks/lang.png
[links-img]: /images/m2/argento/customization/theme-editor/blocks/links.png
[cust-img]: /images/m2/argento/customization/theme-editor/blocks/customer.png
[cms-img]: /images/m2/argento/customization/theme-editor/blocks/links-cms.png

#### Preview

After you moved blocks or changed columns settings in layout, press `Preview Header` button
to see how your changes will look on frontend.

You can resize the preview dragging its corner to test layout on different window sizes.

![Header Builder Preview](/images/m2/argento/customization/theme-editor/preview.png)

If you like new layout, do not forget to save config an clear cache to apply it on frontend.

### Category Page Builder

Category Page builder is a set of options with preview feature to modify the look of category page.

It is available for every theme in Argento package.

![Category page config with instant preview](/images/m2/argento/customization/theme-editor/category/config-with-instant-preview.gif)

General layout of category page is two columns with left sidebar. Left sidebar contains category filters and some other blocks (e.g. wishlist).

  - **Layout** - dropdown to change page layout. Values:
      + theme definde;
      + one column;
      + two columns (left sidebar);
      + two columns (right sidebar);
      + three columns.
  - **Content width** - dropdown to change width of main content. Values:
      + full width;
      + limited width.
  - **Max width** - available only when limited width selected. Sey max allowed width for main content.
  - **Product list mode** - dropdown to set look of product list. Values:
      + Grid Only - Formats the list as a grid of rows and columns. Each product appears in a single cell of the grid.
      + List Only - Formats the list with each product on a separate row.
      + Grid (default / List) - By default, products appear in Grid view and can be toggled to List view.
      + List (default / Grid) - By default, products appear in List View and can be toggled to Grid view.

#### Grid Mode

In this subsection you can determine the number of products displayed in grid view and set columns number for grid.

![Category page grid config](/images/m2/argento/customization/theme-editor/category/config-grid.png)

#### List Mode

Lits mode for category page is not very common. But still it can give your store a fresh look when it is configured properly.

![Category page list config](/images/m2/argento/customization/theme-editor/category/config-list.png)
