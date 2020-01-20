---
layout: default
title: Magento 2 development documentation
---

# Dev docs

* TOC
{:toc}

### Install Magento

Install dependencies:

```bash
sudo apt install php-bcmath php-curl php-dom php-gd php-intl php-mbstring php-mysql php-simplexml php-soap php-xsl php-zip
```

Clone magento:

```bash
git clone git@github.com:magento/magento2.git && cd magento2
```

Install the version you'd like to use:

```bash
git checkout 2.3.2 && composer install
```

Now, open magento in browser and proceed installation. When magento is isntalled and
everything work as expected, you cna install sample data and swissup modules:

```bash
composer config repositories.magento composer https://repo.magento.com/ &&\
bin/magento sampledata:deploy
```

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
    swissup/module-codemirror\
    swissup/module-compare\
    swissup/module-core\
    swissup/module-customer-field-manager\
    swissup/module-delete-orders\
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
    swissup/module-pdf-invoice\
    swissup/module-pro-labels\
    swissup/module-quantity-switcher\
    swissup/module-recaptcha\
    swissup/module-reviewreminder\
    swissup/module-rich-snippets\
    swissup/module-rtl\
    swissup/module-seo-canonical\
    swissup/module-seo-core\
    swissup/module-seo-cross-links\
    swissup/module-seo-html-sitemap\
    swissup/module-seo-images\
    swissup/module-seo-pager\
    swissup/module-seo-templates\
    swissup/module-seo-urls\
    swissup/module-seo-xml-sitemap\
    swissup/module-slick-carousel\
    swissup/module-social-core\
    swissup/module-social-login\
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
    swissup/module-theme-editor-argento-force\
    swissup/module-theme-editor-argento-pure2\
    swissup/module-theme-editor-argento-mall\
    swissup/module-theme-editor-argento-luxury\
    swissup/module-theme-editor-argento-stripes\
    swissup/theme-frontend-absolute\
    swissup/theme-frontend-argento-blank\
    swissup/theme-frontend-argento-essence\
    swissup/theme-frontend-argento-flat\
    swissup/theme-frontend-argento-force\
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
    Swissup_DeleteOrders\
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
    Swissup_PdfInvoice\
    Swissup_ProLabels\
    Swissup_QuantitySwitcher\
    Swissup_Recaptcha\
    Swissup_Reviewreminder\
    Swissup_RichSnippets\
    Swissup_Rtl\
    Swissup_SeoCanonical\
    Swissup_SeoCore\
    Swissup_SeoCrossLinks\
    Swissup_SeoHtmlSitemap\
    Swissup_SeoImages\
    Swissup_SeoPager\
    Swissup_SeoTemplates\
    Swissup_SeoUrls\
    Swissup_SeoXmlSitemap\
    Swissup_SlickCarousel\
    Swissup_SocialCore\
    Swissup_SocialLogin\
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
    Swissup_ThemeEditorArgentoForce\
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
git init && (for module in *; do git submodule add "./$module"; done;) && git commit -m "Initial commit"
```

Now, after you've made a changes into multiple repos, you may use `git status` to
see what repos were affected.

### Update all modules

This command will run parallel `git pull origin master` commands in each subfolder:

```bash
ls | xargs -P10 -I{} git -C {} pull origin master
```

If the command above doesn't work for you, try another one.
It will run `checkout master && git pull` in each subfolder:

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


### Tools & Tricks

1. [Whoops](https://github.com/yireo/Yireo_Whoops) module for Magento 2

    This module adds Whoops error handling to Magento 2.

    ```bash
    composer require --dev yireo/magento2-whoops
    bin/magento module:enable Yireo_Whoops
    bin/magento setup:upgrade
    ```

2. [Magento Chrome Toolbar for MSP DevTools](https://github.com/magespecialist/mage-chrome-toolbar)

    - Just install from [Chrome WebStore](https://chrome.google.com/webstore/detail/magespecialist-devtools-f/odbnbnenehdodpnebgldhhmicbnlmapj?authuser=3).
    Now you have the Chrome extension, next step is to install and configure the Magento extension.

    - Run commands

    ```bash
    composer require --dev msp/devtools
    php bin/magento cache:flush
    php bin/magento cache:disable full_page
    php bin/magento setup:upgrade
    ```

    - Open Magento backend and go to Stores > Settings > Configuration > MageSpecialist > DevTools.
    Enable devtools and set IP restrictions.

    - Add the following line at the very beginning on index.php and pub/index.php file:

    ```php
    $_SERVER['MAGE_PROFILER'] = json_encode([ 'drivers' => [['output' => 'MSP\DevTools\Profiler\Driver\Standard\Output\DevTools']] ], true);
    ```

    Or another profiler

    [Mgt Developer Toolbar](https://github.com/mgtcommerce/Mgt_Developertoolbar) for Magento 2

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

4. To manually show recently modified files

```bash
find ./ -type f -mtime -1
find ./ -printf '%TY-%Tm-%Td %TT %p\n' | sort -r

curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/dev/today_modified | bash -s
curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/dev/recently_modified | bash -s
```

Compare a remote file with a local file

```bash
curl -s https://raw.githubusercontent.com/swissup/swissup.github.io/master/m2/dev/index.md | diff m2/dev/index.md -
```

### Setup Wizard - Authentication errors

1. `ci.swissuplabs.com` packages required authentication

```bash
composer config -a --file="var/composer_home/auth.json" http-basic.ci.swissuplabs.com "DOMAIN" "IDENTITY_KEY"
```

2. `repo.magento.com` packages required authentication

```
Admin -> System -> Web Setup Wizard -> System Config - put Your Magento keys "Public Access Key" & "Private Access Key"
```
You can get keys from Your [Magento account page](https://marketplace.magento.com/customer/accessKeys/)

### Cool [patch applying](https://github.com/vaimo/composer-patches)

[Vaimo Composer Patches](https://github.com/vaimo/composer-patches)


Example - Composer 'elasticsearch fail' patch for Magento 2.3.1

1. Install composer patcher
>Applies a patch from a local or remote file to any package that is part of a given composer project.

```bash
    composer require vaimo/composer-patches
```

1a.Get file checksum

```bash
    sha1sum 1.patch
```

2. In composer.json add patch configuration

```json
        "extra": {
            "magento-force": "override",
            "patches": {
                "magento/framework": {
                    "Fix: https://github.com/magento/magento2/issues/21916": {
                        "source": "https://raw.githubusercontent.com/ConvertGroupsAS/magento2-patches/master/Patch-Magento_Framework-M2.3.1-fix-elasticsearch-generation.patch",
                        "sha1": "e9354feadd0fde8a2edef3ab6865574a0b7254c9",
                        "version": [
                            ">=102.0.1 <102.0.2"
                        ]
                    }
                }
            }
        }
```

Show and apply patches

```bash
    composer config extra
    composer update vaimo/composer-patches
```