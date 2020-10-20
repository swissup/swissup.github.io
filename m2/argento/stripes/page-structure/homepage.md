---
layout: default
title: Argento Stripes homepage content structure
description: Argento Stripes homepage content structure
category: Argento
---

# Homepage content

Argento homepage - is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages > Argento Stripes` page.

Argento's homepage uses a bunch of widgets, that could be widely customized to
match various layout types and designs.

> All page elements could be structured with [Argento grid system](/m2/argento/customization/grid-system/)
> classes (col-md-8, col-md-4 etc).

Let's split content into separate rows to simplify homepage structure
understanding:

### Contents

 1. [Slider](#slider)
 2. [Top Banners](#top-banners)
 3. [Bestsellers](#bestsellers)
 4. [Bottom Banners](#bottom-banners)
 5. [Brands Slider](#brands-slider)
 6. [Whole homepage code](#whole-homepage-code)

#### Slider

![EasySlider](/images/m2/argento/stripes/homepage-content/easyslider.png)

Code:

```html
{% raw %}<div class="jumbotron jumbotron-image no-padding">
    {{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_stripes"}}
</div>{% endraw %}
```

Slider is powered by [EasySlide module](/m2/extensions/easyslider/) and can be
edited at `Magento Admin > Swissup > General > EasySlide` page.

#### Top Banners

![Top Banners](/images/m2/argento/stripes/homepage-content/top-banners.png)

Code:

```
{% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_stripes_home_top"}}{% endraw %}
```

Top banners are created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Bestsellers

![Highlight](/images/m2/argento/stripes/homepage-content/bestsellers.png)

Code:

```
{% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Headphones</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-blue hl-contain" title_image_url="pub/media/highlight/argento/stripes/headphones.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}{% endraw %}
```

Bestsellers blocks are powered by [Highlight](/m2/extensions/highlight/) using
[Magazine Layout](/m2/extensions/highlight/widgets/css-helpers/#magazine-layout).
In order to change block options you can use Magento's built-in widget editor,
or you can manually change appropriate attribute in code above.

#### Bottom banners

![Bottom banners](/images/m2/argento/stripes/homepage-content/bottom-banners.png)

Code:

```
{% raw %}{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_stripes_home_bottom"}}{% endraw %}
```

Bottom banners is created with [EasyBanner module](/m2/extensions/easybanners/) and
available to edit at `Magento Admin > Swissup > Easy Banner > Manage Banners`
page.

#### Brands Slider

![Brands Slider](/images/m2/argento/stripes/homepage-content/brands-slider.png)

It is a slider with brands your store offers. [Easyslide](/m2/extensions/easyslider/) widget wrapped in HTML.

Slider identifier is `argento_stripes_brands`.

Code:

```html
<div class="block row widget block-promo block-carousel">
    <div class="block-content">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_stripes_brands"}}{% endraw %}
    </div>
</div>
```

#### Whole homepage code

In case if you’ve lost original homepage content, you can get it below:

```html
<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_stripes"}}{% endraw %}
</div>
{% raw %}
{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_stripes_home_top"}}

{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Headphones</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-blue hl-contain" title_image_url="highlight/argento/stripes/headphones.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}

{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Smartphones</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-orange hl-contain" title_image_url="highlight/argento/stripes/smartphones.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}

{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Activity<br>Trackers</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-green hl-contain" title_image_url="highlight/argento/stripes/activity.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}

{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Smart TVs</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-purple hl-contain" title_image_url="highlight/argento/stripes/smart-tv.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}

{{widget type="Swissup\Highlight\Block\ProductList\All" title="Top Selling<br><span>Home<br>Electronics</span>" carousel="1" products_count="8" column_count="4" page_count="1" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" hide_when_filter_is_used="0" css_class="hl-magazine hl-red hl-contain" title_image_url="highlight/argento/stripes/electronics.png" show_page_link="1" page_url="highlight/bestsellers.html" page_link_position="top" page_link_title="View All"}}

{{widget type="Swissup\Easybanner\Block\Placeholder" placeholder="argento_stripes_home_bottom"}}
{% endraw %}
<div class="block row widget block-promo block-carousel">
    <div class="block-content">
        {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_stripes_brands"}}{% endraw %}
    </div>
</div>
```

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento docs homepage](/m2/argento/)
