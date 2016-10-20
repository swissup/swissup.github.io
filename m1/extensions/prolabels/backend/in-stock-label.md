---
layout: default
title: In Stock Label
description: magento product labels module add in stock label
keywords: "product labels onsale"
category: Product Labels
---

# Add In Stock Label

Stock labels are used to show low stock items. Using in stock and out of stock
labels, you focus the customers attention on the limited availability of
products. The following settings provide the display of label on low stock
products.

Go to Magento Admin. In top menu select `Templates Master` > `Prolabels` >
`System Labels`. It loads page "Manage System Labels". Click button
`Add In Stock Label` (or click on existing label in grid).

### General information tab

![In Stock label - general tab](/images/m1/extensions/prolabels/backend/stock_label-general.png)

**Name** - specify the name of label (visible only in backend).

**Store View** - select the store the label would be attached to. This setting
deals with the Prolabels term Multi Store, that’s why you may also attach the
label to all the stores at once.

**Status** - select Enabled value to allow the display of newly created label.

### Content (Product page) tab 

![In Stock label - product page tab](/images/m1/extensions/prolabels/backend/stock_label-product.png)

**Position** - select the position of the label.

**Image** - you can select image on your PC and upload it al label.

**Image text** - in this field you are allowed to write the text for the label.
Also you can use a few predefined extension variables to choose from. For
example : Only #stock_item# left in stock ("Only" and "left in stock" are the
phrases which should be stressed, #stock_item# - predefined variable)

**Display if stock is lower than**  - set the value, that is automatically
monitoring the number of products in stock during output of the label.

**Enable Out of Stock Label** - select Yes to enable the display of the label
on out of stock products.

**Out of Stock image** - please download the image of Out of Stock Label.

**Out of Stock Label text** - write the text for Out of Stock Label.

**Position style** - specify the CSS style which adjusts the position of the
label.

**Font style** - specify the CSS style which manages the text’s design of the
label.

The following settings are mandatory for all price labels:

**Round method** - select the method of computing rounded unit of final
result. Possible values are Math, Ceil and Floor.

**Round** - specify the rounded value (1 - round to integer; 0.1 - round to 1
digit after comma; 0.1 - round to 2 digits after comma).

### Content (Category page) tab

![In Stock label - category page tab](/images/m1/extensions/prolabels/backend/stock_label-category.png)

The Content (Category Page) tab contains the same fields as the
[Content (Products Page) tab](#content-product-page-tab). But its
settings will help you to configure the display of labels on the category
page. You make them smaller or event you can leave tab empty to hide label on
pages with product listing.
