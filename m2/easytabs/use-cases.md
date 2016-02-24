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

1. [Dynamic tab titles](#dynamic-tab-titles)
2. [Unset multiple blocks](#unset-multiple-blocks)

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
