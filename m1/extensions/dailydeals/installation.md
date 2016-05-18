---
layout: default
title: Installation
description: magento daily deals module installation
keywords: " magento daily deal, daily deal magento extension, install "
category: Daily Deals
---

# Installation

* [Update from version 1.0.1 to 1.0.2](#update-from-version-101-to-102)
* [Update from version 1.0.2 to 1.1.0](#update-from-version-102-to-110)

Please follow next steps to complete the installation:

1. Go to your magento store root directory (via FTP or CPanel).
2. Create file `maintenance.flag` in root directory.
3. Open your store in browser; you have to see page
`Service Temporarily Unavailable` (if you can not see this page - probably you
try to install extension at wrong magento instance).
4. Unpack all files from extension archive into your magento store root directory.
5. Remove file `maintenance.flag` when copy process completed.
6. Login your store admin and start to configure extension.

* Navigate to `System > Configuration > Templates-Master > DailyDeals` and
enable extension for any store you need.

If you can not find Daily Deals extension in store admin, check cache management
and refresh cache if it is enabled. Not done yet? Check the store compilation and
run recompilation if it is enabled.

#### Update from version 1.0.1 to 1.0.2

If you upgrade Daily Deals from version 1.0.1 to 1.0.2 or higher you can delete
useless files and directories (or you may leave them; files do no harm):

```
app/code/local/TM/CountdownTimer
app/code/local/TM/DailyDeals/Model/Deal/Product.php
app/code/local/TM/DailyDeals/Model/Product.php
app/code/local/TM/DailyDeals/Model/Resource/Product.php
app/code/local/TM/DailyDeals/Model/Resource/Product/Collection.php
```

#### Update from version 1.0.2 to 1.1.0

If you upgrade Daily Deals to 1.1.0:

* apply instructions [update from version 1.0.1 to 1.0.2](#update-from-version-101-to-102)
* you can delete useless files and directories (or you may leave them; files do
no harm):

```
app/code/local/TM/DailyDeals/Block/Product/Highlight/Abstract.php
app/code/local/TM/DailyDeals/Block/Product/Show.php
app/code/local/TM/DailyDeals/Model/Message.php
app/code/local/TM/DailyDeals/Model/Message/
app/code/local/TM/DailyDeals/Model/Sources/
app/design/frontend/base/default/template/tm/dailydeals/product/highlight-column.phtml
app/design/frontend/base/default/template/tm/dailydeals/product/highlight-row.phtml
```

#### After you install the extension you can go to:

* [Leran how to create deals](../backend/create-deal/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)
