---
layout: default
title: Move order totals below cart items
description: How to move order totals below cart items block
keywords: >
    magento2 order totals, magento2 order summary
category: Firecheckout
---

# Move order totals below cart items

> If you are not **Magento/luma** user, change file paths according to your
> theme path.
>
> Example: **Swissup/ArgentoFlat** for [ArgentoFlat](/m2/argento/) theme.

 1. Create `firecheckout_index_index.xml` layout file in your theme:

    ```
    /app/design/frontend/Magento/luma/Swissup_Firecheckout/layout/firecheckout_index_index.xml
    ```

    And add the following content into it:

    ```xml
    <?xml version="1.0"?>
    <page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
        <body>
            <referenceBlock name="checkout.root">
                <arguments>
                    <argument name="jsLayout" xsi:type="array">
                        <item name="components" xsi:type="array">
                            <item name="checkout" xsi:type="array">
                                <item name="children" xsi:type="array">
                                    <item name="sidebar" xsi:type="array">
                                        <item name="children" xsi:type="array">
                                            <item name="summary" xsi:type="array">
                                                <item name="children" xsi:type="array">
                                                    <item name="totals" xsi:type="array">
                                                        <item name="sortOrder" xsi:type="string">1</item>
                                                    </item>
                                                    <item name="cart_items" xsi:type="array">
                                                        <item name="sortOrder" xsi:type="string">0</item>
                                                    </item>
                                                </item>
                                            </item>
                                        </item>
                                    </item>
                                </item>
                            </item>
                        </item>
                    </argument>
                </arguments>
            </referenceBlock>
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
            .opc-block-summary {
                .items-in-cart {
                    margin-bottom: 15px;
                }
                .table-totals {
                    border-top: none;
                    margin-bottom: 25px;
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

![Firecheckout with header navigation](/images/m2/firecheckout/customization/move-order-totals-below-cart-items/firecheckout.png)

##### Next up

- [List of firecheckout less variables](../less-variables/)
- [Add header/navigation block](../change-page-layout/)
- [Back to customization page](../)
