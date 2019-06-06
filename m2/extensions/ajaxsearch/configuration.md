---
layout: default
title: Ajax search
description: >
    Magento2 module for advanced searching
keywords: >
    magento2 search, ajax search, magento2 search provider, ajaxsearch
category: Ajaxsearch
---

# Configuration
{:.no_toc}

* TOC
{:toc}

![Ajaxsearch configuration](/images/m2/ajaxsearch/configuration-main.png)

### Main

-   `Limit` - set up the max number of suggestions to be displayed. 
-   `Highlight` - select **Yes** to enable a backlight for first letters of suggestion in the search box.
-   `Hint` - select **Yes** to enable adding hint text for the search box. This option provides user with many helpful hints and allow him to select a proper variant and to complete a search field faster.
-   `Minimal Query length` - set up a minimum character length.

### Search providers

![Ajaxsearch configuration](/images/m2/ajaxsearch/configuration-suggestions.png)

Use our module to enable the advanced search through your website. By enabling settings in other words providers you will set up the search for products, categories, and CMS pages on the same page. In a **Limit** field please set up a minimum number of search results.

### MySQL Search Engine

![Ajaxsearch mysql config](/images/m2/ajaxsearch/configuration-mysql.png)

Here you can change **Search Method** for Magento MySQL Search Engine. By default, Magento uses `fulltext` search method. It has benefits as well as downsides. One of the downsides is dash (-) symbol in search query. Fulltext method shows poor results or show no results at all.

On other hand, `like` method has no problem with dash. Searches for substring inside words. And has slightly different approach to relevance value calculation. Often the most wished item is on top. As for downsides, like-method can be slow for huge catalogs, short search requests and search requests with common words show big number of matches.
