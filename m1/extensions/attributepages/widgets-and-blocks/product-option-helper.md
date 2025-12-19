---
layout: default
title: Product option helper
description: Product option helper could be used to show product brand logo at any page
keywords: "product option helper"
category: Attributepages
---

# Product option helper

Product option helper could be used to show the brand logo (or any other attribute)
for particular product or for the product collection.

Table of Contents

- [Helper methods](#helper-methods)
- [Short notation](#short-notation)
- [Full notation](#full-notation)

### Helper methods

Method             | Arguments            | Description
-------------------|----------------------|------------
setCollection      | Product collection | When collection is avaliable, helper will make a single database query to fetch all required attributes
setSize            | Two arguments: width and height | Width and height of the image

Product option helper proxies all calls to the product option block that is used
internally, so you can use any of
[product option block methods](/m1/extensions/attributepages/widgets-and-blocks/product-option-block/#block-methods)
too:

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

### Short notation

Display product `brand` logo on a product view page. Product will be fetched
from `Mage::registry` automatically.

```php
<?php
    echo Mage::helper('attributepages/product')
        ->setAttributeCode('brand')
        ->toHtml();
?>
```

### Full notation

Display `brand` and `gender` images for each product of the `$_productCollection`.

Brand logo will be rendered as a image link with additional link aside:
![Brand logo with 'View other brands' link aside](/images/attributepages/widgets-and-blocks/thumbnail/brand_logo_with_link_aside.png)

Gender attribute will be rendered as a non-link image:
![Gender icon](/images/attributepages/widgets-and-blocks/thumbnail/gender_image.png)

> Please notice, that the code below is written inside `$_productCollection`
> loop

```php
<?php
    echo Mage::helper('attributepages/product')
        ->setCollection($_productCollection)
        ->setProduct($_product)
        ->setAttributeCode(array('brand', 'gender'))
        ->setCssClass('hidden-label a-center')
        ->setParentPageLinkTitle(array(
            'brand'  => 'View other brands',
            'gender' => false
        ))
        ->setUseImage(true)
        ->setUseLink(array(
            'brand'  => true,
            'gender' => false
        ))
        ->setSize(38, 17)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

##### Related articles

- [Product option block](/m1/extensions/attributepages/widgets-and-blocks/product-option-block/)
- [Display brand block on product page](/m1/extensions/attributepages/use-cases/brand-block-on-product-page/#inline-php-code)
- [Display brand block on category page](/m1/extensions/attributepages/use-cases/brand-block-on-category-page/)
- [Display brand block in recently viewed products block](/m1/extensions/attributepages/use-cases/brand-block-in-recently-viewed-block/)
