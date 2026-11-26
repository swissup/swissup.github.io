---
layout: default
title: Argento Hyvä Changelog
description: Argento Hyvä Changelog
category: Argento Hyvä
---

# Argento Hyva Changelog

### Version 1.3.10

> November 26, 2026

 - **Security update** — hardened validation, output escaping and admin permissions across bundled extensions. Update is recommended.
 - **Home pages built with Breeze Content Builder** — Chic and Stripes home pages are now installed as editable Content Builder pages
 - **Breeze Theme Editor support** — colors, typography and header settings can be changed in the visual editor
 - **Navigation Pro** is now included, with a NavigationPro top menu in the Stripes theme

**Themes**

- _ArgentoHyva Chic Theme_ — 1.4.0 (was 1.3.10)
    + New home page built with Breeze Content Builder: slider, banners and Easy Catalog Images block
    + Breeze Theme Editor support, primary and secondary shades are derived from the base color
    + New header color presets
    + Guests see a sign-in notice instead of the AskIt answer form, reCAPTCHA is validated in AskIt and review forms
    + Review form template updated to match Hyvä 1.5.3
    + Hyvä demo content is no longer installed on the home page
    + Fixed 404 page and small product images, improved accessibility
- _ArgentoHyva Stripes Theme_ — 1.2.0 (was 1.0.3)
    + Home page installed with Breeze Content Builder
    + Added NavigationPro top menu, brands block and contact map CMS block
    + Restyled product cards and sliders: rating above the price, gapless cards, side arrows, details shown without a mouse
    + Restyled tabs, reviews and questions: sticky toolbar, two-column layout, form beside the list
    + Breeze Theme Editor settings, polished typography and contact pages, closable messages
    + Enabled "Add to Cart" checkboxes in Customers Who Bought This Item Also Bought
    + Responsive images with srcset in product lists and gallery, horizontally scrollable breadcrumbs
    + Improved mobile menu, footer, category page and logos
    + Fixed 404 page and footer links under product sliders, improved accessibility
- _ArgentoHyva Blank Theme_ — 1.2.1 (was 1.2.0)
- _Argento Hyvä core module_ — 1.2.5
    + Fixed missing oversized product image in srcset
    + Smoother reveal animation, improved scroll accessibility

**Hyva Extensions Updates**

- [Hyva Content Builder](/m2/extensions/breeze-content-builder/) — 1.1.0 (new)
- [Hyva Navigation Pro](/m2/extensions/navigationpro/installation/hyva/) — 1.0.0 (new)
- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.4 (was 1.0.3)
    + Fixed keyboard shortcut hint styles
- [Hyva AskIt](/m2/extensions/askit/) — 1.0.1 (was 1.0.0)
    + The first page of questions is rendered with the page, smoother pagination
    + Fixed reCAPTCHA validation and guest answers in AskIt forms
- [Hyva Easy Banners](/m2/extensions/easybanners/) — 1.0.4 (was 1.0.3)
    + Fixed exit intent trigger in Firefox
- [Hyva Highlight](/m2/extensions/highlight/) — 1.1.7 (was 1.1.4)
    + Improved slider accessibility, empty titles are hidden
    + Faster image loading for highlighted products
    + Fixed slider pages in the Content Builder preview
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.6 (was 1.2.4)
    + Optional "Add to Cart" checkboxes in Customers Who Bought This Item Also Bought
    + Item details slide down, improved accessibility

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.28 (was 1.14.27)
    + Security fixes
    + API voting eligibility requirements have changed; integrators should review client behavior after upgrading
- [Breeze Content Builder](/m2/extensions/breeze-content-builder/) — 1.3.1 (new)
- [Breeze Theme Editor](/m2/extensions/breeze-theme-editor/) — 1.0.18 (new)
- [ChatGPT Assistant](/m2/extensions/chat-gpt-assistant/) — 1.1.5 (was 1.1.4)
    + Security fixes
- [Easybanners](/m2/extensions/easybanners/) — 1.9.25 (was 1.9.24)
    + Security fixes
- [Easytabs](/m2/extensions/easytabs/) — 1.14.1 (was 1.13.4)
    + Security fixes
    + Ajax tabs are no longer rendered twice: faster product pages
    + Fixed stale full page cache for new or enabled tabs
    + Fixed ARIA markup in the expanded and accordion layouts
