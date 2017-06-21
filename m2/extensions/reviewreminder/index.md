---
layout: default
title: Review Reminder
description: magento review reminder module documentation
keywords: " magento review reminder extension, magento review reminder email "
category: Review Reminder
---

# Review Reminder

Review Reminder extension allows to automatically send email reminders to customers who made order recently.
You can also index old orders to send reminders to customers who made orders before extension was installed.

### Contents

1. [Installation](installation/)
2. [Changelog](changelog/)
3. [Features](#features)
4. [Settings](#settings)
 - [General Section](#general-section)
 - [Email Settings Section](#email-settings-section)
 - [Manual Order Indexing Section](#manual-order-indexing-section)
5. [Reminders grid](#reminders-grid)
 - [Reminder Information Tab](#reminder-information-tab)
 - [Order Products Tab](#order-products-tab)
 - [Email Preview Tab](#email-preview-tab)
6. [Use cases](#use-cases)
 - [Change Email Template](#change-email-template)

## Features

- Automatically create reminders for new orders
- Manually index old orders and create reminders for them
- Sending reminder emails by cron or manually in admin

## Settings

### General section

![General Section](/images/m2/reviewreminder/general-section.png)

##### Enabled

You can disable extension to stop creating reminders for new orders and stop sending existing reminders.

##### Number of emails to send per cron iteration

Send reminder code called by cron every 10 minutes and sends 10 emails by default.
You can increase this number to send more emails at once, but it will increase server load.

##### Default reminder status

You can select default status for new reminders:

 - New - reminders with this status will be sent automatically by cron.
 - Pending - reminders with this status will be ignored, you can send them manually
 in `Swissup - Review Reminder` menu or change their status to New.

### Email Settings section

![Email Settings Section](/images/m2/reviewreminder/email-section.png)

##### Send email from

Select email to send review reminders from.

##### Email subject

Set reminder email subject. You can use variables here:

- {customer_name} - insert order customer name
- {product_name} - insert first bought product name

##### Email template

Select reminder email template.

##### Send email after, days

Send reminder after configured number of days after order was placed.
If you set 0 here, reminder will be sent immediately after order completed.

##### Process orders

Here you can select:

- Any - reminders will be created for all placed orders.
- Specified - you can select order status.

##### Consider orders with status

This field is available when you select `Specified` in `Process orders field`.
Here you can select order status for which reminder should be created.
Reminder will be created only after order status was changed to one of selected here.

### Manual Order Indexing Section

In this section you can launch orders indexing if you want to send emails for existing orders.
Usually you need it only once right after extension was installed. New orders will be processed automatically.
Set your settings and press Run button. After order processed, you'll see message `Completed. x items were processed`.
After that you can go to `Swissup > Review Reminder` and check created reminders.

![Manual Order Indexing Section](/images/m2/reviewreminder/manual-orders-indexing-section.png)

##### Index orders created

You can select time period to generate reminders:

- Last year - process orders created during last year
- Last month - process orders created during last month
- Last week - process orders created during last week
- From custom date - enter custom date to process orders from

##### Custom date

Enter date in YYYY-MM-DD format from which to process orders.

##### Index orders made in store(s)

Index orders only from selected store views.

## Reminders grid

You can check generated review reminders under `Swissup > Review Reminder` menu.
Here you can send selected reminder emails manually, change their status or delete them.

![Reminders grid](/images/m2/reviewreminder/reminders-grid.png)

##### Reminder Information Tab

Here you can check order information such as Customer Name, Customer Email, Order Date and bought Products.
Also you can change reminder status here.

![Reminder Information Tab](/images/m2/reviewreminder/reminder-information-tab.png)

##### Order Products Tab

In this tab you can see bought products grid. In `Review Status` column you can see if customer left product review or not.

![Order Products Tab](/images/m2/reviewreminder/reminder-order-products-tab.png)

##### Email Preview Tab

In this tab you can see preview of reminder email.

![Email Preview Tab](/images/m2/reviewreminder/email-preview-tab.png)

## Use cases

##### Change Email Template

You can modify reminder email as any other Magento email tmeplate under `Marketing > Email Templates`.
Press `Add New Template` button, select `Review Reminder` in `Template` field, then `Load Template` button.
Template will be loaded and you can change template styles and markup in `Template Content` field.
After modification save template and select it in `Stores > Configuration > Swissup > Review Reminder > Email Settings > Email template`.
