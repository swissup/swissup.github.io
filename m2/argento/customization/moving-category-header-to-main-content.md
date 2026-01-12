---
layout: default
title: Moving category header to main content
description: Moving category header to main content
keywords: >
    categoty, header
category: Argento
---

# Moving the category header to the main content

  * [Create](http://docs.swissuplabs.com/m2/argento/customization/custom-theme/#create-custom-theme) a custom Argento theme
  * Create/add `Magento_Catalog/layout/catalog_category_view.xml` in your _custom theme_
  * Add the following content to it:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <move element="page.main.title" destination="content.top" before="-" />
            <move element="category.view.container" destination="content.top" after="page.main.title" />
        </body>
    </page>
    ```

  * Flush the store cache.
