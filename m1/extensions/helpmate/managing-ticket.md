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

![New ticket interface](/images/m1/extensions/helpmate/add-new-ticket.png)

So, first you can try find an answer using a list of quick answers based on predefined templates. You can also write a comment and hide it from other users. Attach a file to the ticket if you need. If you still need a help, please fill out the rest of fileds and **Save ticket**.

In the `Notes` field, you can enter any kind of information you want. This field is visible for admin users only and is out of customers reach.

- [Submitting support request from front-end interface](#submitting-support-request-from-front-end-interface)

### Submitting support request from front-end interface

Helpmate front-end interfaces allow store visitors to submit support request, get access to pending tickets and use the store Knowledge base.

**Contact form**

Contact Us form allows to send support requests from the client to store support team. After Helpmate installation you can still use the default Contact us form. In order to use it, you have to enable that option in Helpmate configuration.

![Contact us form](/images/m1/extensions/helpmate/contact-us-form.png)

-   In the `Title` please specify the ticket Name.
-   In the `Email` field leave your email address.
-   In the `Department` field specify the department which your ticket will be assigned to.
-   Select the priority of ticket in the `Priority` field.
-   In the `Message` field describe the issue you have.
-   In the `Phone` field enter your phone number.
-   In the `Address` field enter your address.
-   Specify your name in the `Name` field.

**Note** - *fields are required.

**Helpmate priority form**

Helpmate provides custom form, that was designed to decrease a number of support requests. As soon as customer starts typing his question, Helpmate will suggest the solution, based on articles from the knowledge base. At the bottom of the window there are recommendations how to ask a question and get prompt and precise answer.

In order to start using this form, enabled it in `Admin > System > Configuration > Templates Master > Helpmate`. After that customers can access that form at **yourstore.com/helpdesk**.

`If you don't find the answer you need, you will be offered to Add new Ticket. Please fill the form and click on Save ticket.`

**Customer tickets interface**

Registered customers can create tickets right from their account pages. Please use pagination toolbar to make the tickets searching process faster.

![My tickets interface](/images/m1/extensions/helpmate/my-tickets-interface.png)

**Note**: the `Department and Priority fields` can be disabled by store administrator only.

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
