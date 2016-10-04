---
layout: default
title: Itoris_CustomerRewards integration
description: Firecheckout integration with Itoris CustomerRewards
keywords: Itoris_CustomerRewards
category: Firecheckout
---

# Itoris CustomerRewards

Open `app/code/local/TM/FireCheckout/Model/Quote/Address.php` and find following line:

```php
class TM_FireCheckout_Model_Quote_Address extends Mage_Sales_Model_Quote_Address
```

Replace it with:

```php
class TM_FireCheckout_Model_Quote_Address extends Itoris_CustomerRewards_Model_Rewrite_Sales_Quote_Address
// Mage_Sales_Model_Quote_Address
```

Save the file and disable compilation mode, if needed.
