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
_Stores → Configuration → Swissup → SEO Suite → Pagintaion_ page.

![Settings](/images/m2/seo-pager/config-v4.png)

### General

With option "_Enable SEO enhancements_" you can enable or fully disable all the enhancements.

With "_Show view-all link_" you can show or hide view all link at listing toolbar. This link appears at bottom toolbar near page numbers.

![View all link example](/images/m2/seo-pager/view-all-link.png)

"_Strategy of paginated content presentation for search engines_" has follow options:

 -  **Leave as-is (Magento way)**. Magento adds canonical URL to each page of listing and it leads to first page.
 -  **Canonical url to "View all" page (improved Magento way)**. It is similar to Magento way except canonical URL of each page leads to "View all" page of current listing. It maybe good for listings with not big number of products (40-50 products).
 -  **Canonical url to each page (Google way)**. Each page of pagenated listing has its own canonical URL. When layered navigation filters applied or changed product order, product sorting etc. result page marks as NOINDEX,NOFOLLOW. Rel=prefetch to next page also added to improve customer navigation.
 -  **Rel="next" and rel="prev" (deprecated Google way)**. Some time ago it was Google way to present paginated content. But now it is deprecated and we don't recommend to use it.

### Page Title

Template in "_Title when pagination used_" specifies how to modify page title when pagination is used (page number must be greater then 1).

You can add page number in the begin or in the end of original title.

Defualt value is `{% raw %}{{title}} | Page {{currentPage}} of {{lastPage}}{% endraw %}`.

For example, you have category "Women" and its title is also "Women". Categroy has 9 pages of product. For 5th page you get title "Women &#124; Page 5 of 9".

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)
