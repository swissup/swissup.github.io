---
layout: default
title: Product option helper
description: Magento 2 Product option helper could be used to show product brand logo at any page
keywords: "magento 2 product option helper"
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
[product option block methods](/m2/extensions/attributepages/widgets-and-blocks/product-option-block/#block-methods)
too:

{% capture block_methods %}{% include_relative includes/block_methods.md %}{% endcapture %}
{{ block_methods | markdownify }}

### Short notation

Display product `brand` logo on a product view page. Product will be fetched
from registry automatically.

```php
<?php
    echo $this->helper('Swissup\Attributepages\Helper\Product')
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
    echo $this->helper('Swissup\Attributepages\Helper\Product')
        ->setCollection($_productCollection)
        ->setProduct($_product)
        ->setAttributeCode(['brand', 'gender'])
        ->setCssClass('hidden-label a-center')
        ->setParentPageLinkTitle([
            'brand'  => 'View other brands',
            'gender' => false
        ])
        ->setUseImage(true)
        ->setUseLink([
            'brand'  => true,
            'gender' => false
        ])
        ->setSize(38, 17)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

##### Related articles

- [Product option block](/m2/extensions/attributepages/widgets-and-blocks/product-option-block/)
- [Display brand block on product page](/m2/extensions/attributepages/use-cases/brand-block-on-product-page/#inline-php-code)
- [Display brand block on category page](/m2/extensions/attributepages/use-cases/brand-block-on-category-page/)
- [Display brand block in recently viewed products block](/m2/extensions/attributepages/use-cases/brand-block-in-recently-viewed-block/)
