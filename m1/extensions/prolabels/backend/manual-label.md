---
layout: default
title: Manual Label
description: magento product labels module add manual label
keywords: "product labels manual"
category: Product Labels
---

# Manual Label

The following recommendations will help you to create your own label. In order
to do that, go to Mabegnto Admin. In top manu select `Templates Master` >`Prolabels` > `Manual Labels`. Click on Add Label button and continue to fill the appropriate fields in tabs.

### General tab

![Manual label - general tab](/images/m1/extensions/prolabels/backend/manual_label-general.png)

**Name** - specify the name of label (visible only in backend).

**Store View** - select the store the label would be attached to. This setting
deals with the Prolabels term Multi Store, that’s why you may also attach the
label to all the stores at once.

**Status** - select Enabled value to allow the display of newly created label.

### Content (Product page) tab

![Manual label - product page tab](/images/m1/extensions/prolabels/backend/manual_label-product.png)

**Position** - select the position of the label.

**Image** - please download the image of the label.

**Image text** - in this field you are allowed to write the text for the label.

**Position style** - specify the CSS style which adjusts the position of the label.

**Font style** - specify the CSS style which manages the text’s design of the label.

**Round method** - select the method of computing rounded unit of final
result. Possible values are Math, Ceil and Floor.

**Round** - specify the rounded value (1 - round to integer; 0.1 - round to 1
digit after comma; 0.1 - round to 2 digits after comma).

### Content (Category page) tab

![Manual label - category page tab](/images/m1/extensions/prolabels/backend/manual_label-category.png)

The Content (Category Page) tab contains the same fields as the
[Content (Products Page) tab](#content-product-page-tab). But its settings will help you to configure the display of labels on the category page. You
make them smaller or event you can leave tab empty to hide label on pages with
product listing.

### Conditions tab

![Manual label - conditions tab](/images/m1/extensions/prolabels/backend/manual_label-conditions.png)

Manual labels section allows you to create labels based on your own rules. The
essential feature of custom labels is Conditions tab. It provides assigning
labels for the products using its attributes. There are flexible conditional
rules that can be applied to the labels according to the properties of the
product. In order to use attributes in condition interface, you should go to
menu `Catalog` > `Attributes` > `Manage attributes`. Open attribute you want
to use for your manual label, and select Yes in the
`Use for Promo Rule Conditions` field. After that current attribute will
appear in conditions tree.


