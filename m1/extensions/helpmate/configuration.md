---
layout: default
title: Helpmate configuration
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Configuration

Our extension includes two Magento modules - Helpmate and Knowledgebase. The Helpmate module allows you to use easy to support interfaces, email gateways, department and tickets in your Magento store. Knowledge Base extension reduces number of support requests that makes the support easier.

- [Helpmate](helpmate/)
- [Knowledgebase](knowledgebase/)

### Helpmate configuration

Go `Admin > Configuration > Templates-Master > Helpmate`. You can see the following settings.

**General tab**

![General settings](/images/m1/extensions/helpmate/general.png)

-   In the `Enable Helpmate` field please select **Yes**.
-   Select **Yes** in the `Enable Attached File` field in order to allow customers to attach files to their support request. Then you can choose the available extensions of the attached file.
-   `Auto close ticket after X days` - specify the number of days during which the ticket will be active.
-   `Enable order select` - select **Yes** to enable the ability to attach an order to the ticket.
-   Please select **Yes** in the `Enable Akismet` field and then `enter the API Key in the Akismet API key field`. 

**Ticket form tab**

![Ticket settings](/images/m1/extensions/helpmate/ticket-form.png)

-   Select **Yes** in the `Use default Contact Us form` field to enable using of default magento Contact form. In case you select No, the default form will be disabled and all customers requests, submitted via contact form, will be processed by Helpmate.
-   If you select **Yes** in the `Use Priority` form field, customers can define the urgency level from the dropdown list. They will see the following Helpmate priority form:

![Helpmate priority form](/images/m1/extensions/helpmate/helpmate-priority-form.png)

-   In the `Fieldname #1, #2 and # 3 fields` (enabled if not empty) you can specify additional information for your issue.
-   In the `Use wysiwyg on backend ticket form` field select **Yes** to enable WYSIWYG editor for tickets.
-   If you select Yes in the `Use HTMLpurify on backend` field, you enable filtering of html output for backend. In case you select No, the option will be disabled and html content will be shown in admin tickets interfaces processed with HTMLpurifier in order to make it secure (htmlpurifier doesn’t guarantee 100% protection from all types of HTML injection).
-   In the `Quick answer categories` select KB category, that was created earlier and assigned as **Quick answer category**.

**Email tab**

![Email settings](/images/m1/extensions/helpmate/email.png)

-   Select **Yes** in the `Enable customer notification` field to allow the customer get notification about update ticket.
-   Select **Yes** in the `Enable admin notification` field to allow the admin get notification about update ticket.
-   In the `Default Email Sender` field specify the Sender, who will send email.
-   In the `Default Email Template User New Ticket Notification` select the email template for user notification of new ticket.
-   In the `Default Email Template Admin Theard Notification` select the email template for admin notification.
-   In the `Default Email Template New Ticket Answer` field select the email template for answer to email notification of new ticket.
-   In the `Default Email Template Ticket Autoclose` field select the email template for inactive tickets notification.
-   In the `Default Email Template Ticket Assigned to User` field select the email template for tickets that were assigned to user as outdated.
-   After all settings click on **Save Config**.

**Time configuration**

![Time settings](/images/m1/extensions/helpmate/time-configuration.png)

Our module comes with advanced `time` settings to set up the proper time settings and make the support process the most convinient for your customers. You are allowed to choose a timezone, define the days you provide users with support and also set up the working and breaking time.

### Akismet configuration

In the `Enable Akismet` field you can enable or disable Akismet anti spam filter. Helpmate is provided with separate Akismet integration module. So you have to obtain Akismet API info at [https://akismet.com/signup/](https://akismet.com/signup/) and then enable Akisment at `Admin > System > Templates Master > Akismet`.

![Akismet settings](/images/m1/extensions/helpmate/akismet.png)

As you may see, you can also enable Akismet anti-spam fiter both on Contact Us and Product Review pages.

#### You can also check

*   [Installation](../installation/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
