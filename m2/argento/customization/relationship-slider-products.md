---
layout: default
title: Relationship slider products
description: Add slider Up-sells and Cross-sells and Related products to the product page
keywords: product page
category: Argento
---

# Slider Related Products, Slider-Up-Sells, and Slider-Cross-Sells

These instructions help you to display all relationship products as a slider on the product page.

> **Notice**
>
> 1. This tutorial assumes that you already created [custom theme](../custom-theme/)
>    based on one of Argento themes.
>
>    If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.
>
> 2. You should add related products in the configuration of each product.

#### Relationships:
- [Related Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-related-products.html) - Related products are meant to be purchased in addition to the item the customer is viewing.
- [Up-sell Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-up-sells.html) - items that are similar, but are perhaps of a higher-quality, more popular, or have a better profit margin than the item the customer is considering.
- [Cross-sell Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-cross-sells.html) - offered on the shopping cart page as last-minute purchases before the checkout process begins.

Choose a relation products and set destination on the product page.

 1. Create `catalog_product_view.xml` file in the following directory:

    ```
    app/design/frontend/Local/argento-[essence|flat]-custom/Magento_Catalog/layout
    ```
 2. Set `destination` for the `relation products` on the product page:

    ```xml
    <?xml version="1.0"?>
    <page layout="1column" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name="product.info.options.wrapper">
            // Add relation products block (e.g.-Upsell products)
            <block class="Magento\Catalog\Block\Product\ProductList\Upsell" name="upsell_products" template="Magento_Catalog::product/list/items.phtml" after="-">
                <arguments>
                    <argument name="type" xsi:type="string">upsell</argument>
                </arguments>
                <block class="Magento\Catalog\Block\Product\ProductList\Item\Container" name="upsell.product.addto" as="addto">
                    <block class="Magento\Catalog\Block\Product\ProductList\Item\AddTo\Compare"
                           name="upsell.product.addto.compare" as="compare"
                           template="Magento_Catalog::product/list/addto/compare.phtml"/>
                    </block>
            </block>

        </referenceBlock>

        // Set a new destination for Your relation products block
        <move element="upsell_products" destination="set_destination" after="-"/>


    </body>
    </page>
    ```

 Afterwards need to override `items.phtml` file:

 1. Create `items.phtml` file in the following directory:

    ```
    app/design/frontend/Local/argento-[essence|flat]-custom/Magento_Catalog/templates/product/list/
    ```

 2. Find the `div` with classnames `block-content content` that wrap list of future slider items. And add the specified slick parameters this way:

    ```html
    <div class="block-content content" aria-labelledby="block-<?= $block->escapeHtmlAttr($class) ?>-heading" 
         data-mage-init='{"Swissup_Swiper/js/swiper-wrapper": {
            "target": ".products-grid", 
            "loop": false, 
            "slidesPerView": 5, 
            "spaceBetween": 5, 
            "breakpoints": {
                "1023": {
                    "slidesPerView": 4
                }, 
                "767": {
                    "slidesPerView": 2
                }, 
                "640": {
                    "slidesPerView": 1}
                }
            }
        }'>
        <?php if ($type == 'related' && $canItemsAddToCart):?>
        ...

        <?php endif;?>
    </div>
    ```

Clear Magento cache to see the results.

