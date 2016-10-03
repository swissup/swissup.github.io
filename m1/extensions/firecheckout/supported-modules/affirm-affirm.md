---
layout: default
title: Affirm_Affirm integration
description: Firecheckout integration with Affirm payment method
keywords: Affirm_Affirm
category: Firecheckout
---

# Affirm_Affirm

Open `app/code/community/Affirm/Affirm/etc/config.xml` and find following lines:

```xml
<customer_login>
    <observers>
        <affirm_affirm_mfp_detection_customer_login>
            <type>singleton</type>
            <class>affirm/order_observer_mfp_updateOnCustomerLogin</class>
            <method>execute</method>
        </affirm_affirm_mfp_detection_customer_login>
    </observers>
</customer_login>
```

Replace them with:

```xml
<customer_login>
    <observers>
        <affirm_affirm_mfp_detection_customer_login>
            <type>singleton</type>
            <class>affirm/order_observer_mfp_updateOnCustomerLogin</class>
            <method>execute</method>
        </affirm_affirm_mfp_detection_customer_login>
    </observers>
</customer_login>
<controller_action_postdispatch_firecheckout_index_saveOrder>
    <observers>
        <affirm_checkoutbutton_proceed>
            <type>singleton</type>
            <class>affirm/order_observer_applyAffirmPaymentMethod</class>
            <method>execute</method>
        </affirm_checkoutbutton_proceed>
        <controller_action_postdispatch_affirm_payment_confirm>
            <type>singleton</type>
            <class>affirm/order_observer_afterSaveOrder</class>
            <method>postDispatchSaveOrder</method>
        </controller_action_postdispatch_affirm_payment_confirm>
    </observers>
</controller_action_postdispatch_firecheckout_index_saveOrder>
```

Save the file and clear Magento cache.
