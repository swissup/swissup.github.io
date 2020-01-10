---
layout: default
title: Removing other themes except one
description: Removing other themes except one
keywords: >
    theme, design, remove
category: Argento
---

# Removing other themes except one

Often clients have only one storeview and want to use just one theme design.
But when running the `static content deploy` , `compilation` or putting site to
**production mode** Magento is starting to deploy all the theme designs.
To save the time you can **disable** not used themes using following instructions:

#### For example you use only **Argento Force** theme

 1. Disable all unused theme editors using command:
    ```bash
    bin/magento module:disable Swissup_ThemeEditorArgentoEssence Swissup_ThemeEditorArgentoFlat Swissup_ThemeEditorArgentoLuxury Swissup_ThemeEditorArgentoMall Swissup_ThemeEditorArgentoPure2 Swissup_ThemeEditorArgentoStripes
    ```
 2. Go to your store root `composer.json` file
 3. After `"require": { ... },` section plase add new `replace` with disabled designs:

    ```json
    "replace": {
        "swissup/theme-frontend-argento-essence": "*",
        "swissup/theme-frontend-argento-flat": "*",
        "swissup/theme-frontend-argento-pure2": "*",
        "swissup/theme-frontend-argento-mall": "*",
        "swissup/theme-frontend-argento-stripes": "*",
        "swissup/theme-frontend-argento-luxury": "*"
    },
    ```
 4. Run `composer update argento-m2` command. It should upgrade all **Argento**
    modules and remove themes listed above.
