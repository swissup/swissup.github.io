---
layout: default
title: Geoip Changelog
description: Geoip changelog
keywords: Geoip changelog
category: Geoip
---

# Changelog

### Version 1.5.1

> Jan 13, 2021

  - Checkout modules dropdown over module config at System Configuration.
  - Convert section "Swissup Checkout" into item "Checkout" under section "Swissup" at System Config page.

### Version 1.5.0

> May 8, 2020

 -  You can now [download and update](/m2/extensions/geoip/configuration/) MaxMind
    database in just one click.

    > Database is now stored in `<magento_root>/var/swissup/geoip/maxmind.mmdb` file.
    >
    > In order to keep GeoIP functionality working for our existing customers,
    > we use a fallback to the configured filename (GeoLite2-City.mmdb by default)
    > in the same directory if maxmind.mmdb is not found.

### Version 1.4.0

> Jan 8, 2020

 -  16 locales added to translate backend and frontend phrases:
    - Arabic
    - Chinese
    - Dutch
    - French
    - Hebrew
    - Italian
    - German
    - Japanese
    - Norwegian
    - Korean
    - Polish
    - Portuguese
    - Russian
    - Spanish
    - Swedish
    - Ukrainian

### Version 1.3.1

> Sep 27, 2019

 -  Magento Coding Standard fixes

### Version 1.3.0

> Jun 4, 2019

 -  Two new [data providers](/m2/extensions/geoip/configuration/) added:
    - [MaxMind Service](https://www.maxmind.com/en/geoip2-precision-city-service)
    - [IpStack Service](https://ipstack.com/)

### Version 1.2.1

> May 31, 2019

 -  PHP \~7.0.13 compatibility

### Version 1.2.0

> Apr 19, 2019

 -  Fixed invalid shipping methods on initial page load
 -  A new place for MaxMind database to keep vendor directory clean: `var/swissup/geoip/`.
    Old location (`vendor/swissup/module-geoip/`) will still work fine though.
 -  Code cleanup

### Version 1.1.3

> Mar 27, 2019

 -  Fix Magento 2.3.1 compatibility (lose php 5.6)

### Version 1.1.2

> Dec 04, 2018

 -  Corrected path to the MaxMind database in config field

### Version 1.1.1

**Fixes**
 -  Fix maxmind file location
 -  Fix bug with window.checkoutConfig.defaultCountryId

### Version 1.1.0

 -  Rename composer package to swissup/module-geoip

### Version 1.0.4

 -  Translation file added

### Version 1.0.3

 -  Acl fixes

### Version 1.0.2

**Fixes**

 -  2.0.9 compatability was added

**Features**

 -  Config moved to Swissup Checkout section
 -  Enable/Disable option was added

### Version 1.0.1

 -  Config moved to `Swissup Checkout` section

### Version 1.0.0

 -  Initial Release
