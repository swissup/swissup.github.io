---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 0.9.9

> [Upgrade Instructions](../upgrade-instructions/#version-097---099)

 -  **ArgentoLuxury** theme added. [View Docs](../luxury/)
 -  **Hover Gallery** module added. [View Docs](/m2/extensions/hover-gallery/)

**Extensions Updates**

 -  **EasySlide** — 1.1.4
    -   better widget compatibility with third-party modules
 -  **Highlight** — 1.1.2
    -   fixed widget styles
 -  **Facebook Like Button** — 1.1.0
    -   added custom like button layout
 -  **EasyTabs** — 1.2.0
    -  added tabs widget

### Version 0.9.8

 -  Magento 2.2 compatibility

### Version 0.9.7

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-096---097)

 -  Added ability to [disable sticky header programmatically](/m2/argento/scripts/argento-sticky/)
 -  All modules updated according to Magento 2.1.7 changes
 -  DI compilation fixes

### Version 0.9.6

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v096 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-095---096)

 -  **ArgentoMall** theme added. [View Docs](../mall/)
 -  ArgentoMall [theme editor](/m2/argento/mall/theme-editor/) added
 -  [Ajax Pro](/m2/extensions/ajaxpro/) extension included

**List of Included Themes**

 -  **Argento Blank** — 0.9.6
 -  **Argento Essence** — 0.9.6
 -  **Argento Flat** — 0.9.6
 -  **Argento Pure2** — 0.9.6
 -  **Argento Mall** — 0.9.6

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.3
    -   Without limit bug was fixed in product provider
 -  **Askit** — 1.2.4
    -   Cms pages integration
    -   Catalog categories integration
    -   You can search Askit questions in Magento admin top search
    -   Grid massactions logic fixed
    -   Grid full-text search fixed
 -  **Easybanner** — 1.0.8
    -   Fixed bug using multiple banners on one page
 -  **Rich Snippets** — 1.0.5
    -   Sort order fixed
    -   Acl added
    -   Fixed error in breadcrumbs json
    -   Added config to disable snippets


### Version 0.9.5

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v095 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-094---095)

 -  **ArgentoPure2** theme added. [View Docs](../pure2/)
 -  Sticky header added to the ArgentoFlat theme
 -  Improved reviews styles on small laptops and tablets
 -  Improved accordion styles
 -  Removed "Add to cart" button from products listing on small devices
 -  Vertical tabs added for laptops and tablets because horizontal tabs does
    not fit the screen width
 -  Bootstrap's `col-md-*` breakpoint changed to 768px
 -  Colorful socials icons [added](/m2/argento/customization/icons/#color-classes)
 -  Many small css improvements

**Fixes**

 -  Fixed horizontal scroll on checkout page
 -  Fixed FontAwesome icons vertical alignment
 -  Fixed incorrect position of submenu dropdown
 -  Fixed invalid dependency in `jquery.visible` plugin which cause js error in
    developer console

**Developer improvements**

 -  ArgentoSticky script added. [View Docs](../scripts/argento-sticky/)
 -  New mixins and classes:
    +  [Less mixins](/m2/argento/customization/less-mixins/)
    +  [Text block alignment classes](/m2/argento/customization/css-helpers/#text-and-block-alignment-classes)
    +  [Colorized social icons](/m2/argento/customization/icons/)

**List of Included Themes**

 -  **Argento Blank** — 0.9.5
 -  **Argento Essence** — 0.9.5
 -  **Argento Flat** — 0.9.5
 -  **Argento Pure2** — 0.9.5

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.2
    -   Final_price replaced min_price in price template
    -   Small css fixes
 -  **Askit** — 1.2.4
    -   Fixed toolbar amount position on mobile devices
    -   Admin email notification was fixed
    -   Adming functionality fixes
 -  **Easybanner** — 1.0.7
    -   Fixed Image insert using WYSIWYG editor
 -  **Easyslide** — 1.1.1
    -   Small css fixes
 -  **FontAwesome** — 1.2.0
    -   Icons updated to 4.7.0
 -  **Prolabels** — 1.2.0
    -   Fixed missing badgets after cron job
    -   Small fixes

### Version 0.9.4

> [Upgrade Instructions](../upgrade-instructions/#version-093---094)

 -  ArgentoFlat [theme editor](/m2/argento/flat/theme-editor/) added
 -  Small css fixes to improve css customization in:
    +  Product listing widgets
    +  Footer links styles
    +  ArgentoFlat [jumbotrons](/m2/argento/flat/jumbotrons/)

**Prolabels**

 -  Fixed possible duplicate label in widgets listings
 -  Improved label loading method

**FontAwesome**

 -  Added ability to use font-awesome icons for backend modules

### Version 0.9.3

**Screenshots**

{% include gallery.html images=site.data.gallery.m2.argento.changelog.v093 class="phone-up-1 tablet-up-3 photoswipe scroll" %}

> [Upgrade Instructions](../upgrade-instructions/#version-092---093)

 -  ArgentoFlat theme added. [View Docs](../flat/)
 -  More Less variables to match developer customization needs
    - Product listing variables
    - Additional Product Tabs variables
    - Additional Navigation variables
    - Crossell, Upsell, Related products variables
 -  Product questions count added to tab title
 -  Improved product listing styles stability in various browsers
 -  Improved Rewiews Tab styles for large screens
 -  Added ability to include custom.js file
 -  Many small css fixes and improvements

**List of Included Themes**

 -  **Argento Blank** — 0.9.3
 -  **Argento Essence** — 0.9.3.1
 -  **Argento Flat** — 0.9.3

**Extensions Updates**

 -  **Ajaxsearch** — 1.2.0
    -   Added Folded Design feature, that hides input field and shows it in
        fullscreen mode with nice effect
    -   Small css fixes
 -  **Askit** — 1.2.0
    -   Added ability to show questions count in tab title
    -   Improved questions styles
    -   Styles rewritten in less with bunch of new variables that allow to change
        design easely
 -  **Easybanner** — 1.0.6.4
    -   Fixed empty spacing below banner
    -   Fixed banner url to product and category pages
 -  **Easycatalogimages** — 1.1.1
    -   Fixed issue in automatic category thumbnails assignment, thumbnails are now
        assigned to default store id
 -  **Easyslide** — 1.1.0
    -   Fixed empty spacing below slider
    -   Added slider themes:
        - Dark
        - White
        - Default (Blue)
 -  **Highlight** — 1.1.0
    -   Product listing styles rewritten to allow to use gutter between products
 -  **Soldtogether** — 1.1.6
    -   Fixed "Add all to cart" button alignment in amazon style mode
    -   Small css improvements

### Version 0.9.2

[Upgrade Instructions](../upgrade-instructions/#version-091---092)

 -  Theme editor added. [Read more](../customization/theme-editor/)
 -  Additional LESS variables added to simplify switching between
    [boxed, full-width and standard layout types](../customization/boxed-full-width-and-standard-layout-types/)
 -  FontAwesome configuration added. Now you can choose between CDN and local version.
 -  Fixed product listing glitches in Safari browser
 -  Bugfixes and improvements to:
    - Attributepages
    - ProLabels
    - SoldTogether
    - Testimonials
 -  [Askit](/m2/extensions/askit/) module added

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
to keep Swissup modules up to date and [install Argento Theme](/m2/argento/installation/)
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
