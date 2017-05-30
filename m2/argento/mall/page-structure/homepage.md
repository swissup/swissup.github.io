---
layout: default
title: Argento Mall homepage content structure
description: Argento Mall homepage content structure
category: Argento
---

# Homepage content

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Argento Mall` page.

Argento's homepage uses a bunch of widgets, that could be widely customized to
match various layout types and designs.

> All page elements could be structured with [Argento grid system](/m2/argento/customization/grid-system/)
> classes (col-md-8, col-md-4 etc).

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider and Banners](#slider-and-banners)
 2. [Sidebar Navigation](#sidebar-navigation)
 3. [Deal of the Week, Editor Choice, Video of the Day](#deal-of-the-week-editor-choice-video-of-the-day)
 4. [Featured Products](#featured-products)
 5. [New Products Slider](#new-products-slider)
 6. [Whole Homepage Code](#whole-homepage-code)

#### Slider and Banners

![EasySlider](/images/m2/argento/mall/homepage-content/slider-and-banners.png)

Code:

```html
{% raw %}<div class="argento-grid row callout-home-top">
    <div class="col-md-9">{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_mall"}}</div>
    <div class="col-md-3 hidden-xs">{{block class="Magento\Newsletter\Block\Subscribe" template="subscribe.phtml"}} {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_mall_home_top"}}</div>
</div>{% endraw %}
```

Slider is powered by [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

Newsletter - is a standard magento `Magento\Newsletter\Block\Subscribe` block.

Free Shipping banner is powered by [EasyBanner module](/m2/extensions/easybanners/). You can add or configure banners at `Magento Admin > Swissup > EasyBanner > Manage Banners`.

#### Sidebar Navigation

The following code is used in order to display the sidebar navigation:

```html
{% raw %}<div class="col-lg-3 visible-lg-block visible-md-block sidebar">{{block class="Magento\Theme\Block\Html\Topmenu" name="nav-homepage-left" before="-" template="Magento_Theme::html/home-menu-left.phtml"}}</div>{% endraw %}
```

#### Deal of the Week, Editor Choice, Video of the Day

![Blocks](/images/m2/argento/mall/homepage-content/blocks.png)

Code:

```html
{% raw %}<div class="col-lg-9 col-md-12">
    <div class="argento-grid">
        <div class="col-md-4 col-sm-4 col-xs-6">{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Deal of the week" products_count="1" column_count="1" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}</div>
        <div class="col-md-4 col-sm-4 col-xs-6">{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Editor's choice" attribute_code="recommended" products_count="1" column_count="1" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}</div>
        <div class="col-md-4 col-sm-4 col-xs-12">{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="video_of_the_day"}}</div>
    </div>
</div>{% endraw %}
```

Deal of the Week and Editor Choice blocks are [Highlight module](/m2/extensions/highlight/) widgets.

Video of the Day is magento CMS Block `video_of_the_day` and can be edited in
`Content > Elements > Blocks`.

Code:

```html
<div class="block block-alt video-of-day">
    <div class="block-title"><strong role="heading" aria-level="2">Video of the day</strong></div>
    <div class="block-content">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6BQfCoqbubE?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
        <p><small>Amazing Canon Rebel XSi commercial that I saw on TV the other day.</small></p>
    </div>
</div>
```

#### Featured Products

![Featured Products](/images/m2/argento/mall/homepage-content/featured-products.png)

Code:

```html
{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Featured" title="Featured Products" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
```

Featured Products block is [Highlight module](/m2/extensions/highlight/) widget.

#### New Products Slider

![New Products Slider](/images/m2/argento/mall/homepage-content/new-products-slider.png)

Code:

```html
{% raw %}<div class="new-products-slider" data-mage-init='{"slickwrapper": {"el": ".product-items", "slidesToShow": 5, "slidesToScroll": 5, "dots": false, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1}}]}}'>
   {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="30" column_count="1" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}
</div>{% endraw %}
```

New Products Slider is [Highlight module](/m2/extensions/highlight/) widget
wrapped with [Slick Carousel](/m2/extensions/slick-carousel/) slickwrapper.

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
{% raw %}<div class="argento-grid row callout-home-top">
    <div class="col-md-9">{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_mall"}}</div>
    <div class="col-md-3 hidden-xs">{{block class="Magento\Newsletter\Block\Subscribe" template="subscribe.phtml"}} {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_mall_home_top"}}</div>
</div>
<div class="argento-grid row col-home-set">
    <div class="col-lg-3 visible-lg-block visible-md-block sidebar">{{block class="Magento\Theme\Block\Html\Topmenu" name="nav-homepage-left" before="-" template="Magento_Theme::html/home-menu-left.phtml"}}</div>
    <div class="col-lg-9 col-md-12">
        <div class="argento-grid">
            <div class="col-md-4 col-sm-4 col-xs-6">{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Deal of the week" products_count="1" column_count="1" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}</div>
            <div class="col-md-4 col-sm-4 col-xs-6">{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Editor's choice" attribute_code="recommended" products_count="1" column_count="1" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}</div>
            <div class="col-md-4 col-sm-4 col-xs-12">{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="video_of_the_day"}}</div>
        </div>
    </div>
    <div class="col-lg-9 col-md-12">
        {{widget type="Swissup\Highlight\Block\ProductList\Featured" title="Featured Products" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}
        <div class="new-products-slider" data-mage-init='{"slickwrapper": {"el": ".product-items", "slidesToShow": 5, "slidesToScroll": 5, "dots": false, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1}}]}}'>
           {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="30" column_count="1" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}
        </div>
    </div>
</div>{% endraw %}
```

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
