---
layout: default
title: Amasty Commonrules integration
description: Firecheckout integration with Amasty Commonrules
keywords: Amasty_Commonrules
category: Firecheckout
---

# Amasty Commonrules

> Tested with Amasty_Commonrules 1.0.7

Apply the following patch:

```diff
--- a/app/code/local/Amasty/Commonrules/Model/Rule/Condition/Customer.php
+++ b/app/code/local/Amasty/Commonrules/Model/Rule/Condition/Customer.php
@@ -121,7 +121,9 @@

             if ($attr != 'entity_id' && !$customer->getData($attr)){
                 $address = $quote->getBillingAddress();
-                $customer->setData($attr, $address->getData($attr));
+                if ($address->hasData($attr)) {
+                    $customer->setData($attr, $address->getData($attr));
+                }
             }
         }

```

Save the file and disable compilation mode if needed.