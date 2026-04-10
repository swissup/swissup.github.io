---
layout: default
title: Add consent to the custom form
description: How to add consent to the new form added by your module
category: GDPR
---

# Custom form with a Consent

GDPR module will automatically add and validate known consents in all
registered forms. All we need is to register new form with one or more consents.

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
                    'js_config' => [
                        // Hardcoded consents. Do not add any, if you wish to control them from the configuration
                        'consents' => [
                            [
                                'enabled' => 1,
                                'sort_order' => 20,
                                'html_id' => 'vendor_module_consent',
                                'title' => __('I agree to my personal data being stored and used to display my questions on the site'),
                            ],
                        ],
                    ],
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
    async           | Element selector. Usefull for forms rendered via knockout library. Enter selector and consent will be inserted when `async` element is rendered.
    form            | Form selector.
    destination     | Element selector. It must be inside form.
    method          | Method to use, when inserting consent. Available options: append, prepend, after, before.
    consents        | Array of consents to render. This array will be merged with consents from configuration. You can use it hardcode some consent into your form without a config.

 3. Check if everything works as expected. You should now see your form in the
    [consents configuration](/m2/extensions/gdpr/configuration/#personal-data-consents-section)
 4. Optional: Using GDPR configuration, activate some more consents for your form and check the
    frontend. Client-side and server-side validations will work automatically!
 5. After the form is submitted with accepted consent, check
    [Accepted Consents](/m2/extensions/gdpr/backend/#accepted-consents) page.
    Your form is added here too!

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/gdpr/devdocs/)
