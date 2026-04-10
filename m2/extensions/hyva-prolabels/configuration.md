---
layout: default
title: Prolabels Configuration
description: >
    Magento2 extension to show labels for products
keywords: >
    magento2 featured products, magento2 product listing block, featured
    products block on magento2 homepage, labels,
category: Prolabels
---

# ProLabels configuration
{:.no_toc}

* TOC
{:toc}

Go to ***Stores → Configuration → Swissup → ProLabels*** page to configurate product labels.

## "On Sale" Label

SALE labels are the cost-effective way to mark store sales and attract visitors attention. They are shown on discounted and on-sale products. Using On Sale labels you catch customers attention to the promotional items.

### Product Page 

{% include gallery.html images=site.data.gallery.m2.prolabels.config.product class="photoswipe scroll" %}

In this subsection of "On Sale Label" section you can configurate label on product page. Most of the times labels on product page are bigger and containe more information than labels on category page.

Here you can enable or disable label with option `Enable`.

Use label presets to select one of existing predefined labels. Click 'Load and Select' button in `Select Label Preset` option.

With option `Position` you may change label position on product image. Also there is position *"Content"*. Labels from *"Content"* position outputs under product details (near social buttons and email friend button).

Or you can be creative and create your own unique label. To do so you may need a bit of CSS knowladge click `Show advanced options`. There you can set `Label Text`, `Custom Label` styles, and `Label Custom Url`. Values from `Round Method` and `Round Value` options use to calculate numeric predefined variables. To get more about predefined variables and round options check [this article](../predefined/).

Other way to create fantastic label is upload some nice picture with `Image` option.

### Category Page

{% include gallery.html images=site.data.gallery.m2.prolabels.config.category class="photoswipe scroll" %}

Use this subsection to configurate label on category pages and all other listings - search result pages, [Highlight](/m2/extensions/highlight/) pages and widgets, [Attribute Pages](/m2/extensions/attributepages/) widgets, etc.

Options in this section are very similar to options in "Product Page" subsection. You can enable/disable label, select one from existing preset and create own label with advanced options.

## "Is New" Label

New Labels are used for the presentation of new items at your store.

Please don't think that we are lazy. Section "In New Label" almost identical to "On Sale Label". The same two subsections with the same options to enable/disable label, change it position, select label from preset and so on for Product Page and for Category Page. To get some screenshots and check ["On Sale" Label](#on-sale-label).

## "In Stock" Label

In Stock labels are used to show low stock items. With in-stock labels you focus the customers attention on the limited availability of products.

And again two subsections "Product Page" and "Category Page" where you can specify prepare label product page and for listing. Check ["On Sale" Label](#on-sale-label) for screenshots.

One major difference is additional setting in advanced options - `Display if Stock is lower than`. Default value is '10'. It means label appears only when product stock qty is less than 10.

![Stock lower](/images/m2/prolabels/config/stock-lower.png)

## "Out Of Stock" Label

Mark out of stock items with badge "Temporarily Out" or "Back Soon".

The same two subsections "Product Page" and "Category Page" with the same options as ["On Sale" Label](#on-sale-label). Check it to get familiar with interfaces.

## Storefront output

![Storefront output](/images/m2/prolabels/config/storefront-output.png)

This section is hidden gem of all ProLabels module. With its help you can change where to show labels. For example, you can output content labels in other place.

In most cases ProLabels works out of the box with third-party magento themes. But if there are issues with your theme this config is first place that can help you. A bit of CSS knowladge, a bit of debugging and issue can be solved.

#### You can also check
{:.no_toc}

* [Installation](../installation/)
* [Admin interfaces](../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
