---
layout: default
title: Delivery Date use cases
category: Delivery Date
---

# Use Cases

{:.no_toc}

* TOC
{:toc}

### Add to the Order Email

In order to display delivery date and time in order emails, follow next steps:

 1. Go to _Marketing > Communications > Email Templates_
 2. Press **Add New Template** button
 3. Select `New Order for Guest` template, and press **Load Template** button
 5. Add the following code into `Template Content` field:

    ```txt
    {% raw %}{{block class="Swissup\DeliveryDate\Block\View" area="frontend" template="Swissup_DeliveryDate::email/order/view.phtml" order_id=$order_id}}{% endraw %}
    ```

 6. Press **Save Template** button
 7. Go to _Stores > Configuration > Sales > Sales Emails > Order_, select this
    template for `New Order Confirmation Template for Guest` option and save
    config
 8. Repeat the same steps for `New Order for Registered Customer` template.

### Add to the Success Page

Use module [Checkout Success Page](/m2/extensions/checkout-success/) module to show delivery date at success page.

 1. Make sure Checkout Success page is enabled. Go to `Stores` > `Configuration` > `Swissup Checkout` > `Success Page` and check option _'Enabled'_ in 'General' section.
 2. Go to section 'Page Layout'. Drag `Delivery Date` block from _'Blocks available on Success Page'_ and drop at _'Layout of Success Page'_ in place where you want to see delivery date.
 3. Save config or use `Save and Start Preview` button to check how success page looks after update.

### Localize calendar

Default calendar language in Delivery Date module is English. If you need to change language then you have to do a little bit of coding.

Example below will work perfectly with [FireCheckout](/m2/extensions/firecheckout/) module. In this example I will change calendar language to Dutch.

 1. Go to FireCheckout config [Custom CSS and JS](/m2/extensions/firecheckout/configuration/#custom-css-and-js-settings-section) section.
 2. Insert code below into "Custom JS" field:

    ```js
    require([
        'jquery',
        'jquery/ui',
    ], function ($) {
    var datepicker = $.datepicker;

    datepicker.regional.myLang = {
        closeText: "Sluiten",
        prevText: "←",
        nextText: "→",
        currentText: "Vandaag",
        monthNames: [ "januari", "februari", "maart", "april", "mei", "juni",
        "juli", "augustus", "september", "oktober", "november", "december" ],
        monthNamesShort: [ "jan", "feb", "mrt", "apr", "mei", "jun",
        "jul", "aug", "sep", "okt", "nov", "dec" ],
        dayNames: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
        dayNamesShort: [ "zon", "maa", "din", "woe", "don", "vri", "zat" ],
        dayNamesMin: [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
        weekHeader: "Wk",
        dateFormat: "dd-mm-yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.myLang );
    });
    ```

 3. Save config. Clear Magento cache. Check FireCheckout at frontend.

Languages localization you can find at [https://github.com/jquery/jquery-ui/tree/master/ui/i18n](https://github.com/jquery/jquery-ui/tree/master/ui/i18n).

I won't deep dive into explanation how to apply other localization. You only need to get `datepicker.regional.myLang` initialization. If you don't like some translations - feel free to change them. Or if you can't find your language you can make localization by yourself.
