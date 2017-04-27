---
layout: default
title: Firecheckout configuration
description: Firecheckout documentation
keywords: " one step checkout magento extension, magento onepage checkout, magento checkout extension, one step checkout magento, magento edit checkout fields, one step checkout module magento, one step checkout magento mobile, magento one page checkout extension, magento one page checkout responsive, magento one page checkout custom fields, how to create one page checkout magento, how to edit one page checkout magento, checkout module in magento, quick checkout module  "
category: Firecheckout
---

# Configuration

Go Admin > System > Configuration > Templates Master > Fire Checkout.

-   [General](#general)
-   [Additional content](#additional-content)
-   [GeoIp](#geoip)
-   [Address form fields](#address-form-fields)
-   [Address form fields sort order](#additional-form-fields-sort-order)
-   [Address form fields](#address-form-fields)
-   [Ajax](#ajax)
-   [Terms and conditions](#terms-and-conditions)
-   [Firecheckout on mobile devices](#firecheckout-on-mobile-devices)
-   [TaxVat number](#taxvat-number)
-   [Delivery date and time](#delivery-date-and-time)
-   [Shopping cart](#shopping-cart)

### General

![General settings](/images/m1/extensions/firecheckout/configuration/general-settings.png)

-   `Enabled` - select **Yes** to enable the extension.
-   `Page Title` - please specify the checkout page title.
-   `Layout` - select two or three column LAYOUT for your checkout page.
-   `Registration mode` - select the registration mode. Possible values are: `Guest checkout is allowed`, `Registration is required` or `User is registered during checkout without prompting a password`.
-   `Redirect to Fire Checkout` - if you select **Yes**, a customer will be automatically redirected to Fire Checkout page after adding the item to the shopping cart. 
**NOTE**: at the root Magento redirects customers to the shopping cart after adding the item. So, this option allows you to redirect user directly to the Fire Checkout page.

-   `Default Shipping Method` - specify the shipping method that was selected by default.
-   `Default Country` - specify the country that was selected by default.
-   `Hide other shipping methods if Free shipping is available field` - select **Yes**.
-   `Show Shipping Address Form` - select **Yes** to enable the display of `Shipping address field`.
-   `Ship to the same address checkbox is checked by default` - select Yes or No according to your requirements.
-   `Default Payment Method` - specify the payment method that was selected by default.
-   `Register customer during Paypal Express checkout if prompted` - if you select **Yes**, then Firecheckout will register customer in case the customer checked the "Register during checkout" checkbox during a checkout process.
**NOTE**: By default Paypal Express checkout is disabled during creating new Magento account. Our extension offers the additional programming logic that allows new customer to be registered using Paypal Express.
-   `Show Subscribe to Newsletter Checkbox` - select **Yes** to enable the display of **Subscribe to Newsletter Checkbox** field.

![General settings](/images/m1/extensions/firecheckout/configuration/sign-newsletter-frontend.png)

-   `Show Comment Field` - select **Yes** to allow customers leave their comments in the `Show Comment` field.
-   `Show Discount Coupon Field` - select **Yes** to allow customers use the coupon code during checkout process.
-   `Show Gift card` - select **Yes** to allow customers use gift cards during checkout process.
**NOTE**: works with Magento Enterprise/Pro Versions only.
-   `Show Address Review Block` - select **Yes** to enable the display of Address Review field inside checkout review sections.
**NOTE**: useful for EU countries.

### Additional content

![General settings](/images/m1/extensions/firecheckout/configuration/additional-content.png)

Please select **Yes** in the above, below or below the checkout review table fields if you want to place fields there to display an additional information into.

### GeoIP

![General settings](/images/m1/extensions/firecheckout/configuration/geoip.png)

-   `Enable Country Detection` - select **Yes** to enable the display of Country Detection field.
-   `GeoIp filename` - please set .dat file. Downloadand unzip file under the 'MAGETO_ROOT/lib/MaxMind/GeoIP/data' folder if you don't have it.
-   `Enable Region Detection` - select **Yes** to enable the display of Region Detection Field.
-   `GeoIp filename` - please set .dat file. Purchase and unzip file under the 'MAGETO_ROOT/lib/MaxMind/GeoIP/data' folder if you don't have it.
-   `Enable City Detection` - select **Yes** to enable the display of City Detection (including postcode) field.
-   `Geo City filename` - please set .dat file. Downloadand unzip file under the 'MAGETO_ROOT/lib/MaxMind/GeoIP/data' folder if you don't have it.

Use links below to go to the sites where the data can be downloaded.

[Country detection](http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz)- free to use.

[ZipCode and region detection](http://www.maxmind.com/app/region)- client should buy the library, if he needs.

[City detection](http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz) - free to use.

### Address form fields

![General settings](/images/m1/extensions/firecheckout/configuration/address-form-fields.png)

**NOTE**: before changing some of the fields, be sure that your payment/shipping provider does not require them.

Select possible values Required, Optional or Hidden from the drop-down list according to your needs.

### Address form fields sort order

![General settings](/images/m1/extensions/firecheckout/configuration/address-fields-sort-order.png)

**NOTE**: in order to place the fields above in the one row, set their order values in continuous chain 1,2 or 12,13 or 20,21. In order to place fields in separate rows, break the order values chain 1,3 or 12,18 or 20,30.

### Ajax

![General settings](/images/m1/extensions/firecheckout/configuration/ajax.png)

-   `Reload payment methods on country change` - select No, if you don't use different payment methods for various countries.
-   `Reload payment methods on order total change` - select Yes, if you need to reload payment methods while changing the order totals in the cart.
-   `Reload payment methods on cart contents change` - select Yes, if you need to reload payment methods while changing the content of the cart (include products’ weight, subtotal and quantity).
-   `Reload shipping methods on country change` - select No, if you don't use different shipping methods for various countries.
-   `Reload shipping methods on postal code change` - select Yes, if you need to reload shipping methods while changing postal code.
-   `Reload shipping methods on region change` - select Yes, if you need to reload shipping methods while changing region of country.
-   `Reload shipping methods on order total change` - select Yes, if you need to reload shipping methods while changing the order totals in the cart.
-   `Reload shipping methods on cart contents change` - select Yes, if you need to reload payment methods while changing the content of the cart (include products’ weight, subtotal and quantity).
-   `Reload order totals on country change` - select Yes, if you need to reload order totals in the cart while changing the country.
-   `Reload order totals on postal code change` - select Yes, if you need to reload order totals in the cart while changing the postal code.
-   `Reload order totals on region change` - select Yes, if you need to reload order totals in the cart while changing the region.
-   `Reload order totals on taxvat change` - select Yes, if you need to reload order totals in the cart while changing the taxvat.
**NOTE**: the order totals can be changed if you have the active discount or tax rate.

### Terms and conditions 

![General settings](/images/m1/extensions/firecheckout/configuration/terms-and-conditions.png)

Select possible values as Minimal or Standard.
**NOTE**: Fire Checkout allows you to use lightbox window, if you select Minimal.

### Firecheckout on mobile devices

![General settings](/images/m1/extensions/firecheckout/configuration/on-mobile.png)

Select **Yes** to enable using Fire Checkout module on mobile devices.

### TaxVat number

![General settings](/images/m1/extensions/firecheckout/configuration/taxvat-validation.png)

-   `Validate tax vat number` - select **Yes** to enable the validation of tax vat number.
-   `Use online VIES validation` - select **Yes** to enable the use of VIES validation online.

### Delivery date and time 

![General settings](/images/m1/extensions/firecheckout/configuration/delivery-date-and-time.png)

-   `Enabled` - select **Yes** to enable the settings of delivery date and time.
-   `Display mode` - select possible values `Show for All Shipping Methods` or `Show for Specific Shipping methods` to set the display mode.
-   `Use Calendar` - select **Yes** to enable the use of calendar.
-   `Delivery will be available since order date plus this value` - please specify the value according to your requirements.
-   `Period in days when delivery will be available, since first available day` - please specify the period according to your requirements.
-   `Exclude the Weekend days` - select No to disable the delivery on weekend.
-   `Dates to Exclude` - please specify and add the days you wish to exclude the delivery.
-   `Use Time Range` - select **Yes** to enable the time range when delivery is available.
-   `Time Ranges` - please specify and add the time ranges you wish to make the delivery available.

### Shopping cart

![General settings](/images/m1/extensions/firecheckout/configuration/shopping-cart.png)

-   `Allow to edit shopping cart contents` - select **Yes** if you want to make changes to the  shopping cart contents.
**NOTE**: we recommend to use 2 columns layout while using this option.

-   `Show product image` - select **Yes** to enable the display product image.
![General settings](/images/m1/extensions/firecheckout/configuration/product-image-on-shopping-cart.png)

-   `Width field` - specify the the width of image.
-   `Height field` - specify the the height of image.
-   `Show product name as link` - select **Yes** to enable the display product name as a link.
-   `Show product short description` - select **Yes** to enable the display of product description.
-   `Description Excerpt Length` - specify the length of the description.