---
layout: default
title: Easy Catalog Images Widget
description: Easu Catatalog Images widget usage
keywords: easycatalogimages, widget
category: EasyCatalogImages
---

# Widget

Widget allows you to use subcategory listing block at any page.
See [how to insert widget to the homepage](../usage/#add-widget-to-the-homepage)
tutorial for more information.

### Contents

 -  [Widget Interface](#widget-interface)
 -  [Options](#options)
 -  [XML Layout Update](#xml-layout-update)
 -  [PHP Inline Code](#php-inline-code)

### Widget Interface

You can use widget interface by pressing `Insert Widget` button at the following
pages:

 -  Content > Blocks
 -  Content > Pages
 -  Content > Widgets
 -  All other pages, that utilize `Insert Widget` button functionality

![EasyCatalogImages widget](/images/m2/easycatalogimages/widget.png?v=3){:width="908" height="918"}

### Options

Widget interface does not provide visual preview for all available options. Here
you can find the full list of supported options:

Option                      | Description
----------------------------|----------------------------
**Default Options**         |
category_id                 | Root category
category_count              | Number of categories to show
subcategory_count           | Number of subcategories to show
column_count                | Columns count
show_image                  | Show image flag
image_lazyload              | Use lazyload
image_width                 | Image width, px
image_height                | Image height, px
parent_category_position    | Choose between "Above Image" and "Below Image" options
sizes                       | Responsive sizes to generate perfect image size for every device. Example: `(min-width: 768px) 25vw, 50vw`
category_to_show            | Categories to show
category_to_hide            | Categories to hide from output
hide_when_filter_is_used    | Ability to hide block, if filter is applied or current page > 1
cache_lifetime              | Cache lifetime in seconds. Cache is disabled when empty.
**Hidden Options**          |
resize_image                | Flag, that indicating to use image resizer or not
template                    | Template to use
custom_template             | Custom Template to use
use_image_attribute         | Use image attribute, if thumbnail is not available
background_color            | Background color what will be used to fill background of resized image, if needed

### XML Layout Update

Here is an xml layout skeleton, that could be used from xml files
or `Xml Layout Update` directives:

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

### Inline php code

```php
<?php echo $this->getLayout()
    ->createBlock('Swissup\Easycatalogimg\Block\Widget\SubcategoriesList')
    ->setTemplate('Swissup_Easycatalogimg::list.phtml')
    ->setEnabledForAnchor(true)
    ->setEnabledForDefault(true)
    ->setCategoryCount(4)
    ->setSubcategoryCount(3)
    ->setColumnCount(4)
    ->setShowImage(true)
    ->setImageWidth(200)
    ->setImageHeight(200)
    ->setHideWhenFilterIsUsed(false)
    ->setCategoryId(2)
    ->setCategoryToHide('1,2,3')
    ->setCategoryToShow('4,5,6')
    ->toHtml(); ?>
```

#### Next up

 -  [Usage](../usage/)
    - [Add widget to the homepage](../usage/#add-widget-to-the-homepage)
    - [Enable module for all categories](../usage/#enable-module-for-all-categories)
 -  [Use Cases](../use-cases/)
    - [Show block for certain category only](../use-cases/#show-block-for-certain-category-only)
    - [Remove block from certain category](../use-cases/#remove-block-from-certain-category)
 -  [Back to Main Page](../)
