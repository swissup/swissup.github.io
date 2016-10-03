---
layout: default
title: Argento Flat homepage content structure
description: Argento Flat homepage content structure
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

 1. [Slider](#slider)
 2. [Category images](#category-images)
 3. [Wide banner](#wide-banner)
 4. [New, Special and Bestselling Products](#new-special-and-bestselling-products)
 5. [Why Choose Us](#why-choose-us)
 6. [About Us](#about-us)
 7. [Brands Slider](#brands-slider)
 8. [Whole homepage code](#whole-homepage-code)

#### Slider

![EasySlider](/images/m2/argento/flat/homepage-content/easyslider.png)

Code:

```html
<div class="jumbotron jumbotron-image no-padding">
    <div class="cover cover-pastel"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="container">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_flat"}}{% endraw %}
    </div>
</div>
```

Slider is powered by [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

#### Category images

![EasyCategoryImage](/images/m2/argento/flat/homepage-content/easycategoryimages.png)

Code:

```html
<div class="jumbotron jumbotron-pastel jumbotron-inverse no-padding-top hero">
    <div class="container">
        <div class="row">
            <div class="block-title">
                <strong>Shop Our Store for</strong>
                <p class="subtitle no-margin">more than 25,000 health products including vitamins, herbs, sport supplements, diet and much more!</p>
            </div>
            {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="1" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}{% endraw %}
        </div>
    </div>
</div>
```

Categories list is powered by [Easy Catalog Images](/m2/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Wide banner

![Wide homepage banner](/images/m2/argento/flat/homepage-content/wide-easybanner.png)

Code:

```html
<div class="jumbotron jumbotron-pastel-alt no-padding">
    <div class="container">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_flat_home_wide"}}{% endraw %}
    </div>
</div>
```

Wide banner is created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### New, Special and Bestselling Products

New Products | Special Offers | Bestsellers
-------------|----------------|------------
<img src="/images/m2/argento/flat/homepage-content/new-products.png" class="noborder" alt="New Products" width="300"/> | <img src="/images/m2/argento/flat/homepage-content/special-products.png" class="noborder" alt="Special Products" width="300"/> | <img src="/images/m2/argento/flat/homepage-content/bestsellers.png" class="noborder" alt="Bestsellers" width="300"/>

```html
<div class="jumbotron hero">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="top" page_link_title="Browse all new products at our store &raquo;"}}{% endraw %}
    </div>
</div>

<div class="jumbotron jumbotron-pattern hero">
    <div class="cover"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="stub"></div>
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offer" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="top" page_link_title="Browse all on sale products at out store &raquo;"}}{% endraw %}
    </div>
</div>

<div class="jumbotron hero no-padding-top">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="4" column_count="4" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_position="top" page_link_title="Browse all bestseller products at our store &raquo;" min_popularity="1"}}{% endraw %}
    </div>
</div>
```

Product listing blocks are powered by [Highlight module](/m2/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Why choose us

![Why choose us block](/images/m2/argento/flat/homepage-content/why-choose-us.png)

```html
<div class="jumbotron hero">
    <div class="stub"></div>
    <div class="container">
        <div class="block block-benefits">
            <div class="block-title wow fadeInDown" data-wow-duration="0.5s"><strong>Why choose us</strong></div>
            <div class="block-content argento-grid">
                <div class="col-md-3 wow bounceInLeft" data-wow-delay="0.2s">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tags fa-stack-1x fa-inverse"></i></span>
                    <h3>Low Pricing</h3>
                    <p>Meet all types for your body's needs, that are healthy for you and for your pocket. Click for big savings.</p>
                </div>
                <div class="col-md-3 wow bounceInLeft">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>
                    <h3>Huge Selection</h3>
                    <p>Make your healthy choice using the huge variety of vitamins and sports nutrition. Let your transformation go on.</p>
                </div>
                <div class="col-md-3 wow bounceInRight">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-birthday-cake fa-stack-1x fa-inverse"></i></span>
                    <h3>Reward Points</h3>
                    <p>Get reward points by boosting your healthy activity online. Stay with us and gain more.</p>
                </div>
                <div class="col-md-3 wow bounceInRight" data-wow-delay="0.2s">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments fa-stack-1x fa-inverse"></i></span>
                    <h3>Ask Experts</h3>
                    <p>Have a question? Ask an expert and get complete online support. We are open for you.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### About us

![Tabs and store achievements](/images/m2/argento/flat/homepage-content/about-us.png)

```html
<div class="jumbotron jumbotron-bright jumbotron-inverse hero">
    <div class="stub"></div>
    <div class="container">
        <div class="block block-about wow fadeIn"  data-wow-delay="0.2s">
            <div class="block-title"><strong>About us</strong></div>
            <div class="block-content">
                <p>
                    Natural Herbs company was found with idea to ensure users more natural healthy care.
                    The company is making name for itself as an advanced store with reliable service. Our
                    online store works with leaders worldwide producing vitamins, herbs and sport nutrition
                    supplements. We provide high-quality products that suit your needs and fit your budget.
                </p>
                <p>
                    Natural Herbs is aiming to become your full-service friend. We focus on keeping you motivated
                    improve your health. Build your own body with us! We'll help you to reach your goal.
                </p>
            </div>
        </div>
    </div>
</div>
```

#### Brands Slider

![Brands Slider](/images/m2/argento/flat/homepage-content/brands-slider.png)

Code:

```html
<div class="jumbotron hero">
    <div class="stub"></div>
    <div class="cover cover-dark"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="container">
        <div class="block row widget block-carousel">
            <div class="block-title">
                <strong>Popular Brands</strong>
                <p class="subtitle">check most trusted brands from more then 50 leading manufactures presented at our store.</p>
            </div>
            <div class="block-content">
                <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "variableWidth": true, "swipeToSlide": true}}'>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/life_extension.gif'}}{% endraw %}" alt="Life Extension"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/gnc.gif'}}{% endraw %}" alt="GNC"/></a>
                    ...
                </div>
            </div>
        </div>
    </div>
</div>
```

Brands Slider - is a static slider powered by
[SlickCarousel module](/m2/extensions/slick-carousel/).

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
<div class="jumbotron jumbotron-image no-padding">
    <div class="cover cover-pastel"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="container">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_flat"}}{% endraw %}
    </div>
</div>

<div class="jumbotron jumbotron-pastel jumbotron-inverse no-padding-top hero">
    <div class="container">
        <div class="row">
            <div class="block-title">
                <strong>Shop Our Store for</strong>
                <p class="subtitle no-margin">more than 25,000 health products including vitamins, herbs, sport supplements, diet and much more!</p>
            </div>
            {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="1" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}{% endraw %}
        </div>
    </div>
</div>

<div class="jumbotron jumbotron-pastel-alt no-padding">
    <div class="container">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_flat_home_wide"}}{% endraw %}
    </div>
</div>

<div class="jumbotron hero">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\NewList" title="New Products" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="top" page_link_title="Browse all new products at our store &raquo;"}}{% endraw %}
    </div>
</div>

<div class="jumbotron jumbotron-pattern hero">
    <div class="cover"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="stub"></div>
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Onsale" title="Special Offer" products_count="4" column_count="4" order="default" dir="desc" template="product/widget/content/grid.phtml" show_page_link="1" page_link_position="top" page_link_title="Browse all on sale products at out store &raquo;"}}{% endraw %}
    </div>
</div>

<div class="jumbotron hero no-padding-top">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\Bestsellers" title="Bestsellers" products_count="4" column_count="4" template="product/widget/content/grid.phtml" period="P6M" show_page_link="1" page_link_position="top" page_link_title="Browse all bestseller products at our store &raquo;" min_popularity="1"}}{% endraw %}
    </div>
</div>

<div class="jumbotron hero">
    <div class="stub"></div>
    <div class="container">
        <div class="block block-benefits">
            <div class="block-title wow fadeInDown" data-wow-duration="0.5s"><strong>Why choose us</strong></div>
            <div class="block-content argento-grid">
                <div class="col-md-3 wow bounceInLeft" data-wow-delay="0.2s">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tags fa-stack-1x fa-inverse"></i></span>
                    <h3>Low Pricing</h3>
                    <p>Meet all types for your body's needs, that are healthy for you and for your pocket. Click for big savings.</p>
                </div>
                <div class="col-md-3 wow bounceInLeft">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>
                    <h3>Huge Selection</h3>
                    <p>Make your healthy choice using the huge variety of vitamins and sports nutrition. Let your transformation go on.</p>
                </div>
                <div class="col-md-3 wow bounceInRight">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-birthday-cake fa-stack-1x fa-inverse"></i></span>
                    <h3>Reward Points</h3>
                    <p>Get reward points by boosting your healthy activity online. Stay with us and gain more.</p>
                </div>
                <div class="col-md-3 wow bounceInRight" data-wow-delay="0.2s">
                    <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments fa-stack-1x fa-inverse"></i></span>
                    <h3>Ask Experts</h3>
                    <p>Have a question? Ask an expert and get complete online support. We are open for you.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="jumbotron jumbotron-bright jumbotron-inverse hero">
    <div class="stub"></div>
    <div class="container">
        <div class="block block-about wow fadeIn"  data-wow-delay="0.2s">
            <div class="block-title"><strong>About us</strong></div>
            <div class="block-content">
                <p>
                    Natural Herbs company was found with idea to ensure users more natural healthy care.
                    The company is making name for itself as an advanced store with reliable service. Our
                    online store works with leaders worldwide producing vitamins, herbs and sport nutrition
                    supplements. We provide high-quality products that suit your needs and fit your budget.
                </p>
                <p>
                    Natural Herbs is aiming to become your full-service friend. We focus on keeping you motivated
                    improve your health. Build your own body with us! We'll help you to reach your goal.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="jumbotron hero">
    <div class="stub"></div>
    <div class="cover cover-dark"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="container">
        <div class="block row widget block-carousel">
            <div class="block-title">
                <strong>Popular Brands</strong>
                <p class="subtitle">check most trusted brands from more then 50 leading manufactures presented at our store.</p>
            </div>
            <div class="block-content">
                <div data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "variableWidth": true, "swipeToSlide": true}}'>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/life_extension.gif'}}{% endraw %}" alt="Life Extension"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/gnc.gif'}}{% endraw %}" alt="GNC"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/mega_food.gif'}}{% endraw %}" alt="Mega Food" /></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/nordic_naturals.gif'}}{% endraw %}" alt="Nordic Naturals"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/life_extension.gif'}}{% endraw %}" alt="Life Extension"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/gnc.gif'}}{% endraw %}" alt="GNC"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/mega_food.gif'}}{% endraw %}" alt="Mega Food"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/nordic_naturals.gif'}}{% endraw %}" alt="Nordic Naturals"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/life_extension.gif'}}{% endraw %}" alt="Life Extension"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/gnc.gif'}}{% endraw %}" alt="GNC"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/mega_food.gif'}}{% endraw %}" alt="Mega Food"/></a>
                    <a href="#"><img src="{% raw %}{{view url='images/catalog/brands/nordic_naturals.gif'}}{% endraw %}" alt="Nordic Naturals"/></a>
                </div>
            </div>
        </div>
    </div>
</div>
```

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
