---
layout: default
title: Display activity block on category page
description: Magento 2 Display activity block on category page
keywords: "magento 2 attributepages, activity block, category page, listing"
category: Attributepages
---

# Display activity block on category page

You can add the code mentioned below to the product list template, that is shown
on category page.

Usually you can find it at
`app/code/Magento/Catalog/view/frontend/templates/product/list.phtml`

### Example 1

![Activity block on category page](/images/m2/attributepages/use-cases/activity_block_on_category_page.png)

```php
<?php
    echo $this->helper('Swissup\Attributepages\Helper\Product')
        ->setCollection($_productCollection)
        ->setProduct($_product)
        ->setAttributeCode(['activity'])
        ->setCssClass('hidden-label a-center')
        ->setParentPageLinkTitle(['activity' => false])
        ->setUseImage(true)
        ->setImageType('thumbnail')
        ->setUseLink(['activity'  => true])
        ->setSize(50, 25)
        ->setKeepFrame(false)
        ->toHtml();
?>
```

Look at [list of available attributepages/product helper methods][product_helper_methods]

### Example 2

![Activity block on category page](/images/m2/attributepages/use-cases/activity_block_on_category_page_list_mode.png)

```php
<?php
echo $this->helper('Swissup\Attributepages\Helper\Product')
    ->setCollection($_productCollection)
    ->setProduct($_product)
    ->setAttributeCode(['activity'])
    ->setImageType('thumbnail')
    ->setCssClass('hidden-label')
    ->setSize(38, 17)
    ->setKeepFrame(false)
    ->toHtml();
?>
```

Look at [list of available attributepages/product helper methods][product_helper_methods]

##### Related Articles
- [Attributepages product helper][product_helper]

[product_helper]: /m2/extensions/attributepages/widgets-and-blocks/product-option-helper/ "'attributepages/product' helper"
[product_helper_methods]: /m2/extensions/attributepages/widgets-and-blocks/product-option-helper/#helper-methods "List of available 'attributepages/product' helper methods"
