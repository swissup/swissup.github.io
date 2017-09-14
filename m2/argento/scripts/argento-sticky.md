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

### Contents
{:.no_toc}

* TOC
{:toc}

### Typical markup for sticky element

```html
<div data-mage-init='{"argentoSticky": {}}'>
    Block content
</div>
```

`data-mage-init='{"argentoSticky": {}}'` - is a standard way to run javascript
widget written according to magento guides.

### Options

Option       | Example          | Description
-------------|------------------|------------
`media`      | `(min-width: 768px) and (min-height: 600px)` | Media rules to check before activate the sticky
`parent`     | `.page-wrapper`  | Sticky element will stay inside this element (Parent node by default)
`offset_top` | `20`             | Offsets the initial sticking position by of number of pixels

View other options at [official sticky-kit site](http://leafo.net/sticky-kit/).

### Usage examples

#### Html

```html
<div class="some-class-name" data-mage-init='{"argentoSticky": {
    "media": "(min-width: 768px) and (min-height: 600px)",
    "parent": ".page-wrapper",
    "offset_top": 45
}}'>
    Block content
</div>
```

#### Javascript

[View docs](../../customization/custom-js/) about how to add custom js
to argento theme.

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

#### Enable/disable sticky element programmatically

> This feature is available since [0.9.7](/m2/argento/changelog/#version-097)
> version only

The code below shows how to disable sticky header in
[ArgentoFlat](/m2/argento/flat/) theme:

```js
define([
    'jquery',
    'argentoSticky',
    'domReady!'
], function($) {
    // disable
    if($ ('.header.wrapper').length){
        $('.header.wrapper').data('argentoArgentoSticky').disable();
    }

    // or enable
    // if($ ('.header.wrapper').length){
    //     $(".header.wrapper").data('argentoArgentoSticky').disable();
    // }
});
```

##### Next up
{:.no_toc}

- [Argento docs homepage](/m2/argento/)
