---
layout: default
title: Webkul_Warehousemanagement integration
description: Firecheckout integration with Webkul Warehousemanagement
keywords: "Webkul_Warehousemanagement, Warehousemanagement, warehouse"
category: Firecheckout
---

# Webkul Warehousemanagement

 1. Open `app/design/frontend/base/default/template/warehousemanagement/checkout/onepage/shipping_method/available.phtml`
    and find the following lines:

    ```js
    if($$('.mpshipping_description .custom_ship:checked').length==$$('.mpshipping_description .warehouse').length){
        elm.setAttribute('checked','checked');
    }else{
        elm.removeAttribute('checked');
    }
    ```

    Replace them with:

    ```js
    if($$('.mpshipping_description .custom_ship:checked').length==$$('.mpshipping_description .warehouse').length){
        elm.setAttribute('checked','checked');
        elm.checked = true;
    }else{
        elm.removeAttribute('checked');
        elm.checked = false;
    }
    ```

That's all.
