---
layout: default
title: Attribute based pages (Brand pages)
description: Magento 2 Attributepages FAQ page
keywords: magento 2 attributepages, brandpage, brand page, faq
category: Attributepages
---

# Frequently Asked Questions

### Option page is showing all products

Such problem can happen if the attribute that page is created for i.e. `manufacturer`
has `Used in Product Listing` option set to `No`

##### Fix

 *  Go to `Stores > Attribute > Product > 'select your attribute' > Storefront properties`
 *  Find **Used in Product Listing** and set to **Yes**
 *  Make store indexes reindex using _CLI_ command:

    ```sh
    php bin/magento indexer:reindex
    ```
 *  Clear store cache. If you're still in terminal you can use:

    ```sh
    php bin/magento cache:flush
    ```
 *  Done

#### Next Up

- [Back to Main Page](../)
