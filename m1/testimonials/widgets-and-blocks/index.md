---
layout: default
title: Testimonials Widgets and Blocks
description: magento testimonials widgets and blocks
keywords: " magento testimonials widgets and blocks "
category: Testimonials
---

# Testimonials Widgets and Blocks

There are following widget types available:

Type                                | Description
------------------------------------|------------
testimonials/widget_list            | Animated testimonials list block for side panel.
testimonials/widget_review          | Review block for side panel.
testimonials/widget_listFull        | Full testimonials list to use on custom CMS page.
testimonials/widget_form            | Testimonial form to use on custom CMS page.

### Contents

1. [Animated list widget](#animated-list-widget)
2. [Review block widget](#review-block-widget)
3. [Full testimonials list widget](#full-testimonials-list-widget)
4. [Testimonial form widget](#testimonial-form-widget)
 - [Testimonial submit form captcha via widget](#testimonial-submit-form-captcha-via-widget)

### Animated list widget

Shows rotating testimonials list in side panel.

*  Using widget:

```txt
{% raw %}{{widget type="testimonials/widget_list" show_block_design="1" items_number="5" view_time="10000" anim_duration="1000"}}{% endraw %}
```

 *  Using layout XML:

```xml
<reference name='left'>
    <block type="testimonials/widget_list" name="testimonials">
        <action method="setShowBlockDesign"><flag>0</flag></action>
        <action method="setItemsNumber"><value>5</value></action>
        <action method="setViewTime"><value>10000</value></action>
        <action method="setAnimDuration"><value>1000</value></action>
    </block>
</reference>
```

Options:

- `show_block_design` - add/remove block title and link.
- `items_number` - number of testimonials to show.
- `view_time` - view time of each item.
- `anim_duration` - speed of change animation.

### Review block widget

Shows number of testimonials and average testimonial rating in side panel.

 *  Using widget:

```txt
{% raw %}{{widget type="testimonials/widget_review" show_block_design="1"}}{% endraw %}
```

 *  Using layout XML:

```xml
<reference name='left'>
    <block type="testimonials/widget_review" name="testimonials">
        <action method="setShowBlockDesign">
            <flag>0</flag>
        </action>
    </block>
</reference>
```

Options:

- `show_block_design` - add/remove block title and link.

### Full testimonials list widget

Full testimonials list to use on custom CMS pages.

 *  Using widget:

```txt
{% raw %}{{widget type="testimonials/widget_listFull" show_title="1"}}{% endraw %}
```

 *  Using layout XML:

```xml
<reference name='content'>
    <block type="testimonials/widget_listFull" name="testimonials">
        <action method="setShowTitle">
            <flag>1</flag>
        </action>
    </block>
</reference>
```

Options:

`show_title` - show/hide testimonials page title.

### Testimonial form widget

Testimonials submit form to use on custom CMS pages.

 *  Using widget:

```txt
{% raw %}{{widget type="testimonials/widget_form"}}{% endraw %}
```

 *  Using layout XML:

```xml
<reference name='content'>
    <block type="testimonials/widget_form" name="testimonials">
    </block>
</reference>
```

##### Testimonial submit form captcha via widget

To show captcha in testimonial submit form inserted with widget, you need to
include captcha javascript to cms page. Go to `Design` tab of CMS page edit form,
insert the following xml code in `Layout Update XML` field and press `Save Page`
button:

```xml
<reference name="head">
   <action method="addJs"><file>mage/captcha.js</file></action>
</reference>
```