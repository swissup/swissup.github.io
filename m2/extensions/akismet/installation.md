---
layout: default
title: Akismet installation
description: Akismet installation instructions
keywords: "Akismet installation"
category: Akismet
---

# Akismet installation instructions

Please follow next steps to complete the installation:

Run the following commands:

```bash
cd <magento_root>
composer config repositories.swissup composer https://swissup.github.io/packages/
composer require swissup/akismet:dev-master --prefer-source
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Akismet
bin/magento setup:upgrade
```

That's all.
