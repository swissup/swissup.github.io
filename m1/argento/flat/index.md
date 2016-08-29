---
layout: default
title: Argento Flat
description: ArgentoFlat theme documentation
keywords: "ArgentoFlat, flat"
category: Argento
---

# Argento Flat

##### [Homepage](homepage/)

 -  [Slider](homepage/#slider)
 -  [Category images row](homepage/#category-images-row)
 -  [Wide banner](homepage/#wide-banner)
 -  [New, Special and Bestselling Products](homepage/#new-special-and-bestselling-products)
 -  [Why choose us](homepage/#why-choose-us)
 -  [About us](homepage/#about-us)
 -  [Brands Slider](homepage/#brands-slider)

##### [Product Page](product-page/)

 -  [Layout](product-page/#layout)
 -  [Brand logo and Services blocks](product-page/#brand-logo-and-services-blocks)
 -  [Product images](product-page/#product-images)
 -  [Product labels](product-page/#product-labels)
 -  [Tabs](product-page/#tabs)
 -  [Soldtogether blocks](product-page/#soldtogether-blocks)
    - [Frequently bought together](product-page/#frequently-bought-together)
    - [Customers who bought this item also bought](product-page/#customers-who-bought-this-item-also-bought)

### Jumbotrons

Jumbotrons - are the wide colorized containers on the ArgentoFlat homepage. Use the
styles below to change their background:

```css
/*Default*/
.jumbotron { background: #fff; }
.jumbotron .stub::after { border-top-color: #fff; }
.jumbotron .cover .triangle { border-bottom-color: #fff; }

/*Bright*/
.jumbotron.jumbotron-bright { background: #f15922; }
.jumbotron-bright + .jumbotron .stub,
.jumbotron-bright + .jumbotron .stub::after { border-top-color: #f15922;  }
.jumbotron .cover-bright .triangle { border-bottom-color: #f15922; }

/*Pastel*/
.jumbotron.jumbotron-pastel { background: #229392; }
.jumbotron-pastel + .jumbotron .stub,
.jumbotron-pastel + .jumbotron .stub::after { border-top-color: #229392; }
.jumbotron .cover-pastel .triangle { border-bottom-color: #229392; }

/*Pastel alt*/
.jumbotron.jumbotron-pastel-alt { background: #a5205f; }
.jumbotron-pastel-alt + .jumbotron .stub,
.jumbotron-pastel-alt + .jumbotron .stub::after { border-top-color: #a5205f; }
.jumbotron .cover-pastel-alt .triangle { border-bottom-color: #a5205f; }

/*Dark*/
.jumbotron.jumbotron-dark { background: #222337; }
.jumbotron-dark + .jumbotron .stub,
.jumbotron-dark + .jumbotron .stub::after { border-top-color: #222337; }
.jumbotron .cover-dark .triangle { border-bottom-color: #222337; }

/*Pattern*/
.jumbotron.jumbotron-pattern { background: url(../images/sativa.png) 50% 0; }

/*Image*/
.jumbotron.jumbotron-image { background: url(../images/concrete_seamless.png) 50% 0; }
```
