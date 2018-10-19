---
layout: default
title: Prolabels Installation
description: magento prolabels module installation
keywords: " magento prolabels extension "
category: Prolabels
---

# Manual Installation

{% include installation/m2/manual.html site="swissuplabs.com" package="swissup/pro-labels" modules="Swissup_Core Swissup_SubscriptionChecker Swissup_ProLabels" %}

#### Upgrade from version 1.0.x to 1.1.0

You can get errors when you try to run `setup:di:compile` after upgrade. To solve them you have to remove deprecated files:

```
Block/Adminhtml/Label/Edit/Form.php
Block/Adminhtml/Label/Edit/Tab/Category.php
Block/Adminhtml/Label/Edit/Tab/Index/Grid.php
Block/Adminhtml/Label/Edit/Tab/Main.php
Block/Adminhtml/Label/Edit/Tab/Product.php
Block/Adminhtml/Label/Edit/Tabs.php
Block/Adminhtml/Label/Helper/CategoryImage.php
Block/Adminhtml/Label/Helper/ProductImage.php
Controller/Adminhtml/Label/NewConditionHtml.php
Model/Label/CategoryImage.php
Model/Label/CategoryUpload.php
Model/Label/ProductImage.php
Model/Label/ProductUpload.php
Ui/Component/Listing/Columns/CategoryImage.php
Ui/Component/Listing/Columns/ProductImage.php
view/adminhtml/requirejs-config.js
view/frontend/requirejs-config.js
view/frontend/web/css/prolabels.css
view/frontend/web/js/prolabel-product-view.js
```

#### Labels in Catalog and Search pages

ProLabels module does not require any changes in any templates or other source code files.

> Installation instraction for ProLabels version 1.0.x reqired modification of theme templates to get labels on listing page. You can leave this modifications or rollback them. There are no conflicts with old version.

#### Reindex Labels From Command Line

```bash
    cd <magento_root>
    bin/magento prolabels:reindex:all
```

###### After installing the extension you can go to:

* [Configuration](../../configuration/)
* [Admin Interface](../../interfaces/)
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)