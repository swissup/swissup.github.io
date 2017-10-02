---
layout: default
title: OPG_Square integration
description: Firecheckout integration with OPG Square
keywords: OPG Square
category: Firecheckout
---

# OPG_Square

 1. Open `js/opg/square/square.js`and apply the following patch:

    ```diff
    --- old
    +++ new
    @@ -128,7 +128,12 @@
             Payment.prototype.switchMethod = Payment.prototype.switchMethod.wrap(function(switchMethod, method){
                 if ('square' == method && OPG.Square.builded==false){
                     OPG.Square.builded = true;
    -                OPG.Square._build();
    +                try {
    +                    OPG.Square._build();
    +                } catch (e) {
    +                    // prevent error at onepage checkouts as the form was built
    +                    // during SqPaymentForm initialization
    +                }
                 }
                 return switchMethod(method);
             });
    ```

 2. Open `app/design/frontend/base/default/template/square/form/square.phtml` and
    apply the following patch:

    ```diff
    --- old
    +++ new
    @@ -4,7 +4,7 @@
         <li class="hidden">
             <label for="<?php echo $_code ?>_cc_type_copy" class="required"><em>*</em><?php echo $this->__('Credit Card Type') ?></label>
             <div class="input-box">
    -            <select id="<?php echo $_code ?>_cc_type_copy" name="payment[cc_type]" title="<?php echo $this->__('Credit Card Type') ?>" class="required-entry validate-cc-type-select">
    +            <select id="<?php echo $_code ?>_cc_type_copy" name="payment[cc_type]" title="<?php echo $this->__('Credit Card Type') ?>" class="">
                     <option value=""><?php echo $this->__('--Please Select--') ?></option>
                 <?php $_ccType = $this->getInfoData('cc_type') ?>
                 <?php foreach ($this->getCcAvailableTypes() as $_typeCode => $_typeName): ?>
    @@ -23,8 +23,8 @@
         </li>
         <li>
             <div class="hidden">
    -                   <input type="text" id="<?php echo $_code ?>_cc_type" name="payment[cc_type]" value="" autocomplete="off"/>
    -                   <select  id="<?php echo $_code ?>_expiration" name="payment[cc_exp_month]" class="month validate-cc-exp required-entry">
    +                    <input type="text" id="<?php echo $_code ?>_cc_type" name="payment[cc_type]" value="" autocomplete="off"/>
    +                    <select  id="<?php echo $_code ?>_expiration" name="payment[cc_exp_month]" class="month">
                         <?php $_ccExpMonth = $this->getInfoData('cc_exp_month') ?>
                         <?php foreach ($this->getCcMonths() as $k=>$v): ?>
                             <option value="<?php echo $k?$k:'' ?>"<?php if($k==$_ccExpMonth): ?> selected="selected"<?php endif ?>><?php echo $v ?></option>
    @@ -33,7 +33,7 @@


                         <?php $_ccExpYear = $this->getInfoData('cc_exp_year') ?>
    -                    <select id="<?php echo $_code ?>_expiration_yr" name="payment[cc_exp_year]" class="year required-entry">
    +                    <select id="<?php echo $_code ?>_expiration_yr" name="payment[cc_exp_year]" class="year">
                         <?php foreach ($this->getCcYears() as $k=>$v): ?>
                             <option value="<?php echo $k?$k:'' ?>"<?php if($k==$_ccExpYear): ?> selected="selected"<?php endif ?>><?php echo $v ?></option>
                         <?php endforeach ?>
    ```

 3. Disable js merge at _System > Configuration > Developer_ page.
