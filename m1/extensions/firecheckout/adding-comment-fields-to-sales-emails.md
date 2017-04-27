---
layout: default
title: Firecheckout adding comment fields
description: Firecheckout documentation
keywords: " one step checkout magento extension, magento onepage checkout, magento checkout extension, one step checkout magento, magento edit checkout fields, one step checkout module magento, one step checkout magento mobile, magento one page checkout extension, magento one page checkout responsive, magento one page checkout custom fields, how to create one page checkout magento, how to edit one page checkout magento, checkout module in magento, quick checkout module  "
category: Firecheckout
---

# Adding comment fields to sales emails

Fire Checkout alows customers to write comments to their orders. If you wish to send the comment in the order notification email, you have to edit email templates (**New Order and New Order for Guest**).

Go `Admin > System > Transactional emails` and do the following:

1. Click Add New Template
2. At the Template field select **New Order (New Order Guest)** from the drop-down list
3. Press **Load template** button.
4. Set the Template name field with "Fire Checkout New Order" for example.
5. Set the Template Content field with the following code in the desired position. ( Before <p style="font-size:12px; line-height:16px; margin:0;">Your order confirmation is below. Thank you again for your business.</p> for example)

```xml
{{depend order.getFirecheckoutCustomerComment()}}
<p style="font-size:12px; line-height:16px; margin:0;" >Order Comment: {{htmlescape var=$order.getFirecheckoutCustomerComment()}}</p>
{{/depend}}
```

6. Click Save Template.

Repeat the same steps in order to create the email template for guests' orders.

Then navigate to `Admin > System > Configuration > Sales > Sales Email > Order`.

Add the same code block to the `New Order Confirmation Template` and `New Order Confirmation Template for Guest`. Save.