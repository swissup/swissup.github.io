---
layout: default
title: Prolabels Installation
description: magento product labels module installation
keywords: >
  magento product labels extension, magento labels, adding labels to
  magento category page, magento module, prolabels
category: Prolabels
---

# Prolabels installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

Navigate to `System > Configuration > Templates-Master > Prolabels` and
enable extension for any store you need.

In order to display labels on **category page**, please do as follows:

 *  add the code mentioned below to `list.phtml` file. For example,
    app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml .

    Prolabels code should be placed in 2 places.

    **Line 50**

    ```php
    <a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" /></a
    ```

    **Change to**

    ```php
    <div class="prolabel-wrapper">
        <?php echo Mage::helper('prolabels')->getLabel($_product, 'category'); ?>
        <a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" /></a>
    </div>
    ```

    **Line 94**

    ```php
    <a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" /></a>
    ```

    **Change to**

    ```php
    <div class="prolabel-wrapper">
    <?php echo Mage::helper('prolabels')->getLabel($_product, 'category'); ?>
    <a href="<?php echo $_product->getProductUrl() ?>" title="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" class="product-image"><img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" /></a>
    </div>
    ```

In order to display labels on **product page**, please do as follows:

 *  add the code mentioned below to `media.phtml` file. For example,
    app/design/frontend/[package]/[theme]/template/catalog/product/view/media.phtml .

    Prolabels code should be placed in 2 places.

    **Line 38**

    ```php
    <p class="product-image product-image-zoom">
    <?php
    $_img = '<img id="image" src="'.$this->helper('catalog/image')->init($_product, 'image').'" alt="'.$this->htmlEscape($this->getImageLabel()).'" title="'.$this->htmlEscape($this->getImageLabel()).'" />';
    ```

    **Change to**

    ```php
    <div class="prolabel-wrapper">
    <?php echo Mage::helper('prolabels')->getLabel($_product, 'product'); ?>
    <p class="product-image product-image-zoom">
    <?php
    $_img = '<img id="image" src="'.$this->helper('catalog/image')->init($_product, 'image').'" alt="'.$this->htmlEscape($this->getImageLabel()).'" title="'.$this->htmlEscape($this->getImageLabel()).'" />';
    echo $_helper->productAttribute($_product, $_img, 'image');
    ?>
    </p>
    </div>
    ```

    **Line 60**

    ```php
    <p class="product-image">
    <?php
    $_img = '<img src="'.$this->helper('catalog/image')->init($_product, 'image')->resize(265).'" alt="'.$this->htmlEscape($this->getImageLabel()).'" title="'.$this->htmlEscape($this->getImageLabel()).'" />';
    ```

    **Change to**

    ```php
    <div class="prolabel-wrapper">
    <?php echo Mage::helper('prolabels')->getLabel($_product, 'product'); ?>
    <p class="product-image">
    <?php
    $_img = '<img src="'.$this->helper('catalog/image')->init($_product, 'image')->resize(265).'" alt="'.$this->htmlEscape($this->getImageLabel()).'" title="'.$this->htmlEscape($this->getImageLabel()).'" />';
    echo $_helper->productAttribute($_product, $_img, 'image');
    ?>
    </p>
    </div>
    ```

In order to display labels on **category page on mobile devices**, please do
as follows:

 *  add the code mentioned below to `list.phtml` file. For example,
    app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml.

    ```php
    <?php echo $this->getLayout()->createBlock('prolabels/category')->setProduct($_product)->toHtml(); ?>
    ```

In order to display labels on **product page on mobile devices**, please do as
follows:

 *  add the code mentioned below to list.phtml file. For example,
    app/design/frontend/[package]/[theme]/template/catalog/product/view.phtml .

    ```php
    <?php echo $this->getLayout()->createBlock('prolabels/label')->toHtml(); ?>
    ```

That's all. Now you are ready to create label for
[**On Sale**](../backend/on-sale-label/) or
[**New**](../backend/new-product-label/) products.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)