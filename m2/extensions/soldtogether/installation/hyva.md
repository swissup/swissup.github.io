---
layout: default
title: Sold Together Installation for Hyvä Theme
nav_title: Hyvä
description: How to install Sold Together for Magento 2 with Hyvä Theme
keywords: sold together hyva installation
category: SoldTogether
exclude_from_search: true
---

# Hyvä Theme Installation

{% include installation/m2/hyva.html package="swissup/hyva-sold-together" %}

## Build relations

``` bash
# Build relations for "Customer Also Bought" block
php bin/magento swissup:soldtogether:customer:reindex

# Build relations for "Frequently Bought Together" block
php bin/magento swissup:soldtogether:order:reindex
```

###### After installing the extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
