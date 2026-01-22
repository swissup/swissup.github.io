---
layout: default
title: MaxMind GeoIP Databases
description: What types of GeoIP databases are provided by MaxMind company
keywords: maxmind
category: Geo Address IP
---

# MaxMind Databases

### Database types

Our module alows to integrate GeoIP2 City database provided by MaxMind company. There are
[free](https://dev.maxmind.com/geoip/geoip2/geolite2/)
and
[paid](https://www.maxmind.com/en/geoip2-city) versions of geoip database
available. We don't distribute database with our module.

Both database versions provide the same address information:

 -  Country
 -  Region
 -  City
 -  Postal Code

The only difference is that the paid version is far more accurate and bigger
than the free one.

### How to download the database?

 1. [Sign up for a MaxMind account](https://www.maxmind.com/en/geolite2/signup) (no purchase required)
 2. Set your password and create a [license key](https://www.maxmind.com/en/accounts/current/license-key)
 3. Accept [agreement](https://www.maxmind.com/en/accounts/1214134/geolite2/eula) to use GeoLite database.
 4. Enter your license key in [GeoIP configuration](/m2/extensions/geoip/configuration/)
    and press "Download Database" button.

    > If you don't want to use automatic downloader for some reason, you can
    > download the archive manually from the
    > [GeoIP download page](https://www.maxmind.com/en/accounts/current/geoip/downloads),
    > unpack it, and copy *.mmdb file to the <magento_root>/var/swissup/geoip directory.
    > Then rename the database file into maxmind.mmdb.

 5. After download is completed you'll see the date of last update below
    "Download Database" button.
