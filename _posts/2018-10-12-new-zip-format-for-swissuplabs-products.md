---
layout: default
title: New zip format for SwissupLabs products
permalink: /posts/new-zip-format-for-swissuplabs-products/
description: Painless update from old packages format to the new one
categories: posts
---

# New format for our packages

Begining from the October we are providing our Magento2 modules and themes in
the new format. From now on, every module we provide - is a zip archive with
a bunch of required composer packages.

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

#### What are the Advantages?

The new format brings a few benefits for you and your store:

 -  You can now install our modules from different sources without any issues.
    (Previously you had to fix PHP errors after installing some of our modules
    from Magento Marketplace and some from SwissupLabs);
 -  You can now update and rollback our modules to specific version without the
    hassle;
 -  SwissupLabs subscribers will get advantages of our Cloud Distribution System
    in the next 4-6 months;

#### Okay, I'm in!

Unfortunately, moving from the old format to the new one is not that easy. It
requires basic knowledge of terminal and composer commands.

The thing should be done when updating one of your modules are:

 -  Download new version of the module from your account page at swissuplabs.com,
    firecheckout.net, or argentotheme.com;
 -  Remove currently installed files of this module and its dependencies;
 -  Install the module using new installation instructions;

Let's proceed every step.

#### Download new version

Open your account page at the one of your sites:

 -  [argentotheme.com](https://argentotheme.com/downloadable/customer/products/)
 -  [firecheckout.net](https://firecheckout.net/subscription/customer/products/)
 -  [swissuplabs.com](https://swissuplabs.com/subscription/customer/products/)

Download the modules, you'd like to update.

#### Remove old version

Take a look at the content of downloaded zip file. It should contain the list of
zip packages. You need to remove each one from your current store.

**GeoIP module example (swissup.product-geoip-1.1.1.zip)**

Zip Contents                | Folder to remove
----------------------------|-----------------
geoip-1.1.1.zip             | -
module-checkout-1.2.0.zip   | magento_root/app/code/Swissup/Checkout
module-core-1.7.0.zip       | magento_root/app/code/Swissup/Core
module-geoip-1.1.1.zip      | magento_root/app/code/Swissup/Geoip

**Free Absolute theme example (swissup.absolute-metapackage-1.2.0.zip)**

Zip Contents                | Folder to remove
----------------------------|-----------------
absolute-metapackage-1.1.1.zip  | -
module-core-1.7.0.zip           | magento_root/app/code/Swissup/Core
module-font-awesome-1.3.0.zip   | magento_root/app/code/Swissup/FontAwesome
module-slick-carousel-1.2.0.zip | magento_root/app/code/Swissup/SlickCarousel
module-theme-editor-1.5.0.zip   | magento_root/app/code/Swissup/ThemeEditor
module-theme-editor-swissup-absolute-1.1.0.zip  | magento_root/app/code/Swissup/ThemeEditorSwissupAbsolute
theme-frontend-absolute-1.2.0.zip               | magento_root/app/design/frontend/Swissup/absolute

#### Install new version


