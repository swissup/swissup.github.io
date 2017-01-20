---
layout: default
title: Argento Mall Homepage
description: Argento Mall homepage
keywords: "ArgentoMall, argento theme, homepage, slider, easycatalogimages, tabs, highlight, banner"
category: Argento
---

# Argento Mall Homepage

Homepage content is editable at `Cms > Pages` interface.

### Contents

 1. [Slider and Banners row](#slider-and-banners-row)
 2. [Sidebar Navigation](#sidebar-navigation)
 3. [Deal of the Week, Editor Choice](#deal-of-the-week,-editor-choice)
 4. [Video of the day](#video-of-the-day)
 5. [Featured Products](#featured-products)
 6. [New Products Slider](#new-products-slider)
 7. [Whole homepage code](#whole-homepage-content)

### Slider and Banners row

![Slider and Banners at ArgentoMall homepage](/images/argento/mall/homepage-slider-baner.jpg)

Code:

```html
{% raw %}<div class="callout-home-top col2-set">
    <div class="col-1">
        {{widget type="easyslide/insert" slider_id="argento_mall"}}
    </div>
    <div class="col-2">
        {{block type="newsletter/subscribe" name="homepage.newsletter" template="newsletter/subscribe.phtml"}}
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-mall-home-top"}}
    </div>
</div>{% endraw %}
```

Slider is powered by EasySlider module. You can manage each slide and animation
effects at `Templates-Master > Easyslide` backend page.

Newsletter - is a standard magento `newsletter/subscribe` block.

Free Shipping banner is powered by EasyBanner module. You can add or configure
banners at `Templates-Master > Easybanner`.

### Sidebar navigation

The following code is used in order to display the sidebar navigation:

```html
{% raw %}<div class="col-side sidebar">
    {{block type="navigationpro/navigation" template="tm/navigationpro/sidebar.phtml" name_in_layout="navpro-homepage-left" menu_name="argento_mall_left" enabled="1"}}
</div>{% endraw %}
```

### Deal of the Week, Editor Choice

![Deal of the Week, Editor Choice and Video of the Day](/images/argento/mall/homepage-content-block.jpg)

Code:

```html
{% raw %}<div class="col3-set">
    <div class="col-1 col-mobile-50">
        {{widget type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
    </div>
    <div class="col-2 col-mobile-50">
        {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor's choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
    </div>
    <div class="col-3">
        {{widget type="cms/widget_block" template="cms/widget/static_block/default.phtml" block_id="video_of_the_day"}}
    </div>
</div>{% endraw %}
```

### Video of the Day

![Video of the Day](/images/argento/mall/homepage-video-block.jpg)

> From **Argento ver. 1.8.5** "Video of the Day" block was moved to CMS Block 
> **'video_of_the_day'**

Code:

```html
<div class="block block-alt video-of-day">
    <div class="block-title"><span>Video of the day</span></div>
    <div class="block-content">
        <div class="video-container">
            <object>
                <param name="movie" value="http://www.youtube.com/v/6BQfCoqbubE">
                <param name="allowFullScreen" value="true">
                <param name="allowScriptAccess" value="always">
                <param wmode="transparent">
                <embed src="http://www.youtube.com/v/6BQfCoqbubE" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="250" height="201" wmode="transparent">
            </object>
        </div>
        <p><small>Amazing Canon Rebel XSi commercial that I saw on TV the other day.</small></p>
    </div>
</div>
```

To change video for your needs, please, modify following parameners:

  - **value**  - just change video url here i.e. 'http://www.youtube.com/v/6BQfCoqbubE'
  - change:

    ```html
     <embed src="http://www.youtube.com/v/6BQfCoqbubE" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="250" height="201" wmode="transparent">
    ```
    to this piece of code:

    ![Video at Youtube](/images/argento/mall/youtube-share.png)
 
### Featured Products

![Featured products](/images/argento/mall/homepage-featured-products.jpg)

Code:

```html
{% raw %}{{widget type="highlight/product_featured" name="homepage.featured" class_name="block block-featured-homepage" title="Featured products" products_count="6" column_count="3" template="tm/highlight/product/grid-wide.phtml"}}{% endraw %}
```

### New Products Slider

![New Ptoducts Slider](/images/argento/mall/homepage-new-products-slider.jpg)

Code:

```html
{% raw %}{{widget type="highlight/product_new" name="homepage.new" title="New products" products_count="30" template="tm/highlight/product/slider.phtml"}}{% endraw %}
```

### Whole homepage content

In case if you've lost original homepage content, you can get it below:

```html
{% raw %}<div class="callout-home-top col2-set">
    <div class="col-1">
        {{widget type="easyslide/insert" slider_id="argento_mall"}}
    </div>
    <div class="col-2">
        {{block type="newsletter/subscribe" name="homepage.newsletter" template="newsletter/subscribe.phtml"}}
        {{widget type="easybanner/widget_placeholder" placeholder_name="argento-mall-home-top"}}
    </div>
</div>

<div class="col-home-set">
    <div class="col-side sidebar">
        {{block type="navigationpro/navigation" template="tm/navigationpro/sidebar.phtml" name_in_layout="navpro-homepage-left" menu_name="argento_mall_left" enabled="1"}}
    </div>
    <div class="col-main">
        <div class="col3-set">
            <div class="col-1 col-mobile-50">
                {{widget type="highlight/product_special" name="homepage.special" title="Deal of the week" class_name="block block-alt" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
            </div>
            <div class="col-2 col-mobile-50">
                {{widget type="highlight/product_attribute_yesno" attribute_code="recommended" class_name="editor-choice  block block-alt" name="homepage.editor_choice" title="Editor's choice" products_count="1" column_count="1" template="tm/highlight/product/grid.phtml"}}
            </div>
            <div class="col-3">
                <div class="block block-alt video-of-day">
                  <div class="block-title"><span>Video of the day</span></div>
                  <div class="block-content">
                    <div class="video-container">
                    <object><param name="movie" value="http://www.youtube.com/v/6BQfCoqbubE"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always"><param wmode="transparent"><embed src="http://www.youtube.com/v/6BQfCoqbubE" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="250" height="201" wmode="transparent"></object>
                    </div>
                    <p><small>Amazing Canon Rebel XSi commercial that I saw on TV the other day.</small></p>
                  </div>
                </div>
            </div>
        </div>
        {{widget type="highlight/product_featured" name="homepage.featured" class_name="block block-featured-homepage" title="Featured products" products_count="6" column_count="3" template="tm/highlight/product/grid-wide.phtml"}}
        {{widget type="highlight/product_new" name="homepage.new" title="New products" products_count="30" template="tm/highlight/product/slider.phtml"}}
    </div>
</div>{% endraw %}
```
