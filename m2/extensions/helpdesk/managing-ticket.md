---
layout: default
title: Helpdesk managing tickets
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento ticket, magento support  "
category: Helpdesk
---

# Managing ticket

Tickets interface allows to manage tickets and answer them from admin interface. Admin users can create tickets from the backend and reply to the tickets via email.
Tickets can be created from orders page, customers information page or directly from tickets listing interface. Customers can create tickets from their account pages, contact or custom Helpdesk form.

In order to create ticket from the backend, go `Admin > Swissup > Helpdesk > Tickets` and click on **Add New**.

![New ticket interface](/images/m2/helpdesk/ticket-edit.png)

Click on **Details**

![New ticket interface with Details](/images/m2/helpdesk/ticket-view_details.png)

So, first you can try find an answer using a list of quick answers based on predefined templates. You can also write a comment and hide it from other users. Attach a file to the ticket if you need. If you still need a help, please fill out the rest of fileds and **Save**.

In the `Notes` field, you can enter any kind of information you want. This field is visible for admin users only and is out of customers reach.

- [Submitting support request from front-end interface](#submitting-support-request-from-front-end-interface)

### Submitting support request from front-end interface

Helpdesk front-end interfaces allow store visitors to submit support request, get access to pending tickets.

**Contact form**

Contact Us form allows to send support requests from the client to store support team. After Helpdesk installation you can still use the default Contact us form. In order to use it, you have to enable that option in Helpdesk configuration.

![Contact us form](/images/m2/helpdesk/contact_us-integration.png)

-   In the `Title` please specify the ticket Name.
-   In the `Email` field leave your email address.
-   In the `Department` field specify the department which your ticket will be assigned to.
-   Select the priority of ticket in the `Priority` field.
-   In the `Message` field describe the issue you have.
-   In the `Phone` field enter your phone number.
-   Specify your name in the `Name` field.

**Note** - *fields are required.

**Customer tickets interface**

Registered customers can create tickets right from their account pages. Please use pagination toolbar to make the tickets searching process faster.

![My tickets interface](/images/m2/helpdesk/customer-my_tickets.png)

**Note**: the `Department and Priority fields` can be disabled by store administrator only.

If you click on **View** you can see ticket messages and another details

![My ticket view interface](/images/m2/helpdesk/customer-ticket_view.png)

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing email storage](../managing-email-storage/)
*   [Managing department](../managing-department/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
