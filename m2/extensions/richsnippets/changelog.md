---
layout: default
title: Changelog
description: Recent updates in Rich Snippets
keywords: Rich Snippets updates, Rich Snippets changelog
category: Rich Snippets
---

# Changelog

### Version 1.7.2

> Dec 27, 2023

 -  Config option to set image size for product data snippet.
 -  Improve module stability. Avoid "deprecated" warning in PHP.

### Version 1.7.1

> Nov 3, 2023

 -  Shipping details data snippet. Fix not show table rate shipping and matrix rate shipping (WebShopApps vendor).

### Version 1.7.0

> Jul 26, 2023

 -  NEW! [FAQ data snippet widget](/m2/extensions/richsnippets/widgets/faq/) added.
 -  Cache shipping details snippet data to avoid too many shipping requests to online carriers.

### Version 1.6.3

> Jul 13, 2023

 -  Source code quality improvements.

### Version 1.6.2

> Jun 14, 2023

 -  Improvements for shippingDetails section in product structured data.
 -  Fix exception "Product that you are trying to add is not available". Occurs when product is not for sale but module tries to build shipping details for it.

### Version 1.6.1

> May 30, 2023

 -  Fix typo and resolve compatibility issue with PHP 8.1.

### Version 1.6.0

> May 29, 2023

 -  Add support of Google merchant listing fields: "shippingDetails" and "hasMerchantReturnPolicy". Added dedicated subsections in "Product structured data" section in module settings in Stores Configuration.
 -  Reorganized section "Product structured data" to be more intuitive.

### Version 1.5.5

> Apr 25, 2023

 -  Product structured data. Provide currect data for grouped products.

### Version 1.5.4

> Mar 31, 2023

 -  Fix "Can't check requested quantity for products...".
 -  Some additional fixes for PHP 8.2.

### Version 1.5.1

> Mar 14, 2023

 -  PHP 8.2 compatibility.

### Version 1.5.0

> Feb 27, 2023

 -  Add weight unit information to product snippet.
 -  Add opening hours config for organization data snippet.
 -  Option in module configuration to set store (organization) type for organization snippet.
 -  Don't render website data snippet when no data is set.

### Version 1.4.23

> Jan 9, 2022

 -  Improve knowledgebase integration
 -  Improve askit integration
 -  Fix hard dependencies


### Version 1.4.22

> Jan 6, 2023

 - Add knowledgebase integration
 - Add askit integration

### Version 1.4.21

> Nov 29, 2022

 - PageSpeed compatibility: fixed missing snippets with defer JS enabled


### Version 1.4.20

> Jun 9, 2022

 - Cleanup di.xml


### Version 1.4.19

> May 26, 2022

 -  Fixed error: argument 1 must be of the type array, null given.
 -  Fixed layout XML: ‘before.body.end’ is container not block.
 -  AMP integration: removed separate xml layout file.

### Version 1.4.18

> Apr 27, 2022

 -  Performance improvements for configurable products with big number of options.
 -  Correct price for grouped product data snippet when sub product have discounts.

### Version 1.4.17

> Apr 15, 2022

 -  Magento 2.4.4 and PHP 8.1 compatibility.

### Version 1.4.12

> Jan 13, 2021

  - Fixed structured data error about review for product at Magento 2.4.x.
  - SEO Suite modules dropdown over module config at System Configuration.
  - Convert section "Swissup SEO Suite" into item "SEO Suite" under section "Swissup" at System Config page.

### Version 1.4.11

> Nov 25, 2020

  - Price Valid Untill can be dynamic date - offset from today.

### Version 1.4.10

> Jun 24, 2020

  - Add support for availability "pre-order" in structured data for product. Availability can be preorder only when "Backorders" option value is "Allow Qty Below 0 and Notify Customer".
  - Compatibility with Firebear_ConfigurableProducts module.
  - Fixed errors with missing factories on MagentoCloud server.
  - Localization for config option labels and values in Admin config.

### Version 1.4.6

> Dec 13, 2019

 -  Fixed possible PHP notice $offers undefined.

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
