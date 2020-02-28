---
layout: default
title: Cachewarmer Usage
description: How to configurate package
keywords: "cachewarmer setup usage guide"
category: Cachewarmer
---

# Cachewarmer setup

`Store > Configuration` > `Swissup > Cache Warmer`

### Main section

![Main section](/images/m2/cachewarmer/configuration/main.png)

Option                  | Description
------------------------|----------------------------------------------------
Enable                  | Allows to enable/disable cachewarmer per store view
Show Developer Toolbar  | Show cachewarmer toolbar at frontend

### Cron section

![Cron](/images/m2/cachewarmer/configuration/cron.png)

Option    | Description
----------|-----------------------------------------------
Enable    | Enable/disable cron schedule(s). (Yes)
Schedule  | Use the cron expression to schedule mian warmer job(s), e.g. */5 * * * * to run cron every five minutes

### Logging section

![Logging](/images/m2/cachewarmer/configuration/logging.png)

Option           | Description
-----------------|-----------------------------------------------
Enable           | Enable/disable crawler action and fpc result logging. (Yes)
Lifetime         | Log records lifetime (in days)
Cleaner schedule | Use the cron expression to clean old logs.

##### See also


Great! Now you might want to see previous:

- [The quick and simple editor for cron schedule expressions](https://crontab.guru)
- [Installation](/m2/extensions/cachewarmer/installation/)
- [Changelog](/m2/extensions/cachewarmer/changelog/)
