---
layout: default
title: Developers documentaion
description: How to integrate your module with GDPR
category: GDPR
---

# Developers documentaion

* TOC
{:toc}

### Registering your own form

If your module requests to enter personal data, you need to add
consent into your form. To do so, the first thing you should do, is to register
your form.

 1. Add `forms_load_before` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_personal_data_forms_load_before">
        <observer name="vendor_module_register_form" instance="Vendor\Module\Observer\RegisterPersonalDataForms" />
    </event>
    ```

 2. Create `RegisterPersonalDataForms` observer that will register your form:

    ```php
    <?php

    namespace Vendor\Module\Observer;

    class RegisterPersonalDataForms implements \Magento\Framework\Event\ObserverInterface
    {
        /**
         * @param \Magento\Framework\Event\Observer $observer
         * @return void
         */
        public function execute(\Magento\Framework\Event\Observer $observer)
        {
            $observer->getCollection()->addItem(
                new \Swissup\Gdpr\Model\PersonalDataForm([
                    'id'     => 'vendor:product-question',
                    'name'   => 'Vendor: Product Questions',
                    'action' => 'module_controller_action',
                ])
            );
        }
    }
    ```

    In the example above, a minimal `PersonalDataForm` setup is used. It will be
    automatically expanded into full-featured config:

    ```php
    [
        'id'        => 'vendor:product-question',
        'name'      => 'Vendor: Product Questions',
        'action'    => 'module_controller_action',
        'client_identity_field' => 'email',
        'js_config' => [
            'async' => '',
            'form' => 'form[action*="module/controller/action"]',
            'destination' => '> fieldset:last',
            'method' => 'append',
            'consents' => []
        ]
    ]
    ```

    Available `PersonalDataForm` options:

    Name            | Description
    ----------------|------------
    id              | Unique string identifier.
    name            | Form name in readable format.
    action          | Full action name, where the form is submitted.
    client_identity_field | Usually it's an email from the form data. Indicate another field, if your form doesn't use email.
    **js_config**   | Client-side config, used to insert consents into the form.
    async           | Element selector. Usefull for forms rendered via knockout library. Enter selector and consent will be inserted when `asyc` element is rendered.
    form            | Form selector.
    destination     | Element selector. It must be inside form.
    method          | Method to use, when inserting consent. Available options: append, prepend, after, before.
    consents        | Array of consents to render. This array will be merged with consents from configuration. You can use it hardcode some censent into your form without a config.

    Hardcoded consent example:

    ```php
    new \Swissup\Gdpr\Model\PersonalDataForm([
        'id'     => 'vendor:product-question',
        'name'   => 'Vendor: Product Questions',
        'action' => 'module_controller_action',
        'js_config' => [
            // Hardcoded consents. Do not add any, if you wish to control them from the configuration
            'consents' => [
                [
                    'enabled' => 1,
                    'sort_order' => 20,
                    'html_id' => 'vendor_module_consent',
                    'title' => __('I agree to my personal data being stored and used to display my questions on the site'),
                ]
            ]
        ]
    ])
    ```

 3. Check if everything works as expected. You should now see your form in the
    [consents configuration](/m2/extensions/gdpr/configuration/#consents-section)
 4. Using GDPR configuration, activate some consent for your form and check the
    frontend. Client-side and server-side validations will work automatically!
 5. After the form is submitted with accepted consent, check
    [Accepted Consents](/m2/extensions/gdpr/backend/#accepted-consents) page.
    Your form is added here too!

### Registering additional consents for existing form

 1. Add `forms_load_after` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_personal_data_forms_load_after">
        <observer name="vendor_module_register_consents" instance="Vendor\Module\Observer\RegisterAdditionalConsents" />
    </event>
    ```

 2. Create `RegisterAdditionalConsents` observer that will add consent:

    ```php
    <?php

    namespace Vendor\Module\Observer;

    class RegisterAdditionalConsents implements \Magento\Framework\Event\ObserverInterface
    {
        /**
         * @param \Magento\Framework\Event\Observer $observer
         * @return void
         */
        public function execute(\Magento\Framework\Event\Observer $observer)
        {
            $forms = $observer->getCollection();

            $forms->getItemById('magento:contact-us')->addConsent([
                'html_id' => 'vendor_module_id',
                'sort_order' => 0,
                'title' => __('Custom consent added via event observer'),
                'enabled' => 1,
            ]);
        }
    }
    ```

 3. Check the Contact Us page. Now it will have your consent too. You don't need
    to add validators or other logic. GDPR module will do the rest for you.

### Adding additional consents into configuration

