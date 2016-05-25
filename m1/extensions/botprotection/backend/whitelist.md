---
layout: default
title: Whitelist
description: magento bot protection backend whitelist
keywords: "bot protection backend whitelist, bot protection configuration whitelist"
category: Bot Protection
---

# Whitelist

A whitelist is a list of visitors that are being provided a privilege to browse
your store without any restrictions.

You can check your store whitelist at magento backend. Go to menu
`Templates Master` > `Bot Protection` > `Whitelist`.

![Whitelist](/images/m1/extensions/botprotection/backend/whitelist.png)

By default Google and Bing bots are whitelisted:

-   Google bots:
    -   Googlebot, AdsBot, Mediapartners-Google ([read more...](https://support.google.com/webmasters/answer/1061943))
-   Microsoft bots:
    -   bingbot, BingPreview, msnbot, adidxbot ([read more...](https://www.bing.com/webmaster/help/which-crawlers-does-bing-use-8c184ec0))

To edit existing item in whitelist - click on it.

To add new visitor to whitelist click `Add to Whitelist`.

![Add to whitelist](/images/m1/extensions/botprotection/backend/add-to-whitelist.png)

You can set visitor IP if you need to whitelist some specific visitor. Or you
can set IP range if you need to whitelist group of visitors (set `Range` to
`Yes` to do so). Example is on picture below.

![Whitelist rule example](/images/m1/extensions/botprotection/backend/whitelist-example.png)

Values on this image mean that Googlebots from any IP are always welcome at your
store. If you leave field `Crawler/Bot Name` empty, then every visitor is
whitelisted when his IP address is in specified range .

You can see when bot was at your store last time in section `Information`.
