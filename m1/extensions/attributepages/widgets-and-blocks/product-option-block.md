---
layout: default
title: Product option block
description: Product option block could be used to show product brand logo at product page
keywords: "product option helper"
category: Attributepages
---

# Product option block

Product option block could be used to show the brand logo (or any other attribute)
**for a single product** with php, layout xml update or widget interface.

> It's not recommended to use the block for a product collection. Use specially optimized
> [product option helper](/m1/extensions/attributepages/widgets-and-blocks/product-option-helper/)
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
    echo $this->getLayout()->createBlock('attributepages/product_option')
        ->setProduct($_product)
        ->setTemplate('tm/attributepages/product/options.phtml')
        ->setAttributeCode('brand')
        ->toHtml()
?>
```

### Layout xml update

The product will be taken from `Mage::registry` automatically.

```xml
<reference name="product.info.extrahint">
    <block type="attributepages/product_option" template="tm/attributepages/product/options.phtml" name="attributepage_brand">
        <action method="setAttributeCode"><value>brand</value></action>
        <action method="setUseImage"><value>1</value></action>
        <action method="setImageType"><value>thumbnail</value></action>
        <action method="setWidth"><value>45</value></action>
        <action method="setHeight"><value>15</value></action>
        <action method="setUseLink"><value>1</value></action>
        <action method="setCssClass"><value>hidden-label</value></action>
    </block>
</reference>
```

### Widget interface

> This feature is available starting from version 1.3.3

The product will be taken from `Mage::registry` automatically.

![Widget popup](/images/attributepages/widget.png)

You can add this widget to the product page at `Cms > Widgets` page with
following layout update instructions:

![Layout update instructions](/images/attributepages/cms_widget_layout_updates.png)

##### Related articles

- [Product option helper](/m1/extensions/attributepages/widgets-and-blocks/product-option-helper/)
- [Display brand block on product page](/m1/extensions/attributepages/use-cases/brand-block-on-product-page/#inline-block-directive)
