---
layout: default
title: Changelog
description: SEO Suite Changelog
keywords: seo suite updates
category: SEO Suite
---

# Changelog

### Version 0.7.2

> May 22, 2019

 -  XML Sitemap:
     +  Prevent duplicate alternate locales.

### Version 0.7.1

> Apr 18, 2019

 -  Rich Snippets:
     +  Fixed structured data error for grouped and bundle products - offerCount can't be empty.
     +  Fixed structured data error - reviewCount has to be positive.

### Version 0.7.0

> Mar 29, 2019

 -  Rich Snippets:
     +  Solve latest Google warnings (missing priceValidUntil, global identifier, review etc).
     +  New config option to map product structured data with product attributes.
     +  New config option to setup brand value for JSON type.

### Version 0.6.6

> Feb 26, 2019

 -  Metadata templates:
     +  Improve module stability during metadata generation (prevent php error 'call getFrontend on non-object').

 -  Rich Snippets:
     +  Don't add social links to organization snippet when there is no values in social links.

 -  HTML Sitemap:
     +  Add canonical URL to sitemap page.

### Version 0.6.5

 *  Rich Snippets:
     -   Fix validation error “id is null” at product page.

 *  HTML Sitemap:
     -  Show only enabled CMS pages in sitemap.

### Version 0.6.4

 -  Metadata Templates: improved `attribute` directive output for numeric attributes (truncate trailing zeros in decimal part).

### Version 0.6.3

 -  Metadata Templates: improve 'products' directive for category templates. Works with attributes that are not filterable also.

### Version 0.6.2

 -  XML Sitemap - prevent memory leak during sitemap generation.

### Version 0.6.1

 -  Metadata templates: fix price directive (respect tax config - include/exclude tax; remove decimal trailing zeros).

### Version 0.6.0

Added new extension - SEO Templates. Read more about it
[here](/m1/extensions/seo-templates/).

### Version 0.5.1

 -  SEO XML Sitemap:
     +  rename (->_iwd, ->_cwd) bug was fixed
     +  Old fishpig version integration
 -  Richsnippets:
     +  Extension added to SEO SUite config section

### Version 0.5.0

Initial release. Package includes Richsnippets, SEO HTML sitemap and SEO XML
Sitemap extensions.
