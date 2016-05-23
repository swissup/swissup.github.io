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

- blacklist
- whitelist
- suspicious list.

### Blacklist

You can get blacklist at your magento backend. Go to menu `Templates Master` >
`Bot Protection` > `Blacklist`.

Blacklist contains single-IP rules and IP-range rules.

![Blacklist](/images/m1/extensions/botprotection/backend/blacklist.png)

To add new blacklist rule click `Add to Blacklist`.
