---
layout: default
title: Argento for Magento 2 composer installation
description: How to install Argento on Magento 2 via composer
category: Argento
exclude_from_search: true
---

# Installation

* TOC
{:toc}

{% include installation/m2/composer.html site="argentotheme.com" package="swissup/argento-m2" modules="Swissup_Core Swissup_Ajaxpro Swissup_Ajaxsearch Swissup_Amp Swissup_Askit Swissup_Attributepages Swissup_Compare Swissup_EasySlide Swissup_Easybanner Swissup_Easycatalogimg Swissup_Easytabs Swissup_Fblike Swissup_FeaturedAttributes Swissup_FontAwesome Swissup_Gdpr Swissup_GdprAskit Swissup_GdprTestimonials Swissup_Highlight Swissup_HoverGallery Swissup_Hreflang Swissup_Lightboxpro Swissup_Navigationpro Swissup_ProLabels Swissup_Reviewreminder Swissup_RichSnippets Swissup_Rtl Swissup_SeoCanonical Swissup_SeoCore Swissup_SeoCrossLinks Swissup_SeoHtmlSitemap Swissup_QuantitySwitcher Swissup_SeoPager Swissup_SeoUrls Swissup_SeoTemplates Swissup_SeoXmlSitemap Swissup_SlickCarousel Swissup_SoldTogether Swissup_Stickyfill Swissup_Suggestpage Swissup_Testimonials Swissup_ThemeEditor Swissup_ThemeEditorArgentoEssence Swissup_ThemeEditorArgentoFlat Swissup_ThemeEditorArgentoForce Swissup_ThemeEditorArgentoLuxury Swissup_ThemeEditorArgentoPure2 Swissup_ThemeEditorArgentoMall Swissup_ThemeEditorArgentoStripes" preinstall="composer require marc1706/fast-image-size:1.* leafo/scssphp:0.7.6 mobiledetect/mobiledetectlib:2.8" %}

#### 3. Setup configuration and theme content

Run theme installer in terminal. (You can also do that via backend interface
at _Swissup > Module Manager_ page.)

```bash
php bin/magento swissup:module:install --store=STORE_ID THEME_CODE IDENTITY_KEY
```

**Command line options**

Option      | Description
------------|------------
STORE_ID    | ID of the store to install theme to. Use `0` to install theme for All Stores. Or find it using `php bin/magento store:list` command.
THEME_CODE  | Code of the theme to install. Get it from the list below, or find it using `php bin/magento swissup:module:list --type=theme` command.
IDENTITY_KEY| Your license key. Get it at [our site](https://argentotheme.com/license/customer/activation/).

**Theme codes**

Theme                    | Code
-------------------------|------------------------------------
[Essence](#&gid=1&pid=1) | Swissup_ThemeFrontendArgentoEssence
[Flat](#&gid=1&pid=2)    | Swissup_ThemeFrontendArgentoFlat
[Pure2](#&gid=1&pid=3)   | Swissup_ThemeFrontendArgentoPure2
[Mall](#&gid=1&pid=4)    | Swissup_ThemeFrontendArgentoMall
[Luxury](#&gid=1&pid=5)  | Swissup_ThemeFrontendArgentoLuxury
[Stripes](#&gid=1&pid=6) | Swissup_ThemeFrontendArgentoStripes

#### 4. Deploy sample data images

Sample images are located in `ARGENTO_THEME/resources/media` folder. Copy
all contents of this folder into `MAGENTO_ROOT/pub/media` directory.

```bash
cd MAGENTO_ROOT
cp -R vendor/swissup/theme-frontend-argento-essence/resources/media/* pub/media/
cp -R vendor/swissup/theme-frontend-argento-flat/resources/media/* pub/media/
cp -R vendor/swissup/theme-frontend-argento-pure2/resources/media/* pub/media/
cp -R vendor/swissup/theme-frontend-argento-mall/resources/media/* pub/media/
cp -R vendor/swissup/theme-frontend-argento-luxury/resources/media/* pub/media/
cp -R vendor/swissup/theme-frontend-argento-stripes/resources/media/* pub/media/
cp -R vendor/swissup/module-amp/resources/media/* pub/media/
chmod -R 775 pub/media/easybanner pub/media/easyslide pub/media/highlight pub/media/wysiwyg
```

#### 5. Install AMP

> Skip this step, if you don't need AMP version of your store.
>
> If you are the Magento 2.1.* user, you need to apply
> [additional patches](/m2/extensions/amp/installation/manual/#magento-21x-users-should-apply-additional-changes)
> to make AMP work with your magento version.

```bash
php bin/magento swissup:module:install --store=STORE_ID Swissup_Amp
```

**Command line options**

Option      | Description
------------|------------
STORE_ID    | ID of the store to install AMP to. Use `0` to install AMP for All Stores. Or find it using `php bin/magento store:list` command.

#### That's all. Navigate to you store to check your new theme:
{:.no_toc}

{% include gallery.html images=site.data.gallery.m2.argento.installation.result class="phone-up-1 tablet-up-3 photoswipe scroll" %}

##### Next up
{:.no_toc}

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [View list of included modules](/m2/argento/#extensions)
