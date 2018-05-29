---
layout: default
title: Configuration
description: magento 2 metadata templates configuration
keywords: "metadata templates backend settings, metadata templates backend configuration"
category: SEO Metadata Templates
---

# Extension configuration
{:.no_toc}

* TOC
{:toc}

In order to change general extension settings, go to `Stores` ➔ `Configuration`
➔ `Swissup SEO Suite` section ➔ `Metadata Templates`.

Metadata Templates settings have two sections.

![Metadata templates system config](/images/m2/seo-templates/backend/config.png)

### General

In section General you can enable/disable extension. And you can force your
store to use generated metadata instead of metadata from product/category.

### Cron settings

![Metadata templates system config cron](/images/m2/seo-templates/backend/config-cron.png)

Here you can setup metadata generation with your metadata templates via
Magento Cron.

For live stores we recommend to regenerate metadata once per week. Other
possible options are once per day or once per month.

Metadata generation is very resource-intensive task. Because it walk through
all products and categories for all store views. We split this process into 
portions to prevent server overload. The larger the portion is the more it 
loads server. You can set portion size with `Records to process per run`
option. 