---
layout: default
title: SEO CrossLinks Changelog
description: Recent updates in SEO CrossLinks
keywords: seo crosslinks updates
category: SEO CrossLinks
---

# Changelog

### Version 1.1.26
> February 4, 2026

  - Fixed failed compilation when Attribute Pages is not installed.

### Version 1.1.25
> February 4, 2026

  - Fixed not working seosuite without the attribute pages module.
  - Fix variable name casing for skipCrossLinksProcessing in afterProductAttribute method.
  - Add skipCrosslinksProcessing parameter to afterProductAttribute method.

### Version 1.1.24
> January 6, 2026

  - Fixed broken column layout.

### Version 1.1.23
> December 29, 2025

  - Serialize only body child nodes when get the HTML back.

### Version 1.1.22
> December 26, 2025

  - Assign priority to the longest key available in the description.
  - Support attribute pages.

### Version 1.1.21
> November 21, 2025

  - Sanitize crosslink keywords and skip empty rules to prevent invalid rendering html.

### Version 1.1.20
> September 25, 2025

  - Refactor link creation in Filter class. Add createLink method.

### Version 1.1.19
> September 23, 2025

  - Fixed duplicated image tag added via pagebuilder.

### Version 1.1.18
> July 22, 2025

  - Magefun post list: return the current page instead of the entire collection (fixed blog pagination).
  - Use frontend model to verify if magefun post is available.
  - Fixed php stan errors.
  - Separate config to disable the crosslinks for the Magefun posts.

### Version 1.1.17
> May 20, 2025

  - Fix magefan only post images (exclude product and category pages).

### Version 1.1.16
> April 22, 2025

  - Fixed broken posts images.

### Version 1.1.15
> April 9, 2025

  - Fixed implicitly marking parameter as nullable error in PHP 8.4.

### Version 1.1.14
> June 27, 2024

  - Do not render crosslinks that lead to the same page.

### Version 1.1.13
> April 19, 2024

  - Magefan blog: description compatibility added.
  - Magefan blog: category compatibility added.
  - Magefan blog: post list compatibility added.
  - Magefun blog: posts compatibility added.

### Version 1.1.12
> Jul 13, 2023

  - Fixed PHPStan errors.

### Version 1.1.11
> Mar 21, 2023

  - Fixed broken characters (currency, etc) in widgets.
  - PHP 8.2: fixed dynamic properties creation.

### Version 1.1.7
> Sep 19, 2022

  - Fixed possible issue of using symbols: "&" and "/" in a keyword.
  - Added option to show a Tooltip of a Link.

### Version 1.1.6
> Apr 27, 2022

  - Performance improvements.

### Version 1.1.5
> Apr 15, 2022

  - PHP 8.1 compatibility.

### Version 1.1.0

> Jun 18, 2021

  -  Ability to use crosslinks for extra product attributes.
  -  Added html target attribute into cross-links.

### Version 1.0.6

> Jun 14, 2021

 -  Strip slash from the end of a string.
 -  Fixed acl for the menu item.

### Version 1.0.1

> Feb 26, 2019

 -  Fixed broken "Delete" button on the "Edit Links" page

### Version 1.0.0

 -  Initial release
