---
layout: default
title: MageWorx GeoIP integration
description: Firecheckout integration with MageWorx GeoIP
keywords: MageWorx_GeoIP
category: Firecheckout
---

## MageWorx GeoIP

There is conflict between in-built GeoIP functionality and MageWorx module:

> Cannot redeclare class GeoIP in /home/makelov/public_html/shop/lib/GeoIP/geoip.inc

To fix this error, proceed with the following steps:

 1. Open `app/code/local/MageWorx/GeoIP/Model/Geoip.php` and find the following lines:

    ```php
    if ($config['is_city_db_type']) {
        include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoipcity.inc';
        include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoipregionvars.php';
    } else {
        include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoip.inc';
    }
    ```

    Replace them with:

    ```php
    if (!function_exists('geoip_country_code_by_name')) {
        if ($config['is_city_db_type']) {
            include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoipcity.inc';
            include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoipregionvars.php';
        } else {
            include_once Mage::getBaseDir() . DS . 'lib' . DS . 'GeoIP' . DS . 'geoip.inc';
        }
    }
    ```

Save the file and disable php compilation.
