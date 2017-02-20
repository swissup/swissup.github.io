---
layout: default
title: Easy Banners installation
description: magento banner module installation
category: Easy Banners
sidebar: sidebar.md
---

**Proceed the following steps to install EasyBanners extension at your store:**

 1. Navigate to _System > Tools > Compilation_ and disable compilation mode.
 2. Go to your magento store root directory via FTP or CPanel.
 3. Create file `maintenance.flag` in root directory.
 4. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you don't see this page - probably
    you are trying to install extension at wrong magento instance).
 5. Unpack all files from extension archive into your magento store root
    directory.
 6. Remove file `maintenance.flag` when copy process completed.
 7. Login your store admin and add the banners.

##### Next Up

* [Manage Banners](../backend/manage-banners/)
* [Manage Placeholders](../backend/manage-placeholders/)
