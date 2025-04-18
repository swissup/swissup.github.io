---
layout: default
title: Argento Breeze changelog
description: Argento Breeze changelog
category: ArgentoBreeze
---

# Argento Breeze Changelog

### Version 2.7.0

> April 18, 2025

  - [Business theme](business) added.
  - Magento 2.4.8 and PHP 8.4 compatibility added.

**Extensions Updates**

  - [Ajax Pro](/m2/extensions/ajaxpro/)
      + Improve suggestpage styles.
  - [Ajax Search](/m2/extensions/ajaxsearch/)
      + Improve dropdown size on mobile devices.
      + Ability to hide price and sku labels.
      + Small CSS fixes.
  - [AskIt](/m2/extensions/askit/)
      + Breeze: Show loader when adding question. Prevent multiple submits.
      + Breeze: Fixed not working recaptcha validation.
  - [EasyCatalogImages](/m2/extensions/easycatalogimages/)
      + Do not throw exception when `cat_id` passed to widget does not exist.
  - [EasyTabs](/m2/extensions/easytabs/)
      + Ability to move existing block into the tab using its layout name.
      + Breeze: Fixed CSS issue with overlapped title when scroll-reveal is enabled.
      + Breeze: Allow using accordion inside tabs.
  - [Highlight](/m2/extensions/highlight/)
      + Improve cache key generation to correctly update highlight block cache.
  - [NavigationPro](/m2/extensions/navigationpro/)
      + Fixed not working navpro when `jquery-ui/menu` is added by a third-party module.
      + Fixed js error in Magento <= 2.4.3.
      + Improve performance when adding close icons or "View All" link.
      + Allow using `tel:` and `mailto:` in image URLs.
      + Breeze: fixed not working closeable and slideout menus.
  - [Pagespeed](/m2/extensions/pagespeed/)
      + Fixed broken `robots.txt` when minification is enabled.
      + Improve `preload` logic to include proper LCP image.
  - [ProLabels](/m2/extensions/prolabels/)
      + Improve labels rendering performance.
      + Improve DB query selector to significantly speedup query on large catalogs. Tested on catalog with 200K products.
  - [QtySwitcher](/m2/extensions/qty-switcher/)
      + Fixed possible missing styles in ajaxpro popup.
  - [SeoSuite](/m2/extensions/seo-suite/)
      + Use proper value for `returnShippingFeesAmount` when free shipping is available.
  - [SoldTogether](/m2/extensions/soldtogether/)
      + Breeze: fixed not working validation when swatches are lazy.
      + Breeze: Fixed uninitialized swatches in the swiper block.

### Version 2.5.2

> February 26, 2025

 -  Significant performance improvements in Breeze module and all bundled modules.

**[EasySlider](/m2/extensions/easyslider/)**

 -  Fixed not clickable slide when `height: 100%` is used on the description.

**[EasyCatalogImages](/m2/extensions/easycatalogimages/)**

 -  Added canonical to Departments Page.

**[EasyTabs](/m2/extensions/easytabs/)**

 -  Fixed layout shift when all tabs are inactive by default.

**[GDPR](/m2/extensions/gdpr/)**

 -  Fixed js error when enabling focus-trap on slow internet connections.

### Version 2.5.0

> November 20, 2024

 -  Improve color contrast in all themes to pass WGAC tests.
 -  Improve site navigation using keyboard only.
 -  Fixed layout shifts caused by client-side color swatches.
 -  ArgentoChic: Fixed unscrollable page when category name = "view".
 -  Updated all bundled modules with various accessibility fixes such as:
    - Color contrast fixes.
    - Navigation using keyboard improvements.
    - Increased small elements size.

**[Navigationpro](/m2/extensions/navigationpro/)**

 -  Remove mage/menu dependency. Reduce JS codebase by 10KB (gzipped).

**[SoldTogether](/m2/extensions/soldtogether/)**

 -  Fixed line wrap on laptop whne using Amazon-like layout.
 -  Remove deferred CSS styles to reduce layout shift score.

### Version 2.4.0

> May 9, 2024

 -  Scroll reveal animations added all themes. See [upgrade guide](/m2/argento-breeze/upgrade-instructions/)
    on how to add scroll reveal to existing CMS pages.
 -  Zoom on hover animation added to product listing in Force and Chic themes.
 -  Fixed menu styles in Force and Stripes themes.
 -  Fixed too large MSRP message in Force theme.
 -  Fixed js errors when using unpack feature from [Pagespeed] module.

