---
layout: default
title: Ajax Layered Navigation Use Cases
description: Magento2 Ajax Layered Navigation
keywords: "layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Use cases

 1. [Stock Filter](#stock-filter)
 2. [On Sale Filter](#on-sale-filter)
 3. [New Filter](#new-filter)

#### Stock Filter

1. Enable/Disable Display Out of Stock Products
    `Stores -> Configuration -> Catalog -> Inventory  -> Stock Options -> Display Out of Stock Products` - Yes

    ![Enable Display out of stock products](https://user-images.githubusercontent.com/412612/33838709-f174d9c8-de98-11e7-9adf-2b74829443f3.png)

2. Open `Store -> Attributes -> Product`

3. Find attribute `quantity_and_stock_status`

    ![find attr](https://user-images.githubusercontent.com/412612/33837857-71dcfb48-de96-11e7-95b5-b137197e5357.png)

4. Open Storefront Properties and find  `Use in Layered Navigation` and set `Filterable with results`

    ![Change on filtrable](https://user-images.githubusercontent.com/412612/33837858-71fa5b98-de96-11e7-9934-3e3bdc371fe9.png)

5. In console run - `php bin/magento indexer:reindex`

6. Check on the frontend. At least one product must be 'out of stock'

    ![screenshot from 2017-12-11 17-14-50](https://user-images.githubusercontent.com/412612/33838017-de535e98-de96-11e7-8960-03b961f7dda1.png)


#### On Sale Filter

1. Open `Store -> Attributes -> Product`

2. Find attribute `special_price`

    ![find price](https://user-images.githubusercontent.com/412612/33997963-cd9fd284-e0ee-11e7-8151-8e5efae57de9.png)

3. Open Storefront Properties and find  `Use in Layered Navigation` and set `Filterable with results`

    ![set filtrable](https://user-images.githubusercontent.com/412612/33998051-107fd270-e0ef-11e7-8e55-784ae540b2eb.png)

4. In console run - `php bin/magento indexer:reindex`

5. Check on the frontend.

![frontend](https://user-images.githubusercontent.com/412612/34001555-01942b80-e0f9-11e7-89e3-c8c1e68db167.png)

#### New Filter

1. Open `Store -> Attributes -> Product`

2. Find attribute `new`

![screenshot from 2017-12-18 11-14-55](https://user-images.githubusercontent.com/412612/34098373-bde2eaa4-e3e4-11e7-933b-1d6ce717a036.png)

3. Open Storefront Properties and find  `Use in Layered Navigation` and check/set `Filterable with results` (by default Yes)

![screenshot from 2017-12-18 11-16-18](https://user-images.githubusercontent.com/412612/34098410-e83e3d94-e3e4-11e7-92bb-373b0e3ce283.png)

4. In console run - `php bin/magento indexer:reindex`

5. How to set product as new in Magento 2

 -  The first step is to click on “products” -> “catalog“:
 -  The next step is to choose the product that you want to change and click into”edit”
 -  Rolling the mouse down to relatively the end of the page, click on ” Autosettings”
 -  After that, filling the “Date blank“.
 -  And finally, save all the changes that you have done.

6. Check on the frontend.

![screenshot from 2017-12-14 16-42-33](https://user-images.githubusercontent.com/412612/33997669-cf349072-e0ed-11e7-8678-446f9371ed5c.png)

#### See also:

* [Installation](../installation/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
