---
layout: default
title: CSS Helpers
description: Various CSS classes to customize firecheckout page
category: Firecheckout
---

# CSS Helpers

> This feature supported since v.1.11.0

* TOC
{:toc}

### Grid system

CSS class                   | Description
----------------------------|--------------------------
`fc-col-1` .. `fc-col-12`   | Helps to resize the field. Use just like any other 12-columns grid system
`fc-col-newline`            | Move the the field to the new line
**Using together with container size selectors** |
`fc-size-l:fc-col-4`        | `fc-col-4` will work, when parent container has `fc-size-l` class
`fc-size-s:fc-col-newline`  | `fc-col-newline` will work, when parent container has `fc-size-s` class

### Container size selectors

These classes are added automatically by firecheckout to the main checkout steps.

Please note, that they do not describe screen size like media query, but they
actually indicate how large the container is.

CSS class   | Description
------------|-----------
`fc-size-l` | Added to the section, when its width > 550px
`fc-size-m` | Added to the section, when its width > 420px
`fc-size-s` | Added to the section, when its width > 275px
`fc-size-xs`| Added to the section, when its width > 0px

##### Next up
{:.no_toc}

 -  [Back to home](/m2/extensions/firecheckout)
 -  [Dynamic postcode mask](/m2/extensions/firecheckout/customization/use-cases/postcode-mask/)
