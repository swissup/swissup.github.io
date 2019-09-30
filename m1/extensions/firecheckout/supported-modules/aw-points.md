---
layout: default
title: AW Points integration
description: Firecheckout integration with AheadWorks Points
keywords: AW_Points
category: Firecheckout
---

# AW Points

 1. Open `app/code/local/AW/Points/Block/Checkout/Onepage/Payment/Methods.php`,
    find the following lines:

    ```php
    if (!in_array('checkout_onepage_index', $this->getLayout()->getUpdate()->getHandles())) {
        $this->setTemplate('aw_points/checkout/onepage/payment/' . $magentoVersionTag . '/methods.phtml');
    } else {
        $this->setTemplate('aw_points/checkout/onepage/payment/info.phtml');
    }
    ```

    and replace them with:

    ```php
    if (!in_array('checkout_onepage_index', $this->getLayout()->getUpdate()->getHandles())) {
        $this->setTemplate('aw_points/checkout/onepage/payment/' . $magentoVersionTag . '/methods.phtml');
    } else {
        $this->setTemplate('aw_points/checkout/onepage/payment/info.phtml');
    }

    if ('firecheckout' === $this->getRequest()->getRouteName()) {
        $this->setTemplate('tm/firecheckout/checkout/payment/methods.phtml');
    }
    ```

 2. Open `app/code/local/AW/Points/etc/config.xml`, find the following lines:

    ```xml
    <controller_action_postdispatch_checkout_onepage_saveOrder>
        <observers>
            <aw_points_postdispatch_checkout_onepage_saveOrder>
                <class>points/observer</class>
                <method>postdispatchCustomerAccountCreatePost</method>
            </aw_points_postdispatch_checkout_onepage_saveOrder>
        </observers>
    </controller_action_postdispatch_checkout_onepage_saveOrder>
    ```

    and replace them with:

    ```xml
    <controller_action_postdispatch_checkout_onepage_saveOrder>
        <observers>
            <aw_points_postdispatch_checkout_onepage_saveOrder>
                <class>points/observer</class>
                <method>postdispatchCustomerAccountCreatePost</method>
            </aw_points_postdispatch_checkout_onepage_saveOrder>
        </observers>
    </controller_action_postdispatch_checkout_onepage_saveOrder>
    <controller_action_postdispatch_firecheckout_index_saveOrder>
        <observers>
            <aw_points_postdispatch_firecheckout_index_saveOrder>
                <class>points/observer</class>
                <method>postdispatchCustomerAccountCreatePost</method>
            </aw_points_postdispatch_firecheckout_index_saveOrder>
        </observers>
    </controller_action_postdispatch_firecheckout_index_saveOrder>
    <controller_action_postdispatch_firecheckout_onecolumn_saveOrder>
        <observers>
            <aw_points_postdispatch_firecheckout_onecolumn_saveOrder>
                <class>points/observer</class>
                <method>postdispatchCustomerAccountCreatePost</method>
            </aw_points_postdispatch_firecheckout_onecolumn_saveOrder>
        </observers>
    </controller_action_postdispatch_firecheckout_onecolumn_saveOrder>
    ```

 3. Save the changes, disable compilation mode, and refresh cache.
