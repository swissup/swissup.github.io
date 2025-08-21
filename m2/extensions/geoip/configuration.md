---
layout: default
title: Geoip configuration
description: GeoIP module configuration
category: Geoip
---

# Configuration

Module configuration is located at _Stores > Configuration > Swissup > Checkout > GeoIP_
page.

### General section

![General Section](/images/m2/geoip/configuration/general.png?v=2){:width="833" height="454"}

Option                      | Description
----------------------------|---------------------------------
Enable                      | Ability to enable/disable module
Provider                    | Choose data provider to use. Available options: MaxMind Database, MaxMind Service, IpStack.
**MaxMind Database Options**|
License Key                 | Get your License Key at [maxmind site][maxmind_license]
Edition                     | Choose between free and paid database editions.
Download Button             | Use the button for automatic database download. [Read more](/m2/extensions/geoip/maxmind-databases/) about databases.
Automate database updates (daily) | Ability to update the database automatically using Magento cron task. Update will run every day at 5AM.<br/>We also keep the last five database versions in `<magento>/var/swissup/geoip` folder.
**MaxMind Service Options** |
Account ID                  | Get your Account ID at [maxmind site][maxmind_license]
License Key                 | Get your License Key at [maxmind site][maxmind_license]
**IpStack Options**         |
API Key                     | Get your free API key at [ipstack site](https://ipstack.com/product)

[maxmind_license]: https://www.maxmind.com/en/accounts/current/license-key
