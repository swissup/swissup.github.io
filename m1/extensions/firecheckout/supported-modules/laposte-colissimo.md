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
@@ -128,6 +128,43 @@
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
+            <checkout_controller_onepage_save_shipping_method>
+                <observers>
+                    <colissimo_unset_onepage_shipping_data>
+                        <type>singleton</type>
+                        <class>laposte_colissimo/observer</class>
+                        <method>setOnepageShippingData2</method>
+                    </colissimo_unset_onepage_shipping_data>
+                </observers>
+            </checkout_controller_onepage_save_shipping_method>
+
             <!-- Payment modules compatibility -->
             <controller_action_postdispatch_BNPMercanetCw_onepage_saveShippingMethod>
                 <observers>

```

Open `app/code/community/LaPoste/Colissimo/Model/Observer.php` file and add new
method:

```diff
public function setOnepageShippingData2(Varien_Event_Observer $observer)
{
    /** @var Mage_Checkout_OnepageController $action */
    $quote  = $observer->getQuote();
    $request = $observer->getRequest();

    $method = $request->getPost('shipping_method');

    /* @var $shippingAddress Mage_Sales_Model_Order_Address */
    $shippingAddress = $quote->getShippingAddress();

    /* @var $billingAddress Mage_Sales_Model_Order_Address */
    $billingAddress = $quote->getBillingAddress();

    if ($shippingAddress->getColissimoPickupId() && $this->_getAddress()) {
        foreach ($this->_getAddress() as $attribute => $value) {
            $shippingAddress->setData($attribute, $value);
        }
        $this->_unsAddress();
    }

    $this->_resetAddressColissimoData($shippingAddress);
    $this->_resetAddressColissimoData($billingAddress);

    if (!$this->_isColissimo($method)) {
        return;
    }

    $data = new Varien_Object();
    $data->setData($request->getPost());
    $data->setShippingAddress($shippingAddress);
    $data->setBillingAddress($billingAddress);

    $alias = 'laposte_colissimo/method';

    if ($method == 'pickup_colissimo') {
        $this->_saveAddress($shippingAddress, $this->_getSaveAddressData());
        $alias = 'laposte_colissimo/pickup';
    }

    /** @var LaPoste_Colissimo_Model_Method|LaPoste_Colissimo_Model_Pickup $model */
    $model = Mage::getModel($alias);
    $model->saveAddress($data);
}
```
