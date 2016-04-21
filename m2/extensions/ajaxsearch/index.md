---
layout: default
title: Ajaxsearch
description: >
    Magento2 module for advanced searching
keywords: >
    magento2 search, ajax search, magento2 search provider, ajaxsearch
category: Ajaxsearch
---

# Ajaxsearch

Magento2 module for adding advanced search providers.
Improves search results box.

![Ajaxsearch search results](/images/m2/ajaxsearch/usage.gif)

### Contents

1.  [Installation](installation/)
2.  [Configuration](#configuration)
    - [Main](#main)
    - [Providers](#providers)

### Configuration

![Ajaxsearch configuration](/images/m2/ajaxsearch/configuration-main.png)

##### Main

- The max number of suggestions to be displayed. Defaults to 10.
- If true, when suggestions are rendered, pattern matches for the current query in text nodes will be wrapped in a strong element with its class set to {{classNames.highlight}}. Defaults to true.
- If false, the typeahead will not show a hint. Defaults to true.
- The minimum character length needed before suggestions start searching. Defaults to 3.
- Class Names - css class names used in templates

![Ajaxsearch configuration](/images/m2/ajaxsearch/configuration-suggestions.png)

##### Providers

- Product Suggestions is search by products
- Category Suggestions is search by product categories
- Page Suggestions is search by cms pages
- Autocomplete Suggestions is search default magento search

Each provider has two options:

- Enable/Disable current searching provider
- Limit for current searching provider
