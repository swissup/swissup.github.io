---
layout: default
title: ArgentoBreeze custom theme
description: How to create ArgentoBreeze-based custom theme
category: ArgentoBreeze
---

# Argento custom theme

In this guide we will create a new ArgentoBreeze-based theme and then activate it
for selected store view.

## Create new theme

Use `breeze:theme:create` command to simplify the process:

```bash
cd <MAGENTO_ROOT>
bin/magento breeze:theme:create local/theme-frontend-argentobreeze-custom
```

It will ask you to choose parent theme for your new theme. Select it using
arrow keys and hit enter!

After successful completion it will show you the list of created files:

 -  `argentobreeze-custom/etc/view.xml` - image dimensions, gallery settings.
 -  `argentobreeze-custom/Magento_Theme/layout/default.xml` - layout update instructions.
 -  `argentobreeze-custom/web/css/_extend.less` - Custom styles and less variables.
 -  `argentobreeze-custom/web/js/breeze/extend.js` - Custom js file. You can safely
    remove it, if you don't need it.

![New theme command](/images/m2/argento-breeze/customization/new-theme.webp){:width="781" height="344"}

## Activate theme

Login to the Magento backend and navigate to _Content > Design > Configuration_.
Select the store view you want to apply the theme and press **Edit**.

Select your new theme in the **Applied Theme** dropdown and save the config.

#### Next Up

- [Customization](../)
