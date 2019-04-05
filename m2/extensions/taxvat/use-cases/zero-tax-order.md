---
layout: default
title: Zero Tax Order
description: How to configure zero tax orders when VAT number is valid
category: Checkout VAT
---

# Tax-free orders for valid VAT number

Sometimes, store owners of EU based shops need to provide tax-free purchases
for the customers with valid VAT number. There are number of Magento 2 modules
that provide this functionality with separate config. But did you know that
you can achieve this feature for guest and registered customers without a
single third-party module?

> We assume that you already configured taxes for EU countries.
>
> If not - please create:
>
> 1. At least one "Tax Rate" at the _Stores > Tax Zones and Rates_ page.
> 2. At lease one "Tax Rule" at the _Stores > Tax Rules_ page.

### Configuring zero tax orders

 1. Create "Tax free" customer tax class:
    1.  Open any of existing "Tax Rules" at the _Stores > Tax Rules_ page
    2.  Expand "Additional Settings" fieldset and add "Tax free" tax class using
        the button below "Customer Tax Class" field.

        ![Create Customer Tax Class](/images/m2/taxvat/use-cases/zero-tax/backend-create-customer-tax-class.png)

    3.  **Uncheck** newly created tax class in the "Customer Tax Class" field

        ![Deselect created Customer Tax Class](/images/m2/taxvat/use-cases/zero-tax/backend-create-customer-tax-class-deselected.png)

    4.  Save the rule

 2. Create "Valid VAT" and "Invalid VAT" customer groups:
    1.  Navigate to _Customers > Customer Groups_ page and press
        "Add New Customer Group" button
    2.  Create "Valid VAT" group using "Tax free" class:

        ![New Customer Group](/images/m2/taxvat/use-cases/zero-tax/create-customer-group.png)

    3.  **This step is optional.**
        Create "Invalid VAT" group. Use your regular Tax Class for this group.

 3. Configure "Automatic Assignment to Customer Group"
    1.  Navigate to _Stores > Configuration > Customers > Customer Configuration > Create New Account Options_
    2.  Enable "Enable Automatic Assignment to Customer Group" option, and
        assign proper values for "Group for Valid VAT ID" and "Group for Invalid VAT ID"
        options:

        > You may select any other group except "Valid VAT" as a group for the
        > customers with invalid VAT number.

        ![Automatic Assignment to Customer Group](/images/m2/taxvat/use-cases/zero-tax/customer-configuration.png)

 4. That's all! You can now test checkout page.

    ![Checkout](/images/m2/taxvat/use-cases/zero-tax/checkout.png)

P.S. There is a bug in Magento which doesn't allow to use this feature: when
client enters a valid VAT and then clears VAT field - tax will not appear
again.

You need to apply the [patch](https://github.com/magento/magento2/pull/22091/commits/b00402dee226e2a1bc463813b1d3c27b1acbf937)
that fixes this bug.
