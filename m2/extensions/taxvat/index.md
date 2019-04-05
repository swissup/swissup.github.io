---
layout: default
title: Checkout VAT
description: magento 2 checkout VAT module documentation
keywords: checkout, vat, taxvat, zero-tax, zero tax, tax-free, taxfree
category: Checkout VAT
---

# Checkout VAT

Checkout VAT extension allows you to validate VAT field in checkout shipping and
billing address forms using VIES validation service. You can disallow order
placement if VAT is not valid, set tax to zero when VAT number is valid.

The module works well with both Firecheckout and Standard onepage checkout modules.

> Please note that VIES service can be offline sometimes and customer
> will be able to place order with invalid VAT number. Tax-free order **will not**
> work in this case.

You can read more about VIES at their [FAQ](http://ec.europa.eu/taxation_customs/vies/faq.html),
and [Help](http://ec.europa.eu/taxation_customs/vies/help.html) pages.

{% include gallery.html images=site.data.gallery.m2.taxvat.index class="scroll phone-up-1 tablet-up-3 photoswipe" %}

### Contents

 -  [Installation](installation/)
 -  [Changelog](changelog/)
 -  [Configuration](configuration/)
 -  [Use Cases](use-cases/)
    - [How to enable zero-tax orders using taxvat module](use-cases/#how-to-enable-zero-tax-orders)?
    - [How to enable zero-tax orders without taxvat module?](use-cases/zero-tax-order/)
