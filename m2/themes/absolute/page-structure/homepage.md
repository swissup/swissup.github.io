---
layout: default
title: Absolute Theme homepage content structure
description: Absolute Theme homepage content structure
category: Absolute Theme
---

# Homepage content

Absolute Theme homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Absolute` page.

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider](#slider)
 3. [New products](#new-products)
 4. [Sidebar banners](#sidebar-banners)
 5. [Featured products slider](#featured-products-slider)
 6. [Whole homepage code](#whole-homepage-code)

#### Slider

![Slider](/images/m2/themes/absolute/customization/structure-homepage/slider.png)

Code:

```html
{% raw %}<div class="homepage-slider" >
    <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": true, "rows": 0}}'>
        <div><img src="{{view url='images/slider/slide1.jpg'}}" alt=""/></div>
        <div><img src="{{view url='images/slider/slide2.jpg'}}" alt=""/></div>
        <div><img src="{{view url='images/slider/slide3.jpg'}}" alt=""/></div>
    </div>
</div>{% endraw %}
```

#### New Products

![Wide homepage banner](/images/m2/themes/absolute/customization/structure-homepage/new-products.png)

Code:

```html
{% raw %}{{widget type="Magento\Catalog\Block\Product\Widget\NewWidget" display_type="new_products" products_count="8" template="product/widget/new/content/new_grid.phtml"}}{% endraw %}
```

#### Sidebar Banners

`homepage_callout` - is a CMS block. You can find it at _Content > Blocks_ page.

![Sidebar blocks](/images/m2/themes/absolute/customization/structure-homepage/sidebar.png)

```html
{% raw %}<div class="home-callouts">
    <div class="callout callout1">
        <img src="{{view url='images/callout1.png'}}" alt="" />
    </div>
    <div class="callout callout2">
        <img src="{{view url='images/callout2.png'}}" alt="" />
    </div>
</div>{% endraw %}
```

#### Featured Products Slider

This slider is a `featured` CMS Block. You can find it at _Content > Blocks_ page.

![Featured Products Slider](/images/m2/themes/absolute/customization/structure-homepage/featured-products-slider.png)

Code:

```html
{% raw %}{{widget type="Magento\CatalogWidget\Block\Product\ProductsList" title="Featured Products" products_count="10" template="product/featured.phtml" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" type_name="Catalog Products List"}}{% endraw %}
```

### Whole homepage code

Content:

```html
{% raw %}<div class="homepage-slider">
    <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": true, "rows": 0}}'>
        <div><img src="{{view url='images/slider/slide1.jpg'}}" alt=""/></div>
        <div><img src="{{view url='images/slider/slide2.jpg'}}" alt=""/></div>
        <div><img src="{{view url='images/slider/slide3.jpg'}}" alt=""/></div>
    </div>
</div>
{{widget type="Magento\Catalog\Block\Product\Widget\NewWidget" display_type="new_products" products_count="8" template="product/widget/new/content/new_grid.phtml"}}{% endraw %}
```

Layout update XML:

```xml
<referenceContainer name="sidebar.additional">
    <block class="Magento\Cms\Block\Block" name="homepage_callout" before="-">
        <arguments>
            <argument name="block_id" xsi:type="string">homepage_callout</argument>
        </arguments>
    </block>
    <block class="Magento\Newsletter\Block\Subscribe" name="form.subscribe.right" as="subscribe_right" template="subscribe_right.phtml"/>
</referenceContainer>
<referenceContainer name="page.bottom">
    <block class="Magento\Cms\Block\Block" name="featured">
        <arguments>
            <argument name="block_id" xsi:type="string">featured</argument>
        </arguments>
    </block>
</referenceContainer>
```

##### Next up

 -  [Absolute Theme docs homepage](/m2/themes/absolute/)
