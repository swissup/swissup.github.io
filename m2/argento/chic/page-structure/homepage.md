---
layout: default
title: Argento Chic homepage content structure
description: Argento Chic homepage content structure
category: Argento
---

# Homepage content
{:.no_toc}

Argento Chic homepage is a standard Magento's CMS page. You can edit it at
`Magento Admin > Content > Pages` page.

Page title is `Argento Chic`. Url - `home`.

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

![Easyslide Slider](/images/m2/argento/chic/home/slider.png)

Top homepage slider is powered by [Easyslide](/m2/extensions/easyslider/). Get to know with this module and its interfaces so you could customize it in future.

Slider identifier is `argento_chic`.

Piece of CMS Page content that adds slider:

```html
<div class="jumbotron jumbotron-image no-padding">
    {% raw %}{{widget type="Swissup\EasySlide\Block\Slider" identifier="argento_chic"}}{% endraw %}
</div>
```

### Benefits

![Benefits](/images/m2/argento/chic/footer/benefits.png)

Here we display the `benefits` static block. The same block is displayed at the top of footer on other pages.

Benefits block markup:

```html
<div class="jumbotron benefits">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="benefits"}}{% endraw %}
    </div>
</div>
```

### Summer Collections

![Summer Collections](/images/m2/argento/chic/home/categories.png)

Row with "Summer Collections" links is a mix of HTML and [Easy Catalog Images](/m2/extensions/easycatalogimages/) widget. Widget shows first-level categories and their thumbnails. HTML wraps it with specific classes, adds title to the top and transforms the list to slider using Swiper.

Piece of CMS Page content that adds this row:

```html
<div class="jumbotron block-categories">
    <div class="container block-carousel stairs">
        <div class="block-title">
            <strong role="heading" aria-level="3">Summer Collections</strong>
            <p class="subtitle">Keep up with the hottest trends</p>
        </div>
        <div class="block-content" data-mage-init='{% raw %}{"Swissup_Swiper/js/swiper-wrapper": {"target": ".easycatalogimg", "loop": false, "slidesPerView": 3, "slidesPerGroup": 3, "spaceBetween": 5, "breakpoints": {"1023": {"slidesPerView": 2, "slidesPerGroup": 2}, "640": {"slidesPerView": 1, "slidesPerGroup": 1}}}}{% endraw %}'>{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="6" subcategory_count="0" column_count="3" show_image="1" image_lazyload="1" image_width="445" image_height="593" parent_category_position="over" sizes="(min-width: 1360px) 445px, (min-width: 768px) 33vw, (min-width: 640px) 45vw, (min-width: 480px) 67vw, 83vw" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="0"}}{% endraw %}</div>
    </div>
</div>
```

### Popular and New Products

![Highlight](/images/m2/argento/chic/home/highlight.png)

Powered by [Highlight](/m2/extensions/highlight/) module. Module has a ton of different widgets and also some pages. Check [module docs](/m2/extensions/highlight/).

Piece of CMS Page content for Popular right now and New Products:

```html
<div class="jumbotron hero">
    <div class="container block-carousel">
        {% raw %}{{widget type="Swissup\Highlight\Block\ProductList\All" title="Popular right now" carousel="1" products_count="4" column_count="4" page_count="3" order="default" dir="asc" template="Magento_Catalog::product/list.phtml" mode="grid" show_page_link="0" conditions_encoded="^[`1`:^[`type`:`Magento||CatalogWidget||Model||Rule||Condition||Combine`,`aggregator`:`all`,`value`:`1`,`new_child`:``^]^]" hide_when_filter_is_used="1"}}{% endraw %}
    </div>
</div>
```

### Ideas for the summer

![Apps](/images/m2/argento/chic/home/ideas.png)

This is pure HTML content. Uses video background and marquee3k script. Show off your categories, products, desing solutions or special bundles. Invite visitor to check some landing page.

Piece of CMS Page content for the block:

```html
<div class="jumbotron jumbotron-pastel-alt no-padding hero block-ideas">
    <div class="block-title color-invert">
        <strong role="heading" aria-level="3">Ideas for the summer</strong>
        <p class="subtitle font-serif">Check out these trendy outfits</p>
        <a href="{% raw %}{{store direct_url='summer-ideas'}}{% endraw %}" class="action primary">Explore</a>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" style="pointer-events: none;" src="https://player.vimeo.com/video/892586447?dnt=1&amp;id=892586447&amp;autopause=0&amp;transparent=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;controls=0&amp;background=1" frameborder="0" mozallowfullscreen="" allowfullscreen="" tabindex="-1" aria-hidden="true"></iframe>
    </div>
</div>
<div class="jumbotron no-padding block-marquee">
    <div class="marquee3k marquee-images" data-speed="0.15" data-pausable="false" data-reverse="false">
        <div class="marquee-wrapper">
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-1.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-2.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-3.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-4.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-5.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-6.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-7.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-8.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-9.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-10.webp}}{% endraw %}" alt="Summer ideas image" /></a>
            <a href='{% raw %}{{store direct_url="summer-ideas"}}{% endraw %}' tabindex="-1"><img width="200" height="300" class="rounded" loading="lazy" src="{% raw %}{{media url=wysiwyg/argento/chic/ideas-11.webp}}{% endraw %}" alt="Summer ideas image" /></a>
        </div>
    </div>
    <div class="marquee3k marquee-text" data-speed="0.3" data-pausable="false" data-reverse="false">
        <div class="marquee-wrapper">
            <div>#ReadyForSummer</div>
            <div>#ReadyForSummer</div>
            <div>#ReadyForSummer</div>
            <div>#ReadyForSummer</div>
            <div>#ReadyForSummer</div>
        </div>
    </div>
</div>
```

