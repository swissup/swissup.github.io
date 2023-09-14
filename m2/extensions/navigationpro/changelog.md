---
layout: default
title: Navigationpro Changelog
description: Navigationpro changelog
keywords: navigationpro changelog
category: Navigationpro
---

# Changelog

### Version 1.17.5

> Sep 14, 2023

 -  Performance: improve total blocking time score.
 -  Fixed not working 'dark' modifier for boxed dropdown.
 -  Fixed missing caret icon when js is not initialized yet.

### Version 1.17.2

> July 25, 2023

 -  [Breeze](https://breezefront.com) fixes for slideout and simple menu's.

### Version 1.17.1

> July 4, 2023

 -  Fixed incorrect "Shop All" link and item classes when alphabetical sort is used.

### Version 1.17.0

> June 29, 2023

 -  Added ability to render dropdown items in [alphabetical order](/m2/extensions/navigationpro/ui/dropdown-layout-builder/#children-subcategories-and-child-items)
 -  Added ability to [duplicate existing menu](/m2/extensions/navigationpro/backend/menu-edit/#top-toolbar)

### Version 1.16.20

> May 23, 2023

 -  Fixes wrong redirect after currency change when currency block is added to menu item.
 -  Fixed missing active class for CMS links inside menu.

### Version 1.16.18

> Apr 27, 2023

 -  Fixed not working save functionality when using pagebuilder with latest 
    Google Chrome (Version 112)
 -  Improved dropdown content preview renderer. Dedicated icons added for 
    iframe, map, slider, and grid widgets.

### Version 1.16.17

> Nov 15, 2022

 -  Improved Breeze Theme integration
 -  Fixed incorrect mobile breakpoint in Magento 2.4.4 and newer

### Version 1.16.12

> May 27, 2022

 -  Fixed not-working “click” menu on Magento 2.4.4 (jQuery UI conflict).
 -  PHP 8.1 compatibility: passing null to explode is deprecated.
 -  Fixed transparent dropdown bug.
 -  Breeze integration improvements.

### Version 1.16.11

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.
 -  Fixed incorrect has-active class on custom non-category links

### Version 1.16.8

> Feb 24, 2022

 -  Fixed error in backend pagebuilder when widget in page content is used.
 -  Fixed broken drag-n-drop in backend tree.
 -  Breeze: fixed dropdown content overflow when vertical direction is used.
 -  Breeze: fixed css issue on checkout success page

### Version 1.16.3

> Jan 28, 2022

 -  Magento Coding Standard fixes
 -  [Breeze Theme](https://breezefront.com) integration added
 -  Fixed layout shift caused by slideout menu

### Version 1.16.2

> Jan 5, 2022

 -  Fixed submenu height on Breeze theme when using amazon menu type.

### Version 1.16.1

> Nov 29, 2021

 -  :sparkles: Microeffect added to Initially expanded menu 2nd lvl
 -  Properly reset column height
 -  Fixed vertical columns mode on mobile devices

### Version 1.16.0

> Sep 24, 2021

 -  **New Feature**: [Always expanded](/m2/extensions/navigationpro/use-cases/expanded-on-homepage/) menu on the homepage.
 -  Breeze: fixed possible invalid shevron position.
 -  Fixed rare error when this.active is null.

### Version 1.15.10

> May 21, 2021

 -  Fixed error 'Menu doesn't exist' when saving category when DB has broken menu
    item records.

### Version 1.15.9

> May 17, 2021

 -  [Breeze](/m2/extensions/breeze/) integration updated - Fixed not working
    vertical columns layout.

### Version 1.15.8

> May 14, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added.
 -  Fixed not working sticky component.
 -  Fixed incorrect dropdown height on mobile devices when using stacked or amazon menu's.

### Version 1.15.6

> May 13, 2021

 -  Fixed missing top navigation when another menu instance is rendered inside.
 -  Graphql: If menu id empty then use menu id from config

### Version 1.15.5

> Apr 27, 2021

 -  Breeze: Fixed horizontal scrollbar after viewport resize
 -  Fixed js error `require is not defined` when Varnish used.
 -  Breeze: don't use hover events for accordion menu's

### Version 1.15.4

> Apr 26, 2021

 -  [Breeze](/m2/extensions/breeze/) integration added
 -  PWA integration added
 -  Optimize menu initialization on mobile devices

### Version 1.15.3

> Mar 23, 2021

 -  Magento 2.4.2 fixes.
 -  Added loading=lazy attribute to the megamenu image placeholders.

### Version 1.15.1

> Jan 22, 2021

 -  Updated integration with our [Pagebuilder module](/m2/extensions/pagebuilder/)
 -  Fixed not working nowrap menu when some items are hidden via css.

### Version 1.15.0

> Nov 30, 2020

 -  New Slideout Menu variation added:
    [Stackable Slideout Menu](/m2/extensions/navigationpro/use-cases/slideout-menu/)
 -  Fixed blurry text dropdowns when using certain slide effects.
 -  Fixed incorrect padding for menu items when dropdown should be on the left.
 -  Fixed multiple "Menu was saved" messages in backend when refresh the page after
    multiple menu saves.

### Version 1.14.12

> Oct 27, 2020

 -  Fixed synchronization of the new top level category with the departments submenu.

### Version 1.14.11

> Oct 15, 2020

 -  Do not allow to save menu or menu item when it has a recursive reference
    to itself via widget call.

### Version 1.14.9

> Sep 23, 2020

  - Fixed wrong active menu when using installer command with 'activate=0'.

### Version 1.14.8

> Aug 26, 2020

 -  Fixed invalid category image path when it's used in category title (Magento 2.3.5, 2.4.0)
 -  Added missing translations

### Version 1.14.7

> Aug 5, 2020

 -  Fixed invalid category image path in Magento 2.4
 -  PHP 7.4 compatibility.

### Version 1.14.5

> May 26, 2020

 -  Fixed rare bug when [nowrap](/m2/extensions/navigationpro/use-cases/nowrap/) or
    [sticky](/m2/extensions/navigationpro/use-cases/sticky/) features does not
    applied on the initial page load.

### Version 1.14.4

> May 22, 2020

 -  Fixed flyout menu from top left corner in Safari when fade animation is used
 -  Code cleanup and installer improvements

### Version 1.14.3

> May 4, 2020

 -  Added marketplace installer support.

### Version 1.14.1

> Apr 28, 2020

 -  Fixed bug when dropdown wasn't shown on mouse hover.
 -  Decreased cache memory consumption.
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

### Version 1.14.0

> Feb 25, 2020

 -  Added ability to set dropdown settings for third dropdown level.
 -  Fixed possible error when category name is missing in the backend navpro's tree.

### Version 1.13.8

> Feb 18, 2020

 -  Few RTL fixes.
 -  Fixed broken magento installation when navpro is enabled before Magento was installed.
 -  Fixed possible empty menu when using Argento installer and 'All Stores' option.

### Version 1.13.6

> Jan 31, 2020

 -  Fixed invisible dropdowns in sidebar menu, when it has `.navro-nowrap` class.

### Version 1.13.5

> Jan 08, 2020

 -  Inform about incorrect category data when importing items. (No errors were
    shown previously.)

### Version 1.13.4

> Dec 11, 2019

 -  Fixed possible webserver error in developer mode when a lot a categories
    are loaded in menu and FPC is enabled. (Size of 'X-Magento-Tags' header.)
 -  Fixed issues with Magento Page Builder functionality inside NavigationPro
    backend forms.

### Version 1.13.3

> Dec 6, 2019

 -  Fixed invalid category links when using iconic or megamenu with thumbnails menu types.
 -  Fixed bug when new category wasn't added to the menu's.

### Version 1.13.2

> Oct 29, 2019

 -  Improve accuracy of the [nowrap](/m2/extensions/navigationpro/use-cases/nowrap/) feature.
 -  Prevent unwanted accordion collapse on mobile devices when click outside of the menu.

### Version 1.13.1

> Oct 16, 2019

 -  Remove direct 'jquery/ui' usage to improve js performance.

### Version 1.13.0

> Sep 27, 2019

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v1130 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  [Slideout](/m2/extensions/navigationpro/use-cases/slideout-menu/) menu type added.
 -  New "Air" theme added with borderless shadowed dropdowns.
 -  Simplified CSS modifiers usage. You can now select them
    from the [list](/m2/extensions/navigationpro/backend/menu-settings/#modifiers).
    Previously you had to write them manually into CSS Class field.
 -  Added ability to write [custom CSS](/m2/extensions/navigationpro/backend/menu-settings/#general-settings)
    from Edit Menu page.
 -  Simplified menu creation. You can create [many menu](/m2/extensions/navigationpro/menu-types)
    types with just one click.
 -  Improved [Amazon Menu](/m2/extensions/navigationpro/use-cases/amazon-menu/)
    type builder. Now, it automatically shows parent category thumbnail
    in second level dropdowns.
 -  Improved [Megamenu](/m2/extensions/navigationpro/use-cases/megamenu/)
    type builder. Now, it automatically shows parent category thumbnail
    in category dropdown.
 -  New effects added to reveal menu dropdowns: Fade, SlideIn, SlideOut, None.
 -  Improved dropdown positioning.
 -  Many CSS fixes for Dark, Compact, and Flat themes.

### Version 1.12.0

> Aug 19, 2019

 -  [Mass edit feature](/m2/extensions/navigationpro/ui/menu-items-mass-edit/) added.
 -  Added ability to set
    [global item settings](/m2/extensions/navigationpro/backend/menu-settings/#global-item-settings)
    based on item level.
 -  Added ability to sync [item](/m2/extensions/navigationpro/backend/menu-edit/#advanced-settings)
    and [dropdown](/m2/extensions/navigationpro/backend/menu-edit/#dropdown-settings)
    settings with global settings from menu.
 -  Improved default value for dropdown layout settings in each item. Now it
    shows properly inherited dropdown layout.
 -  Added ability to hide html content/widget
    [when item has no children](/m2/extensions/navigationpro/ui/dropdown-layout-builder/#widget-or-plain-html).
 -  Added ability to use
    [depend and var directives](/m2/extensions/navigationpro/ui/menu-item-name-as-html/#available-variables)
    for item name renderer.
 -  All styles moved to `_module.less`. This allows easely redefine navigationpro
    variables within your theme.
 -  Improved [nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/) logic.
 -  Do not allow to import root category as it's cannot be rendered at frontend.
 -  Fixed possible js errors when rendering dropdown content at the backend.
 -  Fixed always enabled wysiwyg editors. Now they are disabled by default.

### Version 1.11.1

> Jun 12, 2019

 -  Fixed missing 'Accordion' menu layout in widget configuration

### Version 1.11.0

> Jun 7, 2019

 -  Added ability to [activate dropdowns with click](/m2/extensions/navigationpro/use-cases/click/)
    instead of mouseover.
 -  [Accordion menu](/m2/extensions/navigationpro/use-cases/sidebar-menu/#&gid=1&pid=3) added.
 -  Nowrap feature [improved](/m2/extensions/navigationpro/use-cases/nowrap/#offset-feature).
    It's much easier to get it work with various header types.
 -  Fixed invalid order of menu items when nowrap is used.
 -  Fixed possible horizontal scrollbar when 'nowrap' is used.
 -  Fixed invalid custom url in menu item, when '/' count is more than 3.

### Version 1.10.0

> May 15, 2019

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v1100 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Improved backend [dropdown layout builder](/m2/extensions/navigationpro/ui/dropdown-layout-builder/).
    Now it shows a preview of what customer will see on the frontend when
    changing children settings or html content.
 -  Added ability to limit number of categories to display in dropdown.
    When using this option, a 'Shop All' link will be displayed if children count
    exceed the limit. [View Megamenu Example](/m2/extensions/navigationpro/use-cases/megamenu/).
 -  Improved cache cleanup when edit menu settings or create new menu. No more
    manual cache update after each operation!
 -  New categories are now automatically synced into appropriate menu's. You don't
    need to manually import new categories into the tree!
 -  Improved default values for built-in menu types.
 -  Fixed "collapsed" menu on mobile devices after "window.resize" event.

### Version 1.9.3

> Mar 29, 2019

 -  Magento 2.3.1 compatibility
 -  Fixed invalid breadcrumbs when multiple menu's found on the same page
 -  Added missing localization file

### Version 1.9.2

> Feb 26, 2019

 -  Improved internal logic is Menu-Builder script

### Version 1.9.1

> Jan 04, 2019

 -  Fixed issues when search and storeviews dropdowns covered by sticky navigation

### Version 1.9.0

> Dec 28, 2018

 -  Added ability to [stick](/m2/extensions/navigationpro/use-cases/sticky/)
    menu when you scroll the page

### Version 1.8.1

> Dec 4, 2018

 -  Improved column-count calculation in Chrome browser

### Version 1.7.0

> Sep 20, 2018

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v170 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Magento 2.2.6 compatibility:
    - Fixed double caret icons near items with dropdowns
    - Fixed dropdown positioning for Amazon menu type
 -  Added ability to change [dropdown positioning](/m2/extensions/navigationpro/ui/dropdown-position/)
    for [particular dropdown item](/m2/extensions/navigationpro/use-cases/dropdown-position/).

**Backend Improvements**

 -  Added ability to assign menu to particular store during
    [menu creation](/m2/extensions/navigationpro/backend/menu-new/#general-settings).
    (Previously you had to create menu and than use system configuration to do that)
 -  New column is added to the [menu grid](/m2/extensions/navigationpro/backend/menu-grid/).
    It shows the list of stores where menu is used as top menu replacement.
 -  Added ability to assign menu to particular store directly from
    [menu settings form](/m2/extensions/navigationpro/backend/menu-settings/#general-settings).
    (Previously you had to navigate to configuration to do that)
 -  Renaming/Removing a menu no longer results in missing menu at the storefront

### Version 1.6.0

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v160 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  New menu styles:
    - [Ribbon Menu](/m2/extensions/navigationpro/use-cases/ribbon-menu/)
    - [Apple Menu](/m2/extensions/navigationpro/use-cases/apple-menu/)
    - [Link Bar Mobile Menu](/m2/extensions/navigationpro/use-cases/link-bar/)
 -  New Use Case added: [Iconic Dropdown Menu](/m2/extensions/navigationpro/use-cases/iconic-menu/#dropdown-menu)
 -  Small CSS fixes

### Version 1.5.1

 -  Allow to use absolute links in [menu items](/m2/extensions/navigationpro/backend/menu-edit/#general-settings)

### Version 1.5.0

NavigationPro 1.5.0 brings a new [nowrap feature](/m2/extensions/navigationpro/use-cases/nowrap/)
that allows to render menu in a single row despite of top level items count,
various dropdown positioning fixes and improvements, and ability to redefine
LESS variables inside [third-party themes](/m2/extensions/navigationpro/customization/custom-theme-variables/)
(for developers).

{% include gallery.html images=site.data.gallery.m2.navigationpro.changelog.v150 class="phone-up-2 tablet-up-3 photoswipe scroll" %}

 -  Added ability to [move top-level items](/m2/extensions/navigationpro/use-cases/nowrap/)
    into separate dropdown, if they doesn't fit on a single row
 -  Improved dropdown positioning when it does not have enough space on the screen
 -  Use amazon-like dropdown positioning for the 'departments' dropdown only. All
    other dropdowns (if your menu have them) will use default logic.
 -  Added ability to redefine variables in
    [third-party themes](/m2/extensions/navigationpro/customization/custom-theme-variables/)
 -  Added ability to set padding via
    [less variables](/m2/extensions/navigationpro/customization/less-variables/)
    for items inside dropdowns
 -  Dropdown size fixes on RTL locales

### Version 1.4.1

 -  Magento 2.2.4 product page breadcrumbs compatiblity
 -  Fixed rare bug with unreacheable dropdowns inside vertical multicolumn layout
 -  Added separate handler when clicking caret icon (open/close dropdown)

### Version 1.4.0

 -  [Overlay feature added](/m2/extensions/navigationpro/use-cases/overlay/)
 -  Native browser's `column-count` feature will be used to build columns in
    vertical direction.
 -  Allow to close dropdown when click outside of menu on iPad
 -  Better RTL support. No visible transformations after page is loaded.
 -  Small fixes

### Version 1.3.0

 -  New [simplified form](/m2/extensions/navigationpro/backend/menu-new/) to
    create menu with a few clicks
 -  Removed open menu delay on touch devices
 -  RTL support added (RTL theme is required to use)
 -  Fixed ability to use form inside a dropdown item
 -  Added small delay before opening first dropdown item
 -  Small js and css fixes

### Version 1.2.0.1

 -  Fixed browser freezing on mobile devices when using vertical subcategories
    alignment

### Version 1.2.0

 -  Added ability to set
    [positioning settings](/m2/extensions/navigationpro/ui/dropdown-position/)
    for the first level dropdown:
    - Stick to Left
    - Center
    - Stick to Right

### Version 1.1.0

**Major Changes**

 -  Sidebar menu support [added](/m2/extensions/navigationpro/use-cases/sidebar-menu/)
    with plenty of configurable options
 -  Navigationpro widget [added](/m2/extensions/navigationpro/widget/) with
    [themes](/m2/extensions/navigationpro/themes/) support
 -  Amazon-like sidebar menu [added](/m2/extensions/navigationpro/use-cases/amazon-menu/#sidebar-menu)

[**View Demo**](http://docs.swissuplabs.com/m2/extensions/navigationpro/demo/)

**Fixes and Improvements**

 -  Mobile view will always use single column mode
 -  Fixed too small dropdown width and height on mobile devices
 -  Fixed php error when switching store view in backend interface
 -  Improved dropdown positioning calculations
 -  Fixed css issues with category tips
 -  Javascript code optimizations

### Version 1.0.1

 -  Fixed possible invalid dropdown height for Amazon menu

### Version 1.0.0

 -  Initial Release
