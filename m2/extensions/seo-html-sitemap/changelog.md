---
layout: default
title: SEO HTML Sitemap Changelog
description: Recent updates in SEO HTML Sitemap module
keywords: seo html sitemap updates, seo html sitemap changelog
category: SEO HTML Sitemap
---

# Changelog

### Version 1.1.21

> August 29, 2025

 - Refactor sitemap item retrieval to use helper method and improve URL and name escaping.
 - Refactor sitemap templates to use helper method for item retrieval and enhance HTML escaping.

### Version 1.1.20

> April 9, 2025

 - Fixed implicitly marking parameter as nullable error in PHP 8.4.

### Version 1.1.19

> June 27, 2024

 - Prevent deprecation functionality exception. Occurs because pass null when string expected.

### Version 1.1.18

> December 1, 2023

 - Fix type in property name of `Block\Stores`.
 - Block Stores. Code refactor.
 - Fix PHP error on sitemap page when stores added there.

### Version 1.1.17

> November 3, 2023

 - Reduce allocated memory while rendering sitemap. Load collections by pages to reduce memory usage.

### Version 1.1.16

> July 13, 2023

 - Trigger PHPStan check.
 - Fix PHPStan errors.

### Version 1.1.15

> March 17, 2023

 - PHP 8.2: fixed dynamic properties creation.

### Version 1.1.14

> September 19, 2022

 - Specify the collection for other items to Swissup_SeoXmlSitemap.

### Version 1.1.13

> August 11, 2022

 - Use declarative schema.

### Version 1.1.12

> December 30, 2021

 - Update ACL. Change item order.

### Version 1.1.11

> Aug 19, 2021

 -  Added config to hide the highlight pages from sitemap.
 -  Use separate group for merged css. This makes global bundle persistent across all site.
 -  Fixed storeId 'null' to display cms pages on sitemap.
 -  Fixed warning: count parameter must be an array or an object that implements Countable.

### Version 1.1.3

> Aug 19, 2019

 -  Don't show disabled CMS pages on sitemap.

### Version 1.1.2

> Mar 29, 2019

 -  Fixed PHP 7.2 compatibility issue.

### Version 1.1.1

> Nov 8, 2018

 -  Added config to make exclude CMS pages optional.

### Version 1.1.0

> Sep 25, 2018

 -  Internal module naming convention was updated. We applied these changes to reach full compatibility with Magento Marketplace policy.

### Version 1.0.1

> Aug 1, 2018

 -  Rename admin menu item 'HTML Sitemap Links' => 'Sitemap Links'.
 -  Fix PHP fatal error in custom links grid when Magento Admin session expired.

### Version 1.0.0

> Dec 14, 2017

 -  Initial release
