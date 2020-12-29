---
layout: default
title: Configuration
description: magento 2 abandoned cart module configuration
keywords: magento abandoned cart configuration
category: Abandoned Cart
---

# Configuration

Abandoned Cart configuration is located at
_Stores > Configuration > Swissup > Abandoned Carts_.

### General

![General section](/images/m2/abandoned-cart/configuration/general.png)

Option                    | Description
--------------------------|-------------------------------------------
Enabled                   | Enable/Disable Abandoned Cart module
Capture Email on Checkout | Save email when guest enters it on checkout page
Capture Newsletter Email  | Save email when customer subscribes to newsletter
Default Status            | Default status for new abandoned cart emails:
| `Approved` - emails will be sent automatically;
| `Pending` - emails won't be sent until admin changes status to approved.

### Admin Notification

If you approve emails manually, you can enable daily notification email
about number of pending abandoned carts emails.

![Admin Notification section](/images/m2/abandoned-cart/configuration/admin-notification.png)

Option                       | Description
-----------------------------|-------------------------------------------
Enabled                      | Enable/Disable Admin Notification
Send Email From              | Notification email sender
Administrator Email          | Email of administrator
Administrator Email Template | Notification email template

##### Next Up

 -  [Back to Home](/m2/extensions/abandoned-cart/)
