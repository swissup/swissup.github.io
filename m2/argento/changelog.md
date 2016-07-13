---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 0.9.1.2

 -  Additional Magento 2.1 compatibility
 -  Fixed issues with:
    - Core
    - EasySlide
    - SoldTogether
    - EasyBanners
    - Prolabels

### Version 0.9.1

[Upgrade Instructions](../upgrade-instructions/#version-090---091)

> Magento 2.0.* versions are no longer supported.
>
> Please update to Magento to 2.1 or newer to use latest Argento.

**List of Included Themes**

Theme           | Version
:---------------|:-------
Argento Essence | 0.9.2
Argento Blank   | 0.8.5

**Fixes and Improvements**

 -  Removed deprecated css fixes for tablet devices:
    - Added Accordion style to Layered navigation
    - Better Layered Navigation positioning for small tablets
 -  Homepage products count in sidebar blocks decreased to 2
 -  Fixed missing top border in product listing toolbar elements

**Extensions Updates**

All extensions updated according to Magento 2.1 version.

 -  **All Modules**
    - ACL fixes
    - Magento 2.1 compatibility
 -  Soldtogether
    - Slick Carousel added to `Customers Also Bought` block
 -  [Easy Catalog Images](/m2/extensions/easycatalogimages/)
    - Fixed error with missing Thumbnail class
 -  [EasyTabs](/m2/extensions/easytabs/)
    - Fixed missing js component in review tab
 -  Core
    - Added AdminNotification to be in touch with latest swissup updates

### Version 0.9.0

> **Important Notice**
>
> This release breaks compatibility with previous Argento version
> because of new Boostrap powered grid system, that replaces a bit buggy previous
> grid realization.
>
> In order to use new Argento version, you need to:
>
> - [Run installer](/m2/argento/installation/), that will
>   backup and create new cms blocks and homepage
> - Or apply content changes according to
>   [upgrade instructions](/m2/argento/upgrade-instructions/)

**List of Included Themes**

Theme           | Version
:---------------|:-------
Argento Essence | 0.9.1
Argento Blank   | 0.8.4

New Argento is shipped toghether with Swissup Module Manager, that could help you
to keep Swissup modules up to date and [install Argento Theme](/m2/argento/essence/installation/)
in a few clicks.

**New Extensions**

 -  [Attribute based pages][attributepages]
 -  [Easybanner][easybanners]

**Extensions Updates**

 -  **All Modules**
    - Dependency injection compilation errors fixed
 -  [Ajax Search][ajaxsearch]
    - Improved dropdown styles
    - Added animation loader, when ajax request is processing
    - Fixed search field toggler on tablet devices
 -  [Easy Catalog Images][easycatalogimages]
    - Fixed broken page when placeholder is not deployed into pub/static
 -  [Easytabs][easytabs]
    - Fixed broken backend interface on initial load on some linux servers
 -  [Facebook Like button][fblike]
    - Fixed frontend error, when config is not saved

**Theme styles improvements**

 -  **General**
    - Bootstrap powered 12 columns grid added
    - Bootstrap responsive utilites added
    - Bootstrap responsive embed added
    - Bootstrap grid utilized to organize footer content
    - Cms content added aside to logo
 -  **Homepage changes**
    - Bootstrap grid utilized to organize content
    - Banner blocks replaced with Easybanner placeholders
    - Easyslider styles improvements
    - Brands slider manual scrolling fixed
    - All content is properly aligned with theme dimensions
 -  **Product Listing**
    - Fixed list mode styles
    - Grid mode styles improved
    - Widget styles improved

[ajaxsearch]: /m2/extensions/ajaxsearch/
[attributepages]: /m2/extensions/attributepages/
[easybanners]: /m2/extensions/easybanners/
[easycatalogimages]: /m2/extensions/easycatalogimages/
[easytabs]: /m2/extensions/easytabs/
[fblike]: /m2/extensions/fblike/

### Version 0.8.1

Initial release
