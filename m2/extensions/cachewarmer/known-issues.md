---
layout: default
title: Cachewarmer Known Issues
description: Cachewarmer known issues
keywords: magento extension cachewarmer known issues
category: Cachewarmer
---

# Known Issues

### Empty Index And/OR User Agent table(swissup_cachewarmer_useragent)

Go to your Magento root dir

Get MySQL CLI credentials

```bash
php -r '$a = include("app/etc/env.php"); extract($a["db"]["connection"]["default"]); echo "mysql -u$username -h$host -p$password --database=$dbname\n";'
```
You will get your command for entering into mysql console something like below

```
mysql -udbusername -hlocalhost -psecretpassword --database=magento_db
```

run the command and enter to MySQL console

Check `swissup_cachewarmer_useragent` and `swissup_cachewarmer_requestentry` tables

```mysql

SELECT * FROM swissup_cachewarmer_useragent;
SELECT COUNT(*) FROM swissup_cachewarmer_requestentry;
```

If it is empty add the default user agent

```mysql
INSERT IGNORE INTO swissup_cachewarmer_useragent VALUES (1, '');
SELECT * FROM swissup_cachewarmer_useragent;
exit
```

Now you can try to reindex the cachewarmer's index

```bash
bin/magento index:reindex swissup_cachewarmer_requestentry
```

Finally enter to your MySQL console and run the command below to check `swissup_cachewarmer_requestentry` table
```mysql
SELECT COUNT(*) FROM swissup_cachewarmer_requestentry;
```