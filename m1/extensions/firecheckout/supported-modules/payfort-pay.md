---
layout: default
title: Payfort_Pay integration
description: Firecheckout integration with Payfort_Pay
keywords: Payfort
category: Firecheckout
---

# Payfort Pay

 1. Open `app/code/community/Payfort/Pay/etc/config.xml`and apply the following patch:

    ```xml
    --- /a/config.xml
    +++ /b/config.xml
    @@ -110,6 +110,23 @@
                         </payfort_pay_model_observer>
                     </observers>
                 </controller_action_postdispatch_checkout_onepage_saveOrder>
    +
    +            <controller_action_postdispatch_firecheckout_index_saveOrder>
    +                <observers>
    +                    <payfort_pay_model_observer>
    +                        <class>Payfort_Pay_Model_Observer</class>
    +                        <method>setResponseAfterSaveOrder</method>
    +                    </payfort_pay_model_observer>
    +                </observers>
    +            </controller_action_postdispatch_firecheckout_index_saveOrder>
    +            <controller_action_postdispatch_firecheckout_onecolumn_saveOrder>
    +                <observers>
    +                    <payfort_pay_model_observer>
    +                        <class>Payfort_Pay_Model_Observer</class>
    +                        <method>setResponseAfterSaveOrder</method>
    +                    </payfort_pay_model_observer>
    +                </observers>
    +            </controller_action_postdispatch_firecheckout_onecolumn_saveOrder>
             </events>
         </global>
         <default>
    ```

 2. Open `app/code/community/Payfort/Pay/Helper/Data.php` and apply the following
    patch:

    ```diff
    --- /a/Data.php
    +++ /b/Data.php
    @@ -45,12 +45,16 @@

         public function isMerchantPageMethod($order = '')
         {
    -        $useMerchantPage = $this->pfConfig->isCcMerchantPage();
    -        if (!empty($order)) {
    -            $paymentCode = $order->getPayment()->getMethodInstance()->getCode();
    -        }
    -        else {
    -            $paymentCode = Mage::getSingleton('checkout/session')->getQuote()->getPayment()->getMethodInstance()->getCode();
    +        try {
    +            $useMerchantPage = $this->pfConfig->isCcMerchantPage();
    +            if (!empty($order)) {
    +                $paymentCode = $order->getPayment()->getMethodInstance()->getCode();
    +            }
    +            else {
    +                $paymentCode = Mage::getSingleton('checkout/session')->getQuote()->getPayment()->getMethodInstance()->getCode();
    +            }
    +        } catch (Exception $e) {
    +            return false;
             }
             if ($useMerchantPage && $paymentCode == Mage::getModel('payfort/payment_cc')->getCode()) {
                 return true;
    @@ -60,12 +64,16 @@

         public function isMerchantPageMethod2($order = '')
         {
    -        $useMerchantPage = $this->pfConfig->isCcMerchantPage2();
    -        if (!empty($order)) {
    -            $paymentCode = $order->getPayment()->getMethodInstance()->getCode();
    -        }
    -        else {
    -            $paymentCode = Mage::getSingleton('checkout/session')->getQuote()->getPayment()->getMethodInstance()->getCode();
    +        try {
    +            $useMerchantPage = $this->pfConfig->isCcMerchantPage2();
    +            if (!empty($order)) {
    +                $paymentCode = $order->getPayment()->getMethodInstance()->getCode();
    +            }
    +            else {
    +                $paymentCode = Mage::getSingleton('checkout/session')->getQuote()->getPayment()->getMethodInstance()->getCode();
    +            }
    +        } catch (Exception $e) {
    +            return false;
             }
             if ($useMerchantPage && $paymentCode == Mage::getModel('payfort/payment_cc')->getCode()) {
                 return true;
    ```

 3. Save the changes and clear Magento's cache.
