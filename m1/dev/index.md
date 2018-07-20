---
layout: default
title: Magento 1 development documentation
;sidebar: sidebar.md
---

# Dev docs

[**Before start**](#before-start)

 - [Directory structure](#directory-structure)

[**Required software**](#required-software)

 - [Mysql](#mysql)
 - [Php](#php)
 - [Apache](#apache)
 - [Git](#git)
 - [Composer](#composer)
 - [Satis](#satis)
 - [Node.js and gulp.js](#nodejs-and-gulpjs)

[**Magento installation**](#magento-installation)

 - [Magento](#magento)
 - [TM modules](#tm-modules)

[**Module development**](#module-development)

 - [Module sort order](#module-sort-order)
 - [Making release](#making-release)
 - [Keep the modules up to date](#keep-the-modules-up-to-date)
 - [Updating TM packages repository](#updating-tm-packages-repository)
 - [Magento Extension Quality Program Coding Standard](#magento-extension-quality-program-coding-standard)
 - [PHP Mess Detector](#php-mess-detector)
 - [PHP Coding Standards Fixer](#php-coding-standards-fixer)
 - [PHP Copy/Paste Detector](#php-copypaste-detector-phpcpd)
 - [PHPLint](#phplint)
 - [PHPStan](#phpstan)
 - [ESLint](#eslint)
 - [JSCS](#jscs)

[**Miscellaneous**](#miscellaneous)

 - [Terminal](#terminal)
 - [Sublime text editor](#sublime-text-editor)
 - [Open VPN in Ubuntu](#open-vpn-in-ubuntu)

## Before start

#### Directory structure
You can use the following directory structure:

```
D:
└── www
    ├── dev
    |   ├── satis               — Library that is used to build packages repository
    |   └── composer            — Manage module dependencies
    ├── logs                    — Apache, php, mysql logs
    └── public                  — Web server public folder
        ├── magento
        |   ├── htdocs          — Magento repository
        |   ├── vendor          — Magento modules
        |   └── composer.json   — List of modules to install with composer
        ├── packages            — Packages repository built with satis
        └── phpmyadmin
```

## Required software

#### Mysql

 1. [Mysql server](http://dev.mysql.com/downloads/installer/)
 2. [HeidiSql client](http://www.heidisql.com/)
 3. [PhpMyAdmin](http://www.phpmyadmin.net/) - Unpack it to `www/public/phpmyadmin`
    directory

#### Php

 1. Download and unpack [binaries](http://windows.php.net/downloads/releases) to
    `C:\php` folder.
 2. Rename `php.ini-development` to `php.ini`
 3. Apply the following changes to `php.ini`:

    ```ini
    max_execution_time = 600
    memory_limit = 512M
    error_reporting = E_ALL
    error_log = "D:\www\logs\php_error.log"
    post_max_size = 256M
    doc_root = d:\www\public
    extension_dir = "ext"
    upload_max_filesize = 256M
    extension=php_curl.dll
    extension=php_gd2.dll
    extension=php_intl.dll
    extension=php_mbstring.dll
    extension=php_mysqli.dll
    extension=php_openssl.dll
    extension=php_pdo_mysql.dll
    date.timezone = 'America/Los_Angeles'
    ```

 4. Add `C:\php` folder to system PATH

#### Apache
 1. [Download](http://www.apachelounge.com/download/VC11/binaries/httpd-2.4.12-win32-VC11.zip)
    and unpack binaries to `/c/Apache24`
 2. Find the following settings in `conf/httpd.conf` and change them as shown below:

    ```apacheconf
    ServerRoot "c:/Apache24"
    Listen 80
    # LoadModule cgi_module modules/mod_cgi.so
    LoadModule rewrite_module modules/mod_rewrite.so
    ServerName your_local_ip_address:80
    DocumentRoot "D:/www/public"
    AllowOverride All
    Require all granted
    <Directory "D:/www/public">
    DirectoryIndex index.php index.html
    ErrorLog "D:/www/logs/apache_error.log"
    ```

 3. Add the following settings to the bottom of the file:

    ```apacheconf
    LoadModule php5_module "c:/php/php5apache2_4.dll"
    AddType application/x-httpd-php .php
    PHPIniDir "C:/php"
    ```

#### Git

 1. [Download and install](http://git-scm.com/)

    - Add the git to the system PATH during installation
    - Select checkout as-is and commit as-is option

 2. Setup git

    ```bash
    git config --global user.name "FirstName LastName"
    git config --global user.email "your_email@example.com"
    git config --global core.autocrlf false
    git config --global push.default simple
    ```

 3. Setup [github](https://github.com/) account and
    [generate ssh key](https://help.github.com/articles/generating-ssh-keys)

#### Composer

 1. Install composer
    - [Windows installation](https://getcomposer.org/Composer-Setup.exe)
    - [Manual installation](https://getcomposer.org/download/). Add composer to the
    system PATH variable.

 2. [Add composer](https://github.com/settings/tokens/new) to your github
    authorized applications and copy generated token.
 3. Run the following command in terminal:

    ```bash
    composer -g config github-oauth.github.com YOUR_KEY_HERE
    ```

#### Satis

 1. Download satis

    ```bash
    cd www/dev
    composer create-project composer/satis --stability=dev --keep-vcs
    ```

 2. Add `www/dev/satis/bin` folder to system PATH variable.

#### Node.js and gulp.js

 1. Install [Node.js](http://nodejs.org/)
 2. Install Gulp.js

    ```bash
    npm install -g gulp
    ```

## Magento installation

#### Magento

 1. Clone [Speedupmate Magento repository](https://github.com/speedupmate/Magento-CE-Mirror):

    ```bash
    cd www/public/magento
    git clone git@github.com:speedupmate/Magento-CE-Mirror.git htdocs
    cd htdocs
    git checkout magento-ce-1.9.2.4
    echo '*' > .gitignore
    cp errors/local.xml.sample errors/local.xml
    ```

 2. Install [magento sample data](http://www.magentocommerce.com/download)
 3. Open `192.168.1.xxx/magento/htdocs` address in browser and install Magento
 4. Navigate to backend `System > Configuration > Developer > Template Settings`
    and set `Allow Symlinks` option to "Yes"
 5. Enable logs at `System > Configuration > Developer > Log Settings` configuration
 6. Disable cache at `System > Cache Management`

#### TM modules

 1. Create `composer.json` file and save it under `www/public/magento` folder:

    ```json
    {
        "minimum-stability": "dev",
        "require": {
            "magento-hackathon/magento-composer-installer": "3.0.*",
            "tm/argento": "*",
            "tm/attributepages": "*",
            "tm/bot-protection": "*",
            "tm/cache": "*",
            "tm/countdowntimer": "*",
            "tm/dailydeals": "*",
            "tm/easyflags": "*",
            "tm/easylightbox": "*",
            "tm/easynavigation": "*",
            "tm/firecheckout": "*",
            "tm/helpdesk": "*",
            "tm/pagespeed": "*",
            "tm/prozoom": "*",
            "tm/quickshopping": "*",
            "tm/productvideos": "*",
            "tm/recaptcha": "*",
            "tm/review-reminder": "*",
            "tm/smartsuggest": "*",
            "tm/socialsuite": "*",
            "tm/testimonials": "*"
        },
        "repositories": [
            {
                "type": "composer",
                "url": "http://tmhub.github.io/packages"
            },
            {
                "type": "composer",
                "url": "http://packages.firegento.com"
            }
        ],
        "extra": {
            "magento-root-dir": "htdocs/",
            "magento-deploystrategy": "symlink",
            "magento-force": true
        },
        "config": {
            "discard-changes": true,
            "secure-http": false
        }
    }
    ```

 2. Run the following commands from terminal with admin privileges:

    ```bash
    cd www/public/magento
    composer install
    ```

    All modules will be automatically downloaded to the `www/public/magento/vendor/tm`
    folder and symlinked into `www/public/magento/htdocs`. So you can edit files
    in both `vendor/tm` and `htdocs` folders.

## Module development

#### Module sort order
Use **two or three letters** of module code to determine the module sort order.

It's recommended to use the two letters, bacause the third letter calculation is
not accurate.

{% raw %}
<div class="mdl-typography--text-center">
  <div class="sortorder-wrapper mdl-textfield mdl-js-textfield mdl-textfield--floating-label textfield-demo">
    <input name="module_code" class="mdl-textfield__input" type="text" id="module_code" maxlength="3" pattern="[A-Z,a-z]*"/>
    <label class="mdl-textfield__label" for="module_code">Enter module code...</label>
    <code id="module_sortorder">0</code>
    <span class="mdl-tooltip" for="module_code">
      AjaxLayeredNav - aln<br/>
      AjaxPro - apr<br/>
      FireCheckout - fir
    </span>
  </div>
</div>
{% endraw %}

**For Example:**

Module Name          | Code for sortorder script | Sort Order
:--------------------|:--------------------------|-----------
AjaxLayeredNavigation| aln | 146
AjaxPro              | apr | 161
EasyTabs             | eta | 574
Full Page Cache      | fpc | 659
Firecheckout         | fir | 635

#### Making release

 1. Use [release builder script](https://github.com/swissup/gulp-release-builder)
    to generate archive.
 5. Upload the generated archive to github release.

#### Keep the modules up to date

 1. Commit all of your changes to github
 2. [Update packages repository](#updating-tm-packages-repository)
 3. Run terminal window **with admin privileges**.

    **Do not run this command if you didn't complete first or second step!**

    ```
    cd www/public/magento
    composer update
    ```

    There is a chance that something will went wrong during `composer update` command.
    In case if all modules are downloaded by composer but not deployed to the magento
    folder, use the following command:

    ```
    composer run-script post-install-cmd -vvv -- --redeploy
    ```

#### Updating TM packages repository

TM packages repository is used by composer dependency manager to download
module dependencies during `composer install` and `composer update` commands.

```bash
cd www/public

# clone repository
git clone git@github.com:tmhub/packages.git && cd packages

# update the repository and push changes:
./run.sh
```

#### [Magento Extension Quality Program Coding Standard](https://github.com/magento/marketplace-eqp)

Magento EQP Coding Standard is a set of rules and sniffs for PHP_CodeSniffer tool.
It allows automatically check your code against some of the common Magento and PHP coding issues, like:

 1. raw SQL queries;
 2. SQL queries inside a loop;
 3. direct class instantiation;
 4. unnecessary collection loading;
 5. excessive code complexity;
 6. use of dangerous functions;
 7. use of PHP superglobals;
 8. code style issues
 9. and many others.

Magento Extension Quality Program Coding Standard consists of two rulesets - MEQP1 for Magento and MEQP2 for Magento 2. Each of them contains the rules depending on the requirements of each version.

```bash
#installation
composer create-project --repository=https://repo.magento.com magento/marketplace-eqp magento-coding-standard

cd magento-coding-standard

#set installed path option
vendor/bin/phpcs --config-set installed_paths ../../..

# Check Magento extension run
vendor/bin/phpcs /path/to/your/extension --standard=MEQP1

# Check Magento 2 extension run
vendor/bin/phpcs /path/to/your/extension --standard=MEQP2

# Marketplace Technical Review
# you could run phpcs command with --severity=10 option.
vendor/bin/phpcs /path/to/your/extension --standard=MEQP2 --severity=10

# Auto code clean
vendor/bin/phpcbf /path/to/your/extension --standard=MEQP2 --no-patch
```

#### [PHP Mess Detector](https://phpmd.org/)

What PHPMD does is: It takes a given PHP source code base and look for several potential problems within that source. These problems can be things like:

 1. Possible bugs
 2. Suboptimal code
 3. Overcomplicated expressions
 4. Unused parameters, methods, properties

```
wget -c http://static.phpmd.org/php/latest/phpmd.phar
sudo chmod a+x phpmd.phar
sudo mv phpmd.phar /usr/local/bin/phpmd
phpmd  ~/tm/ajax-search text  /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Php/_files/phpmd/ruleset.xml
phpmd  ~/swissup/ajaxsearch text  /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Php/_files/phpmd/ruleset.xml
wget -c https://raw.githubusercontent.com/kubaceg/phpmd-magento/master/ruleset.xml -O ruleset1.xml
phpmd  ~/swissup/ajax-search text ruleset1.xml
```

[How To Suppress warnings](https://phpmd.org/rules/index.html)

```

 /**
  * @SuppressWarnings(PHPMD)
  */

```

Typical warnings

 * [UnusedFormalParameter](https://phpmd.org/rules/unusedcode.html#unusedformalparameter)
 * [Avoid unused parameters such as](https://github.com/swissup/ajaxpro/blob/d5aaf01a9aca1590c8252562ccd3337b7347f412/Block/Init.php#L35)

```

 /**
  *
  * @return string
  * @SuppressWarnings(PHPMD.UnusedFormalParameter)
  */

```

 * [CyclomaticComplexity](https://phpmd.org/rules/codesize.html#cyclomaticcomplexity)

```

 /**
  * @SuppressWarnings(PHPMD.CyclomaticComplexity)
  */

```

 * [NPathComplexity](https://phpmd.org/rules/codesize.html#npathcomplexity)

```

 /**
  * @SuppressWarnings(PHPMD.NPathComplexity)
  */

```

#### [PHP Coding Standards Fixer](http://cs.sensiolabs.org/)

The PHP Coding Standards Fixer tool fixes most issues in your code when you want to follow the PHP coding standards as defined in the PSR-1 and PSR-2 documents and many more.

```
wget http://cs.sensiolabs.org/download/php-cs-fixer-v2.phar -O php-cs-fixer
sudo chmod a+x php-cs-fixer
sudo mv php-cs-fixer /usr/local/bin/php-cs-fixer
php-cs-fixer fix  ~/tm/ajaxpro --dry-run
php-cs-fixer fix  ~/tm/ajaxpro --dry-run --rules=@PSR2
php-cs-fixer fix  ~/tm/ajaxpro
```

#### [PHP Copy/Paste Detector (PHPCPD)](https://github.com/sebastianbergmann/phpcpd)

phpcpd is a Copy/Paste Detector (CPD) for PHP code.

```
$ wget https://phar.phpunit.de/phpcpd.phar
$ chmod +x phpcpd.phar
$ mv phpcpd.phar /usr/local/bin/phpcpd

# Usage Example
$ phpcpd ~/tm/ajaxpro
```

#### [PHPLint](https://github.com/wayneashleyberry/phplint)

phplint is a node wrapper around the native php linter that allows for parallel linting and integration with build systems like Grunt, Gulp and more.

http://www.icosaedro.it/phplint/

```
$ npm i -g phplint

# Usage Example
$ phplint ~/tm/ajaxpro/**/*.php
$ phplint ~/tm/ajaxpro/**/*.phtml
```

Native php lint

```
$find ~/tm/ajaxpro -type f -name "*.php" -exec php -d display_errors=1 -l {} \;
$find ~/tm/ajaxpro -type f -name "*.phtml" -exec php -d display_errors=1 -l {} \;
```

#### [PHPStan](https://github.com/phpstan/phpstan)

PHPStan focuses on finding errors in your code without actually running it. It catches whole classes of bugs even before you write tests for the code.

https://github.com/phpstan/phpstan

```
$ wget -O phpstan.phar https://github.com/phpstan/phpstan/releases/download/0.8.4/phpstan.phar
$ chmod +x phpstan.phar
$ mv phpstan.phar /usr/local/bin/phpstan

# Usage Example
$ phpstan analyze -l 4 ~/tm/ajaxpro
```

#### [ESLint](https://eslint.org/docs/user-guide/getting-started)

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

 *  [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)
 *  [ESLint Command options](https://eslint.org/docs/user-guide/command-line-interface)
 *  [Magento JavaScript coding standard](http://devdocs.magento.com/guides/v2.0/coding-standards/code-standard-javascript.html)
 *  [Magento ESLint Rules](https://github.com/magento/magento2/blob/develop/dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc-magento)

```
# Install
$ npm install -g eslint

# Usage Example
$ eslint --ext .jsx,.js --config /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc-magento ~/swissup/ajaxpro/view/**
# Auto fix
eslint --fix --ext .jsx,.js --config /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Js/_files/eslint/.eslintrc-magento ~/swissup/ajaxpro/view/**
```

If you want to disable eslint and jscs validation for some third party js file

```
diff --git a/view/frontend/web/js/typeaheadbundle.js b/view/frontend/web/js/typeaheadbundle.js
index bb0c8ae..81d8307 100644
--- a/view/frontend/web/js/typeaheadbundle.js
+++ b/view/frontend/web/js/typeaheadbundle.js
@@ -3,6 +3,8 @@
  * https://github.com/twitter/typeahead.js
  * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
  */
+/* eslint-disable */
+/* jscs:disable */

 (function(root, factory) {
     if (typeof define === "function" && define.amd) {
@@ -2448,4 +2450,6 @@
             return $el.length ? $el : null;
         }
     })();
-});
\ No newline at end of file
+});
+/* eslint-enable */
+/* jscs:enable */

```

#### [JSCS](http://jscs.info/overview)

JSCS is a code style linter and formatter for your style guide

*  [JSCS Overview](http://jscs.info/overview#installation)
*  [Magento JavaScript coding standard](http://devdocs.magento.com/guides/v2.0/coding-standards/code-standard-javascript.html)
*  [Magento JSCS Rules](https://github.com/magento/magento2/blob/develop/dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc)

```
# Install
$ npm install jscs -g

# Usage Example
$ jscs ~/swissup/ajaxpro/view/** --extract .phtml --config /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc
# Auto fix
jscs ~/swissup/ajaxpro/view/** --fix --extract .phtml --config /var/www/local.magentocommerce2.com/htdocs/dev/tests/static/testsuite/Magento/Test/Js/_files/jscs/.jscsrc
```

## Miscellaneous

#### Terminal

[ConEmu](http://www.fosshub.com/ConEmu.html) is nice one.

Using GitBash in ConEmu:

Navigate to `Settings > Startup > Tasks > New` and create new tasks:

 1. GitBash

    ```
    Parameters: /dir "D:\www"
    Commands: "C:\Program Files (x86)\Git\bin\sh.exe" --login -i
    ```

 2. GitBash with admin privileges:

    ```
    Parameters: /dir "D:\www"
    Commands: "C:\Program Files (x86)\Git\bin\sh.exe" --login -i -new_console:a
    ```

#### Sublime text editor

1. [Download and install](http://www.sublimetext.com/3) text editor
2. Install [Package Control](https://packagecontrol.io/installation)
3. [Download sublime setting files](https://gist.github.com/vovayatsyuk/e8257a707b841c78a794)
  and place them into `%APPDATA%/Sublime Text 3/Packages/User`

#### Open VPN in Ubuntu

 1. Run command in terminal to install required apps:

    ```
    sudo apt-get install network-manager-openvpn-gnome openvpn
    ```

 2. Go to VPN connections settins and configure VPN. In `Connection type`
    drop-down select 'Open VPN'.
 3. In Advanced settings check `Use LZO data compression` option (tab
    'General').
