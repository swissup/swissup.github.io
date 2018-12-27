---
layout: default
title: MaxMind GeoIP Databases
description: What types of GeoIP databases are provided by MaxMind company
keywords: maxmind
---

# MaxMind Databases

### Database types

Our module uses GeoIP2 City database provided by MaxMind company. There are
[free](https://dev.maxmind.com/geoip/geoip2/geolite2/)
and
[paid](https://www.maxmind.com/en/geoip2-city) versions of geoip database
available.

Both database versions provide the same address information:

 -  Country
 -  Region
 -  City
 -  Postal Code

The only difference is that the paid version is far more accurate and bigger
than the free one.

### Where should I put the database?

Put the database into `<magento_root>/vendor/swissup/module-geoip` folder.

Example of how to download and unpack free database from the terminal:

```bash
cd <magento_root>/vendor/swissup/module-geoip
wget http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz
mkdir mmdb && tar -xvzf GeoLite2-City.tar.gz -C mmdb --strip 1
mv mmdb/GeoLite2-City.mmdb GeoLite2-City.mmdb
rm -rf mmdb GeoLite2-City.tar.gz
```

Make sure that the filename of downloaded database is the same as saved in
[configuration](/m2/extensions/geoip/configuration/#general-section).

> Attention!
>
> Database will eventually become out of date.
> It is recommended to update your database once a month.
