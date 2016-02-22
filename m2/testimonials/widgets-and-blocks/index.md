---
layout: default
title: Testimonials Widgets and Blocks
description: magento testimonials widgets and blocks
keywords: " magento testimonials widgets and blocks "
category: Testimonials
---

# Testimonials Widgets and Blocks

There are following widget types are available:

Type                                            | Description
------------------------------------------------|------------
Swissup\Testimonials\Block\Widgets\SideList     | Animated testimonials list block for side panel.
Swissup\Testimonials\Block\Widgets\SideReview   | Review block for side panel.
Swissup\Testimonials\Block\TestimonialsList     | Full testimonials list to use on custom CMS page.
Swissup\Testimonials\Block\Widgets\Form         | Testimonial form to use on custom CMS page.

### Contents

1. [Animated list widget](#animated-list-widget)
2. [Review block widget](#review-block-widget)
3. [Full testimonials list widget](#full-testimonials-list-widget)
4. [Testimonial form widget](#testimonial-form-widget)

### Animated list widget

Shows rotating testimonials list in side panel.

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
