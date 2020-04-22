---
layout: default
title: Firecheckout Installation via Composer
description: magento 2 firecheckout module installation
keywords: firecheckout installation
category: Firecheckout
exclude_from_search: true
---

# Firecheckout Installation

## Prepare to install

Firecheckout installation requires Marketplace module. It’s our module that
registers our packages repository in composer.json file, saves its credentials
to the auth.json file, automates a bunch of complex commands required to run
prior and after module installation, and provides easy to use module installer.

```bash
composer require swissup/module-marketplace &&\
bin/magento setup:upgrade &&\
bin/magento marketplace:channel:enable swissuplabs
```

You'll be asked to activate your domain and enter your key. Get identity key(s)
and activate the domain on the site where you’ve purchased the product:

 -  [argentotheme.com](https://argentotheme.com/license/customer/activation/)
 -  [firecheckout.net](https://firecheckout.net/license/customer/activation/)
 -  [swissuplabs.com](https://swissuplabs.com/license/customer/activation/)

## Install the module

When Marketplace module is installed you can proceed with Firecheckout installation
in teminal:

```bash
bin/magento marketplace:package:require swissup/firecheckout &&\
bin/magento marketplace:package:install swissup/firecheckout
```

Or, you can open Magento backend panel, navigate to _System > Marketplace_ and
install modules directly from backend:

![GUI](/images/m2/marketplace/gui.png)

#### Next up
{:.no_toc}

 -  [Back to Main Page](/m2/extensions/firecheckout/)
