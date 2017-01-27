---
layout: default
title: Helpmate managing tickets
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Managing ticket

Tickets interface allows to manage tickets and answer them from admin interface. Admin users can create tickets from the backend and reply to the tickets via email.
Tickets can be created from orders page, customers information page or directly from tickets listing interface. Customers can create tickets from their account pages, contact or custom Helpmate form. 

In order to create ticket from the backend, go `Admin > Templates Master > Helpmate > Tickets` and click on **Add New ticket**.

**General details tab**

image

-   In the `Title` field specify the ticket name.
-   In the `Create date` field select the date of ticket creation from a calendar.
-   In the `Modified date` field select the date of ticket modification.
-   In the `Store View` field select the store, where the ticket was created. This way you are allowed to assign ticket to the order, that has been made in selected store.
**Note**: please set correct store view for that ticket. Default Magento Store View (Admin) will be used for sending emails when "All store view" is selected.
-   In the `Department field` specify the department name, where the ticket was assigned to.
-   In the `Assigned` field select the admin user, who will be responsible for answering the customer request.
-   Select the status of ticket in the `Status` field. Possible values are Open, Replied, On hold and Closed.
-   In the `Priority` field specify the ticket priority. Possible values are Low, Medium, High, Emergency and Critical.
-   In the `Email` field enter the user email address.
-   `Order number` field allows you to enter the additional information about a purchase due to which the ticket was sent.
-   In the `Phone` field enter the user phone number.
-   In the `Address` field enter the user address.
-   In the `Name` field specify the user Name.

**Add comment tab**

image

-   In the `Knowledge Faq` field select the quick answer from drop-down list using either complete KB article or a link, that was inserted before that.
-   In the `Quick Answers` field select quick answer from drop-down list using either complete KB article from predefined FAQ category assigned in admin.
-   In the `Comment` field specify the content for the ticket. The message will be added to the ticket discussion and will be sent to customer.
-   Please tick off `Hidden comment` field if you want to hide a comment.
-   In the `File` field you are allowed to attach file to the ticket.
-   Click on **Add Comment**.
-   Click on **Save Ticket**.

**Notes tab**

image

In the `Notes` field, you can enter any kind of information you want. This field is visible for admin users only and is out of customers reach.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email gateway](../managing-email-gateway/)
*   [Managing department](../managing-department/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
