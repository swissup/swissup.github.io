---
layout: default
title: Argento Luxury Category Page
description: Argento Luxury category page configuration
keywords: >
    Argento Luxury, luxury, configuration, category, listing
category: Argento
---

# Argento Luxury Category Page

#### Category header decoration

![Category title background](/images/argento/luxury/category/category-title-background.png)

###### Adding background to title

In **Luxury** theme you have an option to add fullwidth category title backgrounds.

Background will appear if you upload an image to
`Catalog > Manage categories > [choose the category] > General information > Image`

> **Note:** Recommended background images size is `1980x300`

![Category background admin upload](/images/argento/luxury/category/category-background-admin-upload.png)

###### Changing category title color

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