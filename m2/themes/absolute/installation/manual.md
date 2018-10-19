---
layout: default
title: Absolute Theme Manual Installation
description: How to manually install Absolute Theme on Magento 2 store
category: Absolute Theme
---

# Manual Installation

 1. [Download package from your account dashboard at our site](#download-package-from-your-account)
 2. [Unpack package into magento root folder](#unpack-package-into-magento-root-folder)
 3. [Enable modules and run upgrade scripts](#enable-modules-and-run-upgrade-scripts)
 4. [Setup configuration and theme content](#setup-configuration-and-theme-content)

{% include installation/m2/manual.html site="swissuplabs.com" package="swissup/absolute-metapackage" modules="Swissup_Core Swissup_FontAwesome Swissup_SlickCarousel Swissup_ThemeEditor Swissup_ThemeEditorSwissupAbsolute" %}

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
