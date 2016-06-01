---
layout: default
title: Argento css customization
description: How to apply css changes and keep original files without changes
keywords: >
    argento styles, argento css, css midifications, custom theme
category: Argento
gallery:
  - href: /images/m2/argento/css-customization/essence/home.png
    src: /images/m2/argento/css-customization/essence/home-small.png
    w: 977
    h: 767
    alt: Modified tab and product link colors
    title: New color scheme for tabs and product name links
  - href: /images/m2/argento/css-customization/essence/product.png
    src: /images/m2/argento/css-customization/essence/product-small.png
    w: 977
    h: 767
    title: New color scheme for product page tabs
---

# Argento css customization

When talking about theme customization it very important to be able to easily
upgrade Argento in future. That is why Argento brings possibility to create new
`_argento_custom.less` file, that will be automatically included and processed.

> Using new file, you'll guarantee that all Argento files left untouched and
> you can unpack new Argento version over the old one without lossing your
> modifications

## Example

Let's change product links color from black to blue and update color scheme for 
homepage and products page tabs. [Scroll down](#result) to see results.

 1. Navigate to Argento theme css directory, you'd like to modify

    ```
    app/design/frontend/Swissup/argento-essence/web/css/source
    ```

 2. Create `_argento_custom.less` inside `source` folder
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

 4. Save the file and run following bash commands to regenerate compiled styles
    
    ```bash
    cd magento/root/folder
    rm -rf var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

### Result

{% include gallery.html images=page.gallery class="scroll phone-up-2 photoswipe" %}

##### Next up

- [Using Argento grid to organize content](/m2/argento/grid/)
- [Argento css helpers](/m2/argento/css-helpers/)
- [Create Argento based custom theme](/m2/argento/custom-theme/)
