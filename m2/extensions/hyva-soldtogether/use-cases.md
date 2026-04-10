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

You can add soldtogether blocks to the sales email template.

#### Via interface

Open email template in Magento Admin. Click **"Insert Variable..."**. Under `Template Variables` section soldtogether blocks.

![Insert variable](/images/m2/soldtogether/insert-variable.png)

If you can't find blocks in variable list then perhaps current email template doesn't support them. But you can always try insert block manualy.

#### Manually


##### Frequently Bought Together

```
{% raw %}{{layout handle="swissup_soldtogetheremail_order" order_id=$order_id products_count="3" area="frontend"}}{% endraw %}
```

`handle` and `area` are required parameters. Please don't change them.

`order_id` - Magento internal order ID. It is available via `$order_id` variable in sales emails.

`products_count` - number of products to promote.

`can_use_random` - flag to show random products when there are no assigned products to promote. Use `can_use_random="1"`.


##### Customers Also Bought

```
{% raw %}{{layout handle="swissup_soldtogetheremail_customer" order_id=$order_id products_count="3" area="frontend"}}{% endraw %}
```

`handle` and `area` are required parameters. Please don't change them.

`order_id` - Magento internal order ID. It is available via `$order_id` variable in sales emails.

`products_count` - number of products to promote.

`can_use_random` - flag to show random products when there are no assigned products to promote. Use `can_use_random="1"`.


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
