---
layout: default
title: Firecheckout page configuration
description: Firecheckout configuration screenshots and description
keywords: firecheckout configuration
category: Firecheckout
---

# Main Configuration

Firecheckout configuration is available at
_Admin > System > Configuration > TM Checkout > Firecheckout_ page.

* TOC
{:toc}

### General

![General settings](/images/m1/firecheckout/configuration/firecheckout/general.png)

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
-   `Show Comment Field` - select **Yes** to allow customers leave their comments in the `Show Comment` field.
-   `Show Discount Coupon Field` - select **Yes** to allow customers use the coupon code during checkout process.
-   `Show Gift card` - select **Yes** to allow customers use gift cards during checkout process.
**NOTE**: works with Magento Enterprise/Pro Versions only.
-   `Show Address Review Block` - select **Yes** to enable the display of Address Review field inside checkout review sections.
**NOTE**: useful for EU countries.

### Layout and Design

![Layout and Design settings](/images/m1/firecheckout/configuration/firecheckout/layout-and-design.png)

### Additional content

![Additional content settings](/images/m1/firecheckout/configuration/firecheckout/additional-content.png)

Please select **Yes** in the above, below or below the checkout review table
fields if you want to place fields there to display an additional information into.

### Address form fields

![Address form fields settings](/images/m1/firecheckout/configuration/firecheckout/address-form-fields.png)

> **Warning!** Before changing some of the fields, be sure that your payment/shipping
provider does not require them.

### Address form fields sort order

![Address form fields sort order settings](/images/m1/firecheckout/configuration/firecheckout/address-fields-sort-order.png)

### Ajax save and reload rules

![Ajax save and reload rules settings](/images/m1/firecheckout/configuration/firecheckout/ajax-save-and-reload-rules.png)

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

![Terms and conditions settings](/images/m1/firecheckout/configuration/firecheckout/terms-and-conditions.png)

Select possible values as Minimal or Standard.
**NOTE**: Fire Checkout allows you to use lightbox window, if you select Minimal.

### Firecheckout on mobile devices

![Mobile settings](/images/m1/firecheckout/configuration/firecheckout/firecheckout-on-mobile-devices.png)

Select **Yes** to enable using Fire Checkout module on mobile devices.

### Shopping cart

![Shopping cart settings](/images/m1/firecheckout/configuration/firecheckout/shopping-cart.png)

-   `Allow to edit shopping cart contents` - select **Yes** if you want to make changes to the  shopping cart contents.
    **NOTE**: we recommend to use 2 columns layout while using this option.
-   `Show product image` - select **Yes** to enable the display product image.
-   `Width field` - specify the the width of image.
-   `Height field` - specify the the height of image.
-   `Show product name as link` - select **Yes** to enable the display product name as a link.
-   `Show product short description` - select **Yes** to enable the display of product description.
-   `Description Excerpt Length` - specify the length of the description.