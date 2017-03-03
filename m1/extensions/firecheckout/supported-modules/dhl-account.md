---
layout: default
title: Dhl account integration
description: Firecheckout integration with Dhl_Account
keywords: Dhl_Account, dhl, parcel
category: Firecheckout
---

# Dhl Account

 1. Open `app/code/community/Dhl/Account/etc/config.xml` and find the following lines:

    ```xml
    <controller_action_postdispatch_checkout_onepage_saveShipping>
        <observers>
            <savePackstationInformation>
                <class>dhlaccount/observer</class>
                <method>savePackstationInformation</method>
            </savePackstationInformation>
        </observers>
    </controller_action_postdispatch_checkout_onepage_saveShipping>
    ```

    Add the next code below:

    ```xml
    <controller_action_postdispatch_firecheckout_index_saveBilling>
        <observers>
            <save_dhlaccount>
                <class>dhlaccount/observer</class>
                <method>saveDhlAccount</method>
            </save_dhlaccount>
            <save_package_notification_flag>
                <class>dhlaccount/observer</class>
                <method>savePackageNotificationFlag</method>
            </save_package_notification_flag>
        </observers>
    </controller_action_postdispatch_firecheckout_index_saveBilling>
    <controller_action_predispatch_firecheckout_index_saveShipping>
        <observers>
            <reset_parcel_announcement>
                <class>dhlaccount/observer</class>
                <method>resetParcelAnnouncement</method>
            </reset_parcel_announcement>
        </observers>
    </controller_action_predispatch_firecheckout_index_saveShipping>
    <controller_action_postdispatch_firecheckout_index_saveShipping>
        <observers>
            <savePackstationInformation>
                <class>dhlaccount/observer</class>
                <method>savePackstationInformation</method>
            </savePackstationInformation>
        </observers>
    </controller_action_postdispatch_firecheckout_index_saveShipping>
    <controller_action_predispatch_firecheckout_index_saveOrder>
        <observers>
            <savePackstationInformation>
                <class>dhlaccount/observer</class>
                <method>savePackstationInformation</method>
            </savePackstationInformation>
        </observers>
    </controller_action_predispatch_firecheckout_index_saveOrder>
    ```

 2. Apply the following patch to `js/dhl/account.js`

    ```diff
    --- a/js/dhl/account.js
    +++ b/js/dhl/account.js
    @@ -1,4 +1,7 @@
    document.observe("dom:loaded", function() {
    +    if ($('shipping:packstation')) {
    +        togglePackstation();
    +    }

         checkAnnouncementBox(null, null);
         var elementsToObserve = new Array('billing:country_id',
    @@ -15,9 +18,11 @@
         });


    -    Event.observe($('opc-billing'), 'click', function(event) {
    -        return checkAnnouncementBox(event, this);
    -    });
    +    if ($('opc-billing')) {
    +        Event.observe($('opc-billing'), 'click', function(event) {
    +            return checkAnnouncementBox(event, this);
    +        });
    +    }

         var dhlPackstation = $$('#dhl_packstation > div');
         if (dhlPackstation.length > 0) {
    @@ -31,18 +36,21 @@
             togglePackstation();
         }

    -    $('co-billing-form').observe('click', function(event) {
    -        var triggerElem = Event.element(event);
    -        if (triggerElem != null
    -            && triggerElem.type != null
    -            && triggerElem.type.toLowerCase() == 'button'
    -            && Translator.translate(triggerElem.title.toLowerCase()) == Translator.translate('Continue').toLowerCase()
    -            && $('shipping:packstation') != null
    -            && $('shipping:packstation').checked == true
    -        ) {
    -            disablePackstation();
    -        }
    -    });
    +    if ($('co-billing-form')) {
    +        $('co-billing-form').observe('click', function(event) {
    +            var triggerElem = Event.element(event);
    +            if (triggerElem != null
    +                && triggerElem.type != null
    +                && triggerElem.type.toLowerCase() == 'button'
    +                && Translator.translate(triggerElem.title.toLowerCase()) == Translator.translate('Continue').toLowerCase()
    +                && $('shipping:packstation') != null
    +                && $('shipping:packstation').checked == true
    +            ) {
    +                disablePackstation();
    +            }
    +        });
    +    }
    +
         if ($('shipping:packstation') != null) {
             Event.observe($('shipping:packstation'), 'click', function(event) {
                 togglePackstation();
    @@ -75,14 +83,16 @@
             });
         }

    -    $("shipping:country_id").observe('change', function(event) {
    -        if ('DE' != $F("shipping:country_id")) {
    -            disablePackstation();
    -            $('shipping:packstation').disable();
    -        } else {
    -            $('shipping:packstation').enable();
    -        }
    -    });
    +    if ($("shipping:country_id")) {
    +        $("shipping:country_id").observe('change', function(event) {
    +            if ('DE' != $F("shipping:country_id")) {
    +                disablePackstation();
    +                $('shipping:packstation').disable();
    +            } else {
    +                $('shipping:packstation').enable();
    +            }
    +        });
    +    }

         if ($('shipping-address-select') != null) {
             Event.observe('shipping-address-select', 'change', function(event) {
    @@ -236,9 +246,11 @@
             }
             $('shipping_dhl_account_number').style.display = 'none';
             $('dhl_packstation').style.display = 'none';
    -        $('co-shipping-form').insert({
    -            bottom: $('dhl_packstation')
    -        });
    +        if ($('co-shipping-form')) {
    +            $('co-shipping-form').insert({
    +                bottom: $('dhl_packstation')
    +            });
    +        }
             $('dhl_packstation').hide();
             $($($('shipping:postcode').parentNode).parentNode).show();
             $($($('shipping:city').parentNode).parentNode).show();
    ```
