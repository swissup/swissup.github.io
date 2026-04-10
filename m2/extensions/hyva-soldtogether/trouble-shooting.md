---
layout: default
title: Trouble shooting
description: Swissup Sold Together module trouble shooting
keywords: soldtogether trouble shooting
category: SoldTogether
---

# Trouble shooting
{:.no_toc}

* TOC
{:toc}

### Empty product cards at edit product

![Empty product cards in Magento Admin when edit products](/images/m2/soldtogether/trouble-shooting/empty-product-cards.png)

Problem can occur when Magento instance has module **Mageplaza_CurrencyFormatter**.

Apply patch below to file `app/code/Mageplaza/CurrencyFormatter/Plugin/Widget/Price`. Keep in mind Mageplaza module can be installed via composer in `vendor` directory.

```diff
--- app/code/Mageplaza/CurrencyFormatter/Plugin/Widget/Price.php
+++ app/code/Mageplaza/CurrencyFormatter/Plugin/Widget/Price.php
@@ -45,7 +45,9 @@
     public function aroundRender(WidgetPrice $subject, callable $proceed, DataObject $row)
     {
         $storeId = $this->_helperData->isAdmin() ? 0 : $this->_storeManager->getStore()->getId();
-        if (!$this->_helperData->isEnabled($storeId)) {
+        if (!$this->_helperData->isEnabled($storeId)
+            || $subject instanceof \Swissup\SoldTogether\Block\Adminhtml\AssignedProducts\Grid\Column\Renderer
+        ) {
             return $proceed($row);
         }


```

