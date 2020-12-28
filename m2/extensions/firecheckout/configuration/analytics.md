---
layout: default
title: Firecheckout and Google Analytics
description: How to setup Google Analytics for firecheckout module
keywords: firecheckout google analytics
category: Firecheckout
---

# Google Analytics

In order to enable Google Analytics Ecommerce for Firecheckout module you should
add Account Number to Firecheckout configuration and setup Ecommerce Settings
in Google Analytics Panel.

* TOC
{:toc}

## Obtain Account Number

You can obtain your Google Analytics Account number in the admin panel:

![Obtain Account Number](/images/m2/firecheckout/analytics/obtain-account-number.png)

Add this number to _Stores > Configuration > Swissup Checkout > Firecheckout > Analytics > Account Number_
and save config.

## Prepare Ecommerce Settings

Open Ecommerce Settings in Google Analytics panel:

![Ecommerce Settings Location](/images/m2/firecheckout/analytics/ecommerce-settings-location.png)

And configure it as shown below:

![Ecommerce Settings Setup](/images/m2/firecheckout/analytics/ecommerce-settings-setup.png)

**Funnel Steps**

Step Number | Label         | Description
------------|---------------|---------------------------
1           | Checkout Page | Buyer opened checkout page
2           | Email Address | Buyer entered email address
3           | Shipping Method | Buyer selected shipping method
4           | Payment Method | Buyer selected payment method
4           | Place Order   | Buyer pressed "Place Order" button

You can change the labels, **but not the meaning or their order**. For example,
"Entered Email Address" instead of "Email Address" is OK but "Shipping method"
instead of "Email Address" is NOT OK.

## Result Example

Google Analytics for Ecommerce is not working in real-time, so you have to wait
a bit to see yout first results. Here is how it should look like:

![Checkout Behavior](/images/m2/firecheckout/analytics/checkout-behavior.png)