- [GDPR](/m2/extensions/gdpr/) — 1.9.4 (was 1.9.1)
    + Security fixes
    + Improved minimal cookie bar layout
- [Highlight](/m2/extensions/highlight/) — 1.11.10 (was 1.11.9)
    + Security fixes
- [Hreflang](/m2/extensions/hreflang/) — 1.6.13 (was 1.6.12)
    + Security fixes
- [Navigation Pro](/m2/extensions/navigationpro/) — 1.19.5 (new)
- [Prolabels](/m2/extensions/prolabels/) — 1.10.5 (was 1.10.1)
    + Security fixes
    + Configurable product labels are updated with AJAX on listings
    + Fixed child labels ignoring schedule, store and product status
    + Fixed admin preview overwriting stored config values
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.8 (was 1.8.5)
    + Security fixes
    + Merchant return policy supports customer-paid return fees
    + Shipping details use the destination postcode and region
    + Plain text and decoded HTML entities for product attributes in JSON-LD
- [SEO Cross Links](/m2/extensions/seo-cross-links/) — 1.2.1 (was 1.2.0)
    + Security fixes
- [SEO Pager](/m2/extensions/seo-pager/) — 1.4.3 (was 1.4.0)
    + HTTP 301 redirect when the page number is out of range
- [SEO Templates](/m2/extensions/seo-templates/) — 1.8.0 (was 1.7.12)
    + Faster storefront metadata, metadata stays available during regeneration
    + Metadata is regenerated when product categories change
    + Requires PHP 8.1
- [SEO URLs](/m2/extensions/seo-urls/) — 1.5.56 (was 1.5.55)
    + Fixed "Remove nofollow" value display for attributes in admin
- [Sold Together](/m2/extensions/soldtogether/) — 1.11.6 (was 1.11.4)
    + Security fixes
    + Promoted prices for configurable products use the selected option's price
    + Customize button is shown for unsupported product types
    + Fixed import/export of promo values, SKU wildcards and duplicate rows on Adobe Commerce

### Version 1.3.9

> August 28, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.10 (was 1.3.8)
    + Restyled Recently Viewed Products widget
    + Fixed small product images
- _ArgentoHyva Stripes Theme_ — 1.0.3 (was 1.0.1)
    + Improved Sold Together, Ajax Search and Easy Tabs styles
    + Updated theme installer

**Hyva Extensions Updates**

- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.3 (was 1.0.2)
    + Fixed search popup overlapped by other page elements
- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.7 (was 1.1.5)
    + Fixed expanded tabs styles
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.4 (was 1.2.3)
    + Improved styles

**Extensions Updates**

- Swissup Core — 1.13.1 (was 1.13.0)
    + Fixed invisible update instructions when Mollie Payments is installed

### Version 1.3.8

> August 27, 2026

**Extensions Updates**

- Added `swissup/module-core` 1.13.0 dependency

### Version 1.3.7

> August 27, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.8 (was 1.3.6)
    + Improved Ajax Search, Easy Tabs and Sold Together styles
    + Updated layered navigation filter styles
- _ArgentoHyva Stripes Theme_ — 1.0.1 (new)

**Hyva Extensions Updates**

- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.2 (was 1.0.1)
    + Improved search input, fixed button and input position on mobile
- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.5 (was 1.1.4)
    + Minor code improvements
- [Hyva Highlight](/m2/extensions/highlight/) — 1.1.4 (was 1.1.1)
    + Fixed Ajax requests and config validation
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.3 (was 1.2.2)
    + Fixed "Customers Who Bought This Item Also Bought" block
    + Improved mobile layout and messages

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.27 (was 1.14.24)
    + Fixed PHP 8.5 notice on the new product form
    + Added Czech, Slovak, Hungarian and Romanian translations, fixed Dutch translation
