---
layout: default
title: Adding prices to magento swatches
description: Adding prices to magento swatches
keywords: js, prices, swatches
category: Argento
---

# Adding prices to magento swatches

![Swatches](/images/m2/argento/customization/swatches.png){:class="noborder"}

  - [Create](http://docs.swissuplabs.com/m2/argento/customization/custom-js/) `argento-custom.js`
  - Add following javascript code there

    ```js

    define([
        'jquery',
        'underscore',
        'priceUtils',
        'domReady!'
    ], function($, _, priceUtils) {

        function addPricesToOptions() {
            if (!$('[data-role=swatch-options]').first().data('mageSwatchRenderer')) {
                return setTimeout(addPricesToOptions, 500);
            }

            var config = $('[data-role=swatch-options]').first()
                    .data('mageSwatchRenderer').options.jsonConfig;

            $('.swatch-attribute').each(function () {
                var attributeId = $(this).attr('attribute-id');
                $('.swatch-option', this).each(function () {
                    var optiondId = $(this).attr('option-id');
                    var index = _.findKey(config.index, function(value) {
                        return value[attributeId] == optiondId;
                    });
                    this.innerHTML += ' <span class="price">' +
                        priceUtils.formatPrice(
                            config.optionPrices[index].finalPrice.amount,
                            config.priceFormat
                        ) +
                        '</span>';
                });
            });
        }

        if ($('[data-role=swatch-options]').length) {
            addPricesToOptions();
        }
    });


    ```
  - Make static content redeploy:

    ```
    php bin/magento setup:static-content:deploy
    ```