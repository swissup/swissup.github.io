---
layout: default
title: Social Suite Configuration
description: magento social suite module configuration
keywords: >
  magento social media extension, magento social login extension,
  magento social media, magento social media plugin, magento social share,
  magento social share extension, magento facebook login
category: Social Suite
---

# Social Suite configuration

1.  [Basic Setup](#basic-setup)
2.  [API Creation](../api/)
    -   [Google API Creation](../api/google/)
    -   [Facebook API creation](../api/facebook/)
    -   [Twitter API creation](../api/twitter/)
    -   [Yahoo API creation](../api/yahoo/)
3.  [General configurable options](../options/)
    -   [General configuration](../options/general-configuration/)
    -   [Share Reward Discount code](../options/share-reward-discount-code/)
    -   [Facebook and Google Login settings](../options/facebook-and-google-login/)
    -   [Facebook share and Comment settings](../options/facebook-share-and-comment/)
    -   [Using social buttons on the product page](../options/using-social-buttons-on-the-product-page/)
    -   [Using social buttons on the category products page](../options/using-social-buttons-on-the-category-products-page/)
    -   [Using social buttons on the category page](../options/using-social-buttons-on-the-category-page/)
    -   [Using social buttons on the store page](../options/using-social-buttons-on-the-store-page/)
    -   [Using social buttons on CMS page](../options/using-social-buttons-on-cms-page/)

### Basic Setup

1.  Navigate to `System > Configuration > Templates-Master > Social Suite` and
enable extension for any store you need.
2.  Set Up New [Facebook Application](https://developers.facebook.com/apps){:target="_blank"}
3.  Set Up New [Google  Application](https://code.google.com/apis/console/#access){:target="_blank"}
4.  You will need to edit some
    template files:
    *   Code listed below should be added to **phtml** file in order to display
        social buttons at **PRODUCT PAGE**.
        For example `app/design/frontend/[package]/[theme]/template/catalog/product/view.phtml`

        ```php
        <?php echo $this->getLayout()->createBlock('core/template')->setTemplate('tm/socialsuite/facebook_like/like.phtml')->toHtml(); ?>
        ```
    *   Code listed below should be added to phtml file in order to display
        social buttons at **CATEGORY PAGE**. For example `app/design/frontend/[package]/[theme]/template/catalog/product/list.phtml`

        ```php
        <?php echo Mage::helper('socialsuite')->getCategoryLikeButton($_product) ?>
        ```

___

#### After you configure an extension you can check:

*   [Google API Creation](../api/google/)
*   [Facebook API creation](../api/facebook/)
*   [Twitter API creation](../api/twitter/)
*   [Yahoo API creation](../api/yahoo/)
*   [General configurable options](../options/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)