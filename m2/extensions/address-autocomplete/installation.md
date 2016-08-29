---
layout: default
title: Address Autocomplete installation
description: Address autocomplete isntallation instructions
category: Address Autocomplete
---

# Installation

Please follow next steps to complete the installation:

Run the following commands:

```bash
cd <magento_root>
composer config repositories.swissup composer https://swissup.github.io/packages/
composer require swissup/address-autocomplete:dev-master --prefer-source
bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_AddressAutocomplete
bin/magento setup:upgrade
```

That's all.

#### Next Up

- [Configuration](../configuration/)
- [Get API Key](../get-api-key/)

