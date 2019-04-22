---
layout: default
title: Ajax Layered Navigation
description: Magento2 Ajax Layered Navigation
keywords: "magento 2 layered navigation extension, magento 2 layered navigation, magento 2 ajax layered navigation, magento 2 custom layered navigation, magento 2 layered navigation multi select, magento 2 custom product collection with layered navigation, magento create custom layered navigation, magento custom layered navigation filter, layered navigation, ajax layered navigation, ajax filters, multiple filters"
category: Ajax Layered Navigation
---

#### Hide certain filters on specific categories

Catalog -> Categories -> Open some category settings -> Design -> Layout Update XML

Set something like

~~~xml
<body>
    <referenceBlock name="catalog.leftnav">
        <action method="setDisabledAttributeCodes">
            <argument name="codes" xsi:type="array">
                <item name="color" xsi:type="string">color</item>
                <item name="size" xsi:type="string">size</item>
            </argument>
        </action>
    </referenceBlock>
</body>
~~~

![Screen](https://user-images.githubusercontent.com/412612/56489195-99ae3800-64e9-11e9-8bbc-52825ed75632.png)

#### Next up
 -  [Installation](../installation)
 -  [Configuration](../#configuration)
 -  [Use cases](../#use-cases)
 -  [Back to Main Page](../)