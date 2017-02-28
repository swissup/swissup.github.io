---
layout: default
title: Sold Together admin interfaces
description:
keywords: >
  magento cross sells, magento related products, customer who bought
  also bought, frequently bought together, soldtogether
category: Sold Together
---

# Admin interfaces

You can use 2 types of Sold Together blocks. In Frequently Bought Together you get control over the products that were bought in the same order. In Customers Who Bought Also Bought you  manage products that were bought by the same customer.

Go to `Admin > Templates-Master > Sold Together`.

### Adding related products to Frequently Bought Together

Please configure the block about related items to product, that the customers have already chosen. It is kind of bonus for customers, whom will be prompted to buy an extra item for convenient use of their selected product. 
**Note**: after initial extension installation there will not links between products.

![General settings](/images/m1/extensions/soldtogether/grid.png)

If you already have orders in your database, please click `Reindex Data` at the right top corner of the page. That will create automatic index for all products based on your customers order history. That should be done only one time. If you will click it one more time, then all automatic links will be deleted and new ones created. Manual links will not be touched. 

In case you have no orders yet, we offer two ways to follow up. First one is to enable `List Random products` feature in configuration and the other one is to set manual links. To create those one, please click on the item you want to add related products to.

![General settings](/images/m1/extensions/soldtogether/edit-item.png)

In the `Weight` field please specify the product weight on the pages with related products. After you click the product, you will see `Product information` tab.

![General settings](/images/m1/extensions/soldtogether/managing-product.png)

Please add the related products:
1. On the product information tab click Frequently Bought Together. You will see new grid.
2. Select **Any** from drop down list in the left top of the grid. Press **Search** button. Now you can mark products to be offered to customers to purchase together with original product.

![General settings](/images/m1/extensions/soldtogether/mark-products.png)

3. Check related products and click **Save**.

### Adding related products to Customers Who Bought This Item Also Bought block

We recommend to create this block by using natural customer behaviour and cross selling products list on existing orders history. Makes sense the buyers will listen to customers with similar tastes, that finally would lead to the purchase of additional items.

Go to `Admin > Templates-Master > Sold Together > Customers Who Bought This Item Also Bought`. In order to add the related products to `Customers Who Bought This Item Also Bought block`, please follow the same steps as mentioned in the description above.

#### You can also check:

*   [Installation](../installation/)
*   [Integration](../integration/)
*   [Configuration](../configuration/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)