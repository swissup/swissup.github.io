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

![Tabs and store achievements](/images/m2/argento/essence/homepage-content/tabs-and-achievements.png)

Code:

```html
<div class="argento-grid row block-products-promo">
    <div class="blocks-main item col-md-8" data-mage-init='{"argentoTabs": {}}'>
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="View All New Products" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offers" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Coming soon" attribute_code="coming_soon" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}
    </div>
    <div class="sidebar blocks-secondary col-md-4">
        <div class="argento-grid">
            <div class="col-md-12 col-sm-12">{% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\SideReview"}}{% endraw %}</div>
            <div class="col-md-12 col-sm-6">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Bestsellers" min_popularity="1" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}</div>
            <div class="col-md-12 col-sm-6">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular Products" products_count="2" template="product/widget/column/list.phtml" period="P6M" show_page_link="1" page_link_title="View All Popular Products" min_popularity="1" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}{% endraw %}</div>
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
<div class="block row widget block-promo block-carousel">
    <div class="block-title">
        <strong>Featured Brands</strong>
    </div>
    <div class="block-content">
        <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "variableWidth": true, "swipeToSlide": true}}'>
            <div><a href="#"><img src="{% raw %}{{view url='images/brands/sony.jpg'}}{% endraw %}" alt="" width="128" height="73"/></a></div>
            <div><a href="#"><img src="{% raw %}{{view url='images/brands/apple.jpg'}}{% endraw %}" alt="" width="70" height="73"/></a></div>
            ...
        </div>
    </div>
</div>
```

Brands Slider - is a static slider powered by
[SlickCarousel module](/m2/extensions/slick-carousel/).

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
