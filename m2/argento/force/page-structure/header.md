---
layout: default
title: Argento Force Header
description: Argento Force header
category: Argento
---

# Header
{:.no_toc}

![Header](/images/m2/argento/force/header/header.png)

* TOC
{:toc}

### Header Slider

![Header Slider](/images/m2/argento/force/header/header-slider.png)

Header slider is at the most top of the page. It is visible on all pages.

This slider is CMS block with id `header_slider`. You can edit its content in Magento Admin.

#### Sampel block content

```html
<div class="swiper-container header-slider" data-mage-init='{"Swissup_Swiper/js/swiper": {"loop":true, "centeredSlides":true, "autoplay": {"delay": 10000},  "navigation":{"nextEl":".swiper-button-next", "prevEl":".swiper-button-prev"}}}'>
    <div class="swiper-wrapper">
        <div class="swiper-slide"><i class="force-icon force-icon-medium force-delivery"></i> <strong>Free Shipping</strong> <span class="visible-lg-inline">Next working day delivery available.</span></div>
        <div class="swiper-slide"><i class="force-icon force-icon-medium force-shield"></i> <strong>Customer Security</strong> <span class="visible-lg-inline">is our first goal and top priority.</span></div>
        <div class="swiper-slide"><i class="force-icon force-icon-medium force-100percent"></i> <strong>Full Support</strong> <span class="visible-lg-inline">We glad to help at every step.</span></div>
    </div>
    <div class="swiper-button-prev swiper-button-black"></div>
    <div class="swiper-button-next swiper-button-black"></div>
</div>
```

#### Swiper settings

To present block content as slider we use [Swiper](https://github.com/swissup/module-swiper/). `data-mage-init` sets options for swiper slider:

 -  `"autoplay": {"delay": 10000}` - enable slide autoplay. `delay` sets time in ms between slides change. 10000ms is 10 sec.

Feel free to change content of this slider. When you need to add new slide then place new `<div class="swiper-slide">...</div>`.


### Logo

Logo at Argento Force is on the left side of the header. You can update logo using default Magento intefaces. Check this article to find out how to [update store logo](https://docs.magento.com/m2/ce/user_guide/design/logo-upload.html).

### Menu

Manu is in the middle of the header at Argento Force. Menu is powered by [Navigation Pro](/m2/extensions/navigationpro/) module. This module has a lot of great features. Read it docs to find out more details.

Menu identifier is `argento_force_topmenu`.


### Search and Minicart

On the right side of the header you can see search and minicart icon. Search is hidden by default and show up when user clicks on its icon. Same thing for minicart. Click on bag and it shows up.

Search functionality is powered by [Ajax Search](/m2/extensions/ajaxsearch/) module. Check module docs to see what features it has.

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/force/)
