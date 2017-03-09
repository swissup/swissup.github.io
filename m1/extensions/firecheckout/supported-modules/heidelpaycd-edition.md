---
layout: default
title: HeidelpayCD Edition integration
description: Firecheckout integration with HeidelpayCD Edition
keywords: heidelpay, heidelpaycd
category: Firecheckout
---

# HeidelpayCD Edition

> HeidelpayCD_Edition version — 16.6.22

 1. Open `app/design/frontend/base/default/layout/hcd.xml` and apply the
    following patch:

    ```diff
    --- old
    +++ new
    @@ -6,6 +6,12 @@
                <action method="addJS"><name>hcd/heidelpaycd.js</name></action>
             </reference>
         </checkout_onepage_index>
    +    <firecheckout_index_index>
    +        <reference name="head">
    +            <action method="addCss"><name>css/heidelpaycd.css</name></action>
    +            <action method="addJS"><name>hcd/heidelpaycd.js</name></action>
    +        </reference>
    +    </firecheckout_index_index>
        <checkout_onepage_success>
            <reference name="head">
                 <action method="addCss"><name>css/heidelpaycd.css</name></action>

    ```

    Save the file.

 2. Open `js/hcd/heidelpaycd.js` and apply the following patch:

    ```diff
    --- old
    +++ new
    @@ -12,8 +12,19 @@
        initialize: function() {
            this.once = 1;
    +
    +       if (typeof checkout !== 'undefined') {
            document.observe('dom:loaded', this.register.bind(this));
            Ajax.Responders.register(this);
    +       }
    +
    +
    +       var self = this;
    +       document.observe('firecheckout:saveBefore', function(e) {
    +           if (!e.memo.forceSave) {
    +               e.memo.stopFurtherProcessing = true;
    +               checkout.currentStep = 'payment';
    +               self.register();
    +               checkout.currentStep = 'review';
    +               self.register();
    +           }
    +       });
        },
        register: function () {

    @@ -133,6 +144,10 @@
            Heidelpay.toggle.getInstance().resetOnce();
        } else {
            checkout.setLoadWaiting(false);
    +
    +       if (typeof FireCheckout !== 'undefined') {
    +           checkout.save('', true);
    +       }
        }

     }

    ```

    Save the file.

 3. Navigate to _System > Configuration > TM Checkout > Firecheckout > Ajax Save and Reload Rules_
    1. Add `Firstname` and `Lastname` options to the "Billing Address" field
    2. Add `Billing Address` option to the "Payment methods depends on" field

 4. Clear Magento's cache.
