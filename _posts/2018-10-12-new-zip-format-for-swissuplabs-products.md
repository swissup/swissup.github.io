---
layout: default
title: New zip format for SwissupLabs products
permalink: /posts/new-zip-format-for-swissuplabs-products/
description: New composer-compatible archive format for SwissupLabs products
categories: posts
---

# New format for our packages

## Contents
{:.no_toc}

* TOC
{:toc}

### New format overview

Beginning from the October, we provide our Magento 2 modules and themes in
the new format. From now on, every module we offer — is an archive of the
required composer packages.

<details>
    <summary>Firecheckout Package Example</summary>
    <pre><code>swissup.firecheckout-1.14.0.zip
├── firecheckout-1.14.0.zip
├── module-address-autocomplete-1.1.0.zip
├── module-address-field-manager-1.4.0.zip
├── module-checkout-1.2.0.zip
├── module-checkout-cart-1.4.0.zip
├── module-checkout-fields-1.1.0.zip
├── module-checkout-success-1.3.0.zip
├── module-core-1.7.0.zip
├── module-customer-field-manager-1.1.0.zip
├── module-delivery-date-1.2.0.zip
├── module-field-manager-1.1.0.zip
├── module-firecheckout-1.14.0.zip
├── module-firecheckout-integrations-1.1.0.zip
├── module-geoip-1.1.1.zip
├── module-orderattachment-1.2.0.zip
├── module-stickyfill-1.1.0.zip
├── module-subscribe-at-checkout-1.2.0.zip
├── module-taxvat-1.1.0.zip
└── module-tippyjs-1.1.0.zip</code></pre>
</details>

### What are the Advantages?

The new format brings a few benefits for you and your store:

 -  You can now install our modules from different sources at the same time
    without any issues. (Previously you had to fix PHP errors after installing
    some of our modules from Magento Marketplace and some from SwissupLabs);
 -  You can now update and rollback our modules to a specific version without the
    hassle;
 -  SwissupLabs subscribers will get advantages of our Cloud Distribution System
    in the next 4-6 months;

### Okay, I'm in!

Migrating from the old format to the new one is not that easy. It
requires advanced knowledge of terminal and composer commands. Or, you can use
our automated one-line script shown below that will do the job.

The things should be done when updating one of our modules are:

 -  Download new version of the module from your account page at swissuplabs.com,
    firecheckout.net, or argentotheme.com;
 -  Remove currently installed files of this module and its dependencies;
 -  Install the module using new instructions;

Let's look at every step.

### Instructions

#### Download new version

Open your account page at the one of our sites:

 -  [argentotheme.com](https://argentotheme.com/downloadable/customer/products/)
 -  [firecheckout.net](https://firecheckout.net/subscription/customer/products/)
 -  [swissuplabs.com](https://swissuplabs.com/subscription/customer/products/)

Download the modules, you'd like to update and put them to the
`<magento_root>/swissup` folder:

```bash
# Example
/var/www/magento/swissup/swissup.firecheckout-1.14.0.zip
/var/www/magento/swissup/swissup.product-geoip-1.1.1.zip
```

#### Automated one line migration

**This is the recommended way to migrate our modules.**

Run the command below from the `<magento_root>` folder:

```bash
curl -s https://raw.githubusercontent.com/swissup/scripts/master/code2vendor | bash
```

That's all. Selected modules are migrated to the composer-based installer.

#### Manual migration

Manual migration is not recommended. However, if you can't run automated script,
you find instructions in the [separate article](/posts/new-zip-format-manual-migration/)

### Bonus chapter: Update or rollback the module version

**Update module**

 1. Download new version archive;
 2. Unpack it to the `<magento_root>/vendor/swissup/artifacts` folder;
 3. Run terminal:

    ```bash
    cd <magento_root>
    composer update
    ```

**Rollback the module to the specific version**

You can rollback the module to the any version found in
`<magento_root>/vendor/swissup/artifacts` folder.

 1. Run terminal:

    ```bash
    cd <magento_root>
    composer require swissup/module-core:1.7.0
    ```
