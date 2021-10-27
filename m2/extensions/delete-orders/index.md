---
layout: default
title: Delete Orders
description: Magento 2 Delete Orders allows remove orders from your store
keywords: orders
category: Delete Orders
---

# Delete Orders

Magento 2 default does not support to remove sale records from admin page. Therefore admins cannot delete either tests recods or called off records.
That only will increase the number of junk orders and will confuse.
Our module Helps the order management much more organized by clearing the junk ones.
You can choose to delete one `order` or several `orders` at the same time. Once orders are deleted, their linked data will also be immediately removed from your store.
 Also you may remove other records such as `Invoices`, `Shipments` and `Credit Memos`, separate from one another or separate from its order.

> This `Free extension for Magento 2`, helps you safely remove unnecessary `Orders`, `Invoices`, `Shipments` and `Credit Memos` or records which have
been arisen during testing your store, that is to put in order your sales.
After installing it, additional action appears at:
- `Sales->Orders->Actions->Delete` - remove order(s),
- `Sales->Invoices->Actions->Delete` - remove invoice(s),
- `Sales->Shipments->Actions->Delete` - remove shipment(s),
- `Sales->Credit Memos->Actions->Delete` - remove creditmemo(s).

{% include gallery.html images=site.data.gallery.m2.delete-orders.index class="scroll phone-up-1 tablet-up-3 photoswipe" %}

> Also You may remove all records which have been built with specific order at the same time with removing order(s), that is delete all the Invoices, Shipments and Creditmemos
which belong to some order(s).
- `Sales->Orders->Actions->Delete with (Invoices, Shipments, Creditmemos)` - remove all records with selected order(s).
{% include gallery.html images=site.data.gallery.m2.delete-orders.backend class="scroll phone-up-1 tablet-up-3 photoswipe" %}

> Display order status in colours: `Sales -> Order grid`
![Order Grid](/images/m2/delete-orders/admin/order_status.png)

### Features

-  Safe solution for removing Orders, Invoices, Shipments, Credit Memos:
    - `Delete Order(s) with their built records: Invoice(s), Shipment(s) and Creditmemo(s)`;
-  Mass delete Orders;
-  Mass delete Invoices;
-  Mass delete Shipments;
-  Mass delete Credit Memos;
-  Support multi-store;
-  100% Open-source.

### Contents

1. [Installation](installation/)
2. [Changelog](changelog/)
