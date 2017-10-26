---
layout: default
title: LaPoste Colissimo integration
description: Firecheckout integration with LaPoste_Colissimo
keywords: laposte, colissimo
category: Firecheckout
---

# LaPoste Colissimo

Open `app/code/community/LaPoste/Colissimo/etc/config.xml` and apply the
following patch:

```diff
@@ -128,6 +128,34 @@
                 </observers>
             </controller_action_postdispatch_checkout_onepage_saveShippingMethod>

+            <controller_action_postdispatch_firecheckout_index_saveBilling>
+                <observers>
+                    <colissimo_unset_onepage_shipping_data>
+                        <type>singleton</type>
+                        <class>laposte_colissimo/observer</class>
+                        <method>unsetOnepageShippingData</method>
+                    </colissimo_unset_onepage_shipping_data>
+                </observers>
+            </controller_action_postdispatch_firecheckout_index_saveBilling>
+            <controller_action_postdispatch_firecheckout_onecolumn_saveBilling>
+                <observers>
+                    <colissimo_unset_onepage_shipping_data>
+                        <type>singleton</type>
+                        <class>laposte_colissimo/observer</class>
+                        <method>unsetOnepageShippingData</method>
+                    </colissimo_unset_onepage_shipping_data>
+                </observers>
+            </controller_action_postdispatch_firecheckout_onecolumn_saveBilling>
+            <controller_action_postdispatch_firecheckout_index_saveShipping>
+                <observers>
+                    <colissimo_unset_onepage_shipping_data>
+                        <type>singleton</type>
+                        <class>laposte_colissimo/observer</class>
+                        <method>unsetOnepageShippingData</method>
+                    </colissimo_unset_onepage_shipping_data>
+                </observers>
+            </controller_action_postdispatch_firecheckout_index_saveShipping>
+
             <!-- Payment modules compatibility -->
             <controller_action_postdispatch_BNPMercanetCw_onepage_saveShippingMethod>
                 <observers>

```
