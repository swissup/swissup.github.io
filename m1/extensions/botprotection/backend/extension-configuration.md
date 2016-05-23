---
layout: default
title: Extension configuration
description: magento bot protection module system config options
keywords: " magento bot protection, bot protection magento extension, backend, bot protetction system config"
category: Bot Protection
---

# Extension configuration

In order to change general extension settings, go to `System` > `Configuration`
> `Templates-Master` section > `Bot Protection`.

Extension settings consist of three sections.

### General

![Bot Protection system config general](/images/m1/extensions/botprotection/backend/system-config-general.png)

You can enable or diable extension in section `General`.

### Response page

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

### Detect bots

![Bot Protection system config detect bots](/images/m1/extensions/botprotection/backend/system-config-detect-bots.png)

Bot Protection extension comes with functionality that allows your magento
instance to detect bot/crawler base on visitor activity and user agent.

In section `Detect bots and crawlers` you can enable or disable this feature
with option `Enable detectoin`.

> Bot Protection requires [enabled Magento Visitor Log](../magento-visitor-log/),
> so extension be able to estimate visitor activity. If Magento visitors Log is
> disabled, then extension determinates bot/crawler only base on user agent.

Extension uses values from settings `Time frame to analyze` and
`Max number of "clicks"` for estimating visitor's activity.

By default, if visitor open more then 50 links (value in `Max number of "clicks"`)
in 60 seconds (value in `Time frame to analyze`), then he is considered as bot.

`Default action with detected bot` sets action that will be applied to all
visitor that are detected as bots. There are three available options:

-   *Add to Blacklist* - visitor blocked from your store
-   *Confirm Human* - magento adds visitor to suspicious list and requires him
to solve captcha (to prove he is human and be able to continue browse your
store)
-   *Add to Suspicious List* - magento only adds visitor to suspicious, no
captcha and no blocking (store admin has to decide by himself what to do with
such visitors).
