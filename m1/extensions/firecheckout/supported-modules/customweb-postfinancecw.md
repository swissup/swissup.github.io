---
layout: default
title: Customweb PostFinanceCw integration
description: Firecheckout integration with Customweb PostFinanceCw
keywords: Customweb_PostFinanceCw
category: Firecheckout
---

# Customweb PostFinanceCw

Open `js/customweb/postfinancecw/checkout.js` and apply the following patch:

```diff
--- old
+++ new
         }
     },

-    firecheckoutUpdate: function(callOriginal, url, params)
+    firecheckoutUpdate: function(callOriginal, url, params, callback)
     {
         if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {
             this.savePaymentInfoInBrowser();
         }

-        callOriginal(url, params);
+        callOriginal(url, params, callback);

         if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {
             this.refillPaymentForm(this.formFields);
```
