---
layout: default
title: FAQ
description: faq about seo freidnly urls
keywords: seo urls faq, layered navigation faq
category: Seo Urls
---

# FAQ
{:.no_toc}

* TOC
{:toc}

## How extension build urls in layerd navigation

Extension uses attribute labels and its value labels to create urls for filters in layered navigation. Extension converts labels to lower case, remove forbidden characters (`.`, `&`) and replace spaces with dashes. Also extension considers attribute sort order and create always the same url for same filter set. And order in which filters were applied is not important.

So you have to make sure that your store do not have same labels in one attribute. Otherwise magento can show incorrect results for applied filters in layered navigation.

## Is it compatible with your Ajax Layered Navigation

SEO URLs extension works greate with [Swissup Ajax Layered Navigation](../../ajaxlayerednavigation/#frontend) version 1.0.2 and higher.
