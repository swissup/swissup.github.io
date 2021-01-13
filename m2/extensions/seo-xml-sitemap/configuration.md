---
layout: default
title: Configuration
description: SEO XML Sitemap Configuration
keywords: magento 2 xml sitemap configuration
category: SEO XML Sitemap
---

# Configuration
{:.no_toc}

* TOC
{:toc}

You can configure XML Sitemap at
***Stores → Configuration → Swissup → SEO Suite → XML Sitemap*** page.

![Settings](/images/m2/seo-xml-sitemap/config.png)

### Categories Options

Here you can specify options for category page links in sitemap file.

You can set ***Frequency*** - how frequently the page is likely to change. This value provides general information to search engines and may not correlate exactly to how often they crawl the page (for more details check [XML tag definitions](https://www.sitemaps.org/protocol.html#xmlTagDefinitions)). Values can be one of the following:

 -  Always
 -  Hourly
 -  Daily
 -  Weekly
 -  Monthly
 -  Yearly
 -  Never

You have to remember that it is just information for search engines and not a command. It is up to search engine how frequently it will crawl your store.

With ***Priority*** field you can set improtance of URL relative to other URLs on your site. This value does not affect how your pages are compared to pages on other sites. It only lets the search engines know which pages you deem most important for the crawlers (for more details check [XML tag definitions](https://www.sitemaps.org/protocol.html#xmlTagDefinitions)).

You can include images with links to have its better presentation for search engines. Set ***Add Images into Sitemap*** to one of the following:

 -  None
 -  Base Only
 -  All

### Products Options

As you probably figured out, here you specify options for product page links in sitemap file. The same as for categories you can set ***Frequency***, ***Priority*** and ***Add Images into Sitemap***.

### CMS Pages Options

This section is for CMS page links, isn't it? You can set ***Frequency*** and ***Priority***.

### Other Links Options

As you know with our module you can include any other (custom) links into Site Map. Use ["Manage Links"](/m2/extensions/seo-html-sitemap/grid/) interface from HTML Sitemap to do so.

And in section "Other Links Options" you can set ***Frequency*** and ***Priority*** for custom links in XML Sitemap.

### Advanced settings

With this section you can configure some fancy stuff like generate sitemap via Cron, set max number of URLs per file and other.

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)
 -  [Generate the Sitemap](../generate/)
