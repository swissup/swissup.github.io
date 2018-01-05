---
layout: default
title: Amasty Checkoutfees integration
description: Firecheckout integration with Amasty Checkoutfees
keywords: Amasty_Checkoutfees
category: Firecheckout
---

# Amasty Checkoutfees

Open `app/code/local/Amasty/Checkoutfees/Model/Observer.php` and apply the
following patch:

```diff
--- app/code/local/Amasty/Checkoutfees/Model/Observer.php
+++ app/code/local/Amasty/Checkoutfees/Model/Observer.php
@@ -421,7 +421,11 @@
             // apply payment data
             $controller = Mage::getControllerInstance('Mage_Checkout_OnepageController', Mage::app()->getRequest(), Mage::app()->getResponse());
             $postData   = Mage::app()->getRequest()->getPost('payment', array());
-            $controller->getOnepage()->savePayment($postData);
+            try {
+                $controller->getOnepage()->savePayment($postData);
+            } catch (Exception $e) {
+                //
+            }

             // recalculate totals
             $quote->setTotalsCollectedFlag(false)->collectTotals();
```

Save the file.

Open `app/code/local/Amasty/Checkoutfees/etc/config.xml`
and apply the following patch:

```diff
--- app/code/local/Amasty/Checkoutfees/etc/config.xml
+++ app/code/local/Amasty/Checkoutfees/etc/config.xml
@@ -115,6 +115,43 @@
                     </Amasty_Checkoutfees_Model_Observer>
                 </observers>
             </controller_action_predispatch_amscheckoutfront_onepage_update>
+
+            <controller_action_predispatch_firecheckout_index_updateSections>
+                <observers>
+                    <Amasty_Checkoutfees_Model_Observer>
+                        <type>singleton</type>
+                        <class>Amasty_Checkoutfees_Model_Observer</class>
+                        <method>beforePaymentMethodSave</method>
+                    </Amasty_Checkoutfees_Model_Observer>
+                </observers>
+            </controller_action_predispatch_firecheckout_index_updateSections>
+            <controller_action_postdispatch_firecheckout_index_saveShippingMethod>
+                <observers>
+                    <Amasty_Checkoutfees_Model_Observer>
+                        <type>singleton</type>
+                        <class>Amasty_Checkoutfees_Model_Observer</class>
+                        <method>afterShippingMethodSave</method>
+                    </Amasty_Checkoutfees_Model_Observer>
+                </observers>
+            </controller_action_postdispatch_firecheckout_index_saveShippingMethod>
+            <controller_action_predispatch_firecheckout_index_saveShippingMethod>
+                <observers>
+                    <Amasty_Checkoutfees_Model_Observer>
+                        <type>singleton</type>
+                        <class>Amasty_Checkoutfees_Model_Observer</class>
+                        <method>beforePaymentMethodSave</method>
+                    </Amasty_Checkoutfees_Model_Observer>
+                </observers>
+            </controller_action_predispatch_firecheckout_index_saveShippingMethod>
+            <controller_action_predispatch_firecheckout_index_savePayment>
+                <observers>
+                    <Amasty_Checkoutfees_Model_Observer>
+                        <type>singleton</type>
+                        <class>Amasty_Checkoutfees_Model_Observer</class>
+                        <method>beforePaymentMethodSave</method>
+                    </Amasty_Checkoutfees_Model_Observer>
+                </observers>
+            </controller_action_predispatch_firecheckout_index_savePayment>

             <controller_action_postdispatch_checkout_cart_updatePost>
```

Save the file, disable compilation mode, and clear Magento cache.
