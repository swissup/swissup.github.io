---
layout: default
title: Delivery Date and Time
description: Delivery Date and Time documentation
category: Firecheckout
---

# Delivery Date and Time

Allow customer to choose delivery date and time during checkout.

{% include gallery.html images=site.data.gallery.m2.delivery-date.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

Main features:

 -  Enable [globally or for certain shipping methods only](#general)
 -  Flexible rules for [first and last available dates](#first-and-last-available-delivery-date-rules)
 -  [Disallow delivery](#first-and-last-available-delivery-date-rules) for particular dates

### Contents

 1. [Installation](installation/)
 2. [Configuration](#configuration)

### Configuration

Configuration is available at
"Stores > Configuration > Swissup Checkout > Delivery Date" page.

#### General

![General configuration options](/images/m2/delivery-date/configuration/general.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Delivery date field label                   | Label used on frontend
Show for all shipping methods               | Show delivery date input globally or for certain methods only
Shipping Methods                            | Depends shipping methids
Make Delivery Date a required field         | Make Delivery Date a required field
Use Calendar                                | Disable to use calendar icon
Use first avilable date as default value    | Populate delivery date field with default value

#### First and last available delivery date rules

![Available delivery date rules](/images/m2/delivery-date/configuration/rules.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Delivery processing day ends at             | Orders placed afterwards will be considered as next day orders
Delivery will be available since first available day (order date) plus this value | Delivery date offset in days
Period in days, while delivery will be available, since first available day | Last available delivery date offset
Date Format                                 | Forced date format, locale date format used when empty
Exclude Weekend Days                        | Exclude delivery date on weekend
Holidays                                    | List of holyday dates

