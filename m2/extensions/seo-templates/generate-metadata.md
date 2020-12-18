---
layout: default
title: Generate Metadata
description: magento 2 metadata templates generate
keywords: " magento metadata templates generate, generate metadata "
category: SEO Metadata Templates
---

# Generate Metadata

Extension generates matadata using previously created templates.

There are three ways to generate metadata:

 -  [Cron](../configuration/#cron-settings);
 -  [CLI command](#cli-command);
 -  [via Magento Admin interface](#via-magento-admin-interface).

### CLI Command

> Since version 1.5.16 available indexes.

When you need to regenerate metadata via console please use **bin\magento indexer:reindex [index_id]** command.

```bash
bin/magento indexer:reindex swissup_seotemplates_category
bin/magento indexer:reindex swissup_seotemplates_product
```

> Since module version 1.5.0.

> REMOVED IN 1.5.16!!!

~~It is possible to generate metadata with **bin\magento** command.~~

```bash
# Removed in 1.5.16. Use indexer instead.
bin/magento swissup:seotemplates:generate
```

### Via Magento Admin interface

Go to Manage Templates grid. You can find `Generate Metadata` button there.
Click on it and you get simple form.

![Generate Metadata](/images/m2/seo-templates/backend/generate-metadata.png)

Click `Generation metadata` button. Wait till process ends. Results you will
see under form.
