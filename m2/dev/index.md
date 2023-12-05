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
git checkout 2.4.6 && composer install
```

Now, open magento in browser and proceed installation. When magento is isntalled and
everything work as expected, you cna install sample data and swissup modules:

```bash
composer config repositories.magento composer https://repo.magento.com/ &&\
bin/magento sampledata:deploy
```

### Opensearch

Remove outdated plugins:

```
sudo /usr/share/opensearch/bin/opensearch-plugin remove analysis-icu &&\
sudo /usr/share/opensearch/bin/opensearch-plugin remove analysis-phonetic
```

Install new plugin version:

```
sudo /usr/share/opensearch/bin/opensearch-plugin install analysis-icu &&\
sudo /usr/share/opensearch/bin/opensearch-plugin install analysis-phonetic
```

Allow unsecure connections:

Add the following line to `/etc/opensearch/opensearch.yml`:

```
plugins.security.disabled: true
```

Run opensearch:

```
sudo service opensearch start
```

Check status:

```
curl -XGET http://localhost:9200 -u 'admin:admin' --insecure
```

Run reindex:

```
bin/magento indexer:reindex
```

### Install Swissup modules

This command will download all modules, enable them and run `setup:upgrade` command.

```bash
composer config repositories.swissup composer https://docs.swissuplabs.com/packages/ &&\
composer require\
    swissup/module-abandoned-cart\
    swissup/module-address-autocomplete\
    swissup/module-address-field-manager\
    swissup/module-ajaxlayerednavigation\
    swissup/module-ajaxpro\
    swissup/module-ajaxsearch\
    swissup/module-akismet\
    swissup/module-amp\
    swissup/module-askit\
    swissup/module-attributepages\
    swissup/module-breeze\
    swissup/module-breeze-integrations\
    swissup/module-checkout\
    swissup/module-checkout-cart\
    swissup/module-checkout-fields\
    swissup/module-checkout-success\
    swissup/module-checkout-registration\
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
    swissup/module-email-templates\
    swissup/module-fblike\
    swissup/module-featured-attributes\
    swissup/module-field-manager\
    swissup/module-firecheckout\
    swissup/module-firecheckout-integrations\
    swissup/module-font-awesome\
    swissup/module-font-awesome-5\
    swissup/module-gdpr\
    swissup/module-gdpr-askit\
    swissup/module-gdpr-reviewreminder\
    swissup/module-gdpr-testimonials\
    swissup/module-geoip\
    swissup/module-highlight\
    swissup/module-hover-gallery\
    swissup/module-hreflang\
    swissup/module-helpdesk\
    swissup/module-image\
    swissup/module-knowledge-base\
    swissup/module-lightboxpro\
    swissup/module-maintenance\
    swissup/module-marketplace\
    swissup/module-navigationpro\
    swissup/module-orderattachment\
    swissup/module-pagespeed\
    swissup/module-pdf-invoice\
    swissup/module-pro-labels\
    swissup/module-pro-labels-configurable-product\
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
    swissup/module-social-core\
    swissup/module-social-login\
    swissup/module-sold-together\
    swissup/module-sold-together-email\
    swissup/module-sold-together-import-export\
    swissup/module-stickyfill\
    swissup/module-subscribe-at-checkout\
    swissup/module-subscription-checker\
    swissup/module-suggestpage\
    swissup/module-swiper\
    swissup/module-taxvat\
    swissup/module-testimonials\
    swissup/module-tfa\
    swissup/module-theme-editor\
    swissup/module-theme-editor-swissup-absolute\
    swissup/module-theme-editor-argento-essence\
    swissup/module-theme-editor-argento-flat\
    swissup/module-theme-editor-argento-force\
    swissup/module-theme-editor-argento-home\
    swissup/module-theme-editor-argento-pure2\
    swissup/module-theme-editor-argento-mall\
    swissup/module-theme-editor-argento-marketplace\
    swissup/module-theme-editor-argento-luxury\
    swissup/module-theme-editor-argento-stripes\
    swissup/module-tippyjs\
    swissup/theme-frontend-absolute\
    swissup/theme-frontend-argento-blank\
    swissup/theme-frontend-argento-essence\
    swissup/theme-frontend-argento-flat\
    swissup/theme-frontend-argento-force\
    swissup/theme-frontend-argento-home\
    swissup/theme-frontend-argento-pure2\
    swissup/theme-frontend-argento-mall\
    swissup/theme-frontend-argento-marketplace\
    swissup/theme-frontend-argento-luxury\
    swissup/theme-frontend-argento-stripes\
    swissup/theme-frontend-argentobreeze-blank\
    swissup/theme-frontend-argentobreeze-force\
    swissup/theme-frontend-argentobreeze-stripes\
    swissup/theme-frontend-breeze-blank\
    swissup/theme-frontend-breeze-evolution\
    --prefer-source &&\
