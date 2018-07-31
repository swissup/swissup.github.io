---
layout: default
title: XML Sitemap
description: SEO XML Sitemap
keywords: magento 2 xml sitemap
category: SEO XML Sitemap
---

# SEO XML Sitemap

![XML Sitemap example](/images/m2/seo-xml-sitemap/example-frame.png){:class="noborder"}

A Sitemap is an XML file with list of URLs for a site. This file helps store admin to inform search engines about URLs on a website that are available for crawling. Sitemap can contain some additional information along side with URLs (when URL was last updated, how often URL content changes, how important it is in relation to other URLs in the site).

According to [wikipedia](https://en.wikipedia.org/wiki/Sitemaps) Sitemaps are especially useful for websites where:

 -  The site is very large and there is a chance for the web crawlers to overlook some of the new or recently updated content
 -  When websites have a huge number of pages that are isolated or not well linked together, or
 -  When a website has few external links.

It seems like XML Sitemap is "must have" feature for Magento 2 store.

Magento 2 has its own nice sitemap implementation. Our module adds few awesome features to it that make XML Sitemap even better:

 -  sort links in XML according their priority (make sure crawler will check the most important links first),
 -  include any other (custom) links into XML,
 -  add images to category links,
 -  add regional and language URLs - hreflang (check [Regional URLs](../hreflang) docs),
 -  along side with core functions like, generate via Cron,
 -  set the sitemap file limits.

In case you want to know more about core Magento Sitemap please read article ["Using a Site Map"](https://docs.magento.com/m2/ce/user_guide/marketing/sitemap-xml.html) at Magento docs.

Check links below to get closer with Swissup SEO XML Sitemap module.

 *  [Configuration](configuration/)
 *  [Admin interface to add custom links into XML](../seo-html-sitemap/grid/)
 *  [Generate the Sitemap](generate/)

> XML Sitemap module is a part of [SEO Suite](../seo-suite/) toolkit. And we do not provide it as independent Magento 2 extension.
