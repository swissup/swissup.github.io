---
layout: default
title: Argento sticky script
description: How to use ArgentoSticky script on custom static content
keywords: sticky header, sticky sidebar
category: Argento
---

# Argento sticky

> Available since Argento 0.9.5

ArgentoSticky - is a script that allows you easily transform any custom content
into sticky element, that will be sticked to the top of the screen, when scrolling
out of the viewport.

Typical markup for blocks that will be transformed into sticky element:

```html
<div data-mage-init='{"argentoSticky": {}}'>
    Block content
</div>
```

`data-mage-init='{"argentoSticky": {}}'` - is a standard way to run javascript
widget written according to magento guides.

Following options are supported:

Option       | Example          | Description
-------------|------------------|------------
`media`      | `(min-width: 768px) and (min-height: 600px)` | Media rules to check before activate the sticky
`parent`     | `.page-wrapper`  | Sticky element will stay inside this element (Parent node by default)
`offset_top` | `20`             | Offsets the initial sticking position by of number of pixels

View other options at [official sticky-kit site](http://leafo.net/sticky-kit/).

**Usage examples**

Html:

```html
<div class="some-class-name" data-mage-init='{"argentoSticky": {
    "media": "(min-width: 768px) and (min-height: 600px)",
    "parent": ".page-wrapper",
    "offset_top": 45
}}'>
    Block content
</div>
```

Javascript ([View docs](../../customization/custom-js/) about how to add custom js
to argento theme):

```js
define([
    'jquery',
    'argentoSticky'
], function($) {
    $('.some-class-name').argentoSticky({
        media: '(min-width: 768px) and (min-height: 600px)',
        parent: $('.page-wrapper'),
        offset_top: 45
    });
});
```

##### Next up

- [Argento docs homepage](/m2/argento/)
