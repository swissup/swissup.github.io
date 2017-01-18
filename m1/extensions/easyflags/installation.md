---
layout: default
title: Easy Flags Installation
description: magento easy flags module installation
keywords: " magento language switcher flag, magento enable language switcher, magento language switcher, magento language selector "
category: Easy Flags
---


# Easy Flags installation instructions

Please follow next steps to complete the installation:

 1. Go to store backend and disable compilation mode.
 2. Go to your magento store root directory (via FTP or CPanel).
 3. Create file `maintenance.flag` in root directory.
 4. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you can not see this page - probably
    you try to install extension at wrong magento instance).
 5. Unpack all files from extension archive into your magento store root
    directory.
 6. Remove file `maintenance.flag` when copy process completed.
 7. Clear Magento Cache.
 8. Logout from your store admin and then login back, to refresh your admin
    user access rights.

* Navigate to `System > Configuration > Templates-Master > Easy Flags` and
enable extension for any store you need.

___

#### After you install an extension you can go to:

*   [Easy Flags Use Cases](../use-cases/)
*   [Easy Flags Configuration](../configuration/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)