---
layout: default
title: Improved Admin Security
description: magento security module installation
keywords: " magento security extension, admin security extension, magento
security module, magento login protection, magento secure admin login, magento
admin extension "
category: Improved Admin Security
---

# Improved Admin Security

- [How to get notification when somebody is accessing store backend from other IP address](#how-to-get-notification-when-somebody-is-accessing-store-backend-from-other-ip-address)
- [How can I check details of recent changes in store configuration](#how-can-i-check-details-of-recent-changes-in-store-configuration)

### How to get notification when somebody is accessing store backend from other IP address

To set recipient of a notification, go `Admin > System > Configuration > Templates-Master > Admin Watcher`. Please set the following:

-   in `Send admin notification to field` - enter the email address of person who should get notification
-   in `Sender` - select the Sender of notification
-   in `Email Template` - select the email template of notification

After that please set the list of allowed IP addressed at `Admin > System > Configuration > Templates-Master > Admin Watcher Allowed IP`.

### How can I check details of recent changes in store configuration

In order to find out the recent changes in store configuration, please make sure, that the module **Admin Watcher** is **enabled**. Cehck that navigating to `Admin  >  System  >  Configuration > Templates-Master > Admin Watcher`. 

Then go `Admin > Templates-Master > Admin Watcher > Action Log` and in `Actions column` you will see the details of recent changes in store configuration.

#### You can also check:

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Admin interfaces](../admin-interfaces/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)