---
layout: default
title: Ajaxpro installation
description: Ajaxpro installation instructions
keywords: "Ajaxpro installation"
category: Ajaxpro
---

# Ajaxpro installation instructions

Please follow next steps to complete the installation:

Run the following commands:

```bash
cd <magento_root>
composer config repositories.swissup composer https://swissup.github.io/packages/
composer require swissup/ajaxpro:dev-master --prefer-source
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Ajaxpro
bin/magento setup:upgrade
```

That's all.
