---
layout: default
title: Abandoned Cart
description: magento shopping cart abandonment module installation
keywords: " magento shopping cart abandonment, magento abandoned cart, magento
abandoned cart email"
category: Abandoned Cart
---

# Configuration

-   [Email](#email)
-   [Rule information](#rule-information)

### Email

Basically there are 2 ways of sending reminders: through the cron and after approving the email by administrator. Use Email settings to set up the correct sending of reminders.

![Product page view](/images/m1/extensions/askit/askit1.png)
 
-   `Transport` - select **Yes** to transmit messages from sender to recipient.
-   `Queue` - specify a queue value when a delivery should start.
-   `Email sender` - choose a sender from drop down
-	`Enable admin notification` - select **Yes** in case you want to receive an admin notification when new cart was abandoned.
-	`Admin email` - specify an email where the notification will be sent to.
- 	`Default email template admin notification` - choose a template for admin notification.

### Rule information

Before sending a reminder you have to specify the information in **Rule** fields. Generally you can send reminders to specific customer groups and to various stores. You’re allowed to update a product price, add a discount, set the time range, etc.

#### Main fieldset

![Product page view](/images/m1/extensions/askit/askit1.png)

-	`Name` - enter a name for the rule.
-	`Status` - select a status.
-	`Need admin approving` - select **Yes** or **No**.
-	`Email template` - choose the email template that was created before.
-	`Delivery date` - this settings shows dates+hours+minutes.
-	`Days` - specify a number of days after an email should be sent.
-	`Hours` - define time.
-	`Minutes` - define minutes.
-	`Customer groups` - mark the customer groups the email will be sent to.
-	`Sort order` - specify the sort order.
-	`From date` - choose a date from a calendar.
-	`To date` - choose a date from a calendar.


#### Condition

![Product page view](/images/m1/extensions/askit/askit1.png)

Choose a condition from drop down to apply to the rule.

#### Actions

![Product page view](/images/m1/extensions/askit/askit1.png)

You have to fill out fields in case you need to update a price for a product in the reminder. 
Apply - choose a value from drop down
Discount amount - specify a discount number 

NB - if you need to create another one rule, you can easily do it in Magento functional by navigating to **Promotions > Shopping cart price rules**.

#### You can also check:

*   [Installation](../installation/)
*   [Rules](../rules/)
*	[Prewritten templates](../prewritten-templates/)
*   [Email history](../email-history/)
*   [History grid](../history-grid/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)