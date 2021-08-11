---
layout: default
title: Firecheckout and MultiSafepay payment method
description: Firecheckout module compatiblity with MultiSafepay payment method
keywords: firecheckout with third-party modules
category: Firecheckout
---

# Firecheckout & MultiSafepay payment method

> The cart page returns empty if the customers cancel payment via a browser back button.

1. To solve this problem navigate to the payment module core file: `MultiSafepay->magento2-frontend->etc->frontend->events.xml`
    and update code with the code below:

    ```xml
        <?xml version="1.0"?>
        <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">
            <event name="controller_action_predispatch_checkout_index_index">
                <observer name="multisafepay_action_predispatch_checkout_index_index" instance="MultiSafepay\ConnectFrontend\Observer\RestoreQuoteObserver" />
            </event>
            <!-- Add this additional event on redirect to cart page -->
            <event name="controller_action_predispatch_checkout_cart_index">
                <observer name="multisafepay_action_predispatch_checkout_cart_index" instance="MultiSafepay\ConnectFrontend\Observer\RestoreQuoteObserver" />
            </event>
        </config>

    ```
2. Save changes and clean magento cache.