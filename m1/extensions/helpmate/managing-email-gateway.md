---
layout: default
title: Helpmate managing email gateway
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento help desk extension with built
in knowledge base, magento ticket, magento support  "
category: Helpmate
---

# Managing email gateways

Email Gateways interface allows you to set two way communication channel between user and support staff. Helpmate will read customers messages from email gateway and assign them to appropriate tickets or create new one.

**Note**: you can create some gateways and assign them to appropriate departments or stores.

In order to create a new gateway, go `Admin > Templates Master > Helpmate > Email Gateways > Storage`. Now you can see a `Storage` grid where you can track already created email gateways. In order to create new one, please click on **Add Gateway**.

![Email gateway interface](/images/m1/extensions/helpmate/email-gateway.png)

-   In the `Name` field specify the Gateway name.
-   In the `Email` field enter the email address, which will be used to receive emails from customers.
**Note**: do not use the same email address for your gateway.
-   Enable the current Gateway.
-   In the `Type` field select POP3 or IMAP protocol, that will be used by your email server.
-   In the `Host` field enter the address of your email server.
-   In the `User` field specify the user’s name or email address for authorization.
-   In the `Password` field define the user’s password.
-   In the `Port` field enter the port number for access to your email server. By default, the following ports are used `110 for POP3, 995 for POP3-SSL, 143 for IMAP-TLS and 993 for IMAP-SSL`.
-   In the `Secure` field select the type of secure. Possible values are None , SSl\TLS or STARTTLS.
-   Click on **Test Email Gateway Connection** and make sure you have set up properly.
-   Click on **Save Gateway**.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Managing a knowledgebase](../managing-a-knowledgebase/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
