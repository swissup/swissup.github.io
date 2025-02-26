---
layout: default
title: Easy Catalog Images Changelog
description: Easy catalog images changelog
keywords: easycatalogimages changelog
category: EasyCatalogImages
---

# Changelog

### Version 1.5.10

> Feb 26, 2025

 -  Added canonical URL to the Departments Page.

### Version 1.5.9

> Nov 20, 2024

 -  Fixed a11y contrast issues.
 -  Improved ability to use keyboard navigation.

### Version 1.5.8

> August 5, 2024

 -  Return path to original image if error happens during resize. Previsously we
    showed image placeholder instead.

### Version 1.5.6

> May 3, 2024

 -  Breeze: zoom on hover support added.

### Version 1.5.4

> Mar 12, 2024

 -  Do not require category_id when inserting widget using Pagebuilder.

### Version 1.5.2

> Nov 28, 2023

 -  Improve breeze compatibility.
 -  Allow using [lazyload attribute](/m2/extensions/easycatalogimages/widget/).

### Version 1.5.1

> Sep 21, 2023

 -  Integration with Swissup_AjaxLayerednavigation added. Now, the block is
    correctly hidden when ajax filter is enabled and `hide_when_filter_is_used`
    option is used.

### Version 1.5.0

> Jul 24, 2023

 -  Added ability to [cache block result](/m2/extensions/easycatalogimages/widget/#widget-interface).
    This options is useful, when block is rendered inside navigation dropdown
    (Same EasyCatalogImg content on all pages).
 -  Reduced count of generated responsive images from 6 to 3.

### Version 1.4.23

> Nov 15, 2022

 -  Improved Breeze Theme integration

### Version 1.4.19

> Apr 7, 2022

 -  Improved integration with Magento Pagebuilder module:
    -  Fixed js error when adding component into the page.
    -  Fixed preview styles.
    -  Fixed not working categories_to_hide/show, and sizes options.
 -  Magento Coding Standard fixes.

### Version 1.4.16

> Nov 29, 2021

 -  Add magento pagebuilder integration (widget)
 -  Remove synonym data-content-type (EasyCatalogImg => easycatalogimg)

### Version 1.4.15

> Jun 14, 2021

 -  Fixed not found image in widget when it should use fallback and take
    category image attribute.
 -  Prevent image duplicates in srcset attribute.

### Version 1.4.14

> May 21, 2021

 -  Improve image resizer - allow to define width only. Useful when images has
    different heights.
 -  Responsive images support added - various devices will now receive
    images resized according to their screen size.

### Version 1.4.13

> Jan 22, 2021

 -  Fixed possible broken image thumbnail in Magento 2.4

### Version 1.4.12

> Nov 25, 2020

 -  Do not modify category layout via layout.xml
 -  Do not output subcategories block on root category (Attribute Pages compatibility)
 -  Widget now can be added using backend widget interface. Previously, block was not displayed if added in such a way.

### Version 1.4.11

> Aug 5, 2020

 -  Added category to hide and listing mode options to departments page configuration

### Version 1.4.10

> Aug 1, 2020

 -  Added margin on AMP homepage
 -  Prevent styles duplication in styles-m and styles-l files
 -  Fixed broken thumbnail upload in Magento 2.4

### Version 1.4.8

> May 7, 2020

 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian

### Version 1.4.7

> Feb 17, 2020

 -  CSS style optimizations.

### Version 1.4.6

> Oct 16, 2019

 -  Code cleanup.

### Version 1.4.5

> Sep 25, 2019

 -  Merge module styles with theme and use its less variables.

### Version 1.4.4

> Aug 19, 2019

 -  Added ability to show parent category link as button. Used at ArgentoForce theme.

### Version 1.4.1

 -  Fixed possible PHP warning on PHP 7.2

### Version 1.3.0

 -  Added ability to use widget with categories of one StoreGroup at another
    StoreGroup. (Previously there was an issue with invalid urls for a such kind
    of crosslinks)
 -  Fixed broken image url, if width wasn't set to a proper number.

### Version 1.2.0

 -  Added configurable 'Departments' page with masonry layout style

### Version 1.1.4

 -  Magento 2.2.0 compatibility

### Version 1.1.0

> This version is **not compatible** with old Magento versions.
>
> Magento 2.1 and newer are supported only.

- Magento 2.1.0 compatibility
- Added ACL resource file

### Version 1.0.4

- Fixed missing `Thumbnail` class error

### Version 1.0.2

- Improved thumbnail removing logic
- Fixed broken page when placeholder is not deployed into pub/static

### Version 1.0.1

- pub/media/catalog/category folder is now created if not exists before image assignment
- Wrong translation placeholders fixed
- Resize image for widget fixed

### Version 1.0.0

- Initial Release
