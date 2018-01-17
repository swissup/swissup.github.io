---
layout: default
title: Ajaxpro Trobleshooting
description: >
    Magento2 module for ajaxcian
keywords: >
    magento ajax, magento ajax module, magento ajax call to block, magento ajax shopping cart, magento ajax cart pro
category: AjaxPro
---


# Issues

### ISSUE 1:

ERROR: cannot call methods on price Box prior to initialization; attempted to call method ‘option’

#### FIX:

Firstly, you can initialize the function named as (price Box) and then call the function (price Box).

#### CODE:

Navigate /var/www/html/magento/pub/static/frontend/Homnibus/argento-flat-custom/fr_FR/Magento_ConfigurableProduct/js/configurable.js 
line 83
In configurable.js, Replace the below code under the _initializeOptions: function () {

```js
    //priceBoxOptions = $(this.options.priceHolderSelector).priceBox('option').priceConfig || null;
    priceBoxOptions = $(this.options.priceHolderSelector).priceBox().priceBox('option', 'openOnFocus', true).priceConfig || null;
```

### ISSUE 2:
	
Always redirect to cart 

```bash
    php bin/magento config:show checkout/cart/redirect_to_cart
```
