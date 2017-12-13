---
layout: default
title: Ajax Layered Navigation Use Cases
description: Magento2 Ajax Layered Navigation
keywords: "layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

# Use cases

#### Add Stock Filter

1. Enable/Disable Display Out of Stock Products
    `Stores -> Configuration -> Catalog -> Inventory  -> Stock Options -> Display Out of Stock Products` - Yes

    ![Enable Display out of stock products](https://user-images.githubusercontent.com/412612/33838709-f174d9c8-de98-11e7-9adf-2b74829443f3.png)

2. Open `Store -> Attributes -> Product`

3. Find attribute quantity_and_stock_status

    ![find attr](https://user-images.githubusercontent.com/412612/33837857-71dcfb48-de96-11e7-95b5-b137197e5357.png)

4. Open Storefront Properties and find  `Use in Layered Navigation` and set `Filterable with results`

    ![Change on filtrable](https://user-images.githubusercontent.com/412612/33837858-71fa5b98-de96-11e7-9934-3e3bdc371fe9.png)

5. In console run - `php bin/magento indexer:reindex`

6. Check on the frontend. At least one product must be 'out of stock'

    ![screenshot from 2017-12-11 17-14-50](https://user-images.githubusercontent.com/412612/33838017-de535e98-de96-11e7-8960-03b961f7dda1.png)


#### See also:

* [Installation](../installation/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
