---
layout: default
title: Ajaxsearch installation
description: Ajaxsearch installation instructions
keywords: "Ajaxsearch installation"
category: Ajaxsearch
---

# Installation instructions

{% include installation/m2/index.html %}
# Ajaxsearch installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

```bash
cd <magento_root>
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Ajaxsearch
bin/magento setup:upgrade
rm -rf pub/static/_requirejs var/view_preprocessed
bin/magento setup:static-content:deploy
```

That's all.
