---
layout: default
title: TBT_Rewards/Sweet Tooth integration
description: Firecheckout integration with TBT_Rewards
keywords: rewards, rewardpoints, tbt, sweet tooth
category: Firecheckout
---

# TBT (Sweet Tooth) Rewards

Sweet Tooth Rewards are [integrated](http://help.sweettoothrewards.com/article/317-firecheckout-incompatibility) 
with Firecheckout by Reward developers, but there is one bug that can be 
fixed with following instructions:

 1. Open `app/design/frontend/base/default/template/rewards/spender/additional/firecheckout.phtml`
    and find the following lines:

    ```js
    var html = t.responseText;
    html = html.replace('checkout-review-submit', 'st-checkout-review-submit');
    $('checkout-review-load').update(html);
    $('st-checkout-review-submit').remove();
    ```

    Replace them with:

    ```js
    checkout.update(checkout.urls.shopping_cart);
    ```

 2. Save the file.
