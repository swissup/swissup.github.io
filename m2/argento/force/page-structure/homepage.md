---
layout: default
title: Argento Force homepage content structure
description: Argento Force homepage content structure
category: Argento
---

# Homepage content
{:.no_toc}

Argento Force homepage is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages` page.

Page title is `Argento Force`. Url - `home`.

We strongly recommend to disable WYSIWYG editor before you start editing hoempage content.

Homepage uses a bunch of widgets. They can be widely customized to
match various layout types and designs.

> 1. Currently homepage build with jumbotrons. Similar approach we use in Argento Flat. Read [Jumbotron customization](/m2/argento/flat/jumbotrons/) article.
> 2. You can structure elements with [Argento grid system](/m2/argento/customization/grid-system/) classes (col-md-8, col-md-4 etc) also.

Let's split content into separate rows to simplify homepage structure
understanding.

* TOC
{:toc}

### Slider

![Easyslide Slider](/images/m2/argento/force/home/slider.png)

Top homepage slider is powered by [Easyslide](/m2/extensions/easyslider/). Get to know with this module and its interfaces so you could customize it in future.

Slider identifier is `argento_force`.

Piece of CMS Page content that adds slider:

```html
<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_force"}}{% endraw %}
</div>
```

### Hot Stuff

![Hot stuff](/images/m2/argento/force/home/hot-stuff.png)

Row with "Hot Stuff" links is a CMS Block. Block identifier is `hot-stuff`. And its content is structured with [Argento grid system](/m2/argento/customization/grid-system/).

Once again we recommend to disable WYSIWYG editor before editing this block.

Piece of CMS Page content that adds this block:

```html
<div class="jumbotron hero no-padding">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="hot-stuff"}}{% endraw %}
    </div>
</div>
```

#### CMS Block 'hot-stuff' original content
{:.no_toc}
{:.collapsible.collapsed}

```html
<div class="block block-hot-stuff">
    <div class="block-title">
        <strong role="heading" aria-level="2">Hot Stuff</strong>
    </div>
    <div class="block-content a-center">
        <div class="argento-grid-container">
            <div class="argento-grid">
                <div class="col-md-4">
                    <div class="image"><a href='{% raw %}{{store direct_url="running-collection.html"}}{% endraw %}' title="2019 Running Collection"><img src='{% raw %}{{media url="wysiwyg/hot-stuff/running.png"}}{% endraw %}' alt="2019 Running Collection"></a></div>
                    <h3>2019 Running Collection</h3>
                    <div class="description">Save on our running shorts collection</div>
                    <div class="shop-now-link"><a class="link-accent dark" href='{% raw %}{{store direct_url="running-collection.html"}}{% endraw %}' title="Shop Now">Shop Now</a></div>
                </div>
                <div class="col-md-4">
                    <div class="image"><a href='{% raw %}{{store direct_url="outfit.html"}}{% endraw %}' title="Find Your Perfect Outfit"><img src='{% raw %}{{media url="wysiwyg/hot-stuff/outfit.png"}}{% endraw %}' alt="Find Your Perfect Outfit"></a></div>
                    <h3>Find Your Perfect Outfit</h3>
                    <div class="description">From accessories to t-shirts and more</div>
                    <div class="shop-now-link"><a class="link-accent dark" href='{% raw %}{{store direct_url="outfit.html"}}{% endraw %}' title="Shop Now">Shop Now</a></div>
                </div>
                <div class="col-md-4">
                    <div class="image"><a href='{% raw %}{{store direct_url="highlight/onsale.html"}}{% endraw %}' title="Save At Least 30%"><img src='{% raw %}{{media url="wysiwyg/hot-stuff/sale.png"}}{% endraw %}' alt="Save At Least 30%"></a></div>
                    <h3>Save At Least 30%</h3>
                    <div class="description">Save on our dhb Aeron shorts collection</div>
                    <div class="shop-now-link"><a class="link-accent dark" href='{% raw %}{{store direct_url="highlight/onsale.html"}}{% endraw %}' title="Shop Now">Shop Now</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
```


### 'Ready to Go' categories

![Hot stuff](/images/m2/argento/force/home/ready-to-go.png)

This row shows first four top-level categories of your store and encourage user to browse them. It is powered by [Easy Catalog Images](/m2/extensions/easycatalogimages/). Check what is possible to do with its widgets.

Piece of CMS Page content that adds categories:

```html
<div class="jumbotron no-padding block-categories">
    <div class="bg-text">Ready to Go</div>
    {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="0" column_count="4" show_image="1" image_width="500" image_height="500" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0" layout_style="force"}}{% endraw %}
    <div class="departments-link"><a class="button" title="All Departments" href='{% raw %}{{store direct_url="departments"}}{% endraw %}'><span>All Departments</span></a></div>
</div>
```

If you want to change text "Ready to Go" then modify text in `<div class="bg-text">...</div>`. Try to keep this phrase short so it fits into block.


### Bestsellers

![Bestsellers](/images/m2/argento/force/home/bestsellers.png)

This section represents best selling goods at your store. It is powered by [Highlight](/m2/extensions/highlight/) module. Module has a tonn of different widgets and some pages even. Check module docs.

If your store is young and there are no clear best selling stuff then you may show here new products. Or some featured ones... Highlight module has widget for every possible product list.

Piece of CMS Page content for bestsellers:

```html
<div class="jumbotron hero block-bestsellers">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Bestsellers" carousel="0" products_count="4" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0" period="P1Y" show_page_link="1" page_link_position="bottom" page_link_title="Shop Now" page_url="highlight/bestsellers.html" min_popularity="1"}}{% endraw %}
    </div>
