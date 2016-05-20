---
layout: default
title: Extension configuration
description: magento bot protection module system config options
keywords: " magento bot protection, bot protection magento extension, backend, bot protetction system config"
category: Bot Protection
---

# Extension configuration

In order to change general extension settings, go to `System` -> `Configuration`
-> `Templates-Master` section -> `Bot Protection`.

Extension settings consist of three sections.

![Bot Protection system config general](/images/m1/extensions/botprotection/backend/system-config-general.png)

You can enable or diable extension in section `General`.

To set response page for visitors from black list or for visitors from
suspicious list who have to confirm their humanity - check section
`Response page`.

![Bot Protection system config response page](/images/m1/extensions/botprotection/backend/system-config-response-page.png)

Extension provides two default response CMS pages. One shows as response for
blacklisted visitors (its url key is in field `For blacklisted visitor`). And
other shows for visitors who have to confirm they are human (url key in field
`For visitor to confirm he is human`).

You can find these pages at your store backend in list of CMS pages (menu `CMS`
> `Pages`). You can either edit provided pages, or create new and update
extension configuration.

