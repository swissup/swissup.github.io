---
layout: default
title: ArgentoBreeze custom theme
description: How to create ArgentoBreeze-based custom theme
category: ArgentoBreeze
---

# Argento custom theme

In this guide we will create a new ArgentoBreeze Stripes-based theme called “Local/argentobreeze-custom” and then activate it for selected store view.

## Create new theme

 1. Open your terminal and navigate to `app/design/frontend` folder:

    ```bash
    cd <MAGENTO_ROOT>/app/design/frontend
    ```

 2. Create `Local/argentobreeze-custom` folder and navigate inside:

    ```bash
    mkdir -p Local/argentobreeze-custom && cd Local/argentobreeze-custom
    ```

 3. Create `theme.xml` file:

    ```xml
    <theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
        <title>Custom ArgentoBreeze Stripes Theme</title>
        <parent>Swissup/argentobreeze-stripes</parent>
    </theme>
    ```

 4. Create `registration.php` file:

    ```php
    <?php

    use Magento\Framework\Component\ComponentRegistrar;

    ComponentRegistrar::register(
        ComponentRegistrar::THEME,
        'frontend/Local/argentobreeze-custom',
        __DIR__
    );
    ```

## Activate theme

Login to the Magento backend and navigate to _Content > Design > Configuration_.
Select the store view you want to apply the theme and press **Edit**.

Select `Custom ArgentoBreeze Stripes Theme` in the **Applied Theme** dropdown
and save the config.

#### Next Up

- [Customization](../)