### Customer Reviews

![Testimonials](/images/m2/argento/chic/home/testimonials.png)

This row has slider with clients feedback about experience with your store. We used [Testimonials](/m2/extensions/testimonials/) widget to show it. Check Testimonials module docs to find out what else it can do.

Piece of CMS Page content that adds clients feedback:

```html
<div class="jumbotron jumbotron-pastel block-testimonials">
    <div class="container element">
        {% raw %}{{widget type="Swissup\Testimonials\Block\Widgets\Slider" items_number="6" title="Customer Reviews" slides_to_show="3" show_rating="1" img_width="200" img_height="200"}}{% endraw %}
    </div>
</div>
```

### Get the summer look, Learn our story, The Circular Denim Project

![HTML Blocks](/images/m2/argento/chic/home/cms.png)

These blocks are pure HTML content:

```html
<div class="jumbotron jumbotron-bright no-padding">
    <div class="container">
        <div class="element image-block right">
            <div class="info color-invert">
                <h2 class="heading">Get the summer look</h2>
                <p class="text font-serif">Match the Juno shirt and the Skye Biker Shorts and get a beautiful summer look for your workout or yoga sessions.</p>
                <a href="{% raw %}{{store direct_url='summer-ideas'}}{% endraw %}" class="action primary"><span>Discover</span></a>
            </div>
            <div class="picture">
                <img src="{% raw %}{{media url=&quot;wysiwyg/argento/chic/summer-look.webp&quot;}}{% endraw %}" alt="Get the summer look" />
            </div>
        </div>
    </div>
</div>
<div class="jumbotron padding-l">
    <div class="container">
        <div class="element image-block left">
            <div class="info">
                <h2 class="heading">Learn our story</h2>
                <p class="text font-serif">It’s difficult to tell the story of our stores’ ten years without going back to the beginning. Celebrating 10 years means reflecting on 20 years of adventures and choices. The choice to do better, the choice to be human, the choice to act, but also the choice to trust one’s instinct and convictions. It means writing a new story, that is so much more than a fashion story, but a story of life – mine, yours and every man and woman who helps write it.</p>
                <a href="{% raw %}{{store direct_url='about-us'}}{% endraw %}" class="action primary"><span>About us</span></a>
            </div>
            <div class="picture">
                <img src="{% raw %}{{media url=&quot;wysiwyg/argento/chic/learn-our-story.webp&quot;}}{% endraw %}" alt="Learn our story" />
            </div>
        </div>
    </div>
</div>
<div class="jumbotron jumbotron-dark no-padding">
    <div class="container">
        <div class="element image-block image-shift right">
            <div class="info color-invert">
                <h2 class="heading">The Circular Denim Project</h2>
                <p class="text font-serif">The journey to transform end of life jeans.</p>
                <a href="{% raw %}{{store direct_url='summer-ideas'}}{% endraw %}" class="action primary"><span>Discover</span></a>
            </div>
            <div class="picture">
                <img src="{% raw %}{{media url=&quot;wysiwyg/argento/chic/denim.webp&quot;}}{% endraw %}" alt="The Circular Denim Project" />
            </div>
        </div>
    </div>
</div>
```

### Sign up for our newsletter

![Newsletter](/images/m2/argento/chic/home/newsletter.png)

This is HTML content with the newsletter subscribe form:

```html
<div class="jumbotron padding-l block-newsletter color-invert hero">
    <div class="container a-center">
        <div class="block-title">
            <strong role="heading" aria-level="3">Sign up for our newsletter</strong>
            <p class="subtitle font-serif">Get discounts, presale information and a chance to be featured in our Instagram creators feed.</p>
        </div>
        <div class="block-content">
            {% raw %}{{block class="Magento\Newsletter\Block\Subscribe" template="Magento_Newsletter::subscribe.phtml"}}{% endraw %}
        </div>
    </div>
</div>
```

### Our Brands

![Our Brands](/images/m2/argento/chic/home/brands.png)

This row is slider with brands your store offers or working with. It is regular HTML content that displays the `brands` static block.

Piece of CMS Page content for this section:

```html
<div class="jumbotron block-brands">
    <div class="container">
        {% raw %}{{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="brands"}}{% endraw %}
    </div>
</div>
```

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [Argento Chic docs homepage](/m2/argento/chic/)
