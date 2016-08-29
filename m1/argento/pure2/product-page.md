---
layout: default
title: Argento Pure 2.0 Product Page
description: ArgentoPure 2.0 product page
keywords: "ArgentoPure, pure, pure2, product page, brand information, services sidebar, colorswatches, tabs, soldtogehter"
category: Argento
---

# Argento Pure 2.0 Product Page

### Layout

Pure 2.0 is using `page_two_columns_right` layout for the product page. To
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

### Sidebar

#### Brand information

{::options parse_block_html="true" /}
<div class="mdl-grid"><div class="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet">

![Brand Information](/images/argento/pure2/product-page/brand_information.png)

</div><div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet">

Brand information block is powered by AttributePages module and displays
image linked with product `manufacturer` attribute.

To make this block active, you should create Attributepage for the `manufacturer`
attribute at `Templates-Master > Attribute Pages > Manage Pages` and upload
images for every attribute option.

You can edit this block at `Cms > Static Blocks`. See the `product_sidebar`
block contents:

```
{% raw %}{{block type="attributepages/product_option" template="tm/attributepages/product/options.phtml" width="180" height="90" use_image="1" image_type="image" use_link="1" attribute_code="manufacturer" css_class="hidden-label"}}{% endraw %}
```

You can also create attribute page for any other attribute. In this case you
will need to change part of the widget code above:

Replace `attribute_code="manufacturer"` with `attribute_code="attribute_code"`

</div></div>

#### Services block

{::options parse_block_html="true" /}
<div class="mdl-grid"><div class="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet">

![Services Sidebar](/images/argento/pure2/product-page/services_sidebar.png)

</div><div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet">

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

</div></div>

### Content

#### Images

{::options parse_block_html="true" /}
<div class="mdl-grid"><div class="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet">

![Product Image](/images/argento/pure2/product-page/images.jpg)

</div><div class="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet">

Product image and gallery is powered by LightboxPro module, that has a lot of
configuration optins at `System > Configuration > Template-Master > LightboxPro`
section.

It allow you to configure the following options:

- Image dimensions
- Gallery controls
- Overlay settings
- Popup settings

</div></div>

#### Colorswatches

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

#### Tabs

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

#### Soldtogether blocks

Soldtogether powered blocks. You can customize these blocks
from  `System > Configuration > Tempaltes-Master > SoldTogether` section.

Configuration provides the following options:

- Products count
- Columns count
- Amazon style for `Frequently bought together` block

##### Frequently bought together

`System > Configuration > Tempaltes-Master > SoldTogether > Frequently Bought Together`

![Frequently bought together](/images/argento/pure2/product-page/frequently_bought_together.png)

##### Customers who bought this item also bought

`System > Configuration > Tempaltes-Master > SoldTogether > Customer Bought Together`

![Customers who bought this item also bought](/images/argento/pure2/product-page/customer_who_bought_this_also_bought.png)

[custom_xml]: /argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
[fontawesome]: http://fontawesome.io/icons/ "FontAwesome Icons"
[colorswatches]: http://sherodesigns.com/tutorial-configurable-swatches-in-magento/ "Catalog Configurable Swatches tutorial"
