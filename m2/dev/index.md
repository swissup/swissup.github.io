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
    swissup/module-countdowntimer\
    swissup/module-customer-field-manager\
    swissup/module-delivery-date\
    swissup/module-easybanner\
    swissup/module-easycatalogimg\
    swissup/module-easyflags\
    swissup/module-easy-slide\
    swissup/module-easytabs\
    swissup/module-email\
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
    swissup/theme-editor\
    swissup/theme-editor-swissup-absolute\
    swissup/theme-editor-argento-essence\
    swissup/theme-editor-argento-flat\
    swissup/theme-editor-argento-pure2\
    swissup/theme-editor-argento-mall\
    swissup/theme-editor-argento-luxury\
    swissup/theme-editor-argento-stripes\
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
    Swissup_Command\
    Swissup_Compare\
    Swissup_Core\
    Swissup_Countdowntimer\
    Swissup_CustomerFieldManager\
    Swissup_DeliveryDate\
    Swissup_Easybanner\
    Swissup_Easycatalogimg\
    Swissup_Easyflags\
    Swissup_EasySlide\
    Swissup_Easytabs\
    Swissup_Email\
    Swissup_Fblike\
    Swissup_FeaturedAttributes\
    Swissup_FieldManager\
    Swissup_Firecheckout\
    Swissup_FirecheckoutIntegrations\
    Swissup_FontAwesome\
    Swissup_Gdpr\
    Swissup_GdprAskit\
    Swissup_GdprTestimonials\
    Swissup_Geoip\
    Swissup_Highlight\
    Swissup_HoverGallery\
    Swissup_Hreflang\
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
packages=$(composer info | grep swissup | cut -d ' ' -f 1 | tr "\n" " "); echo $packages | xargs composer remove;
```
