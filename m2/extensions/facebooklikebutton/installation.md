---
layout: default
title: Facebook Like Button installation
description: Facebook Like Button installation instructions
keywords: "Facebook Like Button installation"
category: Facebook Like Button
---

# Facebook Like Button installation instructions

Please follow next steps to complete the installation:

 1. Unpack extension archive into `<magento_root>`.
 2. Run the following commands in terminal:

    ```bash
    cd <magento_root>
    bin/magento module:enable Swissup_Core Swissup_SubscriptionChecker Swissup_Fblike
    bin/magento setup:upgrade
    ```

###### Add Like Button To Catalog
add code to any place in catalog list.phtml:

```php
<?php echo $this->helper('Swissup\Fblike\Helper\Like')->getProductLike($_product); ?>
```

That's all. Now you need [Create a New Facebook App][facebook_app] and configure extension in admin panel [Configuration][configuration]

#### After you install an extension you can go to:

* [Create a New Facebook App][facebook_app]
* [Configuration][configuration]
* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

[facebook_app]: /m2/extensions/facebooklikebutton/app/
[configuration]: /m2/extensions/facebooklikebutton/configuration/

