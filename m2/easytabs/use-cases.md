---
layout: default
title: Easy Tabs Use Cases
description: magento 2 product tabs use cases
keywords: " magento 2 product tabs, magento 2 product tabs extension free, add tabs
magento 2 product page "
category: Easy Tabs
---

# Easy Tabs Use Cases

### Contents

1. [Activate and scroll to tab on external link click](#activate-and-scroll-to-tab-on-external-link-click)
2. [Dynamic tab titles](#dynamic-tab-titles)
3. [Unset multiple blocks](#unset-multiple-blocks)

### Activate and scroll to tab on external link click

If you need direct link to tab, use tab `alias` in link `href` attribute and insert link where you need:

```html
<a href="#TAB_ALIAS_FROM_BACKEND" class="action view">Description</a>
```
For example, the link below will activate the description tab:

```html
<a href="#product.info.description" class="action view">Description</a>
```

### Dynamic tab titles

Use `eval` directive to call block methods in tab title.

Block    | Dynamic Tab Title
---------| -----------------------------
Reviews  | `{% raw %}{{eval code="getTabTitle()"}}{% endraw %}`

### Unset multiple blocks

Use comma to unset multiple block from layout.

Examples:

1. `block_to_unset1,block_to_unset2`
2. `catalog.product.related,product.info.upsell`
