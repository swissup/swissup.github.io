---
layout: default
title: Geoip configuration
description: GeoIP module configuration
category: Geoip
---

# Configuration

Module configuration is located at _Stores > Configuration > Swissup Checkout > GeoIP_
page.

### General section

![General Section](/images/m2/geoip/configuration/general.png)

Option                    | Description
--------------------------|------------
Enable                    | Ability to enable/disable module
Provider                  | Choose data provider to use. Available options: MaxMind Database, MaxMind Service, IpStack.
**MaxMind Database Options** |
Database filename         | Database filename unpacked into `<magento_root>/var/swissup/geoip/` folder. See [MaxMind Databases](/m2/extensions/geoip/maxmind-databases/) page.
**MaxMind Service Options** |
Account ID                | Get your Account ID at [maxmind site](https://www.maxmind.com/en/my_license_key)
License Key               | Get your License Key at [maxmind site](https://www.maxmind.com/en/my_license_key)
**IpStack Options**       |
API Key                   | Get your free API key at [ipstack site](https://ipstack.com/product)
