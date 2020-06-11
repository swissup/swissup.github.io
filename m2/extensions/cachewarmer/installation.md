---
layout: default
title: Cachewarmer installation
description: Cachewarmer installation instructions
keywords: "Cachewarmer installation"
category: Cachewarmer
---

# Installation instructions

0. [Configure and run cron](https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-cron.html)

{% include installation/m2/index.html %}


#### For generate 'Cache Warmer Urls' run indexer

```bash
php bin/magento indexer:reindex swissup_cachewarmer_requestentry
```

Skip processing
```
php bin/magento indexer:reset swissup_cachewarmer_requestentry
```

