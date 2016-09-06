---
layout: default
title: Checkout VAT
description: magento 2 checkout VAT module documentation
keywords: " magento 2 checkout VAT extension "
category: Checkout VAT
gallery:
  - href: /images/m2/taxvat/firecheckout.png
    src: /images/m2/taxvat/firecheckout-small.png
    w: 1270
    h: 930
    alt: Checkout VAT firecheckout screenshot
  - href: /images/m2/taxvat/frontend-shipping.png
    src: /images/m2/taxvat/frontend-shipping-small.png
    w: 820
    h: 920
    alt: Checkout VAT shipping form screenshot
  - href: /images/m2/taxvat/frontend-payment.png
    src: /images/m2/taxvat/frontend-payment-small.png
    w: 1270
    h: 1530
    alt: Checkout VAT payment form screenshot
---

# Checkout VAT

Checkout VAT extension allows you to validate VAT field in checkout shipping and
billing address forms using VIES validation service. Field is validated when
you press `Next` and `Place Order` buttons. If field is invalid, you will receive
error message. Also you can select if VAT field is required or not.

> Please note that VIES service can be offline sometimes and customer
will be able to place order with invalid VAT number

You can read more avout VIES here: [VIES FAQ](http://ec.europa.eu/taxation_customs/vies/faq.html),
[VIES Help](http://ec.europa.eu/taxation_customs/vies/help.html)

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

1. [Installation](installation/)
2. [Settings](#settings)

## Settings

Following config must be set to `Yes` in order validation to work:
`Stores > Configuration > Customers > Customer Configuration > Create New Account Options > Show VAT Number on Storefront`

![Settings](/images/m2/taxvat/settings.png)

##### Validate VAT number using online VIES validation

Enable validation

##### Show VAT field as required

Make VAT field required
