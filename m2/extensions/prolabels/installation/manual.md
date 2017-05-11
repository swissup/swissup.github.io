---
layout: default
title: Prolabels Installation
description: magento prolabels module installation
keywords: " magento prolabels extension "
category: Prolabels
---

# Manual Installation

{% include installation/m2/manual.html site="swissuplabs.com" modules="Swissup_Core Swissup_SubscriptionChecker Swissup_ProLabels" %}

#### Labels in Catalog and Search pages

##### Product Image Labels

Replace list and grid image code

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

Add the code to any place in catalog list.phtml

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

###### After installing the extension you can go to:

* [Configuration](../configuration/)
* [Admin Interface](../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)