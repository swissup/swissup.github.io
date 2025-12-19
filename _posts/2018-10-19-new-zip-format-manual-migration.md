---
layout: default
title: New zip format for SwissupLabs products
permalink: /posts/new-zip-format-manual-migration/
description: New composer-compatible archive format for SwissupLabs products
categories: posts
breadcrumbs: false
---

# Manual migration

Manual instructions - are the steps that are done automatically by the
[one line script](/posts/new-zip-format-for-swissuplabs-products/#automated-one-line-migration).

**Don't follow the steps below if you able to run automated one line script.**

##### 1. Remove old version

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

##### 2. Install new version

 1. Unpack downloaded archive into `<magento_root>/vendor/swissup/artifacts` folder.
    Create the folder if it doesn't exist yet.

    <details>
        <summary><strong>Example of unpacked `swissup.firecheckout-1.14.0.zip` file:</strong></summary>
        <pre><code>&lt;magento_root&gt;
    └── vendor
        └── swissup
            └── artifacts
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
    composer config repositories.swissupartifacts artifact $(pwd)/vendor/swissup/artifacts

    # Install package
    composer require swissup/firecheckout
    # OR
    composer require swissup/absolute-metapackage
    # OR
    composer require swissup/product-geoip
    ```

That's all. You are now using our modules installed via composer dependency manager.
