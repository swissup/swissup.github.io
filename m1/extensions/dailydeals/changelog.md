---
layout: default
title: Changelog
description: Daily Deals changelog
keywords: Daily Deals changelog
category: Daily Deals
---

# Changelog

### Version 1.1.6

 -  Compatibility with ProLables extension version 2.7.13.
 -  Prevent crash on multistore Magento instances.

### Version 1.1.5

 -  Do not output empty deal timer wrapper when there are no timer.

### Version 1.1.4

 -  Dramatic performance improvements
 -  PHP code cleanup to pass MEQP validation

### Version 1.1.3

 *  updated widgets for better compatibility with Argento Package 1.8.4+
 *  added columns "Attr. Set" and "Visibility" for assigned products grid on
    edit deal page in Magento Admin
 *  widget icons in WYSIWYG editor at backend
 *  Countdown Timer improvements (keep flip timer in one line even when
    browser can not fit it in container; do not load web fonts if no timers
    use them)

### Version 1.1.2

 *  deal discount applies for product in orders created from magento backend
 *  if product is in few active deals, then extension select deal where
    product price is the lowest
 *  full integration with TM Full Page Cache
 *  integration with Easy Color Swatches
 *  backend interface improvements (mass action for grid)
 *  CSS files from JS libs included in Countdown Timers merge with all other
    files
 *  all JS files deferred (do not block page rendering)
 *  overall style improvments

Please, delete follow files and directories to keep your magento instance
clean and tidy:

```
app/code/community/TM/CountdownTimer/etc/adminhtml.xml
app/code/community/TM/CountdownTimer/etc/system.xml
js/tm/flipclock/
js/tm/simpletimer/
js/tm/jquery/
```