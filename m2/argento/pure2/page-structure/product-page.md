---
layout: default
title: Argento Pure2 Product Page
description: ArgentoPure2 product page
keywords: >
    ArgentoPure2, pure2, product page, brand information, services sidebar,
    product tabs, soldtogehter, product questions
category: Argento
---

# Argento Pure2 product page

### Contents

 -  [Layout](#layout)
 -  [Brand logo and Services blocks](#brand-logo-and-services-blocks)
 -  [Tabs](#tabs)
 -  [Questions](#questions)
 -  [Soldtogether blocks](#soldtogether-blocks)

### Layout

ArgentoPure2 is using `2columns-right` layout for the product page.
Follow our [customization guide](/m2/argento/customization/change-page-layout/)
to change it to another one.

### Brand logo and Services blocks

Brand Logo | Services Block
-----------|---------------
![Brand logo at product page](/images/m2/argento/flat/product-page/brand-logo.png) | ![Services block at product page](/images/m2/argento/flat/product-page/services-sidebar.png)

#### Brand Logo

Argento uses [Attributepage](/m2/extensions/attributepages/) module to show
brand logo. So, first you need to setup Attributepage extension:

 1. Navigate to Swissup > Attribute Pages > Manage Pages and create brands
    page based on `manufacturer` attribute. Feel free to use any other attribute.
 2. Attach image and thumbnail images to each of the attributepage options.
 3. Open Content > Static Blocks and open `product_sidebar` block.
 4. Change `manufacturer` to attribute code, that you are using for created
    attributepage.

Code:

```html
{% raw %}<div class="block block-product-sidebar">
    {{widget type="Swissup\Attributepages\Block\Product\Option" attribute_code="brand" css_class="hidden-xs hidden-label a-center" use_link="1" use_image="1" image_type="image" width="200" height="120" block_template="Swissup_Attributepages::product/options.phtml"}}
    {{widget type="Magento\Cms\Block\Widget\Block" template="widget/static_block/default.phtml" block_id="services_sidebar"}}
</div>{% endraw %}
```

#### Services block

Services sidebar block is a simple cms block powered by FontAwesome icons.

You can edit this block at `Content > Static Blocks > services_sidebar`

Code:

```html
<div class="block block-services-sidebar">
    <div class="block-title"><strong>Our Services</strong></div>
    <div class="block-content">
        <div class="icon-section section-delivery">
            <span class="fa-stack fa-2x icon">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-truck fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <div class="h4 section-title">Delivery</div>
                <p>We guarantee to ship your order next day after order has been submitted</p>
            </div>
        </div>
        <div class="icon-section section-customer-service">
            <span class="fa-stack fa-2x icon">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <div class="h4 section-title">Customer Service</div>
                <p>Please contacts us and our customer service team will answer all your questions</p>
            </div>
        </div>
        <div class="icon-section section-returns">
            <span class="fa-stack fa-2x icon">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-reply fa-stack-1x fa-inverse"></i>
            </span>
            <div class="section-info">
                <div class="h4 section-title">Easy Returns</div>
                <p>If you are not satisfied with your order - send it back within  30 days after day of purchase!</p>
            </div>
        </div>
    </div>
</div>
```

### Tabs

![Tabs](/images/m2/argento/pure2/product-page/tabs.png)

Argento tabs is powered by EasyTabs module. You can add or remove additional tabs
from `Swissup > EasyTabs` page.

The following tabs are shown by default:

- Details
- More Information
- Reviews
- Upsell products
- Questions

All of these tabs are standard Magento features except "Questions". It's a
[Askit](/m2/extensions/askit/) powered block.

### Questions

![Questions](/images/m2/argento/pure2/product-page/questions.png)

Product questions block is powered by [Askit](/m2/extensions/askit/) module.

### Soldtogether blocks

Frequently bought together | Customers who bought this item also bought
---------------------------|-------------------------------------------
![Frequently bought together](/images/m2/argento/pure2/product-page/soldtogether-orders.png) | ![Customers who bought this item also ](/images/m2/argento/pure2/product-page/soldtogether-customers.png)

Soldtogether powered blocks. You can customize these blocks
at `Stores > Configuration > Swissup > SoldTogether` section.
