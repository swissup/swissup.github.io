---
layout: default
title: Easy Banners Security patch 28-09-2017
description: magento banner module security
category: Easy Banners
sidebar: sidebar.md
---

#### Magento 1 patch version - upgraded EasyBanners version download

 1. Go to your accout and log in:
     *  [**Argento**](https://argentotheme.com/downloadable/customer/products/)
     *  [**Templates Master**](https://templates-master.com/downloadable/customer/products/)
     *  [**SwissUpLabs**](https://swissuplabs.com/subscription/customer/products/)
 2. Find **M1_SEC_BANNERS** and download it

    > Click **Show all links** if link not visible
 3. Now start the upgrade:
     *  Turn the **compilation** mode **OFF** _System>Tools>Compilation = Disable_
     *  Clear the store cache: _System > Cache management = Clear cache_
     *  Cache should nbe **turned on**
     *  Open the **FTP** connection and create empty file **maintenance.flag** in the store root
     *  Check your site it shoud be in **Maintenance Mode (503 error)**
     *  Now upload all files from downloaded archive to **store root**
     *  After upload finished *Delete* **maintenance.flag** file (or *Rename* to **maintenance.flag.off**)
     *  Go to _Admin>TemplatesMaster>Modules_ and check _TM_Easybanners_ version it should be **1.7.3**
 4. Security patch should be applied now.

#### Magento 1 patch version - EasyBanners patching using **DIFF** file
 
> If your developer is familiar to **diff** files - patching can be easily applied. 

 1. Download [**DIFF**](https://swissuplabs.com/media/downloads/m1_easy_banners_d9a7c1115a89cac68d1ec6ed455cebae3cc7746c.diff)
 2. Apply **diff**
 3. Clear cache 
 4. That's it!

#### Magento 2 patch version - upgraded EasyBanners version download

 1. Go to your accout and log in:
     *  [**Argento**](https://argentotheme.com/downloadable/customer/products/)
     *  [**SwissUpLabs**](https://swissuplabs.com/subscription/customer/products/)
    
 2. Find **M2_SEC_BANNERS** and download it

    > Click **Show all links** if link not visible
    
 3. Now start the upgrade:
     * Upload that file to your store root via **FTP**
     * Connect via **SSH** go to store root 
     * Run `unzip m2_secure_update_easybanner-1.0.12-swissup.zip` command
     * Run following commands:

    ```bash
        # Run magento upgrade scripts
        php bin/magento setup:upgrade

        # Regenerate static content
        rm -rf pub/static/_requirejs var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/

        # Run deploy command for en_US locale:
        php bin/magento setup:static-content:deploy

        # or you can pass specific locales:
        php bin/magento setup:static-content:deploy en_US en_GB
    ```

 4. Security patch should be applied now.

#### Magento 2 patch version - EasyBanners patching using **DIFF** file
 1. Download [**DIFF**](https://swissuplabs.com/media/downloads/m2_easy_banners_8da454bc589bcec6b538e65676af24036b6be51f.diff)
 2. Apply **diff**
 3. Clear cache 

### Have a safe store!
