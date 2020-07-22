---
layout: default
title: Changelog
description: Recent updates in SEO Suite package
keywords: seo suite updates, seo suite changelog
category: SEO Suite
---

# Changelog

### Version 1.9.3

> Jul 22, 2020

Main theme of this release is speed up category page rendering as well as other pages with product listing. Reduce number of DB queries and TTFB.

*swissup/module-hreflang — 1.4.2 (was 1.4.0)*

  - Reduce number of DB queries. Collect all nessecery data with one DB querie. Previously number of queries was equal to number of storeviews.
  - Do not include storeview into hreflangs when it is disabled in Admin.
  
*swissup/module-rich-snippets — 1.4.10 (was 1.4.9)*

  - Implement product availability pre-order. Product availability can be preorder only when "Backorders" option value is "Allow Qty Below 0 and Notify Customer".

*swissup/module-seo-html-sitemap — 1.1.6 (was 1.1.5)*

  - Improve compatibility with third-party extensions.
  
*swissup/module-seo-images — 1.3.5 (was 1.3.2)*

  - Speed up images index via bin/magento command.
  - Reduce number of DB queries and speed up category page rendering as well as other pages with product listings.
  - Fixed warning for chines locales when `cocur/slugify` package installed (Empty needle in ...module-seo-urls/Helper/Filter.php on line 143).
  
*swissup/module-seo-pager — 1.2.5 (was 1.2.4)*

  - Change the way how page title is updated. To prevent early collection load and fix 'Illegal state' error when Swissup_Pagespeed is enabled with option critical CSS.
  
*swissup/module-seo-templates — 1.5.12 (was 1.5.8)*

  - Fixed 'categories' directive for products and 'parents' directive for categories. There was an issue at multilingual stores - category names were in incorrect language.
  - Improve performance. Update category and product metadata only at pages where it is really necessary. Reduce number of DB queries at category page and other pages with product listings (e.g. search results page).
  
*swissup/module-seo-urls — 1.5.16 (was 1.5.11)*

  - Fixed params resolving logic when yes/no filter and 'No' selected.
  - Less DB queries. Faster layered navigation. Lower TTFB.
  

### Version 1.9.1

> May 7, 2020

  - All modules from SEO Suite got localization (translations).

*swissup/module-hreflang — 1.4.0* (was 1.3.7)

  - Fixed empty hreflang value for chines locales when "Remove region...".
  - Build hreflang links using all websites of Magento instance.
  
*swissup/module-rich-snippets — 1.4.8* (was 1.4.9)

  - Compatibility with Firebear_ConfigurableProducts module.
  
*swissup/module-seo-urls — 1.5.11* (was 1.5.10)

  - Add `nofollow` to category filter in layered navigation.


### Version 1.9.0

> Mar 10, 2020

*swissup/module-seo-images — 1.3.0* (was 1.1.3)

 -  Add SEO Images Magento Index to speed up initial page rendering. This index speed up page generation before it is cached by Magento.
 - "Production Mode" feature (beta). Suites best for single store Magento instances. 

*swissup/module-hreflang — 1.3.7* (was 1.3.6)

 -  Fixed "Illegal offset type..." warning during placing order. Occurs when 'Locale as subfolder in URLs'. 46b805

*swissup/module-seo-templates — 1.5.7* (was 1.5.4)

 -  Plugin instead of event on frontend. Works better when it comes to integrating with third-party modules. E.g. "Firebear Improved Configurable Product".
 -  Improve price directive for products. You can set number of decimals, decimal point symbol and thousands separator symbol.

*swissup/module-seo-urls — 1.5.10* (was 1.5.9)

 -  Fixed incorrect catgeory urls in hreflangs. Occurs when category has different urls on different store views.

### Version 1.8.4

> Mar 10, 2020

 -  Improve "slugs" for in SEO Urls and SEO Images - remove double quotes, replace non-breakable space with dash (-).
Than nbsp will be replaced with dash (-).

