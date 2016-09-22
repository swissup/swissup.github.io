---
layout: default
title: Shipperhq Shipper integration
description: Firecheckout integration with Shipperhq Shipper
keywords: Shipperhq_Shipper, shipper, shipperhq, freight
category: Firecheckout
---

# Shipperhq Shipper

 1. Open `Shipperhq/Shipper/etc/config.xml` and find the following lines:

    ```xml
    <controller_action_predispatch_onestepcheckout_index_index>
        <observers>
            <shipperhq_shipper_onestepcheckout_predispatch_observer>
                <class>shipperhq_shipper/observer</class>
                <method>onOneStepCheckoutIndex</method>
            </shipperhq_shipper_onestepcheckout_predispatch_observer>
        </observers>
    </controller_action_predispatch_onestepcheckout_index_index>
    ```

    Replace them with:

    ```xml
    <controller_action_predispatch_onestepcheckout_index_index>
        <observers>
            <shipperhq_shipper_onestepcheckout_predispatch_observer>
                <class>shipperhq_shipper/observer</class>
                <method>onOneStepCheckoutIndex</method>
            </shipperhq_shipper_onestepcheckout_predispatch_observer>
        </observers>
    </controller_action_predispatch_onestepcheckout_index_index>
    <controller_action_predispatch_firecheckout_index_index>
        <observers>
            <shipperhq_shipper_firecheckout_predispatch_observer>
                <class>shipperhq_shipper/observer</class>
                <method>onOneStepCheckoutIndex</method>
            </shipperhq_shipper_firecheckout_predispatch_observer>
        </observers>
    </controller_action_predispatch_firecheckout_index_index>
    ```

Save the file and refresh cache.
