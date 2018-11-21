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
    {% raw %}{{block class="Swissup\DeliveryDate\Block\View" area="frontend" template="Swissup_DeliveryDate::email/order/view.phtml" order=$order}}{% endraw %}
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