*swissup/module-hreflang — 1.3.6* (was 1.3.4)

 -  Fixed poorly worked urls at Magento 2.3.4.
 -  Force remove store_code parameter from url.
 
*swissup/module-seo-images — 1.1.3* (was 1.1.2)

 -  Fixed compatibility with Magento 2 EE (Enterprise Edition).

### Version 1.8.3

> Jan 8, 2020

 -  Improve modules stability on Magneto Cloud. Fix error "Can't create directory ...Hreflang/Model/CurrentUrl/...".
 -  Based translations added.

*swissup/module-seo-canonical — 1.0.6* (was 1.0.4)

 -  Don't add canonical to root category. In most cases root category used by third-party extensions to show some products. Like brand pages or other landing pages.

*swissup/module-seo-urls — 1.5.8* (was 1.5.7)

 -  Show 404 page when unrecognized characters are in url. This helps to avoid SEO issues about duplicate content. Previously you could add anything at the end of the URL, and it will always resolve.

### Version 1.8.2

> Dec 13, 2019

 -  Improved and tested with Magento Enterprise Cloud Edition.

### Version 1.8.1

> Dec 9, 2019

*swissup/module-hreflang — 1.3.3* (was 1.3.2)

 -  Improve module stability.
 
*swissup/module-seo-templates — 1.5.3* (was 1.5.0)

 -  Fixed "Area code is not set on 2.2.x" in bin/magento.
 -  Improve categories directive for product templates. Do not output parent category when product assigned to child category and parent category.

### Version 1.8.0

> Nov 7, 2019

*Metadata templates (1.5.0)*:

 -  With this version you can generate alternate text for product images.
 -  CLI command to generate metadata - `bin/magento swissup:seotemplates:generate`.
 -  Significant improvements for metadata generation via Cron. No more problems with Magento Cache when job is running.
 -  Overall code refactoring to meet Magento Guides.

*Rich Snippets (1.4.3)*:

 -  Change how configurable product is presented in data snippet. Now it is a product with multiple offers.
 -  User can specify properties in `offers` and `aggregatedRating` parts of data snippet. It is possible with _"Structured data"_ option in config. Syntax example for _"Property Name"_ column - `offers/mpn`.

### Version 1.7.1

> Oct 4, 2019

Minor update of readme-files in all submodules.

*SEO Images (1.1.0):*

 - Fixed compatibility with Magento 2.3.0 and lower.
 - Don't expose additional image parameters in image URL. Its mostly useful when store uses watermarks for images.

### Version 1.7.0

> Sep 27, 2019

New submodule included into Suite - [**SEO Images**](/m2/extensions/seo-images/). Module maintains names of product images.

*Regional URLs (hreflang) (1.3.1):*

 -  Integrated with Swissup AMP.
 -  Compatibility with Magento 2.3.x.

*Rich Snippets (1.4.3)*:

 -  Show correct price in snippet when including tax enabled.

*HTML Sitemap (1.1.2)*:

 -  Don't show disabled CMS pages on sitemap.

*SEO URLs (1.5.5)*:

 -  Fixed DI compilation when hreflang is not installed.
 -  Performance improvements.

### Version 1.6.0

> May 30, 2019

*Regional URLs (hreflang) (1.2.3):*

 -  Improved integration with pages for third-party modules - Swissup AskIt, Swissup Highlight and Swissup EasyCatalogImg (departments page).
 
*SEO Pagination (1.2.0):*
 -  New feature - add page number to title of page where paginated content presented.
 -  Improved integration with Catalog Search pages.
 
*SEO URLs (1.5.2)*:
 -  Fixed compatibility with latest Swissup Ajaxsearch module. "Nothing found" message appeared for any instant search request.

### Version 1.5.0

> May 3, 2019

*Metadata templates (1.4.0)*:

 -  New option for 'attribute' directive - `max_length` (set max allowed length for output). It can be usefull for attributes with long content.
 -  HTML tags removed from output of 'attribute' directive when respective attribute has marked as "html allowed".
 -  New config section "Optimize metadata" where you can set optimal length for metadata.

