---
layout: default
title: Slick Carousel
description: Slick Carousel for Magento
keywords: slick carousel, slider
category: SlickCarousel
---

# Slick Carousel

This module - is a wrapper around
[slick carousel js library](http://kenwheeler.github.io/slick/) that allows
you easily create sliders in Magento store.

There are two plugins available:

Type         | Description
-------------|------------
slick        | Usefull for plain html sliders, eg. [static content slider][usage_basic]
slickwrapper | Usefull to create a slider from [dynamically generated items][usage_advanced]

The only difference between these plugins - is that the `slick` should be called
directly on a first-level parent element that wraps slide items, while
`slickwrapper` could be added to any parent wrapper, that allows to use it with
dynamically generated content.

**Screenshot example:**

![Slick Carousel Example](/images/m2/slick-carousel/usage/basic/2slides-center-mode.png)

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Usage](usage/)
    - [Basic Usage][usage_basic] (Static content carousel)
    - [Advanced Usage][usage_advanced] (Product listing carousel)
    - [Lazy Loading](usage/#lazy-loading)
    - [Responsive Display](usage/#responsive-display)
    - [Using in Argento](usage/#using-in-argento)
    - [Slick Carousel parameters](usage/#parameters)
    - [Slick Carousel arrow classes](usage/#arrow-classes)

[usage_basic]: usage/#basic-usage
[usage_advanced]: usage/#advanced-usage
