---
layout: default
title: Legacy Mysql Search
description: magento mysql search module for 2.4
keywords: >
  magento search extension, mysql, 2.4
category: Legacy Mysql Search
---

# Legacy Mysql Search

Magento2 module for restore possibility to use mysql search in 2.4.


### F.A.Q

#### How to install Magento 2.4.0 without Elasticsearch require during installation?

Use --disable-modules option

```
bin/magento setup:install -h
...
--disable-modules[=DISABLE-MODULES] List of comma-separated module names, that must be avoided during installation.
```

```
php bin/magento setup:install --disable-modules=Magento_InventoryElasticsearch,Magento_Elasticsearch7,Magento_Elasticsearch6,Magento_Elasticsearch
```

After installing enable all elastic search module with below command.

```bash
php bin/magento module:enable Magento_Elasticsearch Magento_Elasticsearch6 Magento_Elasticsearch7 Magento_InventoryElasticsearch
```
#### How can I check current search engine?

You can check your current search engine using:

```
bin/magento config:show catalog/search/engine
```

#### How can I change search engine?

You can change your current search engine using:

```
bin/magento config:set catalog/search/engine 'lmysql'
```


### Contents

1. [Installation](installation/)
2. [Configuration](configuration/)
3. [Changelog](changelog/)
