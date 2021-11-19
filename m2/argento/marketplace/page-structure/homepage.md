---
layout: default
title: Argento Marketplace homepage content structure
description: Argento Marketplace homepage content structure
category: Argento
---

# Homepage content
{:.no_toc}

Argento Marketplace homepage is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages` page.

Page title is `Argento Marketplace`. Url - `home`.

We strongly recommend to disable WYSIWYG editor before you start editing homepage content.

Homepage uses a bunch of widgets. They can be widely customized to
match various layout types and designs.

> 1. Currently homepage build with jumbotrons. Similar approach we use in Argento Flat. Read [Jumbotron customization](/m2/argento/flat/jumbotrons/) article.
> 2. You can structure elements with [Argento grid system](/m2/argento/customization/grid-system/) classes (col-md-8, col-md-4 etc) also.

Let's split content into separate rows to simplify homepage structure
understanding.

* TOC
{:toc}

### Slider, Navigation and Benefits

![Easyslide Slider](/images/m2/argento/marketplace/home/slider.png)

Top homepage slider is powered by [Easyslide](/m2/extensions/easyslider/). Get to know with this module and its interfaces so you could customize it in future.

Slider identifier is `argento_marketplace`.

The navigation menu is displayed in opened state on homepage with [Expanded on Homepage](/m2/extensions/navigationpro/use-cases/expanded-on-homepage/) feature.

Because of it, we use `navpro-expanded` class for the slider and benefits containers to move them to the right.

Piece of CMS Page content that adds slider:

```html
<div class="jumbotron no-padding">
    <div class="slider-bg"><img src="{% raw %}{{media url='wysiwyg/homepage/mp-slider-bg.svg'}}{% endraw %}" alt="Slider Background" /></div>
    <div class="container navpro-expanded">{% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_marketplace"}}{% endraw %}</div>
</div>
```

Benefits block markup:

```html
<div class="jumbotron benefits">
    <div class="container navpro-expanded">
        <div class="benefits-top">
            <div>
                <div class="icon"><i class="mp-icon mp-shipping mp-icon-big"></i></div>
                <div class="content">Free shipping on all orders</div>
            </div>
            <div>
                <div class="icon"><i class="mp-icon mp-cards mp-icon-big"></i></div>
                <div class="content">30 day free returns</div>
            </div>
            <div>
                <div class="icon"><i class="mp-icon mp-secure mp-icon-big"></i></div>
                <div class="content">Safe and secure shopping</div>
            </div>
        </div>
    </div>
</div>
```

### Top Selling and New Arrivals

![Highlight](/images/m2/argento/marketplace/home/highlight.png)

Powered by [Highlight](/m2/extensions/highlight/) module. Module has a tonn of different widgets and some pages even. Check [module docs](/m2/extensions/highlight/).

Piece of CMS Page content for Top Selling and New Arrivals:

```html
<div class="element products-slider">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top selling" carousel="1" products_count="6" column_count="6" page_count="1" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_position="top" page_url="highlight/bestsellers.html" page_link_title="View All" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0"}}{% endraw %}</div>
<div class="element products-slider">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="New arrivals" carousel="1" products_count="6" column_count="6" page_count="1" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_position="top" page_url="highlight/new.html" page_link_title="View All" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0"}}{% endraw %}</div>
```

### Popular Categories

![Popular categories](/images/m2/argento/marketplace/home/categories.png)

Row with "Popular Categories" links is a mix of HTML and [Easy Catalog Images](/m2/extensions/easycatalogimages/) widget. Widget shows first-level categories and their thumbnails. HTML wraps it with specific classes, adds title to the top and transforms the list to slider using Swiper.

Piece of CMS Page content that adds this row:

```html
<div class="block popular-categories">
    <div class="block-title">
        <strong role="heading" aria-level="2">Popular categories</strong>
        <p class="subtitle">
            <a class="action view" href="{% raw %}{{store url='departments'}}{% endraw %}" title="View All">
                <span>View All</span>
            </a>
        </p>
    </div>
    <div class="block-content" data-mage-init='{"Swissup_Swiper/js/swiper-wrapper": {"target": ".easycatalogimg", "loop": false, "slidesPerView": 5, "spaceBetween": 5, "breakpoints": {"1023": {"slidesPerView": 4}, "767": {"slidesPerView": 2}, "640": {"slidesPerView": 1}}}}'>{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="0" column_count="5" show_image="1" image_width="240" image_height="330" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0" parent_category_position="bottom"}}{% endraw %}</div>
</div>
```

### Banners

![Banners](/images/m2/argento/marketplace/home/banners.png)

Top banners are created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

Piece of CMS Page content for "Banners" block:

```html
<div class="block banners">
    <div class="container a-center">
        {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_marketplace_home_bottom"}}{% endraw %}
    </div>
</div>
```

### Apps

![Apps](/images/m2/argento/marketplace/home/apps.png)

This is pure HTML content. Show off your mobile apps, products, desing solutions or special bundles. Invite visitor to check some landing page.

Piece of CMS Page content for "Apps" block:

```html
<div class="block apps a-center">
    <div class="container">
        <div class="apps-bg">
            <img src="{% raw %}{{media url='wysiwyg/homepage/apps/apps-bg.jpg'}}{% endraw %}" alt="Apps Background" />
        </div>
        <div class="content">
            <h2>Get the Mobile App</h2>
            <div class="info">
                <p>Buy and sell anytime, anywhere</p>
                <p>and always make the best deals</p>
            </div>
            <a class="store-link" href="https://play.google.com/" title="Get on Google Play"><img src="{% raw %}{{media url='wysiwyg/homepage/apps/google.svg'}}{% endraw %}" alt="Get on Google Play" /></a><a class="store-link" href="https://www.apple.com/app-store/" title="Download on the App Store"><img src="{% raw %}{{media url='wysiwyg/homepage/apps/ios.svg'}}{% endraw %}" alt="Download on the App Store" /></a>
        </div>
    </div>
</div>
```

### Benefits

![Apps](/images/m2/argento/marketplace/home/benefits.png)

This is pure HTML content. Describe benefits of your store.

Piece of CMS Page content for "Benefits" block:

```html
<div class="jumbotron hero">
    <div class="container">
        <div class="element icon-text-top">
            <div class="content">
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-cards"></div>
                    <div class="info">
                        <h3 class="title">Pay with credit card or PayPal</h3>
                        <div class="text">
                            <p>With our advanced payment module you can select the payment menthod that fits! And always secure!</p>
                            <a href="{% raw %}{{store url='payments'}}{% endraw %}" title="More about payments">More about payments</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-shipping"></div>
                    <div class="info">
                        <h3 class="title">Free shipping starting at $50</h3>
                        <div class="text">
                            <p>Benefit from our free shipping worldwide policy to get your products wherever you need them.</p>
                            <a href="{% raw %}{{store url='shipping'}}{% endraw %}" title="More about shipping">More about shipping</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-secure"></div>
                    <div class="info">
                        <h3 class="title">Security, from start to finish</h3>
                        <div class="text">
                            <p>We take security very seriously. This is why we don’t store your data and encrypt all transactions.</p>
                            <a href="{% raw %}{{store url='security'}}{% endraw %}" title="More about security">More about security</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Our Brands

![Our Brands](/images/m2/argento/marketplace/home/brands.png)

This row is slider with brands your store offers or working with. It is regular HTML content presented as a slider with [Easyslide](/m2/extensions/easyslider/).

Piece of CMS Page content for this section:

```html
<div class="jumbotron hero">
    <div class="container">
        <div class="block row widget block-carousel">
            <div class="block-title">
                <strong>Browse brands</strong>
            </div>
            <div class="block-content">
                {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_mp_brands"}}{% endraw %}
            </div>
        </div>
    </div>
</div>
```

### Top Categories Listing

![Our Brands](/images/m2/argento/marketplace/home/categories-list.png)

This row uses [Easy Catalog Images](/m2/extensions/easycatalogimages/) widget.

Piece of CMS Page content for this section:

```html
<div class="jumbotron">
    <div class="container">
        <div class="block categories-bottom">
            <div class="block-content">
                {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="100" column_count="1" show_image="0" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}
            </div>
        </div>
    </div>
</div>
```

### Whole homepage code

```html
<div class="jumbotron no-padding">
    <div class="slider-bg"><img src="{% raw %}{{media url='wysiwyg/homepage/mp-slider-bg.svg'}}{% endraw %}" alt="Slider Background" /></div>
    <div class="container navpro-expanded">{% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_marketplace"}}{% endraw %}</div>
</div>
<div class="jumbotron benefits">
    <div class="container navpro-expanded">
        <div class="benefits-top">
            <div>
                <div class="icon"><i class="mp-icon mp-shipping mp-icon-big"></i></div>
                <div class="content">Free shipping on all orders</div>
            </div>
            <div>
                <div class="icon"><i class="mp-icon mp-cards mp-icon-big"></i></div>
                <div class="content">30 day free returns</div>
            </div>
            <div>
                <div class="icon"><i class="mp-icon mp-secure mp-icon-big"></i></div>
                <div class="content">Safe and secure shopping</div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-pastel jumbotron-overlap">
    <div class="container">
        <div class="element products-slider">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top selling" carousel="1" products_count="6" column_count="6" page_count="1" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_position="top" page_url="highlight/bestsellers.html" page_link_title="View All" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0"}}{% endraw %}</div>
        <div class="element products-slider">{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="New arrivals" carousel="1" products_count="6" column_count="6" page_count="1" order="default" dir="asc" template="Swissup_Highlight::product/list.phtml" mode="grid" show_page_link="1" page_link_position="top" page_url="highlight/new.html" page_link_title="View All" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="0"}}{% endraw %}</div>
        <div class="block popular-categories">
            <div class="block-title">
                <strong role="heading" aria-level="2">Popular categories</strong>
                <p class="subtitle">
                    <a class="action view" href="{% raw %}{{store url='departments'}}{% endraw %}" title="View All">
                        <span>View All</span>
                    </a>
                </p>
            </div>
            <div class="block-content" data-mage-init='{"Swissup_Swiper/js/swiper-wrapper": {"target": ".easycatalogimg", "loop": false, "slidesPerView": 5, "spaceBetween": 5, "breakpoints": {"1023": {"slidesPerView": 4}, "767": {"slidesPerView": 2}, "640": {"slidesPerView": 1}}}}'>{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="0" column_count="5" show_image="1" image_width="240" image_height="330" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0" parent_category_position="bottom"}}{% endraw %}</div>
        </div>
        <div class="block banners">
            <div class="container a-center">
                {% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_marketplace_home_bottom"}}{% endraw %}
            </div>
        </div>
        <div class="block apps a-center">
            <div class="container">
                <div class="apps-bg">
                    <img src="{% raw %}{{media url='wysiwyg/homepage/apps/apps-bg.jpg'}}{% endraw %}" alt="Apps Background" />
                </div>
                <div class="content">
                    <h2>Get the Mobile App</h2>
                    <div class="info">
                        <p>Buy and sell anytime, anywhere</p>
                        <p>and always make the best deals</p>
                    </div>
                    <a class="store-link" href="https://play.google.com/" title="Get on Google Play"><img src="{% raw %}{{media url='wysiwyg/homepage/apps/google.svg'}}{% endraw %}" alt="Get on Google Play" /></a><a class="store-link" href="https://www.apple.com/app-store/" title="Download on the App Store"><img src="{% raw %}{{media url='wysiwyg/homepage/apps/ios.svg'}}{% endraw %}" alt="Download on the App Store" /></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron hero">
    <div class="container">
        <div class="element icon-text-top">
            <div class="content">
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-cards"></div>
                    <div class="info">
                        <h3 class="title">Pay with credit card or PayPal</h3>
                        <div class="text">
                            <p>With our advanced payment module you can select the payment menthod that fits! And always secure!</p>
                            <a href="{% raw %}{{store url='payments'}}{% endraw %}" title="More about payments">More about payments</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-shipping"></div>
                    <div class="info">
                        <h3 class="title">Free shipping starting at $50</h3>
                        <div class="text">
                            <p>Benefit from our free shipping worldwide policy to get your products wherever you need them.</p>
                            <a href="{% raw %}{{store url='shipping'}}{% endraw %}" title="More about shipping">More about shipping</a>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="icon mp-icon mp-icon-big mp-secure"></div>
                    <div class="info">
                        <h3 class="title">Security, from start to finish</h3>
                        <div class="text">
                            <p>We take security very seriously. This is why we don’t store your data and encrypt all transactions.</p>
                            <a href="{% raw %}{{store url='security'}}{% endraw %}" title="More about security">More about security</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron hero">
    <div class="container">
        <div class="block row widget block-carousel">
            <div class="block-title">
                <strong>Browse brands</strong>
            </div>
            <div class="block-content">
                {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_mp_brands"}}{% endraw %}
            </div>
        </div>
    </div>
</div>
<div class="jumbotron">
    <div class="container">
        <div class="block categories-bottom">
            <div class="block-content">
                {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="100" column_count="1" show_image="0" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}
            </div>
        </div>
    </div>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Marketplace docs homepage](/m2/argento/marketplace/)
