---
layout: default
title: Helpdesk configuration
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpdesk
---

# Configuration

 The Helpdesk module allows you to use easy to support interfaces, email gateways, department and tickets in your Magento store.

### Helpdesk configuration

Go `Stores > Configuration > Swissup > Helpdesk`. You can see the following settings.

**General tab**

![General settings](/images/m2/helpdesk/config-general.png)

-   In the `Enable` field please select **Yes**.
-   In the `Cron Task Enable` field please select **Yes** if you have configured email storage.
-   In the `Override Contact Us Form` field please select **Yes** if you want to replace standart contact us form.
-   Select **Yes** in the `Allow Guests Create Ticket` field in order to allow guest to create support ticket.

**Form tab**

![Ticket Form settings](/images/m2/helpdesk/config-form.png)

-   `New Ticket Example Template` - here you can change ticket message placeholder
-   Select **Yes** in the `File Upload/Attaching Enable` field in order to allow customers to attach files to their support request. Then you can choose the available extensions of the attached file in `Allowed File Extensions`.
-   In the `Fieldname #1, #2 and # 3 fields` (enabled if not empty) you can specify additional information for your issue.

**Mail tab**

![Email settings](/images/m2/helpdesk/config-mail.png)

-   Select **Yes** in the `Enable customer notification` field to allow the customer get notification about update ticket.
-   Select **Yes** in the `Enable admin notification` field to allow the admin get notification about update ticket.
-   In the `Archive email` you can set backup email box for all your email notification.
-   In the `Blacklist` you can add email spammers or/and annoying clients.
-   After all settings click on **Save Config**.


#### You can also check

*   [Installation](../installation/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
