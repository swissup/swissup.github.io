---
layout: default
title: Process client request to anonymize personal data
description: How to process client request to anonymize personal data stored by custom module
category: GDPR
---

# Process client's Request

When processing client's request, GDPR module collects all registered personal data
handlers and invokes appropriate methods in each handler.

All we need to process personal data is to register a personal data handler.

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

 3. Implement handler that will anonymize question collection:

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
        private $collectionFactory;

        /**
         * @param \Swissup\Gdpr\Model\PersonalDataHandler\Context $context
         * @param \Vendor\Module\Model\ResourceModel\Question\CollectionFactory $collectionFactory
         */
        public function __construct(
            \Swissup\Gdpr\Model\PersonalDataHandler\Context $context,
            \Vendor\Module\Model\ResourceModel\Question\CollectionFactory $collectionFactory
        ) {
            parent::__construct($context);
            $this->collectionFactory = $collectionFactory;
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
            $collection = $this->getCollection($request)
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
            $collection = $this->getCollection($request);
            $size = $collection->getSize();

            $this->anonymizeCollections(
                [
                    $collection
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
        private function getCollection(ClientRequest $request)
        {
            $columns = ['email'];
            $values = [$request->getClientIdentity()];

            if ($request->getCustomerId()) {
                $columns[] = 'customer_id';
                $values[] = $request->getCustomerId();
            }

            $collection = $this->collectionFactory->create()
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

 -  [Back to DevDocs](/m2/extensions/gdpr/devdocs/)
