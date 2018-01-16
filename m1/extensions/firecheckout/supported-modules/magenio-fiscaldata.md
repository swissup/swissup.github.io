---
layout: default
title: Magenio_FiscalData integration
description: Firecheckout integration with Magenio_FiscalData
keywords: Magenio_FiscalData
category: Firecheckout
---

# Magenio FiscalData

> Magenio_FiscalData version — 4.1.0

 1. Open `app/code/community/Magenio/FiscalData/Block/Form.php` and apply the
    following patch:

    ```diff
    --- app/code/community/Magenio/FiscalData/Block/Form.php
    +++ app/code/community/Magenio/FiscalData/Block/Form.php
    @@ -17,8 +17,17 @@
           return $startclasses;
         }

    +  public function getAddressBlock()
    +  {
    +    $parent = $this->getParentBlock();
    +    if ($parent instanceof Mage_Core_Block_Text_List) {
    +      return $parent->getParentBlock();
    +    }
    +    return $parent;
    +  }
    +
       public function getParentAddress() {
    -    return $this->_parentBlock->getAddress();
    +    return $this->getAddressBlock()->getAddress();
       }

       public function getClassTaxCode() {
    @@ -57,8 +66,8 @@

       public function getParentPrefix() {
         $_prefix = '';
    -    if($this->_parentBlock->getFiscaldataPrefix()) {
    -      $_prefix = $this->_parentBlock->getFiscaldataPrefix();
    +    if($this->getAddressBlock()->getFiscaldataPrefix()) {
    +      $_prefix = $this->getAddressBlock()->getFiscaldataPrefix();
         }
         return $_prefix;
       }

    ```

    Save the file.
