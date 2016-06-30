---
layout: default
title: Argento installation
description: Argento intallation instructions
category: Argento
---

# Argento Installation

### Contents

 1. [Unpack Argento package into magento root folder](#unpack-argento-package-into-magento-root-folder)
 2. [Enable modules and run upgrade scripts](#enable-modules-and-run-upgrade-scripts)
 3. [Setup configuration and theme content](#setup-configuration-and-theme-content)
 4. [Deploy sample data images](#deploy-sample-data-images)

#### 1. Unpack Argento package into magento root folder

> **Warning!**
>
> Extracted files will overwrite the current files with the same name.
> Please make sure you have a backup before overwriting your current files.

You can upload Argento archive and unpack it using shell or CPanel.

 1. Using shell
    1. Upload zip archive into Magento root folder
    2. Run `unzip [filename.zip]` command
 2. Using CPanel
    1. Log into CPanel
    2. Click on `File Manager` icon
    3. Navigate to the Magento2 root directory
    4. Click on `Upload Files`
    5. In the popup window navigate to the Argento archive
    6. Click on the `Okay` or `Save` button to upload the file
    7. Click on the uploaded file
    8. Click on the `Extract File Contents` option in the file manager interface

Navigate to `System > Tools > Сache Management` and flush cache.

#### 2. Enable modules and run upgrade scripts

Run the following commands in shell

```bash
# enable Argento modules
bin/magento module:enable\
    Swissup_Ajaxsearch\
    Swissup_Attributepages\
    Swissup_Core\
    Swissup_EasySlide\
    Swissup_Easybanner\
    Swissup_Easycatalogimg\
    Swissup_Easytabs\
    Swissup_Fblike\
    Swissup_FontAwesome\
    Swissup_Highlight\
    Swissup_ProLabels\
    Swissup_Reviewreminder\
    Swissup_RichSnippets\
    Swissup_SlickCarousel\
    Swissup_SoldTogether\
    Swissup_Testimonials

# clear cache
bin/magento cache:flush

# run magento upgrade scripts
bin/magento setup:upgrade

# regenerate static content
rm -rf pub/static/_requirejs var/view_preprocessed
bin/magento setup:static-content:deploy

# if you are using di:compilation, you need to run it again:
rm -rf var/generation var/di
bin/magento setup:di:compile
```

#### 3. Setup configuration and theme content

1. Navigate to `Swissup > Module Manager`, find theme you'd like to use at
    your store and click `Open Installer` option in actions column

    ![Module manager](/images/m2/argento/installation/module_manager.png)

2. Fill the `Identity Key` and select store, where you wish to install Argento
    and press `Install` button

    ![Installation Form](/images/m2/argento/installation/form.png)

#### 4. Deploy sample data images

Sample images are located in `ARGENTO_THEME/resources/media` folder. Copy
all contents of this folder into `MAGENTO_ROOT/pub/media` directory.

```bash
cd MAGENTO_ROOT
cp -R app/design/frontend/Swissup/argento-[essence]/resources/media/* pub/media/
# If you are using theme from vendor folder:
# cp -R vendor/swissup/theme-frontend-argento-[essence]/resources/media/* pub/media/
chmod -R 777 pub/media/easybanner pub/media/easyslide
```

#### 5. That's all. Navigate to you store to check your new theme:

![Homepage screenshot](/images/m2/argento/installation/homepage.png)

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [View list of included modules](/m2/argento/#extensions)
