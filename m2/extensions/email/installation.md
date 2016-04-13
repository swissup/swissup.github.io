---
layout: default
title: Email installation
description: Email installation instructions
keywords: "Email installation"
category: Email
---

# Email installation instructions

Please follow next steps to complete the installation:

Run the following commands:

```bash
cd <magento_root>
composer require swissup/email
bin/magento module:enable Swissup_Email
bin/magento setup:upgrade
```

That's all.

##### Next up

Great! Now you might want to see next:

- [Usage](/m2/email/usage/)
