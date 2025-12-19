---
layout: default
title: Theme layouts (Boxed, full-width and standard layout types)
description: How to switch between boxed, full-width and standard layout types
category: Argento
gallery:
  - href: /images/m2/argento/customization/layout-types/standard.png
    src: /images/m2/argento/customization/layout-types/standard-small.png
    w: 1280
    h: 790
    title: >
        Argento Essence standard layout type
  - href: /images/m2/argento/customization/layout-types/boxed.png
    src: /images/m2/argento/customization/layout-types/boxed-small.png
    w: 1280
    h: 790
    title: Argento Essence boxed layout type
  - href: /images/m2/argento/customization/layout-types/full-width.png
    src: /images/m2/argento/customization/layout-types/full-width-small.png
    w: 1280
    h: 790
    title: Argento Essence full-width layout type
---

# Theme layouts

There are 3 layout types avaliable.

You can switch between these layouts with [theme editor](../theme-editor/#layout)
or [custom.less file](../custom-css/).

Please, follow the instructions below to implement one of the following layouts:

 -  [Standard](#standard-layout)
 -  [Boxed](#boxed-layout)
 -  [Full-Width](#full-width-layout)

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Standard layout

Standard layout is a default Argento Essence layout. It displays centered
content with a white background around it.

![Standard layout](/images/m2/argento/customization/layout-types/standard.png)

Standard layout uses the following less variables:

Variable | Value
---------|------
@layout__max-width | 980px
@page-wrapper__max-width | none
@page-wrapper__margin | 0px auto

Put these variables into the `_argento_custom.less` file and run the static content deploy
command according to the [custom css tutorial](../custom-css/#example).

> Make sure that you don't use the [theme editor](../theme-editor/) layout section
> in order to use layout less variables in `_argento_custom.less`

### Boxed layout

Boxed layout has paddings around the page wrapper, which enables the use of
body background.

![Boxed layout](/images/m2/argento/customization/layout-types/boxed.png)

Boxed layout uses the following less variables:

Variable | Value
---------|------
@layout__max-width | 980px
@body__background | #f5f5f5
@page-wrapper__max-width | 1024px
@page-wrapper__margin | 0px auto

Put these variables into the `_argento_custom.less` file and run the static content deploy
command according to [custom css tutorial](../custom-css/#example).

> Make sure that you don't use the [theme editor](../theme-editor/) layout section
> in order to use layout less variables in `_argento_custom.less`

### Full-width layout

Full width layout removes width from the content wrapper, thus widening the content area.

> This layout type requires additional changes in the content settings, such as category
> columns count, homepage slider and banner widths, etc.

![Full-Width layout](/images/m2/argento/customization/layout-types/full-width.png)

Full-width layout uses the following less variables:

Variable | Value
---------|------
@layout__max-width | none
@page-wrapper__max-width | none
@page-wrapper__margin | 0px auto
**Product List changes** |
@product-grid-items-per-row-layout-1-screen-l | 6
@product-grid-items-per-row-layout-2-screen-l | 5
@product-grid-items-per-row-layout-3-screen-l | 4

Put these variables into the `_argento_custom.less` file and run the static content deploy
command according to [custom css tutorial](../custom-css/#example).

**You will also need to update homepage slider width, easybanner images,
easycategory and highlight widgets columns count.** See details in the
[homepage content](../homepage-content/) article.

> Make sure that you don't use the [theme editor](../theme-editor/) layout section
> in order to use layout less variables in `_argento_custom.less`
