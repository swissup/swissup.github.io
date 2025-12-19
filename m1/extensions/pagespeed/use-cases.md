---
layout: default
title: Page speed use cases
description: magento page speed module
keywords: >
  magento speed extension, increase magento speed, improve magento speed,
  optimize magento speed, magento speed optimization, magento page speed module,
  pagespeed
category: Page Speed
---


# Use cases

#### How to optimise css delivery and generate critical css for your store

Go Admin > System > Configuration.

Go Admin > System > Templates-Master > Pagespeed > Minify Css

Set Merge CSS Files to "Yes"

Flush css & js cache

Go Admin > System > Templates-Master > Pagespeed > Optimize CSS Delivery.

Enable.

Open online [Critical Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/)

Copy your store url to (1) URL field.

Open your store main page. View page Source. Open merged css file. Copy his content to
to critical path css generator (2) FULL CSS field.

Click on button 'Create Critical Path CSS'.

Wait.

Copy generated critical css to config option Critical CSS

Save.

Flush Cache.

Check result. [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=)


#### You can also check:

*   [Installation](../installation/)
*   [Configuration](../config-options/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)