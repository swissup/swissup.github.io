---
layout: default
title: Slick Carousel Troubleshooting
description: Common issues with Slick Carousel for Magento 2
keywords: slick carousel troubleshooting, lazy load, lazyload
category: SlickCarousel
---

# Troubleshooting

### Contents

 1. [Lazy Load](#lazy-load)

### Lazy Load

In order to make lazy load to work you need to apply the following changes into
your slider:

 1. Use `data-lazy` attribute instead of `src`

    ```html
    {% raw %}<div data-mage-init='{"slick": {"slidesToShow": 1, "swipeToSlide": true}}'>
        <img data-lazy="{{media url='wysiwyg/sky-skyline-buildings-new-york.jpg'}}" alt="" />
        <img data-lazy="{{media url='wysiwyg/pexels-photo-28452.jpg'}}" alt="" />
    </div>{% endraw %}
    ```

 2. Wrap each image into `div`

    ```html
    {% raw %}<div data-mage-init='{"slick": {"slidesToShow": 1, "swipeToSlide": true}}'>
        <div><img data-lazy="{{media url='wysiwyg/sky-skyline-buildings-new-york.jpg'}}" alt="" /></div>
        <div><img data-lazy="{{media url='wysiwyg/pexels-photo-28452.jpg'}}" alt="" /></div>
    </div>{% endraw %}
    ```

That's all.
