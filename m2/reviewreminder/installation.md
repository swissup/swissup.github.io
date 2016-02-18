---
layout: default
title: Review Reminder
description: magento review reminder module installation
keywords: " magento review reminder extension, magento review reminder email "
category: Review Reminder
---

# Review Reminder installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Reviewreminder
    bin/magento setup:upgrade
    ```

3. Navigate to `Stores > Configuration > Swissup > Review Reminder` and
enable extension for any store you need.

That's all. Now you can generate reminders for orders created before extension was installed, more info in  [Manual Order Indexing Section][manual_order_indexing]

##### Next up

* [Manual Order Indexing Section][manual_order_indexing]

[manual_order_indexing]: /m2/reviewreminder/#manual-order-indexing-section
