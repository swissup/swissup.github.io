---
layout: default
title: Argento custom theme
description: How to create Argento-based custom theme
keywords: >
    argento theme, custom theme, argento customization
category: Argento
---

# Argento custom theme

Creating Argento sub-theme gives you unlimited possibilities in theme
customization. Unlike [css customization](/m2/argento/customization/custom-css/),
custom theme allows you to change much more things:

- Layout instructions
- Template files
- Javascripts
- Css styles

> Using Argento sub-theme, you guarantee that all Argento files left untouched and
> you can unpack new Argento version over the old one without losing your
> modifications

## Contents

1. [Create custom theme](#create-custom-theme)
2. [Apply custom theme to your store](#apply-custom-theme)

### Create custom theme

Let's create `Local/argento-[essence|flat]-custom` theme based on
`Swissup/argento-[essence|flat]`.

> This tutorial assumes that you'll replace `[essence|flat]` entries with
> theme name, you'd like to use

 1. Create folder for your new theme:

    ```
    app/design/frontend/Local/argento-[essence|flat]-custom
    ```

 2. Create following files inside new theme directory, to register your
    theme in Magento :

    1.  composer.json

        ```json
        {
            "name": "local/argento-[essence|flat]-custom",
            "type": "magento2-theme",
            "version": "1.0.0",
            "require": {
                "php": "~5.5.0|~5.6.0|~7.0.0",
                "swissup/theme-frontend-argento-[essence|flat]": "*"
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
            <parent>Swissup/argento-[essence|flat]</parent>
        </theme>
        ```

    3.  registration.php

        ```php
        <?php

        \Magento\Framework\Component\ComponentRegistrar::register(
            \Magento\Framework\Component\ComponentRegistrar::THEME,
            'frontend/Local/argento-[essence|flat]-custom',
            __DIR__
        );
        ```

 3. Log in to Magento backend and navigate to `Content > Themes`. You should
    see new theme in the list.

    > Clear cache if theme is not appeared in the list.

    ![List of themes at Content > Themes](/images/m2/argento/customization/custom-theme/themes-list.png)

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

![Design Configuration](/images/m2/argento/customization/custom-theme/configuration.png)

Press `Save Config` button.

That's all, now you can modify anything you'd like to, without modifiyng core
Argento files.

#### Next Up

- [Customization](../)
- [Change page layout](../change-page-layout/)
