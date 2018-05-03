---
layout: default
title: Argento Luxury homepage content structure
description: Argento Luxury homepage content structure
category: Argento
---

# Homepage content

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Argento Luxury` page.

Argento's homepage uses a bunch of widgets, that could be widely customized to
match various layout types and designs.

> All page elements could be structured with [Argento grid system](/m2/argento/customization/grid-system/)
> classes (col-md-8, col-md-4 etc).

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider](#slider)
 2. [Category Images](#category-images)
 3. [New Products](#new-products)
 4. [Wide Banner](#wide-banner)
 5. [Benefits Block](#benefits-block)
 6. [Brands Slider](#brands-slider)
 7. [Whole homepage code](#whole-homepage-code)

#### Slider

![EasySlider](/images/m2/argento/luxury/homepage-content/easyslider.png)

Code:

```html
{% raw %}<div class="jumbotron jumbotron-image no-padding">
    {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_luxury"}}
</div>{% endraw %}
```

Slider is powered by [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

#### Category images

![EasyCategoryImage](/images/m2/argento/luxury/homepage-content/easycategoryimages.png)

Code:

```html
{% raw %}<div class="jumbotron no-padding">
    <div class="container">
        <div class="row">
            {{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="5" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="Swissup_Easycatalogimg::list.phtml"}}
        </div>
    </div>
</div>{% endraw %}
```

Categories list is powered by [Easy Catalog Images](/m2/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

> Note: Please, upload images in `Catalog > Categories > [your category]` for thumbnails field. They should have dimensions: `width="382px"` and `height="565px"`

#### New Products

![Highlight](/images/m2/argento/luxury/homepage-content/highlight.png)

Code:

```html
{% raw %}<div class="jumbotron">
    <div class="container">
        <div class="row">
            {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Arrivals" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="bottom" page_link_title="Shop Now" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}
        </div>
    </div>
</div>{% endraw %}
```

New Products block is powered by [Highlight](/m2/extensions/highlight/).
In order to change block options you can use Magento's built-in widget editor,
or you can manually change appropriate attribute in code above.

#### Wide banner

![Wide homepage banner](/images/m2/argento/luxury/homepage-content/wide-easybanner.png)

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_luxury_home"}}
    </div>
</div>{% endraw %}
```

Wide banner is created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Benefits Block

![Benefits Block](/images/m2/argento/luxury/homepage-content/benefits.png)

Code:

```html
{% raw %}<div class="jumbotron hero">
    <div class="container">
        <div class="block block-benefits">
            <div class="block-content argento-grid">
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                    <h4>Free Delivery</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                    <h4>Secure Payment</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                    <h4>24h Customer Service</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

#### Brands Slider

![Brands Slider](/images/m2/argento/luxury/homepage-content/brands-slider.png)

Code:

```html
{% raw %}<div class="jumbotron jumbotron-slick">
    <div class="container">
        <div class="block widget block-carousel">
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
    </div>
</div>{% endraw %}
```

Brands Slider - is a static slider powered by
[SlickCarousel module](/m2/extensions/slick-carousel/).

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
{% raw %}<div class="jumbotron jumbotron-image no-padding">
    {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_luxury"}}
</div>
<div class="jumbotron no-padding">
    <div class="container">
        <div class="row">
            {{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="5" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="Swissup_Easycatalogimg::list.phtml"}}
        </div>
    </div>
</div>
<div class="jumbotron">
    <div class="container">
        <div class="row">
            {{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Arrivals" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="bottom" page_link_title="Shop Now" conditions_encoded="a:1:[i:1;a:4:[s:4:`type`;s:50:`Magento|CatalogWidget|Model|Rule|Condition|Combine`;s:10:`aggregator`;s:3:`all`;s:5:`value`;s:1:`1`;s:9:`new_child`;s:0:``;]]"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_luxury_home"}}
    </div>
</div>
<div class="jumbotron hero">
    <div class="container">
        <div class="block block-benefits">
            <div class="block-content argento-grid">
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                    <h4>Free Delivery</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                    <h4>Secure Payment</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
                <div class="col-md-4">
                    <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                    <h4>24h Customer Service</h4>
                    <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-slick">
    <div class="container">
        <div class="block widget block-carousel">
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
    </div>
</div>{% endraw %}
```

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
