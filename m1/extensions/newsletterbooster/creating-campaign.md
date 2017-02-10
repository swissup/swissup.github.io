---
layout: default
title: Newsletter Booster creating campaign
description: magento newsletter booster module installation
keywords: >
  magento newsletter extension, magento newsletter email, magento
  email newsletter plugin, magento newsletter module,
  how to send email newsletter in magento, newsletterbooster
category: Newsletter Booster
---

# Creating campaign

- [Campaign settings](#campaign-settings)
- [Track settings](#track-settings)
- [Sending settings](#sending-settings)
- [Template settings](#template-settings)

Follow the detailed process of campaign creation. In case of proper campaign customization you would easily attract new subscribers, send them the affecting email newsletters and subsequently get excellent reports on the results. Keep in mind, that our extension allows to send campaigns to three separate subscriber types mentioned in Basic terms.

Go `Admin > Templates Master > Newsletter Booster > Campaigns` and create a new Campaign. You will be allowed to create multiple campaigns.

### Campaign settings

![Newsletterbooster](/images/m1/extensions/newsletter-booster/campaign-configuration.png)

-   `Title` - specify the title of new campaign.
-   `Description` - add the description for new campaign.
-   `Visible in frontend` - select **Yes** to allow customers to subscribe to new campaign, what they are interested in, directly on the store page.

### Track settings

![Newsletterbooster](/images/m1/extensions/newsletter-booster/track-settings.png)

-   `Track Opens` - select **Yes** to be able to track whether the email was opened.
-   `Track Clicks` - select **Yes** to be able to track whether the customer visits a website by using the link included in the email.
-   `Track customer clicks with Google Analytics` - select **Yes** to be able to track with Google Analytics Service whether the customer visits a website by using the link included in the email.
-   `Track customer clicks with Google Analytics` - select **Yes** to track with Google Analytics Service whether the customer visits a website by using the link included in the email.
-   `Google Campaign Source` - specify `utm_source` to identify a search engine, newsletter name, or other source. Example: utm_source=google.
-   `Google Campaign Medium` - specify `utm_source` to identify medium such as email or cost-per-click. Example: utm_medium=email.
-   `Google Campaign Name`- specify `utm_campaign` to identify a specific product promotion or strategic campaign. Example: utm_campaign=spring_sale.
-   `Google Campaign Content` - specify `utm_content` to identify a specific product promotion or strategic campaign. Example: utm_content=528.

### Sending settings

![Newsletterbooster](/images/m1/extensions/newsletter-booster/gateway-grid.png)

-   `Email Gateway` - select the email gateway. If you want to have another gateway, you can go `Admin > Templates-Master > Newsletter Booster > Email Gateway` and create new Email Gateway.
-   `Send for NewsletterBooster Subscribers` select **Yes** to enable sending campaigns to NewsletterBooster subscribers.
-   `Send for Magento Newsletter Subscribers` - select **Yes** to enable sending campaigns to magento newsletter subscribers.
-   `Customer Segment` - here you can choose already created customer segment. You are allowed to send campaign to multiple segments.

### Template settings

![Newsletterbooster](/images/m1/extensions/newsletter-booster/template-settings.png)

-   `Email Subject` - specify the main email subject.
-   `From Name` - specify the name that will be displayed at Subject field of email.
-   `From Email` - enter the email address from which the email will be sent.
-   `Apply design` - apply the design for your new Campaign from one of your store.

**Template content**

![Newsletterbooster](/images/m1/extensions/newsletter-booster/template-content.png)

Specify the HTML code of newsletter in the `Template Content field`. Moreover, you can preview the content directly in a backend. Please press the **Reload Preview** button after the text input.

**Campaign test email**

![Newsletterbooster](/images/m1/extensions/newsletter-booster/campaign-test.png)

In `Test email address` field you have to define the email address, which will be used for testing campaign emails.

Afterwards you can save the campaign as well as use the Save and Queue button in the right corner of the page. It will allow you to manage queue of emails that were sent.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/queue-information.png)

Specify the title of the e-mailing in the `Queue Title` field. By using the calendar you can select and set the date of e-mailing start.

#### You can also check:

*   [Installation](../installation/)
*   [Managing customer segments](../managing-customer-segments/)
*   [Creating email gateway](../creating-email-gateway/)
*   [Configuration](../configuration/)
*   [Managing queue](../managing-queue/)
*   [Email verification](../email-verification/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)