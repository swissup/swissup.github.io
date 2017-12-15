---
layout: default
title: Argento for Magento 2 manual installation
description: How to manually install Argento on Magento 2
category: Argento
---

# Manual Installation

 1. [Download package from your account dashboard at our site](#download-package-from-your-account)
 2. [Unpack package into magento root folder](#unpack-package-into-magento-root-folder)
 3. [Enable modules and run upgrade scripts](#enable-modules-and-run-upgrade-scripts)
 4. [Setup configuration and theme content](#setup-configuration-and-theme-content)
 5. [Deploy sample data images](#deploy-sample-data-images)

{% include installation/m2/manual.html site="argentotheme.com" modules="Swissup_Core Swissup_Ajaxpro Swissup_Ajaxsearch Swissup_Askit Swissup_Attributepages Swissup_EasySlide Swissup_Easybanner Swissup_Easycatalogimg Swissup_Easytabs Swissup_Fblike Swissup_FontAwesome Swissup_Highlight Swissup_HoverGallery Swissup_Lightboxpro Swissup_Navigationpro Swissup_ProLabels Swissup_Reviewreminder Swissup_RichSnippets Swissup_SeoCore Swissup_SeoHtmlSitemap Swissup_SeoUrls Swissup_SlickCarousel Swissup_SoldTogether Swissup_Suggestpage Swissup_Testimonials Swissup_ThemeEditor Swissup_ThemeEditorArgentoEssence Swissup_ThemeEditorArgentoFlat Swissup_ThemeEditorArgentoLuxury Swissup_ThemeEditorArgentoPure2 Swissup_ThemeEditorArgentoMall" %}

#### 4. Setup configuration and theme content

1. Navigate to `Swissup > Module Manager`, find theme you'd like to use at
    your store and click `Open Installer` option in actions column

    ![Module manager](/images/m2/argento/installation/module_manager.png)

2. Fill the `Identity Key` and select store, where you wish to install Argento
    and press `Install` button

    ![Installation Form](/images/m2/argento/installation/form.png)

#### 5. Deploy sample data images

Sample images are located in `ARGENTO_THEME/resources/media` folder. Copy
all contents of this folder into `MAGENTO_ROOT/pub/media` directory.

```bash
cd MAGENTO_ROOT
cp -R app/design/frontend/Swissup/argento-essence/resources/media/* pub/media/
cp -R app/design/frontend/Swissup/argento-flat/resources/media/* pub/media/
cp -R app/design/frontend/Swissup/argento-pure2/resources/media/* pub/media/
cp -R app/design/frontend/Swissup/argento-mall/resources/media/* pub/media/
cp -R app/design/frontend/Swissup/argento-luxury/resources/media/* pub/media/
# If you are using theme from vendor folder:
# cp -R vendor/swissup/theme-frontend-argento-essence/resources/media/* pub/media/
# cp -R vendor/swissup/theme-frontend-argento-flat/resources/media/* pub/media/
# cp -R vendor/swissup/theme-frontend-argento-pure2/resources/media/* pub/media/
# cp -R vendor/swissup/theme-frontend-argento-mall/resources/media/* pub/media/
# cp -R vendor/swissup/theme-frontend-argento-luxury/resources/media/* pub/media/
chmod -R 777 pub/media/easybanner pub/media/easyslide
```

#### 6. That's all. Navigate to you store to check your new theme:

{% include gallery.html images=site.data.gallery.m2.argento.installation.result class="phone-up-1 tablet-up-3 photoswipe scroll" %}

##### Next up

- [Small css customizations](/m2/argento/customization/custom-css/)
- [Create Argento based custom theme](/m2/argento/customization/custom-theme/)
- [View list of included modules](/m2/argento/#extensions)
