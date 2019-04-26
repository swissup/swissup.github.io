---
layout: default
title: Magento 2 development documentation
---

# Dev docs

* TOC
{:toc}

### Install Swissup modules

This command will download all modules, enable them and run `setup:upgrade` command.

```bash
composer config repositories.swissup composer https://docs.swissuplabs.com/packages/ &&\
composer require\
    swissup/module-address-autocomplete\
    swissup/module-address-field-manager\
    swissup/module-ajaxlayerednavigation\
    swissup/module-ajaxpro\
    swissup/module-ajaxsearch\
    swissup/module-akismet\
    swissup/module-amp\
    swissup/module-askit\
    swissup/module-attributepages\
    swissup/module-checkout\
    swissup/module-checkout-cart\
    swissup/module-checkout-fields\
    swissup/module-checkout-success\
    swissup/module-compare\
    swissup/module-core\
    swissup/module-customer-field-manager\
    swissup/module-delivery-date\
    swissup/module-easybanner\
    swissup/module-easycatalogimg\
    swissup/module-easyflags\
    swissup/module-easy-slide\
    swissup/module-easytabs\
    swissup/module-fblike\
    swissup/module-featured-attributes\
    swissup/module-field-manager\
    swissup/module-firecheckout\
    swissup/module-firecheckout-integrations\
    swissup/module-font-awesome\
    swissup/module-font-awesome-5\
    swissup/module-gdpr\
    swissup/module-gdpr-askit\
    swissup/module-gdpr-testimonials\
    swissup/module-geoip\
    swissup/module-highlight\
    swissup/module-hover-gallery\
    swissup/module-hreflang\
    swissup/module-helpdesk\
    swissup/module-instaframe\
    swissup/module-lightboxpro\
    swissup/module-maintenance\
    swissup/module-navigationpro\
    swissup/module-orderattachment\
    swissup/module-pagespeed\
    swissup/module-pro-labels\
    swissup/module-quantity-switcher\
    swissup/module-recaptcha\
    swissup/module-reviewreminder\
    swissup/module-rich-snippets\
    swissup/module-rtl\
    swissup/module-seo-core\
    swissup/module-seo-cross-links\
    swissup/module-seo-html-sitemap\
    swissup/module-seo-pager\
    swissup/module-seo-templates\
    swissup/module-seo-urls\
    swissup/module-seo-xml-sitemap\
    swissup/module-slick-carousel\
    swissup/module-sold-together\
    swissup/module-stickyfill\
    swissup/module-subscribe-at-checkout\
    swissup/module-subscription-checker\
    swissup/module-suggestpage\
    swissup/module-taxvat\
    swissup/module-testimonials\
    swissup/module-tfa\
    swissup/module-theme-editor\
    swissup/module-theme-editor-swissup-absolute\
    swissup/module-theme-editor-argento-essence\
    swissup/module-theme-editor-argento-flat\
    swissup/module-theme-editor-argento-pure2\
    swissup/module-theme-editor-argento-mall\
    swissup/module-theme-editor-argento-luxury\
    swissup/module-theme-editor-argento-stripes\
    swissup/theme-frontend-absolute\
    swissup/theme-frontend-argento-blank\
    swissup/theme-frontend-argento-essence\
    swissup/theme-frontend-argento-flat\
    swissup/theme-frontend-argento-pure2\
    swissup/theme-frontend-argento-mall\
    swissup/theme-frontend-argento-luxury\
    swissup/theme-frontend-argento-stripes\
    swissup/module-tippyjs\
    --prefer-source &&\
bin/magento module:enable\
    Swissup_AddressAutocomplete\
    Swissup_AddressFieldManager\
    Swissup_Ajaxlayerednavigation\
    Swissup_Ajaxpro\
    Swissup_Ajaxsearch\
    Swissup_Akismet\
    Swissup_Amp\
    Swissup_Askit\
    Swissup_Attributepages\
    Swissup_Checkout\
    Swissup_CheckoutCart\
    Swissup_CheckoutFields\
    Swissup_CheckoutSuccess\
    Swissup_Compare\
    Swissup_Core\
    Swissup_CustomerFieldManager\
    Swissup_DeliveryDate\
    Swissup_Easybanner\
    Swissup_Easycatalogimg\
    Swissup_Easyflags\
    Swissup_EasySlide\
    Swissup_Easytabs\
    Swissup_Fblike\
    Swissup_FeaturedAttributes\
    Swissup_FieldManager\
    Swissup_Firecheckout\
    Swissup_FirecheckoutIntegrations\
    Swissup_FontAwesome\
    Swissup_FontAwesome5\
    Swissup_Gdpr\
    Swissup_GdprAskit\
    Swissup_GdprTestimonials\
    Swissup_Geoip\
    Swissup_Highlight\
    Swissup_HoverGallery\
    Swissup_Hreflang\
    Swissup_Helpdesk\
    Swissup_Instaframe\
    Swissup_Lightboxpro\
    Swissup_Maintenance\
    Swissup_Navigationpro\
    Swissup_Orderattachment\
    Swissup_Pagespeed\
    Swissup_ProLabels\
    Swissup_QuantitySwitcher\
    Swissup_Recaptcha\
    Swissup_Reviewreminder\
    Swissup_RichSnippets\
    Swissup_Rtl\
    Swissup_SeoCore\
    Swissup_SeoCrossLinks\
    Swissup_SeoHtmlSitemap\
    Swissup_SeoPager\
    Swissup_SeoTemplates\
    Swissup_SeoUrls\
    Swissup_SeoXmlSitemap\
    Swissup_SlickCarousel\
    Swissup_SoldTogether\
    Swissup_Stickyfill\
    Swissup_SubscribeAtCheckout\
    Swissup_SubscriptionChecker\
    Swissup_Suggestpage\
    Swissup_Taxvat\
    Swissup_Testimonials\
    Swissup_Tfa\
    Swissup_ThemeEditor\
    Swissup_ThemeEditorSwissupAbsolute\
    Swissup_ThemeEditorArgentoEssence\
    Swissup_ThemeEditorArgentoFlat\
    Swissup_ThemeEditorArgentoPure2\
    Swissup_ThemeEditorArgentoMall\
    Swissup_ThemeEditorArgentoLuxury\
    Swissup_ThemeEditorArgentoStripes\
    Swissup_Tippyjs &&\
bin/magento setup:upgrade
```
{:.scroll}

