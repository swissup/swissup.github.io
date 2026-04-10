---
layout: default
title: Prolabels and third-party
description: Support of known third-party modules.
keywords: " magento prolabels extension, SolideWebservices Productimageenhancements "
category: Prolabels
---

# Third-Party Modules Support
{:.no_toc}

* TOC
{:toc}

### Swissup LightboxPro

[Lightbox Pro](/m2/extensions/lightboxpro/) module provides advanced options for product image and its popup on product page.

Prolabels works with it of the box. Ther is no need in additional configuration.

### SolideWebservices Product Image Enhancements

Technical name is `SolideWebservices_Productimageenhancements`. It impacts on product image at product page.

Prolabels works greate with this module also. But it require minor config change in Prolabels. Go to [`Storefront Output`](../configuration/#storefront-output)` section in Prolabels configuration. And change:
 
  - **Product Page - image labels target**: `#main-product-image`

Save config. Flush cache and check product page.