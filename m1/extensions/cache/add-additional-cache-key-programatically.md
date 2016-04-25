---
layout: default
title: Add additional cache key programatically
description: > 
    How to integrate third-party extension, that adds additional cache key 
    paramenters or modifiers
keywords: cache, fpc, additional cache key
category: Cache
---

# How to add additional cache keys

Lets assume that some third-party extension has it's own rendering logic for
mobile users.

Usually it will be some method in extension's helper: 
`Mage::helper('module')->isMobile()`

TM_Cache module has a special event to take this, or any other flag into 
consideretion, while cache entry is creating or loading.

1.  Add the following code in third-party config.xml file (`events` section):

    ```xml
    <tm_cache_prepare_cache_key>
        <observers>
            <VENDOR_MODULE_tmcache_key>
                <class>MODULE/observer</class>
                <method>tmcachePrepareCacheKey</method>
            </VENDOR_MODULE_tmcache_key>
        </observers>
    </tm_cache_prepare_cache_key>
    ```

2.  Here is an example of `tmcachePrepareCacheKey` method:

    ```php
    public function tmcachePrepareCacheKey($object)
    {
        $params = $object->getParams();
        $params->addData(array(
            'MODULE_is_mobile' => Mage::helper('module')->isMobile()
        ));
    }
    ```

That's all. Now Full Page Cache module will depend on third-party module logic 
too.

#### Next up

- [External cache model setup](/m1/extensions/cache/external-cache-model-setup/)
- [When cache is automatically refreshed?](/m1/extensions/cache/when-cache-is-automatically-refreshed/)
