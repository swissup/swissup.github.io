---
layout: default
title: AMP for Magento 2 manual installation
description: How to manually install AMP on Magento 2
category: Accelerated Mobile Pages
---

# Manual Installation


 1. [Download archive](#download-archive)
 2. [Unpack packages and install them](#install-the-module)
 3. [Setup configuration and theme content](#setup-configuration-and-theme-content)
 4. [Deploy sample data images](#deploy-sample-data-images)
 5. [Magento 2.1.x fixes](#magento-21x-users-should-apply-additional-changes)

{% include installation/m2/manual.html site="swissuplabs.com" package="swissup/amp" modules="Swissup_Core Swissup_Rtl Swissup_EasySlide Swissup_Easycatalogimg Swissup_Amp" %}

#### Setup configuration and content

Run installer in terminal. (You can also do that via backend interface
at _Swissup > Module Manager_ page.)

```bash
# 1. Get the STORE_ID you need, from the store list
php bin/magento store:list
# 2. Run installer with STORE_ID parameter
php bin/magento swissup:module:install --store=STORE_ID Swissup_Amp
```

#### Deploy sample data images

Sample images are located in `resources/media` folder. Copy
all contents of this folder into `MAGENTO_ROOT/pub/media` directory.

```bash
cd MAGENTO_ROOT
cp -R vendor/swissup/module-amp/resources/media/* pub/media/
chmod -R 775 pub/media/easyslide
```

#### Magento 2.1.x users should apply additional changes

 -  [Add 'view_block_abstract_to_html_after' event][m21_add_event]
 -  [Allow attribute 'template' for 'blockReferenceType'][m21_allow_template]

#### Result

Navigate to you store with `?amp=1` parameter in url to check how it looks.

{% include gallery.html images=site.data.gallery.m2.amp.index class="phone-up-2 tablet-up-3 photoswipe scroll" %}

##### Next Up

 -  [Configuration](../configuration/)
 -  [Homepage](../customization/homepage/)
 -  [Footer](../customization/footer/)
 -  [Google Analytics](../google-analytics/)
 -  [FAQ](../faq/)

[m21_add_event]: /m2/extensions/amp/known-issues/#broken-amp-pages-on-magento-21x
[m21_allow_template]: /m2/extensions/amp/known-issues/#the-attribute-template-is-not-allowed-error-on-magento-21x
