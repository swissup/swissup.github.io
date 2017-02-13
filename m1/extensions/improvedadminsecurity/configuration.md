---
layout: default
title: Improved Admin Security configuration
description: magento security module installation
keywords: " magento security extension, admin security extension, magento
security module, magento login protection, magento secure admin login, magento
admin extension "
category: Improved Admin Security
---

# Configuration

### Two Factor Authentication
Go `Magento Admin > System > Configuration > Templates-Master > Two Factor Authentication`.

![General settings](/images/m1/extensions/improved-admin-security/general.png)

Select **Yes** in `Enable` field.

Then go to `Admin > System > Permissions > Users`. Click on **Add New User** in the upper right corner of the page and select **Two Factor Authentication** in `User Information` tab.

![Two factor authentification](/images/m1/extensions/improved-admin-security/user-tab.png)

-   `Is active` - select **Yes** to make the module active.
-   `Label` - is used to identify which account a key is associated with.
-   `Verification Key` - is a six-digit number generated on your mobile phone after you scanned your QR code.

### Admin Watcher

Go `Admin > System > Configuration > Templates-Master > Admin Watcher`.

**Note**: before configuring the settings, please be sure the time on your server is equal to smartphone time on.

![General settings](/images/m1/extensions/improved-admin-security/admin-watcher-main.png)

-   `Enable` - enable or disable the Admin Watcher module.

![General settings](/images/m1/extensions/improved-admin-security/ip-restrictions.png)

-   `Inbox admin notification` - select **Yes** to enable admin notification popup message.  
-   `Allowed IP(s) (comma separated)` - set IPs addresses that are allowed to access admin interface.

**Note**: you can enter multiple comma-separated.

-   `Permitte only allowed IP` - select Yes or No for access rights for allowed IPs. If you select No, the notification email will be sent for non allowed IP addresses.
-   `Disallowed IPs (comma separated)` - shows IP adressed that are not allowed to access admin interface.
-   `Send admin notification to` - enter the email address for notification about unauthorized attempts to the access.
-   `Transport` - select a transport. 
-   `Queue` - select a queue.
-   `Sender` - select the Sender that will be used in admin activity notification email from drop-down list.
-   `Email Template` - select the email template of notification from drop-down list.
-   `Update frequency` - choose the time the 

#### You can also check:

*   [Installation](../installation/)
*   [Use cases](../use-cases/)
*   [Admin interfaces](../admin-interfaces/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)