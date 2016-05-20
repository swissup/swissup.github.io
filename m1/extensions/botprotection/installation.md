---
layout: default
title: Installation
description: magento bot protection installation
keywords: " magento bot protection, install "
category: Bot Protection
---

# Installation

Please follow next steps to complete the installation:

1. Go to your store backend and disable compilation mode - `System` > `Tools` >
`Compilation`.
2. Go to your magento store root directory via FTP or CPanel.
3. Create file `maintenance.flag` in root directory.
4. Open your store in browser; you have to see page
`Service Temporarily Unavailable` (if you can not see this page - probably you
try to install extension at wrong magento instance).
5. Unpack all files from extension archive into your magento store root directory.
6. Remove file `maintenance.flag` when copy process completed.
7. Login your store admin and start to configure extension.

* Navigate to `System` > `Configuration` > `Templates-Master` > `Bot Protection`
 and enable extension.

Find Bot Protection extension in menu `Templates Master` at your store backend.
If you can not find it, then check cache management and refresh cache (if it is
enabled). Still no? Check the store compilation and run recompilation if it
is enabled.

#### After you install the extension you can go to:

* [Leran how to create deals](../backend/create-deal/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
