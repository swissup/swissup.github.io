---
layout: default
title: Hover Gallery Installation
description: How to install Hover Gallery for Magento 2
keywords: hover gallery installation
category: Hover Gallery
---

# Manual Installation

{% include installation/m2/manual.html site="swissuplabs.com" modules="Swissup_Core Swissup_HoverGallery" %}

#### 4. Complete the installation

In your theme template `/Magento_Catalog/templates/product/list.phtml` find block of code that might be looking like this (**please make sure you have a backup before overwriting your current files**):

```php
<?php // Product Image ?>
    <a href="<?php /* @escapeNotVerified */ echo $_product->getProductUrl() ?>" class="product photo product-item-photo" tabindex="-1">
        <?php echo $productImage->toHtml(); ?>
```

Insert this code right below:

```php
<?php
    if ($this->helper('Magento\Catalog\Helper\Data')->isModuleOutputEnabled('Swissup_HoverGallery')) {
        echo $this->helper('Swissup\HoverGallery\Helper\Data')->getHoverImage($_product, $productImage->getWidth(), $productImage->getHeight());
    }
?>
```

Login your store admin and [enable extension](/m2/extensions/hover-gallery/configuration).

##### Next up

- [Back to docs homepage](/m2/extensions/hover-gallery)
