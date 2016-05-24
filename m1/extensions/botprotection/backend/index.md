---
layout: default
title: Backend
description: magento bot protection backend settings
keywords: "magento bot protection backend settings, magento bot protection backend configuration"
category: Bot Protection
---

- [Extension configuration](extension-configuration/)
- [Magento Visitors Log](magento-visitor-log/)

If you decide to use Bot Protection extension, then the first thing you need to
do - enbale it in [System Configuration](extension-configuration/).

We recommend also to [enable Magento Visitor Log](magento-visitor-log/) to get
better results during bot detection.

Bot protection offers you to separate "non-human" visitors into three lists:

- whitelist
- blacklist
- suspicious list.

### Whitelist

A whitelist is a list of visitors that are being provided a privilege to browse
your store without any restrictions.

You can check your store whitelist at magento backend.
Go to menu `Templates Master` > `Bot Protection` > `Whitelist`.

![Whitelist](/images/m1/extensions/botprotection/backend/whitelist.png)

By default Google and Bing bots are whitelisted:

-   Google bots:
    -   Googlebot, AdsBot, Mediapartners-Google ([read more...](https://support.google.com/webmasters/answer/1061943))
-   Microsoft bots:
    -   bingbot, BingPreview, msnbot, adidxbot ([read more...](https://www.bing.com/webmaster/help/which-crawlers-does-bing-use-8c184ec0))

To add new visitor to whitelist click `Add to Whitelist`.

![Add to whitelist](/images/m1/extensions/botprotection/backend/add-to-whitelist.png)

You can set visitor IP if you need to whitelist some specific visitor. Or you
can set IP range if you need to whitelist group of visitors (set `Range` to
`Yes` to do so).

### Blacklist

You can get blacklist at your magento backend. Go to menu `Templates Master` >
`Bot Protection` > `Blacklist`.

Blacklist contains single-IP rules and IP-range rules.

![Blacklist](/images/m1/extensions/botprotection/backend/blacklist.png)

To add new blacklist rule click `Add to Blacklist`.
