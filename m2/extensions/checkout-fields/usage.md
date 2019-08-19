---
layout: default
title: Usage
description: magento 2 checkout fields module usage
keywords: magento 2 checkout fields extension
category: Checkout Fields
---

# Checkout Fields Usage Examples

{:.no_toc}

* TOC
{:toc}

### Order Comment Field

To add order comment field on checkout, follow below steps:

 1. Go to `Swissup > Checkout > Checkout Fields`
 2. Press `Add New Field` button
 3. Fill `Default Label`
 4. Select `Store View` where to show the field
 5. In `Catalog Input Type` select `Text Area`
 6. If required, fill other optional properties, such as `Values Required`, `Sort Order` and `Default Value`
 7. Specify labels for other store views on `Manage Labels` tab if required
 8. Press `Save Field` button
 9. Go to checkout and check the field you created:

![Order Comment Field](/images/m2/checkout-fields/order-comment.png)

### Display Fields in Order Email

In order to display checkout fields in order emails, follow next steps:

 1. Go to `Marketing > Communications > Email Templates`
 2. Press `Add New Template` button
 3. Select template, for example `New Order for Guest`, and press `Load Template` button
 4. Give name for template in `Template Name` field
 5. In `Template Content` place the following code where you want to show checkout fields:

    ```txt
    {% raw %}{{block class="Swissup\CheckoutFields\Block\Adminhtml\Order\View\Fields" area="frontend" template="Swissup_CheckoutFields::email/order/fields.phtml" order=$order}}{% endraw %}
    ```

    if you want to display only specific fields, list comma-separated attribute codes
    in `fields_to_show` paramether:

    ```txt
    {% raw %}{{block class="Swissup\CheckoutFields\Block\Adminhtml\Order\View\Fields" area="frontend" template="Swissup_CheckoutFields::email/order/fields.phtml" order=$order fields_to_show="order_comment,favourite_products,delivery_date"}}{% endraw %}
    ```

 6. Press `Save Template` button
 7. Go to `Stores -> Configuration -> Sales > Sales Emails -> Order`, select new template in
    `New Order Confirmation Template for Guest` and press `Save Config`
 8. Check order email with checkout fields:

![Fields in Order Email](/images/m2/checkout-fields/fields-order-email.png)

### Display Fields at Checkout Success Page

Use module [Checkout Success Page](/m2/extensions/checkout-success/) module to get custom checkout fields at success page.

 1. Make sure Checkout Success page is enabled. Go to `Stores` > `Configuration` > `Swissup Checkout` > `Success Page` and check option _'Enabled'_ in 'General' section.
 2. Go to section 'Page Layout'. Drag `Checkout Fields` block from _'Blocks available on Success Page'_ and drop at _'Layout of Success Page'_ in place where you want to see checkout fields.
 3. Save config or use _'Save and Start Preview'_ button to check how success page looks.

### Display Fields in Orders Grid

To display checkout fields in orders grid, follow next steps:

 1. Go to `Swissup > Checkout Fields`, edit the field and set `Add to Column Options` to `Yes`.
 2. Go to `Sales > Orders` and select fields you want to display in `Columns` dropdown.

### Get Fields Values in Orders API

Since 1.3.0 version checkout fields values can be accessed in API
using `orders` and `orders/{id}` endpoints.

![Orders API](/images/m2/checkout-fields/orders-api.png)
