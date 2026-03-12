---
layout: default
title: Easy Banners upgrade instructions
category: Easy Banners
---

# Upgrade Instructions

### Version 1.1.0 - 1.2.0

 1. Backup all changes you've made
 2. Put the store to the maintenance mode
 3. Unpack new Easybanner over the old one
 4. Run upgrades:

    ```bash
    # remove old css file
    rm app/code/Swissup/Easybanner/view/frontend/web/css/easybanner.css

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/
    # for magento 2.2.x
    rm -rf pub/static/_requirejs var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/ generated/code/

    php bin/magento setup:static-content:deploy
    ```

5. That's all. You are now using Easybanners 1.2.0
