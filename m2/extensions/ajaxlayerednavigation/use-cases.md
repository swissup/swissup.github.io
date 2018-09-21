---
layout: default
title: Ajax Layered Navigation Use Cases
description: Magento2 Ajax Layered Navigation
keywords: "magento 2 layered navigation extension, magento 2 layered navigation, magento 2 ajax layered navigation, magento 2 custom layered navigation, magento 2 layered navigation multi select, magento 2 custom product collection with layered navigation, magento create custom layered navigation, magento custom layered navigation filter, layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Use cases

Our module supports adding New, In stock, Out of Stock and On Sale filters to Magento 2 layered navigation multi select. By allowing users to sort items that way, you make the searching process more convinient and effective.

 1. [Stock Filter](#stock-filter)
 2. [On Sale Filter](#on-sale-filter)
 3. [New Filter](#new-filter)
 4. [Rating Filter](#rating-filter)

#### Stock Filter

Please follow the next steps:

1. Go `Stores -> Configuration -> Catalog -> Inventory  -> Stock Options -> Display Out of Stock Products` and enable the display Out of Stock Products.

    ![Enable Display out of stock products](https://user-images.githubusercontent.com/412612/33838709-f174d9c8-de98-11e7-9adf-2b74829443f3.png)

2. Open `Store -> Attributes -> Product`.

3. Find the attribute `quantity_and_stock_status`.

    ![find attr](https://user-images.githubusercontent.com/412612/33837857-71dcfb48-de96-11e7-95b5-b137197e5357.png)

4. Open Storefront Properties and find  `Use in Layered Navigation` and set `Filterable with results`.

    ![Change on filtrable](https://user-images.githubusercontent.com/412612/33837858-71fa5b98-de96-11e7-9934-3e3bdc371fe9.png)

5. In console run - `php bin/magento indexer:reindex`.

6. Check on the frontend. At least one product must be 'out of stock'.

    ![screenshot from 2017-12-11 17-14-50](https://user-images.githubusercontent.com/412612/33838017-de535e98-de96-11e7-8960-03b961f7dda1.png)

#### On Sale Filter

1. Open `Store -> Attributes -> Product`.

2. Find attribute `special_price`.

    ![find price](https://user-images.githubusercontent.com/412612/33997963-cd9fd284-e0ee-11e7-8151-8e5efae57de9.png)

3. Open Storefront Properties and find  `Use in Layered Navigation` and set `Filterable with results`.

    ![set filtrable](https://user-images.githubusercontent.com/412612/33998051-107fd270-e0ef-11e7-8e55-784ae540b2eb.png)

4. In console run - `php bin/magento indexer:reindex`.

5. Check on the frontend.

![frontend](https://user-images.githubusercontent.com/412612/34001555-01942b80-e0f9-11e7-89e3-c8c1e68db167.png)

#### New Filter

1. Open `Store -> Attributes -> Product`.

2. Find attribute `new`.

![screenshot from 2017-12-18 11-14-55](https://user-images.githubusercontent.com/412612/34098373-bde2eaa4-e3e4-11e7-933b-1d6ce717a036.png)

3. Open Storefront Properties and find `Use in Layered Navigation`. Check/set `Filterable with results` (by default Yes).

![screenshot from 2017-12-18 11-16-18](https://user-images.githubusercontent.com/412612/34098410-e83e3d94-e3e4-11e7-92bb-373b0e3ce283.png)

4. In console run - `php bin/magento indexer:reindex`.

5. How to set product as New in Magento 2:

 -  Click on “products” -> “catalog“:
 -  Choose the product that you want to change and click into”edit”.
 -  Rolling the mouse down to relatively the end of the page, click on ” Autosettings”.
 -  Fill the “Date blank“.
 -  Save all changes.

6. Check on the frontend.

![screenshot from 2017-12-14 16-42-33](https://user-images.githubusercontent.com/412612/33997669-cf349072-e0ed-11e7-8678-446f9371ed5c.png)

#### Rating Filter

With rating filter functionality it is no need to scroll through thousands of products. The opportunity to sort items by rating is good for clients who trust other customers reviews.

1. Open `Store -> Attributes -> Product`.

2. Find attribute `rating_summary`.

    ![how to find product attribute](https://user-images.githubusercontent.com/412612/34213510-1a3f9170-e5a8-11e7-90b5-570590d31027.png)

3. Open Storefront Properties and find  `Use in Layered Navigation`. Check/set `Filterable with results` (by default Yes).

    ![edit product attribute](https://user-images.githubusercontent.com/412612/34213608-5bf51d6a-e5a8-11e7-9c8d-0fc3acc1ed57.png)

4. In console run

    ~~~
    bin/magento index:reindex
    ~~~

#### Integration with magento 2.1

For compatibility with 2.1 need apply changes from 2 commits:

- [magento/magento2@f8c75a8](https://github.com/magento/magento2/commit/f8c75a8)
- [magento/magento2@87ec99d](https://github.com/magento/magento2/commit/87ec99d)

~~~
    curl -L https://github.com/magento/magento2/commit/f8c75a8.patch > /tmp/f8c75a8.patch
    git apply --check /tmp/f8c75a8.patch
    git apply /tmp/f8c75a8.patch

    curl -L https://github.com/magento/magento2/commit/87ec99d.patch > /tmp/87ec99d.patch
    git apply --check /tmp/87ec99d.patch
    git apply /tmp/87ec99d.patch
~~~