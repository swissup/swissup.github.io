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

## ProLabels configuration

The **ProLabels** extension offers flexible and easy to use configuration.
In order to start working with configuration, please go to
`Magento Admin > Stores > Configuration > Swissup > ProLabels`.

### General settings

-   `Cron Daily Labels Reindex` - Reindexing labels via cron job is running on a daily basis
-   `jQuery Selector For Base Image Wrapper` - jQuery selector allow to wrap of base image on product page
-   `jQuery Selector For Content Labels Container` - jQuery selector to insert the content labels to any place of the product page

![General](/images/m2/prolabels/general.png)

### On Sale settings

SALE labels are the cost-effective way to mark store sales and attract visitors attention. They are shown on discounted and on-sale products. Using On Sale labels you catch customers attention to the promotional items.

##### Product and Category Page Configuration

-   `Enable` - select **Yes** to enable **On Sale Label**
-   `Position` - select the position of the label
-   `Label Text` - in this field you are allowed to write the text for the label. Also you can use a few predefined extension variables to choose from <br />
For example : Save#discount_percent#% (Save is the word you selected by yourself , #discount_percent# - predefined variable)
-   `Image` - upload the image of the label
-   `Custom Label` - custom css style for label
-   `Label Custom Url` - custom url for label (open in new tab)
-   `Round Method` - select the method of computing rounded unit of final result. Possible values are Math, Ceil and Floor.
-   `Round Value` - specify the rounded value

![OnSale](/images/m2/prolabels/on_sale.png)

### Is New settings

New Labels are used for the presentation of new items at your store.

##### Product and Category Page Configuration

-   `Enable` - select **Yes** to enable **Is New Label**
-   `Position` - select the position of the label
-   `Label Text` - in this field you are allowed to write the text for the label. Also you can use a few predefined extension variables to choose from
-   `Image` - upload the image of the label
-   `Custom Label` - custom css style for label
-   `Label Custom Url` - custom url for label (open in new tab)

![IsNew](/images/m2/prolabels/is_new.png)

### In Stock settings

In Stock labels are used to show low stock items. Using in stock and out of stock labels, you focus the customers attention on the limited availability of products.

##### Product and Category Page Configuration

-   `Enable` - select **Yes** to enable **In Stock Label**
-   `Position` - select the position of the label
-   `Label Text` - in this field you are allowed to write the text for the label. Also you can use a few predefined extension variables to choose from
-   `Image` - upload the image of the label
-   `Custom Label` - custom css style for label
-   `Display if Stock is lower then` - set the value, that is automatically monitoring the number of products in stock during output of the label.
-   `Label Custom Url` - custom url for label (open in new tab)

![InStock](/images/m2/prolabels/in_stock.png)

### Out Of Stock settings

##### Product and Category Page Configuration

-   `Enable` - select **Yes** to enable **Out Of Stock Label**
-   `Position` - select the position of the label
-   `Label Text` - in this field you are allowed to write the text for the label. Also you can use a few predefined extension variables to choose from
-   `Image` - upload the image of the label
-   `Custom Label` - custom css style for label
-   `Label Custom Url` - custom url for label (open in new tab)

![OutOfStock](/images/m2/prolabels/out_stock.png)

* [Installation](installation/)
* [Admin interfaces](interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
