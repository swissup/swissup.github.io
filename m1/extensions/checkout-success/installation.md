---
layout: default
title: Installation
description: magento checkout success page installation
keywords: " magento checkout success page, install "
category: Checkout Success
---

# Installation

Please follow next steps to complete the installation:

 1. Go to your store backend and disable compilation mode - `System` > `Tools`
    > `Compilation`.
 2. Go to your magento store root directory via FTP or CPanel.
 3. Create file `maintenance.flag` in root directory.
 4. Open your store in browser; you have to see page
    `Service Temporarily Unavailable` (if you can not see this page - probably
    you try to install extension at wrong magento instance).
 5. Unpack all files from extension archive into your magento store root
    directory.
 6. Remove file `maintenance.flag` when copy process completed.
 7. Login your store admin and start to configure extension.

Navigate to `System` > `Configuration` > `TM Checkout` > `Success Page` and
enable extension.

#### After you install the extension you can go to:

* [System Config and play with preview feature](../backend/#mockup)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
