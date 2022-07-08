---
layout: default
title: Cachewarmer Changelog
description: Cachewarmer changelog
keywords: cachewarmer changelog, cachewarmer updates
category: Cachewarmer
---

# Changelog

### Version 1.0.19

> Jul 8, 2022

 -  Fix phpstan errors

### Version 1.0.18

> May 26, 2022

 -  Fix php 8.1 ReplaceNewDateTimeNull

### Version 1.0.17

> Apr 27, 2022

 -  update guzzle require

### Version 1.0.16

> Apr 15, 2022

 -  Magento Coding Standard fixes

### Version 1.0.15

> 8 Feb, 2022

**Fixes**
 - Fix: setup_version and setup patch data applying bug

### Version 1.0.14

> 24 Jan, 2022

**Fixes**
 - Update obsolete setup scripts (close #9)

### Version 1.0.13

> 18 Jan, 2022

**Fixes**
 - Move page/ajaxtest toolbar action to graphql api
 - Add basic auth
 - Improve cache checking logic
 - Fix isVarnishEnabled logic error (typo?)

### Version 1.0.12

> 29 Nov, 2021

**Fixes**
 - Set default 'Urls Limit' to 100

### Version 1.0.11

> 13 May, 2021

**Fixes**
 - Add debug option to command

### Version 1.0.10

> 9 Mar, 2020

**Fixes**
 - Improve Varnish integration
 - Fix varnish debug toolbar checking

### Version 1.0.9

> 12 Oct, 2020

**Fixes**
 - Fixed FK error during setup:upgrade hankey

### Version 1.0.8

> 1 Oct, 2020

**Features**
 - Add cron councurency and delay option (close #6)

### Version 1.0.7

> 6 Aug, 2020

**Fixes**
 - Allow to install on Magento 2.4

### Version 1.0.6

> Jul 16, 2020

**Features**
 - Add redirect_type=0 filter for indexing (#4) f7350b

### Version 1.0.5

> Jul 1, 2020

**Features**
 - Add product visibility checking for url_rewrite entries

### Version 1.0.4

> Jun 11, 2020

**Features**
 - Allow to warm only specific pages

### Version 1.0.3

> Apr 18, 2020

**Fixes**
 - Fix php notice array to string (close #1)
 - Fix 500 error at backend statistic page (too many entries and slow cache test)

### Version 1.0.2

> Apr 6, 2020

**Features**
 - Added limit urls config option per a cron task
 - Added local chart.js library version
 - Added batch save in index generation
 - Stored cur page value in fpc cache (in get source requestentry collection)

### Version 1.0.1

> Mar 19, 2020

**Fixes**
 - Fix 'The store ... wasn't found'

**Features**
 - Improved getting store protocol for URLs

### Version 1.0.0

> Feb 28, 2020

 - Initial release


##### See also

Great! Now you might want to see previous:

 - [Installation](/m2/extensions/cachewarmer/installation/)
