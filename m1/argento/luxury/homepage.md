---
layout: default
title: Argento Luxury Homepage
description: Argento Luxury homepage
keywords: "ArgentoLuxury, luxury, homepage, slider, easycatalogimages, highlight, brands, banner"
category: Argento
---

# Argento Luxury Homepage

Homepage content is editable at `Cms > Pages` interface.

### Contents

 1. [Header](#header)
 2. [Slider](#slider)
 3. [Categories](#categories)
 4. [New Products](#new-products)
 5. [Discount Banner](#discount-banner)
 6. [Benefits](#benefits)
 6. [Brands Slider](#brands-slider)
 7. [Whole homepage code](#whole-homepage-content)

### Header

![header](/images/argento/luxury/homepage/header.png)

You can show alternative logo on home page. You can upload it in
`System > Configuration > TM Argento Themes > Luxury > Home Page`,
please check [homepage configuration](/m1/argento/luxury/configuration/#home-page)

### Slider

![Slider](/images/argento/luxury/homepage/slider.png)

Slider is powered by [EasySlider](/m1/extensions/easyslider/) module.
You can manage each slide and animation effects at `Templates-Master > Easyslide` backend page.

Slider is inserted in homepage with widget. The following code is used to show
the slider on the homepage:

```html
<div class="row jumbotron jumbotron-slider">
    {% raw %}{{widget type="easyslide/insert" slider_id="argento_luxury"}}{% endraw %}
</div>
```

### Categories

![Categories](/images/argento/luxury/homepage/easycatalogimages.png)

Categories block is powered by [EasyCatalogImages](/m1/extensions/easycatalogimages/) module.

Block was designed for images size 382px x 565px.

This block is inserted using magento widget functionality. The following code
is used to show block on the homepage:

```html
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container">
            {% raw %}{{widget type="easycatalogimg/widget_list" category_count="5" subcategory_count="0" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="tm/easycatalogimg/list.phtml"}}{% endraw %}
        </div>
    </div>
</div>
```

### New Products

![New Products](/images/argento/luxury/homepage/highlight.png)

Code:

```html
{% raw %}<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Shop Now" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="280" img_height="410"}}
        </div>
    </div>
</div>{% endraw %}
```

New Products listing block is powered by [Highlight module](/m1/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

### Discount Banner

![Banner](/images/argento/luxury/homepage/banner.png)

Discount banner is powered by [Easy Banners](/m1/extensions/easybanners/) module.
Banners are editable at `Templates-Master > Easybanner` page.

Code, used to show homepage banner:

```html
<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {% raw %}{{widget type="easybanner/widget_placeholder" placeholder_name="argento-luxury-home"}}{% endraw %}
    </div>
</div>
```

### Benefits

![Benefits](/images/argento/luxury/homepage/benefits.png)

Code:

```html
<div class="row jumbotron block-benefits">
    <div class="container hero">
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                <h4>Free Delivery</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                <h4>Secure Payment</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                <h4>24h Customer Service</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
    </div>
</div>
```

### Brands Slider

![Brands Slider](/images/argento/luxury/homepage/brandsslider.png)

Brands slider is a simple cms content, powered with
[Slick Carousel](/m1/extensions/slick-carousel/) to make slider.

Code, used for brands slider:

```html
{% raw %}<div class="row jumbotron jumbotron-slick">
    <div class="container">
        <div class="block block-brands argento-slider">
            <div class="block-content">
                <div id="slider-brands-container" class="slider-wrapper">
                    <div class="slick" id="slider-brands" data-slick='{"slidesToShow": 6, "slidesToScroll": 6, "infinite": true, "autoplay": true, "speed": 1000, "autoplaySpeed": 4000, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```

### Whole homepage content

In case if you've lost original homepage content, you can get it below:

```html
{% raw %}<div class="row jumbotron jumbotron-slider">
    {{widget type="easyslide/insert" slider_id="argento_luxury"}}
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container">
            {{widget type="easycatalogimg/widget_list" category_count="5" subcategory_count="0" column_count="5" show_image="1" image_width="382" image_height="565" resize_image="0" template="tm/easycatalogimg/list.phtml"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="col-md-12">
        <div class="container hero">
            {{widget type="highlight/product_new" title="New Arrivals" show_page_link="1" page_title="Shop Now" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new" img_width="280" img_height="410"}}
        </div>
    </div>
</div>
<div class="row jumbotron">
    <div class="hero block-homepage-banner">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-luxury-home"}}
    </div>
</div>
<div class="row jumbotron block-benefits">
    <div class="container hero">
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-cart-alt"></div>
                <h4>Free Delivery</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-lock"></div>
                <h4>Secure Payment</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="a-center">
                <div class="luxury-icon luxury-icon-big luxury-headphones"></div>
                <h4>24h Customer Service</h4>
                <p>Our store delivers an extensive and expertly curated selection of fashion and lifestyle offerings.</p>
            </div>
        </div>
    </div>
</div>
<div class="row jumbotron jumbotron-slick">
    <div class="container">
        <div class="block block-brands argento-slider">
            <div class="block-content">
                <div id="slider-brands-container" class="slider-wrapper">
                    <div class="slick" id="slider-brands" data-slick='{"slidesToShow": 6, "slidesToScroll": 6, "infinite": true, "autoplay": true, "speed": 1000, "autoplaySpeed": 4000, "arrows": true, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/gucci.jpg'}}" alt="" width="150" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/lv.jpg'}}" alt="" width="100" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/ck.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/chanel.jpg'}}" alt="" width="170" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/guess.jpg'}}" alt="" width="130" height="80"/></a>
                        <a href="#"><img src="{{skin url='images/catalog/brands/versace.jpg'}}" alt="" width="145" height="80"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>{% endraw %}
```