*Rich Snippets (1.4.2)*:

 -  Slightly improved product description for structured data.

### Version 1.4.1

> Apr 18, 2019

*Rich Snippets (1.4.1)*:

 -  Fixed structured data error for grouped and bundle products - offerCount can't be empty.

*HTML Sitemap (1.1.2)*:

 -  Compatibility with PHP 7.2.

### Version 1.4.0

> Mar 26, 2019

Localization files addes to all of the modules.

*Rich Snippets (1.4.0)*:

 -  Solve latest Google warnings (missing priceValidUntil, global identifier, review etc).
 -  New config option to map product structured data with product attributes.
 -  Fix error: "Call to undefined function Swissup\RichSnippets\Model\Config\Source\_()..." at some Magento inst.

*Canonical URLs (1.0.2)*:

 -  Fix incorrect canonical URL for homepage.
 -  Improve stability.

*SEO CrossLinks (1.0.1)*:

 -  Fixed delete button on the editlinks page.


*Metadata templates (1.3.0)*:

 -  New directives &#039;parents&#039; for category and &#039;categories&#039; for product. Check [documentation article](http://docs.swissuplabs.com/m2/extensions/seo-templates/use-cases/amazon-like-metadata/) to get Amazon-like metadata.
 -  Fixed not working Cron generation when Magento Cache is enabled.
 -  Fixed missing genereted meta keywords at product page.

*XML Sitemap (1.1.3)*

 -  Compatibility with Magento 2.3.


### Version 1.3.0

> Dec 21st, 2018

Two new highly demanded modules included into kit - [***Cross Links***](/m2/extensions/seo-cross-links/) and [***Canonical URL***](/m2/extensions/seo-canonical/). Also there are some minor tweakses and improvements for included modules. Major changes listed find below.

*Rich Snippets*:

 -  Integrated with [Swissup AMP](/m2/extensions/amp/) module.

*Metadata templates*:

 -  Price directive can return product price with tax. You have to add attribute (tax="include") to it.

*SEO URLs*:

 -  New feature - added rel="nofollow" to filtyers in layered navigation.
 -  Fixed JavaScript error in Swatched renderer caused by module's mixin.
 -  Fixed fatal error when toggle canonical url oprion in Magento admin system config.
 -  Improved autogenerated labels and values of filters in URL. Remove single quote mark (cause problems for ajax requests).

*XML Sitemap*:

 -  Forced to use same images (same dimensions of images) as used on storefront. Previously Sitemap generated images that didn't exist at storefront.


### Version 1.2.0

> Nov 8th, 2018

Layered Navigation URLs have a new awesome feature now. And slight fix/improvement for HTML Sitemap.

*SEO URLs*:
 +  New feature to change in-URL labels and values in filters.
 +  New option to add `rel="nofollow"` into links in Layered Navigation.

*HTML Sitemap*:
 +  Add option in config that allows to have all CMS pages in sitemap.

### Version 1.1.2

> Oct 23rd, 2018

One new feature in RichSnippets and one compatibility fix with Magento 2.1.x in SeoUrls.

*Rich Snippets*:

 -  Now you can add brand info to product structured data.

*SEO URLs*:

 -  Fix 'Invalid return type' on Magento 2.1.x when redirect to homepage enabled.

### Version 1.1.1

> Oct 9th, 2018

Few fixes and one little stability improvement.

*Metadata templates*:

 -  Improve metadata generation process and prevent it from freezing when something when wrong. Now you can go to Magento 'system.log' file and check for critical records.
 -  Fix 404 response for actions in admin grid.
 -  Few typos corrected.

*SEO URLs*:

 -  Select swatches on listing when swatches filter applied.
 -  Fix not working redirect to homepage when customer reaches respective CMS page via its URL.

### Version 1.1.0

> Sep 27th, 2018

Internal module naming convention was updated. We applied this changes to reach full compatibility with Magento Marketplace policy.

### Version 1.0.2

> Sep 21st, 2018

Compatibility with M2.2.6 and one typo correction in Magento Stores Configuration.

