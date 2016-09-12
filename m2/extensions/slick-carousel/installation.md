---
layout: default
title: Slick Carousel Installation
description: How to install Slick Carousel for Magento 2
keywords: slick carousel installation, slider installation
category: SlickCarousel
---

# Installation

 1. Unpack extension archive into `<magento_root>`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    # enable SlickCarousel
    php bin/magento module:enable Swissup_SlickCarousel

    # run magento upgrade scripts
    php bin/magento setup:upgrade

    # regenerate static content
    rm -rf pub/static/_requirejs var/view_preprocessed
    bin/magento setup:static-content:deploy
    ```

That's all. Go ahead and [create your first slick carousel](../usage/#basic-usage)

##### Next up

- [Back to docs homepage](../)
- [Usage Examples](../usage/)
