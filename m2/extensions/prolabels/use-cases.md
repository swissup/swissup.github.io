---
layout: default
title: ProLabels Use Cases
description: product labels use cases
category: ProLabels
---

# Use Cases

### ProLabels do not appear at category page

Some third-party themes use the old way to render images on category listing, so product labels won't be initialized there. To fix it apply the following:

  - open `app/design/frontend/<vendor>/<theme>/Magento_Catalog/templates/product/list.phtml`

  - find a similar code:

    ```php
    <div class="product-item-info" data-container="product-grid">
    ```

  - add code snippet after product-item-info <div> so the result will look like that:

    ```php
    <div class="product-item-info" data-container="product-grid">
      <?php $this->helper('\Swissup\ProLabels\Helper\Catalog')->getLabels($_product); ?>
      <?php echo $this->helper('\Swissup\ProLabels\Helper\Catalog')->toHtmlProductLabels($_product->getId());
      ?>
    ```

  - save the changes and flush cache.
