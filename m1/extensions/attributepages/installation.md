---
layout: default
title: Attributepages Installation
description: Attribute based pages installation
category: Attributepages
---

# Attributepages installation

Please follow next steps to complete the installation:

 1. Go to store backend and disable compilation mode.
 2. Go to your magento store root directory (via FTP or CPanel).
 3. Create file `maintenance.flag` in root directory.
 4. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you can not see this page - probably you
    try to install extension at wrong magento instance).
 5. Unpack all files from extension archive into your magento store root directory.
 6. Remove file `maintenance.flag` when copy process completed.
 7. [Create](../attribute-based-page/backend/#attribute-based-pages-grid) your first attribute page.

If you can not find Attribute Pages extension in store admin, check cache management
and refresh cache if it is enabled. Not done yet? Check the store compilation and
run recompilation if it is enabled.

#### Next Up

 -  [Create attribute based page](../attribute-based-page/backend/#attribute-based-pages-grid)
