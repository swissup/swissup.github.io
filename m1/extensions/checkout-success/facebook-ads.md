---
layout: default
title: Facebook Ads Extension integration
description: Checkout success page integration with Facebook Ads Extension
keywords: "Facebook Ads Extension"
category: Checkout Success
---

# Facebook Ads Extension

Check github repo to find out more about [Facebook Ads Extension](https://github.com/facebookincubator/facebook-for-magento).

One of its features is purchase tracking on checkout success page. So to make it work perfectly please modify file `app/code/community/Facebook/AdsExtension/Block/Purchase.php` as shown below:

```diff
--- original content
+++ new content
@@ -20,10 +20,12 @@
   private $orderData = array();
 
   protected function _prepareLayout() {
-    $order = Mage::getSingleton('sales/order');
-    $order->loadByIncrementId(
-      Mage::getSingleton('checkout/session')->getLastRealOrderId()
-    );
+    // $order = Mage::getSingleton('sales/order');
+    // $order->loadByIncrementId(
+    //   Mage::getSingleton('checkout/session')->getLastRealOrderId()
+    // );
+    $order = Mage::registry('current_order');
     $totalData = $order->getData();
     $allitems = $order->getAllVisibleItems();
 
     $this->orderData['value'] = $totalData['grand_total'];

```

> Tested on Facebook Ads Extension version 2.6.0. But has to work with other versions.
