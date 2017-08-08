---
layout: default
title: Argento Luxury Category Page
description: Argento Luxury category page configuration
keywords: >
    Argento Luxury, luxury, configuration, category, listing
category: Argento
---

# Argento Luxury Category Page

### Layout

Luxury is using `page_two_columns_left` layout for the category page. To
change it to another one, create
[custom.xml][custom_xml]
file with following instruction:

```xml
<catalog_category_default>
    <update handle="page_two_columns_right"/>
</catalog_category_default>
<catalog_category_layered>
    <update handle="page_two_columns_right"/>
</catalog_category_layered>
```

Possible values for handle variable:

```
page_two_columns_left
page_two_columns_right
page_three_columns
page_one_column
```

### Category header decoration

![Category title background](/images/argento/luxury/category/category-title-background.png)

#### Adding background to title

In **Luxury** theme you have an option to add fullwidth category title backgrounds.

Background will appear if you upload an image to
`Catalog > Manage categories > [choose the category] > General information > Image`

> **Note:** Recommended background images size is `1980x300`

![Category background admin upload](/images/argento/luxury/category/category-background-admin-upload.png)

#### Changing category title color

By default the category title text has **WHITE** color, but sometimes
it doesn't look good at light backgrounds.

**Argento Luxury** has an option to change title color to **BLACK** and **GREY**

![Category title dark](/images/argento/luxury/category/category-title-dark.png)

 *  Go to `Catalog > Manage categories > [choose the category] > Custom design > Custom Layout Update`
    ![Category title dark admin](/images/argento/luxury/category/dark-title-admin.png)
 *  Add one of following update handles there

    ```xml
    <!-- For BLACK title -->

    <reference name="root">
        <action method="addBodyClass"><className>dark-category-header</className></action>
    </reference>
    ```

    or

    ```xml
    <!-- For GREY title -->

    <reference name="root">
        <action method="addBodyClass"><className>grey-category-header</className></action>
    </reference>
    ```

### Products Listing

![Product Listing](/images/argento/luxury/category-page/product_listing.png)

#### Columns count

Columns count can be configured with [custom.xml][custom_xml].
Add the following code to the custom.xml file:


```xml
<products_four_columns>
    <block type="catalog/product_list_toolbar" name="product_list_toolbar" template="catalog/product/list/toolbar.phtml">
        <block type="page/html_pager" name="product_list_toolbar_pager"/>

        <action method="setDefaultGridPerPage"><limit>4</limit></action>
        <action method="addPagerLimit"><mode>grid</mode><limit>4</limit></action>
        <action method="addPagerLimit"><mode>grid</mode><limit>8</limit></action>
        <action method="addPagerLimit"><mode>grid</mode><limit>12</limit></action>

        <action method="setDefaultListPerPage"><limit>4</limit></action>
        <action method="addPagerLimit"><mode>list</mode><limit>8</limit></action>
        <action method="addPagerLimit"><mode>list</mode><limit>16</limit></action>
        <action method="addPagerLimit"><mode>list</mode><limit>32</limit></action>
    </block>

    <reference name="product_list">
        <action method="setColumnCount"><columns>4</columns></action>
        <action method="setToolbarBlockName"><name>product_list_toolbar</name></action>
    </reference>
    <reference name="search_result_list">
        <action method="setColumnCount"><columns>4</columns></action>
        <action method="setToolbarBlockName"><name>product_list_toolbar</name></action>
    </reference>
</products_four_columns>

<catalog_category_layered>
    <update handle="products_four_columns"/>
</catalog_category_layered>
<catalog_category_default>
    <update handle="products_four_columns"/>
</catalog_category_default>
<catalogsearch_result_index>
    <update handle="products_four_columns"/>
</catalogsearch_result_index>
<catalogsearch_advanced_result>
    <update handle="products_four_columns"/>
</catalogsearch_advanced_result>
```

#### Image size

Follow the steps below to change image size on the category view page:

 1. Open `app/code/local/TM/ArgentoLuxury/etc/config.xml`

 2. Find the following lines:

    ```xml
    <product_list>
        <grid>
            <add_to_cart>add-to-links</add_to_cart>
            <collateral_info_disabled>1</collateral_info_disabled>
            <image_size>280</image_size>
            <image_keep_frame>0</image_keep_frame>
        </grid>
        <list>
            <image_size>280</image_size>
            <image_keep_frame>0</image_keep_frame>
        </list>
    </product_list>
    ```

 3. Change the value of `image_size` config for `grid` and `list` modes,
    save the file and refresh cache.

[custom_xml]: /m1/argento/theme-customization/small-changes/#custom-layout-update-file "custom.xml layout"
