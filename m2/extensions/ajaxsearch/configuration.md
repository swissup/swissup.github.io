---
layout: default
title: Ajaxsearch configuration
description: Ajaxsearch configuration options
category: Ajaxsearch
---

# Configuration
{:.no_toc}

Ajaxsearch configuration is located at _Stores > Configuration > Swissup > Ajaxsearch_
page.

* TOC
{:toc}

### Main

![Main Section](/images/m2/ajaxsearch/configuration/main.png)

Option      | Description
------------|---------------
Enabled     | Enable/Disable module.
Limit       | Set the max number of results to be displayed.
Highlight   | Highlight the words you are searhing, in search results dropdown.
Minimal Query Length | Set minimum amount of characters in search field to start searching.

### Design

![Design Section](/images/m2/ajaxsearch/configuration/design.png)

Option      | Description
------------|---------------
Form Layout | Setup how the search input is looks like: Default - Initially visible form, Icon only - Minimalistic form, Icon only - Fullscreen form.
Results Layout | Setup how the results dropdown layout looks like: Grid and List modes are available.

### Product Suggestions

![Product Suggestions Section](/images/m2/ajaxsearch/configuration/product-suggestions.png)

Option      | Description
------------|---------------
Enabled     | Show/hide products in search results.
Limit       | Set the max number of products in results dropdown.

### Category Suggestions and Filters

![Category Suggestions Section](/images/m2/ajaxsearch/configuration/category-suggestions-and-filters.png)

Option      | Description
------------|---------------
Enabled     | Show/hide categories in search results.
Limit       | Set the max number of categories in results dropdown.
Show filter by Category | Show/hide categories filter.

### CMS Page Suggestions

![CMS Page Suggestions](/images/m2/ajaxsearch/configuration/page-suggestions.png)

Option      | Description
------------|---------------
Enabled     | Show/hide CMS pages in search results.
Limit       | Set the max number of pages in results dropdown.

### Popular Search Terms Suggestions

![Popular Search Terms Suggestions](/images/m2/ajaxsearch/configuration/popular-search-terms-suggestions.png)

Option      | Description
------------|---------------
Enabled     | Show/hide popular search terms in search results.
Limit       | Set the max number of popular search terms in results dropdown.

### MySQL Search Engine

![Ajaxsearch mysql config](/images/m2/ajaxsearch/configuration/search-engine.png)

Here you can change **Search Method** for Magento MySQL Search Engine. By default,
Magento uses `fulltext` search method. It has benefits as well as downsides.
One of the downsides is dash (-) symbol in search query. Fulltext method shows
poor results or show no results at all.

On other hand, `like` method has no problem with dash. Searches for substring
inside words. And has slightly different approach to relevance value calculation.
Often the most wished item is on top. As for downsides, like-method can be slow
for huge catalogs, short search requests and search requests with common words
show big number of matches.
