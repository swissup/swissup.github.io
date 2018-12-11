---
layout: default
title: Miscellaneous scripts snippets
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension settings "
category: Checkout Success
---

# Miscellaneous scripts snippets

Here you can find some code snippets that can be used in [`Miscellaneous scripts`](../settings/) of Checkout Success Page extension.

#### Google AdWords conversion tracking tag

It is just an example. `send_to` property has to have your own value.

```html
<script>
    gtag('event', 'conversion', {'send_to': 'AW-123456789/AbC-D_efG-h12_34-567',
        'value': {% raw %}{{orderAmount}}{% endraw %},
        'currency': '{% raw %}{{currency}}{% endraw %}'
    });
</script>
```

#### Google Customer Reviews

Google Customer Reviews is a free program that allows Google to collect seller reviews on your behalf from your customers. Read more at [Introducing Google Customer Reviews](https://support.google.com/merchants/answer/7188525) page.

Code below was taken from [Add the opt-in code](https://support.google.com/merchants/answer/7106244#optin) and slightly modified to work at checkout success page. Check source link to get more info about code below.

```html
<!-- BEGIN GCR Opt-in Module Code -->
<script src="https://apis.google.com/js/platform.js?onload=renderOptIn"
  async defer>
</script>

<script>
  window.renderOptIn = function() { 
    window.gapi.load('surveyoptin', function() {
      var shippingData = {% raw %}{{orderShippingAddress}}{% endraw %},
          today = new Date(),
          estimatedDate = new Date();
    
      estimatedDate.setDate(today.getDate() + 3); // estimated delivery date is 3 days from now
      window.gapi.surveyoptin.render(
        {
          // REQUIRED
          "merchant_id":"MERCHANT_ID",
          "order_id": "{% raw %}{{orderId}}{% endraw %}", // ORDER_ID
          "email": "{% raw %}{{customerEmail}}{% endraw %}", // CUSTOMER_EMAIL
          "delivery_country": shippingData.country_id,
          "estimated_delivery_date": estimatedDate.toISOString().slice(0, 10),

          // OPTIONAL
          "opt_in_style": "OPT_IN_STYLE"
        }); 
     });
  }
</script>
<!-- END GCR Opt-in Module Code -->
```

#### Customer type (guest or registered customer)

```html
<script type="text/javascript">
    var customerType = '{% raw %}{{customerId}}{% endraw %}' ? 'registered' : 'guest';
</script>
```

#### Ordered Items SKUs

> Requires Checkout Success Page version 1.1.3 or higher.

```html
<script type="text/javascript">
    var orderedItems = {% raw %}{{orderItems}}{% endraw %};
    var orderedSKUs = jQuery.map(orderedItems, function(v){ return v.sku; }); // Array
</script>
```

#### Quantity of ordered products

> Requires Checkout Success Page version 1.1.3 or higher.

```html
<script type="text/javascript">
    var orderedItems = {% raw %}{{orderItems}}{% endraw %};
    var orderedQty = 0;
    jQuery.map(orderedItems, function(v){ orderedQty += parseFloat(v.qty_ordered); });
    // now orderedQty containes quantity of ordered products
</script>
```

#### Estimated delivery date

It's just an example how you can calculate estimated delivary date.

In this case we know that shipping method with code `FAST_DELIVERY` deliver products within 1 day, `THREE_DAYS_DELIVERY` - deliver within 3 days and all other methods deliver within 4 days.

```html
<script type="text/javascript">
    var today = new Date(),
        estimatedDate = new Date(),
        shippingMethod = '{% raw %}{{shippingCode}}{% endraw %}';
    if (shippingMethod == 'FAST_DELIVERY') {
        estimatedDate.setDate(today.getDate() + 1);
    } else if (shippingMethod == 'THREE_DAYS_DELIVERY') {
        estimatedDate.setDate(today.getDate() + 3);
    } else {
        // all other methods delivers within 4 days
        estimatedDate.setDate(today.getDate() + 4);
    }
    // now estimatedDate containes delivery date depending
    // on shipping method customer used in order
</script>
```
