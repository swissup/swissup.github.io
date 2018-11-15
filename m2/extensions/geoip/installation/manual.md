---
layout: default
title: Geoip installation instructions
description: How to install geoip for Magento 2
keywords: magento2 geoip installation
category: Geoip
---

# Manual Installation

{% include installation/m2/manual.html site="swissuplabs.com" package="swissup/geoip" modules="Swissup_Core Swissup_Checkout Swissup_Geoip" preinstall="composer require geoip2/geoip2" %}

#### Download latest free maxmind geolite2 database

```sh
cd [magento root]/vendor/swissup/module-geoip
wget http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.tar.gz
tar -xvzf GeoLite2-City.tar.gz GeoLite2-City_20180925/GeoLite2-City.mmdb
mv GeoLite2-City_20180925/GeoLite2-City.mmdb GeoLite2-City.mmdb
rm -rf GeoLite2-City_* GeoLite2-City.tar.gz
```
