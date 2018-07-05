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

Option ***"Add hreflang to page head"*** allows to choose wether you want add hreflang data to document head or not.

***"Default store"*** is a drop-down where you can specify what store view should be used as 'x-default'. If you don't want element _link_ with `hreflanf="x-default"` then set value to 'Not Specified'. 

### URL

With ***"Locale as subfolder in URLs"*** option you can force Magento to add locale code to store URL.

For example, there is Magento 2 store with:
 -  locale en_NZ (English New Zeland);
 -  homepage URL - _http://argento.mage/_;
 -  product page URL - _http://argento.mage/didi-sport-watch.html_.

After *"Locale as subfolder in URLs"* enabled this store gets:
 -  homepage URL - _http://argento.mage**/en-nz/**_;
 -  product page URL - _http://argento.mage**/en-nz/**didi-sport-watch.html_.

When you need just language as your locale you should use option ***"Remove region from locale"***. You get `en` instead of `en-nz` with this option enabled.

All config options can be change on store view or website level. So you can enbale *"Locale as subfolder in URLs"* for one store view and disable for others. Same thing for *"Remove region from locale"*.

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)

