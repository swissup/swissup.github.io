---
layout: default
title: AMP installation
description: How to install Accelerated Mobile Pages on Magento
keywords: amp installation, accelerated mobile pages installation
category: Accelerated Mobile Pages
---

# Installation

### Unpack Archive

 1. Navigate to _System > Tools > Compilation_ and disable compilation mode.
 2. Go to your magento store root directory via FTP or CPanel.
 3. Create file `maintenance.flag` in root directory.
 4. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you don't see this page - probably
    you are trying to install extension at wrong magento instance).
 5. Unpack all files from extension archive into your magento store root
    directory.
 6. Remove file `maintenance.flag` when copy process completed.
 7. Login your store admin and start to configure extension.

### Run Installer

 1. Navigate to _Templates Master > Modules_, find **TM_Amp** module in the list,
    open `Select` action and click `Open Installer` link.

    ![Amp in modules grid](/images/m1/amp/installation/modules-grid.png)

 2. Select the stores where you wish to enable AMP module and press `Run` button.
    (This command will enable the module in configuration and create required cms
    pages and block for selected stores)

    ![Amp installation form](/images/m1/amp/installation/amp-form.png)

 3. Navigate to you store with `?amp=1` parameter in url to check how it looks
    like.

### Result

{% include gallery.html images=site.data.gallery.m1.amp.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

##### Next Up

 -  [Configuration](../configuration/)

<!--
 -  [Homepage](../customization/homepage/)
 -  [Footer Links](../customization/footer-links/)
 -  [Google Analytics](../google-analytics/)
-->
