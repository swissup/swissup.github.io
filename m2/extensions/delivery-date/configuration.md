---
layout: default
title: Delivery Date and Time Configuration
description: Delivery Date and Time configuration
category: Delivery Date
---

# Configuration

Configuration is available at
_Stores > Configuration > Swissup > Checkout > Delivery Date_ page.

* TOC
{:toc}

### General

![General configuration](/images/m2/delivery-date/configuration/general.png)

Option                          | Description
:-------------------------------|:-------------------------
Enabled                         | Enable/Disable the module
Show for all shipping methods   | Show delivery date input for all or for selected methods only
Shipping Methods                | Visible, when _Show for all shipping methods_ is set to "No"

#### Date Field Settings

![Date Field Settings](/images/m2/delivery-date/configuration/date-field.png)

Option      | Description
:-----------|:-----------
Field Label | Label to show near the Date field
Show Field  | Select one of the field statuses: "Disabled", "Optional", "Required"
Date format | Allows to set date format manually (`m/d/Y` for example)

#### Time Field Settings

![Time Field Settings](/images/m2/delivery-date/configuration/time-field.png)

Option      | Description
:-----------|:-----------
Field Label | Label to show near the Time field
Show Field  | Select one of the field statuses: "Disabled", "Optional", "Required"
Time Options| Set available timeranges

### First available delivery date rules

![First available delivery date configuration](/images/m2/delivery-date/configuration/first-date.png?v=3){:width="899"}

Option                                      | Description
:-------------------------------------------|:-----------------------------------
First available date                        | First available date calculation rule. Choose between "Order date" and "First Business Day since Order Date"
Delivery will be available since first available day plus this value | Delivery date offset in days
Skip weekends and holidays when calculating the offset | Ability to skip non-working days when calculating "First available date"
Delivery processing day ends at             | Orders placed afterwards will be considered as next day orders
Delivery processing day ends at (Exceptions)| Exceptions for previous option

### Last available delivery date rules

![Last available delivery date configuration](/images/m2/delivery-date/configuration/last-date.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Period in days, while delivery will be available, since first available day | Last available delivery date offset


### Exclude delivery date rules

![Excluded dates](/images/m2/delivery-date/configuration/excluded-dates.png)

Option                                      | Description
:-------------------------------------------|:-----------------------------------
Exclude days of week from delivery          | Exclude cetrain days of week
Holidays                                    | List of holiday dates. Offset - is how many days this holiday takes (1 by default).

### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/delivery-date/)
