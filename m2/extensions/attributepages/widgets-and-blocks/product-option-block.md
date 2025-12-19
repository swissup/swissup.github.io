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
> [product option helper](/m2/extensions/attributepages/widgets-and-blocks/product-option-helper/)
> for collections.

Table of Contents

- [Block methods](#block-methods)
- [Inline php code](#inline-php-code)
- [Layout xml code](#layout-xml-update)
- [Widget interface](#widget-interface)

### Block methods

Method             | Arguments            | Description
-------------------|----------------------|------------
setProduct         | Product model | Options of this product will be shown
setAttributeCode   | Attribute code or array of attribute codes | Indicate attribute(s) to load
setAttributeToShow | Attribute code or array of attribute codes | Use to display only some of loaded options
setAttributeToHide | Attribute code or array of attribute codes | Use to hide some of loaded options
setParentPageIdentifier | String or key => value array | Use when some attribute is linked to multiple attribute pages and you want to clarify which to render. For example: `brands/amd` and `computers/amd` and you would like to build a link to `computers/amd`
setParentLinkTitle | String or key => value array | Use to show additional link aside of attribute image/text
setCssClass        | hidden-label<br/>a-center<br/>list-block<br/>clear | Hide page title<br/>Center options<br/>Show options line by line<br/>Use `clear: all` for options list
setCssStyle        | Css styles: `margin-top: 20px; border-bottom: 1px solid #eee;` | Use to customize any style
setUseImage        | Boolean or key => value array | Ability to toggle between image and text modes
setUseLink         | Boolean or key => value array | Ability to render option as link or as a plain image or text
setWidth           | Integer | Image width
setHeight          | Integer | Image height
setKeepFrame       | Boolean | Set false to resize image by larger side only
setTemplate        | String | Render options with custom template

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
