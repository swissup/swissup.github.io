---
layout: default
title: Pook_CollectInStore integration
description: Firecheckout integration with Pook_CollectInStore
keywords: Pook_CollectInStore, CollectInStore
category: Firecheckout
---

# Pook CollectInStore

 1. Install our free [StorePickup](https://github.com/tmhub/storepickup) module
    and setup it at the _System > Configuration > TM Checkout > Store Pickup_ page.

    You can already use the module if you have single store option. If you use
    "Store Selector" feature, proceed to the next step.

 2. Since Pook_CollectInStore module replaces standard magento checkout actions
    with its own, instead of using magento observers, and their developers not
    willing to improve their module for free, one of our customers kindly share
    its own solution.

    Open `app/code/community/Pook/CollectInStore/etc/config.xml` and add the
    following code to the `frontend` section:

    ```xml
    <events>
        <checkout_controller_onepage_save_shipping_method>
            <observers>
                <pook_collectinstore>
                    <class>pook_collectinstore/observer</class>
                    <method>saveShippingMethod</method>
                </pook_collectinstore>
            </observers>
        </checkout_controller_onepage_save_shipping_method>
    </events>
    ```

 3. Create `app/code/community/Pook/CollectInStore/Model/Observer.php`
    with the following content:

    ```php
    <?php

    class Pook_CollectInStore_Model_Observer
    {
        public function saveShippingMethod($observer)
        {
            $_request = $observer->getEvent()->getRequest();

            if (!$_request->isPost()) {
                return;
            }

            $shopId = $_request->getPost('selected_store', false);
            if (!$shopId || $_request->getParam('shipping_method') !== 'collectinstore_collectinstore') {
                return;
            }

            $data = $this->_getShopAddress($shopId);
            if (!empty($data['error'])) {
                return;
            }

            $data['save_in_address_book'] = 0;
            $_request->setPost('shipping', $data);
            $_request->getPost('shipping_address_id', NULL);

            $billing = $_request->getParam('billing');
            if (!$billing || $billing['use_for_shipping'] !== 'tm_storepickup') {
                return;
            }

            $billing['use_for_shipping'] = 0;
            $_request->setPost('billing', $billing);
            $this->getOnepage()->saveBilling($billing, false);

            $this->getOnepage()->getQuote()->setTotalsCollectedFlag(true);
            $this->getOnepage()->saveShipping($data, false);
            $this->getOnepage()->getQuote()->getShippingAddress()->collectShippingRates();
            $carrier = Mage::getModel('pook_collectinstore/Carrier_CollectInStore');

            $method = $carrier->getCode() . '_' . $carrier->getCode();
            $this->getOnepage()->getQuote()->setTotalsCollectedFlag(false);
            $this->getOnepage()->saveShippingMethod($method);
            $_request->setParam('shipping_address_id', '');
            $_request->setParam('shipping_method', $method);

            $this->getOnepage()->getQuote()->collectTotals()->save();
        }

        /**
         * Get one page checkout model
         *
         * @return Mage_Checkout_Model_Type_Onepage
         */
        public function getOnepage()
        {
            return Mage::getSingleton('checkout/type_onepage');
        }


        /**
         * Finds and returns the shop address for collect in store method.
         * "same_as_billing" is set to true here to prevent the shop address being saved
         * as the customer's default shipping address. This does not mean the billing address
         * is actualy used for the order.
         *
         * @return array
         */
        protected function _getShopAddress($id)
        {
            $store = Mage::getModel('pook_collectinstore/store')->load($id, 'store_id');

            if ($store && $store->getEnabled()) {
                $data = array(
                    'address_id'            => null,
                    'firstname'             => $store->getData('contact_firstname'),
                    'lastname'              => $store->getData('contact_secondname'),
                    'company'               => $store->getData('company_name'),
                    'street'                => array(
                                                    $store->getData('address_street1'),
                                                    $store->getData('address_street2')
                                                ),
                    'city'                  => $store->getData('address_city'),
                    'region_id'             => $store->getData('address_regionid'),
                    'region'                => $store->getData('address_region'),
                    'postcode'              => $store->getData('address_postcode'),
                    'country_id'            => $store->getData('address_country_id'),
                    'telephone'             => $store->getData('telephone'),
                    'fax'                   => null,
                    'save_in_address_book'  => 0,
                    'same_as_billing'       => 0
                );
            }
            else {
                $data = array('error' => 1, 'message' => $this->__('Collection store not found.'));
            }

            return $data;
        }
    }
    ```

 4. Clear cache and disable Magento's compilation if needed.
