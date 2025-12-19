---
layout: default
title: Argento Stripes Homepage
description: Argento Stripes for Shopware Homepage
category: Argento Shopware
gallery:
  - href: /images/shopware/argento/stripes/home.webp
    src: /images/shopware/argento/stripes/small/home.webp
    title: Argento Stripes homepage
    w: 3000
    h: 11551
---

# Argento Stripes Homepage

{% include gallery.html images=page.gallery class="phone-up-1 tablet-up-3 photoswipe scroll mdl-typography--text-center" %}

<p class="mdl-typography--text-center"><em>Click the image to view the whole homepage</em></p>

In this article, we'll describe the process of creating the Argento Stripes Homepage. We'll describe what blocks we used and their configurations.

If you are not familiar with the Shopware Shopping Experiences yet, please check the documentation here: [Shopware 6 Shopping Experiences][shopping_experiences]

Begin with creating a new layout of full-width **Landing Page** at **Content > Shopping Experiences** page: [Creating a New Layout][new_layout]

### Slider

 - Create new **Full Width** section and set **Background Color** to `#d4d8da`.
 - Insert **Image Slider** block from the **Images** category.
 - Upload slider images on the **Content** tab and configure it on the **Settings** tab:

![Homepage Slider Settings](/images/shopware/argento/stripes/homepage/home-slider.png)

You can read about **Image Slider** block settings here: [Image Slider][image_slider].

### Top Banners

 - Create new **Full Width** section that will contain all further blocks.
 - From the **Images** category, insert **Two columns, boxed** block.
 - Upload two banner images and configure them:

![Homepage Top Banners Settings](/images/shopware/argento/stripes/homepage/home-top-banners.png)

### Products Highlight

The next few blocks are **Products Highlight** blocks from the **Commerce** category.

![Products Highlight Settings](/images/shopware/cms/highlight-settings.png)

You can read more about **Products Highlight** block settings at [Products Highlight Block][highlight] page.

### Bottom Banners

This is similar to the **Top Banners**, but uses the **Three columns, boxed** block from the **Images** category:

![Homepage Bottom Banners Settings](/images/shopware/argento/stripes/homepage/home-bottom-banners.png)

### Logo Slider

The last block is **Logo Slider** block from the **Images** category.

![Logo Slider Settings](/images/shopware/cms/logo-slider-settings.png)

You can read more about the **Logo Slider** block settings at [Logo Slider Block][logo_slider] page.

[shopping_experiences]: https://docs.shopware.com/en/shopware-6-en/content/ShoppingExperiences
[new_layout]: https://docs.shopware.com/en/shopware-6-en/content/ShoppingExperiences#creating-a-new-layout
[image_slider]: https://docs.shopware.com/en/shopware-6-en/content/ShoppingExperiences#Slider
[highlight]: /shopware/argento/stripes/cms/highlight/
[logo_slider]: /shopware/argento/stripes/cms/logo-slider/
