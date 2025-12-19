---
layout: default
title: Argento custom css
description: How to apply css changes and keep original files without changes
keywords: >
    argento styles, argento css, css modifications, _argento_custom.css,
    _argento_custom
category: Argento
gallery:
  - href: /images/m2/argento/customization/custom-css/essence/home.png
    src: /images/m2/argento/customization/custom-css/essence/home-small.png
    w: 977
    h: 767
    alt: Modified tab and product link colors
    title: New color scheme for tabs and product name links
  - href: /images/m2/argento/customization/custom-css/essence/product.png
    src: /images/m2/argento/customization/custom-css/essence/product-small.png
    w: 977
    h: 767
    title: New color scheme for product page tabs
---

# Argento custom css

To ensure seamless theme customization, it is important to be able to easily
upgrade Argento in the future. Argento allows one to create a new
`_argento_custom.less` file that will be automatically included and processed.

> If the aforementioned file is used, Argento files are left untouched,
> and you can unpack a new Argento version over the old one without losing
> your modifications.

## Example

Let's change the product links color from black to blue and update the color scheme for
the homepage and products page tabs. [Scroll down](#result) to see results.

 1. Navigate to the Argento theme css directory you would like to modify

    ```
    vendor/swissup/theme-frontend-argento-stripes/web/css/source
    ```

 2. Create `_argento_custom.less` inside the `source` folder
 3. Add your custom styles

    ```less
    // change product links styles
    @product-name-link__color: #039ae4;
    @product-name-link__color__visited: #167fb3;

    // change homepage and product tabs styles
    @tab-control__background-color: #ef813d;
    @tab-control__active__background-color: #fff;
    @tab-control__color: #fff;
    @tab-content__border: 1px solid #ef813d;

    .product.data.items > .item.title .counter {
        color: inherit;
    }
    ```

 4. Save the file and run the following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder
    rm -rf var/view_preprocessed pub/static/frontend
    bin/magento setup:static-content:deploy
    ```

### Result

{% include gallery.html images=page.gallery class="scroll phone-up-2 photoswipe" %}

##### Next up

- [Using Argento grid to organize content](/m2/argento/customization/grid-system/)
- [Argento css helpers](/m2/argento/customization/css-helpers/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
