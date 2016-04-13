---
layout: default
title: Attributepages integrartion with third-party modules
description: Attributepages integrartion with third-party modules
keywords: "attributepages, Mirasvit_Seo"
category: Attributepages
---

# Attributepages and third-party modules

### Mirasvit_Seo

Mirasvit seo module applies category attributes to attributepage
meta tags automatically. In order to avoid this behavior and leave correct meta
tags, you need to apply changes to Mirasvit_Seo source code.

Apply the following patch to `app/code/local/Mirasvit/Seo/Model/Observer.php`:

```diff
             if (Mage::registry('splash_page')) {
                 return;
             }
+
+            if (Mage::app()->getRequest()->getModuleName() == 'attributepages') {
+                return;
+            }
```

##### Related Articles

- [Attributepages documentation](/m1/attributepages/)
