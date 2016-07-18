---
layout: default
title: Installation
description: magento recaptcha module installation
keywords: " magento recaptcha, recaptcha extension, install "
category: reCAPTCHA
---

# Installation

Please follow next steps to complete the installation:

1. Go to store backend and disable compilation mode.
2. Go to your magento store root directory (via FTP or CPanel).
3. Create file `maintenance.flag` in root directory.
4. Open your store in browser; you have to see page
`Service Temporarily Unavailable` (if you can not see this page - probably you
try to install extension at wrong magento instance).
5. Unpack all files from extension archive into your magento store root directory.
6. Remove file `maintenance.flag` when copy process completed.
7. Login your store admin and start to configure extension.

If you can not find reCAPTCHA extension in store admin, check cache management
and refresh cache if it is enabled. Not done yet? Check the store compilation and run recompilation if it is enabled.

You have to generate API key for reCAPTCHA at [www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin#createsite). Where to paste those keys and how to setup this extension, you can read at [Extension Configuration](../extension-configuration/) page.

Please, feel free to contact us about any additional questions:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
