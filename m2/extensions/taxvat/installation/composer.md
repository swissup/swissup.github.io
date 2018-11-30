---
layout: default
title: Checkout VAT Installation via Composer
description: magento 2 checkout VAT module installation
keywords: " magento 2 checkout VAT extension "
category: Checkout VAT
exclude_from_search: true
---

# Installation

{% include installation/m2/composer.html site="swissuplabs.com" package="swissup/product-taxvat" modules="Swissup_Core Swissup_Checkout Swissup_Taxvat" %}

#### 3. Complete the installation

Enable VAT field in `Stores > Configuration > Customers > Customer Configuration > Create New Account Options > Show VAT Number on Storefront`. Now you can enable and configure extension in `Stores > Configuration > Swissup Checkout > Tax VAT`.

#### After installing the extension you can go to:

* [Settings][settings]

[settings]: /m2/extensions/taxvat/#settings