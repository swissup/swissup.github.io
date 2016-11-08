---
layout: default
title: Delivery Date and Time
description: Delivery Date and Time documentation
category: Firecheckout
sidebar: sidebar.md
---

# Delivery Date and Time

Allow customer to choose delivery date and time during checkout.

{% include gallery.html images=site.data.gallery.m1.firecheckout.delivery-date.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

Main features:

 -  Enable [globally or for certain shipping methods only](#general)
 -  Flexible rules for [first and last available dates](#first-and-last-available-delivery-date-rules)
 -  Allow to use separate [first available delivery date per product](#first-and-last-available-delivery-date-rules)
 -  [Disallow delivery](#excluded-delivery-dates-rules) for particular dates
 -  Customizable [time range values](#delivery-time-settings)
 -  Easy to use in [transactional emails](#transactional-email)

### Configuration

Configuration is available at
"System > Configuration > TM Checkout > Delivery Date &amp; Time" page.

#### General

![General configuration options](/images/m1/firecheckout/delivery-date/configuration/general.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Enabled                                     | Enable/Disable module functionality
Display Mode                                | Show delivery date input globally or for certain methods only
Use Calendar                                | Disable to use Delivery Time only
Use first avilable date as default value    | Populate delivery date field with default value

#### First and last available delivery date rules

![Available delivery date rules](/images/m1/firecheckout/delivery-date/configuration/available-date-rules.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Delivery processing day ends at             | Orders placed afterwards will be considered as next day orders
Delivery will be available since first available day (order date) plus this value | Delivery date offset in days
Use per product delivery date offset        | Use product attribute value as delivery date offset
Delivery date offset attribute              | Attribute to use for offset calculation
Period in days, while delivery will be available, since first available day | Last available delivery date offset

#### Excluded delivery dates rules

![Excluded delivery date rules](/images/m1/firecheckout/delivery-date/configuration/excluded-date-rules.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Exclude Weekend Days                        | Exclude delivery date on weekend (See "Configuration > General > Locale Options > Weekend Days" option)
Dates to Exclude                            | List of exluded dates

#### Delivery time settings

![Delivery time settings](/images/m1/firecheckout/delivery-date/configuration/delivery-time.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Use Time Range                              | Enable/Disable delivery time feature
Time Ranges                                 | List of available timeranges

### Transactional email

Use the following code to show delivery information in transactional email:

```html
{% raw %}{{depend order.getFirecheckoutDeliveryDate()}}
    <p>Delivery Date: {{htmlescape var=$order.getFirecheckoutDeliveryDate()}}</p>
{{/depend}}
{{depend order.getFirecheckoutDeliveryTimerange()}}
    <p>Delivery Time: {{htmlescape var=$order.getFirecheckoutDeliveryTimerange()}}</p>
{{/depend}}{% endraw %}
```

> Not sure where to add the code above? Follow the steps below to create new
> "Order Confirmation Template" for Guest and Registered Customers.

 1. Navigate to "System > Transactional Emails" and press "Add New Template"
 2. Select "New Order for Guest" template and press "Load Template"
 3. Add delivery date information code where you want to

    **Example**

    ```html
    {% raw %}<td class="order-details">
        <h3>Your order <span class="no-link">#{{var order.increment_id}}</span></h3>
        <p>Placed on {{var order.getCreatedAtFormated('long')}}</p>

        {{depend order.getFirecheckoutDeliveryDate()}}
            <p>Delivery Date: {{htmlescape var=$order.getFirecheckoutDeliveryDate()}}</p>
        {{/depend}}
        {{depend order.getFirecheckoutDeliveryTimerange()}}
            <p>Delivery Time: {{htmlescape var=$order.getFirecheckoutDeliveryTimerange()}}</p>
        {{/depend}}
    </td>{% endraw %}
    ```

 4. Save template
 5. Repeat steps 1 - 5 for registered customers. (Use "New Order" template on step 2)
 6. Navigate to "System > Configuration > Sales Emails" and assign these
    templates for corresponding config options.

### Additional possibilities

#### Show delivery date at product page

If you are using
["per product" delivery date offset](#first-and-last-available-delivery-date-rules)
attribute, you'll might found it usefull to add delivery date information
at the product page.

Open product page template and add the following code:

```html
<?php
    $_offset = $_product->getResource()
        ->getAttribute('delivery_date_offset')
        ->getFrontend()
        ->getValue($_product);

    $_date = Mage::app()->getLocale()
        ->date()
        ->addDay($_offset);
?>
<p class="delivery-date">
    <?php echo $this->__('Delivery Date: %s', $this->formatDate($_date, 'long')) ?>
</p>
```

