---
layout: default
title: Create deal
description: create deal with magento daily deals module
keywords: " magento daily deal, daily deal magento extension, backend, create deal"
category: Daily Deals
---

# Create deal

Login to store backend and from top menu select `Templates Master` -> `Daily
Deals`. It redirects you to ***"Manage Deals"*** page.

To create new deal, click on button **`Add New Deal`** in top right corner. Loaded
page contains form with four tabs:

* [General](#general-tab)
* [Advanced](#advanced-tab)
* [Label](#label-tab)
* [Assigned products](#assigned-products-tab)

`General` and `Assigned products` tabs are most important. So let start with
them.

### General tab

On `General` tab you specify deal title, store views, period of deal and price
recalculation rule for products in deal (check image below).

![General tab example](/images/dailydeals/backend/create-deal-general-tab.png)

One of below rules can be applied to deal to change product price:

1. reduce base price by percentage
2. subtract fixed amount from base price
3. fixed price.

You can easily understand behavior of rule from its name. Rule #1 and #2
calculate new price from product base price. Rule #3 simply set new price.

Price calculation rule you can select from respective list.

In field `Recalculation value` you can set value. Magento uses it to calculate
new price of product in deal. For rule #1 this value is a percentage. For rule
#2 it is value that will be subtracted from product price.

On image above we create deal with title "*Hot friday sale*". It lasts whole
November 20th. This deal appears on all store views of store and reduce price of
each product in deal by 10%.

Now it’s time to select products for this deal.

### Assigned products tab

You can see grid with all products of your store on this tab. Using grid filter
you can find products you need. Then click on product in grid or check it in
first column. Check image below.

![Assigned products tab example](/images/dailydeals/backend/create-deal-assigned-products-tab.png)

Please, take one more look at column `PRR Value` (price recalculation rule
value). With this column you can set specific recalculation value for product.
Values in this column overweight `Recalculation value` from `General` tab.
Now you can save deal and that is it.

Let’s check what we can do with two other tabs.

### Advanced tab

With this tab you can make your deal periodic and add custom timer to deal.

![Advanced tab example](/images/dailydeals/backend/create-deal-advanced-tab.png)

With section `Active time` you can make your deal active only specific time
every day while deal lasts (start and end date and time of deal you set on tab
`General`).

For example, if you wish to have deal that active every day from 11:00am to
4:00pm you have make settings like this:

![Active time section example](/images/dailydeals/backend/create-deal-advanced-tab-active-time.png)

With section `Active days` you can make deal active only specific days of week.

![Active days section example](/images/dailydeals/backend/create-deal-advanced-tab-active-days.png)

Such settings make deal active only on weekends (saturday and sunday).

With section `Deal timer` you can change the default deal timer.

### Label tab

This tab allows you to set label for all deal products. Label appears on product
image in product listing and product view. Settings of this tab pretty self
explained.

![Label example](/images/dailydeals/backend/create-deal-label-tab.png)

Deal labels tightly integrated with our [Prolabels extension](/m1/prolabels) (minimum version
2.7.2). So if you do not have Prolabels or its version is too low you can not
set deal label.
