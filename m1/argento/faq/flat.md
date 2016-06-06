---
layout: default
title: Flat homepage original content
description: Flat homepage original content
keywords: "Flat, original, content"
category: Argento
---

# Flat homepage original content

```html
{% raw %}<div class="jumbotron jumbotron-slider jumbotron-image">
    <div class="cover cover-pastel">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="container wow fadeIn">
        {{widget type="easyslide/insert" slider_id="argento_flat"}}
    </div>
</div>
<div class="jumbotron jumbotron-pastel jumbotron-inverse">
    <div class="container">
        <div class="hero block block-categories">
            <div class="block-title"><span>Shop Our Store for</span><p class="subtitle no-margin">more than 25,000 health products including vitamins, herbs, sport supplements, diet and much more!</p></div>
            <div class="block-content">
                {{widget type="easycatalogimg/widget_list" background_color="34,147,146" category_count="4" subcategory_count="2" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}
            </div>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-pastel-alt no-padding">
    <div class="container hero block-homepage-banner">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-flat-home"}}
    </div>
</div>
<div class="jumbotron">
    <div class="container hero">
        {{widget type="highlight/product_new" title="New Arrivals" page_title="Browse all new products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-new"}}
    </div>
</div>
<div class="jumbotron jumbotron-pattern">
    <div class="cover">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="stub"></div>
    <div class="container hero">
        {{widget type="highlight/product_special" title="Special Offer" page_title="Browse all products on sale at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-special"}}
    </div>
</div>
<div class="jumbotron">
    <div class="container hero">
        {{widget type="highlight/product_bestseller" title="Our Bestsellers" page_title="Browse all bestseller products at our store &raquo;" products_count="4" column_count="4" template="tm/highlight/product/grid.phtml" class_name="highlight-content-bestsellers"}}
    </div>
</div>
<div class="jumbotron">
    <div class="stub"></div>
    <div class="container hero">
        <div class="hero block block-benefits">
            <div class="block-title wow fadeInDown" data-wow-duration="0.5s"><span>Why choose us</span></div>
            <div class="block-content">
                <div class="col4-set">
                    <div class="col-1 wow bounceInLeft" data-wow-delay="0.2s">
                        <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-tags fa-stack-1x fa-inverse"></i></span>
                        <h3>Low Pricing</h3>
                        <p>Meet all types for your body's needs, that are healthy for you and for your pocket. Click for big savings.</p>
                    </div>
                    <div class="col-2 wow bounceInLeft">
                        <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cubes fa-stack-1x fa-inverse"></i></span>
                        <h3>Huge Selection</h3>
                        <p>Make your healthy choice using the huge variety of vitamins and sports nutrition. Let your transformation go on.</p>
                    </div>
                    <div class="col-3 wow bounceInRight">
                        <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-birthday-cake fa-stack-1x fa-inverse"></i></span>
                        <h3>Reward Points</h3>
                        <p>Get reward points by boosting your healthy activity online. Stay with us and gain more.</p>
                    </div>
                    <div class="col-4 wow bounceInRight" data-wow-delay="0.2s">
                        <span class="fa-stack fa-4x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments fa-stack-1x fa-inverse"></i></span>
                        <h3>Ask Experts</h3>
                        <p>Have a question? Ask an expert and get complete online support. We are open for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-bright jumbotron-inverse">
    <div class="stub"></div>
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
<div class="jumbotron">
    <div class="stub"></div>
    <div class="cover cover-dark">
        <div class="left triangle"></div>
        <div class="right triangle"></div>
    </div>
    <div class="container hero">
        <div class="hero block block-brands argento-slider wow fadeIn" data-wow-delay="0.2s">
            <div class="block-title"><span>Popular Brands</span><p class="subtitle">check most trusted brands from more then 50 leading manufactures presented at our store.</p></div>
            <div class="block-content">
                <a href="#" id="left" class="trigger trigger-left"><i class="fa fa-4x fa-angle-right"></i></a>
                <a href="#" id="right" class="trigger trigger-right"><i class="fa fa-4x fa-angle-left"></i></a>
                <div id="slider-brands-container" class="slider-wrapper">
                    <ul class="list-slider" id="slider-brands">
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/life_extension.gif"}}' alt="Life Extension"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/gnc.gif"}}' alt="GNC"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/mega_food.gif"}}' alt="Mega Food" /></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/nordic_naturals.gif"}}' alt="Nordic Naturals"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/life_extension.gif"}}' alt="Life Extension"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/gnc.gif"}}' alt="GNC"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/mega_food.gif"}}' alt="Mega Food"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/nordic_naturals.gif"}}' alt="Nordic Naturals"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/life_extension.gif"}}' alt="Life Extension"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/gnc.gif"}}' alt="GNC"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/mega_food.gif"}}' alt="Mega Food"/></a></li>
                        <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/nordic_naturals.gif"}}' alt="Nordic Naturals"/></a></li>
                    </ul>
                </div>
                <script type="text/javascript">
                    new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
                </script>
            </div>
        </div>
    </div>
</div>{% endraw %}
```