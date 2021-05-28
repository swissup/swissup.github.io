---
layout: default
title: Argento Essence homepage content structure
description: Argento Essence homepage content structure
category: Argento
---

# Homepage content

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Argento Essence` page.

Argento's homepage uses a bunch of widgets, that could be widely customized to
match various layout types and designs.

> All page elements are structured with [Argento grid system](/m2/argento/customization/grid-system/)
> classes (col-md-8, col-md-4 etc).

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider and Banners row](#slider-and-banners-row)
 2. [Category images row](#category-images-row)
 3. [Wide banner](#footer)
 4. [Tabs and Store Achievements blocks](#products-and-homepage-tabs)
 5. [Brands Slider](#buttons)
 6. [Whole homepage code](#whole-homepage-code)

#### Slider and Banners row

![EasySlider and EasyBanners row](/images/m2/argento/essence/homepage-content/easyslider-and-easybanners.png)

Code:

```html
<div class="argento-grid row">
    <div class="col-md-8">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_essence"}}{% endraw %}
    </div>
    <div class="col-md-4">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_essence_home_top" banner_css_class="col-xs-4 col-md-12" additional_css_class="argento-grid"}}{% endraw %}
    </div>
</div>
```

Slider is built with [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

Banners are created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Category images row

![EasyCategoryImage](/images/m2/argento/essence/homepage-content/easycategoryimages.png)

Code:

```html
<div class="row">{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}{% endraw %}</div>
```

Categories list is powered by [Easy Catalog Images](/m2/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Wide banner

![Wide homepage banner](/images/m2/argento/essence/homepage-content/wide-easybanner.png)

Code:

```html
<div class="row">{% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_essence_home_wide"}}{% endraw %}</div>
```

Wide banner is created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Tabs and Store Achievements blocks

> [This method is currently DEPRECATED]

![Tabs and store achievements](/images/m2/argento/essence/homepage-content/tabs-and-achievements.png)

Code:

```html
<div class="argento-grid row block-products-promo">
    <div class="blocks-main item col-md-8" data-mage-init='{"argentoTabs": {}}'>
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_title="View All New Products"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offers" products_count="6" column_count="3" order="default" dir="desc" template="Swissup_Highlight::product/list.phtml" mode="grid"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Coming soon" attribute_code="coming_soon" products_count="6" column_count="3" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid"}}{% endraw %}
    </div>
    <div class="sidebar blocks-secondary col-md-4">
        <div class="argento-grid">
            <div class="col-md-12 col-sm-12">{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\SideReview"}}{% endraw %}</div>
            <div class="col-md-12 col-sm-6">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Bestsellers" min_popularity="1"}}{% endraw %}</div>
            <div class="col-md-12 col-sm-6">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular Products" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Popular Products" min_popularity="1"}}{% endraw %}</div>
        </div>
    </div>
</div>
```

Product listing blocks are powered by [Highlight module](/m2/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

Store Review block - is a [Testimonials module](/m2/extensions/testimonials/) widget.
It shows average rating of approved testimonials.

As you can see, product lists on the left are grouped into tabs. This is done
with [ArgentoTabs script](/m2/argento/scripts/argento-tabs/).

#### Brands Slider

![Brands Slider](/images/m2/argento/essence/homepage-content/brands-slider.png)

Code:

```html
{% raw %}{{block class="Magento\Cms\Block\Block" block_id="brands_slider"}}{% endraw %}
```

As you can see we moved all content of brand slider element to separate CMS block with id `brands_slider`.

Brands Slider - is a static slider powered by widget of
[EasySlide module](/m2/extensions/easyslider/). Slides ID is `argento_essence_brands`. Find it at EasySlide grid in Magento Admin.

Content of `brands_slider` is below:

```html
<div class="block row widget block-promo block-carousel">
    <div class="block-title">
        <strong>Featured Brands</strong>
    </div>
    <div class="block-content">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_essence_brands"}}{% endraw %}
    </div>
</div>
```

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
{% raw %}<div class="argento-grid row">
    <div class="col-md-8">
        {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_essence"}}
    </div>
    <div class="col-md-4">
        {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_essence_home_top" banner_css_class="col-xs-4 col-md-12" additional_css_class="argento-grid"}}
    </div>
</div>

<div class="row">{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}</div>

<div class="row">{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_essence_home_wide"}}</div>

<div class="argento-grid row block-products-promo">
    <div class="blocks-main item col-md-8 argento-tabs" data-mage-init='{"argentoTabs": {}}'>
        {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_title="View All New Products"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offers" products_count="6" column_count="3" order="default" dir="desc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_title="View All On Sale Products"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Coming soon" attribute_code="coming_soon" products_count="6" column_count="3" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid"}}
    </div>
    <div class="sidebar blocks-secondary col-md-4">
        <div class="argento-grid">
            <div class="col-md-12 col-sm-12">{{widget type="Swissup\Testimonials\Block\Widgets\SideReview"}}</div>
            <div class="col-md-12 col-sm-6">{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Bestsellers" min_popularity="1"}}</div>
            <div class="col-md-12 col-sm-6">{{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular Products" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Popular Products" min_popularity="1"}}</div>
        </div>
    </div>
</div>

{{block class="Magento\Cms\Block\Block" block_id="brands_slider"}}{% endraw %}
```


##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
