---
layout: default
title: Deal label
description: magento daily deals module frontend
keywords: " magento daily deal, daily deal magento extension, frontend, deal label"
category: Daily Deals
---

# Deal label

Daily Deals label feature requires [Prolabels extension](/m1/extensions/prolabels/)
version 2.7.2 or higher. You can not add label to the deal without it.

Labels output on the category page and on product page for products with deal.

![Deal label example](/images/dailydeals/frontend/deal-label.png)

In order to get a label as shown on image above, please go to backend and
[edit deal](../../../backend/edit-deal/). Open tab
['Label'](../../../backend/create-deal/#label-tab) and make as follows:

| Option           | Value |
|------------------|-----------------------------------------------------------|
| *Text*           | Hot friday sale! |
|------------------|-----------------------------------------------------------|
| *Position*       | `bottom-left` |
|------------------|-----------------------------------------------------------|
| *Position style* | `margin-bottom: 0px; width: 125px; border-bottom: 20px solid #a5205f; border-right: 10px solid transparent; background-color: transparent` |
|------------------|-----------------------------------------------------------|
| *Font style*     | `width: 125px; position: relative; top: 20px; line-height: 20px; margin: auto; font-size: 11px;`|

Deal labels support the same string variables ("special strings") as Prolables.
And extension provides two additional:

- `#deal:discount_perc#` - discount percentage for product with deal
- `#deal:discount_amnt#` - amount of discount for product with deal

When in field `Text` for deals label you type `Friday saves you #deal:discount_perc#%`,
then here is what you get on frontend:

![Deal label with string variable](/images/dailydeals/frontend/deal-label-string-variable.png)
