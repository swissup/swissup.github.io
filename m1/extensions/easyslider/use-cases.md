---
layout: default
title: Use Cases
description: magento easyslider module use cases
keywords: "easyslider use case, easyslider extension"
category: Easy Slider
---

# Use cases

 *  [Easy Slider as Magento widget](#easy-slider-as-magento-widget)
 *  [Easy Slider as XML code](#easy-slider-as-xml-code)
 *  [Easy Slider as block code](#easy-slider-as-block-code)

### Easy Slider as Magento widget

 1. Open cms page or static block at magento admin.
 2. Open page content tab and click insert widget button.
 3. Select "Easyslider" widget.
 4. Select slider you want to place.
 5. Save changes.

### Easy Slider as XML code

You can also insert Easy Slider block with XML code. In order to change,
please connect to FTP server and find your store folder with Magento files.
Then follow the `app/design/frontend/base/default/layout/tm/easyslider.xml`.
Open file to be edited. Search `<catalog_product_view>` section and make changes in reference name.

```xml
<reference name="content">
        <block type="easyslide/slider" name="homepage.slideridentificator">
            <action method="setSliderId">
                <id>slideridentificator</id>
            </action>
        </block>
</reference>
```

### Easy Slider as block code

You can also insert Easy Slider block in your CMS pages and static blocks
files with next code:

```html
{% raw %}{{block type="easyslide/slider" name="homepage.slideridentificator" slider_id="slideridentificator" }}{% endraw %}
```


---

Please, feel free to contact us about any additional questions:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)