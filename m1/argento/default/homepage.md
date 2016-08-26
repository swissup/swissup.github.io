---
layout: default
title: Argento Default theme Homepage
description: Argento Default theme homepage
keywords: "ArgentoArgento, default, argento theme, homepage, slider, easycatalogimages, tabs, highlight, brands, banner"
category: Argento
---

# Argento Default theme Homepage

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Cms > Pages` page.

### Contents

 1. [Slider and Banners row](#slider-and-banners-row)
 2. [Category images row](#category-images-row)
 3. [Wide banner](#wide-banner)
 4. [Tabs and Store Achievements blocks](#tabs-and-store-achievements-blocks)
 5. [Brands Slider](#brands-slider)

#### Slider and Banners row

![EasySlider and EasyBanners row](/images/argento/default/homepage-top.jpg)

Code:

```html
{% raw %}<div class="row">
    <div class="col-md-8">
        <div class="easyslider-wrapper">
            {{widget type="easyslide/insert" slider_id="argento_default"}}
        </div>
    </div>
    <div class="col-md-4">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-home-top" banner_css_class="col-xs-4 col-md-12" additional_css_class="row"}}
    </div>
</div>{% endraw %}
```

Slider is built with [EasySlide module](/m1/extensions/easyslider/) and can be
edited at `Templates-Master > Easyslide` page.

Banners are created with [EasyBanner module](/m1/extensions/easybanners/) and
available to edit at `Templates-Master > Easy Banner > Manage Banners`
page.

#### Category images row

![EasyCategoryImage](/images/argento/default/homepage-categories.jpg)

Code:

```html
{% raw %}<div class="row">
    <div class="col-md-12">
        {{widget type="easycatalogimg/widget_list" category_count="4" column_count="4" show_image="1" resize_image="1" image_width="180" image_height="180" subcategory_count="5" template="tm/easycatalogimg/list.phtml"}}
    </div>
</div>{% endraw %}
```

Categories list is powered by [Easy Catalog Images](/m1/extensions/easycatalogimages/).
In order to change columns count, image width and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Wide banner

![Wide homepage banner](/images/argento/default/homepage-horizontal-banner.jpg)

Code:

```html
{% raw %}<div class="row">
    <div class="col-md-12">
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-home-content"}}
    </div>
</div>{% endraw %}
```

Wide banner is created with [EasyBanner module](/m1/extensions/easybanners/) and
available to edit at `Templates-Master > Easy Banner > Manage Banners`
page.

#### Tabs and Store Achievements blocks

![Tabs and store achievements](/images/argento/default/homepage-tabs.jpg)

Code:

```html
{% raw %}<div class="row promo-home-content">
    <div class="col-md-8">
        <div class="tab-container">
            {{widget type="highlight/product_new" title="New arrivals" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-new" show_page_link="1" page_title="See all new products &raquo;"}}
            {{widget type="highlight/product_special" title="Sale" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-special" show_page_link="1" page_title="See all on sale products &raquo;"}}
            {{widget type="highlight/product_attribute_yesno" attribute_code="coming_soon" title="Coming soon" products_count="6" column_count="3" template="tm/highlight/product/grid.phtml" class_name="highlight-attrbiute-coming_soon"}}
        </div>
        <script type="text/javascript">
            new TabBuilder();
        </script>
    </div>
    <div class="col-md-4">
        <div class="row">
            <div class="col-md-12 col-sm-6">
                {{widget type="highlight/product_bestseller" title="Bestsellers" products_count="3" column_count="3" template="tm/highlight/product/sidebar/list-link.phtml" class_name="highlight-bestsellers" show_page_link="1" page_title="See all bestsellers &raquo;"}}
            </div>
            <div class="col-md-12 col-sm-6">
                {{widget type="highlight/product_popular" title="Popular Products" products_count="3" column_count="3" template="tm/highlight/product/sidebar/list-link.phtml" class_name="highlight-popular" show_page_link="1" page_title="See all popular products &raquo;"}}
            </div>
        </div>
    </div>
</div>{% endraw %}
```

Product listing blocks are powered by [Highlight module](/m1/extensions/highlight/).
In order to change title, products/columns count and other options you can use
Magento's built-in widget editor, or you can manually change appropriate attribute
in code above.

#### Brands Slider

![Brands Slider](/images/argento/default/brands-slider.jpg)

Code:

```html
{% raw %}<div class="row">
    <div class="col-md-12">
        <div class="block brands-home">
            <div class="block-title">
                <span>Featured Brands</span>
            </div>
            <div class="block-content">
                <a href="#" id="left">Left</a>
                <a href="#" id="right">Right</a>
                <div id="slider-brands-container" class="slider-wrapper">
                    <ul class="list-brands slider-brands" id="slider-brands">
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/sony.jpg'}}" alt="" width="128" height="73"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/apple.jpg'}}" alt="" width="70" height="73"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/garmin.jpg'}}" alt="" width="154" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/htc.jpg'}}" alt="" width="124" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/intel.jpg'}}" alt="" width="103" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/motorola.jpg'}}" alt="" width="204" height="76"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/sony.jpg'}}" alt="" width="128" height="73"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/apple.jpg'}}" alt="" width="70" height="73"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/garmin.jpg'}}" alt="" width="154" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/htc.jpg'}}" alt="" width="124" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/intel.jpg'}}" alt="" width="103" height="74"/></a></li>
                        <li><a href="#"><img src="{{skin url='images/catalog/brands/motorola.jpg'}}" alt="" width="204" height="76"/></a></li>
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
