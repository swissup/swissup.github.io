---
layout: default
title: Change page layout
description: How to change category and product page layouts
keywords: >
    argento layout, change layout, modify layout, category layout,
    product page layout
category: Argento

gallery:
  - href: /images/m2/argento/customization/change-page-layout/3columns-category.png
    src: /images/m2/argento/customization/change-page-layout/3columns-category-small.png
    w: 990
    h: 990
    title: Three columns layout at category page
  - href: /images/m2/argento/customization/change-page-layout/2columns-product.png
    src: /images/m2/argento/customization/change-page-layout/2columns-product-small.png
    w: 990
    h: 990
    title: Two columns layout at product page
---

# Change page layout

> **Notice**
>
> This tutorial assumes that you already created [custom theme](../custom-theme/)
> based on `Swissup/argento-essence`.
>
> If you did not &mdash; [go ahead](../custom-theme/), it will take 15 minutes.

Let's change category page layout to 3columns and product layout
to 2columns with right sidebar.

 1. Create `catalog_category_view.xml` and `catalog_product_view.xml` files
    in the following directory:

    ```
    app/design/frontend/Local/argento-custom/Magento_Catalog/layout
    ```

 2. Add the following content to `catalog_category_view.xml` file and save it.

    ```xml
    <?xml version="1.0"?>
    <page layout="3columns" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    </page>
    ```

 3. Add the following content `catalog_product_view.xml` file and save it.

    ```xml
    <?xml version="1.0"?>
    <page layout="2columns-right" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    </page>
    ```

Clear Magento cache to see the result:

{% include gallery.html images=page.gallery class="scroll phone-up-1 tablet-up-2 photoswipe" %}
