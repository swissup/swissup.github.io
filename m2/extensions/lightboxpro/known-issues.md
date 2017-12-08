---
layout: default
title: Lightbox Pro Known Issues
description: Lightbox Pro Known Issues
keywords: lightboxpro, lightboxpro known issues
category: Lightbox Pro
---

# Known Issues

### Magento_ProductVideo/js/fotorama-add-video-events rewrite

Lightbox Pro rewrites `Magento_ProductVideo/js/fotorama-add-video-events` to fix gallery
issues on configurable product pages. This issue should be fixed in Magento version 2.2.2.

### Magento Magnifier Widget

Zoom feature does not work when using multiple galleries on same page, because
[Magnifier jQuery Widget][magnifier_widget] does not support multiple instances.

Because of this issue, using gallery widget on product page is not recommended.

[magnifier_widget]: http://devdocs.magento.com/guides/v2.2/javascript-dev-guide/widgets/widget_gallery_mg.html
