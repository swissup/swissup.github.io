---
layout: default
title: Settings
description: Store Maintenance backend settings
keywords: "store maintenance settings"
category: Store Maintenance
---

# Settings

All settings for Store Maintenance module you can find at `Stores` ->
`Configuration` -> `Swissup` -> `Store Maintenance`.

## General

![Store maintenance settings](/images/store-maintenance/settings.png)

By changing value of option **"Enable store maintenance mode"** you can turn on
and turn off maintenance for your store.

With option **"CMS page to display while maintenance"** you can specify page to
display on frontend. You can select any of existing CMS page. Magento creates
page *"503 Service Unavailable"* during module installation. It is selected by
default. You can modify this page any way you want or select other from list.

## Access to frontend

Obviously, while you updating website you need access to frontend and check how
changes affect it. Also you want forbid access to frontend for the other
visitors. You can do this by restricting IPs.

![Store maintenance. Frontend access settings](/images/store-maintenance/settings-frontend-access.png)

Option **"Use Magento allowed IPs"** with value **Yes** tells Magento allow
access to frontend for list of IPs that user specify in default Magento setting
[`Developer`](http://docs.magento.com/m2/ce/user_guide/configuration/advanced/developer.html).

You can set more IPs with access to frontend in field **"Additional allowed
IPs"**.

## Maintenance page header

![Store maintenance. Response header](/images/store-maintenance/settings-header.png)

According to [Technical note](../#technical-note) you may want to inform search
engine when maintenance mode ends and search robot can crawl actual content. Set
option **"Inform search robots when store back online"** as **Yes** to do so.
Then you have to set **"Maintenance end date"** and **"Maintenance end time"**.

If option **"Inform search robots when store back online"** is **Yes**, then
line `Retry-After` appears in response header.

![Retry-Aftre in reasponse](/images/store-maintenance/response-retry-after.png)
