---
layout: default
title: SEO Suite Installation
description: How to install SEO Suite on Magento
keywords: seo suite installation
category: SEO Suite
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
 7. Relogin your store admin (it is requiered; user has to get new
    permissions) and start to configure extension.
