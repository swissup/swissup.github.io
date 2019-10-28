---
layout: default
title: Changelog
description: Recent updates in Rich Snippets
keywords: Rich Snippets updates, Rich Snippets changelog
category: Rich Snippets
---

# Changelog

### Version 1.4.5

> Oct 28, 2019

 -  Change how configurable product is presented in data snippet. Now it is a product with multiple offers.
 -  User can specify properties in `offers` and `aggregatedRating` parts of data snippet. It is possible with _"Structured data"_ option in config. Syntax example for _"Property Name"_ column - `offers/mpn`.
 -  Show correct price in snippet when including tax enabled.
 -  Fixed Magento Coding Standard error - no explicit Proxy in contructor.

### Version 1.4.2

> May 3, 2019

 -  Slightly improved product description for structured data.

### Version 1.4.1

> Apr 18, 2019

 -  Fixed structured data error for grouped and bundle products - offerCount can't be empty.

### Version 1.4.0

> Mar 26, 2019

 -  Solve latest Google warnings (missing priceValidUntil, global identifier, review etc).
 -  New config option to map product structured data with product attributes.
 -  Localization file added.

### Version 1.3.1

> Jan 8, 2019

 -  Fix PHP error that occured at some Magento instances at module Configuration page.

### Version 1.3.0

> Dec 21, 2018

 -  Integrated with [Swissup AMP](/m2/extensions/amp/) module.

### Version 1.2.0

 -  Now you can add brand info to product structured data.

### Version 1.1.3

 -  Fallback to full description of product in snippet when short description is empty.

### Version 1.1.2

 -  Fix missing breadcrumbs data at product pages in Magento 2.2.4+ instances.
 -  Fix possible notice at product page with grouped product (undefined variable: groupedProductsPricesArray).

### Version 1.1.1

 -  Do not add rating to snippet when product reviews do not have ratings.

### Version 1.1.0

 -  Fixed duplicated product structured data on product page. Now preview feature of Google testing tool works as it should.
 -  Minify JSON-LD structured data.
 -  No empty nodes in JSON-LD structured data.
 -  Overall source code improvements.

### Version 1.0.6

 - Move extension config to 'Swissup SEO' section.
 - Respect store level values of extension configuration.

### Version 1.0.5

 -  Sort order fixed.
 -  ACL added.
 -  Fixed error in breadcrumbs JSON.
 -  Added config to disable snippets.

### Version 1.0.2

 -  Fix error during code compile.

### Version 1.0.1

 -  SKU property.
 -  Fix error "getPriceValues method is not consistent".
