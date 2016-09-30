---
layout: default
title: Argento Flat theme Homepage
description: Argento Flat theme homepage
keywords: "ArgentoFlat, flat, argento theme, homepage, slider, easycatalogimages, tabs, highlight, brands, banner"
category: Argento
---

# Argento Flat theme Homepage

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Cms > Pages` page.

### Contents

 1. [Slider](#slider)
 2. [Category images row](#category-images-row)
 3. [Wide banner](#wide-banner)
 4. [New, Special and Bestselling Products](#new-special-and-bestselling-products)
 5. [Why choose us](#why-choose-us)
 6. [About us](#about-us)
 7. [Brands Slider](#brands-slider)
 7. [Whole homepage code](#whole-homepage-content)

#### Slider

![EasySlider and EasyBanners row](/images/argento/flat/homepage/slider.png)

Code:

```html
{% raw %}<div class="row jumbotron jumbotron-slider jumbotron-image">
    <div class="col-md-12">
        <div class="cover cover-pastel">
            <div class="left triangle"></div>
            <div class="right triangle"></div>
        </div>
        <div class="container wow fadeIn">
            {{widget type="easyslide/insert" slider_id="argento_flat"}}
        </div>
    </div>
</div>{% endraw %}
```

Slider is built with [EasySlide module](/m1/extensions/easyslider/) and can be
edited at `Templates-Master > Easyslide` page.

#### Category images row

![EasyCategoryImage](/images/argento/flat/homepage/categories.png)

Code:

```html
{% raw %}<div class="row jumbotron jumbotron-pastel jumbotron-inverse">
    <div class="col-md-12">
        <div class="container">
            <div class="hero block block-categories">
                <div class="block-title"><span>Shop Our Store for</span><p class="subtitle no-margin">more than 25,000 health products including vitamins, herbs, sport supplements, diet and much more!</p></div>
                <div class="block-content">
                    {{widget type="easycatalogimg/widget_list" background_color="34,147,146" category_count="4" subcategory_count="2" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

Categories list is powered by [Easy Catalog Images](/m1/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Wide banner

![Wide homepage banner](/images/argento/flat/homepage/wide-banner.png)

Code:

```html
{% raw %}<div class="row jumbotron jumbotron-pastel-alt no-padding">
    <div class="col-md-12">
        <div class="container hero block-homepage-banner">
            {{widget type="easybanner/widget_placeholder" placeholder_name="argento-flat-home"}}
        </div>
    </div>
</div>{% endraw %}
```

Wide banner is created with [EasyBanner module](/m1/extensions/easybanners/) and
available to edit at `Templates-Master > Easy Banner > Manage Banners`
page.

#### New, Special and Bestselling Products

New Products | Special Offers | Bestsellers
-------------|----------------|------------
<img src="/images/argento/flat/homepage/new-products.png" class="noborder" alt="New Products" width="300"/> | <img src="/images/argento/flat/homepage/special-products.png" class="noborder" alt="Special Products" width="300"/> | <img src="/images/argento/flat/homepage/bestsellers.png" class="noborder" alt="Bestsellers" width="300"/>

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Browse all new products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="200" img_height="200"}}
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-pattern">
    <div class="cover">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            {{widget type="highlight/product_special" title="Special Offer" show_page_link="1" page_title="Browse all products on sale at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-special" img_width="200" img_height="200"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_bestseller" title="Our Bestsellers" show_page_link="1" page_title="Browse all bestseller products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-bestsellers" img_width="200" img_height="200"}}
        </div>
    </div>
</div>{% endraw %}
```

Product listing blocks are powered by [Highlight module](/m1/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Why choose us

![Tabs and store achievements](/images/argento/flat/homepage/why-choose-us.png)

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            <div class="hero block block-benefits">
                <div class="block-title wow fadeInDown" data-wow-duration="0.5s"><span>Why choose us</span></div>
                <div class="block-content">
                    <div class="row">
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tags fa-stack-1x fa-inverse"></i></span>
                            <h3>Low Pricing</h3>
                            <p>Meet all types for your body's needs, that are healthy for you and for your pocket. Click for big savings.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>
                            <h3>Huge Selection</h3>
                            <p>Make your healthy choice using the huge variety of vitamins and sports nutrition. Let your transformation go on.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-birthday-cake fa-stack-1x fa-inverse"></i></span>
                            <h3>Reward Points</h3>
                            <p>Get reward points by boosting your healthy activity online. Stay with us and gain more.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments fa-stack-1x fa-inverse"></i></span>
                            <h3>Ask Experts</h3>
                            <p>Have a question? Ask an expert and get complete online support. We are open for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

#### About us

![Tabs and store achievements](/images/argento/flat/homepage/about-us.png)

Code:

```html
{% raw %}<div class="row jumbotron jumbotron-bright jumbotron-inverse">
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container">
            <div class="hero block block-about wow fadeIn"  data-wow-delay="0.2s">
                <div class="block-title"><span>About us</span></div>
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
</div>{% endraw %}
```

#### Brands Slider

![Brands Slider](/images/argento/flat/homepage/brands-slider.png)

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="stub"></div>
    <div class="cover cover-dark">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            <div class="hero block block-brands argento-slider wow fadeIn" data-wow-delay="0.2s">
                <div class="block-title"><span>Popular Brands</span><p class="subtitle">check most trusted brands from more then 50 leading manufactures presented at our store.</p></div>
                <div class="block-content">
                    <a href="#" id="left" class="trigger trigger-left"><i class="fa fa-4x fa-angle-right"></i></a>
                    <a href="#" id="right" class="trigger trigger-right"><i class="fa fa-4x fa-angle-left"></i></a>
                    <div id="slider-brands-container" class="slider-wrapper">
                        <ul class="list-slider" id="slider-brands">
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food" /></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                        </ul>
                    </div>
                    <script type="text/javascript">
                        new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

### Whole homepage content

In case if you've lost original homepage content, you can get it below:

```html
{% raw %}<div class="row jumbotron jumbotron-slider jumbotron-image">
    <div class="col-md-12">
        <div class="cover cover-pastel">
            <div class="left triangle"></div>
            <div class="right triangle"></div>
        </div>
        <div class="container wow fadeIn">
            {{widget type="easyslide/insert" slider_id="argento_flat"}}
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-pastel jumbotron-inverse">
    <div class="col-md-12">
        <div class="container">
            <div class="hero block block-categories">
                <div class="block-title"><span>Shop Our Store for</span><p class="subtitle no-margin">more than 25,000 health products including vitamins, herbs, sport supplements, diet and much more!</p></div>
                <div class="block-content">
                    {{widget type="easycatalogimg/widget_list" background_color="34,147,146" category_count="4" subcategory_count="2" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-pastel-alt no-padding">
    <div class="col-md-12">
        <div class="container hero block-homepage-banner">
            {{widget type="easybanner/widget_placeholder" placeholder_name="argento-flat-home"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Browse all new products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="200" img_height="200"}}
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-pattern">
    <div class="cover">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            {{widget type="highlight/product_special" title="Special Offer" show_page_link="1" page_title="Browse all products on sale at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-special" img_width="200" img_height="200"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_bestseller" title="Our Bestsellers" show_page_link="1" page_title="Browse all bestseller products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-bestsellers" img_width="200" img_height="200"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            <div class="hero block block-benefits">
                <div class="block-title wow fadeInDown" data-wow-duration="0.5s"><span>Why choose us</span></div>
                <div class="block-content">
                    <div class="row">
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tags fa-stack-1x fa-inverse"></i></span>
                            <h3>Low Pricing</h3>
                            <p>Meet all types for your body's needs, that are healthy for you and for your pocket. Click for big savings.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>
                            <h3>Huge Selection</h3>
                            <p>Make your healthy choice using the huge variety of vitamins and sports nutrition. Let your transformation go on.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-birthday-cake fa-stack-1x fa-inverse"></i></span>
                            <h3>Reward Points</h3>
                            <p>Get reward points by boosting your healthy activity online. Stay with us and gain more.</p>
                        </div>
                        <div class="col-md-3 col-xs-6 wow slideInUp">
                            <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments fa-stack-1x fa-inverse"></i></span>
                            <h3>Ask Experts</h3>
                            <p>Have a question? Ask an expert and get complete online support. We are open for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-bright jumbotron-inverse">
    <div class="stub"></div>
    <div class="col-md-12 container-wrapper">
        <div class="container">
            <div class="hero block block-about wow fadeIn"  data-wow-delay="0.2s">
                <div class="block-title"><span>About us</span></div>
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
</div>
<div class="row jumbotron">
    <div class="stub"></div>
    <div class="cover cover-dark">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="col-md-12 container-wrapper">
        <div class="container hero">
            <div class="hero block block-brands argento-slider wow fadeIn" data-wow-delay="0.2s">
                <div class="block-title"><span>Popular Brands</span><p class="subtitle">check most trusted brands from more then 50 leading manufactures presented at our store.</p></div>
                <div class="block-content">
                    <a href="#" id="left" class="trigger trigger-left"><i class="fa fa-4x fa-angle-right"></i></a>
                    <a href="#" id="right" class="trigger trigger-right"><i class="fa fa-4x fa-angle-left"></i></a>
                    <div id="slider-brands-container" class="slider-wrapper">
                        <ul class="list-slider" id="slider-brands">
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food" /></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/life_extension.gif"}}" alt="Life Extension"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/gnc.gif"}}" alt="GNC"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/mega_food.gif"}}" alt="Mega Food"/></a></li>
                            <li class="item"><a href="#"><img src="{{skin url="images/catalog/brands/nordic_naturals.gif"}}" alt="Nordic Naturals"/></a></li>
                        </ul>
                    </div>
                    <script type="text/javascript">
                        new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```
