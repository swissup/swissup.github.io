---
layout: default
title: Firecheckout installation instructions
description: magento firecheckout module installation
keywords: firecheckout installation, onestep checkout installation
category: Firecheckout
---


# Installation

Please follow next steps to complete the installation:

 1. Go to store backend and disable compilation mode
 2. Go to your magento store root directory (via FTP or CPanel)
 3. Create file `maintenance.flag` in root directory
 4. Open your store in browser

    > You should see the "Service Temporarily Unavailable" page.
    >
    > If you don't see this page - probably you are trying to install
    > extension at wrong magento instance

 5. Unpack all files from extension archive into your magento store root directory
 6. Remove `maintenance.flag` file when copy process completed
 7. Navigate to _System > Configuration > TM Checkout > Firecheckout_ and
    enable extension

If you can not find Firecheckout extension in store admin, check cache management
and refresh cache if it is enabled. Not done yet? Check the store compilation and
run recompilation if it is enabled.

#### Next Up

 -  [Configuration](../configuration/)
