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

> Since module version 1.5.0.

It is possible to generate metadata with **bin\magento** command.

```bash
bin/magento swissup:seotemplates:generate
```

Command help:

![CLI command help](/images/m2/seo-templates/cli/help.png)

Command output example:

![CLI command example](/images/m2/seo-templates/cli/example.png)

### Via Magento Admin interface

Go to Manage Templates grid. You can find `Generate Metadata` button there.
Click on it and you get simple form.

![Generate Metadata](/images/m2/seo-templates/backend/generate-metadata.png)

Click `Generation metadata` button. Wait till process ends. Results you will
see under form.
