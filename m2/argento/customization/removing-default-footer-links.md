---
layout: default
title: Removing default footer links
description: Removing default footer links
keywords: >
    footer, links
category: Argento
---

# Magento 2: Removing default footer links
---

### Theme Editor

You can remove the whole footer links block using theme editor: [Footer Layout](/m2/argento/customization/theme-editor/#footer-layout)

### Layout XML

  * [Create](/m2/argento/customization/custom-theme/#create-custom-theme) a custom Argento theme
  * Create/add `Magento_Theme/layout/default.xml` in your _custom theme_
  * Add following content to it:
    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <!-- Privacy policy -->
            <referenceBlock name="privacy-policy-link" remove="true"/>

            <!-- Search terms -->
            <referenceBlock name="search-term-popular-link" remove="true"/>

            <!-- Advanced search -->
            <referenceBlock name="catalog-search-advanced-link" remove="true"/>

            <!-- Guest form link -->
            <referenceBlock name="sales-guest-form-link" remove="true"/>

            <!-- Swissup Sitemap foter link -->
            <referenceBlock name="sitemap-link-footer" remove="true"/>
        </body>
    </page>
    ```
