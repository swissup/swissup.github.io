---
layout: default
title: Highlight FAQ
description: Magento 2 Highlight FAQ page
keywords: magento 2 highlight, faq
category: Highlight
---

# Frequently Asked Questions

### Highlight is showing ALL products

Such problem can happen if the highlight page is created for attribute i.e. `featured`
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
