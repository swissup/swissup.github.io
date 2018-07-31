---
layout: default
title: Configuration
description: Regional URLs Magento Configuration
keywords: regiaonal urls configuration, language urls configuration, hreflang configuration
category: Regional URLs
---

# Configuration
{:.no_toc}

* TOC
{:toc}

You can configure Regional and Language URLs at
***Stores → Configuration → Swissup SEO Suite → Regional and Language URLs*** page.

![Settings](/images/m2/hreflang/config.png)

### General

Option ***Add hreflang to page head*** allows to choose wether you want add hreflang data to document head or not.

Option ***Add hreflang to XML Sitemap*** includes hreflang URLs into sitemap file.

Options above are independent and you can choose both or any of them. If you ask us what option we like more then it is hreflang in page head. This does not mean that XML variant is worse.

***Default store*** is a drop-down where you can specify what store view should be used as 'x-default'. If you don't want element _link_ with `hreflanf="x-default"` then set value to 'Not Specified'.

With ***Exclude from hreflang*** option you can exclude some stores from hreflang data.

### URL

***Locale as subfolder in URLs*** forces Magento to add locale code to store URL.

For example, there is Magento 2 store with:
 -  locale en_NZ (English New Zeland);
 -  homepage URL - _http://argento.mage/_;
 -  product page URL - _http://argento.mage/didi-sport-watch.html_.

After ***Locale as subfolder in URLs*** enabled this store gets:
 -  homepage URL - _http://argento.mage**/en-nz/**_;
 -  product page URL - _http://argento.mage**/en-nz/**didi-sport-watch.html_.

When you need just language as your locale you should use option ***Remove region from locale***. You get `en` instead of `en-nz` with this option enabled.

All config options can be change on store view or website level. So you can enbale remove region for one store view and keep it for others.

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)

