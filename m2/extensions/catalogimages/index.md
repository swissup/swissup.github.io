---
layout: default
title: Easy Catalog Images
description: Categories and subcategories listing with images or thumbnails
keywords: "easycatalogimages, category, subcategory"
category: EasyCatalogImages
---

# Easy Catalog Images

EasyCatalogImages allows you to show category listing of the specified parent category.

It's very helpful to improve browsing experience in categories with a lot of
child categories.

![EasyCatalogImages at category page](/images/m2/easycatalogimages/category_page.png)

During installation new thumbnail attribute will be added to categories:

![EasyCatalogImages at category page](/images/m2/easycatalogimages/thumbnail.png)

## Contents

1.  [Installation](installation/)
2.  [Configuration](#configuration)
3.  [Block options](#options)
4.  [Custom usage examples](#custom-usage)
    1. [Inline call to use in magento cms blocks and pages](#inline-call-to-use-in-magento-cms-blocks-and-pages)
    2. [Inline php code](#inline-php-code)
5.  [Use cases](#use-cases)
    1. [Show block for certain category only](#show-block-for-certain-category-only)
    2. [Remove block from certain category](#remove-block-from-certain-category)

### Configuration

![EasyCatalogImages configuration](/images/m2/easycatalogimages/configuration-general.png)

**General**

- Use category image, when thumbnail is not available
- Use image helper to resize images
- Background color
- Image placeholder

![EasyCatalogImages configuration](/images/m2/easycatalogimages/configuration-category.png)

**Category page**

- Enabled for default categories
- Enabled for anchor categories
- Hidden, when filter or pagination is used
- Number of categories to show
- Columns count
- Show images
- Image width
- Image height
- Number of subcategories to show

![EasyCatalogImages configuration](/images/m2/easycatalogimages/configuration-image-assignment.png)

**Automated Image Assignment**

Have a lot of categories without images?

This option will help you fill the categories thumbnails with image of the
first product of each category.

### Options

You can find how to use these options in the [Custom Usage](#custom-usage) section.

Option                      | Values                    | Description
----------------------------|---------------------------|----------------------------
background_color            | rgb color code            | Background color what will be used to fill background of resized image, if needed
category_count              | integer                   | Count of categories to show
category_id                 | integer\|null(default)    | Parent category, do not set to use current category
category_to_hide            | comma separated ids       | Categories to hide from output
category_to_show            | comma separated ids       | Categories to show
column_count                | integer                   | Columns count
hide_when_filter_is_used    | boolean                   | Ability to hide block, if filter is applied or current page > 1
image_width                 | integer                   | Image width, px
image_height                | integer                   | Image height, px
resize_image                | boolean                   | Flag, that indicating to use image resizer or not
show_image                  | boolean                   | Show image flag
subacategory_count          | integer                   | Count of subcategories
template                    | string(tm/easycatalogimg/list.phtml) | Template to use
use_image_attribute         | boolean                   | Use image attribute, if thumbnail is not available

### Custom Usage

Below you will find examples of custom usage of the module block with all available options.

##### Inline call to use in magento cms blocks and pages

![EasyCatalogImages widget](/images/m2/easycatalogimages/widget.png)

```txt
{% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_id="category/2" category_count="100" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml"}}{% endraw %}
```

##### Inline php code

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

### Use cases

##### Show block for certain category only

1.  Navigate to `Content > Blocks` and create new block with following content:

    ```
    Block Title:    EasyCatalogImages
    Identifier:     EasyCatalogImages
    Store View:     All Store Views
    Status:         Enabled
    Content:        {% raw %}{{widget type="Swissup\Easycatalogimg\Block\Widget\SubcategoriesList" category_count="100" subcategory_count="5" column_count="4" show_image="1" image_width="200" image_height="200" template="Swissup_Easycatalogimg::list.phtml" hide_when_filter_is_used="1"}}{% endraw %}
    ```

2.  Navigate to `Stores > Configuration > Swissup > Easy Catalog Images > Category Page` and
disable the following options:

    ```
    Enabled for default categories
    Enabled for anchor categories
    ```

3.  Navigate to `Products > Categories`
4.  Select some category
5.  Switch to `Display Settings` tab and set the following values:

    ```
    Display Mode:   Static block and products
    CMS Block:      EasyCatalogImages
    ```

6. Save category and clear the cache.

##### Remove block from certain category

1.  Navigate to `Products > Categories`
2.  Select some category
3.  Switch to `Custom Design` tab and add the following code
    to `Custom Layout Update` field:

    ```xml
    <referenceContainer name="category.view.container">
        <referenceBlock name="subcategories" remove="true" />
    </referenceContainer>
    ```

4. Save category and clear the cache.
