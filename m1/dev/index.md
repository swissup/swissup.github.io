---
layout: default
title: Development documentation
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

[**Miscellaneous**](#miscellaneous)

 - [Terminal](#terminal)
 - [Sublime text editor](#sublime-text-editor)

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

