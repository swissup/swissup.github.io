---
layout: default
title: Prolabels Installation
description: magento prolabels module installation
keywords: " magento prolabels extension "
category: Prolabels
---

# Installation from Marketplace

{% include installation/m2/marketplace.html %}

#### Labels in Catalog and Search pages

ProLabels module does not require any changes in any templates or other source code files.

> Installation instraction for ProLabels version 1.0.x reqired modification of theme templates to get labels on listing page. You can leave this modifications or rollback them. There are no conflicts with old version.

#### Reindex Labels From Command Line

```bash
    cd <magento_root>
    bin/magento prolabels:reindex:all
```

###### After installing the extension you can go to:

* [Configuration](../configuration/)
* [Admin Interface](../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)