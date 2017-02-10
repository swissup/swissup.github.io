---
layout: default
title: Newsletter Booster use cases
description: magento newsletter booster module installation
keywords: >
  magento newsletter extension, magento newsletter email, magento
  email newsletter plugin, magento newsletter module,
  how to send email newsletter in magento, newsletterbooster
category: Newsletter Booster
---

# Use cases

- [Creating customer segment for all customers](#creating-customer-segment-for-all-customers)
- [Creating customer segment for customers who bought products by category](#creating-customer-segment-for-customers-who-bought-products-by-category)
- [Creating customer segment for customers who bought products by brand](#creating-customer-segment-for-customers-who-bought-products-by-brand)
- [Creating customer segment for customers with total order](#creating-customer-segment-for-customers-with-total-order)
- [Creating and sending first email campaign](#creating-and-sending-first-email-campaign)
- [Sending newsletter campaigns to different groups of subscribers](#sending-newsletter-campaigns-to-different-groups-of- subscribers)

### Creating customer segment for all customers

1. Go `Magento Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
2. At `Conditions tab` please leave field blank to apply segment for all customers.
3. Click on **Save Segment**.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/creating-segment-usecase2.png)

### Creating customer segment for customers who bought products by category

1. Go `Magento Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
2. At `Conditions` tab select **Order Product Attribute**.
3. The `Total quantity` must be `Equal` or `greater than`.
4. Click on **green dot** and choose the condition **Category**.
5. Then please press grid button and select subcategory.
6. Click on **Save Segment**.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/creating-segment-usecase3.png)

### Creating customer segment for customers who bought products from brand

1. Go to `Magento Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
2. At `Conditions` tab select **Order Product Attribute**.
3. The `Total quantity` must be `Equal` or `greater than`.
4. Click on **green** dot and choose the condition **Brand**.
5. Then please press 3 dots and select one of brands.
6. Click on **Save Segment**.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/creating-segment-usecase1.png)

### Creating customer segment for customers with total order

1. Go to `Magento Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
2. At `Conditions` tab select **Order Product Attribute**.
3. The `Total amount` must be `Equal` or `greater than 1000`.
4. Click on **Save Segment**.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/creating-segment-usecase.png)

### Creating and sending first email campaign

1. Go to `Magento Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
If you use Mandrill Appi Service or store mail to send emails, then go to the next item. If not and you want to create third-party mail server, please go `Magento Admin > Templates Master > Newsletter Booster > Email Gateway and click on **Create Gateway**.
2. Go Magento `Admin > Templates Master > Newsletter Booster > Campaign` and click on **Create Campaign**.
Please fill all fields according to your needs and click on **Save Campaign**.
3. Then press **Queue button** at the right top of the page, that appears after saving new campaign.
Please fill all fields according to your needs and click on **Save Queue**.
4. Then you can go to `Magento Admin > Templates Master > Newsletter Booster > Dashboard` and check the statistical information.

### Sending newsletter campaigns to different groups of subscribers

Please notice, that by using our extension you are allowed to create and send newsletter campaigns to Customer segment users, Magento newsletter subscribers and Newsletter Booster subscribers separately. We’re going to explain the sending process to Customer Segment subscribers.

![Newsletterbooster](/images/m1/extensions/newsletter-booster/sending-campaign-usecase.png)

1. Go `Admin > Templates Master > Segmentation Suite > Customer Segment` and click **Create Segment**.
2. Add Segment with filling all required fields. See examples mentioned in use cases above.
3. Go `Admin > Templates Master > Newsletter Booster > Campaigns` and create a new campaign. You can use the previous use case example.
4. Please specify the required information in all Campaign Configuration tabs.
5. When you navigate to `Sending Settings tab` you can set campaign newsletter sending to specific subscribers’ group. In case of configuring sending settings for Customer segment group only, you have to select **No** both in the `Send for Newsletter Booster subscribers` and `Magento newsletter subscribers` fields.
6. Select the already created customer segment from the drop-down.
7. **Save**.

**Note**: if you want to send the newsletter campaign only to Magento subscribers or to the Newsletter Booster's subscribers separately, please select **Yes** in the appropriate fields.

#### You can also check:

*   [Installation](../installation/)
*   [Managing customer segments](../managing-customer-segments/)
*   [Creating email gateway](../creating-email-gateway/)
*   [Creating campaign](../creating-campaign/)
*   [Managing queue](../managing-queue/)
*   [Email verification](../email-verification/)
*   [Configuration](../configuration/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)