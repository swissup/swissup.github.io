---
layout: default
title: Helpmate managing department
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Managing department

The following settings allow you to distribute different types of requests between various groups of support administrators. The use of different departments saves time and makes the support process more efficient. In order to use our extension, you have to create at least one active department.

Also you can create multiple departments and direct support tickets to them. In order to create a new department go `Admin > Templates Master > Helpmate > Department` and click on **Add Department**.

**General tab**

![Department interface](/images/m1/extensions/helpmate/department-general.png)

-   In `Show on frontend` field select **Yes**, if you allow admin users to escalate issues within the appropriate hidden department.
-   In the `Text` field specify the department Name.
-   In the `Store View` select the store where the department will be active. This setting allows you to assign support department to separate store.
-   In the `Create date` field select the date of the department creation from a calendar.
-   In the `Department users` field you are allowed  to assign administrators, who are responsible for answering support requests for this department. All admin users assigned to department will receive email notification on every new ticket created or updated in this department.
-   In the `Gateway` field  you are allowed to assign `Email Gateway to current department`.

**Note**: if message comes from a gateway which is not selected, it won’t be assigned to the department.

**Email tab**

![Department email settings](/images/m1/extensions/helpmate/department-email.png)

-   In the `Sender` field select the way of sending ticket updates.
-   In the `New Ticket Template` field select the email template for user notification about receiving the request.
-   In the `Admin Ticket Template` select the email template for department notification about receiving the new message.
-   In the `Answer on Ticket Template` select the template of admin response to the message.
-   Click on **Save Department**.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing ticket](../managing-ticket/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
