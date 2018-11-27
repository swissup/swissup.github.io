---
layout: default
title: Helpdesk managing department
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento ticket, magento support  "
category: Helpdesk
---

# Managing department

The following settings allow you to distribute different types of requests between various groups of support administrators. The use of different departments saves time and makes the support process more efficient. In order to use our extension, you have to create at least one active department.

Also you can create multiple departments and direct support tickets to them. In order to create a new department go `Admin > Swissup > Helpdesk > Departments` and click on **Add New Department**.

**General tab**

![Department interface](/images/m2/helpdesk/department-edit.png)

-   In `Enabled` field select **Yes**, if you allow admin users to escalate issues within the appropriate hidden department.
-   In the `Name` field specify the department Name.
-   In the `Store` select the store where the department will be active. This setting allows you to assign support department to separate store.
-   In the `Email Storage` field  you are allowed to assign `Email Storage to current department`.
-   In the `Users` field you are allowed  to assign administrators, who are responsible for answering support requests for this department. All admin users assigned to department will receive email notification on every new ticket created or updated in this department.
-   In the `Default User` field you are assign default administrator, who are responsible for answering support requests for this department.

**Note**: if message comes from a email storage which is not selected, it won’t be assigned to the department.

**Email Settings tab**

-   In the `Email Sender` field select the way of sending ticket updates.
-   In the `New Ticket Created (customer notification)` field select the email template for user notification about receiving the request.
-   In the `Ticket Answered (customer notification)` select the template of admin response to the message.
-   In the `Ticket New Activity (admin notification)` select the email template for department notification about receiving the new message.
-   Click on **Save**.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing ticket](../managing-ticket/)
*   [Managing email storage](../managing-email-storage/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
