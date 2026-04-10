---
layout: default
title: Register custom cookies and groups
description: How to inform client about cookies added by your module
category: GDPR
---

# Custom Cookies

GDPR module will automatically show all registered cookies on a cookie-settings page.
All you need is to register your cookie. Sometimes you may want to use your own
cookie group. To make it possible you must register your cookie group too.

* TOC
{:toc}

### Register Cookie

 1. Add `cookies_load_before` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_cookies_load_before">
        <observer name="vendor_module_register_cookies" instance="Vendor\Module\Observer\RegisterCookies" />
    </event>
    ```

 2. Create `RegisterCookies` observer that will register a cookie:

    ```php
    <?php

    namespace Vendor\Module\Observer;

    class RegisterCookies implements \Magento\Framework\Event\ObserverInterface
    {
        /**
         * Prepare forms
         *
         * @param \Magento\Framework\Event\Observer $observer
         * @return void
         */
        public function execute(\Magento\Framework\Event\Observer $observer)
        {
            $observer->getCollection()->addItemFromArray([
                'name' => 'cookie_name',
                'description' => "Cookie description.",
                'group' => 'marketing', // necessary, analytics, advertisement, marketing
            ]);
        }
    }
    ```

 3. Check the "cookie-settings" page. Now it will have your cookie too.

### Register Cookie Group

 1. Add `cookie_groups_load_before` event listener in `etc/events.xml` file:

    ```xml
    <event name="swissup_gdpr_cookie_groups_load_before">
        <observer name="swissup_gdpr_register_cookie_groups" instance="Vendor\Module\Observer\RegisterCookieGroups" />
    </event>
    ```

 2. Create `RegisterCookieGroups` observer that will register a cookie group:

    ```php
    <?php

    namespace Vendor\Module\Observer;

    class RegisterCookieGroups implements \Magento\Framework\Event\ObserverInterface
    {
        /**
         * Prepare forms
         *
         * @param \Magento\Framework\Event\Observer $observer
         * @return void
         */
        public function execute(\Magento\Framework\Event\Observer $observer)
        {
            $observer->getCollection()->addItemFromArray([
                'code' => 'cookie_group_code',
                'title' => 'Cookie Group',
                'description' => "Cookie Group Description.",
                'sort_order' => 100,
                'required' => false,
            ])
        }
    }
    ```

 3. Now, you can use "cookie_group_code" to link your cookies with your group.

#### Next up
{:.no_toc}

 -  [Back to DevDocs](/m2/extensions/gdpr/devdocs/)
