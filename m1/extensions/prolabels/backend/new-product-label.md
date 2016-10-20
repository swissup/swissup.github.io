---
layout: default
title: New Product Label
description: magento product labels module add label new product
keywords: "product labels new product"
category: Product Labels
---

# Add New Product Label

New Labels are used for the presentation of new items at your store. The
following settings provide the display of label on products set up in admin.

Go to Magento Admin. In top menu select `Templates Master` > `Prolabels` >
`System Labels`. It loads page "Manage System Labels". Click button
`Add Is New Label` (or click on existing label in grid).

### General information tab

![Is New label - general tab](/images/m1/extensions/prolabels/backend/new_label-general.png)

**Name** - specify the name of label (visible only in backend).

**Store View** - select the store the label would be attached to. This setting
deals with the Prolabels term Multi Store, that’s why you may also attach the
label to all the stores at once.

**Status** - select Enabled value to allow the display of newly created label.

### Content (Product page) tab 

![Is New label - product page tab](/images/m1/extensions/prolabels/backend/new_label-product.png)

**Position** - select the position of the label.

**Image** - you can select image on your PC and upload it al label.

**Image text** - in this field you are allowed to write the text for the label.
Also you can use a few predefined extension variables to choose from. 

**Position style** - specify the CSS style which adjusts the position of the
label.

**Font style** - specify the CSS style which manages the text’s design of the
label. Example for "Font style" field (blue round with whit text inside):

```
color: #fff; text-shadow: 0 1px 0 rgba(0,0,0,0.3); width: 60px; height: 60px; background:#00a7e5; border-radius:50%;
```

The following settings are mandatory for all price labels:

**Round method** - select the method of computing rounded unit of final
result. Possible values are Math, Ceil and Floor.

**Round** - specify the rounded value (1 - round to integer; 0.1 - round to 1
digit after comma; 0.1 - round to 2 digits after comma).

### Content (Category page) tab

![Is New label - category page tab](/images/m1/extensions/prolabels/backend/new_label-category.png)

The Content (Category Page) tab contains the same fields as the
[Content (Products Page) tab](#content-product-page-tab). But its settings will help you to configure the display of labels on the category page. You
make them smaller or event you can leave tab empty to hide label on pages with
product listing.
