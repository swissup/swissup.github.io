---
layout: default
title: Gene Braintree integration
description: Firecheckout integration with Gene Braintree
keywords: Gene, Braintree
category: Firecheckout
---

# Gene Braintree

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

         /**
@@ -91,7 +91,7 @@
         (window.vzeroPaypal || false),
         '<div id="paypal-complete"><div id="paypal-container"></div></div>',
         '#review-buttons-container .btn-checkout',
-        true,
+        $$('.firecheckout-set.onecolumn').length === 0,
         {
             ignoreAjax: ['firecheckout/index/saveOrder']
         }
```
