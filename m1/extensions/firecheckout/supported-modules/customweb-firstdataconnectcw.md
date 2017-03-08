---
layout: default
title: Customweb FirstDataConnectCw integration
description: Firecheckout integration with Customweb FirstDataConnectCw
keywords: Customweb_FirstDataConnectCw
category: Firecheckout
---

# Customweb FirstDataConnectCw

 1. Open `app/design/frontend/base/default/layout/firstdataconnectcw.xml` and
    find the next lines:

    ```xml
    <checkout_onepage_index>
        <reference name="head">
            <action method="addItem"><type>js</type><name>customweb/firstdataconnectcw/checkout.js</name><params/><if/></action>
             <action method="addItem"><type>skin_css</type><name>customweb/firstdataconnectcw/updates.css</name></action>
        </reference>
        <reference name="content">
            <block type="firstdataconnectcw/Checkout" name="loadJavascriptForFirstDataConnectCw" after="-" />
        </reference>
    </checkout_onepage_index>
    ```

    replace them with:

    ```xml
    <checkout_onepage_index>
        <reference name="head">
            <action method="addItem"><type>js</type><name>customweb/firstdataconnectcw/checkout.js</name><params/><if/></action>
             <action method="addItem"><type>skin_css</type><name>customweb/firstdataconnectcw/updates.css</name></action>
        </reference>
        <reference name="content">
            <block type="firstdataconnectcw/Checkout" name="loadJavascriptForFirstDataConnectCw" after="-" />
        </reference>
    </checkout_onepage_index>

    <firecheckout_index_index_custom>
        <reference name="head">
            <action method="addItem"><type>js</type><name>customweb/firstdataconnectcw/checkout.js</name><params/><if/></action>
            <action method="addItem"><type>skin_css</type><name>customweb/firstdataconnectcw/updates.css</name></action>
        </reference>
        <reference name="content">
            <block type="firstdataconnectcw/Checkout" name="loadJavascriptForFirstDataConnectCw" after="-" />
        </reference>
    </firecheckout_index_index_custom>
    ```

 2. Open `js/customweb/firstdataconnectcw/checkout.js` and find the next lines:

    ```javascript
    if (typeof Review != 'undefined') {
        checkout.accordion.openSection = checkout.accordion.openSection.wrap(this.opcGotoSection.bind(this));
        Review.prototype.save = Review.prototype.save.wrap(this.beforePlaceOrder.bind(this));
        Payment.prototype.save = Payment.prototype.save.wrap(this.beforePaymentSave.bind(this));
        if (typeof shippingMethod != 'undefined') {
            shippingMethod.onSave = this.loadPaymentForm.bindAsEventListener(this);
            shippingMethod.saveUrl = this.saveShippingUrl;
        }
    }
    ```

    replace them with:

    ```javascript
    if (typeof FireCheckout !== 'undefined') {
        document.observe('firecheckout:saveBefore', function(e) {
            if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {
                try {
                    this.savePaymentInfoInBrowser();
                } catch (error) {
                    return;
                }
            }
        }.bind(this));
        checkout.setResponse = checkout.setResponse.wrap(function(original, response) {
            var url = response.transport.responseURL,
                json;
            try {
                json = response.responseText.evalJSON();
            } catch (err) {
                alert('An error has occured during request processing. Try again please');
                $(checkout.form).select('.updating').invoke('removeClassName', 'updating');
                checkout.setLoadWaiting(false);
                checkout.setLoadingButton($$('.btn-checkout')[0], false);
                return false;
            }

            if (url === checkout.urls.save && json.success) {
                if (this.isAuthorization('hidden') || this.isAuthorization('server') || this.isAuthorization('ajax')) {

                    this.requestHiddenFields(response, original.bind(checkout, response));
                    return;
                }
            }
            original(response);
        }.bind(this));
    } else if (typeof Review != 'undefined') {
        checkout.accordion.openSection = checkout.accordion.openSection.wrap(this.opcGotoSection.bind(this));
        Review.prototype.save = Review.prototype.save.wrap(this.beforePlaceOrder.bind(this));
        Payment.prototype.save = Payment.prototype.save.wrap(this.beforePaymentSave.bind(this));
        if (typeof shippingMethod != 'undefined') {
            shippingMethod.onSave = this.loadPaymentForm.bindAsEventListener(this);
            shippingMethod.saveUrl = this.saveShippingUrl;
        }
    }
    ```

 3. Save files and clear Magento and browser caches.
