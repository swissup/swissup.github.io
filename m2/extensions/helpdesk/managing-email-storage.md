---
layout: default
title: Helpdesk managing email storage
description: magento helpdesk extension installation instructions
keywords: " magento help desk module, magento ticket, magento support  "
category: Helpdesk
---

# Managing email storage

Email Storage interface allows you to set two way communication channel between user and support staff. Helpdesk will read customers messages from email storage and assign them to appropriate tickets or create new one.

**Note**: you can create some storages and assign them to appropriate departments or stores.

In order to create a new storage, go `Admin > Swissup > Helpdesk > Email Storages`. Now you can see a `Storages` grid where you can track already created email storages. In order to create new one, please click on **Add New Email Storage**.

![Email storage interface](/images/m2/helpdesk/email_storage-edit.png)

-   In the `Name` field specify the name.
-   In the `Email` field enter the email address, which will be used to receive emails from customers.
**Note**: do not use the same email address for your storage.
-   `Enabled` Enabled the current Storage.
-   In the `Type` field select POP3 or IMAP protocol, that will be used by your email server.
-   In the `Host` field enter the address of your email server.
-   In the `Username` field specify the user’s name or email address for authorization.
-   In the `Password` field define the user’s password.
-   In the `Port` field enter the port number for access to your email server. By default, the following ports are used `110 for POP3, 995 for POP3-SSL, 143 for IMAP-TLS and 993 for IMAP-SSL`.
-   In the `Secure` field select the type of secure. Possible values are None , SSl\TLS or STARTTLS.
-   Click on **Save**.

#### You can also check

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Cron configuration](../cron-configuration/)
*   [Managing ticket](../managing-ticket/)
*   [Managing department](../managing-department/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
