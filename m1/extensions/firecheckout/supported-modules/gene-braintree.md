---
layout: default
title: Gene Braintree integration
description: Firecheckout integration with Gene Braintree
keywords: gene, braintree, gene_braintree
category: Firecheckout
---

# Gene Braintree

> Gene_Braintree version — 2.2.1

Open `app/design/frontend/base/default/template/gene/braintree/js/firecheckout.phtml`
and apply the following patch:

```diff
@@ -80,14 +80,14 @@
          */
         setLoading: function () {
             checkout.setLoadWaiting(true);
-            checkout.loadCounter = 1;
+            FC.Loader.counter = 1;
         },

         /**
          * Override the loading function to set the counter to 0 so the loader actually gets hidden
          */
         resetLoading: function() {
-            checkout.loadCounter=0;
+            FC.Loader.counter = 0;
             checkout.setLoadWaiting(false);
         }

```

Save the file and clear Magento cache.
