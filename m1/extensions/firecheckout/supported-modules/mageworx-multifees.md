---
layout: default
title: MageWorx MultiFees integration
description: Firecheckout integration with MageWorx MultiFees
keywords: MageWorx_MultiFees
category: Firecheckout
---

# MageWorx MultiFees

> MageWorx_MultiFees version - 2.7.4

 1. Open `app/code/community/MageWorx/MultiFees/Model/Sales/Quote/Total.php`
    and find the following line:

    ```php
    if ($this->_collected) return $this;
    ```

    Comment this line:

    ```xml
    // if ($this->_collected) return $this;
    ```

 2. Save the file and disable compilation mode.
