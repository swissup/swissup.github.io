---
layout: default
title: Create deal
description: create deal with magento daily deals module
keywords: " magento daily deal, daily deal magento extension, backend, create deal"
category: Daily Deals
---

# Create deal

Log in store backend. Navigate to `Templates Master` -> `Daily
Deals` -> `Manage Deals` page.

To create new deal, click on button **`Add New Deal`** in top right corner. You
can see four tabs now:

* [General](#general-tab)
* [Advanced](#advanced-tab)
* [Label](#label-tab)
* [Assigned products](#assigned-products-tab)

Please focus on `General` and `Assigned products` tabs.

### General tab

On `General` tab you will specify the deal title, store views, the period of
deal and price recalculation rule for products in deal.

![General tab example](/images/dailydeals/backend/create-deal-general-tab.png)

One of the rules mentioned below could be applied to the deal in order to change
the product price:

1. reduce base price by percentage
2. subtract fixed amount from base price
3. fixed price.

You can easily follow the behavior of rule by its name. Rule #1 and #2
calculate new price from product base price. Rule #3 sets a new price.

You can select the Price calculation rule from list.

The value will be set in field `Recalculation value`. Magento uses it to calculate
new price of product in deal. For rule #1 this value is a percentage. For rule
#2 the value will be subtracted from product price.

For example: you can see deal with title "*Hot friday sale*" on the image above.
It is active only on 20th of November. This deal may be appearing on all store views.
The price of each product is reduced in deal by 10%.

Now it’s time to select products for this deal.

### Assigned products tab

You can see grid with all products of your store on this tab. Using grid filter
you can find products you need. Then click on product in grid or check it in
first column. Check the image below.

![Assigned products tab example](/images/dailydeals/backend/create-deal-assigned-products-tab.png)

Please, have a look at column `PRR Value` (price recalculation rule
value). Via this column you can set specific recalculation value for the product.
Please note that values in this column overweight `Recalculation value` from
`General` tab. Save deal.

### Advanced tab

Configuring this tab you will make your deal periodic. You could also add the
custom timer to the deal.

![Advanced tab example](/images/dailydeals/backend/create-deal-advanced-tab.png)

With section `Active time` you can make your deal active within specific limit of
time every day while deal is active (start and end date and time of deal can be
set up in tab `General`).

For example, if you want to have deal that is active every day from 11:00am to
4:00pm you have to make settings as follows:

![Active time section example](/images/dailydeals/backend/create-deal-advanced-tab-active-time.png)

In section `Active days` you can make the deal active only within specific
of days in a week.

![Active days section example](/images/dailydeals/backend/create-deal-advanced-tab-active-days.png)

These settings make deal active only on weekends (Saturday and Sunday).

The default deal timer can be modified in section `Deal timer`.

### Label tab

This tab allows you to set label for all deal products. Label can appear on the
product image in products listing and product view.

![Label example](/images/dailydeals/backend/create-deal-label-tab.png)

Deal labels are tightly integrated with our [Prolabels extension](/m1/prolabels) (minimum version
2.7.2). If you do not have Prolabels or its version is lower, the deal label
will not be set.
