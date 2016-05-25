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
 3. [Install Argento theme](#install-argento-theme)

#### 1. Unpack Argento package into magento root folder

> **Warning!**
> 
> Extracted files will overwrite the current files with the same name. 
> Please make sure you have a backup before overwriting your current files.

You can upload Argento archive and unpack it using Terminal or CPanel.

 1. Using terminal
    1. Upload zip archive into Magento root folder
    2. Run `unzip [filename.zip]` command
 2. Using CPanel
    - Click on `File Manager` icon
    - Navigate to the Magento2 root directory
    - Click on `Upload Files`
    - In the popup window navigate to the Argento archive
    - Click on the `Okay` or `Save` button to upload the file
    - Click on the uploaded file
    - Click on the `Extract File Contents` option in the file manager interface
    
#### 2. Enable modules and run upgrade scripts

Run the following commands in teminal:

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
rm -rf pub/static/_requirejs
bin/magento setup:static-content:deploy

# if you are using di:compilation, you need to run it again:
rm -rf var/generation var/di
bin/magento setup:di:compile
```

#### 3. Install Argento theme

1. Navigate to `Swissup > Module Manager`, find theme you'd like to use at 
    your store and click `Open Installer` option in actions column

    ![Module manager](/images/m2/argento/installation/module_manager.png)

4. Fill the `Identity Key` and select store, when you wish to install Argento
5. Press `Install` button

#### 4. That's all. Navigate to you store frontend.

##### Next up

- [Small css customizations](/m2/argento/css-customization/)
- [Create Argento based custom theme](/m2/argento/custom-theme/)
- [View list of included modules](/m2/argento/#extensions)
