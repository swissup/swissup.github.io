---
layout: default
title: CDN
description: magento cdn module
keywords: >
    magento cdn, magento cdn amazon s3,
    magento cdn amazon cloudfront, magento cdn rackspace
category: CDN
---

# CDN installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Go to your magento store root directory (via FTP or CPanel).
4. Create file `maintenance.flag` in root directory.
5. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you can not see this page - probably you
    try to install extension at wrong magento instance).
6. Unpack all files from extension archive into your magento store root directory.
7. Remove file `maintenance.flag` when copy process completed.
8. Refresh your magento store cache.
9. Logout from your store admin and then login back, to refresh your admin user
access rights.

* Navigate to `System > Configuration > Templates-Master > CDN` and
enable extension for any store you need.

That's all. Navigate to your store and check how it looks.

#### Next Up
- [Configuration](../configuration/)
- [Get API Key](../get-api-key/)

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)