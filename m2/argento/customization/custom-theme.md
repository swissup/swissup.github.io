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

Please, use our istructions at **[Custom Argento Themes Boilerplate](https://github.com/argento/theme-custom-boilerplates)**
free repository or you can create custom theme manualy:

Let's create `Local/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]-custom` theme based on
`Swissup/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]`.

> This tutorial assumes that you'll replace `[essence|flat|pure2|mall|stripes|luxury|force|home]` entries with
> theme name, you'd like to use

 1. Create folder for your new theme:

    ```
    app/design/frontend/Local/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]-custom
    ```

 2. Create following files inside new theme directory, to register your
    theme in Magento :

    1.  composer.json

        ```json
        {
            "name": "local/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]-custom",
            "type": "magento2-theme",
            "version": "1.0.0",
            "require": {
                "swissup/theme-frontend-argento-[essence|flat|pure2|mall|stripes|luxury|force|home]": "*"
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
            <parent>Swissup/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]</parent>
        </theme>
        ```

    3.  registration.php

        ```php
        <?php

        \Magento\Framework\Component\ComponentRegistrar::register(
            \Magento\Framework\Component\ComponentRegistrar::THEME,
            'frontend/Local/argento-[essence|flat|pure2|mall|stripes|luxury|force|home]-custom',
            __DIR__
        );
        ```

    #### In one line

    You can also create a custom theme more fastest with our command

    ```bash
    php bin/magento swissup:theme:create <name> <parent-theme-name> --css
    ```

    **Command line arguments**

    Argument  | Description
    ----------|------------
    name      | Put the theme name you want to create (Local/argento-stripes)
    parent    | Put the parent short theme name (stripes)

    **Command line options**

    Option    | Description
    ----------|------------
    --css     | Should I create custom css? [default: false]


    For example

    ```bash
    php bin/magento swissup:theme:create argento-stripes-custom stripes --css
    ```

    will generate Local/argento-stripes-custom theme based at stripes (swissup/theme-frontend-argento-stripes)

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

> **NOTE:** After enabling **CUSTOM** theme the **SwissupEditor** will not work for it.
> It works **only** for native Argento designs.
> Please, use custom `CSS, JS, templates` editing for changing custom theme look.

#### Next Up

- [Customization](../)
- [Change page layout](../change-page-layout/)
