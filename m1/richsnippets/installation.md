---
layout: default
title: Rich Snippets
description: magento snippet module installation
keywords: >
    magento quick view extension, magento rich snippet extension, magento
    google rich snippets extension, google rich snippets magento extension, google
    rich snippets tool
category: Rich Snippets
---

# Rich Snippets installation instructions

Please follow next steps to complete the installation:

1. Navigate to `Admin > Tools > Compilation` and deactivate the compilation
mode for your store.
2. Check if your Magento store cache is enabled.
3. Unpack all files from extension archive into your magento store root directory.
4. Refresh your magento store cache.
5. Logout from your store admin and then login back, to refresh your admin user
access rights.

Navigate to `System > Configuration > Templates-Master > Rich Snippets` and
enable extension for any store you need.

### Upgrade from version 1.x.x

In order to upgrade from Rich Snippets versions 1.x.x, please follow next steps:

*   Go to your theme view.phtml file. For instance, app/design/frontend/argento/default/template/catalog/product/view.phtml.

*   Remove the following lines:

    ```html
    <div itemscope itemtype="http://schema.org/Product">

    <!-- Rich snippets block -->
        <?php echo $this->getLayout()
             ->createBlock('richsnippets/product')
             ->setTemplate('tm/richsnippets/richsnippets_view.phtml')
             ->toHtml() ?>
    <!-- Rich snippets block -->
    </div>
    ```

*   Find the following code snippets and remove:

    ```html
    itemprop="name"
    itemprop="description"
    ```

*   Or restore your original theme view.phtml if no other changes were made.

* Copy Rich Snippets 2.0 folder content to your store root.
* Go to `System > Configuration > Templates Master > RichSnippets` and set
`Enabled`.
* Fill needed data 8.
    * Choose “JSON Format” for invisible block with your store snippets.
    * Choose “Microdata Format” for visible block. Please notice if you use
    `TM_EasyTabs` extension, it will appear in the bottom of `Review` Tab.
    If you use the default product page layout, it will appear at the
        bottom of `Additional Information` block.

That's all. Navigate to your store and check how it looks.

#### After you install an extension you can go to:

* [Support](https://swissuplabs.com/contacts/)
* [Forum](https://swissuplabs.com/magento-forum/)