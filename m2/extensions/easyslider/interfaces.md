---
layout: default
title: Easy Slider Interfaces
description: Magento2 slider module
keywords: >
  magento2 slider on homepage, magento2 slider extension, magento2 image
  slider, magento2 slider on product page, easyslider
category: Easy Slider
---

## Easy Slider admin interfaces

Easy Slider extension provides user friendly interfaces to manage sliders.

### Sliders

In order to edit slider or create new one, go Magento Admin > Swissup > General > EasySlide.

![Grid](/images/m2/easyslide/grid.png)

After clicking on any slider from the submitted list, you will be able to edit the settings of Slider information.

#### General configuration

![General](/images/m2/easyslide/tab-general.png)

 -  **Title** - slider name
 -  **Identifier** - unique slider name
 -  **Enabled** - enables or disables current slider

#### Slider Parameters

![Content](/images/m2/easyslide/tab-parameters.png)

"Design" section:

 -  **Theme** - Could be 'Default', 'White' or 'Black'.
 -  **Scrollbar** - enabled slider scrollbar.
 -  **Space Between Slides** - name is pretty self-explained. Value is in pixels.

"Behavior" section: 

 -  **Effect** - slider effects list.
 -  **Effect transition speed** - Duration of transition between slides (in ms).
 -  **Autoplay** - Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled.
 -  **Start with random slide** - Ability to start slider from random slide. (First slide is used by default).
 -  **Infinite slider** - slides keep rotating infinitely. When option is disabled then slider will stop on last slide.

"Navigation" section:

 -  **Pagination** - show slider pagination.
 -  **Navigation Buttons** - select Yes to display arrows of next and previous navigation.
 -  **Thumbnails** - enables thumbnails for slider. You can set thumbnails position and thumbnails image size.

#### Slides

![Content](/images/m2/easyslide/tab-slides-v2.png)

You can see slides gallery at the top. Hree you can create image slide or raw HTML slide. Drag slides in gallery to reorder them. Click on slide to edit it (change image, change HTML content, set active period for slide, toggle its visibility on storefront).

Below slides gallery there are additional options for slide:

 -  **Lazy loading of images** - browser will load slider images "lazy". Only when slide is visible. It speeds up page rendering and can improve pagespeed score.
 -  **Load images in closest slides also** - loads next and previous slides for currebt slide. This option depends on *"Lazy loading of images"*. If lazy loading is disabled then this option is hidden.
 -  **Use responsive images** - forces slide images to use `srcset` and `sizes` attribute. This option can increase PageSpeed score when properly configured. Read more about [Reasponsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). As sizes attribute for image Magento uses value from **Image sizes**. And srcset attribute Magento generates base on width descriptors from **Image candidate widths**. Once "Use responsive images" is disabled options "Image sizes" and "Image candidate widths" are hidden.

### See also:

* [Installation](../installation/)
* [Use cases](../cases/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
