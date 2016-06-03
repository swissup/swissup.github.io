---
layout: default
title: Product page additional blocks
description: How to add additional blocks to the product page
keywords: >
    attributepage block, product page, additional blocks
category: Argento
---

# Product page additional blocks

1. [Attributepage block](#attributepage-block)

### Attributepage block

> **Notice**
>
> 1. This tutorial assumes that you already created [custom theme](../custom-theme/)
>    based on `Swissup/argento-essence`
>
>    If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.
>
> 2. You should add images to all options of `activity` attribute too.
>    Navigate to backend `Swissup > Attribute Pages > Manage Pages` for more
>    information.

Let's add [Attributepages](/m2/extensions/attributepages/) block that will show
`activity` attribute.

 1. Create `catalog_product_view.xml` file in the following directory:

    ```
    app/design/frontend/Local/argento-custom/Magento_Catalog/layout
    ```

 3. Add the following content `catalog_product_view.xml` file and save it.

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">

        <!-- Add block to the alert.urls container -->
        <referenceContainer name="alert.urls">
            <block class="Swissup\Attributepages\Block\Product\Option"
                template="Swissup_Attributepages::product/options.phtml"
                name="attributepage_activity">
                <arguments>
                    <argument name="attribute_code" xsi:type="string">activity</argument>
                    <argument name="use_image" xsi:type="boolean">true</argument>
                    <argument name="image_type" xsi:type="string">thumbnail</argument>
                    <argument name="width" xsi:type="number">50</argument>
                    <argument name="height" xsi:type="number">50</argument>
                    <argument name="use_link" xsi:type="boolean">true</argument>
                    <argument name="css_class" xsi:type="string">hidden-label</argument>
                </arguments>
            </block>
        </referenceContainer>
    </page>
    ```

Clear Magento cache to see the result:

![Attributepage widget on product page](/images/m2/argento/customization/add-additional-blocks-to-the-product-page/attributepage-block-with-activity.png)
