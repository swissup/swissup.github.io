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
