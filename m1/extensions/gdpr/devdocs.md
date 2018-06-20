---
layout: default
title: GDPR Developers documentaion
description: How to integrate your module with GDPR
category: GDPR
---

# Developers documentaion

* TOC
{:toc}

### Registering your own form

If your module requests to enter personal data, you need to add
consent to your form. The first thing you should do, is to register
your form.

 1. Add `forms_load_before` event listener in `etc/config.xml` file:

    ```xml
    <global>
        ...
        <events>
            <tm_gdpr_personal_data_forms_load_before>
                <observers>
                    <vendor_module_register_form>
                        <class>vendor_module/observer</class>
                        <method>registerPersonalDataForms</method>
                    </vendor_module_register_form>
                </observers>
            </tm_gdpr_personal_data_forms_load_before>
        </events>
     </global>
    ```

 2. Add `registerPersonalDataForms` method in module's observer that will register your form:

    ```php
    public function registerPersonalDataForms(Varien_Event_Observer $observer)
    {
        $observer->getCollection()
            ->addItem(
                new TM_Gdpr_Model_PersonalDataForm(array(
                    'id' => 'vendor:form_id',
                    'name' => 'vendor: Form Name',
                    'action' => 'module_controller_action'
                ))
            );

        return $this;
    }
    ```

    In the example above, a minimal `PersonalDataForm` setup is used. It will be
    automatically expanded into full-featured config:

    ```php
    array(
        'id'        => 'vendor:form-id',
        'name'      => 'vendor: Form Name',
        'action'    => 'module_controller_action',
        'client_identity_field' => 'email',
        'js_config' => array(
            'form' => 'form[action*="module/controller/action"]',
            'destination' => '> fieldset:last',
            'method' => 'bottom',
            'consents' => array()
        )
    )
    ```

    Available `PersonalDataForm` options:

    Name            | Description
    ----------------|------------
    id              | Unique string identifier.
    name            | Form name in readable format.
    action          | Full action name, where the form is submitted.
    client_identity_field | Usually it's an email from the form data. Indicate another field, if your form doesn't use email.
    **js_config**   | Client-side config, used to insert consents into the form.
    form            | Form selector.
    destination     | Element selector. It must be inside form.
    method          | Method to use, when inserting consent. Available options: after, before, top, bottom.
    consents        | Array of consents to render. This array will be merged with consents from configuration. You can use it to hardcode some consent into your form without a config.

    Hardcoded consent example:

    ```php
    new TM_Gdpr_Model_PersonalDataForm(array(
        'id'     => 'vendor:form-id',
        'name'   => 'vendor: Form Name',
        'action' => 'module_controller_action',
        'js_config' => array(
            // Hardcoded consents. Do not add any, if you wish to control them from the configuration
            'consents' => array(
                array(
                    'enabled' => 1,
                    'sort_order' => 20,
                    'html_id' => 'vendor_module_consent',
                    'title' => 'I agree to my personal data being stored and used to display my questions on the site',
                )
            )
        )
    ))
    ```

 3. Check if everything works as expected. You should now see your form in the
    [consents configuration](/m1/extensions/gdpr/configuration/#consents)
 4. Using GDPR configuration, activate some consent for your form and check the
    frontend. Client-side and server-side validations will work automatically!
 5. After the form is submitted with accepted consent, check
    [Accepted Consents](/m1/extensions/gdpr/admin-interfaces/#accepted-consents) page.
    Your form is added here too!

### Registering additional consents for existing form

 1. Add `forms_load_after` event listener in `etc/config.xml` file:

    ```xml
    <global>
        ...
        <events>
            <tm_gdpr_personal_data_forms_load_after>
                <observers>
                    <vendor_module_register_consents>
                        <class>vendor_module/observer</class>
                        <method>registerAdditionalConsents</method>
                    </vendor_module_register_consents>
                </observers>
            </tm_gdpr_personal_data_forms_load_after>
        </events>
    </global>
    ```

 2. Create `registerAdditionalConsents` method in module's observer that will add consent:

    ```php
    public function registerAdditionalConsents(Varien_Event_Observer $observer)
    {
        $forms = $observer->getCollection();

        $forms->getItemById('magento:contact-us')->addConsent(array(
                'html_id' => 'vendor_module_id',
                'sort_order' => 0,
                'title' => 'Custom consent added via event observer',
                'enabled' => 1,
            ));

        return $this;
    }
    ```

 3. Check the Contact Us page. Now it will have your consent too. You don't need
    to add validators or other logic. GDPR module will do the rest for you.

### Adding additional consents into configuration

Just use the same approach as you use when adding custom config options
into existing configuration sections.

### Processing client's request

 1. Add `handlers_load_before` event listener in `etc/config.xml` file:

    ```xml
    <global>
        ...
        <events>
            <tm_gdpr_personal_data_handlers_load_before>
                <observers>
                    <vendor_module_register_handler>
                        <class>vendor_module/observer</class>
                        <method>registerPersonalDataHandler</method>
                    </vendor_module_register_handler>
                </observers>
            </tm_gdpr_personal_data_handlers_load_before>
        </events>
    </global>
    ```
 2. Create `registerPersonalDataHandler` method in module's observer that will register request
    processing handler:

    ```php
    public function registerPersonalDataHandlers(Varien_Event_Observer $observer)
    {
        $observer->getCollection()->addItem(Mage::getModel('vendor_module/personalDataHandler_entity'));
    }
    ```

 3. Implement handler:

    ```php
    <?php
    class Vendor_Module_Model_PersonalDataHandler_Entity
        extends TM_Gdpr_Model_PersonalDataHandler_AbstractHandler
        implements TM_Gdpr_Model_PersonalDataHandler_HandlerInterface
    {
        /**
         * Check if deletion request can be processed.
         *  - This method should throw an exception if there is some major
         *    incompleted operation is made by client (eg. pending order)
         *
         *  - DO NOT THROW ANY EXCEPTIONS in case of minor issues, as it will
         *    completely stop request processing by all modules.
         *
         * @return void
         * @throws Exception
         */
        public function beforeDelete(TM_Gdpr_Model_Clientrequest $request)
        {
            $collection = $this->getEntityCollection($request)
                ->addFieldToFilter('status', array('neq' => 'completed'));

            if ($collection->getSize()) {
                throw new Exception(
                    Mage::helper('vendor_module')->__(
                        "Can't remove data. Incompleted entities found: %1",
                        implode(', ', $collection->getColumnValues('entity_id'))
                    )
                );
            }
        }

        /**
         * @return void
         */
        public function delete(TM_Gdpr_Model_Clientrequest $request)
        {
            $this->anonymize($request);
        }

        /**
         * @return void
         */
        public function anonymize(TM_Gdpr_Model_Clientrequest $request)
        {
            $entities = $this->getEntityCollection($request);
            $size = $entities->getSize();

            $this->anonymizeCollections(
                array(
                    $entities
                ),
                array(
                    'email' => Mage::getModel('tm_gdpr/faker')->getEmail($request),
                    'fullname' => Mage::getModel('tm_gdpr/faker')->getStaticPlaceholder(),
                )
            );

            $request->addSuccess(sprintf(
                'Entity data anonymization finished. %s items were processed',
                $size
            ));
        }

        /**
         * @return array
         */
        public function export(TM_Gdpr_Model_Clientrequest $request)
        {
            return array();
        }

        /**
         * @param  TM_Gdpr_Model_Clientrequest $request
         * @return Vendor_Module_Model_Resource_Entity_Collection
         */
        private function getEntityCollection(TM_Gdpr_Model_Clientrequest $request)
        {
            $columns = array('email');
            $values = array($request->getClientIdentity());
            if ($request->getCustomerId()) {
                $columns[] = 'customer_id';
                $values[] = $request->getCustomerId();
            }

            $collection = Mage::getResourceModel('vendor_module/entity_collection')
                ->addFieldToFilter($columns, $values);

            if ($this->useWebsiteFilter()) {
                $collection->addFieldToFilter(
                    'store_id',
                    array(
                        'or' => array(
                            array('in' => $this->getStoreIds($request)),
                            array('null' => true),
                        )
                    )
                );
            }

            return $collection;
        }
    }
    ```

 4. That's all. Now you module will process it's data when GDPR will process
    client's request.

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m1/extensions/gdpr/)
