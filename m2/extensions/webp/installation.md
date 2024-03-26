---
layout: default
title: Webp installation
description: Webp installation instructions
keywords: "Webp installation"
category: Webp
---

# Installation instructions

{% include installation/m2/index.html %}

##

Run the following commands:

```bash
cd <magento_root>
composer require swissup/webp
bin/magento module:enable Swissup_Webp Swissup_Core
bin/magento setup:upgrade --safe-mode=1
bin/magento setup:di:compile
```


##### Next up

Great! Now you might want to see next:

- [Quick Start](/m2/extensions/webp/quickstart/)
- [Changelog](/m2/extensions/webp/changelog/)
