---
layout: default
title: Argento Flat Product Page
description: ArgentoFlat product page
keywords: >
    ArgentoFlat, flat, product page, brand information, services sidebar,
    colorswatches, tabs, soldtogehter
category: Argento
---

# Argento Flat Product Page

### Contents

 -  [Configuration settings](#configuration-settings)
 -  [Layout](#layout)
 -  [Brand logo and Services blocks](#brand-logo-and-services-blocks)
 -  [Product images](#product-images)
 -  [Product labels](#product-labels)
 -  [Tabs](#tabs)
 -  [Soldtogether blocks](#soldtogether-blocks)
    - [Frequently bought together](#frequently-bought-together)
    - [Customers who bought this item also bought](#customers-who-bought-this-item-also-bought)

### Configuration settings

There is specific section for product page configuration in Magento Admin. Go to `System` → `Configuration`. Find `TM Argento Themes` section there and choose `Flat`.

![Product page settings](/images/argento/default/product-page-settings.png)

Here you can:

 -  change product image layout and set product image size (check [Product Images](#product-images) paragraph),
 -  stick product image and/or product details section.

### Layout

Flat is using `page_two_columns_right` layout for the product page. To
change it to another one, create [custom.xml][custom_xml] file and add the
following instruction:

```xml
<catalog_product_view>
    <update handle="page_two_columns_left"/>
</catalog_product_view>
```

Possible values for handle variable:

```
page_two_columns_left
page_two_columns_right
page_three_columns
page_one_column
```

### Brand logo and Services blocks

![Argento Flat Product Page](https://cldup.com/Mi6xHZ6A2u-3000x3000.png)

#### Brand Logo

Argento use Attributepage module to show the brand logo. So, first you need
to setup the Attributepage extension.

1. Navigate to TemplateMasters > Attribute Pages > Manage Pages and create brands
page based on `manufacturer` attribute. Feel free to use any other attribute.
2. Attach image and thumbnail images to each of the attributepage options.
3. Open `Cms > Static Blocks` and open `product_sidebar` block.
4. Change `manufacturer` to attribute code, that you are using for saved attributepage.

Code:

```html
{% raw %}<div class="block block-product-sidebar">
    <div class="block-content">
        {{block type="attributepages/product_option" template="tm/attributepages/product/options.phtml" width="180" height="90" use_image="1" image_type="image" use_link="1" attribute_code="manufacturer" css_class="hidden-label"}}
        {{block type="cms/block" block_id="services_sidebar"}}
    </div>
</div>{% endraw %}
```

#### Services block

Services sidebar block is a simple cms block powered with FontAwesome icons.

You can edit this block at `Cms > Static Blocks > services_sidebar`.

> Please note, that this block is displayed on the Contacts Us page too.
>  If you would like to change the block on the product page only, please edit
>  the `product_sidebar` cms block.

Code:

```html
<div class="block block-services-sidebar">
    <div class="block-title"><span>Our Services</span></div>
    <div class="block-content">
        <div class="icon-section section-delivery section-left">
            <span class="fa-stack fa-2x icons-primary">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-truck fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <h5>Delivery</h5>
                <p>We guarantee to ship your order next day after order has been submitted</p>
            </div>
        </div>
        <div class="icon-section section-customer-service section-left">
            <span class="fa-stack fa-2x icons-primary">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <h5>Customer Service</h5>
                <p>Please contacts us and our customer service team will answer all your questions</p>
            </div>
        </div>
        <div class="icon-section section-returns section-left">
            <span class="fa-stack fa-2x icons-primary">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-reply fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <h5>Easy Returns</h5>
                <p>If you are not satisfied with your order - send it back within  30 days after day of purchase!</p>
            </div>
        </div>
    </div>
</div>
```

### Product Images

Product images can be presented in two ways.

 Default                    | Slider 
----------------------------|--------------------------------
 Main image with thumbnails | Horisontal scroll of all images
----------------------------|--------------------------------
![Product Image - default](/images/argento/flat/product-page/product-images.png){:class="noborder"} | ![Product Image - slider](/images/argento/flat/product-page/product-images-slider.png){:class="noborder"}

Product image and gallery is powered by LightboxPro module, that has a lot of
configuration optins at `System > Configuration > Template-Master > LightboxPro`
section.

It allow you to configure the following options:

- Image dimensions
- Gallery controls
- Overlay settings
- Popup settings

### Colorswatches

{::options parse_block_html="true" /}
<div class="mdl-grid"><div class="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet">

![Catalog Configurable Swatches](/images/argento/pure2/product-page/colorswatches.png)

</div><div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet">

Catalog Configurable Swatches - is a standard Magento feature since 1.9.1, which
is fully integrated with the following Argento modules:

- AjaxPro
- AjaxSearch
- LightboxPro

You can read this
[great tutorial][colorswatches] by [sherodesigns](http://sherodesigns.com) about
color swatches configuration.

</div></div>

### Product Labels

The display of the label on product is powered by Prolabels module. You can add
custom label or assign it to any items on the Product page at
`Templates-Master > Prolabels` backend page.

### Tabs

![Tabs](/images/argento/pure2/product-page/tabs.png)

Argento tabs is powered by EasyTabs module. You can add or remove additional tabs
from `Templates-Master > Easy Tabs` page.

The following tabs are shown by default:

- Product Description
- Additional Information
- Tags
- Reviews
- Questions

All of these tabs are standard Magento features except `Questions`. It's a AskIt
powered block.

This block is very handy for customers that are not sure about the product or
sevices and have some questions to ask.

### Soldtogether blocks

Soldtogether powered blocks. You can customize these blocks
from  `System > Configuration > Templates-Master > SoldTogether` section.

Configuration provides the following options:

- Products count
- Columns count
- Amazon style for `Frequently bought together` block

#### Frequently bought together

`System > Configuration > Tempaltes-Master > SoldTogether > Frequently Bought Together`

![Frequently bought together](/images/argento/flat/product-page/frequently-bought-together.png)

#### Customers who bought this item also bought

`System > Configuration > Tempaltes-Master > SoldTogether > Customer Bought Together`

![Customers who bought this item also bought](/images/argento/flat/product-page/customers-who-bought-also-bought.png)

[custom_xml]: /m1/argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
[fontawesome]: http://fontawesome.io/icons/ "FontAwesome Icons"
[colorswatches]: http://sherodesigns.com/tutorial-configurable-swatches-in-magento/ "Catalog Configurable Swatches tutorial"
