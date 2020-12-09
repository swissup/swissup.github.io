---
layout: default
title: Easy Slider Use Cases
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

#### Missing styles at Magento 2 theme

It can occure at Zemez or Ecomwares themes.

Because of their implamantation those themes doesn't include styles from `web/css/source/_module.less`.

So to fix missing styles you have to create additional less-file and xml layout update.

Go to your theme directory. It can be either in `vendor` directory or in `app/design/frontend`. Create files:

 -  `Swissup_EasySlide/web/css/easyslide.less`

    ```css
    @media-common: true;
    @indent__s: 10px;

    @import './source/_module.less';
    ```

 -  `Swissup_EasySlide/layout/default.xml`

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <head>
            <css src="Swissup_EasySlide::css/easyslide.css" />
        </head>
    </page>
    ```

When both files created redeploy theme static content and flush Magento cache.

#### See also:

* [Installation](../installation/)
* [Admin interfaces](../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
