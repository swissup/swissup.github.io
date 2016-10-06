---
layout: default
title: Argento Flat Jumbotrons
description: How to customize Argento Flat jumbotron colors
category: Argento
---

# Jumbotrons customization

Jumbotrons — are the wide colorful blocks at the Argento Flat homepage.

### Contents

 1. [Markup examples](#markup-examples)
 2. [Class modifiers](#class-modifiers)
 3. [Less variables](#less-variables)
 4. [Customization example](#customization-example)
    - [Result](#result)

### Markup examples

```html
<div class="jumbotron jumbotron-image no-padding">
    <!-- "Cover" will be rendered at the bottom of current element and will partially cover its content -->
    <div class="cover"><div class="left triangle"></div><div class="right triangle"></div></div>
    <div class="container">
        <!-- Content goes here -->
    </div>
</div>
<div class="jumbotron hero">
    <div class="container">
        <!-- Content goes here -->
    </div>
</div>
<div class="jumbotron hero">
    <!-- "Stub" will be rendered at the top of current element -->
    <div class="stub"></div>
    <div class="container">
        <!-- Content goes here -->
    </div>
</div>
```

### Class modifiers

Type |Class name | Description
**Background** ||
| jumbotron-image | Use image as a jumbotron background
| jumbotron-pastel | Use pastel background color
| jumbotron-pastel-alt | Use alternative pastel background color
| jumbotron-pattern | Use pattern background
| jumbotron-bright | Use bright background
| jumbotron-dark | Use dark background
**Text** ||
| hero | Use large titles inside jumbotron
| jumbotron-inverse | Use white text and title colors
**Layout** ||
| no-padding | Do not use default paddings
| no-padding-top | Do not use default top padding
| no-padding-bottom | Do not use default bottom padding

### Less variables

See the [next paragraph](#customization-example) on how to use these variables.

Variable | Default value
---------|--------------
**Spacing** |
@jubmotron__padding | 25px 0 20px
**Background** |
@jubmotron__background | #fff
@jubmotron-bright__background | #f15922
@jubmotron-pastel__background | #229392
@jubmotron-pastel-alt__background | #a5205f
@jubmotron-pattern__background | url(../images/pattern.jpg) 50% 0
@jumbotron-image__background | url(../images/bkg_sky.jpg) 50% 0
@jubmotron-dark__background | #222337
**Text** |
@jubmotron-dark__text-color | lighten(@jubmotron-dark__background, 60%)
@jubmotron-inverse__text-color | #fff
**Misc** |
@jumbotron-cover-triangle__z-index | 2

### Customization example

Let's change default colors. [Scroll down](#result) to see results.

 1. Create `_argento_custom.less` inside
    `app/design/frontend/Swissup/argento-flat/web/css/source` folder.
 3. Add your custom styles:

    ```scss
    @jubmotron__background: #fff;
    @jubmotron-bright__background: #22a0f1;
    @jubmotron-pastel__background: #842293;
    @jubmotron-pastel-alt__background: #6820a5;
    @jubmotron-dark__background: #222;
    @jubmotron-pattern__background: url(../images/custom/seigaiha.png) 50% 0;
    @jumbotron-image__background: url(../images/custom/noisy.png) 50% 0;
    ```

    > If you would like to replace pattern or image backgrounds — place them into
    > `app/design/frontend/Swissup/argento-flat/web/images/custom` folder.

 4. Save the file and run following bash commands to regenerate compiled styles

    ```bash
    cd magento/root/folder
    rm -rf var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

### Result

{% include gallery.html images=site.data.gallery.m2.argento.flat.jumbotrons class="scroll phone-up-2 photoswipe" %}

##### Next up

 -  [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
 -  [Theme editor](theme-editor/)
 -  [Page structure manuals](/m2/argento/flat/page-structure/)
    -  [Homepage](page-structure/homepage/)
    -  [Product page](page-structure/product-page/)
