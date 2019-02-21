---
layout: default
title: Klarna_Payments integration
description: Firecheckout integration with Klarna_Payments
keywords: klarna
category: Firecheckout
---

# Klarna Payments

> Tested on version 4.3.0

Open `app/design/frontend/base/default/template/klarnapayments/api.phtml` and apply the
following patch:

```diff
--- api.phtml
+++ api.phtml
-    var klarnaPaymentArray = [];
+    if (typeof klarnaPaymentArray === 'undefined') {
+        var klarnaPaymentArray = [];
+    }
```

That's all!
