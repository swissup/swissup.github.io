---
layout: default
title: Facebook Like Button installation
description: magento facebook like button module installation
keywords: " facebook magento extension, facebook magento integration,add facebook like button to website, add facebook share button to website, magento like button facebook "
category: Facebook Like Button
---

# Facebook Like Button installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

* Navigate to `System > Configuration > Templates-Master > Facebook Like Button` and
enable extension for any store you need.

* Configure FaceBook Like Button module according to your needs.

* Set up new Facebook Application at http://www.facebook.com/developers/createapp.php.
If you are planning to use XFBML buttons, you need to edit some template files.
Change the <html xmlns:og="http://ogp.me/ns#" tag to read at
following template files:

_not_app/design/frontend/[package]/[theme]/template/page/1column.phtml
_not_app/design/frontend/[package]/[theme]/template/page/2columns-left.phtml
_not_app/design/frontend/[package]/[theme]/template/page/2columns-right.phtml
_not_app/design/frontend/[package]/[theme]/template/page/3columns.phtml

Code listed bellow should be added to view.phtml file in order to display
Facebook like button. For example `app/design/frontend/[package]/[theme]/template/catalog/product/view.phtml`.

```html
    <?php echo $this->getLayout()->createBlock('core/template')->setTemplate('facebooklb/like.phtml')->toHtml(); ?>
```

Code listed bellow should be added to list.phtml file in order to display social
buttons. For example `app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml`.

```html
    <?php echo Mage::helper('facebooklb')->getCategoryLikeButton($_product) ?>
```

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)

