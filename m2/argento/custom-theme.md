---
layout: default
title: Argento custom theme
description: How to create Argento-based custom theme
keywords: >
    argento theme, custom theme, template modification, layout modification,
    custom css, custom styles, change layout, change columns count, category layout,
    product page layout
category: Argento

gallery_layout:
  - href: /images/m2/argento/custom-theme/3columns-category.png
    src: /images/m2/argento/custom-theme/3columns-category-small.png
    w: 990
    h: 990
    title: Three columns layout at category page
  - href: /images/m2/argento/custom-theme/2columns-product.png
    src: /images/m2/argento/custom-theme/2columns-product-small.png
    w: 990
    h: 990
    title: Two columns layout at product page
---

# Argento custom theme

Creating Argento sub-theme gives you unlimited possibilities in theme
customization. Unlike [css customization](/m2/argento/css-customization/),
custom theme allows you to change much more things:

- Layout instructions
- Template files
- Javascripts
- Css styles

> Using Argento sub-theme, you guarantee that all Argento files left untouched and
> you can unpack new Argento version over the old one without losing your
> modifications

## Contents

 1. Create theme
    1. [Create custom theme](#create-custom-theme)
    2. [Apply custom theme to your store](#apply-custom-theme)
 2. Theme usage
    3. [Change page layout](#change-page-layout)
    4. [Change template](#change-template)
    5. [Add additional javascripts](#add-additional-javascripts)
    6. [Add additional css styles](#add-additional-css-styles)

### Create custom theme

Let's create `Local\argento-custom` theme based on `Swissup\argento-essence`.

 1. Create folder for your new theme:

    ```
    app/design/frontend/Local/argento-custom
    ```

 2. Create following files inside new theme directory, to register your
    theme in Magento :

    1.  composer.json

        ```json
        {
            "name": "local/argento-custom",
            "type": "magento2-theme",
            "version": "1.0.0",
            "require": {
                "php": "~5.5.0|~5.6.0|~7.0.0",
                "swissup/theme-frontend-argento-essence": "*"
            },
            "autoload": {
                "files": [ "registration.php" ]
            }
        }
        ```

    2.  theme.xml

        ```xml
        <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
            <title>Argento Custom by Local</title>
            <parent>Swissup/argento-essence</parent>
        </theme>
        ```

    3.  registration.php

        ```php
        <?php

        \Magento\Framework\Component\ComponentRegistrar::register(
            \Magento\Framework\Component\ComponentRegistrar::THEME,
            'frontend/Local/argento-custom',
            __DIR__
        );
        ```

 3. Log in to Magento backend and navigate to `Content > Themes`. You should
    see new theme in the list.

    > Clear cache if theme is not appeared in the list.

    ![List of themes at Content > Themes](/images/m2/argento/custom-theme/themes-list.png)

 4. Run the following commands in terminal to deploy static content files:

    ```bash
    bin/magento setup:static-content:deploy
    ```

 4. That's all. Now you can [apply](#apply-custom-theme) theme to your store.

### Apply custom theme

Navigate to `Stores > Configuration > Design` and select your new theme in
`Design Theme` option dropdown.

> Please note, that Magento 2.1 moved this config to separate
> page. You can find it at `Content > Design > Configuration`

![Design Configuration](/images/m2/argento/custom-theme/configuration.png)

Press `Save Config` button.

That's all, now you can modify anything you'd like to, without modifiyng core
Argento files.

### Change page layout

Let's change category page layout to 3columns and product layout
to 2columns with right sidebar.

 1. Create `catalog_category_view.xml` and `catalog_product_view.xml` files
    in the following directory:

    ```
    app/design/frontend/Local/argento-custom/Magento_Catalog/layout
    ```

 2. Add the following content to `catalog_category_view.xml` file and save it.

    ```xml
    <?xml version="1.0"?>
    <page layout="3columns" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    </page>
    ```

 3. Add the following content `catalog_product_view.xml` file and save it.

    ```xml
    <?xml version="1.0"?>
    <page layout="2columns-right" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    </page>
    ```

Clear Magento cache to see the result:

{% include gallery.html images=page.gallery_layout class="scroll phone-up-1 tablet-up-2 photoswipe" %}

### Change template

### Add additional javascripts

### Add additional css styles
