---
layout: default
title: Prolables Installation
description: magento prolables module installation
keywords: " magento prolables extension "
category: Prolables
---

# Prolables installation instructions

#### Installation

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_ProLabels
    bin/magento setup:upgrade
    ```

#### Labels in Catalog and Search pages

##### Product Image Labels

replace list and grid image code

```php
    <a href="<?php /* @escapeNotVerified */ echo $_product->getProductUrl() ?>" class="product photo product-item-photo" tabindex="-1">
        <?php echo $productImage->toHtml(); ?>
    </a>
```

* by

```php
<div class="prolabels-wrapper">
    <?php
        $prolabelsCatalogHelper = $this->helper('Swissup\ProLabels\Helper\Catalog');
        echo $prolabelsCatalogHelper->getProductLabels($_product);
    ?>
    <?php // Product Image ?>
    <a href="<?php /* @escapeNotVerified */ echo $_product->getProductUrl() ?>" class="product photo product-item-photo" tabindex="-1">
        <?php echo $productImage->toHtml(); ?>
    </a>
</div>
```

##### Content Catalog Labels

add code to any place in catalog list.phtml

```php
    <div class="prolabels-content-wrapper">
        <?php echo $prolabelsCatalogHelper->getContentLabels($_product); ?>
    </div>
```

#### Reindex Labels From Command Line

```bash
    cd <magento_root>
    bin/magento prolabels:reindex:all
```

###### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
