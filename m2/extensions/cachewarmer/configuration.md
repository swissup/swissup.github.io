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

### Indexer section
![Indexer](/images/m2/cachewarmer/configuration/indexer.png)

Option        | Description
--------------|-----------------------------------------------
Stores        | Select store(s). (if empty mean all selected)
Page Types    | Select page types. (if empty mean all selected)
Customer Group| Select customer groups. (if empty mean all selected)
Currency      | Select currencies. (if empty mean all selected)

when we run the command
```
bin/magento index:reindex swissup_cachewarmer_requestentry
```
indexing process will fill cache warmer request entry table only by these options


### Basic Authentication

![Basic Authentication](/images/m2/cachewarmer/configuration/auth.png)

Option    | Description
----------|-----------------------------------------------
Enable    | Enable/disable Basic Authentication. (No)
Username  | Basic authentication "user"
Password  | Basic authentication "password"

### Cron section

![Cron](/images/m2/cachewarmer/configuration/cron.png)

Option    | Description
----------|-----------------------------------------------
Enable    | Enable/disable cron schedule(s). (Yes)
Schedule  | Use the cron expression to schedule mian warmer job(s), e.g. */5 * * * * to run cron every five minutes
Urls Limit| Limits URLs per one cron task. Max 1000.

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
