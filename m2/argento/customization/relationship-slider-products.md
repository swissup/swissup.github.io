---
layout: default
title: Relationship slider products
description: Add slider Up-sells and Cross-sells and Related products to the product page
keywords: product page
category: Argento
---

# Slider Related Products, Slider-Up-Sells, and Slider-Cross-Sells

You may display related products in a slider on the product page.

> **Notice**
>
> 1. This tutorial assumes that you already created a [custom theme](../custom-theme/)
>    based on one of the Argento themes.
>
>    If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.
>
> 2. You should add related products in the configuration of each product.

#### Relationships:
- [Related Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-related-products.html) - Related products are meant to be purchased in addition to the item a customer is viewing.
- [Up-sell Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-up-sells.html) - Up-sell products are items similar to the viewed product that are of a higher-quality, more popular, or have a better profit margin than the item a customer is considering.
- [Cross-sell Products](https://docs.magento.com/m2/ce/user_guide/catalog/settings-advanced-cross-sells.html) - Cross-sell products are offered on the shopping cart page as last-minute purchases before the checkout process begins.

Choose relation products and set the destination on the product page.

 1. Create a file `catalog_product_view.xml` in the following directory:

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

 Afterwards, override the file `items.phtml`:

 1. Create a file `items.phtml` in the following directory:

    ```
    app/design/frontend/Local/argento-[essence|flat]-custom/Magento_Catalog/templates/product/list/
    ```

 2. Find the `div` with the classname `block-content content` that wraps the list of the future slider items. Add the specified slick parameters as follows:

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

