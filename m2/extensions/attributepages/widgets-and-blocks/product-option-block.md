---
layout: default
title: Product option block
description: Magento 2 Product option block could be used to show product brand logo at product page
keywords: "magento 2 product option helper"
category: Attributepages
---

# Product option block

Product option block could be used to show the brand logo (or any other attribute)
**for a single product** with php, layout xml update or widget interface.

![Attribute based pages frontend](/images/m2/attributepages/use-cases/activity_and_material_blocks_on_product_page.png)

> It's not recommended to use the block for a product collection. Use specially optimized
> [product option helper](/m2/extensions/attributepages/widgets-and-blocks/product-option-helper)
> for collections.

Table of Contents

- [Block methods](#block-methods)
- [Inline php code](#inline-php-code)
- [Layout xml code](#layout-xml-update)
- [Widget interface](#widget-interface)

### Block methods

{% capture block_methods %}{% include_relative includes/block_methods.md %}{% endcapture %}
{{ block_methods | markdownify }}

### Inline php code

```php
<?php
    echo $this->getLayout()->createBlock('Swissup\Attributepages\Block\Product\Option')
        ->setProduct($block->getProduct())
        ->setTemplate('Swissup_Attributepages::product/options.phtml')
        ->setAttributeCode('activity')
        ->toHtml()
?>
```

### Layout xml update

The product will be taken from registry automatically.

```xml
<referenceContainer name="product.info.extrahint">
    <block class="Swissup\Attributepages\Block\Product\Option" template="Swissup_Attributepages::product/options.phtml" name="attributepage_brand">
        <arguments>
            <argument name="attribute_code" xsi:type="string">brand</argument>
            <argument name="use_image" xsi:type="boolean">true</argument>
            <argument name="image_type" xsi:type="string">thumbnail</argument>
            <argument name="width" xsi:type="number">45</argument>
            <argument name="height" xsi:type="number">15</argument>
            <argument name="use_link" xsi:type="boolean">true</argument>
            <argument name="css_class" xsi:type="string">hidden-label</argument>
        </arguments>
    </block>
</referenceContainer>
```

### Widget interface

The product will be taken from registry automatically.

![Widget popup](/images/m2/attributepages/widgets-and-blocks/widget.png)

You can add this widget to the product page at `Content > Elements > Widgets` page with
following layout update instructions:

![Layout update instructions](/images/m2/attributepages/widgets-and-blocks/cms_widget_layout_updates.png)

##### Related articles

- [Product option helper](/m2/extensions/attributepages/widgets-and-blocks/product-option-helper/)
- [Display brand block on product page](/m2/extensions/attributepages/use-cases/blocks-on-product-page/)
