---
layout: default
title: EasyNolo BancaSellaPro integration
description: Firecheckout integration with EasyNolo BancaSellaPro
keywords: EasyNolo_BancaSellaPro, gestpayform
category: Firecheckout
---

# EasyNolo BancaSellaPro

Open `js/bancasellapro/gestpayform.js` and apply the following patch:

```diff
--- js/bancasellapro/gestpayform.js
+++ js/bancasellapro/gestpayform.js
@@ -52,7 +52,9 @@
             }else if (this.enableFormToIframe){
                 this.start();
                 // al click sulla form visibile e con input disabilitati, la funzione li riabilita
-                $(this.showHidePaymentDivId).down('.step-title').on('click', this.checkClickPayment.bind(this));
+                if ($(this.showHidePaymentDivId)) {
+                    $(this.showHidePaymentDivId).down('.step-title').on('click', this.checkClickPayment.bind(this));
+                }

                 this.enableTransactionKey = config.enableTransactionKey;
             }
@@ -134,11 +136,11 @@

         enableForm : function (){
             if(!this.lock){
-                if(!this.enable ){
+                // if(!this.enable ){
                     $(this.formId).show();
                     Form.enable($(this.formId));
                     this.enable = true;
-                }
+                // }
                 return true;
             }
             return false;
```

Open `app/code/community/EasyNolo/BancaSellaPro/etc/config.xml` and apply the
following patch:

```diff
--- app/code/community/EasyNolo/BancaSellaPro/etc/config.xml
+++ app/code/community/EasyNolo/BancaSellaPro/etc/config.xml
@@ -262,6 +262,14 @@
                     </easynolo_bancasellapro_add_result>
                 </observers>
             </controller_action_postdispatch_checkout_onepage_saveOrder>
+            <controller_action_postdispatch_firecheckout_index_saveOrder>
+                <observers>
+                    <easynolo_bancasellapro_add_result>
+                        <class>easynolo_bancasellapro/observer</class>
+                        <method>addDataToResultSaveOrderIframe</method>
+                    </easynolo_bancasellapro_add_result>
+                </observers>
+            </controller_action_postdispatch_firecheckout_index_saveOrder>
             <checkout_type_onepage_save_order_after>
                 <observers>
                     <easynolo_bancasellapro_save_finger_print>
```
