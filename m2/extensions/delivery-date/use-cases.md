---
layout: default
title: Delivery Date use cases
category: Delivery Date
---

# Use Cases

### Add info to the Order Email

In order to display delivery date and time in order emails, follow next steps:

 1. Go to _Marketing > Communications > Email Templates_
 2. Press **Add New Template** button
 3. Select `New Order for Guest` template, and press **Load Template** button
 5. Add the following code into `Template Content` field:

    ```txt
    {% raw %}{{block class="Swissup\DeliveryDate\Block\View" area="frontend" template="Swissup_DeliveryDate::email/order/view.phtml" order=$order}}{% endraw %}
    ```

 6. Press **Save Template** button
 7. Go to _Stores > Configuration > Sales > Sales Emails > Order_, select this
    template for `New Order Confirmation Template for Guest` option and save
    config
 8. Repeat the same steps for `New Order for Registered Customer` template.
