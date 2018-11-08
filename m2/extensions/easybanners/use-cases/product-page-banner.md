---
layout: default
title: Product page banner
category: Easy Banners
---

# Product page banner

Let's create a "Free Shipping" banner for the products of "Bags" and
"Fitness Equipment" categories.

![Screenshot](/images/m2/easybanners/use-cases/product-page.png)

### Instructions

 1. Navigate to _Swissup > Easybanner > Manage Banners_ and press **New Banner**
    button
 2. Fill the new banner form with the following values:

    **General Tab**

    Field       | Value
    ------------|------
    Enabled     | Yes
    Identifier  | product-page-free-shipping
    Type        | Banner
    Store View  | All Store Views
    Placeholder | _Do not select anything_

    **Content Tab**

    Field   | Value
    --------|------
    Url     | shipping-promo (You'll need to create this CMS page using _Content > Pages_ interface)
    Mode    | HTML Content
    Html Content | `<div style="background:#ff5722;padding: 10px;text-align:center;color:#fff;font-weight:bold;margin:20px 0;">Free shipping available!</div>`

    **Conditions Tab**

    Fill the conditions:

    ![Conditions example](/images/m2/easybanners/use-cases/conditions.png)

    Save banner.

 3. Navigate to _Content > Widgets_ and press **New Widget** button
 4. Fill the new widget form:

    Field   | Value
    --------|------
    Type    | EasyBanner: Banner
    Design Theme | _Select your frontend theme_

    Press **Continue**

 5. Fill the form with following values:

    **Storefront Properties Tab**

    Field           | Value
    ----------------|------
    Widget Title    | Easybanner: Free shipping on product page
    Assign to Store Views | All Store Views
    **Layout Updates** |
    Display on  | All Product Types
    Products    | All
    Container   | Alert Urls

    **Widget Options**

    Select newly created "product-page-free-shipping" banner.

    Save widget.

 6. That's all. Clear cache and check your new banner on the frontend.

#### Next up
{:.no_toc}

 -  [Back to Home](/m2/extensions/easybanners/)
