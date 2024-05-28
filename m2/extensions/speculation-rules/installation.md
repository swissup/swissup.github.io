---
layout: default
title: Speculation Rules installation
description: Speculation Rules installation instructions
keywords: "Speculation Rules installation"
category: Speculation Rules
---

# Installation instructions

{% include installation/m2/index.html %}

##

Run the following commands:

```bash
cd <magento_root>
composer require swissup/module-speculation-rules
bin/magento module:enable Swissup_SpeculationRules Swissup_Core
bin/magento setup:upgrade --safe-mode=1
```


##### Next up

Great! Now you might want to see next:

- [Changelog](/m2/extensions/speculation-rules/changelog/)
