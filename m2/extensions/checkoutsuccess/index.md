---
layout: default
title: Checkout Success
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension "
category: Checkout Success
gallery:
  - href: /images/m2/checkoutsuccess/frontend.png
    src: /images/m2/checkoutsuccess/frontend-small.png
    w: 1024
    h: 1344
    alt: Success page screenshot
---

# Checkout Success

Checkout Success extension allows you to show more details on checkout success page.
You can show order details which include list of ordered products,
billing and shipping information. Also you can show two static blocks with
additional content and quick customer registration when order placed by guest.

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Features

 -  simple drag-and-drop backend interface
 -  preview checkout success page from backend
 -  quick customer registration on success page

Check video below to see how drag-and-drop interface and preview feature works.

<iframe src="https://player.vimeo.com/video/238076662?color=ffffff&title=0&byline=0&portrait=0" width="720" height="420" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Settings](settings)

### Known issues

In old version of our extension we used "order.success.additional.info"
container to show additional information on success page.

Because of [bug in Magento](https://github.com/magento/magento2/issues/4999),
this block is rendered twice. This bug fixed in Magento 2.2+.

As temporal solution you can apply the
[patch that fixes this issue](https://github.com/magento/magento2/commit/a5166bf85326c10bac416ae67614a2e4ffebf855).