</div>
```

### New Collection

![New Collection](/images/m2/argento/force/home/new-collection.png)

'New Collection' is a banner created with [EasyBanner](/m2/extensions/easybanners/) module. Read its docs to figura out how to edit it.

This banner is assigned to placeholder `argento_force_home`.

Here is code that adds placeholder at homepage:

```html
<div class="jumbotron no-padding">
    <div class="a-center block-homepage-banner">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_force_home"}}{% endraw %}
    </div>
</div>
```


### Get There With Us

![Get There With Us](/images/m2/argento/force/home/get-there-with-us.png)

This is CMS Block once again. Here you can describe why you are doing your business. What is your goal and top priority. Add payment security badges. Guarantee quality and moneyback. State your shipping policy.

Block identifier is `benefits`. Content is structured with [Argento grid system](/m2/argento/customization/grid-system/).

Piece of CMS Page content with this block:

```html
<div class="jumbotron hero">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="benefits"}}{% endraw %}
    </div>
</div>
```

#### CMS Block 'benefits' original content
{:.no_toc}
{:.collapsible.collapsed}

```html

<div class="block block-benefits">
    <div class="block-title">
        <strong role="heading" aria-level="2">Get There With Us</strong>
    </div>
    <div class="block-content">
        <div class="argento-grid">
            <div class="a-center a-center-block description"><p>We are cyclists, runners, swimmers, triathletes, hikers, and gym-goers. We understand how it feels to GET THERE - that feeling when, whatever your sport, whatever your level, you go further, push harder, get better, and the impossible suddenly feels like home.</p><p>Like you, we’ve overcome our barriers, including the snooze button. Mostly. We feel the same rush of hitting that peak, climbing that gradient, and beating that time. We’ve had days we’d like to forget but still can’t wait to get out there again. We savor those training days with our mates, and the solitary sessions that clear our heads.</p></div>
            <div class="col-md-4 item">
                <i class="force-icon force-icon-bigger force-shield"></i>
                <h4>Secure Payments</h4>
                <div class="text">Order online, avoid the shipping costs, and collect your items from any of our 56 stores nationwide, whenever and wherever is most convenient for you.</div>
            </div>
            <div class="col-md-4 item">
                <i class="force-icon force-icon-bigger force-100percent"></i>
                <h4>Money Back</h4>
                <div class="text">Order online, avoid the shipping costs, and collect your items from any of our 56 stores nationwide, whenever and wherever is most convenient for you.</div>
            </div>
            <div class="col-md-4 item">
                <i class="force-icon force-icon-bigger force-delivery"></i>
                <h4>Fast Delivery</h4>
                <div class="text">Order online, avoid the shipping costs, and collect your items from any of our 56 stores nationwide, whenever and wherever is most convenient for you.</div>
            </div>
        </div>
    </div>
</div>
```


### Brands

![Brands](/images/m2/argento/force/home/brands.png)

This row is slider with brands your store offers. It is regular HTML content presented as a slider with [Slick Carousel](m2/extensions/slick-carousel/).

Piece of CMS Page content for this section:

```html
<div class="jumbotron hero block-brands">
    <div class="container">
        <div class="block">
            <div class="block-title">
                <strong role="heading" aria-level="3">Brands</strong>
            </div>
            <div class="block-content">
                <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "swipeToSlide": true, "rows": 0}}'>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img src="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Whole homepage code

```html

<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_force"}}{% endraw %}
</div>
<div class="jumbotron hero no-padding">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="hot-stuff"}}{% endraw %}
    </div>
</div>
<div class="jumbotron no-padding block-categories">
    <div class="bg-text">Ready to Go</div>
    {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="4" subcategory_count="0" column_count="4" show_image="1" image_width="500" image_height="500" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0" link_as_button="true"}}{% endraw %}
    <div class="departments-link"><a class="button" title="All Departments" href='{% raw %}{{store direct_url="departments"}}{% endraw %}'><span>All Departments</span></a></div>
</div>
<div class="jumbotron hero block-bestsellers">
    <div class="container">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Bestsellers" carousel="0" products_count="4" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0" period="P1Y" show_page_link="1" page_link_position="bottom" page_link_title="Shop Now" page_url="highlight/bestsellers.html" min_popularity="1"}}{% endraw %}
    </div>
</div>
<div class="jumbotron no-padding">
    <div class="a-center block-homepage-banner">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_force_home"}}{% endraw %}
    </div>
</div>
<div class="jumbotron hero">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="benefits"}}{% endraw %}
    </div>
</div>
<div class="jumbotron hero block-brands">
    <div class="container">
        <div class="block block-carousel">
            <div class="block-title">
                <strong role="heading" aria-level="3">Brands</strong>
            </div>
            <div class="block-content">
                <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "swipeToSlide": true, "rows": 0, "lazyLoad": "ondemand"}}'>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/puma.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/nike.png'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/adidas.jpg'}}{% endraw %}" alt="" width="120" height="80"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/under-armour.jpg'}}{% endraw %}" alt="" width="120" height="90"/></a></div>
                </div>
            </div>
        </div>
    </div>
</div>

```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Force docs homepage](/m2/argento/force/)
