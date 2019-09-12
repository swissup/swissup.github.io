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

![Grid](/images/m2/easyslide/SliderAdminGrid.png)

After clicking on any slider from the submitted list, you will be able to edit the settings of Slider information.

#### General configuration

![General](/images/m2/easyslide/SliderAdminGeneral.png)

 -  **Title** - slider name
 -  **Identifier** - unique slider name
 -  **Enabled** - enables or disables current slider

#### Slider Parameters

![Content](/images/m2/easyslide/SliderAdminParams.png)

 -  **Theme** - Could be 'Default', 'White' or 'Black'.
 -  **Effect** - slider effects list.
 -  **Speed** - Duration of transition between slides (in ms).
 -  **Autoplay** - Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled.
 -  **Pagination** - show slider pagination.
 -  **Navigation Buttons** - select Yes to display arrows of next and previous navigation.
 -  **Scrollbar** - enabled slider scrollbar.
 -  **Start with random slide** - Ability to start slider from random slide. (First slide is used by default).
 -  **Space Between Slides** - name is pretty self-explained. Value is in pixels.

#### Slides

![Content](/images/m2/easyslide/SliderAdminSlides.png)

When you click on slide you can add its title. Add some descrition.

Additional options:

 -  **Lazy loading of images** - browser will load slider images "lazy". Only when slide is visible. It speeds up page rendering and can improve pagespeed score.
 -  **Load images in closest slides also** - loads next and previous slides for currebt slide. This option depends on *"Lazy loading of images"*. If lazy loading is disabled then this option is hidden.
 -  **Use responsive images** - forces slide images to use `srcset` attribute. This option can increase PageSpeed score when properly configured. Read more about [Reasponsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### See also:

* [Installation](../installation/)
* [Use cases](../cases/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
