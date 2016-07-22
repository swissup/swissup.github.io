---
layout: default
title: Checkout Success
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension "
category: Checkout Success
gallery:
  - href: /images/m2/checkoutsuccess/frontend.png
    src: /images/m2/checkoutsuccess/frontend-small.png
    w: 828
    h: 1260
    alt: Success page screenshot
---

# Checkout Success

Checkout Success extension allows you to show more details on checkout success page.
You can enable to show order details which include list of ordered products,
billing and shipping information. Also you can show two static blocks with
additional information for customer.

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

1. [Installation](installation/)
2. [Settings](#settings)
3. [Known issues](#known-issues)

## Settings

![Settings](/images/m2/checkoutsuccess/settings.png)

Section | Option | Description
--------|--------|------------
**General** | |
| Enabled | Show Detailed Information
| Show Detailed Information | Enable order information on success page.
**Additional Content** | |
| Above order information | Select static block to show before order information.
| Below order information | Select static block to show after order information.

## Known issues

In our extension we use "order.success.additional.info" container to show
additional information on success page.

Because of [bug in Magento](https://github.com/magento/magento2/issues/4999),
this block is rendered twice.

As temporal solution you can apply the
[patch that fixes this issue](https://github.com/magento/magento2/commit/a5166bf85326c10bac416ae67614a2e4ffebf855).

