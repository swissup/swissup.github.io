---
layout: default
title: Unirgy_DropshipSplit integration
description: Firecheckout integration with Unirgy DropshipSplit
keywords: Unirgy_DropshipSplit
category: Firecheckout
---

# Unirgy DropshipSplit

Open `app/code/local/TM/FireCheckout/Model/Quote/Address.php` and find following line:

```php
class TM_FireCheckout_Model_Quote_Address extends Mage_Sales_Model_Quote_Address
```

Replace it with:

```php
class TM_FireCheckout_Model_Quote_Address extends Unirgy_DropshipSplit_Model_Quote_Address
// Mage_Sales_Model_Quote_Address
```

Save the file and disable compilation mode, if needed.
