---
layout: default
title: Argento upgrade instructions
description: Argento upgrade instructions
category: Argento
---

# Upgrade Instructions

### Version 0.9.0 - 0.9.1

 1. Backup all changes you've made
 2. Put the store to the maintenance mode
 3. [Unpack new Argento version][unpack_package] over the old one
 4. Run upgrades:

    ```bash
    bin/magento cache:flush
    bin/magento setup:upgrade

    # remove deprecated files
    rm -rf app/design/frontend/Swissup/argento-blank/Magento_LayeredNavigation

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

### Version 0.8.1 - 0.9.0

 1. Backup all changes you've made
 2. Put the store to the maintenance mode
 3. [Unpack new Argento version][unpack_package] over the old one
 4. Enable new extensions

    ```bash
    bin/magento module:enable\
        Swissup_Attributepages\
        Swissup_Easybanner

    bin/magento cache:flush
    bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs
    rm -rf var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

 5. Update cms pages and blocks:

    Unfortunately this changes is very hard to apply in manual mode, so we recommend
    you to use automated [Argento Installer][run_installer] to backup previous
    and create new theme content.

    The main reasons for these massive changes:

    - We switched from our own simple 16 columns grid system to 12 columns
      Boostrap powered version
    - A new Easybanner content was added to the homepage instead of static banners
    - Brands slider improves it's settings for manual scrolling mode

[unpack_package]: /m2/argento/installation/#unpack-argento-package-into-magento-root-folder
[run_installer]: /m2/argento/installation/#setup-configuration-and-theme-content
