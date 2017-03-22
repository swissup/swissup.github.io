---
layout: default
title: AMP known issues
h1: Known Issues
description: Known issues of AMP site
category: Accelerated Mobile Pages
sidebar: sidebar.md
---

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
