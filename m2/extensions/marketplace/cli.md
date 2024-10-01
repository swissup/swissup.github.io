---
layout: default
title: Marketplace CLI
description: Marketplace CLI
category: Marketplace
---

# Marketplace CLI

Command-line interface - is the fastest way to work with Marketplace.

Usually you will need to run up to six commands:

```bash
# Commonly used
bin/magento marketplace:auth:import                 # import auth data from COMPOSER_HOME folder
bin/magento marketplace:channel:enable <channel>    # enable channel and enter auth credentials if needed
bin/magento marketplace:package:require <package>   # download the package, enable it, deploy static ontent
bin/magento marketplace:package:install <package>   # run module installer (if module comes with it)
bin/magento marketplace:package:update <package>    # update the package

# Rarely used
bin/magento marketplace:channel:disable <channel>   # disable channel
bin/magento marketplace:package:remove <package>    # remove the package
```

All other commands are useful to debug some issues. They are not needed usually.

* TOC
{:toc}

## Authorization commands

### marketplace:auth

This commands allows to set auth data for private repository. Useful when installing
some custom module or theme:

```bash
composer config repositories.<id> vcs <https://github.com/repo/url.git>
bin/magento marketplace:auth <github-oauth.github.com> <token> # https://github.com/settings/tokens/new?scopes=repo
bin/magento marketplace:package:require <package/name>
```

### marketplace:auth:import

Import auth data from auth.json files in COMPOSER_HOME and MAGENTO_ROOT folders

Usage: `bin/magento marketplace:auth:import`

### marketplace:auth:path

Show path to auth.json file

Usage: `bin/magento marketplace:auth:path`

### marketplace:auth:check

Check the auth credentials for the selected channel.

Usage: `bin/magento marketplace:auth:check magento`

### marketplace:auth:set

Set the credentials for selected channel.

Usage: `bin/magento marketplace:auth:set magento`

### marketplace:auth:show

Show the credentials for selected channel.

Usage: `bin/magento marketplace:auth:show magento`

### marketplace:auth:key:add

Add auth key for the selected channel, if channel uses keys based authorization.

Usage: `bin/magento marketplace:auth:key:add swissuplabs <key>`

### marketplace:auth:key:remove

Remove auth key from the credentials info.

Usage: `bin/magento marketplace:auth:key:remove swissuplabs <key>`

## Channel commands

### marketplace:channel:enable

Add selected channel to the composer.json file.

Usage: `bin/magento marketplace:channel:enable magento`

### marketplace:channel:disable

Remove selected channel from the composer.json file.

Usage: `bin/magento marketplace:channel:disable magento`

### marketplace:channel:clean

Clean the cache for selected channel.

Usage: `bin/magento marketplace:channel:clean magento`

### marketplace:channel:list

View the list of registered channels.

Usage: `bin/magento marketplace:channel:list`

## Package commands

### marketplace:package:require

Download and activate requested Magento module.

Usage: `bin/magento marketplace:package:require <package>`

### marketplace:package:remove

Deactivate and remove requested Magento module.

Usage: `bin/magento marketplace:package:remove <package>`

### marketplace:package:install

Run the installer for the requested module. If module provides an installer.

Usage: `bin/magento marketplace:package:install <package>`
Advanced usage examples:

```bash
# Run cms-page and config installers only for specified store
bin/magento marketplace:package:install <package> store=ID cms-page config

# Run all except cms-page installer for specified store
bin/magento marketplace:package:install <package> store=ID skip-cms-page
```

Known installers:

 - cms-page
 - cms-block
 - config
 - tabs
 - menu
 - slider
 - banner
 - widget

### marketplace:package:update

Update the module the the latest version.

Usage: `bin/magento marketplace:package:update <package>`

### marketplace:package:show

View the list of available module versions.

Usage: `bin/magento marketplace:package:show <package>`
