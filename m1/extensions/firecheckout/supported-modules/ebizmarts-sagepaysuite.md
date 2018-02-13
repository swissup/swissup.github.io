---
layout: default
title: Ebizmarts SagepaySuite integration
description: Firecheckout integration with Ebizmarts SagepaySuite
keywords: ebizmarts, sagepaySuite
category: Firecheckout
---

# SagepaySuite

 1. Disable request logging to prevent PHP SEGFAULT error:

    Open `app/code/local/Ebizmarts/SagePaySuite/Helper/Data.php` and find the
    following lines:

    ```php
    //Request
    $rqlabel = new Zend_Text_Table_Row();
    $rqlabel->appendColumn(new Zend_Text_Table_Column('REQUEST', 'center', 5));
    $table->appendRow($rqlabel);
    $inforqp = new Zend_Text_Table_Row();
    $inforqp->appendColumn(new Zend_Text_Table_Column($this->_filterRequest($request), 'left', 5));
    $table->appendRow($inforqp);
    ```

    Replace them with:

    ```php
    // //Request
    // $rqlabel = new Zend_Text_Table_Row();
    // $rqlabel->appendColumn(new Zend_Text_Table_Column('REQUEST', 'center', 5));
    // $table->appendRow($rqlabel);
    // $inforqp = new Zend_Text_Table_Row();
    // $inforqp->appendColumn(new Zend_Text_Table_Column($this->_filterRequest($request), 'left', 5));
    // $table->appendRow($inforqp);
    ```

 2. Open `skin/frontend/base/default/sagepaysuite/js/sagePaySuite_Checkout.js` file and find the
    following lines:

    ```js
    var placeBtn = $('onestepcheckout-place-order');

    placeBtn.hide();
    ```

    Replace it with:

    ```js
    var placeBtn = $('onestepcheckout-place-order');

    placeBtn && placeBtn.hide();
    ```

 3. Open `app/code/local/Ebizmarts/SagePaySuite/etc/config.xml` file and find the
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

 4. In case you are using "Saved Credit Cards" feature, navigate to

    `System > Configuration > TM Checkout > Firecheckout > Ajax save and reload rules`

    And change following configution:

    - Payment methods depends on: Add `Billing Address` option.
    - Additionally you have to add the `billing:register_account` value into
        "Billing Address" save rules, if you are using any of 2 or 3-columns
        modes.

        > In order to add this value, just type it into the field and press enter.

    ![Configuration screenshot](/images/m1/firecheckout/integration/ebizmarts-sagepaysuite/configuration.png)
