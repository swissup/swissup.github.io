---
layout: default
title: Ajax Layered Navigation Installation
description: magento ajax layered navigation installation
keywords: " magento layered navigation, magentoajax layered navigation, magento improved navigation, magento module installation "
category: Ajax Layered Navigation
---

# Ajax Layered Navigation installation instructions

Please follow next steps to complete the installation:

* Turn store compilation off:

    Navigate to `Admin > Tools > Compilation` and deactivate the compilation
    mode for your store.

* Check if your Magento store cache is enabled.

* Copy all files into your magento directory:

    Simply copy all files from `"extension source x.x.x"` directory into your
    magento store directory.

* Refresh your magento store cache.

* Refresh your admin user access rights:

    Simply logout from your store admin and then login back.

* Navigate to `System > Configuration > Templates-Master > Ajax Layered
Navigation` and enable extension for any store you need.

* Add Ajax Layered Navigation to the Home Page by navigating to Magento Admin >
CMS > Page > Home Page > Design Tab. Please add the following code:

```html
<reference name="left">
    <block type="ajaxlayerednavigation/layer_view" name="my.catalog.leftnav" before="-" template="tm/ajaxlayerednavigation/layer/homeview.phtml"/>
```

That's all. Navigate to your store and check how it looks.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
