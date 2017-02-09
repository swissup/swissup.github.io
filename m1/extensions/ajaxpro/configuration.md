---
layout: default
title: AjaxPro configuration
description: magento ajax module installation
keywords: " magento ajax, magento ajax module, magento ajax call to block, magento ajax shopping cart, magento ajax cart pro "
category: AjaxPro
---

# Configuration

- [General](#general-settings)
- [Effect](#effect)
- [Ajax cart](#ajax-cart)
- [Ajax product compare](#ajax-product-compare)
- [Ajax wishlist](#ajax-wishlist)
- [Ajax configurable products](#ajax-configurable-products)
- [Ajax product listing](#ajax-product-listing)

### General settings

![General](/images/m1/extensions/ajax-pro/configuration-general.png)

-   `Enable AjaxPro` - select **Yes** to enable Ajax Pro extension.
-   `Disable on Shopping Cart page` - select **Yes** to disable the extension on the shopping cart page.
-   `Disable on Mobile devices` - select **No** in case you want to enable the extension on mobile devices.
-   `Add Custom Login Form Block` - select **Yes** to enable the display of custom login block in top links block.

![General](/images/m1/extensions/ajax-pro/custom-login-block.png)

### Effect

![Effect configuration](/images/m1/extensions/ajax-pro/configuration-effect.png)

-   `Message window position` - please select Ajax Pro message window position. Possible values are Top, Middle and Bottom.
-   `Enable overlay window` - select **Yes** to enable overlay window.
-   `Overlay opacity (0-1)` - please specify the opacity for the overlay.
-   `Duration (fade delay)` - specify the time of fade delay.
-   `Message window opacity` - specify the opacity for Ajax Pro message window.
-   `Loading window message` - select **Yes** to load message window in ajax processing box.
-   `Hide message window after X seconds - please specify number of seconds, after which the message window will be hidden. When you select Yes in the Enable message window (in `Ajax cart settings`), you will be allowed to select dialog window types. So, please specify the period of time, after which the message window with selected before window type will be closed automatically.

### Ajax cart

![Ajax cart configuration](/images/m1/extensions/ajax-pro/configuration-ajax-cart.png)

-   `Enable` - select **Yes** to enable Ajax Pro `Add to cart` option.
-   `Enable message window` - select **Yes** to enable message window for `Add to cart`. Please notice, when you select `No`, you will not be allowed to select window types for adding product to the shopping cart. The item will be added directly to the cart and no dialog window will be displayed.
-   `Enable delete confirm` - select **Yes** to enable the display of pop-up confirm window when users press the button to remove the product from the cart.
-   `Add Custom Header Cart Block` - select **Yes** to enable the display of custom header cart block in the store header block.

![General](/images/m1/extensions/ajax-pro/custom-header-block.png)

-   `Blocks` - specify the name in layout of the block, where you want to enable `Add to Cart` block. **Note**: if you need to update some custom block after Ajax request, please add the block name to the option `Blocks` in AjaxPro configuration. You have to check the name of the block with a developer of custom unit. AjaxPro Blocks feature allows you to set up separate units, which are updated when you add the item to the cart, wishlist or compare list. You can update Cart block after adding items to the cart, Wishlist after adding items to Wishlist, etc. Please note, that you have to update only those blocks, that were changed after a specific action. For example, your cart will not be changed after adding products to Wishlist, so there's no need to update that.
-   `Add to cart dialog window type` - please select the window type for adding to cart. It supports **simple/configurable/grouped/bundle/virtual/downloadable** products. 
In case you select `Simple` value, the product in the cart will look like:

![Shopping cart window type](/images/m1/extensions/ajax-pro/simple-value.png)

In case you select Shopping Cart value, the product in the cart will look like:

![Shopping cart window type](/images/m1/extensions/ajax-pro/shopping-cart-value.png)

In case you select Extended Shopping Cart value, the product in the cart will look like:

![Shopping cart window type](/images/m1/extensions/ajax-pro/extended-shopping-cart-value.png)

In case you select Crosssell value, the product in the cart will look like:

![Shopping cart window type](/images/m1/extensions/ajax-pro/crossel-value.png)

### Ajax product compare

![Add to compare ajax block](/images/m1/extensions/ajax-pro/ajax-compare.png)

-   `Enable` - select **Yes** to enable Ajax Pro `Add to compare` option.
-   `Enable message window` - select **Yes** to enable message window for `Add to cart`.
-   `Enable delete confirm` - select **Yes** to enable the display of pop-up confirm window, when users press the button to remove the product from the cart.
-   `Blocks` - specify the name in layout of the block, where you want to enable `Add to Compare block`.

### Ajax wishlist

![Add to wishlist ajax block](/images/m1/extensions/ajax-pro/ajax-wishlist.png)

Fill in the fields in a similiar way to `Ajax product compare` section.

### Ajax configurable products 

![Ajax block on page with configurable products](/images/m1/extensions/ajax-pro/ajax-configurable-products.png)

Select **Yes** in order to set the Ajax block on pages with configurable products. 

### Ajax product listing

![Ajax product listing](/images/m1/extensions/ajax-pro/ajax-product-listing.png)

-   `Enable` - select **Yes** to enable Ajax product listing.
-   `Show products on` - please select the way of viewing products. Possible values are button and scrolling.

#### You can also check:

*   [Installation](../installation/)
*   [Changelog](../changelog/)
*   [Use Cases](../use-cases/)
*   [Support](https://swissuplabs.com/contacts/)
*   [Forum](https://swissuplabs.com/magento-forum/)