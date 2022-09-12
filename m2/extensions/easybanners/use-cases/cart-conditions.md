---
layout: default
title: Cart conditions banner
category: Easy Banners
---

# Cart conditions banner

> Available since 1.9.0

Let's create a banner that will be visible when cart items matches our conditions.

Please note that cart conditions works on the following pages only:

 -  Checkout
 -  Customer Account
 -  Shopping Cart

![Screenshot](/images/m2/easybanners/use-cases/cart-conditions-result.png){:width="1114" height="614"}

### Instructions

 1. Navigate to _Swissup > Easybanner > Manage Banners_ and press **New Banner**
    button
 2. Fill the new banner form with the following values:

    **General Tab**

    Field       | Value
    ------------|------
    Enabled     | Yes
    Identifier  | cart-conditions-banner
    Type        | Banner (Or Lightbox, if you want popup banner)
    Store View  | All Store Views
    Placeholder | _Do not select anything_

    **Content Tab**

    Field   | Value
    --------|------
    Url     | shipping-promo (You'll need to create this CMS page using _Content > Pages_ interface)
    Mode    | HTML Content
    Html Content | `<div style="background:#ff5722;padding: 10px;text-align:center;color:#fff;font-weight:bold;margin:20px 0;">Cart conditions matched!</div>`

    **Conditions Tab**

    Fill the conditions using "Product Attributes combination (Cart Page)"
    dropdown item:

    > Warning! Due to magento bug, do not use 0 in "greater/lower than" condition.
    > Use 0.1 or 0.0001.

    ![Conditions example](/images/m2/easybanners/use-cases/cart-conditions.png){:width="739"}

    Save the banner.

    > If you are using Lightbox or Awesomebar as a banner type, you can skip all
    > further steps, clear the cache and check your new banner on the shopping cart
    > page.

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
    Widget Title    | Easybanner: Cart Conditions Banner
    Assign to Store Views | All Store Views
    **Layout Updates** |
    Display on  | Page: shopping cart
    Container   | Main Content Top

    **Widget Options**

    Select newly created "cart-conditions-banner" banner.

    Save widget.

 6. That's all. Clear cache and check your new banner on the frontend.

#### Next up
{:.no_toc}

 -  [Back to Home](/m2/extensions/easybanners/)