### Version 1.0.1

> Sep 6th, 2018

Minor improvements and Magento 2.1.x compatibility fixes.

*Metadata templates*:

 -  Compatibility M2.1.x - fix "Element 'htmlContent': This element is not expected."

*SEO URLs*:

 -  Improve compatibility with other languages than English. There were problems with characters like "ñ","Ñ","á","é","í", etc. Now everything works fine.

### Version 1.0.0

> Aug 1st, 2018

Include module [***SEO XML Sitemap***](/m2/extensions/seo-xml-sitemap/) into kit. New XML Sitemap module provides improved experience and advanced options for Magento Sitemap generation. It sorts sitemap links according their priority, adds images to category links and supports regional and language URLs (hreflang).

 -  Change SEO Suite section sort order in Magento Admin menu.

*HTML Sitemap*

 -  Rename backend menu item ‘HTML Sitemap Links’ => ‘Sitemap Links’.
 -  Fix PHP fatal error in custom links grid when Magento Admin session expired.

*Metadata templates*:

 -  Fix error during `setup:di:compile`.

*Regional URLs (hreflang)*:

 -  New option to add hreflang links into XML Sitemap.
 -  New option to exclude store view from hreflinks.
 -  Improved store URL resolving (sometimes incorrect theme was applied).
 -  Fixed compatibility with Magento 2.1.x.

*Rich Snippets*:

 -  Fallback to full description of product in snippet when short description is empty.

*SEO Pagination*:

 -  Remove canonical URL correctly (previous version removes all links equal to canonical in document head).

*SEO URLs*:

 -  Improved integration with "Regional URLs".

### Version 0.11.0

New module [***Region and Language URLs (hreflang)***](../../hreflang/) included into kit. Tell Google that you have multilingual and/or multi-regional store. Please, do not forget to run `php bin/magento module:enable Swissup_Hreflang` to enable new module.

*Rich Snippets*:

 -  Fix missing breadcrumbs data at product pages in Magento 2.2.4+ instances.
 -  Fix possible notice at product page with grouped product (undefined variable: groupedProductsPricesArray).

*SEO URLs*:

 -  Rename config section 'Urls' => 'SEO URLs'.
 -  Integration with new module "Regional Urls (hreflang)".

### Version 0.10.1

Compatibility with Magento 2.1.x for [Metadata Templates](../../seo-templates/).

### Version 0.10.0

Include new module [*Metadata Templates*](../../seo-templates/). Generate metadata for products and categories based on their attributes.

*SEO URLs*:

 -  Fix redirects on category pages when URL ends with '.../?p=2'.
 -  Fix issues with category parameter in [Swissup Ajax Search](../../ajasearch/).

### Version 0.9.1

*Richsnippets*:

 -  Do not add rating to snippet when product reviews do not have ratings.

*SEO URLs*:

 -  Improve compatibility with not English speaking stores.

### Version 0.9.0

Includes new module [*SEO Pagination*](../../seo-pager/):

 -  SEO pagination for category pages, Swissup Highlight pages and Swissup Attribute pages.
 -  Prevent duplicate links to first page of paginated content.
 -  'View-all' link in pagination toolbar.
 -  Option to use rel="next" and rel="prev" instead of rel="canonical" at pages with pagination.

*Rich Snippets*:

 -  Fixed duplicated product structured data on product page. Now preview feature of Google testing tool works as it should.
 -  Minify JSON-LD structured data.
 -  No empty nodes in JSON-LD structured data.
 -  Overall source code improvements.

*SEO URLs*:

 -  Fix URL parsing when URL rewrite ends with '/'.
 -  Disable SEO URLs when direct controller URL used instead of URL rewrite.
 -  Improved integration with Swissup ALN module (stock filter, rating filter, new filter).
 -  Improved query string parsing when multiple values applied to filter.
 -  If filter separator enabled add it to URLs only when there are applied filters.
 -  Overall source code improvements.

### Version 0.8.0

 -  First release. Include Google rich snippets, HTML Sitemap and SEO URLs extensions.
