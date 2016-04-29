---
layout: default
title: Display activity and material blocks on product page
description: Magento 2 Display activity and material blocks on product page
keywords: "magento 2 attributepages, activity and material blocks, product page"
category: Attributepages
---

# Display activity and material blocks on product page

Activity and material blocks can be added to the product page with `Inline php code`,
`Layout update xml` or `Cms widget interface`. Follow the description mentioned
below to learn how to use each of the proposed ways.

#### Table of Contents

- [Screenshot](#screenshot)
- [Inline php code](#inline-php-code)
- [Layout update xml](#layout-update-xml)
- [Cms widget interface](#cms-widget-interface)

### Screenshot

![activity and material blocks on product page](/images/m2/attributepages/use-cases/activity_and_material_blocks_on_product_page.png)

### Inline php code

You can add the code mentioned below to any template, that is shown on product page.

Look at [list of available attributepages/product helper methods][product_helper_methods]

```php
<?php
    echo $this->helper('Swissup\Attributepages\Helper\Product')
        ->setProduct($block->getProduct())
        ->setAttributeCode([
            'activity',
            'material'
        ])
        ->setImageType('thumbnail')
        ->setCssClass('list-block')
        ->setParentPageLinkTitle([
            'activity'  => 'View All',
            'material' => 'View All'
        ])
        ->setUseImage([
            'activity'  => true,
            'material' => false
        ])
        ->setUseLink([
            'activity'  => true,
            'material' => true
        ])
        ->setSize(38, 17)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

### Layout update xml

Look at [list of available product_option block methods][product_option_block_methods]

```xml
<referenceContainer name="product.info.extrahint">
    <block class="Swissup\Attributepages\Block\Product\Option" template="Swissup_Attributepages::product/options.phtml" name="attributepage_activity_material">
        <arguments>
            <argument name="attributeCode" xsi:type="string">activity,material</argument>
            <argument name="useImage" xsi:type="boolean">true</argument>
            <argument name="imageType" xsi:type="string">thumbnail</argument>
            <argument name="width" xsi:type="number">45</argument>
            <argument name="height" xsi:type="number">15</argument>
            <argument name="useLink" xsi:type="boolean">true</argument>
            <argument name="cssClass" xsi:type="string">hidden-label</argument>
        </arguments>
    </block>
</referenceContainer>
```

### Cms widget interface

![Widget popup](/images/m2/attributepages/widgets-and-blocks/widget.png)

You can add this widget to the product page at `Content > Elements > Widgets` page with
following layout update instructions:

![Layout update instructions](/images/m2/attributepages/widgets-and-blocks/cms_widget_layout_updates.png)

##### Related Articles
- [Attributepages product helper][product_helper]
- [Product option block][product_option_block]

[product_helper]: /m2/extensions/attributepages/widgets-and-blocks/product-option-helper/ "'attributepages/product' helper"
[product_helper_methods]: /m2/extensions/attributepages/widgets-and-blocks/product-option-helper/#helper-methods "List of available 'attributepages/product' helper methods"
[product_option_block]: /m2/extensions/attributepages/widgets-and-blocks/product-option-block/ "'Product option' block"
[product_option_block_methods]: /m2/extensions/attributepages/widgets-and-blocks/product-option-block/#block-methods "List of available 'Product option' methods"
