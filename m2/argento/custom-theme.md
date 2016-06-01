---
layout: default
title: Argento custom theme
description: How to create Argento-based custom theme
keywords: >
    argento theme, custom theme, template modification, layout modification,
    custom css, custom styles
category: Argento
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

 4. That's all. Now you can [apply](#apply-custom-theme) theme to your store.

### Apply custom theme

### Change page layout

### Change template

### Add additional javascripts

### Add additional css styles
