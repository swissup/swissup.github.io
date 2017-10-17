---
layout: default
title: Customweb BeanstreamCw integration
description: Firecheckout integration with Customweb BeanstreamCw
keywords: Customweb_BeanstreamCw
category: Firecheckout
---

# Customweb BeanstreamCw

Open `js/customweb/beanstreamcw/checkout.js` and apply the following patch:

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
