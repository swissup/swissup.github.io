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
            max-width: initial !important;
            flex: initial !important;
            padding: 4px!important;
            margin: 0 !important;
        }
        .opc-wrapper #shipping-new-address-form > .field {
            max-width:initial !important;
            flex: initial !important;
        }
        .opc-wrapper #shipping-new-address-form > .field.street > .control {
            margin: 0 !important;
        }
        .field > input[type="radio"] + label {
            padding: 0!important;
        }
        .table-checkout-shipping-method tbody td:first-child {
            width: initial !important;
        }
        .field > input[type="checkbox"] + label {
            padding-left: 0 !important;
        }
    ```
 3. Save changes and clean magento cache.
