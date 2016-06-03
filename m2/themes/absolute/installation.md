---
layout: default
title: Absolute Theme Installation
description: Absolute Theme documentation
keywords: >
    magento 2 responsive template, magento 2 themes, magento 2 template,
    magento themes
category: Absolute Theme
---

## Absolute Theme for Magento 2.x installation instructions

### Contents

 1. [Unpack Absolute Theme package into magento root folder](#unpack-absolute-theme-package-into-magento-root-folder)
 2. [Enable modules and run upgrade scripts](#enable-modules-and-run-upgrade-scripts)
 3. [Setup configuration and theme content](#setup-configuration-and-theme-content)

#### 1. Unpack Absolute Theme package into magento root folder

> **Warning!**
>
> Extracted files will overwrite the current files with the same name.
> Please make sure you have a backup before overwriting your current files.

You can upload Absolute Theme archive and unpack it using shell or cPanel.

 1. Using shell
    1. Upload zip archive into Magento root folder
    2. Run `unzip [filename.zip]` command
 2. Using cPanel
    1. Log into cPanel
    2. Click on `File Manager` icon
    3. Navigate to the Magento2 root directory
    4. Click on `Upload Files`
    5. In the popup window navigate to the Absolute Theme archive
    6. Click on the `Okay` or `Save` button to upload the file
    7. Click on the uploaded file
    8. Click on the `Extract File Contents` option in the file manager interface

#### 2. Enable modules and run upgrade scripts

Go to admin `System > Cache Management` and refresh caches. This step is required even if cache is disabled.
Then run the following commands in shell

```bash
# enable Absolute Theme modules
bin/magento module:enable\
    Swissup_Core\
    Swissup_FontAwesome\
    Swissup_SlickCarousel\
    Swissup_ThemeEditor

# clear cache
bin/magento cache:flush

# run magento upgrade scripts
bin/magento setup:upgrade

# regenerate static content
rm -rf pub/static/_requirejs
rm -rf var/view_preprocessed
bin/magento setup:static-content:deploy

# if you are using di:compilation, you need to run it again:
rm -rf var/generation var/di
bin/magento setup:di:compile
```

#### 3. Setup configuration and theme content

1. Navigate to `Swissup > Module Manager`, find `Swissup_ThemeFrontendAbsolute`
   and click `Open Installer` option in actions column

    ![Module manager](/images/m2/themes/absolute/installation/module_manager.png)

2. Select store, where you wish to install Absolute Theme
    and press `Install` button

    > **Warning!**
    >
    > If you have single store view, install theme for `All Store Views` or go to
    > `Stores > Configuration > General > Single-Store Mode` and set
    > `Enable Single-Store Mode` to `Yes`.
    > Installation on store view level will not work because of bug in Magento.

    ![Installation Form](/images/m2/themes/absolute/installation/form.png)

#### 4. That's all. Navigate to you store to check your new theme:

![Homepage screenshot](/images/m2/themes/absolute/absolute_homepage.png)
