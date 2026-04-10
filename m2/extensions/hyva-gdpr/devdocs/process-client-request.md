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

    use Magento\Framework\Event\Observer;
    use Magento\Framework\Event\ObserverInterface;
    use Vendor\Module\Model\GdprDataHandler;

    class RegisterPersonalDataHandler implements ObserverInterface
    {
        private GdprDataHandler $handler;

        public function __construct(GdprDataHandler $handler)
        {
            $this->handler = $handler;
        }

        public function execute(Observer $observer)
        {
            $observer->getCollection()->addItem($this->handler);
        }
    }
    ```

 3. Implement handler that will anonymize question collection:

    ```php
    <?php

    namespace Vendor\Module\Model;

    use Magento\Framework\Exception\LocalizedException;
    use Swissup\Gdpr\Model\ClientRequest;
    use Swissup\Gdpr\Model\PersonalDataHandler\HandlerHelper;
    use Vendor\Module\Model\ResourceModel\Item\CollectionFactory;

    class GdprDataHandler
    {
        private CollectionFactory $collectionFactory;

        public function __construct(CollectionFactory $collectionFactory)
        {
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
        public function beforeDelete(ClientRequest $request, HandlerHelper $handlerHelper)
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

        public function delete(ClientRequest $request, HandlerHelper $handlerHelper)
        {
            $this->anonymize($request);
        }

        public function anonymize(ClientRequest $request, HandlerHelper $handlerHelper)
        {
            $collections = [$this->getCollection($request, $handlerHelper)];

            $handlerHelper->anonymizeCollections($collections, [
                'email' => $handlerHelper->getFaker()->getEmail($request),
                'fullname' => $handlerHelper->getFaker()->getStaticPlaceholder(),
            ]);

            $request->addSuccess(sprintf(
                'Questions data anonymization finished. %s items where processed',
                $collection->getSize()
            ));
        }

        public function export(ClientRequest $request, HandlerHelper $handlerHelper)
        {
            return [];
        }

        private function getCollection(ClientRequest $request, HandlerHelper $handlerHelper)
        {
            $columns = ['email'];
            $values = [$request->getClientIdentity()];

            if ($request->getCustomerId()) {
                $columns[] = 'customer_id';
                $values[] = $request->getCustomerId();
            }

            $collection = $this->collectionFactory->create()->addFieldToFilter($columns, $values);

            if ($handlerHelper->useWebsiteFilter()) {
                $collection->addFieldToFilter(
                    'store_id',
                    [
                        'or' => [
                            ['in' => $handlerHelper->getStoreIds($request)],
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
