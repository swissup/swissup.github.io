---
layout: default
title: Featured Attributes installation
description: Featured Attributes installation instructions
keywords: Featured Attributes installation
category: Featured Attributes
---

# Manual Installation

_**Note**: module is included in Argento since 1.3.0_

{% include installation/m2/manual.html package="swissup/featured-attributes" %}

## Add Featured Attributes To Template

place code in list template in your theme `/Magento_Catalog/templates/product/list.phtml`

```php
<?php
    if ($this->helper('Magento\Catalog\Helper\Data')->isModuleOutputEnabled('Swissup_FeaturedAttributes')) {
        echo $block->getLayout()
            ->createBlock('Swissup\FeaturedAttributes\Block\Attributes')
            ->setProduct($_product)
            ->toHtml();
    }
?>
```

That's all. Now you need configure extension in admin panel [Configuration][configuration]

#### After installing the extension you can go to:

* [Configuration][configuration]
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

[configuration]: /m2/extensions/featured-attributes/configuration/
