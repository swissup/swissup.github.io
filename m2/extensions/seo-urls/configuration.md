---
layout: default
title: Configuration
description: SEO URLs Configuration
keywords: seo urls, options, configuration
category: Seo Urls
---

# Configuration
{:.no_toc}

* TOC
{:toc}

You can configure SEO URLs extension at
_Stores → Configuration → Swissup SEO Suite → Urls_ page.

![Settings](/images/m2/seo-urls/config.png)

### General

You can enable or disable extension fully at this config section.

### Layered Navigation

At this section you can make few tweaks to url build for filters in layered navigation.

By default extension build filter url like this - `http://example.com/gear/bags/color-black/material-polyester.html`. Where `gear/bags` is category and `color-black/material-polyester` are applied filters.

Some store owners like to separate filters from category in url. You can do so with option `Use separator for filters` and `Separator string`.

Other option `Category filter in-URL label` allows you to change label for catgory filter. Module uses this label to build URLs in layeren navigation.

### Search

Default Magento search controller name is `catalogsearch/result`. Here you can rename it to more friendly name. For example you can name it `search` or `search.html`. Use config option **Search controller name in URLs** to do so.

We offer one more setting to search url. You can specify where to place search term:

 -  *As request parameter* - it is default behavior
 -  *In URL body* - search term inserted into url body

> If you set **search term in url body** then you have to know that search term will be slightly changed. Extension converts search term to lower case and remove some forbidden charcters (like `.` (dot) or `&`). In most cases it does not affect search result in any way.

### CMS Pages

Here you have only one option `Redirect to site homepage...`.

In Magento you can access home page with two urls - store home page URL (`example.com`) and direct URL to CMS page that is set homepage (`example.com/myhomepage` where `myhomepage` is identifier of CMS page that is set as homepage).

So with option `Redirect to site homepage...` you avoid content duplication warning from search engines because visitors always redirected to store homepage when they try to access respective CMS page via its direct link.

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)

