---
layout: default
title: Easy Color Swatches Installation
description: magento color swatches module installation
keywords: " magento color swatches, magento color swatch extension, magento color
swatch, add color swatches magento "
category: Easy Color Swatches
---

# Easy Color Swatches installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. In order to show EasyColorSwatches images in the category listing, please add the following code to your products listing template `app/design/frontend/base/default/template/catalog/product/list.phtml`.

 ~ Line 55 (Just before <h2 class="product-name"><a...)

```
<?php echo Mage::helper('easycolorswatches')->getCategoryProductColorSwatch($_product, $this->getMode()) ?>
```

~ Line 99 (Just before <h2 class="product-name"><a...)

```
<?php echo Mage::helper('easycolorswatches')->getCategoryProductColorSwatch($_product, $this->getMode()) ?>
```

4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

* Navigate to `System > Configuration > Templates-Master > EasyColorSwatches` and
enable extension for any store you need.

That's all. Navigate to your store and check how it looks.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)