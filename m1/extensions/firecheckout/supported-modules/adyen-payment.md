---
layout: default
title: Adyen Payment integration
description: Firecheckout integration with Adyen Payment
keywords: adyen_payment, adyen
category: Firecheckout
---

# Adyen Payment

 1. Open `app/code/community/Adyen/Payment/etc/config.xml` and find the
    following lines:

    ```xml
    <controller_action_predispatch_checkout>
        <observers>
            <adyen_payment_hpp>
                <class>adyen/observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_hpp>
            <adyen_payment_billing_agreement>
                <class>adyen/billing_agreement_observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_billing_agreement>
        </observers>
    </controller_action_predispatch_checkout>
    ```

    Replace them with:

    ```xml
    <controller_action_predispatch_checkout>
        <observers>
            <adyen_payment_hpp>
                <class>adyen/observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_hpp>
            <adyen_payment_billing_agreement>
                <class>adyen/billing_agreement_observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_billing_agreement>
        </observers>
    </controller_action_predispatch_checkout>
    <controller_action_predispatch_firecheckout>
        <observers>
            <adyen_payment_hpp>
                <class>adyen/observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_hpp>
            <adyen_payment_billing_agreement>
                <class>adyen/billing_agreement_observer</class>
                <method>addMethodsToConfig</method>
            </adyen_payment_billing_agreement>
        </observers>
    </controller_action_predispatch_firecheckout>
    ```

 2. Save the file and clear Magento cache.
