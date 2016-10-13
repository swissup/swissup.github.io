---
layout: default
title: Slick Carousel Usage
description: How to use Slick Carousel for Magento
keywords: slick carousel, slider, static content slider, products slider, products carousel
category: SlickCarousel
---

# Slick Carousel Usage

### Contents

 1. [Basic Usage](#basic-usage) (Static content carousel)
 2. [Advanced Usage](#advanced-usage) (Product listing carousel)
 3. [Lazy Loading](#lazy-loading)
 4. [Responsive Display](#responsive-display)
 5. [Using in Argento](#using-in-argento)
 6. [Slick Carousel parameters](#parameters)
 7. [Slick Carousel arrow classes](#arrow-classes)

### Basic Usage

Let's add a nice static carousel to homepage. We'll use a `slick`
plugin to call a carousel on a static content.


 1. Navigate to `CMS > Pages` and select appropriate homepage.

    ![Pages grid](/images/m1/extensions/slick-carousel/usage/basic/pages-grid.png){:class="noborder"}

 2. Insert slider images using "Insert Image..." button.

    ![Homepage content with slides](/images/m1/extensions/slick-carousel/usage/basic/homepage-content-slides.png)

 3. Wrap images into `div` with specified slick [parameters](#parameters):

    ```html
    <div class="slick gray" data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "infinite": true, "swipeToSlide": true}'>
        ...
    </div>
    ```

    ![Homepage content with slider](/images/m1/extensions/slick-carousel/usage/basic/homepage-content-slider.png)

 4. Save the page and navigate to your homepage frontend:

    ![Basic Carousel at the homepage](/images/m1/extensions/slick-carousel/usage/basic/rwd-static-slider.png)

### Advanced Usage

Let's insert `Catalog New Products List` widget to homepage and transform it into Slick Carousel.
We'll use `slickwrapper` plugin to call a carousel on a dynamically generated
content.

 1. Navigate to `CMS > Pages`and select homepage.

 2. Insert new product listing widget.

    ```
    {% raw %}{{widget type="catalog/product_widget_new" display_type="all_products" products_count="20" template="catalog/product/widget/new/content/new_grid.phtml"}}{% endraw %}
    ```

 3. Add new `column_count` paramether to widget and set it value to be equal to `products_count`

    ```
    {% raw %}{{widget type="catalog/product_widget_new" display_type="all_products" products_count="20" column_count="20" template="catalog/product/widget/new/content/new_grid.phtml"}}{% endraw %}
    ```

 4. Wrap this widget into `div` with `el` option and specified slick parameters:

    ```html
    <div class="slick-wrapper gray" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 5, "slidesToScroll": 5, "dots": true}'>
        ...
    </div>
    ```

    ![Product listing widget wrapped with slider](/images/m1/extensions/slick-carousel/usage/advanced/product-listing-widget-slider.png)

 4. Save the page and navigate to your homepage frontend:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/advanced/product-listing-carousel.png)

### Lazy Loading

You can use Slick lazy loading feature for static content carousels. To do it,
simply remove image `src` attribute and place image url in `data-lazy` attribute.
Also you need to add `style="width: 100%;"` for every image:

```html
{% raw %}<div class="slick gray" data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "infinite": true, "swipeToSlide": true}'>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Accessoriesbagimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/accessorieseyewearimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/accessoriesshoesimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/acessoreiesjeweleryimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/clp-sub-m-shirts.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/home_bed_bathimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Homecatimg-decor.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Homecatimg-electronics.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/mencat-newarrivalsimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/mencat-pants.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Mencat-shirtsimg.png"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Mencat-teesimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Womennewarrivalsimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Womenpantsimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Womenskirtsimg.jpg"}}" /></div>
    <div><img style="width: 100%;" data-lazy="{{media url="wysiwyg/Womentopsimg.jpg"}}" /></div>
</div>{% endraw %}
```

### Responsive Display

Slick responsive display feature allows you to set different slider options
for different screen sizes.

For example, with the following code:

```html
<div class="slick-wrapper gray" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 5, "slidesToScroll": 5, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
    {% raw %}{{widget type="catalog/product_widget_new" display_type="all_products" products_count="20" column_count="20" template="catalog/product/widget/new/content/new_grid.phtml"}}{% endraw %}
</div>
```

slider will be looking like this:

 -  screens above 770px will use default settings:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/advanced/product-listing-carousel.png)

 -  screens from 640px to 770px will show 4 slides:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/responsive/product-listing-responsive-4.png)

 -  screens from 480px to 640px will show 3 slides:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/responsive/product-listing-responsive-3.png)

 -  screens from 321px to 480px will show 2 slides:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/responsive/product-listing-responsive-2.png)

 -  screens below 321px will show 1 slide and disable dots navigation:

    ![Product listing carousel](/images/m1/extensions/slick-carousel/usage/responsive/product-listing-responsive-1.png)

### Using in Argento

Argento theme version 1.8.3 comes with custom styles for Slick product carousels.

Examples:

 -  Argento Argento design:

    ```html
    <div class="row">
        <div class="col-md-12">
            <div class="slick-wrapper" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 5, "slidesToScroll": 5, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2, "dots": false}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                {% raw %}{{widget type="highlight/product_random" title="Highlight Products" products_count="20" column_count="20" template="tm/highlight/product/grid.phtml" class_name="highlight-any"}}{% endraw %}
            </div>
        </div>
    </div>
    ```

    ![Argento Argento Slider](/images/m1/extensions/slick-carousel/usage/argento/argento-argento-slider.png){:class="noborder"}

 -  Argento Mall design:

    ```html
    <div class="slick-wrapper" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 5, "slidesToScroll": 5, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 4, "slidesToScroll": 4}}, {"breakpoint": 640, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 480, "settings": {"slidesToShow": 2, "slidesToScroll": 2, "dots": false}}, {"breakpoint": 321, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
        {% raw %}{{widget type="highlight/product_random" title="Highlight Products" products_count="20" column_count="20" template="tm/highlight/product/grid.phtml" class_name="highlight-any"}}{% endraw %}
    </div>
    ```

    ![Argento Mall Slider](/images/m1/extensions/slick-carousel/usage/argento/argento-mall-slider.png){:class="noborder"}

 -  Argento Pure design:

    ```html
    <div class="slick-wrapper" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 4, "slidesToScroll": 4, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 640, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
        {% raw %}{{widget type="highlight/product_random" title="Highlight Products" products_count="20" column_count="20" template="tm/highlight/product/grid.phtml" class_name="highlight-any"}}{% endraw %}
    </div>
    ```

    ![Argento Pure Slider](/images/m1/extensions/slick-carousel/usage/argento/argento-pure-slider.png){:class="noborder"}

 -  Argento Pure2 design:

    ```html
    <div class="jumbotron">
        <div class="container">
            <div class="slick-wrapper" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 4, "slidesToScroll": 4, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 640, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                {% raw %}{{widget type="highlight/product_random" title="Highlight Products" products_count="20" column_count="20" template="tm/highlight/product/grid.phtml" class_name="highlight-any"}}{% endraw %}
            </div>
        </div>
    </div>
    ```

    ![Argento Pure2 Slider](/images/m1/extensions/slick-carousel/usage/argento/argento-pure2-slider.png){:class="noborder"}

 -  Argento Flat design:

    ```html
    <div class="row jumbotron">
        <div class="stub"></div>
        <div class="col-md-12">
            <div class="container hero">
                <div class="slick-wrapper dark" data-slick-wrapper='{"el": ".products-grid", "slidesToShow": 4, "slidesToScroll": 4, "dots": true, "responsive": [ {"breakpoint": 770, "settings": {"slidesToShow": 3, "slidesToScroll": 3}}, {"breakpoint": 640, "settings": {"slidesToShow": 2, "slidesToScroll": 2}}, {"breakpoint": 480, "settings": {"slidesToShow": 1, "slidesToScroll": 1, "dots": false}}]}'>
                    {% raw %}{{widget type="highlight/product_random" title="Highlight Products" products_count="20" column_count="20" template="tm/highlight/product/grid.phtml" class_name="highlight-any"}}{% endraw %}
                </div>
            </div>
        </div>
    </div>
    ```

    ![Argento Flat Slider](/images/m1/extensions/slick-carousel/usage/argento/argento-flat-slider.png){:class="noborder"}

### Parameters

Full list of available [options][slick_options] and [examples][slick_examples]
is available at slick's carousel [official site][slick_site].

### Arrow Classes

Default slider arrows color is white. When you use slider on the page
with white background, arrows will be not visible. To change arrows color,
you can add following css classes to slider wrapper:

 -  `dark` show black arrows
 -  `gray` show gray arrows

[slick_site]: http://kenwheeler.github.io/slick/
[slick_options]: http://kenwheeler.github.io/slick/#settings
[slick_examples]: http://kenwheeler.github.io/slick/#demos
