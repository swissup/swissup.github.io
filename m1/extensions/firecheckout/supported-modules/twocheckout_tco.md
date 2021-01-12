---
layout: default
title: Twocheckout_Tco Payment integration
description: Firecheckout integration with Twocheckout_Tco Payment
keywords: twocheckout, twocheckout_tco
category: Firecheckout
---

# Twocheckout_Tco Payment

 1. Open `app/code/local/Twocheckout/Tco/etc/config.xml` and find the
    following lines:

    ```xml
        <controller_action_postdispatch_checkout_onepage_saveOrder>
          <observers>
            <output_tco_redirect>
              <type>singleton</type>
              <class>Twocheckout_Tco_Model_Observer</class>
              <method>output_tco_redirect</method>
            </output_tco_redirect>
          </observers>
        </controller_action_postdispatch_checkout_onepage_saveOrder>
    ```

    Replace them with:

    ```xml
        <controller_action_postdispatch_checkout_onepage_saveOrder>
          <observers>
            <output_tco_redirect>
              <type>singleton</type>
              <class>Twocheckout_Tco_Model_Observer</class>
              <method>output_tco_redirect</method>
            </output_tco_redirect>
          </observers>
        </controller_action_postdispatch_checkout_onepage_saveOrder>
        <controller_action_postdispatch_firecheckout_index_saveOrder>
          <observers>
            <output_tco_redirect>
              <type>singleton</type>
              <class>Twocheckout_Tco_Model_Observer</class>
              <method>output_tco_redirect</method>
            </output_tco_redirect>
          </observers>
        </controller_action_postdispatch_firecheckout_index_saveOrder>
    ```

 2. Save the file and clear Magento cache.