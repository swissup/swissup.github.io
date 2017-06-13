---
layout: default
title: Lightbox and Awesomebar Banners
description: How to create lightbox and awesomebar banners
category: Easy Banners
permalink: /m1/extensions/easybanners/use-cases/lightbox-and-awesomebar-banners/
sidebar: sidebar.md
---

Our module allows you to show an important information for your customers as a
banner in Lightbox window or Awesomebar panel:

{% include gallery.html images=site.data.gallery.m1.easy-banners.use-cases.lightbox-and-awesomebar-banners class="phone-up-2 tablet-up-2 photoswipe scroll" %}

In order to create **Lighbox** or **Awesomebar** banner just select corresponding
value in "Type" field in "General Information" tab:

![Lightbox Banner Type](/images/m1/easy-banners/use-cases/lightbox-and-awesomebar/banner-type-lightbox.png)

Additionally you can use special 'client-side' [conditions][banner_conditions]
for these banners:

![Lightbox and Awesomebar Conditions](/images/m1/easy-banners/use-cases/lightbox-and-awesomebar/banner-type-lightbox-conditions.png)

Condition                           | Description
------------------------------------|---------------------------------------------------------------
Display Count per Customer          | Do not show banner more than X times for particular customer
Display Count per Customer (Per Day)    | Do not show banner more than X times per day for particular customer
Display Count per Customer (Per Week)   | Do not show banner more than X times per week for particular customer
Display Count per Customer (Per Month)  | Do not show banner more than X times per month for particular customer
Customer browsing time (seconds)    | Show banner after X seconds of browsing time (idle + activity)
Customer inactivity time (seconds)  | Show banner after X seconds of idle time
Customer activity time (seconds)    | Show banner after X seconds of active browsing
Scroll offset                       | Show banner customer scrolled down for more than X pixels

#### Next Up:

 -  [Back to all use cases](../../use-cases/)
 -  [More about banner conditions][banner_conditions]

[banner_conditions]: ../../backend/manage-banners/#conditions