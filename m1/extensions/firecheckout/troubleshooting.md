---
layout: default
title: Troubleshooting
description: Common troubleshooting issues for firecheckout module
keywords: >
    freeshipping, free shipping, tax is missing, invalid tax
category: Firecheckout
---

# Troubleshooting

 1. [Free shipping is missing](#free-shipping-is-missing)
 2. [Tax is not applied, when changing address](#tax-is-not-applied-when-changing-address)

### Free shipping is missing

 1. Navigate to `System > Configuration > TM Checkout > Firecheckout > Ajax Save and Reload Rules`
 2. Add **Shipping Address** dependency into `Order total (Review) depends on` option.
 3. Save configuration.

> Didn't help? Proceed the following checklist:
>
> 1. Does it enabled for the active website?
> 2. Does shopping cart amout is larger than `Minimum Order Amount` option?
> 3. Is it visible at standard Magento checkout?

### Tax is not applied, when changing address

 1. Navigate to `System > Configuration > TM Checkout > Firecheckout > Ajax Save and Reload Rules`
 2. See the `Save rules` for Shipping Address. Add fields that should trigger tax
    recalculation. (Usually it's a zip/postal code and region).
 3. Add **Shipping Address** dependency into `Order total (Review) depends on` option.
 4. Save configuration.
