---
layout: default
title: Integration
description: magento product labels module integration
keywords: " magento product labels extension, magento labels, magic zoom plus "
category: Prolabels
---

# Integration

### Magic Zoom Plus

Find template at your Magento instance
`app/design/frontend/[PACKAGE]/[THEME]/template/magiczoomplus/media.phtml`.
Then find piece of PHP code (this code outputs rendered product image HTML):

```php
echo MagicToolboxTemplateHelperClass::render(array(
    'main' => $mainHTML,
    'thumbs' => $productImagesHTML,
    'magicscrollOptions' => $scroll ? $scroll->params->serialize(false, '', 'product-magicscroll-options') : '',
    'pid' => $productId,
    'moreViewsCaption' => $moreViewsCaption
));
```

Paste code below **before** product image rendering:

```php
// Prolabels from TM integration - START
if (Mage::helper('core')->isModuleOutputEnabled('TM_ProLabels')) {
    $mainHTML = '<div class="prolabel-wrapper">'
        . Mage::helper('prolabels')->getLabel($productModel, 'product')
        . $mainHTML
        . '</div>';
}
// Prolabels from TM integration - END
```