**[GDPR](/m2/extensions/gdpr/)**

 -  Added ability to change and create region-specific [default Google consent values](/m2/extensions/gdpr/configuration/#cookie-consent-section).
 -  Added "Deny" and "Allow Selection" buttons to [minimal cookie bar mode](/m2/extensions/gdpr/configuration/#cookie-bar-display-modes).

### Version 2.3.1

> Apr 23, 2024

 -  Magento 2.4.7 compatibility.

**[AttributePages](/m2/extensions/attributepages/)**

 -  Added redirect from pages with trailing slash to the pages without trailing slash.

**[ChatGPT](/m2/extensions/chat-gpt-assistant/)**

 -  Added mass product content generation.
 -  Added content generation for category description and meta tags.
 -  Added product meta title and keywords generation.

**[EasySlide](/m2/extensions/easyslider/)**

 -  Fixed inability to remove slide description.

**[GDPR](/m2/extensions/gdpr/)**

 -  Improve styles for cookie togglers.
 -  Fixed missing toggler focus style.

**[Highlight](/m2/extensions/highlight/)**

 -  Fixed not working page_count parameter when ajax carousel is used.

**[SeoSuite](/m2/extensions/seo-suite/)**

 -  Magenfan Blog integration updated.

### Version 2.3.0

> Mar 7, 2024

 -  ArgentoChic: Fixed [Askit](/m2/extensions/askit/) styles when gravatar is enabled.
 -  ArgentoChic: Fixed incorrectly rotated "close" buttons in askit questions.
 -  Compatibility with latest [Breeze Frontend](https://breezefront.com/updates).
 -  JS fixes in all bundled modules.

**[EasyBanner](/m2/extensions/easybanners/)**

 -  Fixed possible incorrect edit URL in backend.
 -  Updated integration with latest GDPR module.

**[GDPR](/m2/extensions/gdpr/)**

 -  Added inegration with Google Consent Mode.
 -  Preferences cookie group added. Advertisement group is replaced by marketing.

**[Highlight](/m2/extensions/highlight/)**

 -  Fixed possible js error "blockData" on undefined.
 -  Fixed carousel styles.

**[SeoSuite](/m2/extensions/seo-suite/)**

 -  Prevent possible exception from Magento_Review module on product listing page
    when [AjaxLayeredNavigation](/m2/extensions/ajaxlayerednavigation) module is used.
 -  Smile Integration update. Fix PHP error "Illegal offset type in isset or empty"

### Version 2.2.0

> Nov 28, 2023

 -  **[ArgentoChic](/m2/argento-breeze/chic/) theme added**.
 -  Performance improvements in slider, colorswatches, and auth popup components.
 -  Performance improvements in Easycatalogimg, Highlight, Easyslide, and Testimonials modules.
 -  BreezeTheme and BreezeModule updated to the [latest versions](https://breezefront.com).
 -  Fixed not working dropdown position in [NavigationPro](/m2/extensions/navigationpro/) module.
 -  Fixed not working lightbox/awesomebar popups in [EasyBanner](/m2/extensions/easybanner/) module.
 -  Minor fixes and improvements in all bundled themes and modules.

### Version 2.1.0

> Jul 27, 2023

 -  Magento 2.4.6 and PHP 8.2 compatibilty in all modules.
 -  [**ChatGPT Assistant**](/m2/extensions/chat-gpt-assistant/) **module added**
 -  Tabs are no longer transformed into accordion on mobile devices by default
    to meet accesibility requirements.
 -  Accessibility fixes in [EasyTabs](/m2/extensions/easytabs/) and
    [NavigationPro](/m2/extensions/navigationpro/) modules.
 -  Performance improvements in [SeoSuite](/m2/extensions/seo-suite/) and
    [SoldTogether](/m2/extensions/soldtogether/) modules.
 -  Added ability to set active_from and active_to properties for each of
    [EasySlider](/m2/extensions/easyslider/) slides.
 -  Pagebuilder added to backend description and short description fields of
    [AttributePages](/m2/extensions/attributepages/) module.
 -  Added ability to sort [NavigationPro](/m2/extensions/navigationpro/) menu
    items in alphabetical order.
 -  Minor fixes and improvements in all bundled modules.

### Version 2.0.0

> Nov 19, 2022

**Run `composer require -w swissup/argento-breeze:^2.0` to update from old version.**

 -  Breeze Module and Breeze Blank theme updated to 2.0. See the 
    [list of breaking changes](https://breezefront.com/upgrade#breaking-changes)
 -  [Force Theme](/m2/argento-breeze/force/) added.
 -  Added missing logo in email templates.
 -  Improve product listing on mobile devices.

### Version 1.0.1

> Jul 19, 2022

 -  Removed Swiper dependency (30kB) from Swissup_Highlight module when using
    Breeze-based theme. Built-in Breeze slider will be used now.
 -  Fixed not working gallery in AjaxPro quick view popup.
 -  Fixed css issue with quick view button when critical css is enabled.

### Version 1.0.0

> Jun 17, 2022

 -  Initial release of Breeze-based Argento Stripes theme.
