---
layout: default
title: Slick Carousel Usage
description: How to use Slick Carousel for Magento 2
keywords: slick carousel, slider, static content slider, products slider, products carousel
category: SlickCarousel
---

# Slick Carousel Usage

### Contents

 1. [Basic Usage](#basic-usage) (Static content carousel)
 2. [Advanced Usage](#advanced-usage) (Product listing carousel)
 3. [Slick Carousel parameters](#parameters)

### Basic Usage

Let's add a nice static carousel to the Argento's homepage. We'll use a `slick`
plugin to call a carousel on a static content.


 1. Navigate to `Content > Pages` and select appropriate homepage.

    ![Pages grid](/images/m2/slick-carousel/usage/basic/pages-grid.png)

 2. Insert slider images using "Insert Image..." button.

    ![Homepage content with slides](/images/m2/slick-carousel/usage/basic/homepage-content-slides.png)

 3. Wrap images into `div` with specified slick [parameters](#parameters):

    ```html
    <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 2, "swipeToSlide": true, "centerMode": true, "rows": 0}}'>
        ...
    </div>
    ```

    ![Homepage conent with slider](/images/m2/slick-carousel/usage/basic/homepage-content-slider.png)

 4. Save the page and navigate to your homepage frontend:

    ![Basic Carousel at the homepage](/images/m2/slick-carousel/usage/basic/2slides-center-mode.png)

### Advanced Usage

Let's transform Luma's homepage product listing block into Slick Carousel.
We'll use `slickwrapper` plugin to call a carousel on a dynamically generated
content.

 1. Navigate to `Content > Blocks`and select Luma's homepage block.

    ![Block's grid](/images/m2/slick-carousel/usage/advanced/blocks-grid.png)

 2. Find a widget that inserts product listing block.

    ![Product listing widget](/images/m2/slick-carousel/usage/advanced/product-listing-widget.png)

 3. Wrap this widget into `div` with `el` option and specified slick parameters:

    ```html
    <div data-mage-init='{"slickwrapper": {"el": ".product-items", "slidesToShow": 5, "slidesToScroll": 5, "dots": true}}'>
        ...
    </div>
    ```

    ![Product listing widget wrapped with slider](/images/m2/slick-carousel/usage/advanced/product-listing-widget-slider.png)

 4. Save the page and navigate to your homepage frontend:

    ![Product listing carousel](/images/m2/slick-carousel/usage/advanced/product-listing-carousel.png)

### Parameters

Full list of available [options][slick_options] and [examples][slick_examples]
is available at slick's carousel [official site][slick_site].

[slick_site]: http://kenwheeler.github.io/slick/
[slick_options]: http://kenwheeler.github.io/slick/#settings
[slick_examples]: http://kenwheeler.github.io/slick/#demos

##### Next up

- [Back to docs homepage](../)
- [Lazy Load](../troubleshooting/#lazy-load)
