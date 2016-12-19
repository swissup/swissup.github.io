---
layout: default
title: Webgriffe_Tntpro integration
description: Firecheckout integration with Webgriffe Tntpro
keywords: "Webgriffe_Tntpro, tnt, tntpro"
category: Firecheckout
---

# Webgriffe Tntpro

Open `app/code/community/Webgriffe/Tntpro/templates/checkout/onepage/extra/js.phtml`
and apply the patch below:

```diff
@@ -49,11 +49,18 @@
         );

         var elemBilling = $$('#co-billing-form ul.form-list')[0];
+        if (!elemBilling) {
+            elemBilling = $$('#billing-address ul.form-list')[0];
+        }
         elemBilling.insert(
             document.getElementById('tnt_delivery_point')
         );

-        var elemShipping = $$('#co-shipping-form ul.form-list')[0];
+        var elemShippingCnt = $('co-shipping-form');
+        if (!elemShippingCnt) {
+            elemShippingCnt = $('shipping-address')
+        }
+        var elemShipping = elemShippingCnt.select('ul.form-list')[0];
         elemShipping.insert(
             document.getElementById('tnt_delivery_point_selection')
         );
@@ -66,14 +73,14 @@
                 $$('#shipping-address-select option:last')[0].selected = true;
             }

-            $$("#co-shipping-form ul.form-list li:not(.exclude_from_hide)").invoke('hide');
+            elemShippingCnt.select("ul.form-list li:not(.exclude_from_hide)").invoke('hide');
             $('tnt_delivery_point_selection').show();
         });

         // @todo verificare se è possibile inserire questa logica nel cambio step
         $$('[id^="billing:use_for_shipping_"]').invoke('observe', 'click', function(e) {
             $('billing:use_tnt_delivery_point').checked = false;
-            $$("#co-shipping-form ul.form-list li").invoke('show');
+            elemShippingCnt.select("ul.form-list li").invoke('show');
             if ($('shipping-address-select')) {
                 $$('#shipping-address-select option:first')[0].selected = true;
                 // @todo verificare funzionamento cross-browser
```

That's all.
