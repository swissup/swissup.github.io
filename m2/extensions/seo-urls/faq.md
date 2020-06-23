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

Extension uses attribute labels and its value labels to create urls for filters in layered navigation. Extension tries to find [in-URL label](../change-labels) for filter (attribute). If nothing found the it converts origignal store labels to lower case, remove forbidden characters (`.`, `&`) and replace spaces with dashes. Also extension considers attribute sort order and create always the same url for same filter set. And order in which filters were applied is not important.

So you have to make sure that your store do not have same labels in one attribute. Otherwise magento can show incorrect results for applied filters in layered navigation.

## Is it compatible with your Ajax Layered Navigation

SEO URLs extension works great with [Swissup Ajax Layered Navigation](../../ajaxlayerednavigation/#frontend) version 1.0.2 and higher.

## How to make URLs in category filter same as URLs of child categories

From time to time we get question from our customers `How to remove word "category" from category filter url?` (or leading dash when they figured out how to do this with config).

**Answer**: Unfortunatly it is not possible within the SEO Urls module. You can only change word "category" to any other word. Magento builds block with category filters in layered navigation. When you applying category filter it means that you are browsing current category with applied filter of child category. But not the child category itself. When this filter applied page still has canonical URL of current category and not child one. All metadata of the page says that it is current category.

Long story short, SEO Urls module can't make category filter urls same as child categories urls.

The only possible solution is customer development.
