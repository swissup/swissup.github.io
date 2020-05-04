---
layout: default
title: SoldTogether Installation via Composer
description: magento2 soldtogether module installation
keywords: " magento soldtogether extension "
category: SoldTogether
exclude_from_search: true
---

# Installation

{% include installation/m2/composer.html package="swissup/sold-together" %}

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
