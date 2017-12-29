---
layout: default
title: Sold Together configuration
description:
keywords: >
  magento cross sells, magento related products, customer who bought
  also bought, frequently bought together, soldtogether
category: Sold Together
---

# Configuration

Go to `Admin > System > Configuration > Sold Together Pro`.

### General settings

![General settings](/images/m1/extensions/soldtogether/general.png)

In order to choose the best solution for your store, please follow our recommendations. If your store is new, we recommend you to turn off cron and select **Yes** in the `Create Order Reindex` fields. That will create new products relations right after your customers placed orders. If you are an owner of long-standing store with large amount of orders, you’d better **run manual reindex** in Sold Together admin interface.

Under "Reindex and Cron" you can find settings for reindex process. You can set number of days back from current date to analyze orders. You can set statuses of orders to process.

Module starts reindex cron job every week during night on Monday if reindex via cron is enabled.

### Frequently Bought Together block settings

![General settings](/images/m1/extensions/soldtogether/frequentlyboughtsettings.png)

-   `Enabled` - select **Yes** to enable Frequently Bought Together block on the product page.
-   `Count Products to Display` - specify the number of products to be displayed on the shopping cart page.
-   `Count Columns to Display` - specify the number of columns for products to be displayed.
-   `Add to Cart Checkboxes` - select **Yes** to show checkboxes.
-   `Enabled Amazon style` - select **Yes** to enable Amazon style.

![General settings](/images/m1/extensions/soldtogether/amazon-style.png)

### Customer Bought Together block settings

![General settings](/images/m1/extensions/soldtogether/customboughtsettings.png)

-   `Enabled` - select **Yes** to enable Customer Bought Together block on the product page.
-   `Count Products to Display` - specify the number of products to be displayed on the shopping cart page.
-   `Count Columns to Display` - specify the number of columns for products to be displayed.
-   `Add to Cart Checkboxes` - select **Yes** to show checkboxes.

### Email block settings

![General settings](/images/m1/extensions/soldtogether/email-block-settings.png)

Specify the number of products to be shown in every block in email after the order will be  submitted.

### Suggest page settings

Our extension comes together with Suggest page module, that allows to show related and linked products right after the customer adds a product to the cart.

![General settings](/images/m1/extensions/soldtogether/suggest-page.png)

Select **Yes** to show Frequently Bought Together block on suggest page after adding the product to shopping cart.

![General settings](/images/m1/extensions/soldtogether/block-on-suggest-page.png)

Select **Yes** to display Customers Bought Together block on suggest page after adding the product to shopping cart.

#### You can also check:

*   [Installation](../installation/)
*   [Integration](../integration/)
*   [Admin interfaces](../admin-interfaces/)
*   [Use cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)