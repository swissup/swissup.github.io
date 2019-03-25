---
layout: default
title: Absolute Theme for Magento 2 composer installation
description: How to install Absolute Theme on Magento 2 via composer
category: Absolute Theme
exclude_from_search: true
---

# Installation

* TOC
{:toc}

{% include installation/m2/composer.html site="swissuplabs.com" package="swissup/absolute-metapackage" modules="Swissup_Core Swissup_FontAwesome Swissup_SlickCarousel Swissup_ThemeEditor Swissup_ThemeEditorSwissupAbsolute" %}

#### 3. Setup configuration and theme content

1. Navigate to _Swissup > Module Manager_, find `Swissup_ThemeFrontendAbsolute`
   and click `Open Installer` option in actions column

    ![Module manager](/images/m2/themes/absolute/installation/module_manager.png)

2. Select store, where you wish to install Absolute Theme and press `Install` button

    > **Warning!**
    >
    > If you have single store view, install theme for `All Store Views` or go to
    > _Stores > Configuration > General > Single-Store Mode_ and set
    > `Enable Single-Store Mode` to `Yes`.
    >
    > Installation on store view level will not work because of bug in Magento.

    ![Installation Form](/images/m2/themes/absolute/installation/form.png)

#### 4. That's all. Navigate to you store to check your new theme:

![Homepage screenshot](/images/m2/themes/absolute/absolute_homepage.png)
