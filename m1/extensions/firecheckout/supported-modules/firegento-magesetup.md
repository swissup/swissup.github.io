---
layout: default
title: Firegento_MageSetup integration
description: Firecheckout integration with Firegento MageSetup
keywords: Firegento_MageSetup
category: Firecheckout
---

# Firegento_MageSetup

 1. Open `app/code/local/TM/FireCheckout/Helper/Checkout/Abstract.php` and
    uncomment all lines:

    ```php
    if (Mage::helper('core')->isModuleOutputEnabled('FireGento_MageSetup')) {
        class TM_FireCheckout_Helper_Checkout_Abstract extends FireGento_MageSetup_Helper_Checkout_Data {}
    } else {
        class TM_FireCheckout_Helper_Checkout_Abstract extends Mage_Checkout_Helper_Data {}
    }
    ```

 2. Save the file, and disable compilation mode, if needed.
