---
layout: default
title: Delivery Date and Time
description: Delivery Date and Time configuration
category: Delivery Date
---

# Configuration

Configuration is available at 
_Stores > Configuration > Swissup Checkout > Delivery Date_ page.

### Contents
{:.no_toc}

* TOC
{:toc}

#### General

![Main configuration](/images/m2/delivery-date/configuration/main.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Delivery date field label                   | Label used on frontend
Show for all shipping methods               | Show delivery date input globally or for certain methods only
Shipping Methods                            | Visible, when _Show for all shipping methods_ is set to "No"
Make Delivery Date a required field         | Make Delivery Date a required field
Use Calendar                                | Disable to use calendar icon
Use first avilable date as default value    | Populate delivery date field with default value
Date format                                 | Ability to set manual format for the date. Locale format is used by default.

#### First available delivery date rules

![First available delivery date configuration](/images/m2/delivery-date/configuration/first-date.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Delivery processing day ends at             | Orders placed afterwards will be considered as next day orders
Delivery will be available since first available day (order date) plus this value | Delivery date offset in days

#### Last available delivery date rules

![Last available delivery date configuration](/images/m2/delivery-date/configuration/last-date.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Period in days, while delivery will be available, since first available day | Last available delivery date offset


#### Exclude delivery date rules

![Excluded dates](/images/m2/delivery-date/configuration/excluded-dates.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Exclude days of week from delivery          | Exclude cetrain days of week
Holidays                                    | List of holiday dates

#### Next up

 -  [Back to Main Page](/m2/extensions/delivery-date/)
