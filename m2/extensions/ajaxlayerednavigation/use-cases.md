---
layout: default
title: Ajax Layered Navigation Use Cases
description: Magento2 Ajax Layered Navigation
keywords: "magento 2 layered navigation extension, magento 2 layered navigation, magento 2 ajax layered navigation, magento 2 custom layered navigation, magento 2 layered navigation multi select, magento 2 custom product collection with layered navigation, magento create custom layered navigation, magento custom layered navigation filter, layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Use cases

Our module supports adding New, In stock, Out of Stock and On Sale filters to Magento 2 layered navigation multi select. By allowing users to sort items that way, you make the searching process more convinient and effective.

 0. [Toogle content by filter](#toogle-content-by-filter)
 1. [Stock Filter](#stock-filter)
 2. [On Sale Filter](#on-sale-filter)
 3. [New Filter](#new-filter)
 4. [Rating Filter](#rating-filter)
 5. [Integration with magento 2.1](#integration-with-magento-21)

#### Toogle content by filter

If you want to show/hide some HTML when some specific filter was applied in layered navigation.
So before you show some HTML you need to add it to the category page. If you already have HTML content at the page. Just wrap it in container `<div class="swissup-aln-toogle swissup-aln-toogle-color-5484 swissup-aln-hidden"><!--your toogle content here --></div>`.

 1. Create a static block for all categories. Go `Content -> Blocks -> Add New Block` and fill the form like above
![Add custom static block](https://user-images.githubusercontent.com/412612/77307663-57e1cf00-6d02-11ea-8d00-37c505c58e8e.png)
 2. Create widget (type static block). Go `Content -> Wifdgets -> Add Widget` and fill form `Storefront Properties -> Type ` select `Cms Static Block`. In `Widget Options -> Block` select block name you created at previous step. Layout updates fill like at picture.
    - Click `Add Layout Update`. Select Display on Anchor Categories
    - Categories select 'All'
    - Container 'Main Content Top' - will shows above product listing
    - Repeat for `Non-Anchor Categories`
![Add Widget](https://user-images.githubusercontent.com/412612/77307682-5f08dd00-6d02-11ea-8cbf-b508576d6e5d.png)
 3. Flush Cache
 4. Open any category page. In my case, I see many X.
![Added html](https://user-images.githubusercontent.com/412612/77330643-51fee480-6d28-11ea-8758-0db48efbb8fc.png)
 5. Select attribute-value pair for example color purple. After reloading you can copy your attribute-value from the address bar (in my case ?color=5484)
 6. Open you custom static block created at first step and add some html markup `<div class="swissup-aln-toogle swissup-aln-toogle-color-5484 swissup-aln-hidden">any HTML tags, picture, another widgets, etc.</div>`

 When attribute color option purple (5484) was apply js code remove class "swissup-aln-hidden" and show widget content.

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

2. Find attribute `new`. It comes with Magento 2 Sample Data, so you can create it manually if you don't have it. It should have Yes/No type and `new` as attribute code.

    ![screenshot from 2017-12-18 11-14-55](https://user-images.githubusercontent.com/412612/34098373-bde2eaa4-e3e4-11e7-933b-1d6ce717a036.png)

3. Open Storefront Properties section and find `Use in Layered Navigation` config - set it `Filterable (with results)`.

    ![screenshot from 2017-12-18 11-16-18](https://user-images.githubusercontent.com/412612/34098410-e83e3d94-e3e4-11e7-92bb-373b0e3ce283.png)

4. Execute re-index in console: `php bin/magento indexer:reindex`.

5. How to set product as New in Magento 2:

    - Go `Catalog > Products`, choose the product you want to set as New and click "Edit".
    - Find `Set Product as New From` config and fill the date fields.
    - Save the changes.

6. Check the frontend.

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