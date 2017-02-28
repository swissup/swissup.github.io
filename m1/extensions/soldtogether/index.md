---
layout: default
title: Sold Together
description:
keywords: >
  magento cross sells, magento related products, customer who bought
  also bought, frequently bought together, soldtogether
category: Sold Together
---

# Sold Together

The module is based on cross-selling strategy. Sold Together extension enables the display of two cross-sell blocks. **Frequently Bought Together** shows products that were bought in the same order. **Who Bought Also Bought** block is based on implemented orders history. It allows you to display the products which are already trusted by other users. 

![General settings](/images/m1/extensions/soldtogether/frontend.png)

 -  [Installation](installation/)
 -  [Configuration](configuration/)
 -  [Admin interfaces](admin-interfaces/)
 -  [Use cases](use-cases/)
 -  [Integration with Checkout Success 2.x](integration/)

### Weight

Sold Together extension uses term "weight".

**Weight** is a number that presents relations between Product 1 and Product 2.

In case of "Frequently Bought Together", weight is number of orders, that contains Product 1 and Product 2.

In case of "Customers Who Bought This Item Also Bought", weight is number of customers, who bought product 1 and product 2 (in different orders or in one order).
