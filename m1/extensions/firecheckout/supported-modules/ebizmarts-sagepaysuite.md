---
layout: default
title: Ebizmarts SagePaySuite Integration
description: Firecheckout integration with Ebizmarts SagePaySuite
keywords: "Ebizmarts_SagePaySuite, sagepay"
category: Firecheckout
---

# Ebizmarts SagePaySuite

1.  Open `skin/frontend/base/default/sagepaysuite/js/sagePaySuite_Checkout.js`
    and find the following lines:

    ```js
    if (!response.redirect || !response.success) {
        this.getConfig('review').nextStep(transport);
        return;
    }
    ```

    Replace them with:

    ```js
    if (!response.redirect || !response.success) {
        if (typeof FireCheckout !== 'undefined') {
            checkout.setResponse(transport);
            return;
        }
        this.getConfig('review').nextStep(transport);
        return;
    }
    ```

2.  Save the file, disable js merging, if needed.
