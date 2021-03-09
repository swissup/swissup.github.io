---
layout: default
title: Use cases
description: Swissup Sold Together module use cases
keywords: soldtogether use-cases
category: SoldTogether
---

# Use cases
{:.no_toc}

* TOC
{:toc}

### Add block into sales email

You can add soldtogether blocks to the sales email template using the following code:

```
{% raw %}{{block class='Swissup\SoldTogether\Block\Email\Customer' area='frontend' template='Swissup_SoldTogether::email/customer.phtml' order_id=$order.id}}
{{block class='Swissup\SoldTogether\Block\Email\Order' area='frontend' template='Swissup_SoldTogether::email/order.phtml' order_id=$order.id}}{% endraw %}
```

### Show blocks in tabs

You can display blocks in tabs when using our free [EasyTabs](/m2/extensions/easytabs/) module.
First, create a new tab with **Block Type: Custom Block**. Then fill the **Tab Options** fields.

**Customers also buy block setting:**

Field    | Value
---------|---------------------------------
Block    | Swissup\SoldTogether\Block\Customer
Template | Swissup_SoldTogether::product/carousel.phtml
Unset    | soldtogether.product.customer

**Bought Together block setting**

Field    | Value
---------|---------------------------------
Block    | Swissup\SoldTogether\Block\Order
Template | Swissup_SoldTogether::product/order.phtml
Unset    | soldtogether.product.order
