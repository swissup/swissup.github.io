---
layout: default
title: ParcelPro integration
keywords: ParcelPro, parcel
category: Firecheckout
---

# ParcelPro

> ParcelPro Version 2.3.1

 1. Open `app/design/frontend/base/default/layout/parcelpro.xml` and apply the
    following patch:

    ```diff
    --- old
    +++ new
    @@ -52,7 +52,7 @@


         <!-- Ondersteuning afhaalpuntkiezer voor Firecheckout module -->
    -    <firecheckout_index_index>
    +    <firecheckout_index_index_custom>
             <reference name="head">
                 <action method="addJs">
                     <script>parcelpro/parcelpro-modal.js</script>
    @@ -66,13 +66,13 @@
                     <template>parcelpro/firecheckout/checkout/shipping_method/available.phtml</template>
                 </action>
             </reference>
    -    </firecheckout_index_index>
    +    </firecheckout_index_index_custom>

    -    <firecheckout_index_updatecheckout>
    +    <firecheckout_index_updatecheckout_custom>
             <reference name="checkout.shipping.method">
                 <action method="setTemplate">
                     <template>parcelpro/firecheckout/checkout/shipping_method/available.phtml</template>
                 </action>
             </reference>
    -    </firecheckout_index_updatecheckout>
    +    </firecheckout_index_updatecheckout_custom>
     </layout>

    ```

 2. Save the file and clear cache
