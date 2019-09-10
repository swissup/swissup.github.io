---
layout: default
title: MageWorx Donations integration
description: Firecheckout integration with MageWorx Donations
keywords: MageWorx_Donations
category: Firecheckout
---

# MageWorx MultiFees

> MageWorx_Donations version - 2.2.4

 1. Open `app/code/community/MageWorx/Donations/Model/Sales/Quote/Address/Total/Donation.php`
    and find the following lines:

    ```php
    if(strpos(Mage::helper('mageworx_donations')->getFullActionName(),'checkout_onepage_') !== false
        || Mage::helper('mageworx_donations')->getFullActionName() == 'donations_cart_roundamount'){
        $title .= ' (<a href="#" onclick="donations.togglePopup(true); return false;">'.Mage::helper('mageworx_donations')->__('change').'</a>)';
    }
    ```

    Replace them with:

    ```php
    if(strpos(Mage::helper('mageworx_donations')->getFullActionName(),'checkout_onepage_') !== false
        || strpos(Mage::helper('mageworx_donations')->getFullActionName(),'firecheckout_') !== false
        || Mage::helper('mageworx_donations')->getFullActionName() == 'donations_cart_roundamount'){
        $title .= ' (<a href="#" onclick="donations.togglePopup(true); return false;">'.Mage::helper('mageworx_donations')->__('change').'</a>)';
    }
    ```

 2. Save the file and disable compilation mode.
