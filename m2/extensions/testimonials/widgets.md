---
layout: default
title: Testimonials Widgets and Blocks
description: magento 2 testimonials widgets and blocks
keywords: magento 2 testimonials widgets and blocks
category: Testimonials
---

# Testimonials Widgets and Blocks

There are following widget types are available:

Type                                            | Description
------------------------------------------------|------------
Swissup\Testimonials\Block\Widgets\Slider       | Testimonals Slider for content area powered by [Slick Carousel](/m2/extensions/slick-carousel/)
Swissup\Testimonials\Block\Widgets\SideList     | Animated testimonials list block for side panel.
Swissup\Testimonials\Block\Widgets\SideReview   | Review block for side panel.
Swissup\Testimonials\Block\TestimonialsList     | Full testimonials list to use on custom CMS page.
Swissup\Testimonials\Block\Widgets\Form         | Testimonial form to use on custom CMS page.

### Contents

1. [Testimonials slider widget](#testimonials-slider-widget)
2. [Animated list widget](#animated-list-widget)
3. [Review block widget](#review-block-widget)
4. [Full testimonials list widget](#full-testimonials-list-widget)
5. [Testimonial form widget](#testimonial-form-widget)

### Testimonials slider widget

Shows testimonials slider powered by [Slick Carousel](/m2/extensions/slick-carousel/)

![Slider Widget](/images/m2/testimonials/frontend/widgets/slider.gif)

 *  Using widget:

```txt
{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\Slider" items_number="6"}}{% endraw %}
```

 *  Using layout XML:

```xml
<referenceContainer name="content">
    <block class="Swissup\Testimonials\Block\Widgets\Slider" name="testimonials-slider">
        <arguments>
            <argument name="items_number" xsi:type="string">6</argument>
        </arguments>
    </block>
</referenceContainer>
```

Options:

- `items_number` - number of testimonials to show.

### Animated list widget

Shows rotating testimonials list in side panel.

![Animated list widget](/images/m2/testimonials/frontend/widgets/animated.png)

*  Using widget:

```txt
{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\SideList" hide_block_design="0" items_number="5" view_time="10000" anim_duration="1000"}}{% endraw %}
```

 *  Using layout XML:

```xml
<referenceContainer name="sidebar.main">
    <block class="Swissup\Testimonials\Block\Widgets\SideList" name="testimonials">
        <arguments>
            <argument name="hide_block_design" xsi:type="string">0</argument>
            <argument name="items_number" xsi:type="string">5</argument>
            <argument name="view_time" xsi:type="string">10000</argument>
            <argument name="anim_duration" xsi:type="string">1000</argument>
        </arguments>
    </block>
</referenceContainer>
```

Options:

- `hide_block_design` - add/remove block title and link.
- `items_number` - number of testimonials to show.
- `view_time` - view time of each item.
- `anim_duration` - speed of change animation.

### Review block widget

Shows number of testimonials and average testimonial rating in side panel.
Contains [AggregateRating](https://schema.org/AggregateRating) snippet to display store rating in search results.

![Review block widget](/images/m2/testimonials/frontend/widgets/review.png)

 *  Using widget:

```txt
{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\SideReview" hide_block_design="0"}}{% endraw %}
```

 *  Using layout XML:

```xml
<referenceContainer name="sidebar.main">
    <block class="Swissup\Testimonials\Block\Widgets\SideList" name="testimonials_review">
        <arguments>
            <argument name="hide_block_design" xsi:type="string">0</argument>
        </arguments>
    </block>
</referenceContainer>
```

Options:

- `hide_block_design` - add/remove block title and link.

### Full testimonials list widget

Full testimonials list to use on custom CMS pages.

 *  Using widget:

```txt
{% raw %}{{widget type="Swissup\Testimonials\Block\TestimonialsList"}}{% endraw %}
```

 *  Using layout XML:

```xml
<referenceContainer name="content">
    <block class="Swissup\Testimonials\Block\TestimonialsList" name="testimonials_list"></block>
</referenceContainer>
```

### Testimonial form widget

Testimonials submit form to use on custom CMS pages.

 *  Using widget:

```txt
{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\Form"}}{% endraw %}
```

 *  Using layout XML:

```xml
<referenceContainer name="content">
    <block class="Swissup\Testimonials\Block\Widgets\Form" name="testimonials_form"></block>
</referenceContainer>
```
