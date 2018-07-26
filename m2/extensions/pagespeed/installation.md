---
layout: default
title: Pagespeed installation
description: Pagespeed installation instructions
keywords: "Pagespeed installation"
category: Pagespeed
---

# Installation instructions

{% include installation/m2/index.html %}

Run the following commands:

```bash
cd <magento_root>
composer require swissup/pagespeed
php bin/magento module:enable Swissup_Pagespeed
php bin/magento setup:upgrade
php bin/magento setup:di:compile
```

##### Next up

Great! Now you might want to see next:

- [Usage](/m2/extensions/pagespeed/usage/)
- [Changelog](/m2/extensions/pagespeed/changelog/)
