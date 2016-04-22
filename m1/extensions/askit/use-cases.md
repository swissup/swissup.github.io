---
layout: default
title: AskIt Use Cases
description: magento product questions askit Use Cases
keywords: " magento product questions module, product questions on magento
product page, magento askit module installation "
category: AskIt
---

# AskIt Use Cases

-   [How to place discussion block on CMS page](#how-to-place-discussion-block-on-cms-page)
-   [How to place discussion block on categories pages](#how-to-place-discussion-block-on-categories-pages)
-   [Using code for changing location of discussion block with layout XML file](#using-code-for-changing-location-of-discussion-block-with-layout-xml-file)

___

### How to place discussion block on CMS page

![CMS Discussion](/images/m1/extensions/askit/askit9.png)

Please go to `Admin > CMS > Pages`. After you configured the **Page information** tab,
follow next steps:

1.  At **Information** tab select **Content fieldset**.
2.  Press **Insert Widget** button.
3.  Select **Recently Askit discussion** from drop down list.
    ![Widget](/images/m1/extensions/askit/askit8.png)
4.  Click on **Insert Widget**.
5.  Click **Save Page** at the upper right corner of the page.

![Widget](/images/m1/extensions/askit/askit10.png)

You will have `Item Type` - **Page** in `Admin > Templates Master > Askit Questions`
and the **name** of your CMS page in **Item** _(i.e. About Us)_.

### How to place discussion block on categories pages

![Category](/images/m1/extensions/askit/askit12.png)

-   Please go to `Admin > CMS` and create **static block**. Then we recommend to place
    **Askit discussion** widget into the **CMS static block**.

    ![Widget](/images/m1/extensions/askit/askit8.png)

-   For example we can name it _"categoriesdiscussion"_. After that please go to
    `Admin > Catalog > Manage Categories`.
-   Click on **Display Settings** tab and in the **CMS Block field** select **static block**
    with categories, that you have created before.

    ![Widget](/images/m1/extensions/askit/askit11.png)

### Using code for changing location of discussion block with layout XML file

In order to change, please connect to **FTP** server and find **Magento** files.
Then follow the `app/design/frontend/base/default/layout/tm/askit.xml`.
Open file to be edited.Search `<catalog_product_view>`
branch and make changes in **reference** name.

-   One way is for default **Magento** layout:

    ```xml
     <reference name="product.info.additional">
        <block type="askit/discussion" name="askit" template="tm/askit/empty.phtml" before="-" >
            <action method="setTemplate" ifconfig="askit/general/productBlockView">
                <template>tm/askit/list.phtml</template>
            </action>
        </block>
    </reference>
    ```

-   Other way is for **product tabs**:

    ```xml
    <reference name="product.info.tabs">
        <action method="addTab" translate="title" module="askit" ifconfig="askit/general/enabled">
            <alias>askit_tabbed</alias>
            <title>Questions</title>
            <block>askit/list</block>
            <template>tm/askit/list.phtml</template>
        </action>
    </reference>
    ```

___

#### You can also check:

*   [Installation](../installation/)
*   [General configurable options](../general-configurable-options/)
*   [Admin interfaces](../admin-interfaces/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)
