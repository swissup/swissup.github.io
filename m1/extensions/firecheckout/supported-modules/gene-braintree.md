---
layout: default
title: Gene Braintree integration
description: Firecheckout integration with Gene Braintree
keywords: gene, braintree, gene_braintree
category: Firecheckout
---

# Gene Braintree

> Gene_Braintree version — 2.1.7

Open `app/design/frontend/base/default/template/gene/braintree/js/firecheckout.phtml`
and apply the following patch:

```diff
@@ -40,6 +40,9 @@
                     var paymentThis = this;
                     var paymentArguments = arguments;

+                    // store last arguments to make a proper request from submitCheckout method
+                    vzeroIntegration.firecheckoutArguments = arguments;
+
                     // If everything was a success on the checkout end, let's submit the vZero integration
                     vzeroIntegration.submit('creditcard', function () {
                         return _originalSave.apply(paymentThis, paymentArguments);
@@ -59,7 +62,8 @@
          */
         submitCheckout: function() {
             // Run the original checkouts submit action
-            return checkout.save();
+            var firecheckoutArguments = this.firecheckoutArguments || [];
+            return checkout.save.apply(checkout, firecheckoutArguments);
         },

@@ -96,11 +96,10 @@
         (window.vzeroPaypal || false),
         '<div id="paypal-complete"><div id="paypal-container"></div></div>',
         '#review-buttons-container .btn-checkout',
-        $$('.firecheckout-set.onecolumn').length === 0,
+        true,
         {
             ignoreAjax: ['firecheckout/index/saveOrder']
-        },
-        $$('.firecheckout-set.onecolumn').length === 1
+        }
     );
```

Save the file and clear Magento cache.
