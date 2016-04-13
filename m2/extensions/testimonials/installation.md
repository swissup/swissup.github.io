---
layout: default
title: Testimonials Installation
description: magento testimonials module installation
keywords: " magento testimonials extension "
category: Testimonials
---

# Testimonials installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>/app/code`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Testimonials
    bin/magento setup:upgrade
    ```

That's all. Now you can add testimonials from admin in [Testimonials Grid][testimonials_grid] and place widgets [Widgets and Blocks][widgets_and_blocks]

#### After you install an extension you can go to:

* [Testimonials Grid][testimonials_grid]
* [Widgets and Blocks][widgets_and_blocks]
* [Settings][settings]

[testimonials_grid]: /m2/testimonials/#testimonials-grid
[widgets_and_blocks]: /m2/testimonials/widgets-and-blocks
[settings]: /m2/testimonials/#settings
