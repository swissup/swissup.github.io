---
layout: default
title: Checkout VAT Use Cases
category: Checkout VAT
---

# Use Cases

### How to enable zero-tax orders?

Magento allows to setup zero-tax orders when VAT Number is valid without a single
third-party module. Take a look at our [tutorial](/m2/extensions/taxvat/use-cases/zero-tax-order/).

If you can't use built-in solution, you can use our module:

 1. Navigate to _Stores > Configuration > Swissup Checkout > Tax VAT_ and enable
    following options:

    ```
    Show VAT Number on Storefront: Yes
    Validate VAT number using VIES service: Yes
    Remove tax if VAT Number is valid: Yes
    ```

 2. Save config.

### How to enable zero-tax orders without taxvat module?

We have a separate article on how to accomplish this
[without our module](/m2/extensions/taxvat/use-cases/zero-tax-order/).
