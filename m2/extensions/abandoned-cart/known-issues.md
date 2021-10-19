---
layout: default
title: Abandoned Cart Known Issues
description: Abandoned Cart known issues
keywords: magento dbandoned cart known issues
category: Abandoned Cart
---

# Known Issues

### Compatibility with Magento versions before 2.3.1

Since the version 1.1.2 module requires Magento 2.3.1 and later.

If you want to use the module with Magento 2.3.0 and older, please modify `Helper/Mail.php`:

```diff
--- a/Helper/Mail.php
+++ b/Helper/Mail.php
@@ -104,7 +104,7 @@ public function sendEmail(
            'store' => $quote->getStoreId()
            ])
            ->setTemplateVars($vars)
-           ->setFromByScope($rule->getSender(), $quote->getStoreId())
+           ->setFrom($rule->getSender())
            ->addTo($vars['email'], $vars['name'])
            ->getTransport();
```
