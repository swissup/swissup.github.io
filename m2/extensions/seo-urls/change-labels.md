---
layout: default
title: Chaneg Labels
description: SEO URLs Configuration - attribute labels
keywords: seo urls, options, configuration, attribute labels, attribute values
category: Seo Urls
---

# Change Attribute Labels and Values used in URL
{:.no_toc}

* TOC
{:toc}

SEO URLs module provides additional interfaces to help store owners maintain attribute labels and values used in URLs for layered navigation. This feature is available since module version 1.4.0.

By default module generate URLs using original attribute labels and value labels - _http://example.com/gear/bags/color-black/material-polyester.html_.

Some one can feel this URL to long and like to have something shorter - _http://example.com/gear/bags/clr-bl/mtr-poly.html_.

You can achieve this easily with SEO URLs module. Open Product Attribute 'Color' in Magento Admin and set in-URL labels with new values at "SEO URLs" tab.

![Attribute in-URL labels](/images/m2/seo-urls/attribute-labels.png)

Then do similar with 'Material' attribute and voila.

Use fields in column "All Stores" to set values for all stores or column with store name to set new labels for that specific store.

Feel free to use different UTF symbols to make URLs in your store more attractive. For example you can have such fancy URLs for stock filter:

```
http://argento.mage/women/stock-✓.html
http://argento.mage/women/stock-✗.html
```

You can also use "SEO URLs" tab to make all labels strictly with English characters. It can be very handy for clients with non-English stores who wants to have only English characters in URLs.

#### Next up
{:.no_toc}

 -  [Back to Main Page](../)

