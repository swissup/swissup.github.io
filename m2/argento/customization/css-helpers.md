---
layout: default
title: Argento css helpers
description: How to use css helpers to organize store content
keywords: >
    css helpers, responsive utilites, visible and hidden
    classes, responsive embed, responsive video, responsive iframe
category: Argento
---

# Css helpers

### Contents

 1. [Visible and hidden classes](#visible-and-hidden-classes)
 2. [Responsive embed](#responsive-embed)
 3. [Text and block alignment classes](#text-and-block-alignment-classes)

### Visible and hidden classes

Argento provides Bootstrap `visible-*` and `hidden-*` classes, to help you to
organize custom content.

Examples:

```html
<!-- Visible on the phones only -->
<img class="visible-xs-block" src="..." alt="..."/>

<!-- Hidden on the phones -->
<img class="hidden-xs" src="..." alt="..."/>
```

Please read [official Bootstrap documentation](https://getbootstrap.com/docs/3.3/css/#responsive-utilities)
for more information.

### Responsive embed

You can use Bootstrap `embed-responsive` class to make any video content responsive.

Examples:

```html
<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
```

Please read [official Bootstrap documentation](http://getbootstrap.com/components/#responsive-embed)
for more information.

### Text and block alignment classes

Examples:

```html
<!-- Center text inside a div -->
<div class="a-center"></div>

<!-- Center div with a defined width -->
<div class="a-center-block"></div>

<!-- Float block to the left -->
<div class="pull-left"></div>

<!-- Float block to the right -->
<div class="pull-right"></div>
```
