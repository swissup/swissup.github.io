---
layout: default
title: Argento changelog
description: Argento changelog
category: Argento
---

# Argento Changelog

### Version 1.7.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-160---170)

**Major updates**

 -  Magento 2.2.6 compatibility
 -  Greatly improved [ProLabels](https://docs.swissuplabs.com/m2/extensions/prolabels/)
    module with [new backend interface](https://docs.swissuplabs.com/images/m2/prolabels/preview-demo.gif)
    and a bunch of [ready-to-use presets](https://docs.swissuplabs.com/images/m2/prolabels/presets-110.png).

**Extensions Updates**

 -  **Fblike** — 1.1.4
    - Fixed error "Action Requires At Least One Reference" when custom button is used
 -  **Navigationpro** — [1.7.0](https://docs.swissuplabs.com/m2/extensions/navigationpro/changelog/#version-170)
    - Magento 2.2.6 compatibility
    - Backend interface improvements
 -  **ProLabels** — [1.1.0](https://docs.swissuplabs.com/m2/extensions/prolabels/changelog/#version-110)
    - Backend interface improvements
    - Ready-to-use presets added

### Version 1.6.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-150---160)

 -  New [**Accelerated Mobile Pages**](/m2/extensions/amp/) module added
 -  Fixed styles for [**Firecheckout themes**](/m2/extensions/firecheckout/configuration/#theme)

**Extensions Updates**

 -  **AjaxPro** — 1.3.2
    -  Fixed js error
    -  Fixed redundant reload of AjaxPro sections
 -  **Attributepages** — 1.0.10
    -  Fixed delete mass action and store filter in admin grid
    -  Fixed error in options list when identifier is missing
    -  Fixed 404 error for options with html entities in name
 -  **Compare** — 1.0.1
    -  Css fixes
 -  **EasySlide** — 1.1.5
    -  Added AMP integration
 -  **Easy Catalog Images** — 1.2.1
    -  Added AMP integration
 -  **EasyTabs** — 1.3.3
    -  Fixed delete mass action and store filter in admin grids
 -  **GDPR** — 1.0.1
    -  Fixed possible issue with invalid config value
 -  **Hover Gallery** — 1.0.2
    -  Changed logic to determine image position in media gallery
    -  Added opacity transition for original image
 -  **SEO Suite** — 1.0.1
    -  Minor improvements and Magento 2.1.x compatibility fixes
 -  **Testimonials** — 1.1.0
    -  New testimonials listing page design
    -  New testimonials slider widget
    -  Added feature to export product review to testimonial
    -  Added config options to require rating and to disable testimonial submit for guests

### Version 1.5.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-140---150)

 -  New [**Compare module**](/m2/extensions/compare/) added
 -  New [**Regional and Language URLs** module](/m2/extensions/hreflang/) added as part of [Seo Suite](/m2/extensions/seo-suite/)
 -  New [**SEO XML Sitemap** module](/m2/extensions/seo-xml-sitemap/) added as part of [Seo Suite](/m2/extensions/seo-suite/)
 -  Css fixes for reviews toolbar
 -  Css fixes for Askit questions toolbar
 -  Added compatibility with Magento 2.2.5 when installing theme on 'All Store Views'

**Extensions Updates**

 -  **AjaxPro** — 1.3.1
    -  Added slide mode for modal dialog
    -  Added floating cart
    -  Fixed priceBox bug
    -  Fixed bug with disabled radio buttons in shipipng estimation
    -  Fixed configurable products add to cart issue on homepage
 -  **Askit** — 1.2.17
    -  Added email subject translation
 -  **Easybanners** — 1.2.3
    -  Fixed possible error on bundle product pages
 -  **EasyTabs** — 1.3.2
    -  Fixed activate and scroll to tab on external link click
 -  **Fblike** — 1.1.3
    -  Overall JavaScript improvements (load Facebook SDK only it is necessary, better utilization of Magento RequireJS functionality)
 -  **Hover Gallery** — 1.0.1
    -  Fixed both images visible issue when using transparent png product images
 -  **Navigationpro** — 1.6.0
    -  New menu styles: [Ribbon Menu](/m2/extensions/navigationpro/use-cases/ribbon-menu/), [Apple Menu](/m2/extensions/navigationpro/use-cases/apple-menu/), [Link Bar Mobile Menu](/m2/extensions/navigationpro/use-cases/link-bar/)
    -  New Use Case added: [Iconic Dropdown Menu](/m2/extensions/navigationpro/use-cases/iconic-menu/#dropdown-menu)
    -  Small CSS fixes
 -  **ProLabels** — 1.0.24
    -  Fixed php notice on Single Store mode in Edit Label interface
 -  **SEO Suite** — 1.0.0
     -  includes new module [Regional and Language URLs](/m2/extensions/hreflang/)
     -  includes new module [SEO XML Sitemap](/m2/extensions/seo-xml-sitemap/)
     -  *Richsnippets*  — 1.1.3
         -  Fixed missing breadcrumbs data at product pages in Magento 2.2.4+
         -  Fixed possible notice at product page with grouped product
         -  Using full description in snippet when short description is empty
     -  *SEO HTML Sitemap*  — 1.0.1
         -  Renamed admin menu item "HTML Sitemap Links" to "Sitemap Links"
         -  Fixed PHP fatal error in custom links grid when Magento Admin session expired
     -  *SEO URLs*  — 1.2.1
         -  Config section renamed from "Urls" to "SEO URLs"
         -  Integration with "Regional Urls (hreflang)" module
     -  *SEO Pager*  — 1.0.1
         -  Canonical URL now removed correctly
     -  *SEO Templates*  — 1.0.2
         -  Fixed error during compilation

### Version 1.4.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-131---140)

 -  New [**GDPR module**](/m2/extensions/gdpr/) added
 -  New [**SEO Metadata Templates** module](/m2/extensions/seo-templates/) added
 -  Fixed not working "Add to Cart" button on Stripes theme when ColorSwatches
    are used on the product page
 -  Fixed toolbar position on non-anchor 1-column page in Stripes theme
 -  CSS fixes for RTL languages
 -  Small CSS fixes

**Extensions Updates**

 -  **Askit**
    -  Magento 2.2.4 compatibility in email templates
    -  Added client-side form validators
 -  **Attributepages**
    -  Fixed error when page identifier is entered in invalid registry
 -  **Easybanners**
    -  Fixed image styles in [Book layout](/m2/extensions/easybanners/layouts-for-html-banners/#book)
 -  **Email**
    -  Added predefined smtp providers settings
    -  Fixed Magento 2.2.4 compatibility
 -  **Soldtogether**
    -  Added new config option that allows to disable 'Create relations on order save'
 -  **Navigationpro**
    -  Allow to use absolute links in [menu items](/m2/extensions/navigationpro/backend/menu-edit/#general-settings)
    -  [Nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/) added
    -  Improved dropdown positioning
    -  Small fixes and improvements

### Version 1.3.1

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-130---131)

 -  Magento 2.2.4 compatibility
 -  Fixed "jumping" carousel and tabs styles on the homepage during script initialization
 -  Fixed white links in Stripes menu, when NavigationPro is disabled
 -  Products carousel at the Mall's homepage replaced with Highlight ajax carousel widget
 -  Small css and js fixes

**Extensions Updates**

 - **Ajax Search**
     +  Add popular search terms suggestions when input is empty
     +  Improved initialization speed
     +  Add store filter to the cms page results

 - **Attributepages**
     +  Fixed 404 error in backend options grid, when using pagination

 - **Easytabs**
     +  Fixed possible “Requested product doesn’t exist” error, when editing cart item

 - **Fblike**
     +  Fixed compatibility with button initialization in ajax updated product listing

 - **Highlight**
     +  Fixed bug with Magento 2.2.4 when limit/sort order doesn't work

 - **Navigationpro**
     +  Fixed bug with Magento 2.2.4 when breadcrumbs are missing on the product page

 - **SoldTogether**
     +  Fixed issue with “Grouped” products price calculation in “Amazon” view

### Version 1.3.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-120---130)

 -  We introduce new colorful theme - Argento Stripes. Check it out at [Stripes Theme Demo](http://magento2demo.argentotheme.com/stripes_en/).
 -  No more "jumping search" during page loading.
 -  A lot of small fixes and improvements to provide your store the best user experience.

**Extensions Updates**

 - **Ajax Search**
     +  Category filter for search requests
     +  Grid layout for suggestions popup.

 - **Ajax Pro**
     +  Remove product review summary and tabs from add product popup.

 -  **Easybanners**
     +  Magento 2.1 compatibility.
     +  Removed url validation as it does not allow to use .html suffix.
     +  Fixed ‘Undefined variable: options’ error for banners without placeholders.
     +  Fixed 'display_count_per_customer' conditions when FPC is enabled.

 -  **Easy Catalog Images**
     +  Added configurable ‘Departments’ page with masonry layout style.

 -  **Easytabs**
     +  Expanded tabs layout added.

 -  **Highlight**
     +  Added ability to show products widget as ajax carousel.
     +  Fixed bug when you can’t call for multiple widgets with different conditions on the same page.
     +  Fixed php error when using pagination in ajax carousel

 -  **Navigation Pro**
     +  New simplified form to create menu with a few clicks.
     +  RTL support added.
     +  [Overlay feature added](http://docs.swissuplabs.com/m2/extensions/navigationpro/use-cases/overlay/).

 -  **ProLabels**
     +  Optimize labels rendering on storefront.

 -  **SEO Suite**
     +  *Richsnippets*:
         +  Do not add rating to snippet when product reviews do not have ratings.
     +  *SEO URLs*:
         +  Improve compatibility with not English speaking stores.

 -  **Sold Together**
     +  New Stripe layout for 'Frequently Bought Together' block. Now can can choose between 'Amazon Inspired' (default) and 'Stripe' layout style.

### Version 1.2.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-110---120)

 -  Added RTL support in Luxury theme _(currently in beta)_
 -  [SEO Pagination](/m2/extensions/seo-pager/) added as part of [Seo Suite](/m2/extensions/seo-suite/)

**Luxury Theme**

 -  Fixed missing items count on search result listing on mobile devices
 -  Fixed invisible action buttons on the homepage if standard listing is used
 -  Fixed cutted shadow on the top edge of the icon
 -  Bring back an opacity on the action icons in product listing

**Extensions Updates**

 -  **Ajax Pro** — 1.2.5
     -  Fixed redirect to product page when ?option=cart used
     -  Added missing translations
     -  Added product.view popup on home page
     -  Added checking if response is json
 -  **Ajax Search** — 1.2.8
     -  Fixed broken sort by relevance
     -  Added translations
     -  Fixed empty results when limit was equal to number of suggestions
 -  **Askit** — 1.2.12
     -  Fixed missing question label bug
 -  **Attribute Pages** — 1.0.7
     -  Added canonical url to integrate with seo-pager
 -  **Easy Banner** — 1.2.0
     -  Added new conditions
     -  "Don't show anymore" action added to lightbox and awesomebar banners
     -  New predefined HTML layouts
     -  Added ability to assign placeholder to parent container without using "Widgets" page
     -  Fixed not-working banner when it assigned to multiple stores
     -  Improved popup styles and positioning
     -  Backend forms rewritten using UI components
 -  **Facebook Like Button** — 1.1.1
     -  Fixed issues that occurred at some environments with JS minification enabled
     -  Using same product URLs to like on category and product pages
 -  **Navigation Pro** — 1.2.0.1
     -  Added ability to set positioning settings for the first level dropdown: Stick to Left, Center, Stick to Right
     -  Fixed browser freezing on mobile devices when using vertical subcategories alignment
 -  **Pro Labels** — 1.0.21
     -  Fixed warning illegal offset during CLI reindex
 -  **Review Reminder** — 1.0.11
     -  Fixed empty customer name for guests orders
 -  **Seo Suite** — 0.9.0
     -  includes new module [SEO Pagination](/m2/extensions/seo-pager/)
     -  *Rich Snippets*:
         -  Fixed duplicated product structured data on product page.
         -  Minify JSON-LD structured data.
         -  No empty nodes in JSON-LD structured data.
     -  *SEO URLs*:
         -  Fix URL parsing when URL rewrite ends with ‘/’.
         -  Disable SEO URLs when direct controller URL used instead of URL rewrite.
         -  Improved integration with Swissup ALN module (stock filter, rating filter, new filter).
         -  Improved query string parsing when multiple values applied to filter.
         -  If filter separator enabled add it to URLs only when there are applied filters.
 -  **Sold Together** — 1.2.4
     -  Using correct customer select for reindex, increased customer step
     -  Fixed exception 'Item with the same ID already exists'

### Version 1.1.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-100---110)

 -  [Lightbox Pro](/m2/extensions/lightboxpro/) added
 -  [Seo Suite](/m2/extensions/seo-suite/) added with the following modules:
     -  [Google rich snippets](/m2/extensions/richsnippets)
     -  [HTML Sitemap](/m2/extensions/seo-html-sitemap)
     -  [SEO URLs](/m2/extensions/seo-urls)
 -  Fixed missing ProLabels on product page when other theme was installed after previously installed Luxury

**Luxury Theme**

 -  Added homepage fullscreen slider configuration from admin
 -  Added sitemap link in footer links
 -  Fixed wrong logo position on new Ajax Search version
 -  Corrected Navigation Pro styles on homepage
 -  Fixed search icon position when store switcher is not displayed
 -  Fixed listing styles on mobile devices

**Extensions Updates**

 -  **Ajax Search** — 1.2.6
     -  Now product page is opened when click or press enter on the element in popup
     -  Added missing close button and spinner in folded mode
     -  Removed mistakenly added cacheable='false' param, which disabled FPC
     -  Fixed error CollectionFactory already in use
     -  Fixed search form submit only after second tap on mobile keyboard
 -  **Askit** — 1.2.11
     -  Fixed not unique form element ids
     -  Added config for "You have not submitted a question" message
     -  Update ui_component according to the latest requirements
     -  Fixed error on Magento versions before 2.2.0
     -  Fixed vote for question action
 -  **Easy Banner** — 1.1.1
     -  Fixed SQL error "1205 Lock wait timeout exceeded"
     -  Reduced number of database operations
     -  Fixed search at banner conditions page
     -  Code cleanup
 -  **Easy Catalog Images** — 1.1.5
     -  Fixed compatibility with Magento versions 2.1.x
 -  **Navigation Pro** — 1.1.0
     -  Added sidebar menu support
     -  Added navigation pro widget
     -  Added Amazon-like sidebar menu
     -  Fixes for mobile devices
     -  Fixed php error when switching store view in backend interface
     -  Improved dropdown positioning calculations
 -  **Pro Labels** — 1.0.20
     -  Fixed invalid discount values calculation for non-base currencies
 -  **Sold Together** — 1.2.3
     -  Fixed customer reindex (error occured when customer had no orders)
     -  Code cleanup

### Version 1.0.0

> [Upgrade Instructions](/m2/argento/upgrade-instructions/#version-099---100)

 -  [NavigationPro](/m2/extensions/navigationpro/) added
 -  Css editor improved in theme editor backend. CSS syntax highlight added.

**Luxury Theme**

 -  Improved NavigationPro compatibility
 -  Fixed too long language switcher
 -  Out of stock phrase removed from listing
 -  Improved product quantity styles in header cart

**Extensions Updates**

 -  **AjaxSearch** — [1.2.5](/m2/extensions/ajaxsearch/changelog/#version-125)
 -  **Askit** — [1.2.8](/m2/extensions/askit/changelog/#version-128)
 -  **EasyCatalogImages** — [1.1.4](/m2/extensions/easycatalogimages/changelog/#version-114)
 -  **Prolabels** — [1.0.19](/m2/extensions/prolabels/changelog/#version-1019)
 -  **Reviewreminder** — [1.0.10](/m2/extensions/reviewreminder/changelog/#version-1010)

### Version 0.9.10

 -  Fixed critical vulnerability in EasyBanner module

**Extensions Updates**

 -  **AjaxPro** — 1.2.3
    - Fixed invalid xml layout update instructions
    - Improved compatibility with third-party modules
 -  **EasyBanner** — 1.0.12
    - Fixed critical SQL vulnerability
 -  **EasyTabs** — 1.2.1
    - Fixed ACL rules
 -  **ReviewReminder** — 1.0.10
    - Fixed wrong product url in email on multi-website store installation
 -  **SoldTogether** — 1.2.2
    - Fixed error when product is not available in registry

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
