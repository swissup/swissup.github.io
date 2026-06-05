---
layout: default
title: Checkout Consumer Rights Configuration
description: Consumer Rights settings
category: Checkout Consumer Rights
---

# Configuration

Module configuration is available at _Stores > Configuration > Swissup Checkout > Consumer Rights_.

## Legal Guarantee Notice

![Legal Guarantee Notice](/images/m2/checkout-consumer-rights/configuration/legal-guarantee-notice.webp){:width="858" height="431"}

Option              | Description
--------------------|---------------
**Product Page**    |
Renderer            | Select how Legal Guarantee Notice will be rendered on the product page. See our [use cases](/m2/extensions/checkout-consumer-rights/use-cases/) for details.
Output Container    | Select where Legal Guarantee Notice will be shown.
**Checkout Page**   |
Renderer            | Select how Legal Guarantee Notice will be rendered on the product page. See our [use cases](/m2/extensions/checkout-consumer-rights/use-cases/) for details.
Output Container    | Select where Legal Guarantee Notice will be shown.

## Order Withdrawal

![Order Withdrawal](/images/m2/checkout-consumer-rights/configuration/order-withdrawal.webp){:width="858" height="344"}

Option                  | Description
------------------------|---------------
Allow order withdrawal  | Enable or disable order withdrawal for customers. If enabled, customers will be able to submit order withdrawal request from `sales/guest/view` page.
Add footer link         | Enable or disable order withdrawal link in the footer of the website.
Send notification to    | Select email address to receive order withdrawal notifications. If empty, notifications will be sent to the default email address specified in _General / Store Email Addresses / Sales Representative_
Email template          | Select email template for order withdrawal notification.
