---
layout: default
title: Facebook Like Button installation
description: Facebook like button module installation on Magento 1.x
keywords: " facebook magento extension, facebook magento integration,add facebook like button to website, add facebook share button to website, magento like button facebook "
category: Facebook Like Button
---

# Facebook Like Button installation instructions

Please follow next steps to complete the installation:

 1. Navigate to _Admin > Tools > Compilation_ and deactivate the compilation
    mode for your store.
 2. Check if your Magento store cache is enabled.
 3. Unpack all files from extension archive into your magento store root
    directory.
 4. Refresh your magento store cache.
 5. Logout from your store admin and then login back, to refresh your admin
    user access rights.

Navigate to _System > Configuration > Templates-Master > Facebook Like Button_ and enable extension for any store you need. Configure FaceBook Like Button module according to your needs.

Set up new Facebook Application at [http://www.facebook.com/developers/createapp.php](http://www.facebook.com/developers/createapp.php).

Code listed bellow should be added to _view.phtml_ file in order to display
Facebook like button. For example _app/design/frontend/[package]/[theme]/template/catalog/product/view.phtml_.

```php
    <?php echo $this->getLayout()->createBlock('core/template')->setTemplate('facebooklb/like.phtml')->toHtml(); ?>
```

Code listed bellow should be added to list.phtml file in order to display
social buttons. For example
_app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml_.

```php
    <?php echo Mage::helper('facebooklb')->getCategoryLikeButton($_product) ?>
```

### Update extension from 2.0.2 to 2.1.0

After updating extension you can delete deprecated files and directories to
keep your magento instance clean and tidy:

```
app/code/community/TM/FacebookLB/Adminhtml/Model/System/Config/Source/Font.php
app/design/frontend/base/default/layout/FacebookLB.xml
app/design/frontend/base/default/template/facebooklb
```

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

