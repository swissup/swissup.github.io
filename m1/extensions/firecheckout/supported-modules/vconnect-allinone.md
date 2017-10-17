---
layout: default
title: Vconnect_AllInOne integration
description: Firecheckout integration with Vconnect AllInOne
keywords: "Vconnect_AllInOne, postnord"
category: Firecheckout
---

# Vconnect AllInOne

Open `app/design/frontend/base/default/template/vconnect/embedded/base.phtml`
and apply the patch below:

```diff
--- old/base.phtml
+++ new/base.phtml
@@ -1997,6 +1997,10 @@
                                         }
                                         // End fixer for IWD_OPC

+                                        if (typeof FireCheckout !== 'undefined') {
+                                            checkout.update(checkout.urls.shipping_method);
+                                        }
+
                                         // Start fixer for Onestepcheckout (Both trigger clicks for reload total section)
                                         if ($('#onestepcheckout-form').length > 0) {
                                             if ($('#onestepcheckout-form input[name="payment[method]"]:checked').length > 0) {
```
