---
layout: default
title: Intrum_Cdp integration
description: Firecheckout integration with Intrum Cdp
keywords: Intrum_Cdp
category: Firecheckout
---

# Intrum_Cdp

 1. Open `app/code/local/Intrum/Cdp/etc/config.xml` and find the following section:

    ```xml
    <controller_action_predispatch_checkout_onepage_saveBilling>
        <observers>
            <auto_register_shipping>
                <type>singleton</type>
                <class>intrum/observer</class>
                <method>checkout_controller_onepage_save_billing_method</method>
            </auto_register_shipping>
        </observers>
    </controller_action_predispatch_checkout_onepage_saveBilling>
    ```

 2. Replace it with:

    ```xml
    <controller_action_predispatch_checkout_onepage_saveBilling>
        <observers>
            <auto_register_shipping>
                <type>singleton</type>
                <class>intrum/observer</class>
                <method>checkout_controller_onepage_save_billing_method</method>
            </auto_register_shipping>
        </observers>
    </controller_action_predispatch_checkout_onepage_saveBilling>
    <controller_action_predispatch_firecheckout_index_saveBilling>
        <observers>
            <auto_register_shipping>
                <type>singleton</type>
                <class>intrum/observer</class>
                <method>checkout_controller_onepage_save_billing_method</method>
            </auto_register_shipping>
        </observers>
    </controller_action_predispatch_firecheckout_index_saveBilling>
    ```

 3. Navigate to "System > Configuration > Intrum > Configuration >
    Risk managment activation places (for developers)" and add the following
    line:

    `firecheckout,index`

 4. Save config and clean magento cache.
