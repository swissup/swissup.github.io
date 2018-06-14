---
layout: default
title: Email installation
description: Email installation instructions
keywords: "Email installation"
category: Email
---

# Installation instructions

{% include installation/m2/index.html %}

Run the following commands:

```bash
cd <magento_root>
composer require swissup/email
bin/magento module:enable Swissup_Email
bin/magento setup:upgrade
bin/magento setup:di:compile
```

##### Next up

Great! Now you might want to see next:

- [Usage](/m2/extensions/email/usage/)
- [Changelog](/m2/extensions/email/changelog/)
