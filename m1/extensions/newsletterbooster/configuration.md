---
layout: default
title: Newsletter Booster configuration
description: magento newsletter booster module installation
keywords: >
  magento newsletter extension, magento newsletter email, magento
  email newsletter plugin, magento newsletter module,
  how to send email newsletter in magento, newsletterbooster
category: Newsletter Booster
---

# Configuration

In order to configure both extensions, please go `Admin > Configuration > System`.

### Segmentation Suite

![Newsletterbooster](/images/m1/extensions/newsletter-booster/suite-general.png)

Select **Yes** to enable the Segmentation Suite module.

### Newsletter Booster

![Newsletterbooster](/images/m1/extensions/newsletter-booster/newsletter-general.png)

-   `Enabled` select **Yes** to enable the Newsletter Booster module.
-   `Number of emails sent per cron iteration` - specify the number of emails.
-   `Number of queue threads for sent per cron iteration` - specify the number of queue threads. 
-   `Unsubscribe customers from default magento newsletter` - select **Yes** in order to unsubscribe customer from the default magento newsletter.
-   `Campaign Test Email Address` - specify the email address for testing only.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/subscription.png)

-   `Show Frontend Subscribe Form` - select **Yes** to allow customers to subscribe directly on the store page.
-   `Guest subscribe` - select **Yes** to allow non registered users to subscribe.
-   `Send a confirmation email` - select **Yes** to get confirmation email about customer subscription.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/geoip.png)

-   `Enabled` - select **Yes** to enable the Mandrill App Service.
-   `Api Key` - enter a key that you have got from Mandrill Api Service.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/email-address-verification.png)

-   `Verify Email Form` - specify the email that will be used for testing. This address will be requested by email server.
-   `Magento Customers` - select **Yes** to enable the verification of magento customers emails.
-   `Magento Subscribers` - select **Yes** to enable the verification of magento subscribers emails.
-   `NewsletterBooster Subscribers` - select **Yes** to enable the verification of Newsletter Booster subscribers emails.

#### You can also check:

*   [Installation](../installation/)
*   [Managing customer segments](../managing-customer-segments/)
*   [Creating email gateway](../creating-email-gateway/)
*   [Creating campaign](../creating-campaign/)
*   [Managing queue](../managing-queue/)
*   [Email verification](../email-verification/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
