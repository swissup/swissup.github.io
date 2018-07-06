---
layout: default
title: Changelog
description: Recent updates in SEO Suite package
keywords: seo suite updates, seo suite changelog
category: SEO Suite
---

# Changelog

### Version 0.11.0

New module [*"Region and Language URLs (hreflang)"*](../../hreflang/) included into kit. Tell Google that you have multilingual and/or multi-regional store. Please, do not forget to run `php bin/magento module:enable Swissup_Hreflang` to enable new module.

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
