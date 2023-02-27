---
layout: default
title: Manage Relations
description: Swissup Sold Together relations management
keywords: soldtogether relations
category: SoldTogether
---

# Manage relations
{:.no_toc}

* TOC
{:toc}

Sold Together module build relations between products. There are two types of relations:

 -  'Bought together' - relation means product A bought together with product B in the same order.
 -  'Also bought' - relation means customer who bought product A also bought product B with his other order.

Relation between products has its weight. In simple words, weight is a number of times this relation happened.

Sold Together block shows products with biggest relation weight.

### Import/export relations

Module adds new data transfer entities to Magento Import/Export interfaces:

  - Sold Together - Customers Also Buy;
  - Sold Together - Frequently Bought Togther.

You can read more about data export and import at official [Magento 2 docs](https://experienceleague.adobe.com/docs/commerce-admin/systems/data-transfer/data-export.html?lang=en).

Exported data are stored in CSV file. You can use the same CSV file import.

Data import has three behaviors:

  - *Add/Update* - if imported relation doesn't exist then it is created else existing relation weight is increased on weight from import file;
  - *Replace* - if imported relation doesn't exist then it is created else existing relation weight replaced with weight from import file;
  - *Delete* - all relations that exist in import file are deleted form DB.

Import and export can be really handy when you need to work with big amounts of data.

### Index/reindex relations

This can be useful when you just installed module and have no Sold Together relations. But have some number of placed orders. The more orders you have the better index results you get.

#### Via Magento Admin

![Index via Magento Admin](/images/m2/soldtogether/index-via-admin.png)

In Magento Admin click on menu item _Swissup_ 🡪 _SoldTogether_ section 🡪 _Frequently Bought Together_ (or _Customers Who Bought..._).

There you can find button "Index Orders". This button will rebuild relations.

PS: all manully created relations ("Is Admin" = Yes) will be left untucked.

#### CLI command

It is possible to index relations via `bin/magento` command.

Index/reindex 'Bought together' relations:

```
bin/magento swissup:soldtogether:customer:reindex
```

Index/reindex 'Also bought' relations:

```
bin/magento swissup:soldtogether:order:reindex
```

#### Change relations for a product

![Edit product relation](/images/m2/soldtogether/product-edit.png)

Open product you need in Magento Admin. Under section "SoldTogether" there is a grid where you can rearragne/remove/add relations.


