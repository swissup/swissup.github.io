---
layout: default
title: Ajaxpro
description: >
    Magento2 module for ajaxcian
keywords: >
    magento ajax, magento ajax module, magento ajax call to block, magento ajax shopping cart, magento ajax cart pro
category: AjaxPro
gallery:
  - href: /images/m2/ajaxpro/usage0.gif
    src: /images/m2/ajaxpro/usage0.gif
    w: 908
    h: 688
    alt: Ajaxpro product view
    title: >
        Add configurable product from listing.
  - href: /images/m2/ajaxpro/usage1.gif
    src: /images/m2/ajaxpro/usage1.gif
    w: 899
    h: 682
    alt: Ajaxpro cart
    title: >
        Add simple product from listing
  - href: /images/m2/ajaxpro/usage-compare.gif
    src: /images/m2/ajaxpro/usage-compare.gif
    w: 928
    h: 492
    alt: Ajaxpro compare
    title: >
        Compare functionality.
  - href: /images/m2/ajaxpro/usage-validation.gif
    src: /images/m2/ajaxpro/usage-validation.gif
    w: 924
    h: 490
    alt: Ajaxpro list with auto validation
    title: Listing behavior with auto validation and without
  - href: /images/m2/ajaxpro/floatingcart.gif
    src: /images/m2/ajaxpro/floatingcart.gif
    w: 520
    h: 314
    alt: Ajaxpro floating cart widget
    title: Ajaxpro floating cart widget
gallery2:
  - href: /images/m2/ajaxpro/usage1.gif
    src: /images/m2/ajaxpro/usage1.gif
    w: 899
    h: 682
    alt: Ajaxpro cart
    title: >
        Add simple product from listing
  - href: /images/m2/ajaxpro/usage-compare.gif
    src: /images/m2/ajaxpro/usage-compare.gif
    w: 928
    h: 492
    alt: Ajaxpro compare
    title: >
        Compare functionality.
---

# Ajaxpro

Streamline add-to-cart function and remove interruptions from the shopping process

- Add-to-cart pop-up for selecting product options without going to product page
- Mobile friendly add-to-cart design adapts depending on a screen type
- Works for all product types including bundle, grouped, and configurable products
- Page reloads are eliminated from the process

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

1.  [Installation](installation/)
2.  [Configuration](#configuration)
    - [General Design](#general-design)
    - [Listing Design](#listing-design)
3. [Changelog](changelog/)
4. [Troubleshooting](troubleshooting/)

### Configuration

![Ajaxpro configuration](/images/m2/ajaxpro/configuration.png)

`Store` > `Configuration` > `Swissup` > `Ajaxpro`

##### Main

 * Enable - Allows to enable/disable extension per store view. Default: Yes

### General Design

![General Section](/images/m2/ajaxpro/general-section.png)

 *  Show results - Show results popup after product was added to cart. Default: Yes

 *  Results dialog window type - allows changing the appearance of the window with after adding products to the cart.

    Type                | Description
    --------------------|------------
    Simple              | Simple text message
    SuggestPage Content | A text message with product info and product suggestions
    Shopping Cart       | Looks like the content on the shopping cart page but without going to it
    Minicart            | Looks like expanded minicart (cart in the right top corner)

    > По замовчуванню SuggestPage Content. It depends on your theme pre-installed options

    Window types

    ![Simple](/images/m2/ajaxpro/simple.png)
    ![SuggestPage Content](/images/m2/ajaxpro/suggestpage.png)
    ![Shopping Cart](/images/m2/ajaxpro/shoppingcart.png)
    ![MiniCart](/images/m2/ajaxpro/minicart.png)


 *  Replace Minicart Sidebar - replace mini cart content with ajaxpro popup content. Now by click will be shown ajax popup window. Default: No.

    > Work only if option 'Results dialog window type' set as 'Minicart'.

 * Type of behaviour results - determines how the popup window will be displayed (appear)

   Type  | Description
   ------|------------
   Popup | simple pop in the middle of the screen
   Slide | will appear from the right side of the screen


 * Show floating cart - add floating cart in the right bottom corner of the page

 ![Floating Cart](/images/m2/ajaxpro/floatingcart.gif)

* Animated - Add animated product into minicart. Default: No

### Listing Design

![Listing Section](/images/m2/ajaxpro/listing-section.png)

 * Validation - Enable/Disable product form validation before submitting at product listing page. Default: No

![Validation](/images/m2/ajaxpro/usage-validation.gif)

 * Show product popup for a product with options - For products with options, a popup will be displayed in which, without going to the product page you can select options and add the product to the cart

  > опція Validation має бути вимкнута.
![Product popup](/images/m2/ajaxpro/usage-compare.gif)

 * Quick View - Adds the ability to view the product form in a separate pop-up window (and add the product to the cart) by clicking on a special graphical item

 ![Quick View](/images/m2/ajaxpro/quick-view.png)

 * Apply custom patch for Product List Block Url(s) - It can help if your addToCartUrl lost options=cart suffix for a product with options. The experimental option enables only if the option "Show product popup for a product with options" doesn't work properly.