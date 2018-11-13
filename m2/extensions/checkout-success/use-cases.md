---
layout: default
title: Use cases
description: magento 2 checkout success page module use cases
keywords: " magento 2 checkout success page use cases "
category: Checkout Success
---

# Use cases
{:.no_toc}

* TOC
{:toc}

## Show CMS block when payment method used

For some store owners may occur need to show custom content on Checkout Success page if order placed and specific payment method was applied.

It can be easly implemented with our module. To do so you need basic HTML and jQuery knowledge. Follow example below to understand general idea and feel free to customize it.

**Requirement:** Show additional message for customers who used "Check / Money Order" payment method to pay for an order.

**Implementation:**

 1. Create CMS Block:
     -  Block Title: `Checkout Success Info`;
     -  Identifier: `checkout-success-info`;
     -  Content:

    ```html
    <div class="checkout-success-page-info checkmo" style="display: none; border-radius: 3px; border: 2px solid #42ca49; padding: 0 15px;">
    <h3>For your information</h3>
    <p>You've select money order as your payment method. This may slow down a little bit order processing.</p>
    <p>We will contact your for some additional information if we need it.</p>
    </div>
    ```

 2. Go to Checkout Success Page [configuration](../settings/) in Magento Admin. Open section `Cms blocks for additional content`.
 3. Select created block for `Above order information` option.
 4. Go to section `Page Layout`. Drag block `CMS: Above info` to place where you want to have message.
 5. Go to section `General` and insert script below into textarea `Miscellaneous scripts and HTML`:
    ```html
    <script language="javascript">
        require([
            'jquery'
        ], function($) {
            'use strict';

            $('.checkout-success-page-info.{% raw %}{{paymentCode}}{% endraw %}').show();
        });
   </script>
    ```

 6. Save config and that is it.
 
**Short explanation:** `{% raw %}{{paymentCode}}{% endraw %}` is a dynamic string that will be replaced with code of payment method from an order. For 'Check / Money Order' payment method code is `checkmo`. We used this value as CSS class of DIV element in CMS block. And JavaScript code from item 5 just shows that DIV.
