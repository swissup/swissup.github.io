---
layout: default
title: Quick Shopping Installation
description: magento quick view module installation
keywords: >
  magento quick view extension, magento quick view product, magento
  quick view module, magento quick shop, quickshopping
category: Quick Shopping
---

# Quick Shopping installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

* Navigate to `System > Configuration > Templates-Master > Quick Shopping` and
enable extension for any store you need.

* In order to display QuickShopping, please do as follows: add the
code mentioned below to list.phtml file. For example, app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml.

**Line 49**

```html
<li class="item<?php if( ++$_iterator == sizeof($_productCollection) ): ?> last<?php endif; ?>">
<a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" /></a>
 --> QuickShopping code should be placed there:
echo Mage::helper('quickshopping')->getViewButton(
$this->__('Quick View'), $_product, $this->getMode(), null, $_productCollection
);
```
**Line 93**

```html
<li class="item<?php if(($i-1)%$_columnCount==0): ?> first<?php elseif($i%$_columnCount==0): ?> last<?php endif; ?>">
<a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->htmlEscape($this->getImageLabel($_product, 'small_image')) ?>" /></a>
```
That's all. Navigate to your store and check how it looks.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

