---
layout: default
title: Brander PaymentFee integration
description: Firecheckout integration with Brander PaymentFee
keywords: brander, paymentfee, brander_paymentfee
category: Firecheckout
---

# Brander_PaymentFee

> Brander_PaymentFee version — 0.1.3

Open `app/code/community/Brander/PaymentFee/Model/Sales/Quote/Address/Total/Fee.php`
and apply the following patch:

```diff
@@ -41,6 +41,7 @@
             $exist_amount = $quote->getFeeAmount();
             $fee          = $feeModel->getFee($address);
             $balance      = $fee - $exist_amount;
+            $balance      = $fee;
             $address->setFeeAmount($balance);
             $address->setBaseFeeAmount($balance);
             $quote->setFeeAmount($balance);
```
