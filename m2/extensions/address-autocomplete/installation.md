---
layout: default
title: Address Autocomplete installation
description: Address autocomplete isntallation instructions
category: Address Autocomplete
---

# Installation instructions

 1. Unpack extension archive into Magento root folder.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable\
        Swissup_Core\
        Swissup_Checkout\
        Swissup_SubscriptionChecker\
        Swissup_AddressAutocomplete

    # run magento upgrade scripts
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Navigate to `Stores > Configuration` and enter your
[api key](../get-api-key/).

#### Next Up

- [Configuration](../configuration/)
- [Get API Key](../get-api-key/)
- [Back to Main Page](../)
