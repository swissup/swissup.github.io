---
layout: default
title: AW Raf integration
description: Firecheckout integration with AheadWorks Refer a Friend extension
keywords: AW_Raf
category: Firecheckout
---

# AW Raf

 1. Open `app/design/frontend/base/default/template/aw_raf/checkout/cart/discount.phtml`
 2. Find the following lines:

    ```js
    return VarienForm.prototype.submit.bind(awrafDiscountForm)();
    ```

 3. Replace it with:

    ```js
    if (awrafDiscountForm.form) {
        return VarienForm.prototype.submit.bind(awrafDiscountForm)();
    } else {
        // firecheckout integration
        checkout.setLoadWaiting(true);
        new Ajax.Request("<?php echo $this->getUrl('awraf/cart/createCoupon') ?>", {
            method: 'post',
            parameters: checkout.getFormData(),
            onSuccess: function() {
                checkout.setLoadWaiting(false);
                checkout.update(checkout.urls.shopping_cart);
            }
        });
    }
    ```

 4. Refresh cache and try to use `Referred Friends Balance` at firecheckout page.