#### Short variant

```bash
curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/dev/install | bash -s
```

### Track uncommitted changes in all modules

Initialize repository in `vendor/swissup` folder and add each subfolder as git
submodule:

```bash
git init && for module in *; do git submodule add "./$module"; done; && git commit -m "Initial commit"
```

Now, after you've made a changes into multiple repos, you may use `git status` to
see what repos were affected.

### Update all modules

This command will run `checkout master && git pull` in each subfolder:

```bash
for module in *; do cd $module && git checkout master && git pull && cd ../; done;
```

### Remove all modules

This trick is usefull when modules were installed using `--prefer-source` option
and all remotes are not valid anymore. (Repositories were renamed at the Github).

```bash
# 1. cd <magento_root>

# 2. remove .git folders to allow to remove/update module when remote has conflicts
for module in vendor/swissup/*; do rm -rf $module/.git; done;

# 3. remove packages
packages=$(composer info | grep swissup | cut -d ' ' -f 1 | tr '\n\012\015' ' '); echo $packages | xargs composer remove;
```


### Tools

1. [Whoops](https://github.com/yireo/Yireo_Whoops) module for Magento 2

This module adds Whoops error handling to Magento 2.

```bash
composer require --dev yireo/magento2-whoops
bin/magento module:enable Yireo_Whoops
bin/magento setup:upgrade
```

2. [Mgt Developer Toolbar](https://github.com/mgtcommerce/Mgt_Developertoolbar) for Magento 2

The toolbar shows you all important information for performance optimisation and magento development.

```bash
composer require --dev mgtcommerce/module-mgtdevelopertoolbar
bin/magento module:enable Mgt_DeveloperToolbar

bin/magento setup:upgrade
bin/magento config:set mgt_developer_toolbar/module/is_enabled 1
bin/magento cache:flush

rm -rf pub/static/*
rm -rf var/*

bin/magento setup:static-content:deploy
```

3. [Magento 2 Cache Clean](https://github.com/mage2tv/magento-cache-clean)

The file watcher automatically cleans affected cache types in the Magento 2 cache during development.

```bash
composer require --dev mage2tv/magento-cache-clean
vendor/bin/cache-clean.js --watch
```