- [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.15 (was 1.5.14)
    + Fixed creating a new category on PHP 8.5
- [Prolabels](/m2/extensions/prolabels/) — 1.10.1 (was 1.10.0)
    + Fixed error for grouped products without associated products
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.5 (was 1.8.4)
    + Additional product properties include `propertyID`
    + Improved price formatting in offers
- [SEO Cross Links](/m2/extensions/seo-cross-links/) — 1.2.0 (was 1.1.26)
    + Cross links in CMS blocks
- [Testimonials](/m2/extensions/testimonials/) — 1.4.2 (was 1.4.0)
    + Slider widget: arrows and dots settings, "Show image" option, more visible slides options
    + Fixed output when rating is not set

### Version 1.3.6

> July 21, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.6 (was 1.3.5)
    + Easy Tabs: improved Cross-sell, Upsell and Related tabs, grid view for products

**Hyva Extensions Updates**

- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.2 (was 1.2.1)
    + Updated Amazon style, improved RTL

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.24 (was 1.14.23)
    + Fixed PHP 8.4 error
    + Fixed Breeze Content Builder preview
- [Prolabels](/m2/extensions/prolabels/) — 1.10.0 (was 1.9.2)
    + Added active period for labels
- [SEO Canonical](/m2/extensions/seo-canonical/) — 1.11.10 (was 1.11.9)
    + Falls back to the current store when the product is not assigned to the forced store
- [SEO Templates](/m2/extensions/seo-templates/) — 1.7.12 (was 1.7.11)
    + PHP 8.5 compatibility

### Version 1.3.5

> July 10, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.5 (was 1.3.4)
    + Improved Easy Tabs and general styles

**Extensions Updates**

- [SEO URLs](/m2/extensions/seo-urls/) — 1.5.55 (was 1.5.54)
    + Query parameters are preserved when redirecting to the home page

### Version 1.3.4

> July 8, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.4 (was 1.3.2)
    + Updated for Hyvä 1.5.1
    + RTL support
    + Improved Highlight styles
    + Subcategory description is shown on category pages
    + Fixed header and filters styles

**Hyva Extensions Updates**

- [Hyva Highlight](/m2/extensions/highlight/) — 1.1.1 (was 1.0.4)
    + Added grid slider
    + Fixed slider
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.1 (was 1.2.0)
    + Compatibility with Hyvä 1.5.1
    + Fixed configurable products

**Extensions Updates**

- [Easytabs](/m2/extensions/easytabs/) — 1.13.4 (was 1.13.2)
    + Added Category render attribute
- [GDPR](/m2/extensions/gdpr/) — 1.9.1 (was 1.9.0)
    + PHP 8.5 compatibility

### Version 1.3.2

> June 30, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.2 (was 1.3.1)
    + RTL support for Ajax Search

**Hyva Extensions Updates**

- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.1 (was 1.0.0)
    + Added layout with an initially visible form, RTL support

### Version 1.3.1

> June 29, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.1 (was 1.3.0)
    + Styles for expanded tabs and sticky titles
    + All filters are expanded by default
    + Restyled Recently Viewed Products, animated reveal on load
    + Option to disable the "Show more" button
    + Easy Catalog Images block moved above columns
    + Fixed Ajax Search and product image

**Hyva Extensions Updates**

- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.4 (was 1.1.3)
    + Fixed expanded tabs and sticky titles

**Extensions Updates**

- [Prolabels](/m2/extensions/prolabels/) — 1.9.2 (was 1.9.1)
    + Fixed ParseError with template minification enabled
- [SEO Templates](/m2/extensions/seo-templates/) — 1.7.11 (was 1.7.10)
    + Compatibility with Smile Elasticsuite
    + Faster queries thanks to a new database index

### Version 1.3.0

> June 20, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.0 (was 1.2.0)
    + Expanded tabs layout
    + AskIt styles
    + Refined header panel links
    + Fixed cache error

**Hyva Extensions Updates**

- [Hyva AskIt](/m2/extensions/askit/) — 1.0.0 (new)

**Extensions Updates**

- [Easy Slide](/m2/extensions/easyslider/) — 1.8.18 (was 1.8.17)
    + Fixed JS error on a hidden slider
- [GDPR](/m2/extensions/gdpr/) — 1.9.0 (was 1.8.5)
    + "Blocked Cookies" renamed to "Unregistered Cookies", selected cookies can be registered from the list
    + Number of unregistered cookies is shown in the button label
    + Customer returns to the same page after "Allow selection"
    + Old unregistered cookie records are cleaned up by cron
    + PHP 8.5 compatibility
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.4 (was 1.8.2)
    + Added regex find-and-replace and "strip Page Builder markup" modifiers
    + Fixed saving reordered modifiers
- [SEO XML Sitemap](/m2/extensions/seo-xml-sitemap/) — 1.2.0 (was 1.1.16)
    + Minimum lastmod date for products
    + Dropped Magento 2.1 support

### Version 1.2.2

> August 26, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.7 (was 1.3.0)
    + Updated for Hyvä 1.5.1
    + RTL support
    + Easy Tabs: improved Cross-sell, Upsell and Related tabs, grid view for products
    + Improved Highlight, Ajax Search and Sold Together styles
    + Subcategory description is shown on category pages
    + Fixed header and filters styles, fixed product image

**Hyva Extensions Updates**

- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.1 (was 1.0.0)
    + Added layout with an initially visible form, RTL support
- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.5 (was 1.1.3)
    + Fixed expanded tabs and sticky titles
- [Hyva Highlight](/m2/extensions/highlight/) — 1.1.4 (was 1.0.4)
    + Added grid slider
    + Fixed slider, Ajax requests and config validation
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.3 (was 1.2.0)
    + Compatibility with Hyvä 1.5.1
    + Updated Amazon style, improved RTL and mobile layout
    + Fixed configurable products and "Customers Who Bought This Item Also Bought" block

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.27 (was 1.14.23)
    + Fixed PHP 8.4 and PHP 8.5 errors
    + Fixed Breeze Content Builder preview
    + Added Czech, Slovak, Hungarian and Romanian translations, fixed Dutch translation
- [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.15 (was 1.5.14)
    + Fixed creating a new category on PHP 8.5
- [Easytabs](/m2/extensions/easytabs/) — 1.13.4 (was 1.13.2)
    + Added Category render attribute
- [GDPR](/m2/extensions/gdpr/) — 1.9.1 (was 1.9.0)
    + PHP 8.5 compatibility
- [Prolabels](/m2/extensions/prolabels/) — 1.10.1 (was 1.9.2)
    + Added active period for labels
    + Fixed error for grouped products without associated products
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.5 (was 1.8.4)
    + Additional product properties include `propertyID`
    + Improved price formatting in offers
- [SEO Canonical](/m2/extensions/seo-canonical/) — 1.11.10 (was 1.11.9)
    + Falls back to the current store when the product is not assigned to the forced store
- [SEO Cross Links](/m2/extensions/seo-cross-links/) — 1.2.0 (was 1.1.26)
    + Cross links in CMS blocks
- [SEO Templates](/m2/extensions/seo-templates/) — 1.7.12 (was 1.7.11)
    + PHP 8.5 compatibility
- [SEO URLs](/m2/extensions/seo-urls/) — 1.5.55 (was 1.5.54)
    + Query parameters are preserved when redirecting to the home page
- [Testimonials](/m2/extensions/testimonials/) — 1.4.2 (was 1.4.0)
    + Slider widget: arrows and dots settings, "Show image" option, more visible slides options
    + Fixed output when rating is not set

### Version 1.2.1

> June 29, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.3.0 (was 1.2.0)
    + Expanded tabs layout
    + AskIt styles
    + Refined header panel links
    + Fixed cache error

**Hyva Extensions Updates**

- [Hyva AskIt](/m2/extensions/askit/) — 1.0.0 (new)

**Extensions Updates**

- [Easy Slide](/m2/extensions/easyslider/) — 1.8.18 (was 1.8.17)
    + Fixed JS error on a hidden slider
- [GDPR](/m2/extensions/gdpr/) — 1.9.0 (was 1.8.5)
    + "Blocked Cookies" renamed to "Unregistered Cookies", selected cookies can be registered from the list
    + Number of unregistered cookies is shown in the button label
    + Customer returns to the same page after "Allow selection"
    + Old unregistered cookie records are cleaned up by cron
    + PHP 8.5 compatibility
- [Prolabels](/m2/extensions/prolabels/) — 1.9.2 (was 1.9.1)
    + Fixed ParseError with template minification enabled
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.4 (was 1.8.2)
    + Added regex find-and-replace and "strip Page Builder markup" modifiers
    + Fixed saving reordered modifiers
- [SEO Templates](/m2/extensions/seo-templates/) — 1.7.11 (was 1.7.10)
    + Compatibility with Smile Elasticsuite
    + Faster queries thanks to a new database index
- [SEO XML Sitemap](/m2/extensions/seo-xml-sitemap/) — 1.2.0 (was 1.1.16)
    + Minimum lastmod date for products
    + Dropped Magento 2.1 support

### Version 1.2.0

> June 7, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.2.0 (was 1.1.3)
    + Ajax Search integration and theme settings for it
    + New theme variables for page header, footer, product details and action buttons
    + Responsive images in the product gallery, updated image dimensions and icon sizes
    + Improved filters in the 1 column layout
    + Fixed search form
- _ArgentoHyva Blank Theme_ — 1.2.0 (was 1.1.3)
    + Preloaded product image uses responsive srcset and sizes

**Hyva Extensions Updates**

- [Hyva Ajax Search](/m2/extensions/ajaxsearch/) — 1.0.0 (new)
- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.3 (was 1.1.2)
    + Fixed accessibility of accordion tabs

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.23 (was 1.14.21)
    + Magento 2.4.9 support
    + Added reCAPTCHA protection for the "Ask question" form
- [Easy Slide](/m2/extensions/easyslider/) — 1.8.17 (was 1.8.16)
    + Magento 2.4.9 and PHP 8.5 compatibility
- [Easybanners](/m2/extensions/easybanners/) — 1.9.24 (was 1.9.23)
    + PHP 8.5 compatibility
- [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.14 (was 1.5.13)
    + Block title and CSS class can be set with layout XML
- [Hreflang](/m2/extensions/hreflang/) — 1.6.12 (was 1.6.11)
    + Magento 2.4.9 and PHP 8.5 compatibility
- [Prolabels](/m2/extensions/prolabels/) — 1.9.1 (was 1.8.1)
    + Label images can be uploaded or picked from the media gallery
    + Improved label preview in admin
    + Magento 2.4.9 and PHP 8.5 compatibility
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.8.2 (was 1.7.18)
    + Additional product properties in structured data, with a visual modifier builder
    + Breeze: fixed breadcrumbs when JS merging is enabled
    + PHP 8.5 compatibility
- [SEO HTML Sitemap](/m2/extensions/seo-html-sitemap/) — 1.1.23 (was 1.1.21)
    + Custom sitemap URL per store, canonical tag
    + Added "Hide Attribute Pages" option
- [SEO Pager](/m2/extensions/seo-pager/) — 1.4.0 (was 1.3.5)
    + Allowlist filter sets for the pagination strategy
- [Sold Together](/m2/extensions/soldtogether/) — 1.11.4 (was 1.11.3)
    + Fixed the Customer block on the shopping cart page
    + Magento 2.4.9 and PHP 8.5 compatibility
- [Sold Together Import/Export](/m2/extensions/soldtogether/) — 1.0.2 (was 1.0.1)
    + Magento 2.4.9 compatibility

### Version 1.1.3

> April 10, 2026

**Themes**

- _ArgentoHyva Blank Theme_ — 1.1.3 (was 1.1.0)
- _ArgentoHyva Chic Theme_ — 1.1.3 (was 1.1.1)

### Version 1.1.2

> April 10, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.1.1 (was 1.1.0)
    + Regenerated theme styles

### Version 1.1.1

> April 10, 2026

**Themes**

- _ArgentoHyva Chic Theme_ — 1.1.0 (was 1.0.2)
    + Mobile: improved menu, search and home page product grid, USPs shown as a slider
    + Scroll reveal animations for home page blocks
    + Logged-in customers see a filled account icon with their name
    + Old and final prices are shown in one line on product listings
    + Fixed "Show more/Show less" jumping to the top of the page
    + Fixed filters layout and mobile styles
    + Added missing Pro Labels settings to the theme installer
- _ArgentoHyva Blank Theme_ — 1.1.0 (was 1.0.2)
    + Templates for product custom options: date, file, select and text

### Version 1.1.0

> April 9, 2026

**Hyva Extensions Updates**

- [Hyva Easy Banners](/m2/extensions/easybanners/) — 1.0.3 (was 1.0.2)
    + Fixed forced reflow
- [Hyva Highlight](/m2/extensions/highlight/) — 1.0.4 (was 1.0.1)
    + New slider view

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.21 (was 1.14.20)
    + Breeze 3.0 compatibility
- [GDPR](/m2/extensions/gdpr/) — 1.8.5 (was 1.8.4)
    + Added Bing consent mode
    + Compatibility with Breeze 2.0 and 3.0
- [Prolabels](/m2/extensions/prolabels/) — 1.8.1 (was 1.7.30)
    + New label text variables for prices and discount without tax
    + Fixed label text escaping in label presets
- [Testimonials](/m2/extensions/testimonials/) — 1.4.0 (was 1.3.17)
    + Customizable frontend route
    + Fixed captcha, saving store relation and trailing slash in the canonical tag

### Version 1.0.2

> March 11, 2026

**Themes**

- _ArgentoHyva Blank Theme_ — 1.0.2 (was 0.3.0)
    + Main product image is preloaded with high fetch priority
    + Fixed product slider paddings
- _ArgentoHyva Chic Theme_ — 1.0.2 (was 1.0.0)
    + Review stars on product listings match the rest of the theme

### Version 1.0.1

> March 11, 2026

 - Maintenance release, no changes in bundled themes and extensions

### Version 1.0.0

> March 11, 2026

 - Initial stable release of Argento Hyvä with Blank and Chic themes and bundled Swissup extensions
 - Compatible with Hyvä 1.4.4+

**Themes**

- _ArgentoHyva Blank Theme_ — 0.3.0
- _ArgentoHyva Chic Theme_ — 1.0.0

**Hyva Extensions Updates**

- [Hyva Easy Slide](/m2/extensions/easyslider/) — 1.0.2
- [Hyva Easy Banners](/m2/extensions/easybanners/) — 1.0.2
- [Hyva Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.0.0
- [Hyva Easy Tabs](/m2/extensions/easytabs/) — 1.1.2
- [Hyva Highlight](/m2/extensions/highlight/) — 1.0.1
- [Hyva Pro Labels](/m2/extensions/prolabels/) — 1.1.0
- [Hyva Pro Labels Configurable Product](/m2/extensions/prolabels/) — 1.1.0
- [Hyva SEO Cross Links](/m2/extensions/seo-cross-links/) — 1.1.0
- [Hyva SEO HTML Sitemap](/m2/extensions/seo-html-sitemap/) — 1.1.0
- [Hyva Sold Together](/m2/extensions/soldtogether/) — 1.2.0
- [Hyva Testimonials](/m2/extensions/testimonials/) — 1.0.2
- [GDPR Hyva](/m2/extensions/gdpr/) — 1.0.0

**Extensions Updates**

- [AskIt](/m2/extensions/askit/) — 1.14.20
- [ChatGPT Assistant](/m2/extensions/chat-gpt-assistant/) — 1.1.4
- [Easy Slide](/m2/extensions/easyslider/) — 1.8.16
- [Easybanners](/m2/extensions/easybanners/) — 1.9.23
- [Easy Catalog Images](/m2/extensions/easycatalogimages/) — 1.5.13
- [Easytabs](/m2/extensions/easytabs/) — 1.13.2
- [GDPR](/m2/extensions/gdpr/) — 1.8.4
- [GDPR AskIt](/m2/extensions/gdpr/) — 1.1.3
- [GDPR Review Reminder](/m2/extensions/gdpr/) — 1.0.0
- [GDPR Testimonials](/m2/extensions/gdpr/) — 1.1.1
- [Highlight](/m2/extensions/highlight/) — 1.11.9
- [Hreflang](/m2/extensions/hreflang/) — 1.6.11
- [Hreflang Import/Export](/m2/extensions/hreflang/) — 1.0.1
- [Prolabels](/m2/extensions/prolabels/) — 1.7.30
- [Prolabels Configurable Product](/m2/extensions/prolabels/) — 1.0.9
- [Review Reminder](/m2/extensions/reviewreminder/) — 1.1.19
- [Rich Snippets](/m2/extensions/richsnippets/) — 1.7.18
- [SEO Canonical](/m2/extensions/seo-canonical/) — 1.11.9
- SEO Core — 1.3.10
- [SEO Cross Links](/m2/extensions/seo-cross-links/) — 1.1.26
- [SEO HTML Sitemap](/m2/extensions/seo-html-sitemap/) — 1.1.21
- [SEO Images](/m2/extensions/seo-images/) — 1.3.21
- [SEO Pager](/m2/extensions/seo-pager/) — 1.3.5
- [SEO Templates](/m2/extensions/seo-templates/) — 1.7.10
- [SEO URLs](/m2/extensions/seo-urls/) — 1.5.54
- [SEO XML Sitemap](/m2/extensions/seo-xml-sitemap/) — 1.1.16
- [Sold Together](/m2/extensions/soldtogether/) — 1.11.3
- [Sold Together Email](/m2/extensions/soldtogether/) — 1.0.0
- [Sold Together Import/Export](/m2/extensions/soldtogether/) — 1.0.1
- [Testimonials](/m2/extensions/testimonials/) — 1.3.17
