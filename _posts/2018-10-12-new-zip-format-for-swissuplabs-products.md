---
layout: default
title: New zip format for SwissupLabs products
permalink: /posts/new-zip-format-for-swissuplabs-products/
description: Painless update from old packages format to the new one
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

Unfortunately, moving from the old format to the new one is not that easy. It
requires basic knowledge of terminal and composer commands.

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

Download the modules, you'd like to update.

#### Remove old version

Take a look at the content of the downloaded archive. It contains the list of
composer packages. You need to remove the old files for each one from your filesystem.

> We strongly recommend to backup the files before removing them.

**How to convert package name into the folder path to remove**

 1. Take `<magento_root>/app` prefix: `/var/www/magento/app`

 2. There are two possible package name formats:

    ```
    module-xxx-version.zip
    theme-[AREA]-xxx-version.zip
    ```

    When package name starts from the `module-`, add `code/Swissup` to the folder
    path: `/var/www/magento/app/code/Swissup`

    When package name starts from the `theme-`, add `design/[AREA]` to the folder path:
    `/var/www/magento/app/design/frontend`

    Otherwise, proceed to the next package in the archive.

 3. Add camel-cased `xxx` to the folder name. Please note, that theme folders
    doesn't use camel-case notation:

    ```
    /var/www/magento/app/code/Swissup/Core
    /var/www/magento/app/design/frontend/Swissup/absolute
    ```

 4. Copy this folder into the safe place. Remove the folder;
 5. Repeat the steps 1 - 4 for each of the package inside the archive;

**GeoIP module example (swissup.product-geoip-1.1.1.zip)**

Zip Contents                    | Folder to remove
--------------------------------|-----------------
geoip-1.1.1.zip                 | -
module-**checkout**-1.2.0.zip   | magento_root/app/code/Swissup/**Checkout**
module-**core**-1.7.0.zip       | magento_root/app/code/Swissup/**Core**
module-**geoip**-1.1.1.zip      | magento_root/app/code/Swissup/**Geoip**

**Free Absolute theme example (swissup.absolute-metapackage-1.2.0.zip)**

Zip Contents                        | Folder to remove
------------------------------------|-----------------
absolute-metapackage-1.1.1.zip      | -
module-**core**-1.7.0.zip           | magento_root/app/code/Swissup/**Core**
module-**font-awesome**-1.3.0.zip   | magento_root/app/code/Swissup/**FontAwesome**
module-**slick-carousel**-1.2.0.zip | magento_root/app/code/Swissup/**SlickCarousel**
module-**theme-editor**-1.5.0.zip   | magento_root/app/code/Swissup/**ThemeEditor**
module-**theme-editor-swissup-absolute**-1.1.0.zip  | magento_root/app/code/Swissup/**ThemeEditorSwissupAbsolute**
theme-**frontend**-**absolute**-1.2.0.zip           | magento_root/app/design/**frontend**/Swissup/**absolute**

#### Install new version

 1. Unpack downloaded archive into `<magento_root>/vendor/swissup/packages` folder.
    Create the folder if it doesn't exist yet.

    <details>
        <summary><strong>Example of unpacked `swissup.firecheckout-1.14.0.zip` file:</strong></summary>
        <pre><code>&lt;magento_root&gt;
    └── vendor
        └── swissup
            └── packages
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

 2. Get the module name to use in composer command.

    Take a look at the name of the downloaded archive. Examples:


    ```
    swissup.firecheckout-1.14.0.zip
    swissup.product-geoip-1.1.1.zip
    swissup.absolute-metapackage-1.2.0.zip
    ```

    We need to work with the part without a version number. Additionally, replace
    the dot (`.`) with a slash (`/`) to get module name to use in `composer require` command.
    Examples:

    ```
    swissup.firecheckout            => swissup/firecheckout
    swissup.product-geoip           => swissup/product-geoip
    swissup.absolute-metapackage    => swissup/absolute-metapackage
    ```

 3. Install new version using terminal

    ```bash
    cd <magento_root>
    # Register folder with packages in composer configuration
    composer config repositories.swissupartifacts artifact $(pwd)/vendor/swissup/packages

    # Install package
    composer require swissup/firecheckout
    # OR
    composer require swissup/absolute-metapackage
    # OR
    composer require swissup/product-geoip
    ```

That's all. You are now using our modules installed via composer dependency manager.

### Bonus chapter: Update or rollback the module version

**Update module**

 1. Download new version archive;
 2. Unpack it to the `<magento_root>/vendor/swissup/packages` folder;
 3. Run terminal:

    ```bash
    cd <magento_root>
    composer update
    ```

**Rollback the module to the specific version**

You can rollback the module to the any version found in
`<magento_root>/vendor/swissup/packages` folder.

 1. Run terminal:

    ```bash
    cd <magento_root>
    composer require swissup/firecheckout:1.14.0
    ```
