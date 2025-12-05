---
layout: default
title: Highlight changelog
description: Highlight changelog
keywords: highlight changelog
category: Highlight
---

# Changelog

### Version 1.11.9

> December 5, 2025

 -  Updated Breeze integration.

### Version 1.11.8

> September 9, 2025

 -  Compatibility with Breeze 2.25.0
 -  Magento coding standard fixes

### Version 1.11.7

> June 20, 2025

 -  Fixed possible PHP error when Smile_ElasticSuite module is enabled.

### Version 1.11.3

> April 9, 2025

 -  PHP 8.4 support added.
 -  Magento 2.4.8 support added.

### Version 1.11.1

> January 22, 2025

 - Fixed php error when using pagination in ajax carousel

### Version 1.11.0

> December 9, 2024

 -  Performance improvements for large store catalogs (> 100K SKU) for the All Products Block
    and Bestsellers blocks.

    This improvement requires one of the following minimal DB engine versions:

    - Maria &mdash; 10.2
    - MySQL &mdash; 8.0
    - PostgreSQL &mdash; All versions are supported

    > If you are using older DB, you will not see significant difference with previous version.

    Our tests shows the following results for single DB query on a catalog of
    300K products and 200K sold items:

    Block               | Before    | After
    --------------------|-----------|------
    All Products Slider | 7s        | 0.001
    Bestsellers Slider  | 0.5s      | 0.3s

 -  [Improved toolbar pager](/m2/extensions/highlight/configuration/) added to
    improve store performance even more.
 -  Fixed CSS compilation error.

### Version 1.10.4

> September 19, 2024

 -  Fixed possible "duplicate ID 'limiter'" error.
 -  Do not render bottom toolbar block when there is only one page to display.

### Version 1.10.3

> September 2, 2024

 -  Fixed PHP error when using table prefixes.

### Version 1.10.0

> August 5, 2024

 -  [New Page](/m2/extensions/highlight/pages/) and [Widget](/m2/extensions/highlight/widgets/)
    added: **Bulk Bestsellers**.

    While old Bestsellers page show most sold products ordered by orders count,
    the new Bulk Bestsellers page shows most sold products ordered by quantity
    sold count.

### Version 1.9.5

> Apr 1, 2024

 -  Breeze: fixed not working scroll animation when clicking "next" for the first time.
 -  Fixed not working page_count parameter when ajax carousel is used.

### Version 1.9.3

> Mar 28, 2024

 -  Fixed js error in highlight carousel in Luma theme when Breeze module is used.
 -  Fixed possible js error "blockData" on undefined.

### Version 1.9.1

> Feb 2, 2024

 - Breeze integration updated. Dynamic JS support added.

### Version 1.9.0

