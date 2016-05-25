---
layout: default
title: Blacklist
description: magento bot protection backend blacklist
keywords: "bot protection backend blacklist, bot protection configuration blacklist"
category: Bot Protection
---

# Blacklist

A blacklist is a list of visitors that, for one reason or another, are being
denied an access to your store. Blacklist is an opposite meaning to whitelist.

All blacklisted visitors recieve 'access denied' page as a response when they
try to open your store. You can setup this response page in [extension configurations](extension-configuration/#response-page).

In case you need manage blacklist, go to menu `Templates Master` >
`Bot Protection` > `Blacklist` in magento backend.

![Blacklist](/images/m1/extensions/botprotection/backend/blacklist.png)

To edit existing item in blacklist - click on it.

To add new visitor to blacklist click `Add to Blacklist`.

![Add to blacklist](/images/m1/extensions/botprotection/backend/add-to-blacklist.png)

You can set visitor IP if you need to blacklist some specific visitor. Or you
can set IP range if you need to whitelist group of visitors (set `Range` to
`Yes` to do so). Example is on picture below.

![Blacklist rule example](/images/m1/extensions/botprotection/backend/blacklist-example.png)

This picture means that crawler [Yahoo! Slurp](http://www.botreports.com/y/yahoo-slurp.shtml)
from IP 192.168.1.112 is always banned at your store. If you want ban this
crawler from any IP, then set field `Range` to 'Yes' and `IP address from` -
0.0.0.0 , `IP address to` - 255.255.255.255 .

Check section `Additional`. In this section you can specify custom response
page for visitors that match this rule.

You can see when bot was at your store last time in section `Information`.
