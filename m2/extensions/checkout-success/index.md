---
layout: default
title: Checkout Success
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension "
category: Checkout Success
gallery:
  - href: /images/m2/checkout-success/frontend.png
    src: /images/m2/checkout-success/frontend-small.png
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

![Checkout Success layout builder](/images/m2/checkout-success/builder-2.0.gif)

### Contents

 1. [Installation](installation/)
 2. [Changelog](changelog/)
 3. [Settings](settings)
 4. [Miscellaneous scripts snippets](miscellaneous-scripts-snippets/)
 4. [Use cases](use-cases/)
     *  [Show CMS block when payment method used](use-cases/#show-cms-block-when-payment-method-used)
 5. [Third-party modules compatibility](third-party-compatibility/)

### Known issues

In old version of our extension we used "order.success.additional.info"
container to show additional information on success page.

Because of [bug in Magento](https://github.com/magento/magento2/issues/4999),
this block is rendered twice. This bug fixed in Magento 2.2+.

As temporal solution you can apply the
[patch that fixes this issue](https://github.com/magento/magento2/commit/a5166bf85326c10bac416ae67614a2e4ffebf855).