> Dec 1, 2023

 -  Added ability to set [custom sort order](/m2/extensions/highlight/pages/#advanced-settings)
    at highlight pages

### Version 1.8.11

> Nov 28, 2023

 -  Breeze performance improvement: slide item is no longer cloned on initial page load.
    It's now triggered when user is starting to slide the slider.

### Version 1.8.10

> Jul 27, 2023

 -  Stability improvements.

### Version 1.8.9

> July 4, 2023

 -  Fixed ajax-loaded slides when [Breeze theme](https://breezefront.com/) is used

### Version 1.8.4

> Nov 15, 2022

 -  Improved Breeze Theme integration
 -  Update widget placeholders for backend WYSWIG editor

### Version 1.8.0

> Sep 8, 2022

 -  Added ability to filter by category and all of its children using plus sign.

    Example: '4, 3+' will filter by category 4, 3, and all of the children of category 3.

### Version 1.7.31

> Sep 5, 2022

 -  Add canonical tag to highlight pages (when it is at category enabled).
 -  Fixed inactive buttons after ajax load.
 -  Fixed js error when sku has double quotes.
 -  Fixed missing Compare and Wishlist links when using core list.phtml template.
 -  Fixed incorrect conditions when multiple blocks added on the same page.
 -  Fixed invisible "Load more" button on mobile devices.
 -  Improved breeze integration.
 -  Reduce copy-paste in source code.

### Version 1.7.27

> May 26, 2022

 -  Performance improvement for ajax carousel on extra large screens.
 -  Fixed not working “current” filter when using ajax carousel.
 -  Fix animated arrows jumping when hover over carousel widget.

### Version 1.7.24

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.
 -  Fixed issue with long product names when using carousel mode.
 -  Fixed css issue in Breeze Theme.

### Version 1.7.20

> Nov 29, 2021

 - Rename data-content-type(lowercase)

### Version 1.7.19

> Oct 12, 2021

 - Fix order by popularity in graphQl

### Version 1.7.18

> Oct 8, 2021

 - Hide per-page limiter inside widget

### Version 1.7.17

> Sep 24, 2021

 - Fix compatibility with SEO Pagination module. Check layout before creating toolbar block.

### Version 1.7.16

> Sep 24, 2021

 - Update breeze integration
 - Fix 'Call to a member function setIsBottom() on bool' (graphql+2.4.3+emulated frontend)

### Version 1.7.15

> Aug 30, 2021

 - Fixed 'OptionsDataFactory does not exist' in Magento 2.4.2 and less .


### Version 1.7.14

> Aug 27, 2021

 - Fixed 'OptionsData does not exist' in Magento 2.4.3.


### Version 1.7.13

> Aug 26, 2021

 -  Fixed possible PHP error in Magento 2.4.3 when widget is created via admin.

### Version 1.7.12

> Jun 23, 2021

 -  Fixed not working condition filters when block cache is disabled.

### Version 1.7.11

> Jun 8, 2021

 -  Fixed not working add to cart when carousel is enabled and pages are loaded via ajax.

### Version 1.7.10

> May 21, 2021

 -  Fix homepage (and other pages) cache invalidation when product is saved in backend.

### Version 1.7.9

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.
 -  Fixed not working category filter when using ajax pagination.
 -  Fixed not working widget conditions.

### Version 1.7.7

> Apr 6, 2021

  - Add highlight pages into XML sitemap.
  - Fixed invalid product urls at highlight pages.
  - Code refactoring and improvements.
  - Add graphql.

### Version 1.7.4

> Jan 13, 2021

  - Add highlight pages to [SEO HTML Sitemap](/m2/extensions/seo-html-sitemap/).
  - Fixed two columns appearance for small screen.
  - Fixed incorrect items count for bestsellers at Magento 2.4.x.
  - Fixed carousel styles when widget isn't magazine. Slide is not full width at some Magento instances.
  - Fixed 'undefined index' error when config for pages meta data is empty.

### Version 1.7.0

> Dec 1, 2020

  - Added ability to [set description and meta tags](/m2/extensions/highlight/pages/#settings)
    for highlight pages.

### Version 1.6.6

> Nov 26, 2020

  - Replaced slick carousel with swiper.
  - Few style fixes and improvements.

### Version 1.6.3

> Aug 5, 2020

 -  Improve [Prolabels](/m2/extensions/prolabels/),
    [Seo Images](/m2/extensions/seo-images/) and [Seo Templates](/m2/extensions/seo-templates/)
    extensions support.

### Version 1.6.0

> Mar 16, 2020

 -  Added ColorSwatches support to the Highlight widgets and pages.
 -  Improved [magazine layout](/m2/extensions/highlight/widgets/css-helpers/#magazine-layout)
    look on mobile devices.
 -  Added ability to set custom 'View All' [page url](/m2/extensions/highlight/pages/#create-custom-page).
 -  Improved pagination/limit logic. (Amasty_Preorder module compatibility).

### Version 1.5.6

> Feb 18, 2020

 -  Fixed RTL carousel styles

### Version 1.5.5

> Dec 6, 2019

 -  Added "alt" to higllight title-images (mostly used when carousel enabled).
 -  Fixed duplicated 2nd page in casousel when there are products only for one page.
 -  Fixed carousel when it didn't show more then two pages even when there are more products available.

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
