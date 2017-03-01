---
layout: default
title: Affiliate Suite for admins
description: magento affiliate suite module
keywords: >
  magento affiliate program, magento affiliate extension, magento affiliate plugin, 
  magento affiliate coupon, affiliate extension magento
category: Affiliate Suite
---

# Admin interfaces for admins

- [How to create and manage Affiliate campaign](#how-to-create-and-manage-affiliate-campaign)
- [How to create banners](#how-to-create-banners)
- [Manage Affiliate partners](#manage-affiliate-partners)
- [Manage Payments](#manage-payments)
- [Transactions Menu](#transactions-menu)
- [Manage Messages](#manage-messages)
- [Manage Statistics](#manage-statistics)
- [Affiliate registration link](#affiliate-registration-link)

### How to create and manage Affiliate campaign

Add new campaign by navigating to `Templates Master / Affiliate Suite / Campaigns`. Click **Add New Campaign**.

You can see 2 tabs: `Campaign’s properties` and `Detailed commission conditions`.

![Affiliate program management](/images/m1/extensions/affiliate/campaign-information.png)

-   `Title` - set title of the campaign.
-   `Partner Status` - the campaign can be either Hidden or Visible. Hidden campaigns will be applied and visible to partners no longer.

![Affiliate program management](/images/m1/extensions/affiliate/commission-information.png)

Please specify a partner commission amount here. Fill in the fields. In **Click price** set fixed commission amount for each clicks. In **Registration price** choose fixed commission amount for each new client’s registred via referral link or banner. In **Sale price** set commission for each order reffered via affialite link (fixed amount or percent of product value).

### How to create banners?

Your partners can use your affiliate banner on their website, blog or in social media. In order to create new banner or to edit the existing one, you can go `Templates Master / Affiliate Suite / Banners`.

![Affiliate program management](/images/m1/extensions/affiliate/banner.png)

-   `Banner Type` - there are 4 different banner types such as image, html, text link and link.
-   `Name` - set the banner name here.
-   `Description` - specify the description on the banner.
-   `Store View` - assign your banner to specific store view.
-   `Url` - assign a link to the banner (when you click a banner, it will redirect you to this link).
-   `Target` - set `Target html attribute` for anchor tag. Choose `Blank` to open the referred page in new browser tab or `Self` to open it in the current one.
-   `Image` - upload the image from your computer.
-   `Image Url` - specify image address for a banner located on different location.
-   `Image Width/height` - set a size of banner.
-   `Link text` - set a text for a link banner.
-   `Html code` - insert html code here if you are using html type banner.

### Manage Affiliate partners

Go to `Templates Master / Affiliate Suite / Partners`. 

#### Partners grid

`Manage partners` interface provides you with a list of all affiliate partners with information about their activation status and registration date. You can view details by clicking on selected partner. In order to lock the referral account of a partner, you have to click on this partner and change a status to `Disapproved` in the `Edit Partner menu` (once an Affiliate account is disapproved, this partner can’t use any Affiliate functions untill it will be approved again). Finally click **Save Partner** button.

#### Approving Pending Members

Using **Status** selector, you can change Pending status to Approved. In case you don’t want to approve partner, please select Disapproved.

#### Adding new Partner

![Affiliate program management](/images/m1/extensions/affiliate/edit-partner.png)

-   `Data` - please fill in all required fields.
-   `Paids`- shows a partner payment history. Check out all payments made as well as the pending and detailed transaction information.
-   `Orders` - here you can a list of all products ordered by reffered customers and their orders' status.
-   `Customers` - here you can see a list of reffered customers and their account details.

### Manage Payments

Go `Templates Master / Affiliate Suite / Payments management`.

Store administrator can automatically sum up all transactions for every partner as well as manage payouts. Index transaction button processes all transactions and checks if minimal payment sum and minimal period are met. Both these settings can be changed in `Affiliate Suite extension configuration`. As soon as transactions have been processed, admin can export lists to CSV or XML and set all transactions as paid.

In order to index transaction, admin should click **Index transaction** button. Affiliate suite will sum up all transactions which already overcame the payout minimum period.

If you've set the Minimum Payout Value to 2 weeks in order to check if the transaction was not a fraud, then all transactions made before that period will be with pending status.

### Transactions Menu

You can see a complete list of all transactions generated by partners. Each transaction includes the information about the order id, affiliate partner’s name, banner or Product Frame widget, transaction time and status.

![Affiliate program management](/images/m1/extensions/affiliate/manage-transactions.png)

Choose a transaction you want to edit. 

![Affiliate program management](/images/m1/extensions/affiliate/view-transaction.png)

`Order Products tab` shows the details of order products, including the name, price and commission.

### Manage Messages

Store administrator can send messages from the backend. 

#### Sending message

In order to send a message, go `Templates Master / Affiliate Suite / Messages` and click **New Message**. 

![Affiliate program management](/images/m1/extensions/affiliate/new-message.png)

#### Replying message

All messages (incoming and outgoing) can be found in `Templates Master / Affiliate Suite / Messages` interface. 

![Affiliate program management](/images/m1/extensions/affiliate/messages-grid.png)

In order to reply a message, click selected message. You will be redirected to the `View Message` page. Now you can leave a reply and click **Send** afterwords.

### Manage Statistics

Statistics information is available at `Templates Master / Affiliate Suite / Statistics`. You can view detailed info about you affiliate partners, including their activation status, total pending and paid values.

Information about Transaction (clicks, registrations and sales), Payout (Paid), Partner (Registration) and Traffic Log visualized Graphs is also available there.

![Affiliate program management](/images/m1/extensions/affiliate/managing-statistics.png)

You are also allowed to follow the information for selected period like a week, month, year or 2 years.

### Affiliate registration link

That module provides admin with a registration link that can be placed anywhere on site. Please add the following path after your site address:`affiliatesuite_admin/account/create`

For example:`http://yourstore.com/index.php/affiliatesuite_admin/account/create/`

If non-Affiliate customer clicks this link, he will be redirected to the registration page. The Affiliate partner will see `My Account page`.

#### You can also check:

*   [Installation](../installation/)
*   [Configuration](../configuration/)
*   [Admin interfaces for partners](../admin-interfaces-for-partners/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)