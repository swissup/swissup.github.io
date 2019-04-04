---
layout: default
title: Settings
description: Store Maintenance backend settings
keywords: "store maintenance settings"
category: Store Maintenance
---

# Settings
{:.no_toc}

* TOC
{:toc}

All settings for Store Maintenance module you can find at `Stores` ->
`Configuration` -> `Swissup` -> `Store Maintenance`.

### General

![Store maintenance settings](/images/m2/store-maintenance/settings/general.png)

By changing value of option **"Enable store maintenance mode"** you can turn on
and turn off maintenance for your store.

Please remember, when you enable maintenance mode and your IP is not in list of allowed IPs then you will be redirected to maintenance page right away. And disable maintenance mode possible only with `bin/magento` command from console.

Option **"Allowed IPs"** specifies connections from what IP is allowed to visit your Magento Store. Comment to this option has your current IP address.

With our module we provide simple UI for original Magento maintenance mode functionality. More about it you can read at Magento devdocs - [Enable or disable maintenance mode](https://devdocs.magento.com/guides/v2.3/install-gde/install/cli/install-cli-subcommands-maint.html).

### Maintenance page response header

![Store maintenance. Response header](/images/m2/store-maintenance/settings/response-header.png)

According to [Technical note](../#technical-note) you may want to inform search
engine when maintenance mode ends and search robot can crawl actual content. Set option **"Inform search robots when store back online"** as **Yes** to do so. Then you have to set **"Maintenance end date"** and **"Maintenance end time"**.

If option **"Inform search robots when store back online"** is **Yes**, then
line `Retry-After` appears in response header.

![Retry-Aftre in response](/images/m2/store-maintenance/response-retry-after.png)

### Maintenance page content

![Maintenance page content](/images/m2/store-maintenance/settings/content.png)

This is the most intersting and funiest part of our module. Here you can prepare content for your maintenance page. All the options are pretty self-explainatory:

 -  *Title* - maintenance page title.
 -  *Style* - CSS for your maintenance page.
 -  *Body* - html markup that we will use to build maintenance page body.

At the bottom of config setion you can find instent preview of your new maintenance page.
