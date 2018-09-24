---
layout: default
title: Amasty Order Attributes integration
description: Firecheckout integration with Amasty Order Attributes
keywords: Amasty_Orderattr
category: Firecheckout
---

# Amasty Orderattr

 1. Open `js/amasty/amorderattr/payment.js` and apply the following patch:

    ```diff
    @@ -4,7 +4,7 @@
     * @package Amasty_Orderattr
     */

    -if (typeof(Payment)!='undefined'){
    +if (typeof(Payment)!='undefined' && typeof FireCheckout === 'undefined'){
         Payment.prototype.init = function ()
         {
             if ('function' == typeof(this.beforeInit))
    @@ -37,7 +37,7 @@
         }
     }

    -if (typeof(Review)!='undefined'){
    +if (typeof(Review)!='undefined' && typeof FireCheckout === 'undefined'){
         Review.prototype.save =function(){
                 if ($('form_review'))
                 {
    ```

 2. Open `js/amasty/amorderattr/conditions.js` and apply the following patch:

    ```diff
    @@ -29,17 +29,17 @@
             var _caller = this;
             var allowed_shipping_methods = this.conditions['shipping_methods'];

    -        $$('#co-shipping-method-form input').each(function(el){
    +        $$('#checkout-shipping-method-load input').each(function(el){
                 if (el.id.indexOf('s_method_') != -1) {
                     el.observe('change', _caller.onShippingMethodChange.bind(_caller, el, allowed_shipping_methods));
                 }
             })

    -        var checked = $$('#co-shipping-method-form input:checked')[0];
    +        var checked = $$('#checkout-shipping-method-load input:checked')[0];
             if (checked) {
    -            this.onShippingMethodChange(checked, allowed_shipping_methods);
    +            this.onShippingMethodChange.defer(checked, allowed_shipping_methods);
             } else {
    -            this.hideOnStart(allowed_shipping_methods);
    +            this.hideOnStart.defer(allowed_shipping_methods);
             }

         },
    ```

 4. Open `app/design/frontend/base/default/template/amasty/amorderattr/fields.phtml`
    and apply the following patch:

    ```diff
    @@ -130,7 +130,7 @@

     <ul class="form-list">
         <?php foreach ($this->getFormElements() as $element): ?>
    -    <li class="fields">
    +    <li class="fields-off">
             <div class="input-box">
             <?php
                 echo $element->toHtml();
    ```

 3. Open `app/code/local/Amasty/Orderattr/Model/Observer.php` and apply the
    following patch:

    ```diff
    @@ -591,6 +591,10 @@
                 || !Mage::getStoreConfig('amscheckout/general/enabled')) {
                     $html = $this->_prepareFrontendHtml($transport, 'billing');
                 }
    +        } elseif ($block instanceof Mage_Checkout_Block_Onepage_Billing) {
    +            if ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'billing', '<script type="text/javascript"', true);
    +            }
             }

             $blockClass = Mage::getConfig()->getBlockClassName('checkout/onepage_shipping');
    @@ -600,6 +604,10 @@
                 || !Mage::getStoreConfig('amscheckout/general/enabled')) {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping');
                 }
    +        } elseif ($block instanceof Mage_Checkout_Block_Onepage_Shipping) {
    +            if ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'shipping', '<script type="text/javascript"', true);
    +            }
             }

             $blockClass = Mage::getConfig()->getBlockClassName('checkout/onepage_shipping_method');
    @@ -608,6 +616,8 @@
                 if (Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')
                 && Mage::getStoreConfig('amscheckout/general/enabled')) {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping_method', '</div>', false);
    +            } elseif ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'shipping_method', '<div id="fc-empty-shipping-method-trap">', true);
                 } else {
                     $html = $this->_prepareFrontendHtml($transport, 'shipping_method');
                 }
    @@ -618,6 +628,8 @@
             if ($blockClass == get_class($block)) {
                 if (Mage::helper('core')->isModuleEnabled('Amasty_Scheckout')
                 && Mage::getStoreConfig('amscheckout/general/enabled')) {
                     $html = $this->_prepareFrontendHtml($transport, 'payment', '</div>', false);
    +            } elseif ('firecheckout' === $block->getRequest()->getRouteName()) {
    +                $html = $this->_prepareFrontendHtml($transport, 'payment', '</div>', false);
                 } else {
                     $html = $this->_prepareFrontendHtml($transport, 'payment', '</form>');
    ```
