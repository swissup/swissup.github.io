---
layout: default
title: Klarna_Payments integration
description: Firecheckout integration with Klarna_Payments
keywords: klarna
category: Firecheckout
---

# Klarna Payments

Open `app/design/frontend/base/default/template/klarnapayments/api.phtml` and apply the
following patch:

```diff
--- api.phtml
+++ api.phtml
@@ -40,7 +40,10 @@
         }
     }

-    window.klarnaPaymentArray = [];
+    if (typeof klarnaPaymentArray === 'undefined') {
+        window.klarnaPaymentArray = [];
+    }
+
     Payment.prototype.save = Payment.prototype.save.wrap(function(save) {
         if (klarnaPaymentArray.length === 0) {
             return save();
```

Open `app/design/frontend/base/default/layout/klarna_payments.xml` and apply the
following patch:

```diff
--- klarna_payments.xml
+++ klarna_payments.xml
@@ -30,7 +30,7 @@
     </checkout_onepage_index>

     <firecheckout_index_index>
-        <reference name="content">
+        <reference name="before_body_end">
             <block type="core/template" name="klarna.js" template="klarnapayments/api.phtml" after="-"/>
             <block type="klarna_payments/payments" name="klarna.payments.api" template="klarnapayments/js.phtml" after="-"/>
             <block type="klarna_payments/direktdebit" name="klarna.direktdebit.api" template="klarnapayments/js.phtml" after="-"/>
```
