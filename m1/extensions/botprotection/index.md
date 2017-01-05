---
layout: default
title: Bot Protection
description: magento bot protection generalinfo
keywords: "magento bot protection"
category: Bot Protection
---

# Bot Protection

Extension offers you one more line of defence from unwelcome visitors like
crawlers, spam bots, spiders and other robots that try to steal your content.

And in the same time you can be sure that no one of Google or Bing robots will
be blocked (except you want to block them).

 1. [Installation](installation/)
 2. [Backend](backend/)
    - [Extension configuration](backend/extension-configuration/)
    - [Magento Visitors Log](backend/magento-visitor-log/)
    - [Whitelist](backend/whitelist/)
    - [Blakclist](backend/blacklist/)
    - [Suspicious List](backend/suspicious-list/)
 3. [Frontend](frontend/)
 4. [Changelog](changelog/)

##### How does Bot Protection works

Bot Protection is extension for Magento 1.x.

There are two levels at your hosting: web server and Magento. At first,
request from visitor comes to web server. If web server does not know what to
do with request, then it sends request further to Magento. Magento logs this
request and Bot Protection starts its "magic". BP hooks request and checks
"is this request from blacklisted visitor?". For blacklisted visitor Bot
Protection extension shows "access denied" page with response code 403
(Forbidden). and the rest is on crawler's side. "Good" crawler has to
understand that code 403 means "you are not not welcomed at this site" and
stop bother you.