Just use the same approach as you use when adding custom config options
into existing configuration sections.

### Processing client's request

 1. Add `handlers_load_before` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_personal_data_handlers_load_before">
        <observer name="vendor_module_register_handler" instance="Vendor\Module\Observer\RegisterPersonalDataHandler" />
    </event>
    ```
 2. Create `RegisterPersonalDataHandler` observer that will register request
    processing handler:

    ```php
    <?php

    namespace Vendor\Module\Observer;

    class RegisterPersonalDataHandler implements \Magento\Framework\Event\ObserverInterface
    {
        /**
         * @var \Vendor\Module\Model\PersonalDataHandler\Question
         */
        private $handler;

        /**
         * @param \Vendor\Module\Model\PersonalDataHandler\Question $handler
         */
        public function __construct(
            \Vendor\Module\Model\PersonalDataHandler\Question $handler
        ) {
            $this->handler = $handler;
        }

        /**
         * @param \Magento\Framework\Event\Observer $observer
         * @return void
         */
        public function execute(\Magento\Framework\Event\Observer $observer)
        {
            $observer->getCollection()->addItem($this->handler);
        }
    }
    ```

 3. Implement handler:

    ```php
    <?php

    namespace Vendor\Module\Model\PersonalDataHandler;

    use Swissup\Gdpr\Model\ClientRequest;
    use Swissup\Gdpr\Model\PersonalDataHandler\AbstractHandler;
    use Swissup\Gdpr\Model\PersonalDataHandler\HandlerInterface;
    use Magento\Framework\Exception\LocalizedException;

    class Question extends AbstractHandler implements HandlerInterface
    {
        /**
         * @var \Vendor\Module\Model\ResourceModel\Question\CollectionFactory
         */
        private $questionCollectionFactory;

        /**
         * @param \Swissup\Gdpr\Model\PersonalDataHandler\Context $context
         * @param \Vendor\Module\Model\ResourceModel\Question\CollectionFactory $questionCollectionFactory
         */
        public function __construct(
            \Swissup\Gdpr\Model\PersonalDataHandler\Context $context,
            \Vendor\Module\Model\ResourceModel\Question\CollectionFactory $questionCollectionFactory
        ) {
            parent::__construct($context);
            $this->questionCollectionFactory = $questionCollectionFactory;
        }

        /**
         * Check if deletion request can be processed.
         *  - This method should throw an exception if there is some major
         *    incompleted operation is made by client (eg. pending order)
         *
         *  - DO NOT THROW ANY EXCEPTIONS in case of minor issues, as it will
         *    completely stop request processing by all modules.
         *
         * @return void
         * @throws LocalizedException
         */
        public function beforeDelete(ClientRequest $request)
        {
            $collection = $this->getQuestionCollection($request)
                ->addFieldToFilter('status', ['neq' => 'completed']);

            if ($collection->getSize()) {
                throw new LocalizedException(
                    __(
                        "Can't remove data. Incompleted questions found: %1",
                        implode(', ', $collection->getColumnValues('question_id'))
                    )
                );
            }
        }

        /**
         * @return void
         */
        public function delete(ClientRequest $request)
        {
            $this->anonymize($request);
        }

        /**
         * @return void
         */
        public function anonymize(ClientRequest $request)
        {
            $questions = $this->getQuestionCollection($request);
            $size = $questions->getSize();

            $this->anonymizeCollections(
                [
                    $questions
                ],
                [
                    'email' => $this->faker->getEmail($request),
                    'fullname' => $this->faker->getStaticPlaceholder(),
                ]
            );

            $request->addSuccess(sprintf(
                'Questions data anonymization finished. %s items where processed',
                $size
            ));
        }

        /**
         * @return array
         */
        public function export(ClientRequest $request)
        {
            return [];
        }

        /**
         * @param  ClientRequest $request
         * @return \Magento\Sales\Model\ResourceModel\Order\Collection
         */
        private function getQuestionCollection(ClientRequest $request)
        {
            $columns = ['email'];
            $values = [$request->getClientIdentity()];
            if ($request->getCustomerId()) {
                $columns[] = 'customer_id';
                $values[] = $request->getCustomerId();
            }

            $collection = $this->questionCollectionFactory->create()
                ->addFieldToFilter($columns, $values);

            if ($this->useWebsiteFilter()) {
                $collection->addFieldToFilter(
                    'store_id',
                    [
                        'or' => [
                            ['in' => $this->getStoreIds($request)],
                            ['null' => true],
                        ]
                    ]
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

 -  [Back to Main Page](/m2/extensions/gdpr/)
