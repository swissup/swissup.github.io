---
layout: default
title: Changelog
description: Recent updates in SEO Suite package
keywords: seo suite updates, seo suite changelog
category: SEO Suite
---

# Changelog

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
