---
layout: default
title: Argento Home homepage content structure
description: Argento Home homepage content structure
category: Argento
---

# Homepage content
{:.no_toc}

Argento Home homepage is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages` page.

Page title is `Argento Home`. Url - `home`.

We strongly recommend to disable WYSIWYG editor before you start editing homepage content.

Homepage uses a bunch of widgets. They can be widely customized to
match various layout types and designs.

> 1. Currently homepage build with jumbotrons. Similar approach we use in Argento Flat. Read [Jumbotron customization](/m2/argento/flat/jumbotrons/) article.
> 2. You can structure elements with [Argento grid system](/m2/argento/customization/grid-system/) classes (col-md-8, col-md-4 etc) also.

Let's split content into separate rows to simplify homepage structure
understanding.

* TOC
{:toc}

### Slider

![Easyslide Slider](/images/m2/argento/home/home/slider.png)

Top homepage slider is powered by [Easyslide](/m2/extensions/easyslider/). Get to know with this module and its interfaces so you could customize it in future.

Slider identifier is `argento_home`.

Piece of CMS Page content that adds slider:

```html
<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_home"}}{% endraw %}
</div>
```

### The Essentials

![The essentials](/images/m2/argento/home/home/the-essentials.png)

Row with "The Essentials" links is a mix of HTML and [Easy Catalog Images](/m2/extensions/easycatalogimages/) widget. Widget shows first-level categories and their thumbnails. HTML wraps it with specific classes and adds title to the top.

Piece of CMS Page content that adds this row:

```html
<div class="jumbotron block-categories">
    <div class="container">
        <div class="block-title">
            <strong role="heading" aria-level="3">The essentials</strong>
            <p class="subtitle">Affordable interior for everyone</p>
        </div>
        {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="0" column_count="3" show_image="1" image_width="320" image_height="320" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}
    </div>
</div>
```

### Explore Our Store

![Explore Our Store](/images/m2/argento/home/home/explore-our-store.png)

This row shows four tabs:

  - New Products;
  - Special Offer;
  - Bestsellers;
  - Popular Products.

It is powered by [EasyTabs](/m2/extensions/easytabs/). You can add/remove tabs, change tabs layout etc. Check EasyTabs docs to findout more.

Piece of CMS Page content that adds tabs:

```html
<div class="jumbotron block-explore">
    <div class="container">
        <div class="block-title">
            <strong role="heading" aria-level="3">Explore our store</strong>
        </div>
        {% raw %}{{widget type="Swissup\Easytabs\Block\WidgetTabs" filter_tabs="new.products,special.offer,bestsellers,popular" tabs_layout="collapsed" template="Swissup_Easytabs::tabs.phtml"}}{% endraw %}
    </div>
</div>
```

### Our Brands

![Our Brands](/images/m2/argento/home/home/our-brands.png)

This row is slider with brands your store offers or working with. It is regular HTML content presented as a slider with [Slick Carousel](m2/extensions/slick-carousel/).

Piece of CMS Page content for this section:

```html
<div class="jumbotron block-brands">
    <div class="container">
        <div class="block block-carousel">
            <div class="block-title">
                <strong role="heading" aria-level="3">Our brands</strong>
            </div>
            <div class="block-content">
                <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "swipeToSlide": true, "rows": 0, "lazyLoad": "ondemand", "responsive": [{"breakpoint": 768, "settings": {"slidesToShow": 4}}, {"breakpoint": 600, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}}'>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/ancestry.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/expedia.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/skyscnr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/twtr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/uber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/viber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/ancestry.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/expedia.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/skyscnr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/twtr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/uber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/viber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Block "Try Now"

![Block Try Now](/images/m2/argento/home/home/try-now.png)

This is pure HTML content. Show off your products, desing solutions or special bundles. Invite visitor to check some landing page.

Piece of CMS Page content for "Try Now" block:

```html
<div class="jumbotron no-padding a-center block-try-now">
    <div class="element background-divider a-center">
        <img src="{% raw %}{{media url='wysiwyg/interior/home-interior.jpg'}}{% endraw %}" alt="Interior Design" />
        <div class="content">
            <div class="block-title">
                <p class="subtitle">Innovative experience</p>
                <strong role="heading" aria-level="3">Custom interior design suggestions</strong>
            </div>
            <a href="{% raw %}{{store direct_url=''}}{% endraw %}" title="Try out now" class="action"><span>Try out now</span></a>
        </div>
      </div>
</div>
```

### Our clients love us

This row has slider with clients feedback about experience with your store. We used [Testimonials](/m2/extensions/testimonials/) widget to show it. Check Testimonials module docs to find out what else it can do.

Piece of CMS Page content that adds clients feedback:

```html
<div class="jumbotron block-testimonials">
    <div class="container">
        {% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\Slider" items_number="6" title="Our clients love us" slides_to_show="3" show_rating="1"}}{% endraw %}
    </div>
</div>
```

### Whole homepage code

```html
<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_home"}}{% endraw %}
</div>
<div class="jumbotron block-categories">
    <div class="container">
        <div class="block-title">
            <strong role="heading" aria-level="3">The essentials</strong>
            <p class="subtitle">Affordable interior for everyone</p>
        </div>
        {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="0" column_count="3" show_image="1" image_width="320" image_height="320" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}
    </div>
</div>
<div class="jumbotron block-explore">
    <div class="container">
        <div class="block-title">
            <strong role="heading" aria-level="3">Explore our store</strong>
        </div>
        {% raw %}{{widget type="Swissup\Easytabs\Block\WidgetTabs" filter_tabs="new.products,special.offer,bestsellers,popular" tabs_layout="collapsed" template="Swissup_Easytabs::tabs.phtml"}}{% endraw %}
    </div>
</div>
<div class="jumbotron block-brands">
    <div class="container">
        <div class="block block-carousel">
            <div class="block-title">
                <strong role="heading" aria-level="3">Our brands</strong>
            </div>
            <div class="block-content">
                <div class="slick-slider" data-mage-init='{"slick": {"slidesToShow": 6, "slidesToScroll": 1, "dots": false, "autoplay": true, "swipeToSlide": true, "rows": 0, "lazyLoad": "ondemand", "responsive": [{"breakpoint": 768, "settings": {"slidesToShow": 4}}, {"breakpoint": 600, "settings": {"slidesToShow": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2}}]}}'>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/ancestry.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/expedia.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/skyscnr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/twtr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/uber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/viber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/ancestry.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/expedia.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/skyscnr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/twtr.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/uber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                    <div><a href="#"><img data-lazy="{% raw %}{{view url='images/brands/viber.png'}}{% endraw %}" alt="" width="200" height="78"/></a></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="jumbotron no-padding a-center block-try-now">
    <div class="element background-divider a-center">
        <img src="{% raw %}{{media url='wysiwyg/interior/home-interior.jpg'}}{% endraw %}" alt="Interior Design" />
        <div class="content">
            <div class="block-title">
                <p class="subtitle">Innovative experience</p>
                <strong role="heading" aria-level="3">Custom interior design suggestions</strong>
            </div>
            <a href="{% raw %}{{store direct_url=''}}{% endraw %}" title="Try out now" class="action"><span>Try out now</span></a>
        </div>
      </div>
</div>
<div class="jumbotron block-testimonials">
    <div class="container">
        {% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\Slider" items_number="6" title="Our clients love us" slides_to_show="3" show_rating="1"}}{% endraw %}
    </div>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Home docs homepage](/m2/argento/home/)
