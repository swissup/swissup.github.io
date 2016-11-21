---
layout: default
title: Ajaxsearch installation
description: Ajaxsearch installation instructions
keywords: "Ajaxsearch installation"
category: Ajaxsearch
---

# Ajaxsearch installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

```bash
cd <magento_root>
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Ajaxsearch
bin/magento setup:upgrade
```

That's all.
