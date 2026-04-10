---
layout: default
title: ProLabels Use Cases
description: product labels use cases
category: ProLabels
keywords: magento2, prolabels missing, no styles at zemez theme, zemez theme
---

# Use Cases
{:.no_toc}

* TOC
{:toc}

### ProLabels do not appear at category page

Some third-party themes use the old way to render images on category listing, so product labels won't be initialized there. To fix it apply the following:

 -  open `app/design/frontend/<vendor>/<theme>/Magento_Catalog/templates/product/list.phtml`

 -  find a similar code:

    ```php
    <div class="product-item-info" data-container="product-grid">
    ```

 -  add code snippet after product-item-info <div> so the result will look like that:

    ```php
    <div class="product-item-info" data-container="product-grid">
      <?php $this->helper('\Swissup\ProLabels\Helper\Catalog')->getLabels($_product); ?>
      <?php echo $this->helper('\Swissup\ProLabels\Helper\Catalog')->toHtmlProductLabels($_product->getId());
      ?>
    ```

 -  save the changes and flush cache.

### Missing styles at Zemez theme

Because of its implementation Zemez theme does not include styles from `web/css/source/_module.less`.

So to fix missing styles you have to create additional less-file and xml layout update.

Go to your theme directory. It can be either in `vendor` directory or in `app/design/frontend`. Create files:

 -  `Swissup_ProLabels/web/css/prolabels.less`

    ```css
    @media-common: true;

    @import './source/_module.less';
    ```

 -  `Swissup_ProLabels/layout/default.xml`

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <head>
            <css src="Swissup_ProLabels::css/prolabels.css" />
        </head>
    </page>
    ```

When both files created redeploy theme static content and flush Magento cache.
