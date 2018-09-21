---
layout: default
title: Prolabels Admin Interfaces
description: >
    Magento2 extension to show labels for products
keywords: >
    magento2 featured products, magento2 product listing block, featured
    products block on magento2 homepage, labels,
category: Prolabels
---


# Admin interfaces
{:.no_toc}

* TOC
{:toc}

ProLabels extension provides user friendly interfaces to manage product labels and badges.

## Labels

In order to edit label or create new one, go ***Magento Admin → Swissup → ProLabels***

![Grid](/images/m2/prolabels/label-grid.png)

After clicking on any label from the submitted list, you will be able to edit the settings of Label information.

## General tab

![General](/images/m2/prolabels/general-label.png)

 *  `Title` - label name
 *  `Store view` - please select target store view for current label
 *  `Customer Groups` - show label for current customer groups
 *  `Status` - enables or disables current label

## Conditions tab

![Conditions](/images/m2/prolabels/conditions.png)

Manual labels section allows you to create labels based on your own rules. The essential feature of custom labels is Conditions settings’ tab. It provides assigning labels for the products using its attributes. There are flexible conditional rules that can be applied to the labels according to the properties of the product. In order to use attributes in condition interface, you should go to *Admin - Stores - Attributes - Product*. Please open attribute you want to use for your manual label, and select Yes in the Use for Promo Rule Conditions field. After that current attribute will appear in conditions tree.

## Product Label tab and Category Label tab

![Product Settings](/images/m2/prolabels/product_label.png)

-   `Position` - select the position of the label
-   `Label Text` - in this field you are allowed to write the text for the label. Also you can use a few predefined extension variables to choose from.

    For example : Save#discount_percent#% (Save is the word you selected by yourself , #discount_percent# - predefined variable).

-   `Label Image` - upload the image of the label
-   `Custom Css Label` - custom css style for label
-   `Label Custom Url` - custom url for label (open in new tab)
-   `Round Method` - select the method of computing rounded unit of final result. Possible values are Math, Ceil and Floor.
-   `Round Value` - specify the rounded value

## Indexed Products tab

The following grid allows you to check the list of products, that label were assigned to.

![Indexed Products](/images/m2/prolabels/indexed.png)

#### You can also check
{:.no_toc}

* [Installation](../installation/)
* [Configuration](../configuration/)
* [Predefinde Valiables](../predefined/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
