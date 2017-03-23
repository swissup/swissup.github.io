---
layout: default
title: Amasty Shipping Table Rates integration
description: Firecheckout integration with Amasty Shipping Table Rates
keywords: Amasty_Table
category: Firecheckout
---

# Amasty Shipping Table Rates

> Tested on version 2.3.2

 1. Open `app/code/local/Amasty/Table/Model/Method.php`
 and find `addComment` method

 2. Replace first line with `preg_match_all` with the following line:

    ```txt
    preg_match_all('@<label.+?for="s_method_amtable_amtable(.+?)">.+?label>@si', $html, $matches);
    ```

    and save the file.

 3. Disable compilation mode and clear Magento cache.
