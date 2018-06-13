---
layout: default
title: Crawler
description: Page Crawler documentation
keywords: crawler
category: Cache
---

# Crawler
Crawler is developed to improve FPC hit/miss rate. It also known as Cache Warmer.
Crawler will provide each visitor with perfect shopping experience.

### Contents
1. [Features](#features)
2. [Settings](#settings)
 - [General Section](#general-section)
      - [Store View](#store-view)
      - [Crawler Type](#crawler-type)
      - [Currencies](#currencies)
      - [User Agents](#user-agents)
 - [Perfomance Section](#perfomance-section)
      - [Interval](#interval)
      - [Concurrency](#concurrency)
      - [Max. Average Response Time](#max-average-response-time)
3. [Reports](#reports)
4. [Log](#log)

## Features
- Ability to create unlimited crawlers count with [different settings](#settings)
- Crawler works in concurrent requests, which makes it superfast
- Site perfomance protection:
 - Crawler will be paused automatically while site load time is higher then maximum
    allowed average load time.
 - Cron will run up to 2 crawlers at the same time
- [Reports](#reports) about slow page loading and error response codes are stored for site administrator
- Ability to run crawler from backend interface manually
- Real time crawler's [log](#log)

## Settings

### General section
![General Section](https://cldup.com/SUKkTeNODs-3000x3000.png)

##### Store View
Tells the crawler which store views to process

##### Crawler Type
Allows you to select set of urls that will be crawled _(Multiple sets are allowed
to select too)_.
There are following crawler types available:
- Product
- Category
- Cms

##### Currencies
Make the crawler to process defined currencies. If you have different available
currencies per store view, the crawler will handle them automatically and process
only available currencies per each store view.

##### User Agents
Useful if you are using theme exceptions for some devices and want to crawl them
too.

**Example 1:**

> You are using ArgentoFlat theme as main theme and MobileStar for iPhone and Android.
In this case you need to set the value of User Agents field to `iPhone`. Please
note that **you should not** add the `Android`, because Android will use the same design
as iPhone use.

**Example 2:**

> You are using ArgentoFlat theme as main theme, ArgentoArgento for Chrome browser
and MobileStar for iPhone and Android. In this case you need to set the value of
User Agents field to `Chrome,iPhone`. Please note that **you should not** add
the `Andoid`, because Andoid will use the same design as iPhone use.

### Perfomance section
![Perfomance Section](https://cldup.com/21IsXrOB2k-3000x3000.png)

This section allows you to tune the crawler's performance.

##### Interval
After crawler completes the job it would wait for X hours to begin the work again.

##### Concurrency
Count of concurrent requests spawned by crawler. You can choose from 2 up to 20
threads to use.

##### Max. Average Response Time
Crawler will paused till next cronjob if average load time will exceed the limit.

## Reports
Reports are used to store all slow and unsuccessfull requests. They may be used
as a flag that you should tune up a crawler to decrease the server load.

![Reports](https://cldup.com/E5dfplhuoc-3000x3000.png)

## Log
You may see the real time crawler's log by using corresponding tab.

![Log](https://cldup.com/Np3L2mXtqB-3000x3000.png)
