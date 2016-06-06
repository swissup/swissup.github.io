---
layout: default
title: Pure2 homepage original content
description: Pure2 homepage original content
keywords: "Pure2, original, content"
category: Argento
---

# Pure2 homepage original content

```html
{% raw %}<div class="jumbotron jumbotron-slider jumbotron-image">
    <div class="container wow fadeIn">
        {{widget type="easyslide/insert" slider_id="argento_pure2"}}
    </div>
</div>
<div class="jumbotron">
    <div class="container">
        <div class="block block-dotted">
            <div class="block-title"><span>The Essentials</span></div>
            <div class="block-content">
                {{widget type="easycatalogimg/widget_list" background_color="255,255,255" category_count="4" subcategory_count="6" column_count="4" show_image="1" image_width="200" image_height="200" template="tm/easycatalogimg/list.phtml"}}
            </div>
        </div>
    </div>
</div>
<div class="jumbotron">
    <div class="container">
<div class="tab-container">
    {{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-special" page_title="Shop Sale"}}
    {{widget type="highlight/product_bestseller" title="Bestsellers" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-bestsellers" page_title="Shop Bestsellers"}}
    {{widget type="highlight/product_popular" title="Popular" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-popular" page_title="Shop Popular"}}
    {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" title="Editor's Choice" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-attribute-recommended"}}
    {{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-new" page_title="Shop New"}}
</div>
<script type="text/javascript">
    new TabBuilder();
    new IScroll($$('.tab-container .tabs-wrapper')[0], {
        click: true,
        tap  : true,
        bindToWrapper: true,
        scrollX: true,
        scrollY: false
    });
</script>
    </div>
</div>
<div class="jumbotron">
    <div class="container">
        <div class="block block-brands argento-slider wow fadeIn" data-wow-delay="0.2s">
            <div class="block-title"><span>Our Brands</span></div>
            <div class="block-content">
                <a href="#" id="left" class="trigger trigger-left"><i class="fa fa-4x fa-angle-right"></i></a>
                <a href="#" id="right" class="trigger trigger-right"><i class="fa fa-4x fa-angle-left"></i></a>
                <div id="slider-brands-container" class="slider-wrapper">
                    <ul class="list-slider" id="slider-brands">
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/gucci.jpg"}}' alt="" width="150" height="80"/></a></li>
                <li class="item" ><a href="#"><img src='{{skin url="images/catalog/brands/lv.jpg"}}' alt="" width="100" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/ck.jpg"}}' alt="" width="130" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/chanel.jpg"}}' alt="" width="170" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/guess.jpg"}}' alt="" width="130" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/versace.jpg"}}' alt="" width="145" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/gucci.jpg"}}' alt="" width="150" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/lv.jpg"}}' alt="" width="100" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/ck.jpg"}}' alt="" width="130" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/chanel.jpg"}}' alt="" width="170" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/guess.jpg"}}' alt="" width="130" height="80"/></a></li>
                <li class="item"><a href="#"><img src='{{skin url="images/catalog/brands/versace.jpg"}}' alt="" width="145" height="80"/></a></li>
                    </ul>
                </div>
                <script type="text/javascript">
                    new Slider("slider-brands-container", "left", "right", {shift: 'auto'});
                </script>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron">
    <div class="container block-homepage-banner">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-pure2-home"}}
    </div>
</div>{% endraw %}
```