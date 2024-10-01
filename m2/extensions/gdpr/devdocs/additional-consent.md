---
layout: default
title: Add additional consent to the existing form
description: How to add additional consents to the existing Magento's form
category: GDPR
---

# Additional Consent

GDPR module will automatically show all registered consents below form.
All we need is to add a consent to the registered personal data form.

Here is an example on how to add additional consent to the "Contact Us" form.

 1. Add `forms_load_after` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_personal_data_forms_load_after">
        <observer name="vendor_module_register_consents" instance="Vendor\Module\Observer\RegisterAdditionalConsents" />
    </event>
    ```

 2. Create `RegisterAdditionalConsents` observer that will add a consent:

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
            $observer->getCollection()->getItemById('magento:contact-us')->addConsent([
                'html_id' => 'vendor_module_id',
                'sort_order' => 0,
                'title' => __('Custom consent added via event observer'),
                'enabled' => 1,
            ]);
        }
    }
    ```

 3. Check the "Contact Us" page. Now it will have your consent too. You don't need
    to add validators or other logic. GDPR module will do the rest for you.

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/gdpr/devdocs/)
