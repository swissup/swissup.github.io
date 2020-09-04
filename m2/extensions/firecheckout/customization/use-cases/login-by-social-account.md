---
layout: default
title: Checkout login using social account
description: How to login into checkout using social account buttons
category: Firecheckout
---

# Log In with Social Account

> Checkout Log In with ease, in one click, using the Firecheckout and [Social Login](http://docs.swissuplabs.com/m2/extensions/social-login/) extensions.

1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
   in your active theme with following content:

   ```js
   define([
      'underscore',
      'Magento_Ui/js/lib/view/utils/async',
      'Swissup_Firecheckout/js/utils/move'
   ], function (_, $, move) {
       'use strict';

      // using firecheckout util "move" to shift the block "social login" from
      // the authentication popup directly into checkout page.

      $.async('.block.block-swissup-social-login', _.debounce(function(el){
          move(el).before('.form.form-shipping-address');

      }));

   });
   ```

2. Run "Deploy static content" command:

   ```bash
   cd <magento_root>

   # remove previously deployed firecheckout files
   find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

   # run deployment command
   bin/magento setup:static-content:deploy
   ```

#### Result

   ![Screenshot](/images/m2/firecheckout/customization/checkout-social-login/checkout_social_login.png)

##### Next up

 -  [Move.js utility](/m2/extensions/firecheckout/customization/move-js/)
 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
