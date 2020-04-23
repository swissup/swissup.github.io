---
layout: default
title: Firecheckout Manual Installation
description: magento 2 firecheckout module installation
keywords: firecheckout installation
category: Firecheckout
exclude_from_search: true
---

# Manual Installation and Upgrade

## Prepare to install

Firecheckout installation requires Marketplace module. It’s our module that
automates a bunch of complex commands required to run
prior and after module installation, and provides easy to use module installer.

```bash
composer require swissup/module-marketplace &&\
bin/magento setup:upgrade
```

Prepare directory for downloaded archives and register it in `composer.json`:

```bash
mkdir -p vendor/swissup/artifacts &&\
composer config repositories.swissupartifacts artifact $(pwd)/vendor/swissup/artifacts
```

## Download and unpack archive

 1. Open your account page at the site where you purchased the module and download it:
    -  [argentotheme.com](https://argentotheme.com/downloadable/customer/products/)
    -  [firecheckout.net](https://firecheckout.net/subscription/customer/products/)
    -  [swissuplabs.com](https://swissuplabs.com/subscription/customer/products/)

 2. Upload this archive to the `<magento_root>` directory, and then unpack it
    to the `<magento_root>/vendor/swissup/artifacts` folder:

    ```bash
    unzip swissup.<module-version>.zip -d vendor/swissup/artifacts
    ```

 3. Now, proceed to install or update section.

## Install the module

When Marketplace module is installed you can proceed with module installation
in teminal (GUI is not supported in manual mode):

```bash
bin/magento marketplace:package:require swissup/firecheckout &&\
bin/magento marketplace:package:install swissup/firecheckout
```

## Update the module

When Marketplace module is installed you can update the module using the
following command (GUI is not supported in manual mode):

```bash
bin/magento marketplace:package:update swissup/firecheckout
```

#### Next up

 -  [Back to Main Page](/m2/extensions/firecheckout/)
