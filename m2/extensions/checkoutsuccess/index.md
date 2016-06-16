---
layout: default
title: Checkout Success
description: magento 2 checkout success page module documentation
keywords: " magento 2 checkout success page extension "
category: Checkout Success
---

# Checkout Success

Checkout Success extension allows you to show more details on checkout success page.
You can enable to show order details which include list of ordered products, billing and shipping information.
Also you can show two static blocks with additional information for customer.

### Contents

1. [Installation](installation/)
2. [Frontend Screenshot](#frontend-screenshot)
3. [Settings](#settings)
4. [Known issues](#known-issues)

## Frontend Screenshot

![Frontend](/images/m2/checkoutsuccess/frontend.png)

## Settings

![Settings](/images/m2/checkoutsuccess/settings.png)

##### Enabled

Enable extension.

##### Show Detailed Information

Enable order information on success page.

##### Above order information

Select static block to show before order information.

##### Below order information

Select static block to show after order information.

## Known issues

In our extension we use "order.success.additional.info" container to show additional information on success page.
Because of bug in Magento, this block is rendered twice. We reported this issue and Magento is working to fix it: [Issue on Github](https://github.com/magento/magento2/issues/4999) As temporal solution you can make the following change:

open `app/code/Magento/Checkout/view/frontend/layout/checkout_onepage_success.xml` and move `order.success.additional.info` container into `checkout.success` block:

```xml
<referenceContainer name="content">
    <block class="Magento\Checkout\Block\Onepage\Success" name="checkout.success" template="success.phtml" cacheable="false">
        <container name="order.success.additional.info" label="Order Success Additional Info"/>
    </block>
        ...
</referenceContainer>
```
