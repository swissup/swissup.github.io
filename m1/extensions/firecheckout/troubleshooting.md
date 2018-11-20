---
layout: default
title: Troubleshooting
description: Common troubleshooting issues for firecheckout module
keywords: >
    freeshipping, free shipping, tax is missing, invalid tax, double tax in magento,
    missing discount in grand total
category: Firecheckout
---

# Troubleshooting

 - [Pre-troubleshooting check](#pre-troubleshooting-check)
 - [Free shipping is missing](#free-shipping-is-missing)
 - [Tax is not applied, when changing address](#tax-is-not-applied-when-changing-address)
 - [Double tax calculation](#double-tax-calculation)
 - [RTL styles are not applied](#rtl-styles-are-not-applied)


### Pre-troubleshooting check

> **FireCheckout** is using default _Magento_ functionality as basic.

After installation If you have some checkout features not working, please, check
following:

 * Go to your **FTP** `[store root] > app \ etc \ modules`
 * Find `TM_Firecheckout.xml` and `TM_CheckoutFields.xml` and disable them by commenting
 * Clear store cache
 * Pass to checkout and check if you don't see that problem at **DEFAULT** checkout

###### If an **error** is still there - please, contact your developer to fix it at default checkout then in most cases it will be fixed at **Firecheckout**


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

### Double tax calculation

> This patch fixes two Magento bugs that was introduced in Magento 1.9.3.2:
>
> 1. Missing discount in Grand Total (Onepage and Multishipping checkout pages are affected)
> 2. Double tax in Grand Total (Multishipping checkout is affected)

This bug is caused by Magento 1.9.3.2 and it can be reproduced at multishipping
checkout page.

In order to fix it, apply the following patch:

```diff
diff --git a/app/code/core/Mage/Sales/etc/config.xml b/app/code/core/Mage/Sales/etc/config.xml
index 4a0f5106a..ccd84054d 100644
--- a/app/code/core/Mage/Sales/etc/config.xml
+++ b/app/code/core/Mage/Sales/etc/config.xml
@@ -1227,6 +1227,7 @@
                     </grand_total>
                     <msrp>
                         <class>sales/quote_address_total_msrp</class>
+                        <before>weee,freeshipping</before>
                     </msrp>
                 </totals>
                 <nominal_totals>
```

### RTL styles are not applied

RTL styles will be automatically applied if one of the following conditions
are met:

 -  `dir=rtl` attribute is used on html or body element
 -  `rtl` class name added to the body or html element

If it does not, but you want to activate RTL styles -
create [custom.js](/m1/extensions/firecheckout/using-customcss-and-customjs/)
file and add the following code inside:

```js
FC.Rtl._isRtl = true;
FC.Rtl.init();
```
