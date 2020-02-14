---
layout: default
title: Abandoned Carts Rules
description: magento 2 abandoned carts rules
keywords: magento abandoned carts rules
category: Abandoned Cart
---

# Abandoned Carts Rules

### Grid

Abandoned Carts Rules grid is located at _Swissup > Abandoned Cart > Rules_.

Right after installation, there will be
[three pre-defined rules](/m2/extensions/abandoned-cart/pre-defined-rules-and-templates/).

![Abandoned Carts Rules](/images/m2/abandoned-cart/backend/rules-grid.png)

### Form

Click `Add New Rule` button to open rule edit page. It contains four sections.

#### General

![Rule Form General](/images/m2/abandoned-cart/backend/rule-form-general.png)

Field            | Description
-----------------|------------------------------------------------------
Enabled          | Enable/Disable the rule
Name             | Rule Name
Send Email After | Delay before abandoned email will be sent
Websites         | Select websites where rule can be applied
Customer Groups  | Select customer groups for which rule can be applied
Priority         | Rule sort order

#### Email

![Rule Form Email](/images/m2/abandoned-cart/backend/rule-form-email.png)

Field    | Description
---------|------------------------------------------------------
Template | Select email template to use
Sender   | Select email sender

#### Conditions

![Rule Form Conditions](/images/m2/abandoned-cart/backend/rule-form-conditions.png)

Configure conditions to limit the rule to specific carts.

#### Coupon

![Rule Form Coupon](/images/m2/abandoned-cart/backend/rule-form-coupon.png)

Select shopping cart price rule which will be used to generate coupon with discount.
Only rules with coupon auto-generation will be available here.

Check Magento manual about creating cart price rule here:
[Create a Cart Price Rule](https://docs.magento.com/m2/ce/user_guide/marketing/price-rules-cart-create.html)

##### Next Up

 -  [Back to Home](/m2/extensions/abandoned-cart/)
 -  [Back to Admin Interfaces](/m2/extensions/abandoned-cart/backend/)
