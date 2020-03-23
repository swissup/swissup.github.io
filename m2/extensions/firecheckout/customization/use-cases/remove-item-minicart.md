---
layout: default
title: remove item from the mini-cart on the checkout page
description: How to remove an item from the mini-cart?
keywords: remove item, mini-cart
category: Firecheckout
---

# Remove item from the mini-cart

Sometimes your customers encounter with cases like these:

- add a product to the cart by mistakes;

- or due to specific magento or module settings they get directly into the checkout page without being seen the cart page and not be able to edit the chosen products;

- or add many different products to the cart and then have an opportunity to remove an excess product, etc.

    So how they can remove an item from the mini-cart section directly on the checkout page?


 1. Create [custom.js file](/m2/extensions/firecheckout/customization/custom-js/)
    in your active theme with following content:
    ```js
    define([
        'Magento_Ui/js/lib/view/utils/async'
    ], function($) {
        'use strict';

        $.async('.content.minicart-items .details-qty', function (el) {     // add an icon to the each item content
            $(el).after(
                '<div class="remove item">' +
                    '<a href="#" title="Remove Item" class="remove-item">' +
                        '<i class="icon-trash"></i>' +
                    '</a>' +
                '</div>'
            );

            $(el).siblings('.remove.item').find('.remove-item').click(function (event){
                var item = event.currentTarget;
                $(item).parents(".product-item-details").find("input[type='number']").val(0).change(); // change the quantity to "0"
            });
        });

    })
    ```

 2. Run "Deploy static content" command:

    ```bash
    cd <magento_root>

    # remove previously deployed firecheckout files
    find pub/static -type d -regex ".*Firecheckout.*js" -exec rm -rf {} \;

    # run deployment command
    bin/magento setup:static-content:deploy
    ```
#### Result

    ![Remove Item](/images/m2/firecheckout/remove-item/remove-item.png)

##### Next up

 -  [Back to customization page](/m2/extensions/firecheckout/customization/)
 -  [Back to home](/m2/extensions/firecheckout/)
