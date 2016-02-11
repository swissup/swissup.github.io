---
layout: default
title: Store Maintenance installation
description: Store Maintenance installation instructions
keywords: "store maintenance installation"
category: Store Maintenance
---

# Installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:
    
    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_Maintenance
    bin/magento setup:upgrade
    ```

That's all. Now you can go to backend and turn on maintenance mode.

##### Next up

- [Module settings](../settings)
