---
layout: default
title: On Sale Label
description: magento product labels module add on sale label
keywords: "product labels onsale"
category: Product Labels
---

# Add On Sale Label

SALE labels are the cost-effective way to mark store sales and attract
visitors attention. They are shown on discounted and on-sale products. Using
On Sale labels you catch customers attention to the promotional items. The
following settings provide the display of label on products with special price.

Go to Magento Admin. In top menu select `Templates Master` > `Prolabels` >
`System Labels`. It loads page "Manage System Labels". Click button `Add On Sale Label` (or click on existing label in grid).

### General information tab

![On Sale label - general tab](/images/m1/extensions/prolabels/backend/sale_label-general.png)

**Name** - specify the name of label (visible only in backend).

**Store View** - select the store the label would be attached to. This setting
deals with the Prolabels term Multi Store, that’s why you may also attach the
label to all the stores at once.

**Status** - select Enabled value to allow the display of newly created label.

### Content (Product page) tab 

![On Sale label - product page tab](/images/m1/extensions/prolabels/backend/sale_label-product.png)

**Position** - select the position of the label.

**Image** - you can select image on your PC and upload it al label.

**Image text** - in this field you are allowed to write the text for the label.
Also you can use a few predefined extension variables to choose from. For example : string `Save<br/>#special_price# #discount_percent#%!` on frontend shows as 'Save N%!' (N - product's discount in percents).

**Position style** - specify the CSS style which adjusts the position of the
label.

**Font style** - specify the CSS style which manages the text’s design of the
label. Example for "Font style" field (orange round with whit text inside):

```
color: #fff; text-shadow: 0 1px 0 rgba(0,0,0,0.3); width: 60px; height: 60px; background:#ff7800; border-radius:50%;
```

The following settings are mandatory for all price labels:

**Round method** - select the method of computing rounded unit of final
result. Possible values are Math, Ceil and Floor.

**Round** - specify the rounded value (1 - round to integer; 0.1 - round to 1
digit after comma; 0.1 - round to 2 digits after comma).

### Content (Category page) tab

![On Sale label - category page tab](/images/m1/extensions/prolabels/backend/sale_label-category.png)

The Content (Category Page) tab contains the same fields as the
[Content (Products Page) tab](#content-product-page-tab). But its settings
will help you to configure the display of labels on the category page. You
make them smaller or event you can leave tab empty to hide label on pages with product listing.
