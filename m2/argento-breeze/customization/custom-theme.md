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

![New theme command](/images/m2/argento-breeze/customization/new-theme.webp){:width="781" height="344"}

## Activate theme

Login to the Magento backend and navigate to _Content > Design > Configuration_.
Select the store view you want to apply the theme and press **Edit**.

Select your new theme in the **Applied Theme** dropdown and save the config.

#### Next Up

- [Customization](../)
