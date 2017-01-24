---
layout: default
title: Easy Tabs Installation
description: magento product tabs module installation
keywords: " magento product tabs, magento product tabs extension free, add tabs
magento product page "
category: Easy Tabs
---

# Easy Tabs installation instructions
Please follow next steps to complete the installation:

1. Go to store backend and disable compilation mode.
2. Go to your magento store root directory (via FTP or CPanel).
3. Create file `maintenance.flag` in root directory.
4. Open your store in browser; you have to see page
   `Service Temporarily Unavailable` (if you can not see this page - probably
   you are tring to install extension at wrong magento instance).
5. Unpack all files from extension archive into your magento store root
   directory.
6. Remove file `maintenance.flag` when copy process completed.
7. Login your store admin and start to configure extension.

* Navigate to `System > Configuration` ➔ `Templates-Master` ➔ `Easy Tabs` and
enable extension for any store you need.

If you can not find Easy Tabs extension in store admin then check cache
management. Refresh cache if it is enabled. Still no? Check the store
compilation and run recompilation if it is enabled.

That's all. Now you can configure tabs at [Product Tabs Grid][easytabs_grid]
or create custom tabs at [Widget Tabs Grid]().

#### After you install an extension you can go to:

* [Easytabs Grid][easytabs_grid]

[easytabs_grid]: /m1/extensions/easytabs/#easytabs-grid
