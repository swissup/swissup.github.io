---
layout: default
title: Highlight changelog
description: Highlight changelog
keywords: highlight changelog
category: Highlight
---

# Changelog

### Version 1.5.2

> Apr 05, 2019

 -  Fixed invalid currencies in product blocks when cache is enabled

### Version 1.5.1

> Feb 26, 2019

 -  MagazineLayout: Replaced background image with img tag in title background.

### Version 1.5.0

> Jan 04, 2019

 -  [AMP](/m2/extensions/amp/) integration added
 -  Improved [magazine layout](/m2/extensions/highlight/widgets/css-helpers/#magazine-layout)
    styles on mobile devices

### Version 1.4.1

> Dec 4, 2018

 -  Widget template updated according to the latest SlickCarousel module
 -  Prevent possible non-seo links

### Version 1.3.0

 -  Added ability to filter products by
    [current category](/m2/extensions/highlight/faq/#filter-products-by-current-category)
 -  Fixed ajax "Add To Cart" on loaded carousel slides
 -  Fixed "Add To Compare" on loaded carousel slides

**Changes for third-party module developers**

 -  Added ability to integrate carousel slider with third-party
    "Ajax" modules.

    Example on how this is handled by our
    [Swissup_Ajaxpro](/m2/extensions/ajaxpro/) module:

    Create `highlight_carousel_slide.xml` layout update and move your initialization
    scripts into `highlight.carousel.slide` container:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">

        <update handle="ajaxpro_default"/>
        <move element="ajaxpro.init" destination="highlight.carousel.slide"/>
    </page>
    ```

### Version 1.2.2

 -  Magento 2.2.4 compatibility (No limit is applied to product listing)
 -  Fixed mysql error, when using flat categories
 -  Fixed possible 'Undefined index' warning when config is copied from Magento 1
 -  Fixed filters by conditions when cache is enabled
 -  Added RTL support when using ajax carousel
 -  Prevent random sort order when attribute value of different products is the same
    New products with the same 'new_from' attribute, for example.
 -  Fixed isLastPage detection in carousel mode

### Version 1.2.1

 -  Fixed php error when using pagination in ajax carousel
 -  Fixed possible error during `indexer:reindex` command
 -  Fixed possible non-seo product links
 -  Small css fixes

### Version 1.2.0

<details>
    <summary><strong>Screenshots</strong></summary>
    <img alt="Magazine layout" src="/images/m2/highlight/layouts/magazine.png"/>
</details>

> **Warning!** This release can reset pagination settings in a widget.
>
> In this case you should reopen widget settings and save them again

 -  Added ability to show products widget as ajax carousel
 -  Fixed bug when you can't call for multiple widgets with different conditions on the same page
 -  New predefined [layout added](/m2/extensions/highlight/widgets/css-helpers/)
 -  Templates refactoring. Highlight can now render a widget using a template
    from active theme with all modifications.

### Version 1.1.0

 -  Added ability to show 'View all' link in a block title (Like in ArgentoFlat theme)
 -  Added `10px` gutter between items

### Version 1.0.2

 -  Added ability to set column count in grid mode
 -  Added `product-item-inner` wrapper arount addto buttons

### Version 1.0.1

 -  Added ability to set custom url for "See all products" link
