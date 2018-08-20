---
layout: default
title: AMP for Magento 2 manual installation
description: How to manually install AMP on Magento 2
category: Accelerated Mobile Pages
---

# Manual Installation

 1. [Download package from your account dashboard at our site](#download-package-from-your-account)
 2. [Unpack package into magento root folder](#unpack-package-into-magento-root-folder)
 3. [Enable modules and run upgrade scripts](#enable-modules-and-run-upgrade-scripts)
 4. [Setup configuration and content](#4-setup-configuration-and-content)
 5. [Deploy sample data images](#5-deploy-sample-data-images)
 6. [Magento 2.1.x fixes](#6-magento-21x-users-should-apply-additional-changes)

{% include installation/m2/manual.html site="swissuplabs.com" modules="Swissup_Core Swissup_Rtl Swissup_EasySlide Swissup_Easycatalogimg Swissup_Amp" preinstall="composer require marc1706/fast-image-size:1.* leafo/scssphp:0.7.6 mobiledetect/mobiledetectlib:2.8" %}

#### 4. Setup configuration and content

1. Navigate to `Swissup > Module Manager`, find `Swissup_Amp`
    and click `Open Installer` option in actions column

    ![Module manager](/images/m2/amp/installation/module_manager.png)

2. Select store, where you wish to install AMP and press `Install` button

    ![Installation Form](/images/m2/amp/installation/form.png)

#### 5. Deploy sample data images

Sample images are located in `resources/media` folder. Copy
all contents of this folder into `MAGENTO_ROOT/pub/media` directory.

```bash
cd MAGENTO_ROOT
cp -R app/code/Swissup/Amp/resources/media/* pub/media/
# If you are using extension from vendor folder:
# cp -R vendor/swissup/amp/resources/media/* pub/media/
chmod -R 777 pub/media/easyslide
```

#### 6. Magento 2.1.x users should apply additional changes

 -  [Add 'view_block_abstract_to_html_after' event][m21_add_event]
 -  [Allow attribute 'template' for 'blockReferenceType'][m21_allow_template]

#### 7. Result

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
