---
layout: default
title: Highlight FAQ
description: Frequently asked questions about Highlight module for Magento2
keywords: >
    highlight shows all products, filter by current category
category: Highlight
---

# FAQ

### Highlight is showing ALL products

 -  Navigate to _Stores > Attribute > Product_, find an attribute, used by
    Highlight block.
 -  Switch to _Storefront properties_ tab and change **Used in Product Listing**
    to **Yes**.
 -  Reindex Magento Store using terminal:

    ```bash
    php bin/magento indexer:reindex
    php bin/magento cache:flush
    ```

### Filter products by current category

Use Conditions option for this.
Select _Category_ in Conditions dropdown and fill its value:

![Current category condition](/images/m2/highlight/faq/condition-current-category.png)

 -  `current` - Filter products by current category only.
 -  `current+` - Filter products by current category and it's children.

#### Next Up

- [Back to Main Page](../)
