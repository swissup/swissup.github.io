---
layout: default
title: Geoip installation via Composer
description: How to install geoip for Magento 2
keywords: magento2 geoip installation
category: Geoip
exclude_from_search: true
---

# Installation

{% include installation/m2/composer.html site="swissuplabs.com" package="swissup/geoip" modules="Swissup_Core Swissup_Checkout Swissup_Geoip" preinstall="composer require geoip2/geoip2" %}

#### 3. Download latest free maxmind geolite2 database

Copy and execute the following command in the terminal:

```bash
mkdir -p var/swissup/geoip &&\
cd var/swissup/geoip &&\
wget http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz &&\
mkdir mmdb && tar -xvzf GeoLite2-City.tar.gz -C mmdb --strip 1 &&\
mv mmdb/GeoLite2-City.mmdb GeoLite2-City.mmdb &&\
rm -rf mmdb GeoLite2-City.tar.gz &&\
cd -
```

Want to use more accurate database version? Read the
[article](/m2/extensions/geoip/maxmind-databases/) about database types.
