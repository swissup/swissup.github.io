---
layout: default
title: Attribute based pages (Brand pages)
description: Magento 2 Attributepages FAQ page
keywords: magento 2 attributepages, brandpage, brand page, faq
category: Attributepages
---

# Frequently Asked Questions

### Page is showing all products

Open _Stores > Attributes > Product > 'select your attribute' > Storefront properties_
page and change _Use in Layered Navigation_ option to **Filterable**.

Update indexes and refresh the cache:

```bash
php bin/magento indexer:reindex
php bin/magento cache:flush
```

#### Next Up

- [Back to Main Page](../)
