---
layout: default
title: Firecheckout and Martfury theme
description: Firecheckout styles for Martfury theme
keywords: firecheckout for martfury theme
category: Firecheckout
---

# Firecheckout & MARTFURY Theme

1. Navigate to the admin page and add the below code into the firecheckout option [Custom CSS](http://docs.swissuplabs.com/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section):

    ```scss
        .opc-wrapper #shipping-new-address-form > .field.street > .control > .field {
            max-width: 100%!important;
            flex: auto!important;
            padding: 4px!important;
            margin: 0 !important;
        }
    ```
 3. Save changes and clean magento cache.
