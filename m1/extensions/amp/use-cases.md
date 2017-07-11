---
layout: default
title: AMP use cases
h1: Use Cases
description: AMP Use Cases
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

### Contents

<!-- MarkdownTOC -->

- [Set image layout](#set-image-layout)
- [Change image src](#change-image-src)
- [Change css class name](#change-css-class-name)

<!-- /MarkdownTOC -->

### Set image layout

AMP supports a bunch of
[image layouts](https://www.ampproject.org/docs/reference/components/amp-img).

Our AMP module automatically sets the layout of every image to `responsive`,
except for the small images.

Sometimes you may want to manually set the layout to use for the images inside
product description, or some CMS pages.

Here is an example of how to do that and do not affect desktop theme output:

```html
<img src=".." data-amp-layout="fixed"/>
```

Where `data-amp-layout` will be converted in `layout` attribute, when AMP is
active only.

### Change image src

Sometimes you may want to use AMP specific image for AMP visitors.

Here is an example of how to do that and do not affect desktop theme:

```html
<img src=".." data-amp-src=".."/>
```

Where `data-amp-src` will override `src` attribute, when AMP is active.

### Change css class name

> Available since 1.3.0

Sometimes you may want to change css class name of existing element.

Here is an example of how to do that and do not affect desktop theme:

```html
<ul class="desktop-class-that-will-be-removed" data-amp-class="list-unstyled">
    <li>...</li>
</ul>
```

Where `list-unstyled` - is a AMP supported
[css class name](/m1/extensions/amp/customization/css-helpers/).
