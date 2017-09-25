---
layout: default
title: Bancpost Aplicacrediteuroline integration
description: Firecheckout integration with Bancpost Aplicacrediteuroline
keywords: bancpost_aplicacrediteuroline, aplicacrediteuroline
category: Firecheckout
---

# Bancpost Aplicacrediteuroline

 1. Open `app/design/frontend/base/default/layout/aplicacrediteuroline.xml` and apply the
    following patch:

    ```diff
    --- old
    +++ new
    @@ -10,4 +10,15 @@
                 </action>
             </reference>
         </checkout_onepage_index>
    +
    +   <firecheckout_index_index_custom>
    +       <reference  name="head">
    +            <action method="addJs">
    +                <script>bancpost/aplicacrediteuroline/bform.js</script>
    +            </action>
    +            <action method="addJs">
    +                <script>bancpost/aplicacrediteuroline/json2.js</script>
    +            </action>
    +        </reference>
    +   </firecheckout_index_index_custom>
     </layout>


    ```

    Save the file.

 2. Open `app/design/frontend/base/default/template/aplicacrediteuroline/form/aplicacrediteuroline.phtml`
    and apply the following patch:

    ```diff
    --- old
    +++ new
    @@ -11,6 +11,7 @@
     <script type="text/javascript">
        jQuery('#p_method_aplicacrediteuroline').prop('checked', false);

    +function initBform() {
        bform.dataInput.root.Name = "<?php echo $customer['lastname']; ?>";
        bform.dataInput.root.Surname = "<?php echo $customer['firstname']; ?>";
        bform.dataInput.root.Email = "<?php echo $customer['email']; ?>";
    @@ -22,4 +23,11 @@
        bform.dataInput.root.ProductCode = "<?php echo $BcartInfo['codes']; ?>";
        bform.dataInput.root.Price = "<?php echo $BcartInfo['total']; ?>";
        bform.environment = "<?php echo $Benvironment; ?>";
    +}
    +
    +if (!bform.dataInput.root) {
    +   jQuery(document).ready(initBform);
    +} else {
    +   initBform();
    +}
     </script>
    ```

    Save the file.

 3. Clear Magento's cache.
