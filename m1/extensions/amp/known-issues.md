---
layout: default
title: AMP known issues
h1: Known Issues
description: Known issues of AMP site
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

### Old libxml library

A lot of shared hostings are using archaic version of libxml library that does
not support amp-compatible html markup. When you are seeing the following error:

```
AMP validation had errors:
The mandatory tag 'noscript enclosure for boilerplate' is missing or incorrect.
```

That means that `DOMDocument` parser can't place `<noscript>` tag properly
according to AMP requirements.

There are two ways of solving this issue:

 -  Contact your hosting and request a `libxml` library upgrade (2.8.0 or newer
    is required)
 -  Disable third-party Magento module that uses `DOMDocument` parser

### Wordpress pagination is not working

This bug is caused by incorrect url builder usage by Fishpig_Wordpress module.

Open `app/code/community/Fishpig/Wordpress/Block/Post/List/Pager.php` and find
the following lines:

```php
return rtrim($this->getUrl('*/*/*', array(
    '_current' => true,
    '_escape' => true,
    '_use_rewrite' => true,
    '_query' => array('___refresh' => null),
)), '/') . '/' . $slug;
```

Replace them with

```php
return rtrim($this->getUrl('*/*/*', array(
    '_current' => true,
    '_escape' => true,
    '_use_rewrite' => true,
    '_query' => array(
        '___refresh' => null,
        $pageVarName => isset($params[$pageVarName]) ? $params[$pageVarName] : null
    ),
)), '/');
```

##### Next Up

 -  [Back to Home](/m1/extensions/amp/)