bin/magento setup:upgrade --safe-mode=1
```
{:.scroll}

#### Short variant (for developer only)

```bash
(curl -s https://gist.githubusercontent.com/0m3r/954fc98bda36f90e4580e7eee641cc05/raw/ccafd49f4fe0b0879357fda6d1ba39090be2436b/install.bash > install.bash) && chmod +x install.bash && ./install.bash && rm -rf install.bash
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
for module in *; do cd $module && ([ -d ".git" ] && git checkout master && git pull) && cd ../; done;
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
    bin/magento setup:upgrade --safe-mode=1
    ```

2. [Magento Chrome Toolbar for MSP DevTools](https://github.com/magespecialist/mage-chrome-toolbar)

    - Just install from [Chrome WebStore](https://chrome.google.com/webstore/detail/magespecialist-devtools-f/odbnbnenehdodpnebgldhhmicbnlmapj?authuser=3).
    Now you have the Chrome extension, next step is to install and configure the Magento extension.

    - Run commands

    ```bash
    composer require --dev msp/devtools
    php bin/magento cache:flush
    php bin/magento cache:disable full_page
    php bin/magento setup:upgrade --safe-mode=1
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

    bin/magento setup:upgrade --safe-mode=1
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

5. [Yireo ExtensionChecker](https://github.com/yireo/Yireo_ExtensionChecker)

This extension validates the code of other extensions and is complementary to static code analysis tools like PHPCS.

###### Installation
```bash
composer require --dev yireo/magento2-extensionchecker
bin/magento module:enable Yireo_ExtensionChecker
```

###### Usage
```bash
bin/magento yireo_extensionchecker:scan Swissup_Email
```

###### Which Magento version matches which package?
```bash
curl -s https://gist.githubusercontent.com/0m3r/eff7ff873713e7e7223f08c1e7020f35/raw/fd3c27907dbb0bd23ba33ca70cc295b8700647a7/detector.sh | bash -s 2.2.0,2.3.0 magento/framework,magento/module-store

>composer require magento/framework:^101.0|^102.0
>composer require magento/module-store:^100.2|^101.0
>composer require magento/framework:^101.0|^102.0,magento/module-store:^100.2|^101.0

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

### [Patch applying with composer patches](https://github.com/vaimo/composer-patches)

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
Or you can try to [add vaimo/composer-patches from console](https://gist.github.com/0m3r/16241092b5839345216dcdb1408baaae).

```bash
curl -s https://gist.githubusercontent.com/0m3r/16241092b5839345216dcdb1408baaae/raw/add_vaimo_patch.bash | bash -s "vendor/module-package" "Path title #1" http://re.ro/path.diff
```

Show and apply patches

```bash
    composer config extra
    composer update vaimo/composer-patches
```

#### Applying commit patch with tool patch

```bash
curl -s https://github.com/magento/magento2/commit/dfdbe7cc4b94c103ab66383577e13b91de395dff.patch | patch -p5 -d ~/public_html/vendor/magento/framework/
patching file Mail/Message.php
```
