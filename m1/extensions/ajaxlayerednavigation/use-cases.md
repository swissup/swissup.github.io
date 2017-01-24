---
layout: default
title: Ajax Layered Navigation
description:
keywords: "magento layered navigation, magento ajax layered navigation, magento improved navigation, magento extension, magento module"
category: Ajax Layered Navigation
---

# Use cases

### Using brand logo images as input elements in layered navigation block

If you want brands to be displayed as images, please go `Admin-Templates-Master-Ajax Layered Navigation-Manage filters` and do as follows:

-   `Select and click on the attribute to be edited from the grid.`
-   `You can see the Attribute information **General tab**. Please select image value in the **Display settings field**.`
-   `Now you can configure the options of the attribute at **Options** tab. Click on the attribute you need.`
-   `At **Settings tab** please load the image to be shown in the Layered Image field.`
-   `Press **Save** button.`

![Ajax Layered Navigation configuration](/images/m1/extensions/ajax-layered-navigation/use-case.png)

### Placing layered navigation block in main column on category page

Go to ftp `app/desing/frontend/base/default/layout/tm/ajaxlayerednavigation.xml`, edit file and uncomment the line of the following code:

After please comment the following section:

Save file and refresh magento cache.

#### You can also check:

*   [Installation](../installation/)
*   [Managing filterable attributes and ranges](../managing-attributes-ranges/)
*   [Configuration](../configuration/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)