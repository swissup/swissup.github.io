---
layout: default
title: Sold Together use cases
description:
keywords: >
  magento cross sells, magento related products, customer who bought
  also bought, frequently bought together, soldtogether
category: Sold Together
---

# Use cases

 - [Using code for changing location of Sold Together block with layout XML file.](#using-code-for-changing-location-of-sold-together-block-with-layout-xml-file.)
 - [Using code in phtml file to display Sold Together block.](#using-code-in-phtml-file-to-display-sold-together-block.)
 - [Placing blocks with related products in the shopping cart Ajax Pro 3.0.](#placing-blocks-with-related-products-in-the-shopping-cart-ajax-pro-3.0.)
 - [Adding blocks to the email after the order has been submitted.](#adding-blocks-to-the-email-after-the-order-has-been-submitted.)

### Using code for changing location of Sold Together block with layout XML file. 

Please connect to FTP server and find Magento files.Then follow the `App>design>frontend>base>default>layout>tm>sold together.xml`. Open file to be edited. Search <catalog_product_view>branch and make changes in reference name.

```xml
<catalog_product_view>
    <reference name="content">
        <block type="soldtogether/order" name="product.info.soldtogetherorder" before="-">
            <action method="setTemplate" ifconfig="soldtogether/general/enabled"><template>tm/soldtogether/order.phtml</template></action>
        </block>
        <block type="soldtogether/customer" name="product.info.soldtogethercustomer" after="product.info.soldtogetherorder">
            <action method="setTemplate" ifconfig="soldtogether/general/enabled"><template>tm/soldtogether/customer.phtml</template></action>
        </block>
    </reference>
</catalog_product_view>
```

### Using code in phtml file to display Sold Together block.

Please apply the following code in phtml file on the product page.

```php
<?php echo $this->getLayout()->createBlock('soldtogether/order')->setTemplate('tm/soldtogether/order.phtml')->toHtml(); ?>
```

### Placing blocks with related products in the shopping cart Ajax Pro 3.0.

Go to `Admin > System > Configuration > AjaxPro` and follow next steps:

![General settings](/images/m1/extensions/soldtogether/use-case.png)

 -  `Enable` - select **Yes**.
 -  `Enable message window` - select **Yes**.
 -  `Add to cart dialog window type` select **Suggest page content** from drop down list.

### Adding blocks to the email after the order has been submitted.

If you are using Magento 1.9.2.2 version or later, you can add Sold Together blocks to the confirmation email about new order submission.

Before actions mentioned below, please check the **soldtogether/email_customer** and **soldtogether/email_order** block in `System > Permissions > Blocks` page. If you don't see this block in the grid, you have to add it manually by using **Add New Block** button.

Next steps to follow:

 1. Go `System > Transactional Emails` and click **Add New Template**. Look at `Load Default template` fieldset. In the `Template` drop down please select a **New Order** value. Specify your Locale. Press **Load Template** button.
 2. You can see the whole code of template content. In order to add block with cross-selling products, please place the following code anywhere you want:

    ```html
    {% raw %}{{block type='soldtogether/email_customer' area='frontend' order=$order}}
    {{block type='soldtogether/email_order' area='frontend' order=$order}}{% endraw %}
    ```

 3. Specify the name for the template and save.

 4. Go `System > Configuration > Sales Emails` and look at **Order** fieldset. In `New Order confirmation template` drop down please select the template you've created before and save.

**Note**: when you create a confirmation email for quest, you have to select a `New Order For Guest value` in step **#1**. Within the **step #4** please make changes in a `New Order Confirmation Template For Guest` field.

#### You can also check:

*   [Installation](../installation/)
*   [Integration](../integration/)
*   [Admin interfaces](../admin-interfaces/)
*   [Configuration](../configuration/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)