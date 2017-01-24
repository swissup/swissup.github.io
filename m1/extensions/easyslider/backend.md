---
layout: default
title: Extension configuration
description: magento easyslider module system config options and admin interface
keywords: magento easyslider extension, slider, backend, easyslider system config, nivo slider, prototype slider
category: EasySlider
---

# Admin interfaces

We provide interfaces that allow you to manage settings of sliders and slides
directly in Magento backend. Depending on slider type that you’ve chosen, you
can configure a lot of effect types, some different animation and control
types. Also Easy Slider interface allows you to specify duration and frequency
for each slider.

![Manage sliders interface](/images/m1/extensions/easyslide/manage-sliders.png)

To edit the slider, please select the one you need and click on. At Slider
information you can configure the slider options, create and modify slides.

### Configuration tab

![Edit slider interface](/images/m1/extensions/easyslide/edit-slider.png)

In the `Title` field specify slider name.

In the `Identifier` field specify the unique slider’s identifier.

In the `Slider Type` field select slider type. Possible values are 'Prototype Slider' and 'Nivo Slider (jQuery)'.

In the `Status` field select Yes to enable current slider.

##### Prototype slider

When you select 'Prototype slider', you can configure the following options:

![Options for Prototype slider](/images/m1/extensions/easyslide/prototype-slider-options.png)

| Option   | Description |
|----------|-------------|
| `Controls` | select arrow or numbers type of control |
| `Width` | specify the slider block width |
| `Height` | specify the slider block height |
| `Effect` | Select animation effect that will be used for slider block. Possible values are Scroll, Speedscroll, Blend, Mosaic and Fade. |
| `Duration` | set the duration in seconds for each slide |
| `Frequency` | set the frequency in seconds for each slide |
| `Autoglide` | Select Yes to enable autoglide. The slider will be launched right after load. |

##### Nivo Slider

For "Nivo Slider" type, you can configure the following options:

![Options for Nivo slider](/images/m1/extensions/easyslide/nivo-slider-options.png)

| Option   | Description |
|----------|-------------|
| `Theme`  | select the theme of Nivo Slider type |
| `Effect` | select animation effect that will be used for slider block |
| `Slices` | specify the number of slices for animation |
| `Box Cols` | specify the number of cols for box animation |
| `Box Rows` | specify the number of rows for box animation |
| `Slide transition speed` | set the speed of slide transition for each slide |
| `How long each slide will show` | specify the time how long the slide will be shown |
| `Next & Prev navigation` | elect Yes to display arrows of next and previous navigation |
| `Use thumbnails for Control Nav` | select Yes to display slide thumbnails under the main slide |
| `Stop animation while hovering` | select Yes if you want slide to be stopped, when user hovers over it |
| `Autoglide` | select Yes to enable autoglide. Slider will start to change slides as soon as page will be loaded |

### Slides tab

At `Slides tab` you can place the description for each slide that you’ve
created. You are allowed to select the position of the description on the
slide and select its background. Also you can link the slide with any product
in the store. Slides description will help you to place content that is
readable by search engines.

![Slides tab](/images/m1/extensions/easyslide/slides-tab.png)

In order to modify the slide, please follow next steps:

 1. In the `Slide name` field specify slide name.
 2. In the `Target URL` field specify target url, that will allow user to
    follow the link after clicking on slide.
 3. In the `Sort Order` field set the sort order for created slide.
 4. In the `Is Enabled` field select Yes to enable the loaded image.
 5. In the `Description` field specify the description of the slide if you
    need.
 
    > Nivoslider doesn't have description position and background settings. It's design is based on nivo slider themes.

 6. Slide description can be placed on various positions:
     -  in the `Desc Position` field select the slide’s position from drop down
        list;
     -  in the `Desc Background` field select the background for the
        description.
