---
layout: default
title: Magestore Affiliateplus integration
description: Firecheckout integration with Magestore Affiliateplus
keywords: Magestore_Affiliateplus
category: Firecheckout
---

# Magestore Affiliateplus

 1. Open `js/magestore/affiliateplus.js`
    and find the following code:

    ```javascript
    if (typeof(save_shipping_method) != 'undefined') {
        save_shipping_method(shipping_method_url);
    }
    ```

 2. Replace all occurrences of this code with:

    ```js
    document.fire('affiliateplus:updateSuccess');
    if (typeof(save_shipping_method) != 'undefined') {
        save_shipping_method(shipping_method_url);
    }
    ```

    and save the file.

 3. Disable javascript merge/minification if needed.
