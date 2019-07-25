---
layout: default
title: Loading icon keeps spinning
description: Loading icon keeps spinning infinitely on initial page load
keywords: firecheckout issue infinit loading, Sisow_Payment, Magecomp_Paymentfee
category: Firecheckout
---

# Loading icon keeps spinning

***Symptom***: load checkout page and the loading icon keeps spinning. No javascript errors in console. Cache and static files cleared. Redeployed the static content. But nothing helps.

### How to cure

One of the reasons can be *third-party payment method* **Sisow_Payment**, **Magecomp_Paymentfee**, **Boolfly_PaymentFee**. If your Magento instance has one of modules then you have to apply integration instruction listed below:

Find file `app/code/[Vendor]/[ModuleName]/view/frontend/web/js/action/checkout/cart/totals.js` and modify it ([Vendor] - Sisow or Magecomp and [ModuleName] - Payment or Paymentfee):

```diff
--- old
+++ new
@@ -4,7 +4,7 @@
         'jquery',
         'Magento_Checkout/js/model/quote',
         'Magento_Checkout/js/model/resource-url-manager',
-        'Magento_Checkout/js/model/payment-service',
+        // 'Magento_Checkout/js/model/payment-service',
         'mage/storage',
         'mage/url',
         'Magento_Checkout/js/action/get-totals',
@@ -16,7 +16,7 @@
         $,
         quote,
         urlManager,
-        paymentService,
+        // paymentService,
         storage,
         urlBuilder,
         getTotalsAction

```

Find other file `app/code/[Vendor]/[ModuleName]/view/frontend/web/js/action/payment/select-payment-method.js` and modify it also ([Vendor] - Sisow or Magecomp and [ModuleName] - Payment or Paymentfee):

```diff
--- old
+++ new
@@ -12,7 +12,9 @@
 
         return function (paymentMethod) {
             quote.paymentMethod(paymentMethod);
-            totals(isLoading, paymentMethod['method']);
+            if (paymentMethod) {
+                totals(isLoading, paymentMethod['method']);
+            }
         }
     }
 );
```

Do not forget to redeploy static content after changes.
