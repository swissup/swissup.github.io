---
layout: default
title: Use Cases
description: Easycatalogimages Use Cases
keywords: easycatalogimages, usecase
category: EasyCatalogImages
---

# Use Cases

### Contents

 -  [Show block for certain category only](#show-block-for-certain-category-only)
 -  [Remove block from certain category](#remove-block-from-certain-category)

### Show block for certain category only

 1. Navigate to `Stores > Configuration > Swissup > Easy Catalog Images > Category Page` and
    disable the following options:

    ```
    Enabled for default categories
    Enabled for anchor categories
    ```

 2. Navigate to `Products > Categories`
 3. Select some category
 4. Switch to `Design` tab and add the following `Layout Update Code`:

    ```xml
    <referenceContainer name="content">
        <block class="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" name="easycatalogimg">
            <action method="setTemplate">
                <argument name="template" xsi:type="string">Swissup_Easycatalogimg::list.phtml</argument>
            </action>
            <action method="setCategoryCount">
                <argument name="category_count" xsi:type="number">4</argument>
            </action>
            <action method="setColumnCount">
                <argument name="column_count" xsi:type="number">2</argument>
            </action>
            <action method="setShowImage">
                <argument name="show_image" xsi:type="boolean">true</argument>
            </action>
            <action method="setImageWidth">
                <argument name="image_width" xsi:type="number">450</argument>
            </action>
            <action method="setImageHeight">
                <argument name="image_height" xsi:type="number">680</argument>
            </action>
            <action method="setHideWhenFilterIsUsed">
                <argument name="hide_when_filter_is_used" xsi:type="boolean">true</argument>
            </action>
        </block>
    </referenceContainer>
    ```

 6. Save category and clear the cache.

### Remove block from certain category

 1. Navigate to `Products > Categories`
 2. Select some category
 3. Switch to `Design` tab and add the following `Layout Update Code`:

    ```xml
    <referenceContainer name="category.view.container">
        <referenceBlock name="subcategories" remove="true" />
    </referenceContainer>
    ```

 4. Save category and clear the cache.
