---
layout: default
title: Change page layout at firecheckout page
description: How to add navigation/header/footer blocks at firecheckout page
keywords: >
    firecheckout layout, firecheckout header, firecheckout footer
category: Firecheckout
---

# Change page layout

> You will find how to add Navigation/Footer/Header block to the checkout page
> below.

> If you are not **Magento/luma** user, change file paths according to your
> theme path.
>
> Example: **Swissup/ArgentoFlat** for [ArgentoFlat](/m2/argento/) theme.

Firecheckout uses `checkout` layout by default. It's a Magento built-in layout,
which main purpose is to increase converstion rate. All elements are removed
from the checkout page, to prevent user ditraction from making a purchase.

However, sometimes you really need to show navigation/footer or top header panel.

Follow the steps below to achieve your needs:

 1. Create `firecheckout_index_index.xml` layout file in your theme:

    ```
    /app/design/frontend/Magento/luma/Swissup_Firecheckout/layout/firecheckout_index_index.xml
    ```

    And add the following content into it:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        layout="1column"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <move element="logo" destination="header-wrapper" before="-"/>

            <referenceBlock name="header.panel.wrapper" remove="true"/>
            <referenceBlock name="top.search" remove="true"/>
            <referenceBlock name="minicart" remove="true"/>
            <referenceBlock name="footer-container" remove="true"/>
            <referenceBlock name="copyright" remove="true"/>
        </body>
    </page>
    ```

 2. Create `_custom.less` styles, that will be [automatically included](../custom-css/)
    by firecheckout:

    ```
    /app/design/frontend/Magento/luma/Swissup_Firecheckout/web/css/_custom.less
    ```

    And add the following content into it:

    ```scss
    @media (min-width: 768px) {
        .firecheckout {
            .page-header .header.panel,
            .navigation {
                max-width: @firecheckout-page-wide__width;
            }

            // Show navigation block
            .nav-sections {
                display: block;
            }

            // Fix "Sign In" position
            .authentication-wrapper {
                margin-top: -130px; // Tune up this value for your theme
            }

            // ArgentoFlat fix
            header + .page-main {
                margin-top: 20px;
                .authentication-wrapper {
                    margin: -5px 0 10px;
                }
            }
        }
    }
    ```

 3. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout styles
    find pub/static var/view_preprocessed -type d -regex ".*Firecheckout.*css" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```

#### Result

![Firecheckout with header navigation](/images/m2/firecheckout/customization/change-page-layout/header-navigation.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Back to customization page](../)
