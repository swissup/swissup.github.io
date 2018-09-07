---
layout: default
title: Testimonials upgrade instructions
description: Testimonials upgrade instructions
keywords: testimonials upgrade instructions
category: Testimonials
---

# Upgrade Instructions

### Version 1.0.x - 1.1.0

 1. Backup all changes you've made
 2. Put the store to the maintenance mode
 3. Unpack new Testimonials over the old one
 4. Run upgrades:

    ```bash
    # remove old css file
    rm app/code/Swissup/Testimonials/view/frontend/web/css/testimonials.css

    # activate new modules
    php bin/magento module:enable Swissup_SlickCarousel

    # run upgrades
    php bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/
    # for magento 2.2.x
    rm -rf pub/static/_requirejs var/view_preprocessed pub/static/frontend/ pub/static/adminhtml/ generated/code/

    php bin/magento setup:static-content:deploy en_US [your_locale]
    ```
5. Following files are not used anymore and can be deleted:

    ```
        Block/Adminhtml/Index.php
        Block/Adminhtml/Index/Edit.php
        Block/Adminhtml/Index/Edit/Form.php
        Block/Adminhtml/Index/Helper/Image.php
        Model/Data/Image.php
        Ui/Component/Listing/Column/Testimonials/Options.php
    ```

6. That's all. You are now using Testimonials 1.1.0
