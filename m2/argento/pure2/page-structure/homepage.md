---
layout: default
title: Argento Pure2 homepage content structure
description: Argento Pure2 homepage content structure
category: Argento
---

# Homepage content

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Argento Pure2` page.

Argento's homepage uses a bunch of widgets, that could be widely customized to
match various layout types and designs.

> All page elements could be structured with [Argento grid system](/m2/argento/customization/grid-system/)
> classes (col-md-8, col-md-4 etc).

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider](#slider)
 2. [Category Images](#category-images)
 4. [Product Tabs](#product-tabs)
 7. [Brands Slider](#brands-slider)
 3. [Wide Banner](#wide-banner)
 8. [Whole homepage code](#whole-homepage-code)

#### Slider

![EasySlider](/images/m2/argento/pure2/homepage-content/easyslider.png)

Code:

```html
{% raw %}<div class="jumbotron jumbotron-image no-padding">
    {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_pure2"}}
</div>{% endraw %}
```

Slider is powered by [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

#### Category images

![EasyCategoryImage](/images/m2/argento/pure2/homepage-content/easycategoryimages.png)

Code:

```html
{% raw %}<div class="jumbotron">
    <div class="container">
        <div class="block block-subcategories">
            <div class="block-title">
                <strong>The Essentials</strong>
            </div>
            {{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}
        </div>
    </div>
</div>{% endraw %}
```

Categories list is powered by [Easy Catalog Images](/m2/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Product Tabs

![Product Tabs](/images/m2/argento/pure2/homepage-content/product-tabs.png)

```html
{% raw %}<div class="jumbotron">
    <div class="container" data-mage-init='{"argentoTabs": {}}'>
        {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="Shop New"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offer" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="Shop Sale"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="6" column_count="3" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_title="Shop Bestsellers" min_popularity="1"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular" products_count="6" column_count="3" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_title="Shop Popular" min_popularity="1"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Editor's Choice" attribute_code="recommended" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml"}}
    </div>
</div>{% endraw %}
```

Product listing blocks are powered by [Highlight module](/m2/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Brands Slider

![Brands Slider](/images/m2/argento/pure2/homepage-content/brands-slider.png)

Code:

```html
{% raw %}<div class="block widget block-carousel">
    <div class="block-title">
        <strong>Our Brands</strong>
    </div>
    <div class="block-content">
        <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "variableWidth": true, "swipeToSlide": true}}'>
            <a href="#"><img src="{{view url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
            <a href="#"><img src="{{view url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
        </div>
    </div>
</div>{% endraw %}
```

Brands Slider - is a static slider powered by
[SlickCarousel module](/m2/extensions/slick-carousel/).

#### Wide banner

![Wide homepage banner](/images/m2/argento/pure2/homepage-content/wide-easybanner.png)

Code:

```html
{% raw %}<div class="a-center">
   {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_pure2_home_wide"}}
</div>{% endraw %}
```

Wide banner is created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
{% raw %}<div class="jumbotron jumbotron-image no-padding">
    {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_pure2"}}
</div>

<div class="jumbotron">
    <div class="container">
        <div class="block block-subcategories">
            <div class="block-title">
                <strong>The Essentials</strong>
            </div>
            {{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}
        </div>
    </div>
</div>

<div class="jumbotron">
    <div class="container" data-mage-init='{"argentoTabs": {}}'>
        {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="Shop New"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offer" products_count="6" column_count="3" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_title="Shop Sale"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="6" column_count="3" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_title="Shop Bestsellers" min_popularity="1"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Popular" title="Popular" products_count="6" column_count="3" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_title="Shop Popular" min_popularity="1"}}
        {{widget type="Swissup\Highlight\Block\ProductList\Attribute\Yesno" title="Editor's Choice" attribute_code="recommended" products_count="6" column_count="3" order="default" dir="asc" template="product/widget/content/grid.phtml"}}
    </div>
</div>

<div class="jumbotron">
    <div class="container">
        <div class="block widget block-carousel">
            <div class="block-title">
                <strong>Our Brands</strong>
            </div>
            <div class="block-content">
                <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "variableWidth": true, "swipeToSlide": true}}'>
                    <a href="#"><img src="{{view url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                    <a href="#"><img src="{{view url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                </div>
            </div>
        </div>

        <div class="a-center">
            {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_pure2_home_wide"}}
        </div>
    </div>
</div>{% endraw %}
```

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
