---
layout: default
title: Webkul_Stripe Payment integration
description: Firecheckout integration with Webkul_Stripe Payment
keywords: webkul_stripe, webkul
category: Firecheckout
---

# Webkul_Stripe Payment

 1. Open `app/design/frontend/base/default/template/wkstripe/info.phtml` and apply patch below:

 ```diff
+++ /info.phtml
@@ 42, 73 @@
            if(!$wk_jq('#webkul_stripe_token').length) {
-- old        $wk_jq('#co-payment-form').append("<input type='hidden' name='payment[webkul_stripe_token]' id='webkul_stripe_token' value=''/>");
++ new        $wk_jq('#firecheckout-form').append("<input type='hidden' name='payment[webkul_stripe_token]' id='webkul_stripe_token' value=''/>");
            }


-- old      $wk_jq('#co-payment-form').delegate("#checkout-payment-method-load input[name='payment[method]']","click",function(event){
++ new      $wk_jq('#firecheckout-form').delegate("#checkout-payment-method-load input[name='payment[method]']","click",function(event){
```

 2. Save the file and clear Magento cache.