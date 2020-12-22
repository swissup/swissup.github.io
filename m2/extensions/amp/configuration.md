---
layout: default
title: AMP configuration
description: Configuration options of AMP extension for Magento 2
keywords: amp configuration, amp options
category: Accelerated Mobile Pages
---

# Configuration

AMP configuration is located at
_Stores > Configuration > Swissup > Accelerated Mobile Pages_.

### General

![General section](/images/m2/amp/configuration/section-general.png)

Option | Description
-------|------------
Enabled | Enable/Disable AMP module
Persistent browsing | Set "No", and all links on AMP site will direct to normal site
Use AMP for all supported pages | Set "No" to select supported pages manually
Use AMP at | Select the pages that will use AMP
Exclude URLs from AMP | Place URLs which should not be converted to AMP. For example, some third-party modules create product pages which don't work on AMP.
Force AMP activation on | Allows to force AMP activation for mobile and tablet devices

### Web

![Web section](/images/m2/amp/configuration/section-web.png)

Option | Description
-------|------------
Cookie Restriction Mode | Enable/Disable cookie restriction mode. This config depends on `Stores > Configuration > General > Web > Default Cookie Settings > Cookie Restriction Mode`.

### Product Page

![Product page section](/images/m2/amp/configuration/section-product.png)

Option | Description
-------|------------
Use full "Add to Cart" mode for all supported products | Allows to switch between full "Add to Cart" section and "Configure and Buy" button. "Configure and Buy" mode will hide "Add to Cart" button and show "Configure and Buy" link instead, that will open a desktop version of the product page.
Use full "Add to Cart" mode for | Enable full "Add to Cart" mode for selected product types

### Category Page

![Category page section](/images/m2/amp/configuration/section-category.png)

Option | Description
-------|------------
Disable Layered Navigation | You can disable layered navigation on AMP if your store uses extension which does not work without javascript

### Customization

![Customization](/images/m2/amp/configuration/section-customization.png)

In the `Custom Styles` field you can place styles which will be included on AMP.
CSS and SCSS syntax supported.

##### Next Up

 -  [Back to Home](/m2/extensions/amp/)
 -  [Customization](../customization/)
    -  [Homepage](../customization/homepage/)
    -  [Footer](../customization/footer/)
    -  [Design](../customization/design/)
