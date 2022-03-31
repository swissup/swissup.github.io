---
layout: default
title: Argento Stripes Product Page
description: Argento Product page
category: Argento
---

# Product Page

On the product page, you can customize the [Header](/shopify/argento/stripes/header) and [Footer](/shopify/argento/stripes/footer).

The main content of Argento Stripes product page consists of **Product information, Product tabs, Product recommendations**. You can enable/disable each section by visibility badge.

![Argento Stripes Product page](/images/shopify/product-page.png)

**Note:** to add a custom section to the product page, please go to the [FAQ](faq/).

### Product information

Within a product information section you can:

- Choose a value for Text style from `Uppercase, Body, and Subtitle`.
- Choose the button or drop-down value for the Variant picker.
- Show dynamic Buy buttons.
- Show Share button.

No customization settings are available for `Title, Price, Quantity selector` values.

### Product tabs

Argento Product tabs section consists of **Description, Product Reviews, Related products**, and **Product recommendations**.

**Note:** you can set all tabs to `Collapsed` or `Expanded` type.

![Argento Stripes Product page](/images/shopify/product-tabs-modes.png)

#### Related products tab

The tab shows products with the same tags or categories as the current product. Using the tab, you can promote other products from your store.

#### Product reviews tab

The product reviews tab is one more great feature of the Argento theme. To use the tab, you have to get the installed `Free Shopify App - Product Reviews`.

#### Product recommendations tab

Argento has a separate Product recommendations section. Adding recommended products helps you to increase the average order value.

Within a section, you can:

- Specify a heading.
- Set the number of products per page by using a range filter.
- Choose size for the badge: `Extra Small, Small, Medium-large, Extra Large`.
- Show the second image on hover.
- Show vendor.

**Note:** to add a custom product page tab, please go to the [FAQ](/shopify/argento/stripes/faq/).

### Use Metafields

Argento theme uses an ability to display some extra product information using `metafields`.
After adding metafields they will appear directly in a product configuration page.

|metafields.brand| **Brand** | Show a product brand.
|metafields.details| **Details** | Show some additional product details in tab section.

To enable this option at your store side, you have to add shopify metafields definition.
> Navigate to the `shopify admin -> Settings -> Metafields -> Products -> Add definition`

**Brand** - show a product brand above its name;

| Name | Namespace | Select content type |
| Brand | my_fields.brand | Text -> Single-line-text |

**Details** - show a product details into product tabs;

| Name | Namespace | Select content type |
| Details | my_fields.details | Text -> Multi-line-text |

It's possible to display some extra product information in either `list` or `row`.

Result:

![metafields settings](/images/shopify/product/metafields-settings.png)

Product page configuration result:

![metafields-settings](/images/shopify/product/product-page-config.png)

Product page schema settings:

![brand-option](/images/shopify/product/brand-option.png)
![details-option](/images/shopify/product/details-option.png)
![details-in-list](/images/shopify/product/details-in-list.png)

##### Next up

- [Back to main page](/shopify/argento/stripes/)