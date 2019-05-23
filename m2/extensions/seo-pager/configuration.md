---
layout: default
title: Configuration
description: SEO Pagination Configuration
keywords: seo paginationconfiguration
category: Seo Pagination
---

# Configuration
{:.no_toc}

* TOC
{:toc}

You can configure SEO enhancements for paginated content at
_Stores → Configuration → Swissup SEO Suite → Pagintaion_ page.

![Settings](/images/m2/seo-pager/config-v2.png)

### General

With option "_Enable SEO enhancements_" you can fully disable all the enhancements.

With "_Show view-all link_" you can show or hide view all link at listing toolbar. This link appears at bottom toolbar near page numbers.

![View all link example](/images/m2/seo-pager/view-all-link.png)

"_Strategy of paginated content presentation for search engines_" has three options:

 -  **Leave as-is**. Relay on search engine and its logic only.
 -  **Use rel="canonical" to view all page**. Tell search engine that the View All page is the version you want to appear in search results. So it will crawle this page.
 -  **Use rel="next" and rel="prev"** links to indicate the relationship between component URLs. This markup provides a strong hint to search engine that you would like us to treat these pages as a logical sequence, thus consolidating their linking properties and usually sending searchers to the first page.

### Page Title

Template in "_Title when pagination used_" specifies how to modify page title when pagination is used (page number must be greater then 1).

You can add page number in the begin or in the end of original title.

Defualt value is `{% raw %}{{title}} | Page {{currentPage}} of {{lastPage}}{% endraw %}`.

For example, you have category "Women" and its title is also "Women". Categroy has 9 pages of product. For 5th page you get title "Women &#124; Page 5 of 9".

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)
