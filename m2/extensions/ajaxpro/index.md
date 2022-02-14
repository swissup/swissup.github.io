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

`Store > Configuration` > `Swissup > Ajaxpro`

##### Main



 * Enable - Allows to enable/disable extension per store view. Default: Yes


### General Design

![General Section](/images/m2/ajaxpro/general-section.png)

 *  Show results - Show results popup after product was added to cart. Default: Yes

 *  Results dialog window type - визначає вигляд вікна з результатами додавання в корзину

    Type                | Description
    --------------------|------------
    Simple              | просте текстове повідомлення
    SuggestPage Content | текстове повідомлення з виглядом доданого продукту плюс пропозиції
    Shopping Cart       | вигляд як на окремій сторінці корзини але без переходу на неї
    Minicart            | вигляд як у розгорнутої міні корзини (у правому верхньому кутку)

    > По замовчуванню SuggestPage Content. Але залежить від вашої темию приклади нижче.

    ![Simple](/images/m2/ajaxpro/simple.png)
    ![SuggestPage Content](/images/m2/ajaxpro/suggestpage.png)
    ![Shopping Cart](/images/m2/ajaxpro/shoppingcart.png)
    ![MiniCart](/images/m2/ajaxpro/minicart.png)


 *  Replace Minicart Sidebar - замінюється поведінка мінікарта в правому верхньому кутуб при кліці буде відкриватись попап. Default: No

    > працює лише при опції Results dialog window type визначеному як Minicart.

 * Type of behaviour results - визначає яким способом буде відображуватись(зявлятись)
   попап вікно

   Type  | Description
   ------|------------
   Popup | простий попап посередині екрану
   Slide | виїзжатиме в правій частині екрану


 * Show floating cart - добавляє плаваючу корзину в правій нижній частині екрану

 ![Floating Cart](/images/m2/ajaxpro/floatingcart.gif)

* Animated - Add animated product into minicart. Default: No

### Listing Design

![Listing Section](/images/m2/ajaxpro/listing-section.png)

 * Validation - Enable/Disable product form validation before submitting at product listing page. Default: No

![Validation](/images/m2/ajaxpro/usage-validation.gif)

 * Show product popup for product with options - Для продуктів з опціями показуватиметься попап
   в якому без переходу на сторінку продукту можна вибрати опції і добавити продукт в корзину

  > опція Validation має бути вимкнута.
![Product popup](/images/m2/ajaxpro/usage-compare.gif)

 * Quick View - Добавляє можливість переглянути форму продукта в окремому попап вікні (і добавити в корзину продукт) клацнувши по спеціальному елементу

 ![Quick View](/images/m2/ajaxpro/quick-view.png)

 * Apply custom patch for Product List Block Url(s) - It can help if your addToCartUrl lost options=cart suffix for product with options. Experimental вмикати лише якщо "Show product popup for product with options" не працює з коробки, якщо не допомагає і це звертатись в support.