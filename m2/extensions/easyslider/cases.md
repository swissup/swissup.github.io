---
layout: default
title: Easy Slider
description: Magento2 slider module
keywords: >
  magento2 slider on homepage, magento2 slider extension, magento2 image
  slider, magento2 slider on product page, easyslider
category: Easy Slider
---

# Use cases

#### Using Easy Slider as Magento widget

1. Open page or block at magento admin.
2. Open page content tab and click insert widget button.
3. Select "EasySlider" widget.
4. Select slider you want to place.
5. Save changes.

#### Using Easy Slider as XML code

You can also insert Easy Slider block with XML code

```xml
<block class="Swissup\EasySlide\Block\Slider" name="easyslide.slider.name">
    <arguments>
        <argument name="identifier" xsi:type="string">slider-config-identifier</argument>
    </arguments>
</block>
```

#### Using Easy Slider as block code

You can also insert Easy Slider block in your Pages and Blocks with next code

{% raw %}{{block type="Swissup\\EasySlide\\Block\\Slider" name="easyslide.slider.name" identifier="slider-config-identifier" }}{% endraw %}


#### See also:

* [Installation](../installation/)
* [Admin interfaces](../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
