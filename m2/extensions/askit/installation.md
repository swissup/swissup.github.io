---
layout: default
title: AskIt installation
description: magento2 product questions askit module installation
keywords: "magento product questions module, product questions on magento
product page, magento askit module installation "
category: AskIt
---

# AskIt installation instructions

Please follow next steps to complete the installation:

Run the following commands:

```bash
cd <magento_root>
composer config repositories.swissup composer https://swissup.github.io/packages/
composer require swissup/askit
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Askit
bin/magento setup:upgrade
```

That's all.
