---
layout: default
title: Ebizmarts SagepaySuite integration
description: Firecheckout integration with Ebizmarts SagepaySuite
keywords: ebizmarts, sagepaySuite
category: Firecheckout
---

# SagepaySuite

 1. Open `app/code/local/Ebizmarts/SagePaySuite/etc/config.xml` file and find the
following lines:

    ```xml
    <controller_action_predispatch_checkout_onepage_index>
        <observers>
            <onepage_sagepay_clear_session>
                <class>sagepaysuite/observer_checkout</class>
                <method>controllerOnePageClear</method>
            </onepage_sagepay_clear_session>
        </observers>
    </controller_action_predispatch_checkout_onepage_index>
    ```

    Replace them with:

    ```xml
    <controller_action_predispatch_checkout_onepage_index>
        <observers>
            <onepage_sagepay_clear_session>
                <class>sagepaysuite/observer_checkout</class>
                <method>controllerOnePageClear</method>
            </onepage_sagepay_clear_session>
        </observers>
    </controller_action_predispatch_checkout_onepage_index>
    <controller_action_predispatch_firecheckout_index_index>
        <observers>
            <onepage_sagepay_clear_session>
                <class>sagepaysuite/observer_checkout</class>
                <method>controllerOnePageClear</method>
            </onepage_sagepay_clear_session>
        </observers>
    </controller_action_predispatch_firecheckout_index_index>
    ```

 2. In case you are using "Saved Credit Cards" feature, navigate to

    `System > Configuration > TM Checkout > Firecheckout > Ajax save and reload rules`

    And change following configution:

    - Payment methods depends on: Add `Billing Address` option.
