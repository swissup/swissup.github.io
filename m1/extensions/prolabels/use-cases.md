---
layout: default
title: Use Cases
description: magento product labels module use cases
keywords: "magento product labels extension, magento labels, adding labels to
magento use cases"
category: Prolabels
---

## Contents
{:.no_toc}

* TOC
{:toc}

## Labels for Magento New Products widget

Magento has its own New Products widget. If you want to have label for
products there then you have to apply minor change to magento template.

Please, follow Magento recommendations for template customization. Or in case 
you have our Argento theme please follow [customization tips for it](/m1/argento/theme-customization/complex-changes/).

Add code below to template `catalog/product/new.phtml`:

```php
<?php
    Mage::dispatchEvent('catalog_block_product_list_collection', array(
        'collection' => $this->getProductCollection()
    ));
?>
```
