---
layout: default
title: Generate Sitemap
description: How to generate SEO XML Sitemap
keywords: magento 2 xml sitemap generate
category: SEO XML Sitemap
---

# Generate
{:.no_toc}

* TOC
{:toc}

In Magento admin menu select ***Swissup → SEO Suite → Sitemaps***. You get grid with list of all existsing sitemaps

![Sitemaps](/images/m2/seo-xml-sitemap/sitemaps.png)

### Add New Sitemap

Tap `Add Sitemap` and do the following:

![New Sitemap](/images/m2/seo-xml-sitemap/new-sitemap.png)

Enter the sitemap ***Filename***. For example: `sitemap.xml`.

Enter the ***Path*** to determine where on server Magento has to save the sitemap file. Make sure that the path is writeable. Otherwise you get an error with message to check permission.

If you set path value to `/sitemap/` then Magento places sitemap file in derectory with name "sitemap". It is better to create directory manually and set proper permissions to it before generate file.

If you set path value to `/` then Magento places the sitemap file at the base path, or root of your Magento installation.

We recommend to save all sitemaps in one separate directory. It will keep your Magento root clean.

***Store View*** drop-down appears only at multistore Magento instances. Here you can select Store View for sitemap file.

Click `Save & Generate` when complete. It can take a minute or two to complete file generation.

### Submit Sitemap to Search Engines

You can submit your sitemap to different search engines. Providing them the link to the xml file in your Magento installation. To copy the link, do the following:

 1. In the Site Map grid, right-click the URL in the ***Link for Google*** column.
 2. On the menu, choose ***Copy Link Address***.

For more information, see the instructions for the specific search engine. Here are links to instructions for most popular:

 -  [Google](https://support.google.com/webmasters/answer/183669?hl=en)
 -  [Microsoft Bing](http://www.bing.com/webmaster/help/how-to-submit-sitemaps-82a15bd4)

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)
 -  [Configuration](../configuration)
